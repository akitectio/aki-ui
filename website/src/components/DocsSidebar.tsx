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
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-16 left-0 z-50 w-72 
        h-[calc(100vh-4rem)] 
        bg-gradient-to-b from-white via-gray-50/80 to-gray-100/50 dark:from-gray-900 dark:via-gray-800/90 dark:to-gray-700/30 
        border-r border-gray-200 dark:border-gray-700 shadow-xl
        backdrop-blur-sm
        transform transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
        overflow-hidden
      `}>
        {/* Header */}
        <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpenIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Documentation</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Aki UI Components</p>
            </div>
          </div>
        </div>

        <nav className="px-5 py-6 space-y-6 overflow-y-auto h-full scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-700">
          {docCategories.map((category) => {
            const Icon = category.icon
            const isCategoryExpanded = expandedCategories.includes(category.id)

            return (
              <div key={category.id} className="relative">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center justify-between px-3 py-3 text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-600 rounded-lg transition-all duration-200 group relative overflow-hidden"
                  aria-expanded={isCategoryExpanded}
                  aria-label={`${isCategoryExpanded ? 'Collapse' : 'Expand'} ${category.title} section`}
                >
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                  <div className="flex items-center relative z-10">
                    <div className="w-6 h-6 mr-3 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                    </div>
                    <span className="font-semibold">{category.title}</span>
                  </div>
                  <ChevronRightIcon
                    className={`w-4 h-4 transition-all duration-300 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 relative z-10 ${isCategoryExpanded ? 'rotate-90' : ''
                      }`}
                  />
                </button>

                {isCategoryExpanded && (
                  <ul className="mt-3 space-y-1.5 transform transition-all duration-300 ease-out">
                    {category.sections.map((section) => {
                      const hasSubsections = section.subsections && section.subsections.length > 0
                      const isExpanded = expandedSections.includes(section.id)

                      return (
                        <li key={section.id}>
                          <div className="flex items-center group">
                            <Link
                              href={section.href}
                              className={`
                                flex-1 block px-3 py-2.5 text-sm rounded-lg transition-all duration-200 relative overflow-hidden
                                ${pathname === section.href
                                  ? 'bg-gradient-to-r from-blue-50 via-blue-100 to-purple-50 dark:from-blue-900/30 dark:via-blue-800/20 dark:to-purple-900/10 text-blue-700 dark:text-blue-300 font-semibold shadow-sm border border-blue-200 dark:border-blue-800'
                                  : 'text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-gray-50 hover:via-gray-100 hover:to-gray-50 dark:hover:from-gray-700 dark:hover:via-gray-600 dark:hover:to-gray-700 hover:text-gray-900 dark:hover:text-gray-100 hover:shadow-sm'
                                }
                              `}
                              onClick={() => onClose?.()}
                            >
                              {pathname === section.href && (
                                <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-r-full"></span>
                              )}
                              <span className="ml-1 relative z-10">{section.title}</span>
                            </Link>

                            {/* Toggle button for sections with subsections */}
                            {hasSubsections && (
                              <button
                                onClick={() => toggleSection(section.id)}
                                className="p-2 rounded-lg text-gray-400 hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 opacity-0 group-hover:opacity-100"
                                aria-label={isExpanded ? 'Collapse section' : 'Expand section'}
                              >
                                <ChevronRightIcon
                                  className={`w-4 h-4 transition-all duration-300 ${isExpanded ? 'rotate-90' : ''
                                    }`}
                                />
                              </button>
                            )}
                          </div>

                          {/* Subsections (menu cấp 2) - Only show when expanded */}
                          {hasSubsections && isExpanded && section.subsections && (
                            <ul className="mt-2 ml-4 space-y-1.5 border-l-2 border-blue-200 dark:border-blue-800 pl-4 transform transition-all duration-300 ease-out">
                              {section.subsections.map((subsection) => (
                                <li key={subsection.id}>
                                  <Link
                                    href={subsection.href}
                                    className={`
                                      block px-3 py-2 text-sm rounded-lg transition-all duration-200 relative group overflow-hidden
                                      ${pathname === subsection.href
                                        ? 'bg-gradient-to-r from-blue-50 via-blue-100 to-purple-50 dark:from-blue-900/30 dark:via-blue-800/20 dark:to-purple-900/10 text-blue-700 dark:text-blue-300 font-semibold shadow-sm border border-blue-200 dark:border-blue-800'
                                        : 'text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-50 hover:via-gray-100 hover:to-gray-50 dark:hover:from-gray-700 dark:hover:via-gray-600 dark:hover:to-gray-700 hover:text-gray-900 dark:hover:text-gray-100 hover:shadow-sm'
                                      }
                                    `}
                                    onClick={() => onClose?.()}
                                  >
                                    <span className="flex items-center relative z-10">
                                      <span className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 transition-all duration-200 ${pathname === subsection.href
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400'
                                        : 'bg-gray-400 dark:bg-gray-600 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400'
                                        }`}></span>
                                      {subsection.title}
                                    </span>
                                    {pathname === subsection.href && (
                                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-r-full"></span>
                                    )}
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
