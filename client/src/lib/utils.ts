import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export const CALENDLY_URL = "https://calendly.com/koneyassine49/fitness-consultation";
export const CONTACT_EMAIL = "contact@ivoiredigital.com";
export const CONTACT_PHONE = "(945) 223-8799";
export const CONTACT_PHONE_HREF = "tel:+19452238799";

export function openCalendly() {
  window.open(CALENDLY_URL, "_blank");
}
