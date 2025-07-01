'use client'

import { useState } from 'react'
import { DocsSidebar } from '@/components/DocsSidebar'
import { Navigation } from '@/components/Navigation'
import { Breadcrumb } from '@/components/Breadcrumb'

export function DocsLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
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
          onClose={() => setIsSidebarOpen(false)} 
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
