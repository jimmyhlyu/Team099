from datetime import datetime, timedelta
from typing import Tuple

import pandas as pd
import numpy as np
from google.cloud.firestore_v1 import DocumentSnapshot

from database.data_classes import User, Connection
from database.helpful_classes import db
from json import loads, dumps
from firebase_admin import firestore
from flask import Flask
from flask import request
from markupsafe import escape
# Cors enable for Local testing
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# APi created by Mason
@cross_origin()
@app.route('/', methods=['GET', 'POST'])
def hello() -> str:
    return "Connecting to flask. Result: success"


@cross_origin()
@app.route('/user/get/<string:user_id>', methods=['GET'])
def get_user(user_id: str) -> str:
    return dumps(db.collection('users').document(user_id).get().to_dict())


@app.route('/user/add/<string:user_dict>', methods=['POST'])
def add_user(user_dict: dict | str):
    if isinstance(user_dict, str):
        user_dict = loads(user_dict)

    user = User.from_dict(user_dict)
    db.collection('users').document(user.id).set(user.to_dict())


@app.route('/user/delete/<string:user_id>', methods=['DELETE'])
def delete_user(user_id: str):
    # delete user's connections
    docs = db.collection('connectionHistory').where('connection.user_id', '==', user_id).stream()

    for doc in docs:
        doc.reference.delete()

    # delete user
    db.collection('users').document(user_id).delete()


@app.route('/user/update/<string:user_id>/<string:params_dict>', methods=['PATCH'])
def update_user(user_id: str, params_dict: dict | str):
    if isinstance(params_dict, str):
        params_dict = loads(params_dict)

    db.collection('users').document(user_id).update({f'{k}': v for k, v in params_dict.items()})


def get_latest_weights(user_id: str) -> Tuple[dict, dict]:
    user = db.collection('users').where('id', '==', user_id).get()[0].to_dict()
    sector_weights = user['social_preference']['sector_weights']
    metric_weights = user['social_preference']['metric_weights']
    return sector_weights, metric_weights


@app.route('/connection/get/<string:connection_id>', methods=['GET'])
def get_connection(connection_id: str) -> str:
    return dumps(_get_connection(connection_id).to_dict())


def _get_connection(connection_id: str) -> DocumentSnapshot:
    docs = db.collection('connectionHistory').where('connection.id', '==', connection_id).stream()
    return max(docs, key=lambda x: x.to_dict()['timestamp'])


@app.route('/connection/get/from_user/<string:user_id>', methods=['GET'])
def get_connections_from(user_id: str) -> str:
    docs = db.collection('connectionHistory').where('connection.user_id', '==', user_id).stream()
    connections = {doc.id: doc.to_dict() for doc in docs}
    return dumps(connections)


@app.route('/connection/add/<string:user_id>/<string:connection_dict>', methods=['POST'])
def add_connection(user_id: str, connection_dict: dict | str):
    if isinstance(connection_dict, str):
        connection_dict = loads(connection_dict)

    print(db.collection('users').document(user_id).get().to_dict())
    user = User.from_dict(db.collection('users').document(user_id).get().to_dict())
    connection = Connection.from_dict(connection_dict)

    # link user to connection
    user.add_connection(connection)

    # update user in database
    update_user(user_id, {'connection_ids': user.to_dict()['connection_ids']})

    # add connection in database
    db.collection('connectionHistory').document(connection.id).set({
        'connection': connection.to_dict(),
        'timestamp': firestore.firestore.SERVER_TIMESTAMP
    })


@app.route('/connection/delete/<string:user_id>/<string:connection_id>', methods=['DELETE'])
def delete_connection(user_id: str, connection_id: str):
    user = User.from_dict(db.collection('users').document(user_id).get().to_dict())
    docs = db.collection('connectionHistory').where('connection.id', '==', connection_id).stream()

    for doc in docs:
        # remove reference to connection in user
        user.remove_connection(Connection.from_dict(doc.to_dict()['connection']))

        # delete connection
        doc.reference.delete()
    db.collection('users').document(user_id).update({'connection_ids': user.connection_ids})


# pending deprecation
@app.route('/connection/update/on_survey_submit/<string:connection_id>/<string:answers>',
           methods=['PATCH'])
def update_on_survey_submit(connection_id: str, answers: dict | str, inplace=False):
    if isinstance(answers, str):
        answers = loads(answers)
    if isinstance(inplace, int):
        inplace = bool(inplace)

    update_connection(connection_id, {
        'status':  ['status'],
        'hours_spent_together': firestore.firestore.Increment(answers['additional_hours']),
        'metrics': Connection.response_to_metrics(answers)
    }, inplace=inplace)
    return "Updated"


@app.route('/connection/update/<string:connection_id>/<string:params>/<int:inplace>', methods=['PATCH'])
def update_connection(connection_id: str, params: dict | str, inplace=False):
    if isinstance(params, str):
        loads(params)
    if isinstance(inplace, int):
        inplace = bool(inplace)

    doc = _get_connection(connection_id)

    if inplace:
        changes = {f'connection.{k}': v for k, v in params.items()}
        changes.update({'timestamp': firestore.firestore.SERVER_TIMESTAMP})

        db.collection('connectionHistory').document(f'{doc.id}').update(changes)
        return

    data = doc.to_dict()['connection']
    for k, v in params.items():
        data[k] = v

    db.collection('connectionHistory').document(f'{doc.id}').set({
        f'connection': data,
        'timestamp': firestore.firestore.SERVER_TIMESTAMP
    })


@app.route('/connection/insights/any/<string:user_id>/<string:connection_history_id>', methods=['GET'])
def get_insight(user_id: str, connection_id: str, connection_history_id: str):
    insights = _get_insights_timeline(user_id, connection_id)
    return insights[insights['history_id'] == connection_history_id].to_json()


@app.route('/connection/insights/timeline/<string:user_id>/<string:connection_id>', methods=['GET'])
def get_insights_timeline(user_id: str, connection_id: str):
    return _get_insights_timeline(user_id, connection_id).to_json()


def _get_insights_timeline(user_id: str, connection_id: str) -> pd.DataFrame:
    docs = db.collection('connectionHistory').where('connection.id', '==', connection_id).stream()

    connection_history = []
    history_ids = []
    timestamps = []

    for doc in docs:
        data = doc.to_dict()
        connection_history.append(data['connection'])
        history_ids.append(doc.id)
        timestamps.append(data['timestamp'])

    connections = pd.DataFrame(connection_history)
    connections['history_id'] = history_ids
    connections['timestamp'] = timestamps
    connections = connections.set_index('timestamp').sort_index()

    sector_weights, metric_weights = get_latest_weights(user_id)
    metrics = pd.json_normalize(connections['metrics'])
    most_recent = connections.iloc[-1, :]

    metrics = metrics.mul(metric_weights)
    sector_weight = sector_weights[most_recent['sector'].lower()]

    connections['value'] = \
        metrics[['charm', 'usefulness', 'nexus', 'toxicity']].rolling(3).mean().mean() * sector_weight
    connections['efficiency'] = \
        metrics[['how_much_they_like_us', 'companionship', 'closeness']].rolling(3).mean().mean()

    connections['value'] = connections['value'].fillna(0)
    connections['efficiency'] = connections['efficiency'].fillna(0.5)

    try:
        connections['intensity'] = 1 - 1 / metrics.rolling('10d').count()
    except ValueError:
        connections['intensity'] = 0.5

    return connections[['history_id', 'value', 'efficiency', 'intensity']].reset_index(drop=False)


