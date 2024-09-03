import axios from 'axios';
import { BASE_URL } from './AuthController';

const getQuote = async (token: string, symbol: string, datatype: string = 'json'): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/market/quote`, {
        params: { symbol, datatype },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

const searchSymbols = async (token: string, keywords: string, datatype: string = 'json'): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/market/search`, {
        params: { keywords, datatype },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

const getMarketStatus = async (token: string): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/market/market_status`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

const getHistoricalOptions = async (token: string, symbol: string, date: string, datatype: string = 'json'): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/market/historical_options`, {
        params: { symbol, date, datatype },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

const getNewsSentiment = async (token: string, tickers: string, topics: string, timeFrom: string, timeTo: string, sort: string = 'LATEST', limit: number = 50, datatype: string = 'json'): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/market/news_sentiment`, {
        params: { tickers, topics, time_from: timeFrom, time_to: timeTo, sort, limit, datatype },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

const getTopGainersLosers = async (token: string): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/market/top_gainers_losers`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

const getIpoCalendar = async (token: string): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/market/ipo_calendar`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

const getListingStatus = async (token: string, date: string, state: string = 'active'): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/market/listing_status`, {
        params: { date, state },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const MarketController = {
    getQuote,
    searchSymbols,
    getMarketStatus,
    getHistoricalOptions,
    getNewsSentiment,
    getTopGainersLosers,
    getIpoCalendar,
    getListingStatus,
};
