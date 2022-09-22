# This file is written by Zhehong Zhang.
# Usage of the whole or part of this file without expressed permission from the original author is strictly prohibited.


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


class Sector(Enum):
    FRIENDSHIP = auto()
    RELATIONSHIP = auto()
    CAREER = auto()


class Gender(Enum):
    MALE = auto()
    FEMALE = auto()
