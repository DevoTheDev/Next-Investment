from flask import Flask, request, jsonify, Blueprint
from custom_logging.custom_log import custom_log
from dotenv import load_dotenv
import os
import jwt
import datetime
import bcrypt
from functools import wraps
from pymongo import MongoClient
from db import db

users_collection = db["users"]

# Initialize Flask Blueprint
auth_bp = Blueprint('Authorization', __name__)
load_dotenv()

# Secret Key
SECRET_KEY = os.getenv('SECRET_KEY', 'deb57bf51537b2cf3e8fd70fd19d930a61d088aaf828a92863e59d256wef87237fbi29cc9283yr89uyv98yv')

# JWT Authentication Decorator
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        # Check for token in the Authorization header
        if 'Authorization' in request.headers:
            auth_header = request.headers['Authorization']
            if len(auth_header.split(" ")) != 2:
                return jsonify({'message': 'Token format is invalid!'}), 403
            
            token = auth_header.split(" ")[1]  # Get the token from Bearer

        if not token:
            return jsonify({'message': 'Token is missing!'}), 403

        try:
            # Decode the token to get the username
            data = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
            current_user = users_collection.find_one({'username': data['username']})
            if not current_user:
                return jsonify({'message': 'User not found!'}), 404
        except jwt.ExpiredSignatureError:
            return jsonify({'message': 'Token has expired!'}), 403
        except jwt.InvalidTokenError:
            return jsonify({'message': 'Token is invalid!'}), 403
        except Exception as e:
            return jsonify({'message': 'Token is invalid!'}), 403

        return f(current_user, *args, **kwargs)

    return decorated

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    # Validate required fields
    if not data.get('username') or not data.get('password'):
        return jsonify({'message': 'Username and password are required'}), 400

    # Check if user already exists
    if users_collection.find_one({'username': data['username']}):
        return jsonify({'message': 'Username already exists'}), 409

    # Hash the password before storing it
    hashed_password = bcrypt.hashpw(data['password'].encode('utf-8'), bcrypt.gensalt())
    data['password'] = hashed_password

    # Insert new user
    users_collection.insert_one(data)
    return jsonify({'message': 'User registered successfully'}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    # Validate required fields
    if not data.get('username') or not data.get('password'):
        return jsonify({'message': 'Username and password are required'}), 400

    # Find the user by username
    user = users_collection.find_one({'username': data['username']})

    if not user:
        return jsonify({'message': 'Invalid username or password'}), 401

    # Check if the password matches
    if not bcrypt.checkpw(data['password'].encode('utf-8'), user['password']):
        return jsonify({'message': 'Invalid username or password'}), 401

    # Generate JWT token
    token = jwt.encode({
        'username': user['username'],
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
    }, SECRET_KEY, algorithm='HS256')

    return jsonify({'token': token}), 200

@auth_bp.route('/users', methods=['GET'])
@token_required
def get_users(current_user):
    # Protected route; requires a valid JWT token
    users = list(users_collection.find({}, {'_id': False, 'password': False}))
    return jsonify(users), 200

# Additional dynamic routes can be added here
