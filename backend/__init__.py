import os

from flask import Flask
from flask import jsonify

app = Flask(__name__)

@app.route("/")
def hello():
    return jsonify(
        version="1.0.0"
    )

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
