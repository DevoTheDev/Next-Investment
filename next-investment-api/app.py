from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from blueprints.investments_bp import investments_bp
from blueprints.auth_bp import auth_bp
from json import JSONEncoder
from bson import ObjectId
from custom_logging.custom_log import custom_log
from db import db

app = Flask(__name__)

# CORS configuration
cors = CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}, supports_credentials=True)
port = 5005
load_dotenv()

@app.route('/test', methods=['GET'])
def test_connection():
    # Attempt to find one document to test the connection
    try:
        collection_names = db.list_collection_names()
        return {"status": "success", "collections": collection_names}, 200
    except Exception as e:
        return {"status": "fail", "message": str(e)}, 500

app.register_blueprint(investments_bp, url_prefix='/investments')
app.register_blueprint(auth_bp, url_prefix='/auth')

class CustomJSONEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return super(CustomJSONEncoder, self).default(obj)
    
if __name__ == '__main__':
    custom_log("SUCCESS", f"Next Investment Server running on port {port}.")
    app.run(host="0.0.0.0", port=port, debug=True)
