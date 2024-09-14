"use client"
import InformationComponent from '@/components/ui/Listing';
import { Stock, top30_default } from '@/constants';
import * as React from 'react';
import { useMarketContext } from '@/components/contexts/MarketContext';
import StockList from '@/components/ui/StockList';
import { NewsSentimentsList } from '@/components/ui/NewsSentiments';
import MarketStatuses from '@/components/ui/MarketStatuses';
import { useSelection } from '@/components/contexts/SelectionContext';
import Dialog from '@/components/ui/Dialog';

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

  const { selectedItem } = useSelection();

  return (
    <>
      {selectedItem ? (<Dialog data={selectedItem} />) : null}
      <section className='flex flex-col'>
        <h1 className='text-customCyan text-start text-[2rem] py-4 pl-6 font-thin bg-black'>Invest</h1>
        <div className='flex gap-8'>
          <span className='flex flex-col items-center w-[33%] '>
            <h1
              className='p-4 text-customCyan bg-gray-800 w-full text-center'
            >The Sentiments</h1>
            <NewsSentimentsList />
          </span>
          <span className='flex flex-col items-center w-[66%]'>
            <h1
              className='p-4 text-customCyan bg-gray-800 w-full text-center'
            >The Stocks</h1>
            <StockList />
          </span>
          <span className='flex flex-col items-center w-[33%]'>
            <h1
              className='p-4 text-customCyan bg-gray-800 w-full text-center'
            >The Markets</h1>
            <MarketStatuses />
          </span>
        </div>
      </section>
    </>
  );
};

export default Invest;
