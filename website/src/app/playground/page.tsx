'use client'

import { useEffect } from 'react'
import { Button, Card } from '@akitectio/aki-ui'
import Link from 'next/link'

export default function PlaygroundPage() {
  // Redirect to Storybook after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://aki-ui.vercel.app/'
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleRedirectNow = () => {
    window.location.href = 'https://aki-ui.vercel.app/'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-900 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 text-center shadow-2xl">
        <div className="mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Redirecting to Storybook
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Interactive component playground is now available on Storybook
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            🚀 <strong>New Location:</strong> We've moved our interactive component playground to Storybook for a better development experience!
          </p>
          <div className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
            <p>✨ Live component previews</p>
            <p>🎛️ Interactive controls</p>
            <p>📖 Comprehensive documentation</p>
            <p>🎨 Theme customization</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={handleRedirectNow}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Open Storybook Now
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/docs">View Documentation</Link>
          </Button>
        </div>

        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          <p>Automatically redirecting in <span className="font-mono">3</span> seconds...</p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
            Direct link to Storybook:
          </p>
          <a 
            href="https://aki-ui.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-mono break-all"
          >
            https://aki-ui.vercel.app/
          </a>
        </div>
      </Card>
    </div>
  )
}
