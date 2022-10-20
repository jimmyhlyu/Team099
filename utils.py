# This file is written by Zhehong Zhang.
# Usage of the whole or part of this file without expressed permission from the original author is strictly prohibited.

# new/good opportunity that's been neglected for too long
# alarm for having too many opportunities or core opportunities

# total opportunity value formula:
# f(how much I like them, whether they are a central node,
# how much they may contribute to their specialty * how much weight I am putting on said specialty)

# measure: rate of lead creation; distribution of lead, opportunity and closed; close rate; closed lost rate and closed won rate;
# general efficiency

# track current close friend separately
# closed won != current close friend because a close friend may preexist or they may leave ones life because of unrelated reasons.

# auto suggest cutting loses

from database.data_classes import User


def neglected():
    # opportunity is worth-while but has been neglected for too long
    pass


def overcapacity(user: User) -> bool:
    """Returns if a user has too many leads/opportunities"""
    return len(user.connection_ids) > 5


def total_thread_value():
    pass


def monthly_thread_value():
    # how happy I am when around them NOW,
    # use data from n most recent + n extrapolated future
    pass


def popular_kid():
    # return (has above avg connections)
    pass


def get_metrics():
    pass
