"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ActiveUser } from '@/app/page';
import { useInvestorContext } from '../contexts/InvestorContext';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartProps {

}

const DoughnutChart = ({ accounts }: any) => {

    const {  } = useInvestorContext();

    const data = {
        // TODO: Wire up the percentage of the User's total cash to the respective stocks
        datasets: [
            {
                label: 'Shares',
                data: [...investments!.map((inv) => {return inv.amount})],
                backgroundColor: [...investments!.map((inv) => {return inv.company.color})],
            },
            // TODO: Display a calculation of total shares of a company in addition to money invested
        ],
        labels: [...investments!.map((inv) => {return inv.company.symbol})]
    }

  return <Doughnut
    data={data}
    options={{
        cutout: '65%',
        spacing: 0,
        plugins: {
            legend: {
                display: false,
            },
        }
    }}
    />
}

export default DoughnutChart