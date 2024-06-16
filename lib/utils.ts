import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getOS() {
  const userAgent = window?.navigator.userAgent.toLowerCase() || "";

  // Mac인지 Windows인지 확인
  if (userAgent.includes("mac")) {
    return "MAC";
  }
  return "WINDOW";
}
