import os

from flask_api import FlaskAPI
from flask_cors import CORS
from flask_api.exceptions import NotFound
from flask import jsonify

app = FlaskAPI(__name__)
CORS(app)

groups = [
    {
        "id": "939",
        "description": "Mathe II für Informatiker",
        "date": "2019-12-17",
        "start": 3,
        "end": 4,
        "members": 3,
        "is_member": False
    },
    {
        "id": "989",
        "description": "GL1",
        "date": "2019-12-18",
        "start": 9,
        "end": 11,
        "members": 1,
        "is_member": False
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
    return jsonify({
        "groups": groups
    })

@app.route("/groups/<id>/join", methods = ["PUT"])
def join_group(id):
    def update_group(group): 
        if id == group["id"]:
            group["is_member"] = True
            group["members"] += 1
        return group;

    global groups
    groups = list(map(update_group, groups))
    return "Success"

if __name__ == "__main__":
    app.run(host="0.0.0.0")
