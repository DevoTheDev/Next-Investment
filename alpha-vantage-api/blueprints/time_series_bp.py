from flask import Blueprint, request, jsonify
import requests
import os
from dotenv import load_dotenv

load_dotenv()

time_series_bp = Blueprint('time_series', __name__)

ALPHA_VANTAGE_API_KEY = os.getenv("ALPHA_VANTAGE_API_KEY")
ALPHA_VANTAGE_BASE_URL = os.getenv("ALPHA_VANTAGE_BASE_URL", "https://www.alphavantage.co/query")

def build_time_series_params(function, symbol, interval=None, outputsize='compact', datatype='json', **kwargs):
    params = {
        'function': function,
        'symbol': symbol,
        'apikey': ALPHA_VANTAGE_API_KEY,
        'outputsize': outputsize,
        'datatype': datatype,
    }
    if interval:
        params['interval'] = interval
    params.update(kwargs)

    return params

@time_series_bp.route('/intraday', methods=['GET'])
def get_intraday_time_series():
    symbol = request.args.get('symbol')
    interval = request.args.get('interval')
    adjusted = request.args.get('adjusted', 'true')
    extended_hours = request.args.get('extended_hours', 'true')
    month = request.args.get('month')
    outputsize = request.args.get('outputsize', 'compact')
    datatype = request.args.get('datatype', 'json')

    if not symbol or not interval:
        return jsonify({'error': 'symbol and interval parameters are required'}), 400

    params = build_time_series_params(
        function='TIME_SERIES_INTRADAY',
        symbol=symbol,
        interval=interval,
        adjusted=adjusted,
        extended_hours=extended_hours,
        month=month,
        outputsize=outputsize,
        datatype=datatype
    )

    response = requests.get(ALPHA_VANTAGE_BASE_URL, params=params)
    return jsonify(response.json()), response.status_code

@time_series_bp.route('/daily', methods=['GET'])
def get_daily_time_series():
    symbol = request.args.get('symbol')
    outputsize = request.args.get('outputsize', 'compact')
    datatype = request.args.get('datatype', 'json')

    if not symbol:
        return jsonify({'error': 'symbol parameter is required'}), 400

    params = build_time_series_params(
        function='TIME_SERIES_DAILY',
        symbol=symbol,
        outputsize=outputsize,
        datatype=datatype
    )

    response = requests.get(ALPHA_VANTAGE_BASE_URL, params=params)
    return jsonify(response.json()), response.status_code

@time_series_bp.route('/weekly', methods=['GET'])
def get_weekly_time_series():
    symbol = request.args.get('symbol')
    datatype = request.args.get('datatype', 'json')

    if not symbol:
        return jsonify({'error': 'symbol parameter is required'}), 400

    params = build_time_series_params(
        function='TIME_SERIES_WEEKLY',
        symbol=symbol,
        datatype=datatype
    )

    response = requests.get(ALPHA_VANTAGE_BASE_URL, params=params)
    return jsonify(response.json()), response.status_code

@time_series_bp.route('/monthly', methods=['GET'])
def get_monthly_time_series():
    symbol = request.args.get('symbol')
    datatype = request.args.get('datatype', 'json')

    if not symbol:
        return jsonify({'error': 'symbol parameter is required'}), 400

    params = build_time_series_params(
        function='TIME_SERIES_MONTHLY',
        symbol=symbol,
        datatype=datatype
    )

    response = requests.get(ALPHA_VANTAGE_BASE_URL, params=params)
    return jsonify(response.json()), response.status_code
