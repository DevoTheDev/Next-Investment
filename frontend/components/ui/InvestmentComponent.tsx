"use client";
import React from 'react';
import { useInvestorContext } from '../contexts/InvestorContext';
import { useAuthContext } from '../contexts/AuthContext';
import Dialog from './Dialog';

interface Stock {
    name: string,
    symbol: string,
    sharePrice: number,
}

interface Investment extends Stock {
  amount: number;
}

interface InvestorContextProps {
  selected: Stock | Investment
}

const InvestmentComponent: React.FC<InvestorContextProps> = ({

}: InvestorContextProps) => {
  const { createInvestment, getInvestments, getInvestment, updateInvestment, deleteInvestment } = useInvestorContext();
  const { token } = useAuthContext();

  const handleCreate = async () => {
    if (!token) return console.error('Token is required');
    createInvestment(token, { stock_symbol: 'New Investment', amount: 1000 });
  };

  const handleGetAll = async () => {
    if (!token) return console.error('Token is required');
    getInvestments(token);
  };

  const handleGetOne = async () => {
    if (!token) return console.error('Token is required');
    getInvestment(token, 'investmentId123');
  };

  const handleUpdate = async () => {
    if (!token) return console.error('Token is required');
    updateInvestment(token, 'investmentId123', { amount: 1500 });
  };

  const handleDelete = async () => {
    if (!token) return console.error('Token is required');
    deleteInvestment(token, 'investmentId123');
  };

  return (
    <div>
      <button onClick={handleCreate}>Create Investment</button>
      <button onClick={handleGetAll}>Get All Investments</button>
      <button onClick={handleGetOne}>Get Investment</button>
      <button onClick={handleUpdate}>Update Investment</button>
      <button onClick={handleDelete}>Delete Investment</button>
    </div>
  );
};

export default InvestmentComponent;
