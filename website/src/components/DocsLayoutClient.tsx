'use client'

import { DocsSidebar } from '@/components/DocsSidebar'

export function DocsLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        <DocsSidebar />
        <main className="flex-1 lg:ml-64">
          <div className="px-6 py-8 max-w-4xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
