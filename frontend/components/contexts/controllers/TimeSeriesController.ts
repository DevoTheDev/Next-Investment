import axios from 'axios';
import { BASE_URL } from './AuthController';

const getIntradayTimeSeries = async (token: string, symbol: string, interval: string, adjusted: string = 'true', extendedHours: string = 'true', month: string | null = null, datatype: string = 'json'): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/intraday`, {
        params: { symbol, interval, adjusted, extended_hours: extendedHours, month, datatype },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

const getDailyTimeSeries = async (token: string, symbol: string, datatype: string = 'json'): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/daily`, {
        params: { symbol, datatype },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

const getWeeklyTimeSeries = async (token: string, symbol: string, datatype: string = 'json'): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/weekly`, {
        params: { symbol, datatype },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

const getMonthlyTimeSeries = async (token: string, symbol: string, datatype: string = 'json'): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/monthly`, {
        params: { symbol, datatype },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const TimeSeriesController = {
    getIntradayTimeSeries,
    getDailyTimeSeries,
    getWeeklyTimeSeries,
    getMonthlyTimeSeries,
};
