import { GOOGLE_ANALYTICS_TRACKING_ID } from '../constants';
import { TGTagEvent } from '../types';

declare global {
  interface Window {
    gtag: any;
  }
}

export const pageview = (url: URL) => {
  window.gtag('config', GOOGLE_ANALYTICS_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }: TGTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
