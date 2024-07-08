"use client"
import React, { useState } from 'react';
import StockTable from './table/StockTable'
import { Company } from '@/constants/types';

interface StockListingProps {
  stock: Partial<Company>;
  // Type: Portfolio Listing || Public Listing
  // TODO: Render different options for stock interaction based on type
  /* 
    -Portfolio- will allow for Investment specific information such as Investment-Trend since last purchase,
    Buy/Sell options according to both Shares and Dollar Amount
    Date since initial Investment
    Returns percentage
    Amount Invested in both Dollar and Share amount

    -

    -Public- will show Stock trend data across a timeline specified by a <DateFilter />
    Buy options according to both Share and Dollar Amount
    Notification for 'Active Investment'
  */
}
// TODO: Create a StockList component utilizes the fetchStockData call and creates a StockListing for each stock

const StockListing: React.FC<StockListingProps> = ({ stock }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="">
      <div
        className="cursor-pointer p-4 border-[0.2rem]
         border-gray-800 rounded-lg bg-gray-500
         text-customCyan text-xl
         "
        onClick={toggleExpand}
      >
        {/* TODO: Render minimalist data that is useful at a glance before deploying the StockTable */}
        <p className="font-semibold">{stock.companyName || stock.symbol}</p>
      </div>
      {isExpanded && <StockTable symbol={stock.symbol!} />}
    </div>
  );
};

export default StockListing;
