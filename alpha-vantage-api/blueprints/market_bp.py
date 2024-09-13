from flask import Blueprint, request, jsonify
import requests
import os
from dotenv import load_dotenv

load_dotenv()

market_bp = Blueprint('market', __name__)

ALPHA_VANTAGE_API_KEY = os.getenv("ALPHA_VANTAGE_API_KEY")
ALPHA_VANTAGE_BASE_URL = os.getenv("ALPHA_VANTAGE_BASE_URL", "https://www.alphavantage.co/query")

def build_market_params(function, symbol=None, datatype='json', **kwargs):
    params = {
        'function': function,
        'apikey': ALPHA_VANTAGE_API_KEY,
        'datatype': datatype,
    }
    
    if symbol:
        params['symbol'] = symbol
    
    params.update(kwargs)

    return params

@market_bp.route('/quote', methods=['GET'])
def get_quote():
    symbol = request.args.get('symbol')
    datatype = request.args.get('datatype', 'json')

    if not symbol:
        return jsonify({'error': 'symbol parameter is required'}), 400

    params = build_market_params(
        function='GLOBAL_QUOTE',
        symbol=symbol,
        datatype=datatype
    )

    response = requests.get(ALPHA_VANTAGE_BASE_URL, params=params)
    return jsonify(response.json()), response.status_code

@market_bp.route('/search', methods=['GET'])
def search_symbols():
    keywords = request.args.get('keywords')
    datatype = request.args.get('datatype', 'json')

    if not keywords:
        return jsonify({'error': 'keywords parameter is required'}), 400

    params = build_market_params(
        function='SYMBOL_SEARCH',
        datatype=datatype,
        keywords=keywords
    )

    response = requests.get(ALPHA_VANTAGE_BASE_URL, params=params)
    return jsonify(response.json()), response.status_code

@market_bp.route('/market_status', methods=['GET'])
def get_market_status():
    params = build_market_params(
        function='MARKET_STATUS'
    )

    response = requests.get(ALPHA_VANTAGE_BASE_URL, params=params)
    return jsonify(response.json()), response.status_code

@market_bp.route('/historical_options', methods=['GET'])
def get_historical_options():
    symbol = request.args.get('symbol')
    date = request.args.get('date')
    datatype = request.args.get('datatype', 'json')

    if not symbol:
        return jsonify({'error': 'symbol parameter is required'}), 400

    params = build_market_params(
        function='HISTORICAL_OPTIONS',
        symbol=symbol,
        datatype=datatype,
        date=date
    )

    response = requests.get(ALPHA_VANTAGE_BASE_URL, params=params)
    return jsonify(response.json()), response.status_code

@market_bp.route('/news_sentiment', methods=['GET'])
def get_news_sentiment():
    tickers = request.args.get('tickers')
    topics = request.args.get('topics')
    time_from = request.args.get('time_from')
    time_to = request.args.get('time_to')
    sort = request.args.get('sort', 'LATEST')
    limit = request.args.get('limit', 50)
    datatype = request.args.get('datatype', 'json')

    params = build_market_params(
        function='NEWS_SENTIMENT',
        datatype=datatype,
        tickers=tickers,
        topics=topics,
        time_from=time_from,
        time_to=time_to,
        sort=sort,
        limit=limit
    )

    response = requests.get(ALPHA_VANTAGE_BASE_URL, params=params)
    return jsonify(response.json()), response.status_code

@market_bp.route('/top_gainers_losers', methods=['GET'])
def get_top_gainers_losers():
    params = build_market_params(
        function='TOP_GAINERS_LOSERS'
    )

    response = requests.get(ALPHA_VANTAGE_BASE_URL, params=params)
    return jsonify(response.json()), response.status_code

@market_bp.route('/ipo_calendar', methods=['GET'])
def get_ipo_calendar():
    params = build_market_params(
        function='IPO_CALENDAR'
    )

    response = requests.get(ALPHA_VANTAGE_BASE_URL, params=params)
    return jsonify(response.json()), response.status_code

@market_bp.route('/listing_status', methods=['GET'])
def get_listing_status():
    date = request.args.get('date')
    state = request.args.get('state', 'active')
    params = build_market_params(
        function='LISTING_STATUS',
        date=date,
        state=state
    )

    response = requests.get(ALPHA_VANTAGE_BASE_URL, params=params)
    return jsonify(response.json()), response.status_code
