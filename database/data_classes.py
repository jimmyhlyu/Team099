# This file is written by Zhehong Zhang.
# Usage of the whole or part of this file without expressed permission from the original author is strictly prohibited.


from dataclasses import dataclass, field
from datetime import datetime, timedelta
from .helpful_enums import AccountStatus, ConnectionStatus
from uuid import uuid4, UUID


@dataclass
class User:
    """Class for keeping track of users."""

    id_: str = field(default_factory=lambda: str(uuid4()))
    name: str = None
    account_status: str = 'BASIC'
    connection_ids: [str] = field(default_factory=lambda: [])
    social_preference: dict = field(default_factory=lambda: {
        'last_edited': datetime.today(),
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
            'toxicity': -1.0
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
    def from_dict(source):
        return User(**source)

    def to_dict(self):
        return {
            'id': self.id_,
            'name': self.name,
            'account_status': self.account_status,
            'connection_ids': self.connection_ids,
            'social_preference': self.social_preference,
            'stats': self.stats,
        }

    def add_connection(self, *connections):
        for connection in connections:
            connection.user_id = self.id_
            self.connection_ids.append(connection.id_)


@dataclass
class Connection:
    """Class for keeping track of connections."""

    id_: str = field(default_factory=lambda: str(uuid4()))
    name: str = None
    status: str = 'LEAD'
    user_id: str = None
    sex: str = None
    age: int = 0

    priority: int = 0  # ranking of expected_value in the network
    expected_value: float = 0  # probability_of_success * value
    probability_of_success: float = 0.5  # statistical value (internal and external factors)
    value: float = 0  # user-centric value = metric_weights * metric_scores

    date_first_met: datetime = datetime.today()
    hours_spent_together: float = 0
    metrics: dict = field(default_factory=lambda: {
        'charm': 0,
        'closeness': 0,
        'companionship': 0,
        'usefulness': 0,
        'how_much_they_like_us': 0,
        'toxicity': 0,
        'responsiveness': 0,  # includes proactiveness
        'external_difficulty': 0,
        'nexus': 0,
        'popularity': 0,
    })

    def __post_init__(self):
        if self.status not in [t.name for t in ConnectionStatus]:
            raise ValueError('invalid connection type')

    @staticmethod
    def from_dict(source):
        return Connection(**source)

    def to_dict(self):
        return {
            'id': self.id_,
            'name': self.name,
            'status': self.status,
            'user_id': self.user_id,
            'sex': self.sex,
            'age': self.age,
            'priority': self.priority,
            'expected_value': self.expected_value,
            'probability_of_success': self.probability_of_success,
            'value': self.value,
            'date_first_met': self.date_first_met,
            'hours_spent_together': self.hours_spent_together,
            'metrics': self.metrics,
        }
