import * as React from 'react';
import { getLCP, getFID, getCLS } from 'web-vitals';

declare const ga: any;

function sendToGoogleAnalytics({ name, delta, id }: any) {
  // Assumes the global `ga()` function exists, see:
  // https://developers.google.com/analytics/devguides/collection/analyticsjs
  ga('send', 'event', {
    eventCategory: 'Web Vitals',
    eventAction: name,
    // The `id` value will be unique to the current page load. When sending
    // multiple values from the same page (e.g. for CLS), Google Analytics can
    // compute a total by grouping on this ID (note: requires `eventLabel` to
    // be a dimension in your report).
    eventLabel: id,
    // Google Analytics metrics must be integers, so the value is rounded.
    // For CLS the value is first multiplied by 1000 for greater precision
    // (note: increase the multiplier for greater precision if needed).
    eventValue: Math.round(name === 'CLS' ? delta * 1000 : delta),
    // Use a non-interaction event to avoid affecting bounce rate.
    nonInteraction: true,
    // Use `sendBeacon()` if the browser supports it.
    transport: 'beacon',
  });
}

const useWebVitals = () => {
  React.useEffect(() => {
    getCLS(sendToGoogleAnalytics);
    getFID(sendToGoogleAnalytics);
    getLCP(sendToGoogleAnalytics);
  }, []);
};
export { useWebVitals };
