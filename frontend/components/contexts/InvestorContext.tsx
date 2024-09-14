"use client"
import * as React from 'react';
import { InvestmentsController } from './controllers/InvestmentsController';
import { useAuthContext } from './AuthContext';
import { MarketStatusListing } from './types/alphaVantage-types';

interface Stock {
  companyName: string,
  ticker: string,
  marketCap: string
  sharePrice: string
}

interface Investment extends Stock {
  shares: { shareCount: number, totalDollarAmount: number },
  transactionHistory: { [key: string]: string },
  marketOfOrigin: MarketStatusListing,
  topics: string[],
}

interface Investor {
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  password: string,
  money: number,
  investments: Investment[]
}

const InvestorContext = React.createContext<InvestorContextType | undefined>(undefined);

export interface InvestorContextType {
  InvestmentsController: () => any
}

export const InvestorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const { token } = useAuthContext();
  const [investor, setInvestor] = React.useState({});

  if (token) {

    return (
      <InvestorContext.Provider value={{
        InvestmentsController
      }}>
        {children}
      </InvestorContext.Provider>
    );
  } else {
    return <body>{children}</body>
  }
};

// Custom hook to use the InvestorContext
export const useInvestorContext = (): InvestorContextType => {
  const context = React.useContext(InvestorContext);
  if (context === undefined) {
    throw new Error('useInvestorContext must be used within an InvestorProvider');
  }
  return context;
};
