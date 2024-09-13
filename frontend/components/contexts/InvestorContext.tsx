"use client"
import * as React from 'react';
import { InvestmentsController } from './controllers/InvestmentsController';
import { useAuthContext } from './AuthContext';

const InvestorContext = React.createContext<InvestorContextType | undefined>(undefined);

export interface InvestorContextType {
  InvestmentsController: () => any
}

export const InvestorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const { token } = useAuthContext();

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
