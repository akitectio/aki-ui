'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './ThemeToggle'
import { 
  BookOpenIcon, 
  CubeIcon, 
  RectangleStackIcon, 
  DocumentTextIcon,
  CommandLineIcon,
  SparklesIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'

const docCategories = [
  {
    id: 'documentation',
    title: 'DOCUMENTATION',
    icon: BookOpenIcon,
    sections: [
      { id: 'introduction', title: 'Introduction', href: '/docs/introduction' },
      { id: 'installation', title: 'Installation', href: '/docs/installation' },
      { id: 'theming', title: 'Theming', href: '/docs/theming' },
      { id: 'color-modes', title: 'Color Modes', href: '/docs/color-modes' },
    ]
  },
  {
    id: 'llm',
    title: 'LLM INTEGRATION',
    icon: SparklesIcon,
    sections: [
      { id: 'overview', title: 'Overview', href: '/docs/llm' },
      { id: 'setup', title: 'Setup', href: '/docs/llm/setup' },
      { id: 'ai-tools', title: 'Supported AI Tools', href: '/docs/llm/ai-tools' },
      { id: 'examples', title: 'Examples', href: '/docs/llm/examples' },
    ]
  },
  {
    id: 'mcp',
    title: 'MCP INTEGRATION',
    icon: CommandLineIcon,
    sections: [
      { id: 'overview', title: 'Overview', href: '/docs/mcp' },
      { id: 'installation', title: 'Installation', href: '/docs/mcp/installation' },
      { id: 'usage', title: 'Usage', href: '/docs/mcp/usage' },
      { id: 'api', title: 'API Reference', href: '/docs/mcp/api' },
    ]
  },
  {
    id: 'components',
    title: 'COMPONENTS',
    icon: CubeIcon,
    sections: [
      { id: 'button', title: 'Button', href: '/docs/components/button' },
      { id: 'card', title: 'Card', href: '/docs/components/card' },
      { id: 'input', title: 'Input', href: '/docs/components/input' },
      { id: 'badge', title: 'Badge', href: '/docs/components/badge' },
      { id: 'avatar', title: 'Avatar', href: '/docs/components/avatar' },
      { id: 'alert', title: 'Alert', href: '/docs/components/alert' },
      { id: 'modal', title: 'Modal', href: '/docs/components/modal' },
      { id: 'checkbox', title: 'Checkbox', href: '/docs/components/checkbox' },
      { id: 'radio', title: 'Radio', href: '/docs/components/radio' },
      { id: 'switch', title: 'Switch', href: '/docs/components/switch' },
      { id: 'tabs', title: 'Tabs', href: '/docs/components/tabs' },
    ]
  },
  {
    id: 'layout',
    title: 'LAYOUT',
    icon: RectangleStackIcon,
    sections: [
      { id: 'grid', title: 'Grid', href: '/docs/layout/grid' },
      { id: 'stack', title: 'Stack', href: '/docs/layout/stack' },
      { id: 'breakpoints', title: 'Breakpoints', href: '/docs/layout/breakpoints' },
    ]
  },
  {
    id: 'forms',
    title: 'FORMS',
    icon: DocumentTextIcon,
    sections: [
      { id: 'form-control', title: 'Form Control', href: '/docs/forms/form-control' },
      { id: 'validation', title: 'Validation', href: '/docs/forms/validation' },
    ]
  }
]

export function DocsSidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 p-2 bg-white dark:bg-gray-800 rounded-md shadow-lg"
      >
        <Bars3Icon className="w-6 h-6" />
      </button>

      {/* Mobile backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 w-64 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700
        transform transition-transform duration-200 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        {/* Mobile close button */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-2"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <Link href="/docs" className="text-xl font-bold text-gray-900 dark:text-white">
              Aki UI Docs
            </Link>
            <ThemeToggle />
          </div>
        </div>

        <nav className="px-4 pb-6 space-y-6 overflow-y-auto h-full">
          {docCategories.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.id}>
                <div className="flex items-center px-2 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  <Icon className="w-4 h-4 mr-2" />
                  {category.title}
                </div>
                <ul className="mt-2 space-y-1">
                  {category.sections.map((section) => (
                    <li key={section.id}>
                      <Link
                        href={section.href}
                        className={`
                          block px-2 py-2 text-sm rounded-md transition-colors
                          ${pathname === section.href
                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                          }
                        `}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {section.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
