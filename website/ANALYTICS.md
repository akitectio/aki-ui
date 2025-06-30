# Google Analytics Setup

This website includes Google Analytics (gtag.js) integration for tracking user behavior and website performance.

## Configuration

To enable Google Analytics in production:

1. Get your Google Analytics Measurement ID from the Google Analytics dashboard
2. Set the environment variable in the appropriate location:

   **Local Development:**

   ```bash
   # Create website/.env.local
   NEXT_PUBLIC_GA_ID=G-SCVKWYC8YX
   ```

   **Production Deployment:**

   ```bash
   # Vercel: Dashboard > Project > Settings > Environment Variables
   # Netlify: Dashboard > Site Settings > Environment Variables
   # Docker: ENV NEXT_PUBLIC_GA_ID=G-SCVKWYC8YX
   NEXT_PUBLIC_GA_ID=G-SCVKWYC8YX
   ```

## Features

- **Automatic page view tracking**: Tracks both initial page loads and client-side navigation
- **Privacy-focused**: IP anonymization is enabled by default
- **Environment-aware**: Only loads in production with a valid tracking ID
- **Custom event tracking**: Helper functions available for tracking custom events

## Usage

### Environment Variables

Add to your `.env.local` or deployment environment:

```bash
NEXT_PUBLIC_GA_ID=your-actual-measurement-id
```

### Custom Event Tracking

Import and use the analytics utilities:

```typescript
import { event } from "@/lib/analytics";

// Track a custom event
event({
  action: "click",
  category: "button",
  label: "header-cta",
  value: 1,
});
```

## Privacy Compliance

The implementation includes:

- IP anonymization (`anonymize_ip: true`)
- Conditional loading (only in production)
- No tracking in development environments

## Files

- `/src/lib/analytics.ts` - Analytics configuration and utilities
- `/src/components/Analytics.tsx` - Client-side page tracking component
- `/src/app/layout.tsx` - Google Analytics script integration

## Testing

To test in development:

1. Temporarily set `NODE_ENV=production` and provide a test GA ID
2. Use Google Analytics Real-Time reports to verify tracking
3. Check browser developer tools for gtag events

Remember to revert to development mode after testing.
