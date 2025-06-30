import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://aki-ui.akitect.io'),
  title: {
    default: 'Aki UI - Modern React Component Library',
    template: '%s | Aki UI'
  },
  description: 'A comprehensive, accessible, and customizable React component library built for modern applications.',
  keywords: ['React', 'Components', 'UI Library', 'TypeScript', 'Tailwind CSS', 'Accessibility'],
  authors: [{ name: 'Akitect.io Team' }],
  creator: 'Akitect.io',
  publisher: 'Akitect.io',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aki-ui.akitect.io',
    siteName: 'Aki UI',
    title: 'Aki UI - Modern React Component Library',
    description: 'A comprehensive, accessible, and customizable React component library built for modern applications.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aki UI - Modern React Component Library',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aki UI - Modern React Component Library',
    description: 'A comprehensive, accessible, and customizable React component library built for modern applications.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
