import os

from flask import Flask
from flask import jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return jsonify(
        version="1.0.0"
    )

@app.route("/calendar")
def calendar():
    return jsonify({
        "groups": [
            {
                "id": "939",
                "description": "Mathe II für Informatiker",
                "date": "2019-12-17",
                "start": 3,
                "end": 4,
                "members": 3
            },
            {
                "id": "989",
                "description": "GL1",
                "date": "2019-12-18",
                "start": 9,
                "end": 11,
                "members": 1
            },
        ]
    })

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
