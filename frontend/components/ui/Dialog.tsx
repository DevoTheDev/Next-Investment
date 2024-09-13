"use client";
import React from 'react'
import Listing, { ListingProps } from './Listing'
import { useSelection } from '../contexts/SelectionContext';

type DialogProps<T extends object> = ListingProps<T>;

const Dialog = <T extends object>(
  { data }: DialogProps<T>
) => {
  const { setSelectedItem } = useSelection();

  const handleDialogClose = () => {
    setSelectedItem(undefined);
  }
  return (
    <section className={`fixed bg-black bg-opacity-70 h-full w-full z-10 flex flex-col ov justify-center items-center top-0 `}>
      <div
        className={`
        w-max text-end px-4 bg-red-400
        mb-2
        hover:bg-red-500 hover:text-white font-bold 
        text-[2rem] cursor-pointer rounded-xl
        `}
        onClick={handleDialogClose}>X</div>
      <Listing
        data={data}
        
      />
    </section>
  )
}

export default Dialog