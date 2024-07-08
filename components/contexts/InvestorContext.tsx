"use client"
import * as React from 'react';
import { fetchStockData } from '@/utils/backend/fetchStockData';
import { Investment } from '@/constants/types';
import { companies } from '@/constants';
import { parseCompanies } from '@/utils/utils';
import { Company } from '@/constants/types';

const InvestorContext = React.createContext<InvestorContextType | undefined>(undefined);

type InvestorContextType = {
  wallet: number,
  availableStocks: Company[],
  investments: Investment[],
};

const InvestorProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {

  // TODO: Correspond a specific user's wallet with a series of investments and transaction history
  const [wallet, setWallet] = React.useState<number>(5000000);
  // TODO: Tether a 'server-side' fetch Component for retrieving public stocks and relevant data to this stateful value
  const [availableStocks, setAvailableStocks] = React.useState<Company[]>([]);
  const [investments, setInvestments] = React.useState<Investment[]>([]);
  const [loading, setLoading] = React.useState(true);

  const handleBuy = (stock: string, amount: number) => {
    // TODO: Target 'stock' as passed, within the 'availableStocks' and invest the desired 'amount' as available in a user's 'wallet'
  };

  const handleSell = (stock: string, amount: number | 'all') => {
    // TODO: Target 'stock' as passed and sell the 'amount' as specified and ensure the returns are invested into a user's wallet
  };

  React.useEffect(() => {

  const publicCompanies = parseCompanies(companies);
  setAvailableStocks(publicCompanies);

  setInvestments([
    { 
      company: { symbol: 'AAPL', color: '#B0E0E6' },
      amount: 3623.12,
    },
    { 
      company: { symbol: 'GOOG', color: '#1E90FF' },
      amount: 2115.92,
    },
    { 
      company: { symbol: 'MCSFT', color: '#89CFF0' },
      amount: 2853.42,
    },
    { 
      company: { symbol: 'H&M', color: '#4169E1' },
      amount: 651.37,
    }
  ])


    const getData = async () => {
    };
    
    getData();
  }, []);
  

  const value = {
    wallet,
    availableStocks,
    investments,
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
