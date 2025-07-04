'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BookOpenIcon,
  CubeIcon,
  RectangleStackIcon,
  DocumentTextIcon,
  CommandLineIcon,
  SparklesIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon
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
          { id: 'buttongroup', title: 'ButtonGroup', href: '/docs/components/buttongroup' },
          { id: 'input', title: 'Input', href: '/docs/components/input' },
          { id: 'inputgroup', title: 'InputGroup', href: '/docs/components/inputgroup' },
          { id: 'floatinglabel', title: 'FloatingLabel', href: '/docs/components/floatinglabel' },
          { id: 'select', title: 'Select', href: '/docs/components/select' },
          { id: 'asyncselect', title: 'AsyncSelect', href: '/docs/components/asyncselect' },
          { id: 'checkbox', title: 'Checkbox', href: '/docs/components/checkbox' },
          { id: 'radio', title: 'Radio', href: '/docs/components/radio' },
          { id: 'switch', title: 'Switch', href: '/docs/components/switch' },
          { id: 'slider', title: 'Slider', href: '/docs/components/slider' },
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
          { id: 'chip', title: 'Chip', href: '/docs/components/chip' },
          { id: 'divider', title: 'Divider', href: '/docs/components/divider' },
          { id: 'skeleton', title: 'Skeleton', href: '/docs/components/skeleton' },
          { id: 'spinner', title: 'Spinner', href: '/docs/components/spinner' },
          { id: 'typography', title: 'Typography', href: '/docs/components/typography' },
        ]
      },
      {
        id: 'data-components',
        title: 'Data Components',
        href: '/docs/components#data',
        subsections: [
          { id: 'datatable', title: 'DataTable', href: '/docs/components/datatable' },
          { id: 'datatable-basic', title: 'DataTable - Basic', href: '/docs/components/datatable/basic' },
          { id: 'datatable-advanced', title: 'DataTable - Advanced', href: '/docs/components/datatable/advanced' },
          { id: 'datatable-server', title: 'DataTable - Server Side', href: '/docs/components/datatable/server-side' },
          { id: 'datatable-filtering', title: 'DataTable - Filtering', href: '/docs/components/datatable/filtering' },
          { id: 'datatable-editable', title: 'DataTable - Editable', href: '/docs/components/datatable/editable' },
          { id: 'datatable-export', title: 'DataTable - Export', href: '/docs/components/datatable/export' },
          { id: 'datatable-responsive', title: 'DataTable - Responsive', href: '/docs/components/datatable/responsive' },
        ]
      },
      {
        id: 'navigation-components',
        title: 'Navigation Components',
        href: '/docs/components#navigation',
        subsections: [
          { id: 'navbar', title: 'Navbar', href: '/docs/components/navbar' },
          { id: 'breadcrumb', title: 'Breadcrumb', href: '/docs/components/breadcrumb' },
          { id: 'tabs', title: 'Tabs', href: '/docs/components/tabs' },
          { id: 'pagination', title: 'Pagination', href: '/docs/components/pagination' },
        ]
      },
      {
        id: 'interactive-components',
        title: 'Interactive Components',
        href: '/docs/components#interactive',
        subsections: [
          { id: 'accordion', title: 'Accordion', href: '/docs/components/accordion' },
          { id: 'dropdown', title: 'Dropdown', href: '/docs/components/dropdown' },
          { id: 'tooltip', title: 'Tooltip', href: '/docs/components/tooltip' },
          { id: 'popover', title: 'Popover', href: '/docs/components/popover' },
          { id: 'chatbot', title: 'Chatbot', href: '/docs/components/chatbot' },
        ]
      },
      {
        id: 'overlay-components',
        title: 'Overlay Components',
        href: '/docs/components#overlay',
        subsections: [
          { id: 'modal', title: 'Modal', href: '/docs/components/modal' },
          { id: 'drawer', title: 'Drawer', href: '/docs/components/drawer' },
          { id: 'toast', title: 'Toast', href: '/docs/components/toast' },
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
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['getting-started', 'ai-integration', 'components'])

  // Auto-expand sections and categories based on current pathname
  useEffect(() => {
    const currentSectionIds: string[] = []
    const currentCategoryIds: string[] = []

    docCategories.forEach((category) => {
      let categoryHasActive = false

      category.sections.forEach((section) => {
        if (pathname === section.href) {
          categoryHasActive = true
        }

        if (section.subsections) {
          const hasActiveSubsection = section.subsections.some(
            (subsection) => pathname === subsection.href
          )
          if (hasActiveSubsection || pathname === section.href) {
            currentSectionIds.push(section.id)
            categoryHasActive = true
          }
        }
      })

      if (categoryHasActive) {
        currentCategoryIds.push(category.id)
      }
    })

    setExpandedSections(currentSectionIds)
    setExpandedCategories(prev => Array.from(new Set([...prev, ...currentCategoryIds])))
  }, [pathname])

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  // Close sidebar on Escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen && onClose) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isOpen, onClose])

  // Close sidebar on window resize to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen && onClose) {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('resize', handleResize)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isOpen, onClose])

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'

      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isOpen])

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
            const isCategoryExpanded = expandedCategories.includes(category.id)

            return (
              <div key={category.id}>
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center justify-between px-2 py-2 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-md transition-colors"
                  aria-expanded={isCategoryExpanded}
                  aria-label={`${isCategoryExpanded ? 'Collapse' : 'Expand'} ${category.title} section`}
                >
                  <div className="flex items-center">
                    <Icon className="w-4 h-4 mr-2 text-gray-700 dark:text-gray-300" />
                    {category.title}
                  </div>
                  <ChevronRightIcon
                    className={`w-4 h-4 transition-transform duration-200 ${isCategoryExpanded ? 'rotate-90' : ''
                      }`}
                  />
                </button>

                {isCategoryExpanded && (
                  <ul className="mt-2 space-y-1">
                    {category.sections.map((section) => {
                      const hasSubsections = section.subsections && section.subsections.length > 0
                      const isExpanded = expandedSections.includes(section.id)

                      return (
                        <li key={section.id}>
                          <div className="flex items-center">
                            <Link
                              href={section.href}
                              className={`
                                flex-1 block px-2 py-2 text-sm rounded-md transition-colors
                                ${pathname === section.href
                                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                                }
                              `}
                              onClick={() => onClose?.()}
                            >
                              {section.title}
                            </Link>

                            {/* Toggle button for sections with subsections */}
                            {hasSubsections && (
                              <button
                                onClick={() => toggleSection(section.id)}
                                className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                aria-label={isExpanded ? 'Collapse section' : 'Expand section'}
                              >
                                <ChevronRightIcon
                                  className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''
                                    }`}
                                />
                              </button>
                            )}
                          </div>

                          {/* Subsections (menu cấp 2) - Only show when expanded */}
                          {hasSubsections && isExpanded && section.subsections && (
                            <ul className="mt-1 ml-4 space-y-1 border-l border-gray-200 dark:border-gray-700">
                              {section.subsections.map((subsection) => (
                                <li key={subsection.id}>
                                  <Link
                                    href={subsection.href}
                                    className={`
                                      block px-3 py-1.5 text-sm rounded-md transition-colors
                                      ${pathname === subsection.href
                                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-200'
                                      }
                                    `}
                                    onClick={() => onClose?.()}
                                  >
                                    <span className="flex items-center">
                                      <span className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
                                      {subsection.title}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
