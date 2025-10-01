import { ThemeProvider } from '@akitectio/aki-ui';import { Metadata } from 'next'

import { ToastProvider } from '@akitectio/aki-ui';import { Inter } from 'next/font/google'

import type { Metadata } from 'next';import { ThemeProvider } from '@/components/ThemeProvider'

import '../../globals.css';import { ToastProvider } from '@/components/ToastProvider'

import '../../globals.css'

export const metadata: Metadata = {

  title: 'Admin Portal - Aki UI',const inter = Inter({ subsets: ['latin'] })

  description: 'Admin dashboard and management portal',

};export const metadata: Metadata = {

  title: 'Admin Portal - Aki UI Demo',

export default function AdminLayout({ children }: { children: React.ReactNode }) {  description: 'Complete admin portal demo showcasing Aki UI components for dashboard, user management, data tables, permissions, and system settings.',

  return (  keywords: 'admin portal, dashboard demo, user management, data tables, permissions, system settings, aki ui admin, react admin panel',

    <html lang="en">  openGraph: {

      <body>    title: 'Admin Portal Demo - Aki UI',

        <ThemeProvider>    description: 'Comprehensive admin portal demonstration with modern UI components',

          <ToastProvider>    type: 'website',

            {children}  },

          </ToastProvider>  twitter: {

        </ThemeProvider>    card: 'summary_large_image',

      </body>    title: 'Admin Portal Demo - Aki UI',

    </html>    description: 'Comprehensive admin portal demonstration with modern UI components',

  );  },

}}


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <ToastProvider position="top-right">
            {/* Admin layout riêng biệt - không có Navigation và Footer */}
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}