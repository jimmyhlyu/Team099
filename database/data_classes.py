from dataclasses import dataclass, field
from datetime import datetime, timedelta
from .account_status import AccountType


@dataclass
class User:
    """Class for keeping track of users."""

    id_: str
    name: str
    account_status: AccountType
    network_id: str
    social_preference_id: str

    lead_conversion_rate: int
    avg_lead_quality: float
    opportunity_conversion_rate: float
    avg_opportunity_quality: float
    close_rate: float
    win_rate: float
    lose_rate: float
    vetting_accuracy: float

    @staticmethod
    def from_dict(source):
        return User(
            source['id'],
            source['name'],
            source['account_status'],
            source['network_id'],
            source['social_preference_id'],
            source['lead_conversion_rate'],
            source['avg_lead_quality'],
            source['opportunity_conversion_rate'],
            source['avg_opportunity_quality'],
            source['close_rate'],
            source['win_rate'],
            source['lose_rate'],
            source['vetting_accuracy'],
        )

    def to_dict(self):
        return {
            'id': self.id_,
            'name': self.name,
            'account_status': self.account_status,
            'network_id': self.network_id,
            'social_preference_id': self.social_preference_id,
            'lead_conversion_rate': self.lead_conversion_rate,
            'avg_lead_quality': self.avg_lead_quality,
            'opportunity_conversion_rate': self.opportunity_conversion_rate,
            'avg_opportunity_quality': self.avg_opportunity_quality,
            'close_rate': self.close_rate,
            'win_rate': self.win_rate,
            'lose_rate': self.lose_rate,
            'vetting_accuracy': self.vetting_accuracy,
        }


@dataclass
class Connection:
    """Class for keeping track of connections."""

    id_: str
    name: str
    network_id: str
    sex: str
    age: int
    date_first_met: datetime

    priority: int  # ranking of expected_value in the network
    expected_value: float  # probability_of_success * value_to_user

    probability_of_success: float  # statistical value (internal and external factors)
    value: float  # user-centric value

    # value = metric_weights * metric_scores

    charm: float
    closeness: float
    companionship: float
    usefulness: float
    how_much_they_like_us: float
    non_toxicity: float
    responsiveness: float  # includes proactiveness
    external_difficulty: float
    nexus: bool
    popularity: str
    time_spent_together: timedelta

    @staticmethod
    def from_dict(source):
        return Connection(
            source['id'],
            source['name'],
            source['network_id'],
            source['sex'],
            source['age'],
            source['date_first_met'],
            source['priority'],
            source['expected_value'],
            source['probability_of_success'],
            source['value'],
            source['charm'],
            source['closeness'],
            source['companionship'],
            source['usefulness'],
            source['how_much_they_like_us'],
            source['non_toxicity'],
            source['responsiveness'],
            source['external_difficulty'],
            source['nexus'],
            source['popularity'],
            source['time_spent_together']
        )

    def to_dict(self):
        return {
            'id': self.id_,
            'name': self.name,
            'network_id': self.network_id,
            'sex': self.sex,
            'age': self.age,
            'date_first_met': self.date_first_met,
            'priority': self.priority,
            'expected_value': self.expected_value,
            'probability_of_success': self.probability_of_success,
            'value': self.value,
            'charm': self.charm,
            'closeness': self.closeness,
            'companionship': self.companionship,
            'usefulness': self.usefulness,
            'how_much_they_like_us': self.how_much_they_like_us,
            'non_toxicity': self.non_toxicity,
            'responsiveness': self.responsiveness,
            'external_difficulty': self.external_difficulty,
            'nexus': self.nexus,
            'popularity': self.popularity,
            'time_spent_together': self.time_spent_together,
        }


@dataclass
class SocialPreference:
    id_: str
    user_id: str
    last_confirmed: timedelta
    sector_weights: dict = field(default_factory=lambda: {'friendship': 1.0, 'relationship': 1.0, 'career': 1.0})
    metric_weights: dict = field(default_factory=lambda: {
        'charm': 1.0,
        'closeness': 1.0,
        'companionship': 1.0,
        'usefulness': 1.0,
        'how_much_they_like_us': 1.0,
        'non_toxicity': 1.0
    })


