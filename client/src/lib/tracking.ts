// Meta Pixel conversion tracking helpers

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

const LEAD_FLAG = "ivoire-lead-tracked";

/**
 * Fire a Meta Pixel "Lead" conversion event.
 * Sets a session flag so the thank-you page fallback doesn't double-fire.
 */
export function trackLead() {
  try {
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead");
      sessionStorage.setItem(LEAD_FLAG, "1");
    }
  } catch {
    // ignore (restrictive privacy modes)
  }
}

/**
 * Fallback for the thank-you page: only fires Lead if it wasn't already
 * tracked at submit time (e.g. pixel blocked momentarily). Never fires on
 * refresh or direct visits after a tracked lead.
 */
export function trackLeadOnceOnThankYou() {
  try {
    if (sessionStorage.getItem(LEAD_FLAG)) return;
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead");
      sessionStorage.setItem(LEAD_FLAG, "1");
    }
  } catch {
    // ignore
  }
}
