'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { DocsSidebar } from '@/components/DocsSidebar'
import { Navigation } from '@/components/Navigation'
import { Breadcrumb } from '@/components/Breadcrumb'
import { useCleanupNavigation } from '@/hooks/useCleanupNavigation'

export function DocsLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()

  // Clean up navigation state when navigating
  useCleanupNavigation()

  // Close sidebar when route changes (for mobile)
  useEffect(() => {
    setIsSidebarOpen(false)
  }, [pathname])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation
        showGetStarted={false}
        onMenuClick={toggleSidebar}
        showMobileMenu={true}
        isMobileMenuOpen={isSidebarOpen}
      />
      <div className="flex">
        <DocsSidebar
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
        />
        <main className="flex-1 lg:ml-64 pt-16">
          <div className="px-6 py-4 max-w-4xl mx-auto">
            <Breadcrumb className="mb-6" />
            <div className="py-4">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
