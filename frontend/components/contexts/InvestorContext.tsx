"use client"
import * as React from 'react';
import { InvestmentsController } from './controllers/InvestmentsController';
import { useAuthContext } from './AuthContext';

const InvestorContext = React.createContext<InvestorContextType | undefined>(undefined);

export interface InvestorContextType {
  createInvestment: (token: string, investmentData: any) => void;
  getInvestments: (token: string) => void;
  getInvestment: (token: string, investmentId: string) => void;
  updateInvestment: (token: string, investmentId: string, investmentData: any) => void;
  deleteInvestment: (token: string, investmentId: string) => void;
}

export const InvestorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const { createInvestment, getInvestments, getInvestment, updateInvestment, deleteInvestment } = InvestmentsController();
  const { token } = useAuthContext();

  const handleCreateInvestment = async (token: string, investmentData: any) => {
    try {
      const response = await createInvestment(token, investmentData);
      console.log('Investment created successfully:', response);
    } catch (error) {
      console.error('Failed to create investment:', error);
    }
  };

  const handleGetInvestments = async (token: string) => {
    try {
      const response = await getInvestments(token);
      console.log('Investments retrieved successfully:', response);
    } catch (error) {
      console.error('Failed to retrieve investments:', error);
    }
  };

  const handleGetInvestment = async (token: string, investmentId: string) => {
    try {
      const response = await getInvestment(token, investmentId);
      console.log('Investment retrieved successfully:', response);
    } catch (error) {
      console.error('Failed to retrieve investment:', error);
    }
  };

  const handleUpdateInvestment = async (token: string, investmentId: string, investmentData: any) => {
    try {
      const response = await updateInvestment(token, investmentId, investmentData);
      console.log('Investment updated successfully:', response);
    } catch (error) {
      console.error('Failed to update investment:', error);
    }
  };

  const handleDeleteInvestment = async (token: string, investmentId: string) => {
    try {
      const response = await deleteInvestment(token, investmentId);
      console.log('Investment deleted successfully:', response);
    } catch (error) {
      console.error('Failed to delete investment:', error);
    }
  };
  if (token) {

    return (
      <InvestorContext.Provider value={{
        createInvestment: handleCreateInvestment,
        getInvestments: handleGetInvestments,
        getInvestment: handleGetInvestment,
        updateInvestment: handleUpdateInvestment,
        deleteInvestment: handleDeleteInvestment,
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
