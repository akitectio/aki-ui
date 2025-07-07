'use client'

import { useState } from 'react'
import { Card } from '@akitectio/aki-ui'
import { CodeBlock } from '@/components/CodeBlock'
import { Tabs } from '@/components/Tabs'
import BlockHeader from '@/components/BlockHeader'
import DevicePreviewWrapper from '@/components/DevicePreviewWrapper'
import { Bars3Icon } from '@heroicons/react/24/outline'
import {
  HomeIcon,
  ChartBarIcon,
  UsersIcon,
  CogIcon,
  DocumentTextIcon,
  BellIcon
} from '@heroicons/react/24/outline'

function CollapsibleSidebarExample() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const navItems = [
    { label: 'Dashboard', icon: HomeIcon, href: '#dashboard' },
    { label: 'Analytics', icon: ChartBarIcon, href: '#analytics' },
    { label: 'Users', icon: UsersIcon, href: '#users' },
    { label: 'Documents', icon: DocumentTextIcon, href: '#documents' },
    { label: 'Settings', icon: CogIcon, href: '#settings' },
  ]

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <div className={`transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col`}>
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">Aki UI</span>
              </div>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Bars3Icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group ${item.href === '#dashboard'
                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                : 'text-gray-700 dark:text-gray-300'
                }`}
            >
              <item.icon className={`w-5 h-5 ${isCollapsed ? 'mx-auto' : ''}`} />
              {!isCollapsed && <span className="font-medium">{item.label}</span>}
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">JD</span>
            </div>
            {!isCollapsed && (
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">John Doe</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">john@example.com</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <BellIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample Cards */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Total Users</h3>
              <p className="text-3xl font-bold text-blue-600">1,234</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">↗ 12% from last month</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Revenue</h3>
              <p className="text-3xl font-bold text-green-600">$12,345</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">↗ 8% from last month</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Orders</h3>
              <p className="text-3xl font-bold text-purple-600">567</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">↗ 23% from last month</p>
            </Card>
          </div>

          <div className="mt-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sample Content</h3>
              <p className="text-gray-600 dark:text-gray-300">
                This is a sample content area. The sidebar on the left can be collapsed to show only icons,
                giving you more space for your main content. Click the hamburger menu to toggle the sidebar.
              </p>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

export default function CollapsibleSidebarPage() {
  const code = `'use client'

import { useState } from 'react'
import { Card } from '@akitectio/aki-ui'
import { 
  Bars3Icon,
  HomeIcon, 
  ChartBarIcon, 
  UsersIcon, 
  CogIcon,
  DocumentTextIcon,
  BellIcon
} from '@heroicons/react/24/outline'

function CollapsibleSidebarExample() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const navItems = [
    { label: 'Dashboard', icon: HomeIcon, href: '#dashboard' },
    { label: 'Analytics', icon: ChartBarIcon, href: '#analytics' },
    { label: 'Users', icon: UsersIcon, href: '#users' },
    { label: 'Documents', icon: DocumentTextIcon, href: '#documents' },
    { label: 'Settings', icon: CogIcon, href: '#settings' },
  ]

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <div className={\`transition-all duration-300 \${isCollapsed ? 'w-16' : 'w-64'} bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col\`}>
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">Aki UI</span>
              </div>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Bars3Icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={\`flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group \${
                item.href === '#dashboard' 
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300'
              }\`}
            >
              <item.icon className={\`w-5 h-5 \${isCollapsed ? 'mx-auto' : ''}\`} />
              {!isCollapsed && <span className="font-medium">{item.label}</span>}
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">JD</span>
            </div>
            {!isCollapsed && (
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">John Doe</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">john@example.com</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <BellIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample Cards */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Total Users</h3>
              <p className="text-3xl font-bold text-blue-600">1,234</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">↗ 12% from last month</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Revenue</h3>
              <p className="text-3xl font-bold text-green-600">$12,345</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">↗ 8% from last month</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Orders</h3>
              <p className="text-3xl font-bold text-purple-600">567</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">↗ 23% from last month</p>
            </Card>
          </div>

          <div className="mt-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sample Content</h3>
              <p className="text-gray-600 dark:text-gray-300">
                This is a sample content area. The sidebar on the left can be collapsed to show only icons, 
                giving you more space for your main content. Click the hamburger menu to toggle the sidebar.
              </p>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}`

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(code)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <BlockHeader
        title="Collapsible Sidebar"
        onCopyCode={handleCopyCode}
      />

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Collapsible Sidebar Navigation
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            A responsive sidebar navigation that can collapse to show only icons, providing more space for your main content. Features smooth animations and dark mode support.
          </p>
        </div>

        {/* Tabs for Preview and Code */}
        <Tabs
          persistKey="sidebar-collapsible"
          useUrlHash={true}
          tabs={[
            {
              id: 'preview',
              label: 'Preview',
              content: (
                <DevicePreviewWrapper>
                  <div className="h-96">
                    <CollapsibleSidebarExample />
                  </div>
                </DevicePreviewWrapper>
              )
            },
            {
              id: 'code',
              label: 'Code',
              content: (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Implementation
                  </h3>
                  <CodeBlock code={code} language="tsx" />
                </div>
              )
            }
          ]}
          defaultTab="preview"
        />

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              Features
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Smooth collapse/expand animations</li>
              <li>• Icon-only collapsed state</li>
              <li>• Active state indication</li>
              <li>• Responsive design</li>
              <li>• Dark mode support</li>
              <li>• Keyboard accessible</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              Use Cases
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Admin dashboards</li>
              <li>• Application navigation</li>
              <li>• Document management</li>
              <li>• Content management systems</li>
              <li>• Analytics platforms</li>
              <li>• Multi-page applications</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
