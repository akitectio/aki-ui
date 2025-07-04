import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Analytics } from '@/components/Analytics'
import { Navigation } from '@/components/Navigation'
import { FloatingSearch } from '@/components/FloatingSearch'
import { SidebarProvider } from '@/contexts/SidebarContext'
import { GA_TRACKING_ID, isAnalyticsEnabled } from '@/lib/analytics'
import { Suspense } from 'react'
import { ToastProvider } from '@/components/ToastProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://aki-ui.akitect.io'),
  title: {
    default: 'Aki UI - Modern React Component Library',
    template: '%s | Aki UI'
  },
  description: 'A comprehensive, accessible, and customizable React component library built for modern applications. Featuring AI-powered integration, TypeScript support, and Tailwind CSS styling.',
  keywords: [
    'React', 'Components', 'UI Library', 'TypeScript', 'Tailwind CSS',
    'Accessibility', 'Modern UI', 'Component Library', 'AI Integration',
    'MCP Support', 'Design System', 'Frontend Framework', 'React Components',
    'Customizable UI', 'Developer Tools', 'Web Development'
  ],
  authors: [{ name: 'Akitect.io Team', url: 'https://akitect.io' }],
  creator: 'Akitect.io',
  publisher: 'Akitect.io',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://aki-ui.akitect.io',
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
  icons: {
    icon: '/aki-ui-icon.png',
    shortcut: '/aki-ui-icon.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon.png',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aki-ui.akitect.io',
    siteName: 'Aki UI',
    title: 'Aki UI - Modern React Component Library',
    description: 'A comprehensive, accessible, and customizable React component library built for modern applications. Featuring AI-powered integration, TypeScript support, and Tailwind CSS styling.',
    images: [
      {
        url: '/aki-ui-icon.png',
        width: 1200,
        height: 630,
        alt: 'Aki UI - Modern React Component Library',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@akitectio', // Replace with actual Twitter handle
    creator: '@akitectio', // Replace with actual Twitter handle
    title: 'Aki UI - Modern React Component Library',
    description: 'A comprehensive, accessible, and customizable React component library built for modern applications.',
    images: [
      {
        url: '/aki-ui-icon.png',
        alt: 'Aki UI - Modern React Component Library',
      },
    ],
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Aki UI',
    description: 'A comprehensive, accessible, and customizable React component library built for modern applications',
    url: 'https://aki-ui.akitect.io',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'Akitect.io',
      url: 'https://akitect.io',
    },
    programmingLanguage: ['TypeScript', 'JavaScript', 'React'],
    license: 'https://opensource.org/licenses/MIT',
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Google Analytics */}
        {isAnalyticsEnabled() && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                    anonymize_ip: true,
                    send_page_view: true
                  });
                `,
              }}
            />
          </>
        )}

        {/* Gurubase Widget - Wrapped with error handling */}
        {isAnalyticsEnabled() && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Safe Guru widget loader with error handling
                (function() {
                  try {
                    // Only load if not already loaded
                    if (window.gurubaseWidget || document.getElementById('guru-widget-id')) {
                      return;
                    }
                    
                    const script = document.createElement('script');
                    script.async = true;
                    script.src = 'https://widget.gurubase.io/widget.latest.min.js';
                    script.setAttribute('data-widget-id', 'SVS8JvZPz1_JssKP_nVszZcxnn7xDjWEjMwfOXA-lBw');
                    script.setAttribute('data-text', 'Ask AI');
                    script.setAttribute('data-margins', '{"bottom": "1rem", "right": "1rem"}');
                    script.setAttribute('data-light-mode', 'auto');
                    script.id = 'guru-widget-id';
                    
                    script.onload = function() {
                      console.log('Guru widget loaded successfully');
                    };
                    
                    script.onerror = function(error) {
                      console.warn('Guru widget failed to load:', error);
                      // Remove failed script to prevent further issues
                      if (script.parentNode) {
                        script.parentNode.removeChild(script);
                      }
                    };
                    
                    document.head.appendChild(script);
                  } catch (error) {
                    console.warn('Guru widget initialization failed:', error);
                  }
                })();
              `,
            }}
          />
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <ToastProvider position="top-right">
            <SidebarProvider>
              <Navigation />
              {children}
            </SidebarProvider>
            <FloatingSearch />
            <Suspense fallback={null}>
              <Analytics />
            </Suspense>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
