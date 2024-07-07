import { User } from '@/constants/types';
import React from 'react';
import DoughnutChart from './DoughnutChart';

type Props = {
  user: Partial<User>
}



const MoneyPool = (props: Props) => {
  return (
    <div className='flex flex-col justify-between items-center space-y-4
    md:space-y-0
     md:flex-row 
     md:space-x-4
     bg-gray-700
     rounded-xl
     '>
      <div className="flex flex-col items-center m-6 gap-6
        md:flex-row
        md:border-r-[1px]
        md:pl-12">
        <div className="h-36 w-36">
          <DoughnutChart />
        </div>
        <p className="text-customCyan font-semibold text-4xl 
          md:text-5xl
          md:px-24">
          ${12315.39}
        </p>
      </div>
    </div>
  )
}

export default MoneyPool