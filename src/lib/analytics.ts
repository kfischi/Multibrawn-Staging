/**
 * Google Analytics Event Tracking Utilities
 * Use these functions to track custom events throughout your app
 */

// Type definitions
export interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Send a custom event to Google Analytics
 */
export const trackEvent = ({ action, category, label, value }: GAEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

/**
 * Track page views
 */
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
      page_path: url,
    });
  }
};

/**
 * Track property views
 */
export const trackPropertyView = (propertyId: string, propertyName: string) => {
  trackEvent({
    action: 'view_property',
    category: 'Property',
    label: `${propertyId} - ${propertyName}`,
  });
};

/**
 * Track lead submissions
 */
export const trackLeadSubmission = (propertyType: string, source: string) => {
  trackEvent({
    action: 'submit_lead',
    category: 'Lead',
    label: `${propertyType} - ${source}`,
    value: 1,
  });
};

/**
 * Track WhatsApp button clicks
 */
export const trackWhatsAppClick = (location: string) => {
  trackEvent({
    action: 'click_whatsapp',
    category: 'Contact',
    label: location,
  });
};

/**
 * Track chatbot interactions
 */
export const trackChatbotInteraction = (step: string, action: string) => {
  trackEvent({
    action: 'chatbot_interaction',
    category: 'Chatbot',
    label: `${step} - ${action}`,
  });
};

/**
 * Track affiliate link clicks
 */
export const trackAffiliateLinkClick = (propertyName: string, platform: string) => {
  trackEvent({
    action: 'click_affiliate_link',
    category: 'Affiliate',
    label: `${propertyName} - ${platform}`,
  });
};

/**
 * Track search queries
 */
export const trackSearch = (searchTerm: string, resultsCount: number) => {
  trackEvent({
    action: 'search',
    category: 'Search',
    label: searchTerm,
    value: resultsCount,
  });
};

/**
 * Track filter usage
 */
export const trackFilter = (filterType: string, filterValue: string) => {
  trackEvent({
    action: 'use_filter',
    category: 'Filter',
    label: `${filterType}: ${filterValue}`,
  });
};

/**
 * Track video plays
 */
export const trackVideoPlay = (videoTitle: string) => {
  trackEvent({
    action: 'play_video',
    category: 'Video',
    label: videoTitle,
  });
};

/**
 * Track social media clicks
 */
export const trackSocialClick = (platform: string) => {
  trackEvent({
    action: 'click_social',
    category: 'Social',
    label: platform,
  });
};

/**
 * Track outbound links
 */
export const trackOutboundLink = (url: string) => {
  trackEvent({
    action: 'click_outbound',
    category: 'Outbound',
    label: url,
  });
};

/**
 * Track form submissions
 */
export const trackFormSubmission = (formName: string) => {
  trackEvent({
    action: 'submit_form',
    category: 'Form',
    label: formName,
  });
};

/**
 * Track errors
 */
export const trackError = (errorMessage: string, errorLocation: string) => {
  trackEvent({
    action: 'error',
    category: 'Error',
    label: `${errorLocation}: ${errorMessage}`,
  });
};
