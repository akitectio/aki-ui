import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Analytics } from '@/components/Analytics'
import { Navigation } from '@/components/Navigation'
import { FloatingSearch } from '@/components/FloatingSearch'
import { Footer } from '@/components/Footer'
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
  authors: [{ name: 'Duy (DuyDev)', url: 'https://www.linkedin.com/in/duydev/' }],
  creator: 'Duy (DuyDev)',
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
      '@type': 'Person',
      name: 'Duy (DuyDev)',
      url: 'https://www.linkedin.com/in/duydev/',
      email: 'duy@akitect.io',
      sameAs: [
        'https://www.facebook.com/duydev',
        'https://www.linkedin.com/in/duydev/',
        'https://github.com/duydev'
      ]
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

        {/* Gurubase Widget - Safe loader with improved error handling */}
        {isAnalyticsEnabled() && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Enhanced Guru widget loader with comprehensive error handling
                (function() {
                  try {
                    // Prevent multiple loads - check multiple conditions
                    if (window.gurubaseWidget || 
                        document.getElementById('guru-widget-id') || 
                        document.querySelector('[data-widget-id="SVS8JvZPz1_JssKP_nVszZcxnn7xDjWEjMwfOXA-lBw"]')) {
                      return;
                    }
                    
                    // Add custom CSS for better styling
                    const style = document.createElement('style');
                    style.textContent = \`
                      /* Gurubase Widget Enhanced Styling */
                      .gurubase-widget, 
                      .gurubase-widget *,
                      [data-widget-id="SVS8JvZPz1_JssKP_nVszZcxnn7xDjWEjMwfOXA-lBw"] *,
                      div[id*="guru"], 
                      div[class*="guru"] {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
                        z-index: 9999 !important;
                      }
                      
                      .gurubase-widget button,
                      [data-widget-id="SVS8JvZPz1_JssKP_nVszZcxnn7xDjWEjMwfOXA-lBw"] button {
                        background-color: #ffffff !important;
                        color: #1f2937 !important;
                        border: 2px solid #3b82f6 !important;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
                        transition: all 0.2s ease !important;
                        font-weight: 500 !important;
                        padding: 8px 16px !important;
                        border-radius: 8px !important;
                      }
                      
                      .gurubase-widget button:hover,
                      [data-widget-id="SVS8JvZPz1_JssKP_nVszZcxnn7xDjWEjMwfOXA-lBw"] button:hover {
                        background-color: #3b82f6 !important;
                        color: #ffffff !important;
                        transform: translateY(-1px) !important;
                      }
                      
                      @media (prefers-color-scheme: dark) {
                        .gurubase-widget button,
                        [data-widget-id="SVS8JvZPz1_JssKP_nVszZcxnn7xDjWEjMwfOXA-lBw"] button {
                          background-color: #1f2937 !important;
                          color: #ffffff !important;
                          border-color: #6366f1 !important;
                        }
                        
                        .gurubase-widget button:hover,
                        [data-widget-id="SVS8JvZPz1_JssKP_nVszZcxnn7xDjWEjMwfOXA-lBw"] button:hover {
                          background-color: #6366f1 !important;
                        }
                      }
                    \`;
                    style.id = 'guru-widget-styles';
                    
                    // Safely append style - check if not already exists
                    if (!document.getElementById('guru-widget-styles')) {
                      document.head.appendChild(style);
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
                      // Mark as loaded to prevent cleanup issues
                      window.guruWidgetLoaded = true;
                    };
                    
                    script.onerror = function(error) {
                      console.warn('Guru widget failed to load:', error);
                      // Safe removal using modern approach
                      if (script && document.contains(script)) {
                        script.remove();
                      }
                    };
                    
                    // Use modern append instead of appendChild
                    document.head.append(script);
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
              <div className="min-h-screen flex flex-col">
                <Navigation />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
              </div>
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
