from flask import Blueprint, request, jsonify
from pymongo import MongoClient
from dotenv import load_dotenv
from bson import ObjectId
import datetime
from blueprints.auth_bp import token_required, users_collection
from db import db

# Create a blueprint for investments
investments_bp = Blueprint('investments', __name__)
load_dotenv()
investments_collection = db['investments']

def serialize_investment(investment):
    investment['_id'] = str(investment['_id'])  # Convert ObjectId to string
    investment['_user_id'] = str(investment['_user_id'])  # Convert ObjectId to string
    return investment

@investments_bp.route('/investments', methods=['POST'])
@token_required
def create_investment(current_user):
    data = request.get_json()
    if not data.get('stock_symbol') or not data.get('amount'):
        return jsonify({'message': 'Stock symbol and amount are required'}), 400

    existing_investment = investments_collection.find_one({
        "_user_id": ObjectId(current_user['_id']),
        "stock_symbol": data['stock_symbol']
    })

    if existing_investment:
        return jsonify({'message': 'Investment with this stock symbol already exists'}), 409

    investment = {
        "_user_id": ObjectId(current_user['_id']),
        "stock_symbol": data['stock_symbol'],
        "amount": data['amount'],
        "value": data.get('value', None),
        "date": datetime.datetime.utcnow()
    }

    investment_id = investments_collection.insert_one(investment).inserted_id
    users_collection.update_one(
        {"_id": ObjectId(current_user['_id'])},
        {"$push": {"investments": investment_id}}
    )

    return jsonify({'message': 'Investment created successfully', 'investment_id': str(investment_id)}), 201

@investments_bp.route('/investments', methods=['GET'])
@token_required
def get_investments(current_user):
    investments = investments_collection.find({"_user_id": current_user['_id']})
    investments_list = [serialize_investment(investment) for investment in investments]
    print(investments_list)
    return jsonify(investments_list), 200

@investments_bp.route('/investments/<investment_id>', methods=['GET'])
@token_required
def get_investment(current_user, investment_id):
    try:
        if not ObjectId.is_valid(investment_id):
            return jsonify({'message': 'Invalid investment ID format'}), 400
        
        investment = investments_collection.find_one({
            "_id": ObjectId(investment_id),
            "_user_id": ObjectId(current_user['_id'])
        })
        
        if investment:
            return jsonify(serialize_investment(investment)), 200
        else:
            return jsonify({'message': 'Investment not found'}), 404
    except Exception as e:
        print(f"Error fetching investment: {str(e)}")
        return jsonify({'message': 'Failed to fetch investment'}), 500

@investments_bp.route('/investments/<investment_id>', methods=['PUT'])
@token_required
def update_investment(current_user, investment_id):
    data = request.get_json()
    try:
        investment = investments_collection.find_one({
            "_id": ObjectId(investment_id),
            "_user_id": current_user['_id']
        })

        if not investment:
            return jsonify({'message': 'Investment not found'}), 404

        if 'stock_symbol' in data:
            investment['stock_symbol'] = data['stock_symbol']
        if 'amount' in data:
            investment['amount'] = data['amount']
        if 'value' in data:
            investment['value'] = data['value']

        investments_collection.update_one({"_id": ObjectId(investment_id)}, {"$set": investment})
        return jsonify({'message': 'Investment updated successfully'}), 200
    except Exception as e:
        print(f"Error updating investment: {str(e)}")
        return jsonify({'message': 'Invalid investment ID'}), 400

@investments_bp.route('/investments/<investment_id>', methods=['DELETE'])
@token_required
def delete_investment(current_user, investment_id):
    try:
        investment = investments_collection.find_one({
            "_id": ObjectId(investment_id),
            "_user_id": current_user['_id']
        })

        if not investment:
            return jsonify({'message': 'Investment not found'}), 404

        investments_collection.delete_one({"_id": ObjectId(investment_id)})

        users_collection.update_one(
            {"_id": ObjectId(current_user['_id'])},
            {"$pull": {"investments": str(investment_id)}}
        )

        return jsonify({'message': 'Investment deleted successfully'}), 200
    except Exception as e:
        print(f"Error deleting investment: {str(e)}")
        return jsonify({'message': 'Invalid investment ID'}), 400
