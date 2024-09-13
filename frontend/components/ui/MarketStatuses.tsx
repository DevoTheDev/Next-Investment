"use client";
import React from 'react';
import { MarketStatusListing } from '../contexts/types/alphaVantage-types';
import { default_MarketStatus } from '@/constants';
import List from './List';
import Dialog from './Dialog';
import { useSelection } from '../contexts/SelectionContext';

type Props = {}

const MarketStatuses = (props: Props) => {
    return (
        <List<Partial<MarketStatusListing>> 
        data={default_MarketStatus.markets}
        showKeysOnData
        listContainer={{
            tailwindClass: 'grid grid-cols-1 place-items-center h-lvh overflow-y-scroll'
        }}
        listings={{
            container: {
                tailwindClass: 'relative grid grid-cols-3 bg-gray-700 border cursor-pointer hover:bg-gray-500 w-full pt-[16%]'
            },
            keyValueContainer: {
                tailwindClass: 'bg-gray-800 m-2 p-4 rounded-xl text-sm items-center justify-center place-items-center'
            },
            keyRef: {
                tailwindClass: 'font-bold text-white'
            },
            value: {
                tailwindClass: 'text-customCyan'
            }
        }}
        _Region={{
            keyValueContainer: {
                tailwindClass: 'absolute w-[96%] flex justify-evenly items-center'
            },
            keyRef: {
                tailwindClass: 'text-xl'
            },
            value: {
                tailwindClass: 'text-2xl'
            }
        }}
        />
    )
}

export default MarketStatuses