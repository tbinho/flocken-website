/**
 * Tracking utilities för Flocken
 * Skickar events till GTM dataLayer för GA4 tracking
 */

/**
 * Track app installation click
 * Använd när användare klickar på Google Play eller App Store länkar
 */
export function trackAppInstall(platform: 'android' | 'ios', source?: string) {
  if (typeof window === 'undefined' || !window.dataLayer) {
    console.warn('dataLayer not available');
    return;
  }

  window.dataLayer.push({
    event: 'app_install',
    platform: platform,
    source: source || 'website',
    value: 50, // Estimated value in SEK
    currency: 'SEK'
  });
}

/**
 * Track sign up event
 * Använd när användare registrerar sig
 */
export function trackSignUp(method: 'email' | 'google' | 'apple', userId?: string) {
  if (typeof window === 'undefined' || !window.dataLayer) {
    console.warn('dataLayer not available');
    return;
  }

  window.dataLayer.push({
    event: 'sign_up',
    signup_method: method,
    user_id: userId,
    value: 100, // Estimated value in SEK
    currency: 'SEK'
  });
}

/**
 * Track purchase/subscription event
 * Använd när användare köper premium subscription
 */
export function trackPurchase(
  transactionId: string,
  value: number,
  items: Array<{
    item_name: string;
    item_category?: string;
    item_id?: string;
    quantity?: number;
    price: number;
  }>
) {
  if (typeof window === 'undefined' || !window.dataLayer) {
    console.warn('dataLayer not available');
    return;
  }

  window.dataLayer.push({
    event: 'purchase',
    transaction_id: transactionId,
    value: value,
    currency: 'SEK',
    items: items
  });
}

/**
 * Track subscription start
 * Använd när användare startar premium subscription
 */
export function trackSubscriptionStart(transactionId: string, value: number) {
  if (typeof window === 'undefined' || !window.dataLayer) {
    console.warn('dataLayer not available');
    return;
  }

  window.dataLayer.push({
    event: 'subscription_start',
    transaction_id: transactionId,
    value: value,
    currency: 'SEK'
  });
}

/**
 * Track listing created
 * Använd när användare skapar en hundannons
 */
export function trackListingCreated(listingId: string, listingType?: string) {
  if (typeof window === 'undefined' || !window.dataLayer) {
    console.warn('dataLayer not available');
    return;
  }

  window.dataLayer.push({
    event: 'listing_created',
    listing_id: listingId,
    listing_type: listingType || 'dog',
    value: 0,
    currency: 'SEK'
  });
}

/**
 * Track booking created
 * Använd när användare skapar en bokning
 */
export function trackBookingCreated(
  bookingId: string,
  bookingType: 'dog_sitter' | 'dog_walker',
  value: number
) {
  if (typeof window === 'undefined' || !window.dataLayer) {
    console.warn('dataLayer not available');
    return;
  }

  window.dataLayer.push({
    event: 'booking_created',
    booking_id: bookingId,
    booking_type: bookingType,
    value: value,
    currency: 'SEK'
  });
}

/**
 * Track booking confirmed
 * Använd när bokning bekräftas
 */
export function trackBookingConfirmed(
  bookingId: string,
  bookingType: 'dog_sitter' | 'dog_walker',
  value: number
) {
  if (typeof window === 'undefined' || !window.dataLayer) {
    console.warn('dataLayer not available');
    return;
  }

  window.dataLayer.push({
    event: 'booking_confirmed',
    booking_id: bookingId,
    booking_type: bookingType,
    value: value,
    currency: 'SEK'
  });
}

/**
 * Track message sent
 * Använd när användare skickar meddelande
 */
export function trackMessageSent(messageType: 'text' | 'image' | 'video', conversationId?: string) {
  if (typeof window === 'undefined' || !window.dataLayer) {
    console.warn('dataLayer not available');
    return;
  }

  window.dataLayer.push({
    event: 'message_sent',
    message_type: messageType,
    conversation_id: conversationId
  });
}

