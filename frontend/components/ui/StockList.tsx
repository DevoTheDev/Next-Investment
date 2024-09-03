import React from 'react'
import { useInvestorContext } from '../contexts/InvestorContext'

type Props = {
    type: 'stocks' | 'investments'
}

const StockList = (props: Props) => {

    const {} = useInvestorContext();

  return (
    <div>StockList</div>
  )
}

export default StockList