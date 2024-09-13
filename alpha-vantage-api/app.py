from flask import Flask, Blueprint, request, jsonify
from flask_cors import CORS
from custom_logging.custom_log import custom_log
import os
from dotenv import load_dotenv
from db import db
from blueprints.time_series_bp import time_series_bp
from blueprints.market_bp import market_bp
from blueprints.analytics_bp import analytics_bp

load_dotenv()
app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}, supports_credentials=True)
port = 6006
market_data_collection = db["market-data"]

ALPHA_VANTAGE_API_KEY = os.getenv("ALPHA_VANTAGE_API_KEY")
ALPHA_VANTAGE_BASE_URL = os.getenv("ALPHA_VANTAGE_BASE_URL")

@app.route('/test', methods=['GET'])
def test_connection():
    try:
        collection_names = db.list_collection_names()
        return {"status": "success", "collections": collection_names}, 200
    except Exception as e:
        return {"status": "fail", "message": str(e)}, 500

app.register_blueprint(time_series_bp, url_prefix='/time_series')
app.register_blueprint(market_bp, url_prefix='/market')
app.register_blueprint(analytics_bp, url_prefix='/analytics')


if __name__ == '__main__':
    custom_log("SUCCESS", f"Alpha Vantage Server running on port {port}.")
    app.run(host="0.0.0.0", debug=True, port=port)
