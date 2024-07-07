"use client"
import * as React from 'react';
import { fetchStockData } from '@/utils/backend/fetchStockData';
import { Investment } from '@/constants/types';

const InvestorContext = React.createContext<InvestorContextType | undefined>(undefined);

type InvestorContextType = {
  wallet: number,
};

const InvestorProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {

  // TODO: Correspond a specific user's wallet with a series of investments and transaction history
  const [wallet, setWallet] = React.useState<number>(0);
  // TODO: Tether a 'server-side' fetch Component for retrieving public stocks and relevant data to this stateful value
  const [availableStocks, setAvailableStocks] = React.useState<any[]>([]);
  const [investments, setInvestments] = React.useState<Investment[]>([]);

  const handleBuy = (stock: string, amount: number) => {
    // TODO: Target 'stock' as passed, within the 'availableStocks' and invest the desired 'amount' as available in a user's 'wallet'
  };

  const handleSell = (stock: string, amount: number | 'all') => {
    // TODO: Target 'stock' as passed and sell the 'amount' as specified and ensure the returns are invested into a user's wallet
  };

  const value = {
    wallet
  };

  return (
    <InvestorContext.Provider value={value}>
      {children}
    </InvestorContext.Provider>
  )
}

const useInvestorContext = () => {
  const context = React.useContext(InvestorContext);
  if (context === undefined) {
    throw new Error('useInvestorContext must be used within an InvestorProvider');
  }
  return context;
}

export { InvestorProvider, useInvestorContext };
export default InvestorContext;
