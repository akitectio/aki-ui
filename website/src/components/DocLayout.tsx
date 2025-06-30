'use client'

import { ReactNode } from 'react'
import { DocsSidebar } from './DocsSidebar'

interface DocLayoutProps {
  children: ReactNode
  title: string
  description?: string
}

export function DocLayout({ children, title, description }: DocLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        <DocsSidebar />
        <main className="flex-1 lg:ml-64">
          <div className="px-6 py-8 max-w-4xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {title}
              </h1>
              {description && (
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {description}
                </p>
              )}
            </header>
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
