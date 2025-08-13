'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Subsection {
  id: string
  title: string
  href: string
  keywords?: string[]
  description?: string
}

interface Section {
  id: string
  title: string
  href: string
  keywords?: string[]
  description?: string
  subsections?: Subsection[]
}

interface DocCategory {
  id: string
  title: string
  keywords?: string[]
  description?: string
  sections: Section[]
}

const docCategories: DocCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Get started with Aki UI library',
    keywords: ['setup', 'install', 'config', 'quick start', 'begin'],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        href: '/docs',
        description: 'Learn about Aki UI components library',
        keywords: ['introduction', 'about', 'what is', 'features']
      },
      {
        id: 'introduction',
        title: 'Introduction',
        href: '/docs/introduction',
        description: 'Introduction to Aki UI',
        keywords: ['intro', 'about', 'getting started']
      },
      {
        id: 'installation',
        title: 'Installation',
        href: '/docs/installation',
        description: 'How to install Aki UI in your project',
        keywords: ['install', 'npm', 'yarn', 'setup', 'package', 'dependency']
      },
      {
        id: 'framework-support',
        title: 'Framework Support',
        href: '/docs/framework-support',
        description: 'Supported frameworks and integrations',
        keywords: ['react', 'nextjs', 'framework', 'compatibility', 'integration']
      },
    ]
  },
  {
    id: 'components',
    title: 'Components',
    description: 'Explore all available UI components',
    keywords: ['ui', 'elements', 'widgets', 'library'],
    sections: [
      {
        id: 'components-overview',
        title: 'Overview',
        href: '/docs/components',
        description: 'Overview of all components',
        keywords: ['all components', 'list', 'catalog']
      },
      {
        id: 'form-components',
        title: 'Form',
        href: '/docs/components#form',
        description: 'Form input components and controls',
        keywords: ['input', 'form', 'field', 'control', 'user input'],
        subsections: [
          {
            id: 'button',
            title: 'Button',
            href: '/docs/components/button',
            description: 'Interactive button component with multiple variants',
            keywords: ['click', 'action', 'cta', 'submit', 'primary', 'secondary']
          },
          {
            id: 'input',
            title: 'Input',
            href: '/docs/components/input',
            description: 'Text input field component',
            keywords: ['text', 'field', 'type', 'form field', 'textbox']
          },
          {
            id: 'select',
            title: 'Select',
            href: '/docs/components/select',
            description: 'Dropdown selection component',
            keywords: ['dropdown', 'picker', 'choose', 'option', 'combobox']
          },
          {
            id: 'checkbox',
            title: 'Checkbox',
            href: '/docs/components/checkbox',
            description: 'Checkbox input for multiple selections',
            keywords: ['check', 'tick', 'multiple', 'selection', 'boolean']
          },
          {
            id: 'radio',
            title: 'Radio',
            href: '/docs/components/radio',
            description: 'Radio button for single selection',
            keywords: ['radio button', 'single', 'choice', 'option']
          },
          {
            id: 'switch',
            title: 'Switch',
            href: '/docs/components/switch',
            description: 'Toggle switch component',
            keywords: ['toggle', 'on off', 'boolean', 'switch button']
          },
          {
            id: 'colorpicker',
            title: 'ColorPicker',
            href: '/docs/components/colorpicker',
            description: 'Color picker component with preset and custom colors',
            keywords: ['color', 'picker', 'palette', 'hex', 'rgb', 'hue', 'saturation']
          },
          {
            id: 'command',
            title: 'Command',
            href: '/docs/components/command',
            description: 'Fast, composable command menu for React',
            keywords: ['command', 'menu', 'search', 'palette', 'shortcut', 'ctrl+k']
          },
          {
            id: 'textarea',
            title: 'Textarea',
            href: '/docs/components/textarea',
            description: 'Multi-line text input component',
            keywords: ['textarea', 'multiline', 'text', 'input', 'form']
          },
          {
            id: 'slider',
            title: 'Slider',
            href: '/docs/components/slider',
            description: 'Range slider input component',
            keywords: ['slider', 'range', 'input', 'number', 'value']
          },
        ]
      },
      {
        id: 'display-components',
        title: 'Display',
        href: '/docs/components#display',
        description: 'Components for displaying content and data',
        keywords: ['show', 'display', 'content', 'information', 'visual'],
        subsections: [
          {
            id: 'card',
            title: 'Card',
            href: '/docs/components/card',
            description: 'Container component for content grouping',
            keywords: ['container', 'box', 'panel', 'section', 'group']
          },
          {
            id: 'badge',
            title: 'Badge',
            href: '/docs/components/badge',
            description: 'Small label component for status and counts',
            keywords: ['label', 'tag', 'status', 'notification', 'count', 'indicator']
          },
          {
            id: 'avatar',
            title: 'Avatar',
            href: '/docs/components/avatar',
            description: 'User profile picture component',
            keywords: ['profile', 'user', 'picture', 'image', 'photo', 'icon']
          },
          {
            id: 'alert',
            title: 'Alert',
            href: '/docs/components/alert',
            description: 'Alert message component for notifications',
            keywords: ['message', 'notification', 'warning', 'error', 'success', 'info']
          },
          {
            id: 'spinner',
            title: 'Spinner',
            href: '/docs/components/spinner',
            description: 'Loading spinner component',
            keywords: ['loading', 'loader', 'progress', 'waiting', 'busy']
          },
          {
            id: 'datatable',
            title: 'DataTable',
            href: '/docs/components/datatable',
            description: 'Advanced table component with sorting and filtering',
            keywords: ['table', 'data', 'grid', 'sort', 'filter', 'pagination', 'rows', 'columns']
          },
          {
            id: 'imagecropper',
            title: 'ImageCropper',
            href: '/docs/components/imagecropper',
            description: 'Image cropping and editing component',
            keywords: ['image', 'crop', 'edit', 'resize', 'photo', 'picture', 'upload']
          },
          {
            id: 'accordion',
            title: 'Accordion',
            href: '/docs/components/accordion',
            description: 'Collapsible content sections',
            keywords: ['accordion', 'collapse', 'expand', 'fold', 'section']
          },
          {
            id: 'divider',
            title: 'Divider',
            href: '/docs/components/divider',
            description: 'Visual separator component',
            keywords: ['divider', 'separator', 'line', 'border', 'hr']
          },
          {
            id: 'progress',
            title: 'Progress',
            href: '/docs/components/progress',
            description: 'Progress bar component',
            keywords: ['progress', 'bar', 'loading', 'percentage', 'completion']
          },
          {
            id: 'skeleton',
            title: 'Skeleton',
            href: '/docs/components/skeleton',
            description: 'Loading placeholder skeleton',
            keywords: ['skeleton', 'placeholder', 'loading', 'shimmer', 'ghost']
          },
          {
            id: 'table',
            title: 'Table',
            href: '/docs/components/table',
            description: 'Basic table component',
            keywords: ['table', 'data', 'rows', 'columns', 'grid']
          },
        ]
      },
      {
        id: 'navigation-components',
        title: 'Navigation',
        href: '/docs/components#navigation',
        description: 'Navigation and routing components',
        keywords: ['navigate', 'menu', 'routing', 'links'],
        subsections: [
          {
            id: 'navbar',
            title: 'Navbar',
            href: '/docs/components/navbar',
            description: 'Navigation bar component',
            keywords: ['navigation', 'header', 'menu', 'top bar']
          },
          {
            id: 'vertical-navbar',
            title: 'VerticalNavbar',
            href: '/docs/components/vertical-navbar',
            description: 'Vertical sidebar navigation component',
            keywords: ['sidebar', 'vertical', 'navigation', 'admin', 'dashboard']
          },
          {
            id: 'breadcrumb',
            title: 'Breadcrumb',
            href: '/docs/components/breadcrumb',
            description: 'Breadcrumb navigation component',
            keywords: ['path', 'trail', 'navigation', 'hierarchy']
          },
          {
            id: 'tabs',
            title: 'Tabs',
            href: '/docs/components/tabs',
            description: 'Tab navigation component',
            keywords: ['tab', 'switch', 'panel', 'section']
          },
          {
            id: 'pagination',
            title: 'Pagination',
            href: '/docs/components/pagination',
            description: 'Pagination component for data navigation',
            keywords: ['page', 'next', 'previous', 'numbers', 'navigation']
          },
        ]
      },
      {
        id: 'overlay-components',
        title: 'Overlay',
        href: '/docs/components#overlay',
        description: 'Overlay and popup components',
        keywords: ['popup', 'overlay', 'modal', 'dialog'],
        subsections: [
          {
            id: 'modal',
            title: 'Modal',
            href: '/docs/components/modal',
            description: 'Modal dialog component',
            keywords: ['dialog', 'popup', 'overlay', 'window']
          },
          {
            id: 'drawer',
            title: 'Drawer',
            href: '/docs/components/drawer',
            description: 'Slide-out drawer component',
            keywords: ['sidebar', 'slide', 'panel', 'menu']
          },
          {
            id: 'tooltip',
            title: 'Tooltip',
            href: '/docs/components/tooltip',
            description: 'Tooltip component for helpful hints',
            keywords: ['hint', 'help', 'hover', 'tip', 'info']
          },
          {
            id: 'toast',
            title: 'Toast',
            href: '/docs/components/toast',
            description: 'Toast notification component',
            keywords: ['notification', 'message', 'alert', 'snackbar']
          },
          {
            id: 'dialog',
            title: 'Dialog',
            href: '/docs/components/dialog',
            description: 'Dialog component for user interactions',
            keywords: ['dialog', 'modal', 'popup', 'confirm', 'alert']
          },
          {
            id: 'popover',
            title: 'Popover',
            href: '/docs/components/popover',
            description: 'Popover component for contextual content',
            keywords: ['popover', 'popup', 'context', 'tooltip', 'overlay']
          },
          {
            id: 'dropdown',
            title: 'Dropdown',
            href: '/docs/components/dropdown',
            description: 'Dropdown menu component',
            keywords: ['dropdown', 'menu', 'select', 'options', 'list']
          },
        ]
      },
    ]
  },
  {
    id: 'layout',
    title: 'Layout',
    description: 'Layout and spacing components',
    keywords: ['layout', 'grid', 'flex', 'spacing', 'responsive'],
    sections: [
      {
        id: 'layout-overview',
        title: 'Overview',
        href: '/docs/layout',
        description: 'Layout system overview',
        keywords: ['system', 'structure', 'organize']
      },
      {
        id: 'grid',
        title: 'Grid',
        href: '/docs/layout/grid',
        description: 'CSS Grid layout system',
        keywords: ['css grid', 'columns', 'rows', 'responsive']
      },
      {
        id: 'stack',
        title: 'Stack',
        href: '/docs/layout/stack',
        description: 'Vertical and horizontal stack layouts',
        keywords: ['flex', 'vertical', 'horizontal', 'align']
      },
      {
        id: 'breakpoints',
        title: 'Breakpoints',
        href: '/docs/layout/breakpoints',
        description: 'Responsive breakpoint system',
        keywords: ['responsive', 'mobile', 'tablet', 'desktop', 'screen size']
      },
    ]
  },
  {
    id: 'theming',
    title: 'Theming',
    description: 'Theming and customization options',
    keywords: ['theme', 'colors', 'customize', 'style', 'design'],
    sections: [
      {
        id: 'theming-overview',
        title: 'Overview',
        href: '/docs/theming',
        description: 'Theming system overview',
        keywords: ['customize', 'brand', 'style']
      },
      {
        id: 'color-modes',
        title: 'Color Modes',
        href: '/docs/color-modes',
        description: 'Dark and light mode support',
        keywords: ['dark mode', 'light mode', 'theme', 'colors']
      },
    ]
  }
]

export function DocsSidebar({ isOpen = false, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['getting-started'])
  const [searchQuery, setSearchQuery] = useState('')

  // Helper function to highlight search terms
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text

    const regex = new RegExp(`(${query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
    const parts = text.split(regex)

    return (
      <>
        {parts.map((part, index) =>
          regex.test(part) ? (
            <mark
              key={index}
              className="bg-yellow-200 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-100 px-0.5 rounded"
              style={{ pointerEvents: 'none' }}
            >
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    )
  }

  // Helper function to check if text matches search query (fuzzy search)
  const matchesSearch = (text: string, query: string): boolean => {
    if (!text || !query) return false
    const normalizedText = text.toLowerCase()
    const normalizedQuery = query.toLowerCase().trim()

    // Exact match
    if (normalizedText.includes(normalizedQuery)) return true

    // Check if all words in query exist in text
    const queryWords = normalizedQuery.split(/\s+/)
    return queryWords.every(word => normalizedText.includes(word))
  }

  // Helper function to check if any keywords match
  const matchesKeywords = (keywords: string[] = [], query: string): boolean => {
    return keywords.some(keyword => matchesSearch(keyword, query))
  }

  // Filter categories and sections based on search query
  const filteredCategories = useMemo(() => {
    return searchQuery
      ? docCategories.map(category => {
        const query = searchQuery.toLowerCase().trim()

        // Check if category matches (title, id, description, keywords)
        const categoryMatches =
          matchesSearch(category.title, query) ||
          matchesSearch(category.id, query) ||
          matchesSearch(category.description || '', query) ||
          matchesKeywords(category.keywords, query)

        // Filter sections
        const matchingSections = category.sections.filter(section => {
          // Check section match (title, id, href, description, keywords)
          const sectionMatches =
            matchesSearch(section.title, query) ||
            matchesSearch(section.id, query) ||
            matchesSearch(section.href, query) ||
            matchesSearch(section.description || '', query) ||
            matchesKeywords(section.keywords, query)

          // Check subsections match
          const hasMatchingSubsection = section.subsections?.some(sub =>
            matchesSearch(sub.title, query) ||
            matchesSearch(sub.id, query) ||
            matchesSearch(sub.href, query) ||
            matchesSearch(sub.description || '', query) ||
            matchesKeywords(sub.keywords, query)
          )

          return sectionMatches || hasMatchingSubsection || categoryMatches
        }).map(section => ({
          ...section,
          subsections: section.subsections?.filter(sub => {
            const subsectionMatches =
              matchesSearch(sub.title, query) ||
              matchesSearch(sub.id, query) ||
              matchesSearch(sub.href, query) ||
              matchesSearch(sub.description || '', query) ||
              matchesKeywords(sub.keywords, query)

            const sectionMatches =
              matchesSearch(section.title, query) ||
              matchesSearch(section.id, query) ||
              matchesSearch(section.href, query) ||
              matchesSearch(section.description || '', query) ||
              matchesKeywords(section.keywords, query)

            return subsectionMatches || sectionMatches || categoryMatches
          })
        }))

        return {
          ...category,
          sections: matchingSections
        }
      }).filter(category => category.sections.length > 0)
      : docCategories
  }, [searchQuery])

  // Auto-expand categories when searching
  useEffect(() => {
    if (searchQuery) {
      // Tính toán lại filteredCategories trong useEffect để tránh dependency loop
      const query = searchQuery.toLowerCase().trim()
      const filtered = docCategories.map(category => {
        const categoryMatches =
          matchesSearch(category.title, query) ||
          matchesSearch(category.id, query) ||
          matchesSearch(category.description || '', query) ||
          matchesKeywords(category.keywords, query)

        const matchingSections = category.sections.filter(section => {
          const sectionMatches =
            matchesSearch(section.title, query) ||
            matchesSearch(section.id, query) ||
            matchesSearch(section.href, query) ||
            matchesSearch(section.description || '', query) ||
            matchesKeywords(section.keywords, query)

          const hasMatchingSubsection = section.subsections?.some(sub =>
            matchesSearch(sub.title, query) ||
            matchesSearch(sub.id, query) ||
            matchesSearch(sub.href, query) ||
            matchesSearch(sub.description || '', query) ||
            matchesKeywords(sub.keywords, query)
          )

          return sectionMatches || hasMatchingSubsection || categoryMatches
        })

        return {
          ...category,
          sections: matchingSections
        }
      }).filter(category => category.sections.length > 0)

      const categoriesToExpand = filtered.map(cat => cat.id)
      const sectionsToExpand = filtered.flatMap(cat =>
        cat.sections.filter(section => section.subsections?.length).map(section => section.id)
      )
      setExpandedCategories(categoriesToExpand)
      setExpandedSections(sectionsToExpand)
    }
  }, [searchQuery]) // Chỉ phụ thuộc vào searchQuery
  // Auto-expand sections and categories based on current pathname
  useEffect(() => {
    if (!searchQuery) {
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
    }
  }, [pathname, searchQuery])

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
        h-[calc(100vh-4rem)] lg:h-[calc(100vh-4rem)]
        bg-gray-50 dark:bg-gray-900
        border-r border-gray-200 dark:border-gray-800
        transform transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
        overflow-hidden
        lg:self-start
        flex flex-col
      `}>
        {/* Header */}
        <nav className="flex-1 overflow-y-auto p-4">
          {/* Search Bar */}
          <div className="relative mb-6">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search components, guides, APIs... (try 'button', 'form', 'table')"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {filteredCategories.length === 0 && searchQuery ? (
            <div className="text-center py-8">
              <svg className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">No results for "{searchQuery}"</p>
              <div className="text-xs text-gray-400 dark:text-gray-500 space-y-1">
                <p className="font-medium mb-2">Try searching for:</p>
                <div className="grid grid-cols-2 gap-1 text-left max-w-64 mx-auto">
                  <span>• button, input, card</span>
                  <span>• table, data, grid</span>
                  <span>• form, field, control</span>
                  <span>• modal, popup, dialog</span>
                  <span>• loading, spinner</span>
                  <span>• navigation, menu</span>
                  <span>• theme, colors</span>
                  <span>• layout, responsive</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {searchQuery && (
                <div className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 pb-3">
                  {(() => {
                    const totalSections = filteredCategories.reduce((count, cat) =>
                      count + cat.sections.length +
                      cat.sections.reduce((subCount, sec) => subCount + (sec.subsections?.length || 0), 0)
                      , 0)
                    return `Found ${totalSections} result${totalSections !== 1 ? 's' : ''} for "${searchQuery}"`
                  })()}
                </div>
              )}
              {filteredCategories.map((category) => {
                const isCategoryExpanded = expandedCategories.includes(category.id)

                return (
                  <div key={category.id}>
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="w-full flex items-center justify-between px-2 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-150"
                      aria-expanded={isCategoryExpanded}
                    >
                      <span>{searchQuery ? highlightText(category.title, searchQuery) : category.title}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-150 ${isCategoryExpanded ? 'rotate-90' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {isCategoryExpanded && (
                      <div className="mt-2 space-y-1">
                        {category.sections.map((section) => {
                          const hasSubsections = section.subsections && section.subsections.length > 0
                          const isExpanded = expandedSections.includes(section.id)

                          return (
                            <div key={section.id}>
                              <div className="flex items-center">
                                <Link
                                  href={section.href}
                                  className={`
                                    flex-1 block px-3 py-2 text-sm rounded-md transition-all duration-150 cursor-pointer
                                    ${pathname === section.href
                                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                                      : 'text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                                    }
                                  `}
                                  onClick={() => onClose?.()}
                                >
                                  {searchQuery ? highlightText(section.title, searchQuery) : section.title}
                                </Link>

                                {hasSubsections && (
                                  <button
                                    onClick={() => toggleSection(section.id)}
                                    className="p-1.5 ml-1 rounded text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-150"
                                    aria-label={isExpanded ? 'Collapse' : 'Expand'}
                                  >
                                    <svg
                                      className={`w-3.5 h-3.5 transition-transform duration-150 ${isExpanded ? 'rotate-90' : ''}`}
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>
                                )}
                              </div>

                              {hasSubsections && isExpanded && section.subsections && (
                                <div className="ml-4 mt-1 space-y-0.5 border-l border-gray-200 dark:border-gray-800 pl-3">
                                  {section.subsections.map((subsection) => (
                                    <Link
                                      key={subsection.id}
                                      href={subsection.href}
                                      className={`
                                        block px-3 py-1.5 text-sm rounded-md transition-all duration-150 cursor-pointer
                                        ${pathname === subsection.href
                                          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                                          : 'text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                                        }
                                      `}
                                      onClick={() => onClose?.()}
                                    >
                                      {searchQuery ? highlightText(subsection.title, searchQuery) : subsection.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </nav>
      </aside>
    </>
  )
}
