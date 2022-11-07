# This file is written by Zhehong Zhang.
# Usage of the whole or part of this file without expressed permission from the original author is strictly prohibited.


from dataclasses import dataclass, field
from datetime import datetime, timedelta
from typing import List, Dict

import numpy as np

from .helpful_enums import AccountStatus, ConnectionStatus, Sector, Gender
from uuid import uuid4, UUID


@dataclass
class User:
    """Class for keeping track of users."""

    id: str = field(default_factory=lambda: str(uuid4()))
    name: str = None
    account_status: str = 'BASIC'
    connection_ids: [str] = field(default_factory=lambda: [])
    social_preference: dict = field(default_factory=lambda: {
        # 'last_edited': datetime.today(),
        'sector_weights': {
            'friendship': 1.0,
            'relationship': 1.0,
            'career': 1.0
        },
        'metric_weights': {
            'charm': 1.0,
            'closeness': 1.0,
            'companionship': 1.0,
            'usefulness': 1.0,
            'how_much_they_like_us': 1.0,
            'toxicity': -1.0,
            'nexus': 1.0,
        }
    })
    stats: dict = field(default_factory=lambda: {
        'lead_conversion_rate': 0,
        'avg_lead_quality': 0,
        'opportunity_conversion_rate': 0,
        'avg_opportunity_quality': 0,
        'close_rate': 0,
        'win_rate': 0,
        'lose_rate': 0,
        'vetting_accuracy': 0,
    })

    def __post_init__(self):
        if self.account_status not in [t.name for t in AccountStatus]:
            raise ValueError('invalid account status')

    @staticmethod
    def from_dict(source: dict):
        return User(**source)

    def to_dict(self) -> dict:
        return {
            'id': self.id,
            'name': self.name,
            'account_status': self.account_status,
            'connection_ids': self.connection_ids,
            'social_preference': self.social_preference,
            'stats': self.stats,
        }

    def add_connection(self, connection):
        connection.user_id = self.id
        self.connection_ids.append(connection.id)

    def remove_connection(self, connection):
        connection.user_id = None
        self.connection_ids.remove(connection.id)


@dataclass
class Connection:
    """Class for keeping track of connections."""

    id: str = field(default_factory=lambda: str(uuid4()))
    timestamp: datetime = datetime.now()
    name: str = None
    status: str = 'LEAD'
    user_id: str = None
    gender: str = None
    age: int = 0
    sector: str = 'friendship'

    efficiency: float = 0
    expected_value: float = 0  # probability_of_success * value

    date_first_met: datetime = datetime.today()
    hours_spent_together: float = 0
    # raw_metrics: dict = field(default_factory=lambda: {
    #     'charm': 0,
    #     'closeness': 0,
    #     'companionship': 0,
    #     'usefulness': 0,
    #     'how_much_they_like_us': 0,
    #     'toxicity': 0,
    #     'responsiveness': 0,  # includes proactiveness
    #     'external_difficulty': 0,
    #     'nexus': 0,
    # })
    metrics: dict = field(default_factory=lambda: {
        'charm': .0,
        'closeness': .0,
        'companionship': .0,
        'usefulness': .0,
        'how_much_they_like_us': .0,
        'toxicity': .0,
        'nexus': .0,
    })

    def __post_init__(self):
        if self.status not in [t.name for t in ConnectionStatus]:
            raise ValueError('invalid connection type')
        if self.sector not in [s.name for s in Sector]:
            raise ValueError('invalid sector')
        if self.gender not in [s.name for s in Gender]:
            raise ValueError('invalid gender')

    @staticmethod
    def from_dict(source: dict):
        return Connection(**source)

    def to_dict(self) -> dict:
        return {
            'id': self.id,
            'name': self.name,
            'status': self.status,
            'user_id': self.user_id,
            'gender': self.gender,
            'age': self.age,
            'sector': self.sector,
            'efficiency': self.efficiency,
            'expected_value': self.expected_value,
            'date_first_met': self.date_first_met,
            'hours_spent_together': self.hours_spent_together,
            'metrics': self.metrics,
        }

    @staticmethod
    def response_to_metrics(response: dict) -> dict:
        return {
                'charm': int(response['charm']),
                'closeness': int(response['closeness']),
                'companionship': int(response['companionship']),
                'usefulness': int(response['usefulness']),
                'how_much_they_like_us': int(response['attraction']),
                'toxicity': int(response['toxicity']),
                'nexus': int(response['nexus']),
            }