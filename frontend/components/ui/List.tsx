"use client"
import React from 'react';
import Listing from './Listing';
import { BasicConfig, Interactable, MappedDetails, Stylable } from "../../constants/types";
import { capitalize, extractUniqueKeys, formatHeader } from '@/lib/utils';
import { ListingProps } from './Listing';
import Dialog from './Dialog';
import { useSelection } from '../contexts/SelectionContext';

type ListProps<T extends object> = {
  data: T[],
  listContainer?: Stylable & Interactable,
  listings?: BasicConfig,
  showKeysOnData?: boolean
} & MappedDetails<T, "_", Omit<BasicConfig, 'container'>>
& MappedDetails<T, "hide", boolean>;

const List = <T extends object>({
  data,
  listings,
  listContainer,
  showKeysOnData,
  ...otherProps
}: ListProps<T>) => {
  const uniqueKeys = extractUniqueKeys(data);
  return (
    <section
      className={listContainer?.tailwindClass}
      style={listContainer?.style}
      onClick={listContainer?.onClick}
      onTouchStart={listContainer?.onTouchStart}
      onTouchEnd={listContainer?.onTouchEnd}
    >
      {data.map((row, rowIndex) => {
        return (
          <Listing<T>
          key={rowIndex}
          data={row}
          showKeysOnData={showKeysOnData}
          mapped={listings}
          {...otherProps}
          />
        )
      })}
    </section>
  );
};

export default List;
