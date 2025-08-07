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
    <div className="bg-gray-50 dark:bg-gray-900 relative pt-16 overflow-x-hidden">
      <main className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 pb-8 overflow-x-hidden">
        <div className="flex max-w-7xl mx-auto">
          <DocsSidebar
            isOpen={isSidebarOpen}
            onClose={closeSidebar}
          />
          <div className="flex-1 px-8 py-6">
            <DocsPageWrapper>
              <div className="py-4 max-w-4xl">
                {children}
              </div>
            </DocsPageWrapper>
          </div>
        </div>
      </main>
    </div>
  )
}
