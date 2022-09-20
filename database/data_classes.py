from dataclasses import dataclass, field
from datetime import datetime, timedelta
from .account_status import AccountType
from uuid import uuid4, UUID


@dataclass
class User:
    """Class for keeping track of users."""
    
    name: str
    account_status: AccountType
    network_id: UUID
    social_preference_id: UUID

    id_: UUID = field(default_factory=lambda: uuid4())
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

    @staticmethod
    def from_dict(source):
        return User(**source)

    def to_dict(self):
        return {
            'name': self.name,
            'account_status': self.account_status,
            'network_id': self.network_id,
            'social_preference_id': self.social_preference_id,
            'id': self.id_,
            'stats': self.stats,
        }


@dataclass
class Connection:
    """Class for keeping track of connections."""
    
    name: str
    network_id: UUID
    sex: str
    age: int

    id_: UUID = field(default_factory=lambda: uuid4())
    date_first_met: datetime = datetime.today()
    hours_spent_together: float = 0

    priority: int = 0  # ranking of expected_value in the network
    expected_value: float = 0  # probability_of_success * value_to_user

    probability_of_success: float = 0.5  # statistical value (internal and external factors)
    value: float = 0  # user-centric value

    # value = metric_weights * metric_scores
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

    @staticmethod
    def from_dict(source):
        return Connection(**source)

    def to_dict(self):
        return {
            'name': self.name,
            'network_id': self.network_id,
            'sex': self.sex,
            'age': self.age,
            'id': self.id_,
            'date_first_met': self.date_first_met,
            'hours_spent_together': self.hours_spent_together,
            'priority': self.priority,
            'expected_value': self.expected_value,
            'probability_of_success': self.probability_of_success,
            'value': self.value,
            'metrics': self.metrics,
        }


@dataclass
class SocialPreference:
    user_id: UUID
    last_edited: datetime = datetime.today()
    id_: UUID = field(default_factory=lambda: uuid4())
    sector_weights: dict = field(default_factory=lambda: {'friendship': 1.0, 'relationship': 1.0, 'career': 1.0})
    metric_weights: dict = field(default_factory=lambda: {
        'charm': 1.0,
        'closeness': 1.0,
        'companionship': 1.0,
        'usefulness': 1.0,
        'how_much_they_like_us': 1.0,
        'toxicity': -1.0
    })

    @staticmethod
    def from_dict(source):
        return SocialPreference(**source)

    def to_dict(self):
        return {
            'id': self.id_,
            'user_id': self.user_id,
            'last_edited': self.last_edited,
            'sector_weights': self.sector_weights,
            'metric_weights': self.metric_weights,
        }


