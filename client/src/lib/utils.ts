import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    // Section isn't on the current page (e.g. a service detail page) — go home and scroll there.
    window.location.href = `/#${id}`;
  }
}

export const CONTACT_EMAIL = "contact@ivoiredigital.com";

export function goToBooking() {
  scrollToSection("booking");
}
