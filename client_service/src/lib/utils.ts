import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function arrayAreEqual(arr1: any[], arr2: any[]) {
  if (arr1.length != arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (!arr1.includes(arr2[i])) return false;
  }
  return true;
}

export const moveArray = (
  array: any[],
  dragIndex: number,
  dropIndex: number
) => {
  const item = array[dragIndex];
  const newArray = [...array];
  newArray.splice(dragIndex, 1);
  newArray.splice(dropIndex, 0, item);
  return newArray;
};
