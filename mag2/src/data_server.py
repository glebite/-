"""
data_server.py
"""
import random
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/random_number")
def random_number():
    """random_number - endpoint
    """
    return jsonify({'name': random.random()}), 200


if __name__ == "__main__":
    app.run('0.0.0.0', debug=True)
