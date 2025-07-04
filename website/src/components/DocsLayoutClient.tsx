'use client'

import { DocsSidebar } from '@/components/DocsSidebar'
import { DocsPageWrapper } from '@/components/DocsPageWrapper'
import { useSidebar } from '@/contexts/SidebarContext'

export function DocsLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const { isSidebarOpen, closeSidebar } = useSidebar()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative pt-16">
      <div className="flex">
        <DocsSidebar
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
        />
        <main className="flex-1 lg:ml-64 bg-gray-50 dark:bg-gray-900 min-h-screen">
          <div className="px-6 py-4 max-w-4xl mx-auto">
            <DocsPageWrapper>
              <div className="py-4">
                {children}
              </div>
            </DocsPageWrapper>
          </div>
        </main>
      </div>
    </div>
  )
}
