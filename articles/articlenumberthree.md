---
title: "Python Learning Days Two and Three: Data Structures"
category: "Software Engineering Journey"
date: "08/28/2026"
---

# Python Learning Days Two and Three: Data Structures

On August 26th and 27th, I spent two days learning about Python data structures. After reviewing Python syntax and building an age calculator on day one, I wanted to understand how Python stores and organizes collections of related data. I focused on lists, dictionaries, tuples, and sets, and I practiced using each one for the kinds of problems it handles best.

## Learning Lists and Dictionaries Together

Lists are ordered collections, so they are useful when I need to keep multiple values together and preserve their order. Dictionaries store information as key-value pairs, which makes them useful when each value has a meaningful label. A list of dictionaries turned out to be a practical way to represent several users, with each user's name, age, and role stored under dictionary keys.

I wrote a script containing four users:

```python
users = [
    {
        "name" : "Alice",
        "age" : 25,
        "role" : "admin"
    },
    {
        "name" : "Bob",
        "age" : 31,
        "role" : "user"
    },
    {
        "name" : "Charlie",
        "age" : 19,
        "role" : "user"
    },
    {
        "name" : "Diana",
        "age" : 42,
        "role" : "moderator"
    }
]

def print_users(users):
    for user in users:
        print(f"Name: {user['name']}")
        print(f"Age: {user['age']}")
        print(f"Role: {user['role']}")
        print()
```

This example helped me see why these structures are often used together. The outer list represents a collection of users, while each dictionary represents one user. I can loop through the list and access a specific piece of information by using its key, such as `user["name"]` or `user["role"]`.

## Filtering With List Comprehension

One of the most useful things I learned was list comprehension. It provides a concise way to create a new list from an existing iterable, often while applying a condition. I used it to find users who are at least 30 years old and users who have a particular role:

```python
def get_users_over_30(users):
    return [user for user in users if user["age"] >= 30]

def get_users_with_role(users, role):
    return [user for user in users if user["role"] == role]
```

The `get_users_over_30` function checks each user and returns only the users whose age is greater than or equal to 30. The other function does the same thing with a role supplied as an argument. This is shorter than writing out a loop that creates an empty list and appends matching users one at a time, while still expressing the logic clearly.

I also used these functions to build a set of statistics about the collection:

```python
def get_user_stats(users):
    return {
        "total" : len(users),
        "over_30" : len(get_users_over_30(users)),
        "users" : len(get_users_with_role(users, "user")),
        "admins" : len(get_users_with_role(users, "admin")),
        "moderators" : len(get_users_with_role(users, "moderator"))
    }
```

This function returns a dictionary containing several calculated values. It also showed me how functions can be composed: `get_user_stats` calls the filtering functions and uses `len()` to count their results.

## Updating Dictionary Data

Dictionaries are mutable, which means I can update an existing user's information or add a new key. I practiced adding an email address to a user with another function:

```python
def add_user_email(user, email):
    user["email"] = email
    return user
```

I also practiced accessing values, changing a value, providing a fallback when a key does not exist, and iterating through all of a dictionary's key-value pairs:

```python
if __name__ == "__main__":
    print(users[0]["name"])
    print(users[0]["role"])
    users[0]["age"] = 26
    print(users[0].get("phone", "No phone provided"))
    for key, value in users[0].items():
        print(f"{key}: {value}")

    updated_user = add_user_email(users[0], "alicenew@example.com")
    print(updated_user)
```

The `.get()` method was especially useful because it lets me request a value without causing an error when the key is missing. In this example, the program prints `No phone provided` because the user does not have a phone key yet.

## Writing Tests

To make sure my functions worked as expected, I wrote a separate test script. The tests check the number of results and the names of the users returned by each filter. They also verify every value in the statistics dictionary:

```python
from main import get_users_over_30, get_user_stats, get_users_with_role, users

def test_get_users_over_30():
    result = get_users_over_30(users)
    assert len(result) == 2
    assert result[0]["name"] == "Bob"
    assert result[1]["name"] == "Diana"

def test_get_users_with_admin_role():
    result = get_users_with_role(users, "admin")
    assert len(result) == 1
    assert result[0]["name"] == "Alice"

def test_get_users_with_user_role():
    result = get_users_with_role(users, "user")
    assert len(result) == 2
    assert result[0]["name"] == "Bob"
    assert result[1]["name"] == "Charlie"

def test_get_user_stats():
    result = get_user_stats(users)
    assert result["total"] == 4
    assert result["over_30"] == 2
    assert result["users"] == 2
    assert result["admins"] == 1
    assert result["moderators"] == 1
```

Writing tests made the data structures feel less abstract. Instead of only looking at the output manually, I could describe what the functions should return and let the test runner check those expectations. It also made list indexing, dictionary keys, and counts more familiar because every assertion depends on them.

## When Each Data Structure Is Appropriate

Lists are a good choice when I need an ordered, changeable collection of items. Dictionaries are useful when I need to associate values with descriptive keys, such as a user's name, age, and role. Tuples are appropriate for ordered collections that should not change after they are created. Sets are useful for collections of unique values and for operations such as finding common or different items between groups.

Choosing the right structure makes code easier to reason about. A list communicates order, a dictionary communicates labeled data, a tuple communicates fixed data, and a set communicates uniqueness. I also learned that these structures can be combined, as in my list of user dictionaries, to represent more realistic data.

## What I Learned

During these two days, I learned more about Python data structures, including lists, dictionaries, tuples, and sets. I practiced deciding when each structure is appropriate and saw how they can work together to model a group of users. I also learned list comprehension and used it to filter users by age and role in a concise way.

Writing the user script and its test script helped connect the concepts to actual software. I was able to access and update dictionary values, calculate statistics, filter a list, and verify the results with tests. These exercises gave me a stronger foundation for handling collections of data as I continue learning Python and back-end web development.
