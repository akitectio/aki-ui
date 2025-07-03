'use client'

import React from 'react'
import { ToastDemo } from '@/components/ToastDemo'

export default function ToastTestPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Toast Component Demo</h1>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Toast Notifications Example
                    </h2>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                        Click the buttons below to display different types of toast notifications.
                    </p>

                    <ToastDemo />
                </div>

                <div className="mt-8 text-gray-600 dark:text-gray-400">
                    <p>
                        Toast notifications are a crucial UI component for providing feedback to users.
                        This demo shows a client-side implementation that works with Next.js Server Components.
                    </p>
                </div>
            </div>
        </div>
    )
}
