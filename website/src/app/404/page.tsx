import type { Metadata } from 'next'
import Link from 'next/link'
import { HomeIcon, BookOpenIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import GoBackButton from '@/components/GoBackButton'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Aki UI',
  description: 'This is the 404 error page example for Aki UI. Learn how to create beautiful error pages.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Custom404Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Demo Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-sm font-medium mb-8">
          <ExclamationTriangleIcon className="w-4 h-4 mr-2" />
          Demo 404 Page
        </div>

        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 bg-clip-text text-transparent">
            404
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Custom 404 Page Example
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            This is an example of a custom 404 error page built with Aki UI components and Tailwind CSS. 
            It demonstrates how to create beautiful, user-friendly error pages.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 text-left">
            <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Features Demonstrated:</h3>
            <ul className="text-sm text-blue-900 dark:text-blue-200 space-y-1">
              <li>• Gradient backgrounds and text effects</li>
              <li>• Responsive design with mobile-first approach</li>
              <li>• Dark mode support</li>
              <li>• Interactive buttons with hover effects</li>
              <li>• Helpful navigation and recovery options</li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <GoBackButton />
          
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-medium hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <HomeIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Home
          </Link>
          
          <Link
            href="/docs"
            className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <BookOpenIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Documentation
          </Link>
        </div>

        {/* Code Example */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-left">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Usage Example:</h3>
          <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold bg-gradient-to-r 
          from-primary-600 to-secondary-600 
          bg-clip-text text-transparent">
          404
        </h1>
        <p>Page not found</p>
      </div>
    </div>
  )
}`}
          </pre>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Explore Aki UI:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/docs/installation"
              className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
            >
              Installation
            </Link>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <Link
              href="/docs/components"
              className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
            >
              Components
            </Link>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <Link
              href="/docs/theming"
              className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
            >
              Theming
            </Link>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <a
              href="https://aki-ui.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
            >
              Storybook
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
