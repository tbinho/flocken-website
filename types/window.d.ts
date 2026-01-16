/**
 * Global Window interface extensions for Flocken
 * Centralized type definitions for browser globals
 */

declare global {
  interface Window {
    // GTM dataLayer (required, not optional, to match GTM initialization)
    dataLayer: Array<Record<string, unknown>>;
    
    // Meta Pixel
    fbq?: (...args: unknown[]) => void;
    
    // Cookie banner
    showCookieSettings?: () => void;
  }
}

export {};

