import axios from 'axios';
import { BASE_URL } from './AuthController';

const getFixedWindowAnalytics = async (token: string, symbols: string, range: string, interval: string, calculations: string, ohlc: string = 'close', datatype: string = 'json'): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/analytics/fixed_window`, {
        params: { symbols, range, interval, calculations, ohlc, datatype },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

const getSlidingWindowAnalytics = async (token: string, symbols: string, range: string, interval: string, windowSize: string, calculations: string, ohlc: string = 'close', datatype: string = 'json'): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/analytics/sliding_window`, {
        params: { symbols, range, interval, windowSize, calculations, ohlc, datatype },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

const getCompanyOverview = async (token: string, symbol: string, datatype: string = 'json'): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/analytics/fundamental/overview`, {
        params: { symbol, datatype },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

const getEtfProfile = async (token: string, symbol: string, datatype: string = 'json'): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/analytics/fundamental/etf_profile`, {
        params: { symbol, datatype },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

const getDividends = async (token: string, symbol: string, datatype: string = 'json'): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/analytics/corporate_action/dividends`, {
        params: { symbol, datatype },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

const getSplits = async (token: string, symbol: string, datatype: string = 'json'): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/analytics/corporate_action/splits`, {
        params: { symbol, datatype },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

const getIncomeStatement = async (token: string, symbol: string, datatype: string = 'json'): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/analytics/financials/income_statement`, {
        params: { symbol, datatype },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

const getBalanceSheet = async (token: string, symbol: string, datatype: string = 'json'): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/analytics/financials/balance_sheet`, {
        params: { symbol, datatype },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

const getCashFlow = async (token: string, symbol: string, datatype: string = 'json'): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/analytics/financials/cash_flow`, {
        params: { symbol, datatype },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

const getEarnings = async (token: string, symbol: string, datatype: string = 'json'): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/analytics/financials/earnings`, {
        params: { symbol, datatype },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

const getEarningsCalendar = async (token: string, symbol: string, horizon: string = '3month', datatype: string = 'json'): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/analytics/financials/earnings_calendar`, {
        params: { symbol, horizon, datatype },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const AnalyticsController = {
    getFixedWindowAnalytics,
    getSlidingWindowAnalytics,
    getCompanyOverview,
    getEtfProfile,
    getDividends,
    getSplits,
    getIncomeStatement,
    getBalanceSheet,
    getCashFlow,
    getEarnings,
    getEarningsCalendar
};
