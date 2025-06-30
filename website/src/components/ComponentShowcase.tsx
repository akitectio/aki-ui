'use client'

import Link from 'next/link'
import { Button, Card, Badge, Alert } from '@akitectio/aki-ui'
import { useColorMode } from '@akitectio/aki-ui'

export function ComponentShowcase() {
  const { colorMode } = useColorMode()

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Experience Aki UI Components
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how our components adapt to your theme and look great in both light and dark modes.
            Currently viewing in <Badge variant="primary">{colorMode}</Badge> mode.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Buttons Card */}
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Buttons</h3>
            <div className="space-y-3">
              <Button variant="primary" className="w-full">
                Primary Button
              </Button>
              <Button variant="secondary" className="w-full">
                Secondary Button
              </Button>
              <Button variant="outline" className="w-full">
                Outline Button
              </Button>
            </div>
          </Card>

          {/* Badges Card */}
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Badges</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
            </div>
          </Card>

          {/* Alerts Card */}
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Alerts</h3>
            <div className="space-y-3">
              <Alert variant="success" className="text-sm">
                Success: Changes saved successfully!
              </Alert>
              <Alert variant="warning" className="text-sm">
                Warning: Please review your settings.
              </Alert>
              <Alert variant="danger" className="text-sm">
                Error: Something went wrong.
              </Alert>
            </div>
          </Card>

          {/* Theme Colors */}
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Theme Colors</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-500 rounded-lg mx-auto mb-2 shadow-md"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Primary</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary-500 rounded-lg mx-auto mb-2 shadow-md"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Secondary</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-success-500 rounded-lg mx-auto mb-2 shadow-md"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Success</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-warning-500 rounded-lg mx-auto mb-2 shadow-md"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Warning</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-error-500 rounded-lg mx-auto mb-2 shadow-md"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Error</span>
              </div>
            </div>
          </Card>

          {/* Interactive Demo */}
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Interactive</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sample Input
                </label>
                <input 
                  type="text" 
                  placeholder="Enter some text..."
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <Button variant="primary" size="sm" className="w-full">
                Submit
              </Button>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block p-8 shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              🎨 Fully Customizable Theming
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Aki UI comes with a complete theming system. Customize colors, spacing, shadows, 
              and more to match your brand perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" asChild>
                <Link href="/docs/theming">View Theming Guide</Link>
              </Button>
              <Button variant="secondary" asChild>
                <a href="https://aki-ui.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Live Examples
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
