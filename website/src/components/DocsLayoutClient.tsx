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
      <div className="flex flex-col lg:flex-row min-h-screen w-full">
        <DocsSidebar
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
        />
        <main className="flex-1 lg:ml-0 bg-gray-50 dark:bg-gray-900 pb-8 overflow-x-hidden">
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
