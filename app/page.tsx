import * as React from "react";
import RootLayout from "./(root)/layout";
import MoneyPool from "@/components/ui/MoneyPool";
import "@/constants/types"
import StockListing from "@/components/ui/StockListing";
import { User } from "@/constants/types";
type Props = {}

export const ActiveUser: Partial<User> = {
  firstName: "Devon",
  lastName: "Fennell",
  money: { amount: 231984.32, },
  email: "contact@devon.com",
  password: "password",
  investments: [
    { 
      label: { title: 'AAPL', color: '#B0E0E6' },
      amount: 3623.12,
    },
    { 
      label: { title: 'GOOG', color: '#1E90FF' },
      amount: 2115.92,
    },
    { 
      label: { title: 'MCSFT', color: '#89CFF0' },
      amount: 2853.42,
    },
    { 
      label: { title: 'H&M', color: '#4169E1' },
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
          <StockListing stock={{ symbol: 'AAPL', companyName: 'Apple Inc.' }} />
        </div>
    </div>
    </RootLayout>
  )
}

export default Home