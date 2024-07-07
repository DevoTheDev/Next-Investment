"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ActiveUser } from '@/app/page';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartProps {

}

const DoughnutChart = ({ accounts }: any) => {

    const data = {
        // TODO: Wire up the percentage of the User's total cash to the respective stocks
        datasets: [
            {
                label: 'Shares',
                data: [...ActiveUser.investments!.map((inv) => {return inv.amount})],
                backgroundColor: [...ActiveUser.investments!.map((inv) => {return inv.label?.color})],
            },
            // TODO: Display a calculation of total shares of a company in addition to money invested
        ],
        labels: [...ActiveUser.investments!.map((inv) => {return inv.label?.title})]
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