'use client'

import Link from 'next/link'
import { Card, Badge, Button, useToast } from '@akitectio/aki-ui'
import { PageHeader } from '@/components/PageHeader'

const componentCategories = [
  {
    title: 'Form Controls',
    description: 'Interactive form elements for user input',
    components: [
      {
        name: 'Button',
        description: 'Clickable button with multiple variants and states',
        href: '/docs/components/button',
        status: 'stable' as const,
      },
      {
        name: 'Input',
        description: 'Text input field with validation support',
        href: '/docs/components/input',
        status: 'stable' as const,
      },
      {
        name: 'Checkbox',
        description: 'Binary choice input with custom styling',
        href: '/docs/components/checkbox',
        status: 'stable' as const,
      },
      {
        name: 'Radio',
        description: 'Single choice from multiple options',
        href: '/docs/components/radio',
        status: 'stable' as const,
      },
      {
        name: 'Switch',
        description: 'Toggle switch for boolean values',
        href: '/docs/components/switch',
        status: 'stable' as const,
      },
    ],
  },
  {
    title: 'Data Display',
    description: 'Components for displaying and organizing content',
    components: [
      {
        name: 'Card',
        description: 'Flexible container for grouping related content',
        href: '/docs/components/card',
        status: 'stable' as const,
      },
      {
        name: 'Badge',
        description: 'Small status indicators and labels',
        href: '/docs/components/badge',
        status: 'stable' as const,
      },
      {
        name: 'Avatar',
        description: 'User profile images with fallback options',
        href: '/docs/components/avatar',
        status: 'stable' as const,
      },
      {
        name: 'DataTable',
        description: 'Advanced table with sorting and filtering',
        href: '/docs/components/datatable',
        status: 'beta' as const,
      },
    ],
  },
  {
    title: 'Feedback',
    description: 'Components for user feedback and notifications',
    components: [
      {
        name: 'Alert',
        description: 'Important messages and notifications',
        href: '/docs/components/alert',
        status: 'stable' as const,
      },
      {
        name: 'Toast',
        description: 'Temporary notification messages',
        href: '/docs/components/toast',
        status: 'beta' as const,
      },
      {
        name: 'Modal',
        description: 'Overlay dialogs for focused interactions',
        href: '/docs/components/modal',
        status: 'beta' as const,
      },
    ],
  },
  {
    title: 'Navigation',
    description: 'Components for app navigation and routing',
    components: [
      {
        name: 'Breadcrumb',
        description: 'Hierarchical navigation trail',
        href: '/docs/components/breadcrumb',
        status: 'stable' as const,
      },
      {
        name: 'Tabs',
        description: 'Content organization with tabbed interface',
        href: '/docs/components/tabs',
        status: 'beta' as const,
      },
      {
        name: 'Pagination',
        description: 'Navigate through pages of content',
        href: '/docs/components/pagination',
        status: 'beta' as const,
      },
    ],
  },
  {
    title: 'Layout',
    description: 'Structural components for page layout',
    components: [
      {
        name: 'Grid',
        description: 'Responsive grid system for layouts',
        href: '/docs/components/grid',
        status: 'stable' as const,
      },
      {
        name: 'Stack',
        description: 'Vertical and horizontal spacing utilities',
        href: '/docs/components/stack',
        status: 'stable' as const,
      },
      {
        name: 'Divider',
        description: 'Visual separators between content sections',
        href: '/docs/components/divider',
        status: 'stable' as const,
      },
    ],
  },
]

const getStatusBadge = (status: 'stable' | 'beta' | 'alpha') => {
  const variants = {
    stable: { variant: 'success' as const, text: 'Stable' },
    beta: { variant: 'warning' as const, text: 'Beta' },
    alpha: { variant: 'secondary' as const, text: 'Alpha' },
  }
  const { variant, text } = variants[status]
  return <Badge variant={variant} size="sm">{text}</Badge>
}

export default function ComponentsIndexPage() {
  return (
    <PageHeader
      title="Components"
      description="Browse all available Aki UI components organized by category."
    >
      <div className="space-y-12">
        {componentCategories.map((category) => (
          <section key={category.title}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.components.map((component) => (
                <Link key={component.name} href={component.href}>
                  <Card className="p-6 hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800 cursor-pointer group">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {component.name}
                      </h3>
                      {getStatusBadge(component.status)}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {component.description}
                    </p>
                    <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                      View docs
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-16">
          <Card className="p-8 text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold mb-4">Request a Component</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Don't see a component you need? We're always adding new components based on community feedback.
              Let us know what you'd like to see next!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/akitectio/aki-ui/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Request Component
              </a>
              <a
                href="https://github.com/akitectio/aki-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </div>
          </Card>
        </section>

        {/* Test component for global toast */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-sm font-medium text-blue-900 mb-2">
            🧪 Global Toast Test
          </h3>
          <Button
            onClick={() =>
              toast.show({
                title: 'Global Toast Working!',
                message: 'Toast functionality is available globally across the app.',
                variant: 'success',
              })
            }
            variant="success"
            size="sm"
          >
            Test Global Toast
          </Button>
        </div>
      </div>
    </PageHeader>
  )
}
