import StockList from '@/components/ui/StockList'
import React from 'react'

type Props = {}

const Invest = (props: Props) => {
  return (
    <section>
      <div className='text-4xl
      font-bold tracking-wide text-customCyan
      bg-gray-900 p-2 rounded-xl
      '>
        <span className='bg-gray-500 w-full flex justify-center rounded-lg p-4' >
          Invest
        </span>
      </div>
      <div className="w-full border-[1rem] rounded-xl my-1 bg-gray-600 border-gray-600">
        <StockList type='public' />
      </div>
    </section>
  )
}

export default Invest