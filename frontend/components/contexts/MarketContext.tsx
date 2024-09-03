"use client";
import React, { createContext, useContext, useState } from 'react';
import { MarketController } from './controllers/MarketController';
import { TimeSeriesController } from './controllers/TimeSeriesController';
import { AnalyticsController } from './controllers/AnalyticsController';

interface MarketContextType {
  marketData: any;
  setMarketData: React.Dispatch<React.SetStateAction<any>>;
  // MarketController methods
  getQuote: (token: string, symbol: string, datatype?: string) => Promise<any>;
  searchSymbols: (token: string, keywords: string, datatype?: string) => Promise<any>;
  getMarketStatus: (token: string) => Promise<any>;
  getHistoricalOptions: (token: string, symbol: string, date: string, datatype?: string) => Promise<any>;
  getNewsSentiment: (token: string, tickers: string, topics: string, timeFrom: string, timeTo: string, sort?: string, limit?: number, datatype?: string) => Promise<any>;
  // TimeSeriesController methods
  getIntradayTimeSeries: (token: string, symbol: string, interval: string, adjusted?: string, extendedHours?: string, month?: string | null, datatype?: string) => Promise<any>;
  getDailyTimeSeries: (token: string, symbol: string, datatype?: string) => Promise<any>;
  // AnalyticsController methods
  getCompanyOverview: (token: string, symbol: string, datatype?: string) => Promise<any>;
  getEarnings: (token: string, symbol: string, datatype?: string) => Promise<any>;
}

const MarketContext = createContext<MarketContextType | undefined>(undefined);

export const MarketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [marketData, setMarketData] = useState<any>(null);

  // MarketController methods
  const getQuote = async (token: string, symbol: string, datatype: string = 'json') => {
    const data = await MarketController.getQuote(token, symbol, datatype);
    setMarketData(data);
    return data;
  };

  const searchSymbols = async (token: string, keywords: string, datatype: string = 'json') => {
    const data = await MarketController.searchSymbols(token, keywords, datatype);
    setMarketData(data);
    return data;
  };

  const getMarketStatus = async (token: string) => {
    const data = await MarketController.getMarketStatus(token);
    setMarketData(data);
    return data;
  };

  const getHistoricalOptions = async (token: string, symbol: string, date: string, datatype: string = 'json') => {
    const data = await MarketController.getHistoricalOptions(token, symbol, date, datatype);
    setMarketData(data);
    return data;
  };

  const getNewsSentiment = async (token: string, tickers: string, topics: string, timeFrom: string, timeTo: string, sort: string = 'LATEST', limit: number = 50, datatype: string = 'json') => {
    const data = await MarketController.getNewsSentiment(token, tickers, topics, timeFrom, timeTo, sort, limit, datatype);
    setMarketData(data);
    return data;
  };

  // TimeSeriesController methods
  const getIntradayTimeSeries = async (token: string, symbol: string, interval: string, adjusted: string = 'true', extendedHours: string = 'true', month: string | null = null, datatype: string = 'json') => {
    const data = await TimeSeriesController.getIntradayTimeSeries(token, symbol, interval, adjusted, extendedHours, month, datatype);
    setMarketData(data);
    return data;
  };

  const getDailyTimeSeries = async (token: string, symbol: string, datatype: string = 'json') => {
    const data = await TimeSeriesController.getDailyTimeSeries(token, symbol, datatype);
    setMarketData(data);
    return data;
  };

  // AnalyticsController methods
  const getCompanyOverview = async (token: string, symbol: string, datatype: string = 'json') => {
    const data = await AnalyticsController.getCompanyOverview(token, symbol, datatype);
    setMarketData(data);
    return data;
  };

  const getEarnings = async (token: string, symbol: string, datatype: string = 'json') => {
    const data = await AnalyticsController.getEarnings(token, symbol, datatype);
    setMarketData(data);
    return data;
  };


  return (
    <MarketContext.Provider value={{
      marketData,
      setMarketData,
      getQuote,
      searchSymbols,
      getMarketStatus,
      getHistoricalOptions,
      getNewsSentiment,
      getIntradayTimeSeries,
      getDailyTimeSeries,
      getCompanyOverview,
      getEarnings,
    }}>
      {children}
    </MarketContext.Provider>
  );
};

export const useMarketContext = () => {
  const context = useContext(MarketContext);
  if (context === undefined) {
    throw new Error('useMarket must be used within a MarketProvider');
  }
  return context;
};
