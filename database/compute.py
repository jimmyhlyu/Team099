from datetime import datetime, timedelta

import pandas as pd
import numpy as np
from database.data_classes import User, Connection
from database.helpful_classes import db

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


def add_user(user_dict: dict):
    user = User.from_dict(user_dict)
    db.collection('users').document(user.id).set(user.to_dict())


def delete_user(user_id: str):
    # delete user's connections
    docs = db.collection('connectionHistory').where('connection.user_id', '==', user_id).stream()

    for doc in docs:
        doc.reference.delete()

    # delete user
    db.collection('users').document(user_id).delete()


def update_user(user_id: str, params_dict: dict):
    db.collection('users').document(user_id).update({f'{k}': v for k, v in params_dict.items()})


def get_latest_weights(user_id: str):
    user = db.collection('users').where('id', '==', user_id).get()
    sector_weights = user.social_preference['sector_weights']
    metric_weights = user.social_preference['metric_weights']
    return sector_weights, metric_weights


def add_connection(user_id: str, connection_dict: dict):
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
def update_on_survey_submit(connection_id: str, response: dict, inplace=False):
    update_connection(connection_id, {
        'status': response['status'],
        'hours_spent_together': firestore.firestore.Increment(response['additional_hours']),
        'metrics': Connection.response_to_metrics(response)
    }, inplace=inplace)


def update_connection(connection_id: str, params: dict, inplace=False):
    docs = db.collection('connectionHistory').where('connection.id', '==', connection_id).stream()
    doc = max(docs, key=lambda x: x.to_dict()['timestamp'])

    if inplace:
        changes = {f'connection.{k}': v for k, v in params.items()}
        changes.update({'timestamp': firestore.firestore.SERVER_TIMESTAMP})

        db.collection('connectionHistory').document(f'{doc.id}').update(changes)
        return

    data = doc.to_dict()['connection']
    for k, v in params.items():
        data[k] = v

    db.collection('connectionHistory').document(f'{doc.id}').add({
        f'connection': data,
        'timestamp': firestore.firestore.SERVER_TIMESTAMP
    })


def get_insights_timeline(user_id: str, connection_id: str):
    docs = db.collection('connectionHistory').where('connection.id', '==', connection_id).stream()

    connections = pd.DataFrame([doc['connection'] for doc in docs])
    connections['timestamp'] = [doc['timestamp'] for doc in docs]
    connections = connections.set_index('timestamp').sort_index()

    sector_weights, metric_weights = get_latest_weights(user_id)
    metrics = pd.json_normalize(connections[['metrics']])
    most_recent = connections[-1]

    metrics = metrics.mul(metric_weights)
    sector_weight = sector_weights[most_recent['sector']]

    connections['value'] = \
        metrics[['charm', 'usefulness', 'nexus', 'toxicity']].rolling(3).mean().mean() * sector_weight
    connections['efficiency'] = \
        metrics[['how_much_they_like_us', 'companionship', 'closeness']].rolling(3).mean().mean()
    connections['intensity'] = 1 - 1 / metrics.rolling('30d', min_periods=1).count()

    insights = connections[['id', 'value', 'efficiency', 'intensity']].reset_index(drop=False)

    return insights.to_json()
