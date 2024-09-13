"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SelectionContextType {
  selectedItem: any;
  setSelectedItem: React.Dispatch<any>
}

const SelectionContext = createContext<SelectionContextType | undefined>(undefined);

interface SelectionProviderProps {
  children: ReactNode;
}

export const SelectionProvider: React.FC<SelectionProviderProps> = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState<any | undefined>(undefined);


  const value = {
    selectedItem,
    setSelectedItem
  };

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = (): SelectionContextType => {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error('useSelection must be used within a SelectionProvider');
  }
  return context;
};
