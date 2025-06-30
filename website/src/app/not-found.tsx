import type { Metadata } from 'next'
import Link from 'next/link'
import { HomeIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import GoBackButton from '@/components/GoBackButton'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Aki UI',
  description: 'Sorry, the page you are looking for could not be found. Return to Aki UI documentation.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
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
            Page Not Found
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Sorry, the page you are looking for could not be found. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Popular pages:
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
