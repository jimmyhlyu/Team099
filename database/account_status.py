from enum import Enum, auto


class AccountType(Enum):
    BASIC = auto()
    PREMIUM = auto()
    MODERATOR = auto()
    DEVELOPER = auto()
    ADMIN = auto()
