"use client"
import React from 'react'
import { useRouter } from "next/navigation";
import { Stock, top30_default } from '@/constants';
import List from './List';

type Props = {
}

const StockList = (props: Props) => {

  const [error, setError] = React.useState<string | null>(null); // Error state

    return (
      <List<Partial<Stock>> 
                data={top30_default}
                listContainer={{
                    tailwindClass: `grid grid-cols-1 place-items-center h-lvh overflow-y-scroll w-full text-white`
                }}
                listings={{
                    container: {
                        tailwindClass: `
                        relative grid grid-cols-4 bg-gray-700 p-4
                        cursor-pointer hover:bg-gray-500 w-full
                        hover:text-customCyan`
                    },
                }}
                
            />
    );
}

export default StockList