"use client"
import Listing from "@/components/ui/Listing";
import Overview from "@/components/ui/Overview";
import StockList from "@/components/ui/StockList";
import { Stock, top30_default } from "@/constants";
import { MappedDetails } from "@/constants/types";
import * as React from "react";

const Home = () => {
 
  return (
      <section>
        <Listing<Stock>
        data={top30_default[2]}
        showKeysOnData
        mapped={{
          container: {
            tailwindClass: 'hover:bg-gray-700 text-customCyan',
            onClick: (e: any) => {return console.log(e.target.innerText)}
          }
        }}
        />
      </section>
  )
}

export default Home