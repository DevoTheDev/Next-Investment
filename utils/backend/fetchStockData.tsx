export const fetchStockData = async (symbol: string) => {
    const apiKey = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  