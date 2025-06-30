'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  BookOpenIcon, 
  CubeIcon, 
  RectangleStackIcon, 
  DocumentTextIcon,
  CommandLineIcon,
  SparklesIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline'

interface Subsection {
  id: string
  title: string
  href: string
}

interface Section {
  id: string
  title: string
  href: string
  subsections?: Subsection[]
}

interface DocCategory {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  sections: Section[]
}

const docCategories: DocCategory[] = [
  {
    id: 'getting-started',
    title: 'GETTING STARTED',
    icon: BookOpenIcon,
    sections: [
      { id: 'introduction', title: 'Introduction', href: '/docs/introduction' },
      { id: 'installation', title: 'Installation', href: '/docs/installation' },
      { id: 'overview', title: 'Overview', href: '/docs' },
    ]
  },
  {
    id: 'components',
    title: 'COMPONENTS',
    icon: CubeIcon,
    sections: [
      { id: 'overview', title: 'Overview', href: '/docs/components' },
      { 
        id: 'form-components', 
        title: 'Form Components',
        href: '/docs/components#form',
        subsections: [
          { id: 'button', title: 'Button', href: '/docs/components/button' },
          { id: 'input', title: 'Input', href: '/docs/components/input' },
          { id: 'checkbox', title: 'Checkbox', href: '/docs/components/checkbox' },
          { id: 'radio', title: 'Radio', href: '/docs/components/radio' },
          { id: 'switch', title: 'Switch', href: '/docs/components/switch' },
        ]
      },
      { 
        id: 'display-components', 
        title: 'Display Components',
        href: '/docs/components#display',
        subsections: [
          { id: 'card', title: 'Card', href: '/docs/components/card' },
          { id: 'badge', title: 'Badge', href: '/docs/components/badge' },
          { id: 'avatar', title: 'Avatar', href: '/docs/components/avatar' },
          { id: 'alert', title: 'Alert', href: '/docs/components/alert' },
        ]
      },
      { 
        id: 'navigation-components', 
        title: 'Navigation Components',
        href: '/docs/components#navigation',
        subsections: [
          { id: 'tabs', title: 'Tabs', href: '/docs/components/tabs' },
        ]
      },
      { 
        id: 'overlay-components', 
        title: 'Overlay Components',
        href: '/docs/components#overlay',
        subsections: [
          { id: 'modal', title: 'Modal', href: '/docs/components/modal' },
        ]
      },
    ]
  },
  {
    id: 'layout',
    title: 'LAYOUT',
    icon: RectangleStackIcon,
    sections: [
      { id: 'overview', title: 'Overview', href: '/docs/layout' },
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
      { id: 'overview', title: 'Overview', href: '/docs/forms' },
      { id: 'form-control', title: 'Form Control', href: '/docs/forms/form-control' },
      { id: 'validation', title: 'Validation', href: '/docs/forms/validation' },
    ]
  },
  {
    id: 'customization',
    title: 'CUSTOMIZATION',
    icon: SparklesIcon,
    sections: [
      { id: 'theming', title: 'Theming', href: '/docs/theming' },
      { id: 'color-modes', title: 'Color Modes', href: '/docs/color-modes' },
    ]
  },
  {
    id: 'ai-integration',
    title: 'AI INTEGRATION',
    icon: CommandLineIcon,
    sections: [
      { 
        id: 'llm', 
        title: 'LLM Integration',
        href: '/docs/llm',
        subsections: [
          { id: 'setup', title: 'Setup', href: '/docs/llm/setup' },
          { id: 'ai-tools', title: 'Supported AI Tools', href: '/docs/llm/ai-tools' },
          { id: 'examples', title: 'Examples', href: '/docs/llm/examples' },
        ]
      },
      { 
        id: 'mcp', 
        title: 'MCP Integration',
        href: '/docs/mcp',
        subsections: [
          { id: 'installation', title: 'Installation', href: '/docs/mcp/installation' },
          { id: 'usage', title: 'Usage', href: '/docs/mcp/usage' },
          { id: 'api', title: 'API Reference', href: '/docs/mcp/api' },
        ]
      },
    ]
  },
  {
    id: 'support',
    title: 'SUPPORT',
    icon: QuestionMarkCircleIcon,
    sections: [
      { id: '404', title: '404 Not Found', href: '/404' },
    ]
  }
]

export function DocsSidebar({ isOpen = false, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-16 left-0 z-50 w-64 h-[calc(100vh-4rem)] bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700
        transform transition-transform duration-200 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
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
                            : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                          }
                        `}
                        onClick={() => onClose?.()}
                      >
                        {section.title}
                      </Link>
                      
                      {/* Subsections (menu cấp 2) */}
                      {section.subsections && (
                        <ul className="mt-1 ml-4 space-y-1 border-l border-gray-200 dark:border-gray-700">
                          {section.subsections.map((subsection) => (
                            <li key={subsection.id}>
                              <Link
                                href={subsection.href}
                                className={`
                                  block px-3 py-1.5 text-sm rounded-md transition-colors
                                  ${pathname === subsection.href
                                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-200'
                                  }
                                `}
                                onClick={() => onClose?.()}
                              >
                                <span className="flex items-center">
                                  <span className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
                                  {subsection.title}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
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
