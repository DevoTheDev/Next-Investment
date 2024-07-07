"use client"
import React, { useState } from 'react';
import StockTable from './table/StockTable'

interface StockListingProps {
  stock: { symbol: string; companyName: string;};
}
// TODO: Create a StockList component utilizes the fetchStockData call and creates a StockListing for each stock

/* Sub-TODO: Ensure there is a 'market-side' version of this functionality for displaying 
stocks available on the market and an 'investor-side' version 
that is only the stocks specifically invested in by the user */

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
        <p className="font-semibold">{stock.companyName}</p>
      </div>
      {isExpanded && <StockTable symbol={stock.symbol} />}
    </div>
  );
};

export default StockListing;
