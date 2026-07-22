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
  // The home page no longer has a booking section — send people to the
  // "Connect With Us" form instead. Pages that still render a booking
  // section (e.g. service detail pages) scroll to it directly.
  if (document.getElementById("booking")) {
    scrollToSection("booking");
  } else {
    scrollToSection("growth-plan");
  }
}
