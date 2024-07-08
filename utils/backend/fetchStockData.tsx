export const fetchStockData = async (symbols: string[]) => {
  const apiKey = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;
  const fetchPromises = symbols.map(async (symbol) => {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;
    return fetch(url).then(response => response.json());
  });
  const data = await Promise.all(fetchPromises);
  return data;
  };
  