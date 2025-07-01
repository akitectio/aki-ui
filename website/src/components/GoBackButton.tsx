'use client'

import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function GoBackButton() {
  const handleGoBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back()
    } else {
      // Fallback to home page if no history
      window.location.href = '/'
    }
  }

  return (
    <button
      onClick={handleGoBack}
      className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 group"
    >
      <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
      Go Back
    </button>
  )
}
