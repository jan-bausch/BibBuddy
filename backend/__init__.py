import os
import random
from flask_api import FlaskAPI
from flask_api.exceptions import NotFound
from flask_cors import CORS
from flask import jsonify, request, session

app = FlaskAPI(__name__)
app.config.from_pyfile("config.cfg")

CORS(app, supports_credentials = True)

groups = [
    {
        "id": "1251",
        "description": "Mathe II für Informatiker",
        "date": "2019-12-17",
        "start": 3,
        "end": 4,
        "members": 3
    },
    {
        "id": "91919",
        "description": "GL1",
        "date": "2019-12-18",
        "start": 9,
        "end": 11,
        "members": 1
    },
]

@app.route("/")
def index():
    # raise NotFound("Hello World")
    return jsonify({
        "version": "1.0.0"
    })

@app.route("/groups")
def list_groups():
    user_groups = session.get("user_groups", [])

    def update_is_member(group): 
        group["is_member"] = (group["id"] in user_groups)
        return group;
    
    updated_groups = list(map(update_is_member, groups))
    return jsonify({
        "groups": updated_groups
    })

@app.route("/groups", methods = ["POST"])
def create_group():
    data = request.json
    global groups
    randomGroupId = random.randint(100, 100000)
    newGroup = {
        "id": str(randomGroupId),
        "description": data["description"],
        "date": data["date"],
        "start": data["start"],
        "end": data["end"],
        "members": 1,
        "is_member": True
    }
    groups.append(newGroup)
    # Store in session
    user_groups = session.get("user_groups", [])
    user_groups.append(newGroup["id"])
    session["user_groups"] = user_groups
    return "Success"

@app.route("/groups/<id>/join", methods = ["PUT"])
def join_group(id):
    def update_group(group): 
        if id == group["id"]:
            group["members"] += 1
            # Store in session
            user_groups = session.get("user_groups", [])
            user_groups.append(group["id"])
            session["user_groups"] = user_groups
        return group;

    global groups
    groups = list(map(update_group, groups))
    return "Success"

if __name__ == "__main__":
    app.run(host="0.0.0.0")
