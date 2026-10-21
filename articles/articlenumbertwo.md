---
title: "Python & Backend Development: Phase 1 Foundations"
category: "Software Engineering Journey"
date: "10/20/2026"
---

# Python & Backend Development: Phase 1 Foundations

- **Learning journey:** Backend web development and software engineering
- **Phase:** 1 - Foundations
- **Lessons completed:** 1-3
- **Next phase:** Building web APIs with FastAPI

After revisiting Python fundamentals, I worked through structured data, testing, JSON, HTTP, and API requests. These lessons helped connect basic programming concepts to the kind of work a backend application does: receiving data, validating it, processing it, and returning a useful result.

> **Image suggestion:** A simple roadmap graphic showing the three lessons in this phase (Python fundamentals, structured data, and APIs), followed by a path toward FastAPI. Keep it original and use it as a hero image or phase overview.

> **Code presentation:** Use fenced Markdown code blocks with language labels for the examples below, such as `python`, `json`, `http`, and `bash`. They are short teaching examples, so regular code blocks will be easier to read and maintain than Git snippets. For a complete project that readers should run, link to a repository or a GitHub Gist instead of embedding a long file.

---

# Lesson 1: Python Fundamentals, Functions, and Testing

## 1. Variables and data types

Python is dynamically typed, so you do not need to declare a variable's type explicitly.

```python
name = "Alice"       # str
age = 25             # int
height = 5.6         # float
is_active = True     # bool
nothing = None       # NoneType
```

Common built-in types include:

| Type | Description | Example |
| --- | --- | --- |
| `str` | Text | `"Hello"` |
| `int` | Whole number | `25` |
| `float` | Decimal number | `3.14` |
| `bool` | Boolean value | `True` |
| `list` | Ordered, mutable collection | `[1, 2, 3]` |
| `dict` | Key-value pairs | `{"name": "Alice"}` |
| `NoneType` | Absence of a value | `None` |

Use `type()` to inspect an object's type:

```python
print(type(age))  # <class 'int'>
```

## 2. Conditional statements

Conditionals control which parts of a program run.

```python
if age < 18:
    print("Minor")
elif age <= 29:
    print("Adult")
elif age <= 64:
    print("Prime")
else:
    print("Senior")
```

Important operators:

- `==` - equal to
- `!=` - not equal to
- `>` and `<` - greater than and less than
- `>=` and `<=` - greater than or equal to and less than or equal to
- `and`, `or`, and `not` - logical operators

Python evaluates conditions from top to bottom. Once a matching `if` or `elif` branch is found, the remaining branches are skipped.

## 3. Functions and return values

Functions organize reusable logic.

```python
def get_age_category(age):
    if age < 18:
        return "minor"
    elif age <= 29:
        return "adult"
    elif age <= 64:
        return "prime"
    else:
        return "senior"
```

Call the function like this:

```python
category = get_age_category(30)
print(category)  # prime
```

**`print()` and `return` do different things:**

- `print()` displays information in the terminal.
- `return` sends a value back to the code that called the function.

Prefer returning values from reusable functions so other parts of the application can decide how to use them.

## 4. Input validation

Never assume user-provided input is valid.

```python
def validate_age(age):
    return age.isdigit() and int(age) <= 120
```

For example:

```python
validate_age("25")    # True
validate_age("hello") # False
validate_age("150")   # False
```

This example expects a string containing a nonnegative whole number.

**Key concept:** Validate data before performing operations that depend on its format or meaning.

## 5. Testing with pytest

Automated tests check whether code behaves as expected. We installed pytest with:

```bash
pip install pytest
```

Example application code:

```python
def get_age_category(age):
    if age < 18:
        return "minor"
    elif age <= 29:
        return "adult"
    elif age <= 64:
        return "prime"
    return "senior"
```

Example tests in `test_age_program.py`:

```python
from age_program import get_age_category


def test_minor():
    assert get_age_category(17) == "minor"


def test_adult():
    assert get_age_category(18) == "adult"


def test_prime():
    assert get_age_category(30) == "prime"


def test_senior():
    assert get_age_category(65) == "senior"
```

Run the tests with:

```bash
python -m pytest
```

A passing test means the actual result matched the expected result. A failing test helps identify unexpected behavior or regressions.

**Testing lessons:**

- Test boundary values such as 17, 18, 29, 30, 64, and 65.
- Keep tests separate from application logic.
- Use descriptive test names.
- Test behavior rather than implementation details.
- Intentionally breaking code can help verify that tests detect errors.

## 6. The main guard

```python
if __name__ == "__main__":
    main()
```

This ensures `main()` runs when the script is executed directly, but not when its functions are imported into another Python file. This is useful when writing reusable modules and testable applications.

> **Image suggestion:** No image is needed for every syntax section. If you want one visual in this lesson, use a small flow diagram: input -> validation -> function -> result. It reinforces the concepts without repeating the code.

---

# Lesson 2: Lists, Dictionaries, and Structured Data

## 1. Lists

Lists store ordered collections of values.

```python
users = ["Alice", "Bob", "Charlie"]
```

Access elements by index. Indexes start at zero:

```python
print(users[0])  # Alice
```

## 2. Dictionaries

Dictionaries store data as key-value pairs.

```python
user = {
    "name": "Alice",
    "age": 25,
    "role": "admin",
}
```

Access and modify values:

```python
print(user["name"])

user["age"] = 26
```

Add a value:

```python
user["email"] = "alice@example.com"
```

Safely retrieve an optional value:

```python
phone = user.get("phone", "Not provided")
```

`user["phone"]` raises a `KeyError` if the key is missing, while `.get()` can return a default value.

## 3. Lists of dictionaries

A common structure in backend development is a list of records:

```python
users = [
    {"name": "Alice", "age": 25, "role": "admin"},
    {"name": "Bob", "age": 31, "role": "user"},
    {"name": "Charlie", "age": 19, "role": "user"},
    {"name": "Diana", "age": 42, "role": "moderator"},
]
```

Each dictionary represents one user, and the list represents the collection. This structure resembles JSON arrays returned by many web APIs.

## 4. Loops and dictionary iteration

Loop through a list:

```python
for user in users:
    print(user["name"])
```

Iterate through a dictionary's keys and values:

```python
for key, value in user.items():
    print(f"{key}: {value}")
```

Useful dictionary methods:

| Method | Purpose |
| --- | --- |
| `.keys()` | Retrieve keys |
| `.values()` | Retrieve values |
| `.items()` | Retrieve key-value pairs |
| `.get()` | Retrieve a value with an optional default |

## 5. List comprehensions

List comprehensions provide a concise way to create lists.

Traditional approach:

```python
matching_users = []

for user in users:
    if user["age"] >= 30:
        matching_users.append(user)
```

List comprehension:

```python
matching_users = [
    user for user in users
    if user["age"] >= 30
]
```

Both produce the same result. We used this pattern in reusable functions:

```python
def get_users_over_30(users):
    return [user for user in users if user["age"] >= 30]


def get_users_with_role(users, role):
    return [user for user in users if user["role"] == role]
```

**Key lesson:** Filtering functions should return results rather than being responsible for displaying them.

## 6. Function composition

Functions can reuse other functions:

```python
def get_user_stats(users):
    return {
        "total": len(users),
        "over_30": len(get_users_over_30(users)),
        "admins": len(get_users_with_role(users, "admin")),
        "moderators": len(get_users_with_role(users, "moderator")),
    }
```

This reduces duplicated logic and makes programs easier to maintain.

## 7. Mutability

Lists and dictionaries are mutable. Consider this function:

```python
def add_user_email(user, email):
    user["email"] = email
    return user
```

Calling it with an item from the list:

```python
updated_user = add_user_email(
    users[0],
    "alice@example.com",
)
```

modifies the original dictionary stored at `users[0]`. Both `updated_user` and `users[0]` refer to the same dictionary.

**Important:** Understand whether a function modifies existing data or creates new data.

## 8. Testing structured data

We wrote pytest tests for our filtering and statistics functions:

```python
def test_get_users_over_30():
    result = get_users_over_30(users)

    assert len(result) == 2
    assert result[0]["name"] == "Bob"
    assert result[1]["name"] == "Diana"
```

We also tested role filtering and user statistics. These exercises reinforced how to test functions that return lists and dictionaries.

> **Image suggestion:** A simple diagram showing a list containing several user dictionaries could help readers unfamiliar with nested data. The code itself is likely clear enough, so this image is optional.

---

# Lesson 3: JSON, HTTP, and APIs

## 1. What is JSON?

JSON stands for **JavaScript Object Notation**. It is a widely used text format for exchanging structured data between applications.

```json
{
  "name": "Alice",
  "age": 25,
  "is_admin": true
}
```

JSON resembles Python dictionaries, but there are differences:

| Python | JSON |
| --- | --- |
| `True` | `true` |
| `False` | `false` |
| `None` | `null` |
| `dict` | object |
| `list` | array |

JSON requires double-quoted property names and strings.

## 2. Serialization and deserialization

**Serialization** converts an object into a format suitable for storage or transmission. **Deserialization** converts serialized data back into usable objects.

In Python:

```python
import json

user = {"name": "Alice", "age": 25}

json_string = json.dumps(user)
python_object = json.loads(json_string)
```

- `json.dumps()` converts a Python object into a JSON string.
- `json.loads()` converts a JSON string into Python data.

## 3. Reading and writing JSON files

Write JSON:

```python
with open("users.json", "w", encoding="utf-8") as file:
    json.dump(users, file, indent=4)
```

Read JSON:

```python
with open("users.json", "r", encoding="utf-8") as file:
    loaded_users = json.load(file)
```

The `with` statement automatically closes the file when the block finishes. The `indent=4` argument makes the generated JSON easier to read.

| Function | Purpose |
| --- | --- |
| `json.dumps()` | Python object -> JSON string |
| `json.loads()` | JSON string -> Python object |
| `json.dump()` | Python object -> JSON file |
| `json.load()` | JSON file -> Python object |

## 4. What is HTTP?

HTTP stands for **Hypertext Transfer Protocol**. It defines how clients and servers exchange requests and responses.

```text
Client
  |
  | HTTP request
  v
Server
  |
  | HTTP response
  v
Client
```

A request includes information such as the HTTP method and target URL. A response contains a status code and may include a body containing JSON or other data.

## 5. HTTP methods

| Method | Common purpose |
| --- | --- |
| `GET` | Retrieve data |
| `POST` | Create a resource or submit data |
| `PUT` | Replace a resource |
| `PATCH` | Partially update a resource |
| `DELETE` | Delete a resource |

These are common conventions in REST-style APIs; the exact behavior depends on the API.

## 6. HTTP status codes

| Code | Meaning |
| --- | --- |
| `200` | OK |
| `201` | Created |
| `400` | Bad Request |
| `401` | Unauthorized |
| `403` | Forbidden |
| `404` | Not Found |
| `500` | Internal Server Error |

Status codes tell the client how the server handled a request.

**An HTTP error response is different from a network exception.** A `404` means the server responded but could not find the requested resource. A timeout means the request did not complete within the allowed time.

## 7. Making HTTP requests in Python

Install the `requests` library:

```bash
pip install requests
```

Make a GET request:

```python
import requests

response = requests.get(
    "https://jsonplaceholder.typicode.com/users",
    timeout=10,
)

print(response.status_code)

users = response.json()
print(users[0]["name"])
```

The `response.json()` method parses the response body as JSON and returns the corresponding Python data. It does not guarantee the result is a dictionary; the JSON might represent a list, string, number, or another valid JSON value.

## 8. API endpoints

An endpoint is a URL exposed by an API for a particular operation or resource. Examples:

```http
GET /users
GET /users/1
GET /users/999
```

The first retrieves a collection of users. The second requests one specific user. The third may produce `404 Not Found` if user 999 does not exist. We tested these endpoints with JSONPlaceholder.

## 9. Nested dictionaries

API responses frequently contain nested data:

```python
user = {
    "name": "Alice",
    "address": {
        "city": "Chicago",
        "zipcode": "60601",
    },
}
```

Access nested information:

```python
print(user["address"]["city"])
```

We applied this to real API data:

```python
def get_users_with_city(users, city):
    return [
        user for user in users
        if user["address"]["city"] == city
    ]
```

This combines list comprehensions with nested dictionary access.

## 10. Error handling with `try` and `except`

Network operations can fail for reasons outside the program's control. Python uses exceptions to handle these situations:

```python
try:
    response = requests.get(
        "https://jsonplaceholder.typicode.com/users",
        timeout=10,
    )

except requests.exceptions.Timeout:
    print("The request timed out.")

except requests.exceptions.RequestException as error:
    print(f"Network error: {error}")
```

The specific `Timeout` handler appears before the broader `RequestException` handler. A timeout does not provide an HTTP status code because an HTTP response may never have arrived.

## 11. Consistent return structures

Our final Lesson 3 project was a reusable API client function. Rather than returning dictionaries on success and strings on failure, we designed a consistent structure.

Successful result:

```python
{
    "success": True,
    "user": {
        "id": 1,
        "name": "Leanne Graham",
    },
    "error": None,
}
```

Unsuccessful result:

```python
{
    "success": False,
    "user": None,
    "error": {
        "code": 404,
        "message": "User not found",
    },
}
```

Benefits include:

- Predictable data structures
- Easier error handling
- Clearer function interfaces
- Simpler testing
- Better separation between application logic and presentation

This is one useful API-client design pattern. Other applications may use exceptions or typed result objects.

## 12. Separation of concerns

Our final implementation separated retrieving data from displaying results:

```python
def display_user_result(result):
    if result["success"]:
        print(f"User name: {result['user']['name']}")
    else:
        print(
            f"Error: {result['error']['message']}"
        )
```

The API client handles communication and data processing. The display function handles output. This makes the code more reusable and easier to test.

> **Image suggestion:** A request/response diagram would be useful here: a client sends an HTTP request to a server, and the server returns a status code and JSON body. Use your own diagram or a simple, clearly licensed illustration.

---

# Software Engineering Principles Learned

Across the three lessons, we practiced several important principles:

1. **Single responsibility:** Give functions clear, focused jobs.
2. **Reusability:** Write functions that can be called from different parts of an application.
3. **Separation of concerns:** Keep data retrieval, processing, and presentation separate when practical.
4. **Defensive programming:** Anticipate invalid input, missing data, network failures, and unexpected responses.
5. **Testing:** Use automated tests to verify expected behavior and catch regressions.
6. **Predictable interfaces:** Return data in formats that callers can reliably understand.
7. **Readability:** Prefer descriptive variable names, consistent formatting, and straightforward control flow.
8. **Careful handling of external data:** A successful HTTP response does not guarantee that the response body has the structure your application expects.

# Quick Python Cheat Sheet

| Syntax | Purpose |
| --- | --- |
| `def function():` | Define a function |
| `return value` | Return a result |
| `if / elif / else` | Conditional branching |
| `for item in items:` | Iterate over a collection |
| `len(items)` | Get a collection's length |
| `dict["key"]` | Access a dictionary value |
| `dict.get("key")` | Access an optional value |
| `dict.items()` | Iterate through key-value pairs |
| `[x for x in items if condition]` | Filter with a list comprehension |
| `try / except` | Handle exceptions |
| `with open(...) as file:` | Manage file access |
| `assert condition` | Check an expectation |
| `is None` | Check for `None` |
| `f"Hello {name}"` | Format strings |
| `requests.get(url)` | Send an HTTP GET request |
| `response.status_code` | Inspect HTTP status |
| `response.json()` | Parse JSON response data |

# Common Mistakes to Watch For

1. **Confusing `print()` and `return`:** Printing displays a value; returning makes it available to other code.
2. **Accessing missing dictionary keys:** `user["missing_key"]` raises `KeyError`. Use `.get()` when appropriate or validate required fields.
3. **Assuming every HTTP request succeeds:** Check responses and handle network exceptions.
4. **Assuming HTTP 200 guarantees valid application data:** A successful HTTP response can still contain malformed JSON or unexpected fields.
5. **Returning inconsistent types:** A function that sometimes returns dictionaries and sometimes strings may be difficult to use safely.
6. **Repeatedly parsing the same JSON response:** Parse once with `users = response.json()` and reuse `users`.
7. **Forgetting the main guard:** Avoid running application code unintentionally during imports.
8. **Confusing JSON strings with Python dictionaries:** `json.dumps()` returns a string; `json.loads()` parses JSON into Python objects.

# Phase 1 Recap

At the beginning of Phase 1, our programs primarily handled information entered directly into Python scripts. By the end, we could:

1. Write reusable Python functions.
2. Organize and manipulate structured data.
3. Filter lists of dictionaries.
4. Test code using pytest.
5. Save and load JSON files.
6. Send HTTP requests to external APIs.
7. Parse and transform JSON responses.
8. Interpret HTTP status codes.
9. Handle network exceptions.
10. Build reusable API client functions with consistent return structures.

These skills form the foundation for backend web development.

# Phase 2 Preview: Building Our Own Backend

Our next objective is to move from consuming APIs to creating them. We will use **FastAPI**, a Python framework for building web APIs.

Upcoming topics will include:

- Understanding how a backend server runs
- Creating API endpoints and routes
- Handling GET and POST requests
- Working with path and query parameters
- Accepting and validating request bodies
- Returning JSON responses
- Understanding automatic API documentation
- Testing our own API endpoints
- Organizing a small backend project

Later phases will introduce databases, CRUD operations, authentication, security, and deployment.

**The next milestone:** Build a Python API that other programs can send HTTP requests to.

*End of Phase 1 study guide.*
