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

export function capitalizeKey(key: string) {
  return key.charAt(0).toUpperCase() + key.slice(1);
}
