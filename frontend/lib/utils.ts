import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generate() {
    const randomKey = (length: number, otherText?: string | number): string => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
  }

  return result + otherText;
    }

    return {
      randomKey
    }
}

export function capitalize(key: string) {
  return key.charAt(0).toUpperCase() + key.slice(1);
}

// Utility function to convert camelCase or snake_case to readable format
export const formatHeader = (key: string): string => {
  // Handle snake_case by splitting at underscores and capitalizing
  if (key.includes('_')) {
    return key
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  // Handle camelCase by inserting spaces before capital letters and capitalizing
  return key
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Insert space before capital letters
    .replace(/^[a-z]/, str => str.toUpperCase()); // Capitalize the first letter
};

export default formatHeader;

/* 
Function to take an array of loosely typed objects
and extract an array of all the unique keys in the array.
*/

export function extractUniqueKeys<T extends object>(data: T[]): string[] {
  const uniqueKeys = new Set<string>();

  data.forEach(item => {
      Object.keys(item).forEach(key => {
          uniqueKeys.add(key); // Add each key to the Set
      });
  });

  return Array.from(uniqueKeys); // Convert the Set to an array
}
