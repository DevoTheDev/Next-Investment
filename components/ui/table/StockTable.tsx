"use client";
import { useEffect, useState } from 'react';
import { fetchStockData } from '@/utils/backend/fetchStockData';
import HeaderWithDropDown from './HeaderWithDropDown';

interface StockData {
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

const roundToTwoDecimals = (value: string) => {
  const numberValue = parseFloat(value);
  return numberValue.toFixed(2);
};

const StockTable = ({ symbol }: { symbol: string }) => {
  const [stockData, setStockData] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        // TODO: Decouple this fetch request from this 'client-side' component for more flexible access
        const data = await fetchStockData(symbol);
        const timeSeries = data['Time Series (Daily)'];
        const parsedData: StockData[] = Object.keys(timeSeries).map((date) => ({
          date,
          open: roundToTwoDecimals(timeSeries[date]['1. open']),
          high: roundToTwoDecimals(timeSeries[date]['2. high']),
          low: roundToTwoDecimals(timeSeries[date]['3. low']),
          close: roundToTwoDecimals(timeSeries[date]['4. close']),
          volume: timeSeries[date]['5. volume'],
        }));
        setStockData(parsedData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch stock data');
        setLoading(false);
      }
    };

    getData();
  }, [symbol]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-gray-700 rounded-lg">
      <table className="w-full">
        <thead>
          <tr>
            <HeaderWithDropDown title="Date" description="Date of Session" />
            <HeaderWithDropDown title="Open" description="Price at Opening" />
            <HeaderWithDropDown title="High" description="Session Price High" />
            <HeaderWithDropDown title="Low" description="Session Price Low" />
            <HeaderWithDropDown title="Close" description="Price at Close" />
            <HeaderWithDropDown title="Volume" description="Total Shares Traded" />
          </tr>
        </thead>
        <tbody>
          {stockData.map((data) => (
            <tr key={data.date} className="table-row">
              <td className="table-cell">{data.date}</td>
              <td className="table-cell">{data.open}</td>
              <td className="table-cell">{data.high}</td>
              <td className="table-cell">{data.low}</td>
              <td className="table-cell">{data.close}</td>
              <td className="table-cell">{data.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
