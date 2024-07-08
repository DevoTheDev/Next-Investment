import * as React from "react";
import RootLayout from "./(root)/layout";
import MoneyPool from "@/components/ui/MoneyPool";
import "@/constants/types"
import StockListing from "@/components/ui/StockListing";
import { Company, User } from "@/constants/types";
import StockTable from "@/components/ui/table/StockTable";
import { useInvestorContext } from "@/components/contexts/InvestorContext";
import StockList from "@/components/ui/StockList";
type Props = {}

export const ActiveUser: Partial<User> = {
  firstName: "Devon",
  lastName: "Fennell",
  money: 231984.32,
  email: "contact@devon.com",
  password: "password",
  investments: [
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
  ]
}

const Home = (props: Props) => {
  return (
    <RootLayout>
      <div className="rounded-lg">
        <div className="border-[1rem] my-1 rounded-xl bg-gray-600 border-gray-600">
          {/* TODO: Move the MoneyPool into the layout.tsx file so that 
          the tracking of a user's wallet and other user information will not
          only be available on the home page */}
        <MoneyPool user={ActiveUser}/>
        </div>
        <div className="w-full border-[1rem] rounded-xl my-1 bg-gray-600 border-gray-600">
          {/* TODO: Make into a StockList component */}
          <StockList type="portfolio"/>
          {/* <StockListing stock={{ symbol: 'AAPL', companyName: 'Apple Inc.' }} /> */}
        </div>
        {/* <StockTable symbol="AAPL" /> */}
    </div>
    </RootLayout>
  )
}

export default Home