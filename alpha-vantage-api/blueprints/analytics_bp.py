from flask import Blueprint, request, jsonify
import requests
import os
from dotenv import load_dotenv

load_dotenv()

# Blueprint definition
analytics_bp = Blueprint('analytics', __name__)

ALPHA_VANTAGE_API_KEY = os.getenv("ALPHA_VANTAGE_API_KEY")
ALPHA_VANTAGE_BASE_URL = os.getenv("ALPHA_VANTAGE_BASE_URL", "https://www.alphavantage.co/query")

# Function to build the query string based on provided parameters
def build_analytics_params(function, **kwargs):
    params = {
        'function': function,
        'apikey': ALPHA_VANTAGE_API_KEY,
    }
    
    # Add all other parameters
    params.update(kwargs)
    return params

@analytics_bp.route('/fixed_window', methods=['GET'])
def get_fixed_window_analytics():
    symbols = request.args.get('symbols')
    range_ = request.args.getlist('range')
    interval = request.args.get('interval')
    calculations = request.args.get('calculations')
    ohlc = request.args.get('ohlc', 'close')
    datatype = request.args.get('datatype', 'json')

    if not symbols or not range_ or not interval or not calculations:
        return jsonify({'error': 'symbols, range, interval, and calculations parameters are required'}), 400

    range_value = '&'.join([f'RANGE={r}' for r in range_])

    params = build_analytics_params(
        function='ANALYTICS_FIXED_WINDOW',
        SYMBOLS=symbols,
        RANGE=range_value,
        INTERVAL=interval,
        CALCULATIONS=calculations,
        OHLC=ohlc,
        datatype=datatype
    )

    response = requests.get(ALPHA_VANTAGE_BASE_URL, params=params)
    return jsonify(response.json()), response.status_code

@analytics_bp.route('/sliding_window', methods=['GET'])
def get_sliding_window_analytics():
    symbols = request.args.get('symbols')
    range_ = request.args.getlist('range')
    interval = request.args.get('interval')
    window_size = request.args.get('window_size')
    calculations = request.args.get('calculations')
    ohlc = request.args.get('ohlc', 'close')
    datatype = request.args.get('datatype', 'json')

    if not symbols or not range_ or not interval or not window_size or not calculations:
        return jsonify({'error': 'symbols, range, interval, window_size, and calculations parameters are required'}), 400

    range_value = '&'.join([f'RANGE={r}' for r in range_])

    params = build_analytics_params(
        function='ANALYTICS_SLIDING_WINDOW',
        SYMBOLS=symbols,
        RANGE=range_value,
        INTERVAL=interval,
        CALCULATIONS=calculations,
        OHLC=ohlc,
        WINDOW_SIZE=window_size,
        datatype=datatype
    )

    response = requests.get(ALPHA_VANTAGE_BASE_URL, params=params)
    return jsonify(response.json()), response.status_code

@analytics_bp.route('/fundamental/overview', methods=['GET'])
def get_company_overview():
    symbol = request.args.get('symbol')
    datatype = request.args.get('datatype', 'json')

    if not symbol:
        return jsonify({'error': 'symbol parameter is required'}), 400

    params = build_analytics_params(
        function='OVERVIEW',
        symbol=symbol,
        datatype=datatype
    )

    response = requests.get(ALPHA_VANTAGE_BASE_URL, params=params)
    return jsonify(response.json()), response.status_code

@analytics_bp.route('/fundamental/etf_profile', methods=['GET'])
def get_etf_profile():
    symbol = request.args.get('symbol')
    datatype = request.args.get('datatype', 'json')

    if not symbol:
        return jsonify({'error': 'symbol parameter is required'}), 400

    params = build_analytics_params(
        function='ETF_PROFILE',
        symbol=symbol,
        datatype=datatype
    )

    response = requests.get(ALPHA_VANTAGE_BASE_URL, params=params)
    return jsonify(response.json()), response.status_code

@analytics_bp.route('/corporate_action/dividends', methods=['GET'])
def get_dividends():
    symbol = request.args.get('symbol')
    datatype = request.args.get('datatype', 'json')

    if not symbol:
        return jsonify({'error': 'symbol parameter is required'}), 400

    params = build_analytics_params(
        function='DIVIDENDS',
        symbol=symbol,
        datatype=datatype
    )

    response = requests.get(ALPHA_VANTAGE_BASE_URL, params=params)
    return jsonify(response.json()), response.status_code

@analytics_bp.route('/corporate_action/splits', methods=['GET'])
def get_splits():
    symbol = request.args.get('symbol')
    datatype = request.args.get('datatype', 'json')

    if not symbol:
        return jsonify({'error': 'symbol parameter is required'}), 400

    params = build_analytics_params(
        function='SPLITS',
        symbol=symbol,
        datatype=datatype
    )

    response = requests.get(ALPHA_VANTAGE_BASE_URL, params=params)
    return jsonify(response.json()), response.status_code

@analytics_bp.route('/financials/income_statement', methods=['GET'])
def get_income_statement():
    symbol = request.args.get('symbol')
    datatype = request.args.get('datatype', 'json')

    if not symbol:
        return jsonify({'error': 'symbol parameter is required'}), 400

    params = build_analytics_params(
        function='INCOME_STATEMENT',
        symbol=symbol,
        datatype=datatype
    )

    response = requests.get(ALPHA_VANTAGE_BASE_URL, params=params)
    return jsonify(response.json()), response.status_code

@analytics_bp.route('/financials/balance_sheet', methods=['GET'])
def get_balance_sheet():
    symbol = request.args.get('symbol')
    datatype = request.args.get('datatype', 'json')

    if not symbol:
        return jsonify({'error': 'symbol parameter is required'}), 400

    params = build_analytics_params(
        function='BALANCE_SHEET',
        symbol=symbol,
        datatype=datatype
    )

    response = requests.get(ALPHA_VANTAGE_BASE_URL, params=params)
    return jsonify(response.json()), response.status_code

# New functions for Cash Flow, Earnings, and Earnings Calendar
@analytics_bp.route('/financials/cash_flow', methods=['GET'])
def get_cash_flow():
    symbol = request.args.get('symbol')
    datatype = request.args.get('datatype', 'json')

    if not symbol:
        return jsonify({'error': 'symbol parameter is required'}), 400

    params = build_analytics_params(
        function='CASH_FLOW',
        symbol=symbol,
        datatype=datatype
    )

    response = requests.get(ALPHA_VANTAGE_BASE_URL, params=params)
    return jsonify(response.json()), response.status_code

@analytics_bp.route('/financials/earnings', methods=['GET'])
def get_earnings():
    symbol = request.args.get('symbol')
    datatype = request.args.get('datatype', 'json')

    if not symbol:
        return jsonify({'error': 'symbol parameter is required'}), 400

    params = build_analytics_params(
        function='EARNINGS',
        symbol=symbol,
        datatype=datatype
    )

    response = requests.get(ALPHA_VANTAGE_BASE_URL, params=params)
    return jsonify(response.json()), response.status_code

@analytics_bp.route('/financials/earnings_calendar', methods=['GET'])
def get_earnings_calendar():
    symbol = request.args.get('symbol')
    horizon = request.args.get('horizon', '3month')
    datatype = request.args.get('datatype', 'json')

    params = build_analytics_params(
        function='EARNINGS_CALENDAR',
        symbol=symbol,
        horizon=horizon,
        datatype=datatype
    )

    response = requests.get(ALPHA_VANTAGE_BASE_URL, params=params)
    return jsonify(response.json()), response.status_code
