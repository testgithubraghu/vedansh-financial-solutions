import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatIndianCurrency(amount: number): string {
  if (isNaN(amount)) return "₹0";
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });
  return formatter.format(amount);
}

export function formatIndianNumber(num: number): string {
  if (isNaN(num)) return "0";
  return new Intl.NumberFormat("en-IN").format(num);
}
