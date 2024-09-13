"use client";
import React from 'react';
import formatHeader, { capitalize } from '../../lib/utils'; // Assuming you have a utility to capitalize strings
import { MappedDetails, Detail, BasicConfig } from '@/constants/types';
import Dialog from './Dialog';
import { useSelection } from '../contexts/SelectionContext';

// The main ListingProps type that accepts dynamic mappings for _Key
export type ListingProps<T extends object> = { [key: `_${string}`]: any } & {
  data: T;
  showKeysOnData?: boolean;
  mapped?: Partial<BasicConfig>;
  children?: React.ReactNode;
} & MappedDetails<T, "_", BasicConfig>
  & MappedDetails<T, "hide", boolean>;

const Listing = <T extends object>(props: ListingProps<T>) => {
  const {
    data,
    mapped,
    showKeysOnData,
    children,
  } = props;

  const { selectedItem, setSelectedItem } = useSelection();

  const handleSelection = (selection?: any) => {
    console.log(data);
    setSelectedItem(data);
    mapped?.container?.onClick && mapped?.container?.onClick(selection)
  }
  // Function to merge tailwind classes
  const mergeClasses = (...classes: (string | undefined)[]) => {
    return classes.filter(Boolean).join(' ');
  };

  // Function to render nested key-value pairs
  const render = (objWithKeys: T): React.ReactNode => {
    return (
      <section
        className={mergeClasses(mapped?.container?.tailwindClass)}
        style={{ ...mapped?.container?.style }}
        onClick={handleSelection}
        onTouchStart={mapped?.container?.onTouchStart}
        onTouchEnd={mapped?.container?.onTouchEnd}
      >
        {Object.entries(objWithKeys).map(([key, val]) => {
          const capitalizedKey = capitalize(key);
          const targetedKey = props[`_${capitalizedKey}`] as Omit<BasicConfig, 'container'>;
          const hiddenKey = props[`hide${capitalizedKey}`] as boolean;

          if (!hiddenKey && targetedKey) {
            const { keyValueContainer, keyRef, value } = targetedKey;

            // Merge targeted and mapped styles & classes
            const mergedKeyValueClass = mergeClasses(mapped?.keyValueContainer?.tailwindClass, keyValueContainer?.tailwindClass);
            const mergedKeyRefClass = mergeClasses(mapped?.keyRef?.tailwindClass, keyRef?.tailwindClass);
            const mergedValueClass = mergeClasses(mapped?.value?.tailwindClass, value?.tailwindClass);

            return (
              <div
                onClick={keyValueContainer?.onClick || mapped?.keyValueContainer?.onClick}
                className={mergedKeyValueClass}
                style={{ ...mapped?.keyValueContainer?.style, ...keyValueContainer?.style }}
              >
                {showKeysOnData && (
                  <p
                    onClick={keyRef?.onClick || mapped?.keyRef?.onClick}
                    className={mergedKeyRefClass}
                    style={{ ...mapped?.keyRef?.style, ...keyRef?.style }}
                  >
                    {formatHeader(key?.toString())}
                  </p>
                )}
                <p
                  onClick={value?.onClick || mapped?.value?.onClick}
                  className={mergedValueClass}
                  style={{ ...mapped?.value?.style, ...value?.style }}
                >
                  {val?.toString()}
                </p>
              </div>
            );
          }

          return (
            !hiddenKey && (
              <div
                key={key}
                onClick={mapped?.keyValueContainer?.onClick}
                className={mergeClasses(mapped?.keyValueContainer?.tailwindClass)}
                style={{ ...mapped?.keyValueContainer?.style }}
              >
                {showKeysOnData && (
                  <p
                    onClick={mapped?.keyRef?.onClick}
                    className={mergeClasses(mapped?.keyRef?.tailwindClass)}
                    style={{ ...mapped?.keyRef?.style }}
                  >
                    {formatHeader(key?.toString())}
                  </p>
                )}
                <p
                  onClick={mapped?.value?.onClick}
                  className={mergeClasses(mapped?.value?.tailwindClass)}
                  style={{ ...mapped?.value?.style }}
                >
                  {val?.toString()}
                </p>
              </div>
            )
          );
        })}
      </section>
    );
  };

  return render(data)
};

export default Listing;
