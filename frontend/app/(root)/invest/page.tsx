import InvestmentComponent from '@/components/ui/InvestmentComponent';
import { top30_default } from '@/constants';
import * as React from 'react';
import { useMarketContext } from '@/components/contexts/MarketContext';

const Invest = () => {

  // TODO:
  /* 
  Integrate realtime data provided by the Alpha Vantage API
  and an Investment Wizard Component that will allow for Investor/Stock
  interaction upon selection. 
      const { stocks } = useMarketContext;
      const { investments } = useInvestorContext;
      const { (CRUD)Investments } = useInvestmentContext;

      - useMarketContext() also provides more than Stock Listings;
          TODO: Implement News Sentiments, Analytics Options, and filtration
                via data prvoded by Alpha Vantage 
  */
  
  return (
    <section className='bg-gray-900 flex flex-col items-center gap-4 p-4'>
      <h1 className='text-white text-2xl font-bold'>The Market</h1>
      <table className='min-w-full bg-gray-800 border border-gray-700'>
        <thead>
          <tr className='bg-gray-700'>
            <th className='text-left text-white px-4 py-2'>Company</th>
            <th className='text-left text-white px-4 py-2'>Ticker</th>
            <th className='text-left text-white px-4 py-2'>Market Cap</th>
            <th className='text-left text-white px-4 py-2'>Stock Price</th>
          </tr>
        </thead>
        <tbody>
          {top30_default.map((stock, index) => (
            <tr
              key={index}
              className='hover:bg-gray-700 text-white hover:text-customCyan'
            >
              <td className='px-4 py-2'>{stock.company}</td>
              <td className='px-4 py-2'>{stock.ticker}</td>
              <td className='px-4 py-2'>{stock.marketCap}</td>
              <td className='px-4 py-2'>{stock.stockPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Invest;
