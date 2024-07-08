"use client";
import React from 'react'
import { useInvestorContext } from '../contexts/InvestorContext';
import { Company, Investment } from '@/constants/types';
import StockListing from './StockListing';

type Props = {
  type: 'public' | 'portfolio',
}

const StockList = (props: Props) => {

  const { availableStocks, investments } = useInvestorContext();

  if (props.type === 'public') {
    return (
    <div className="flex flex-col gap-2">{
      availableStocks.map((stock: Company) => {
        return (
          <StockListing stock={stock} />
        )
      })
    }</div>
  )}

  else {
    return (
    <div className="flex flex-col gap-2">{
      investments.map((stock: Investment) => {
        return (
          <StockListing stock={stock.company} />
        )
      })
    }</div>
  )}
}

export default StockList