from enum import Enum, auto


class AccountStatus(Enum):
    BASIC = auto()
    PREMIUM = auto()
    MODERATOR = auto()
    DEVELOPER = auto()
    ADMIN = auto()


class ConnectionStatus(Enum):
    LEAD = auto()
    OPPORTUNITY = auto()
    CLOSED_WIN = auto()
    CLOSED_LOST = auto()
