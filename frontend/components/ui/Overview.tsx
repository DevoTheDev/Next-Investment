"use client"
import React from 'react'
import { useMarketContext } from '../contexts/MarketContext'

type Overview = {
    type: "investor" | "market"
}

const Overview = ({

}: Overview) => {

    const { getMarketStatus, getCompanyOverview } = useMarketContext();

  return (
    <div>Overview</div>
  )
}

export default Overview