// Performance monitoring and Core Web Vitals
export function initWebVitals() {
  if (typeof window !== "undefined") {
    // Report Web Vitals to analytics
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(sendToAnalytics);
      getFID(sendToAnalytics);
      getFCP(sendToAnalytics);
      getLCP(sendToAnalytics);
      getTTFB(sendToAnalytics);
    });
  }
}

function sendToAnalytics(metric: any) {
  // Send to your analytics service
  console.log("Web Vital:", metric);

  // Example: Send to Google Analytics
  if (typeof gtag !== "undefined") {
    gtag("event", metric.name, {
      event_category: "Web Vitals",
      value: Math.round(
        metric.name === "CLS" ? metric.value * 1000 : metric.value
      ),
      event_label: metric.id,
      non_interaction: true,
    });
  }
}

// Preload critical resources
export function preloadCriticalResources() {
  if (typeof window !== "undefined") {
    // Preload fonts
    const fontLinks = [
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
    ];

    fontLinks.forEach((href) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = href;
      link.as = "style";
      link.onload = function () {
        this.onload = null;
        this.rel = "stylesheet";
      };
      document.head.appendChild(link);
    });
  }
}

// Image optimization helpers
export function getOptimizedImageUrl(src: string, width: number, quality = 75) {
  // For static images, you might want to use a service like Cloudinary or ImageKit
  return src; // Placeholder - implement based on your image optimization service
}

// SEO-friendly URL generation
export function generateSEOFriendlyUrl(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Remove duplicate hyphens
    .trim();
}

// Generate breadcrumb structured data
export function generateBreadcrumbStructuredData(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Generate FAQ structured data
export function generateFAQStructuredData(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
