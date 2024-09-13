"use client"
import React from 'react'
import { useMarketContext } from '../contexts/MarketContext'
import { useAuthContext } from '../contexts/AuthContext'
import { useRouter } from "next/navigation";
import InformationTable from './Listing';
import Listing from './Listing';
import { Market } from '../contexts/types/MarketTypes';
import { Stock, top30_default } from '@/constants';
import List from './List';


type Overview = {
  type: "investor" | "market"
}

const Overview = () => {
  const { getMarketStatus } = useMarketContext();
  const { token } = useAuthContext();
  const router = useRouter();
  const [data, setData] = React.useState<any>(null); // Initialize with null
  const [error, setError] = React.useState<string | null>(null); // Error state

  // If there's no token, redirect to login
  React.useEffect(() => {
    if (!token) {
      router.push("/auth/login");
    }
  }, [token]);

  // Fetch data with error handling
  const fetchData = async () => {
    try {
      const response = await getMarketStatus(token || "");
      if (!response) {
        throw new Error("Failed to fetch market status");
      }
      setData(response);
    } catch (err) {
      setError(err.message);
    }
  };

  React.useEffect(() => {
    if (token) {
      // fetchData();
    }
  }, [token]);

  return (
    <div className='flex justify-center' >
      
    </div>
  );
};

export default Overview;