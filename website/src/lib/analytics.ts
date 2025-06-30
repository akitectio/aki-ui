// Google Analytics configuration and utilities
export const GA_TRACKING_ID =
  process.env.NEXT_PUBLIC_GA_ID || "GA_MEASUREMENT_ID";

export const gtag = (...args: any[]) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag(...args);
  }
};

// Track page views
export const pageview = (url: string) => {
  gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Check if Analytics is enabled (in production and with tracking ID)
export const isAnalyticsEnabled = () => {
  return (
    process.env.NODE_ENV === "production" &&
    GA_TRACKING_ID !== "GA_MEASUREMENT_ID"
  );
};
