"use client";
import { Stock, default_NewsSentiments } from '@/constants';
import List from './List';
import React from 'react';
import { NewsSentiments, NewsFeedItem } from '../contexts/types/MarketTypes';
import Listing from './Listing';
import { useRouter } from 'next/navigation';

type Props = {}

export const NewsSentimentsList: React.FC<Props> = () => {
    const logThis = () => {
        console.log("This")
    }

    const router = useRouter();
    return (
        <List<Partial<NewsFeedItem>> 
        data={default_NewsSentiments.feed}
        listContainer={{
          tailwindClass: 'grid grid-cols-1 place-items-center h-lvh overflow-y-scroll' // Add height and scroll
        }}
        listings={{
          container: {
            tailwindClass: 'relative flex flex-col bg-gray-700 border cursor-pointer hover:bg-gray-500 w-full'
          },
        }}
        _Title={{
          keyValueContainer: {
            tailwindClass: `
            font-extrabold text-[1.2rem] text-black flex flex-wrap 
            order-1 hover:text-customCyan hover:underline
            p-8
            `
          }
        }}
        _Summary={{
          keyValueContainer: {
            tailwindClass: `
            font-thin text-sm flex flex-wrap order-2 pb-[10%]
            m-8
            `
          }
        }}
        _Authors={{
          keyValueContainer: {
            tailwindClass: 'order-3 font-bold bg-gray-400 absolute bottom-0 right-0 p-2'
          }
        }}
        hideCategory_within_source
        hideOverall_sentiment_label
        hideOverall_sentiment_score
        hideSource
        hideSource_domain
        hideBanner_image
        hideTime_published
        hideUrl
        hideTopics
        hideTicker_sentiment
      />
    );
}
