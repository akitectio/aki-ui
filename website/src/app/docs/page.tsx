'use client'

import Link from 'next/link'
import { Button, Card } from '@akitectio/aki-ui'
import { PageHeader } from '@/components/PageHeader'
import {
  BookOpenIcon,
  CubeIcon,
  RectangleStackIcon,
  DocumentTextIcon,
  CommandLineIcon,
  SparklesIcon
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
      { id: 'checkbox', title: 'Checkbox', href: '/docs/components/checkbox' },
      { id: 'radio', title: 'Radio', href: '/docs/components/radio' },
      { id: 'switch', title: 'Switch', href: '/docs/components/switch' },
      { id: 'modal', title: 'Modal', href: '/docs/components/modal' },
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

export default function DocsHomePage() {
  return (
    <PageHeader
      title="Documentation"
      description="Everything you need to know about using Aki UI in your React applications."
    >
      <div className="space-y-8">
        {/* Hero Section - LLM & MCP Support */}
        <section className="mb-12">
          <Card className="p-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-blue-200">
            <div className="text-center">
              <div className="flex justify-center items-center space-x-3 mb-4">
                <SparklesIcon className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI-Powered Development
                </h2>
                <CommandLineIcon className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                Aki UI is the first React component library with <strong>built-in LLM and MCP integration</strong>.
                Build faster with AI assistance, generate components automatically, and leverage
                the Model Context Protocol for seamless development workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <Link href="/docs/llm">
                    <SparklesIcon className="w-5 h-5 mr-2" />
                    Explore LLM Integration
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/docs/mcp">
                    <CommandLineIcon className="w-5 h-5 mr-2" />
                    Learn About MCP
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">🚀 Getting Started</h3>
              <p className="text-gray-600 mb-4">
                New to Aki UI? Start here to learn the basics and get your first component running.
              </p>
              <Button asChild>
                <Link href="/docs/installation">Start Building</Link>
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">🎨 Design System</h3>
              <p className="text-gray-600 mb-4">
                Learn about our design principles, theming system, and customization options.
              </p>
              <Button variant="outline" asChild>
                <Link href="/docs/theming">Explore Theming</Link>
              </Button>
            </Card>
          </div>
        </section>

        {docCategories.map((category) => {
          const Icon = category.icon
          const isAISection = category.id === 'mcp' || category.id === 'llm'

          return (
            <section key={category.id}>
              <div className="flex items-center mb-4">
                <Icon className={`w-6 h-6 mr-3 ${isAISection ? 'text-purple-600' : 'text-blue-600'}`} />
                <h2 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h2>
                {isAISection && (
                  <span className="ml-3 px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                    AI-Powered
                  </span>
                )}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.sections.map((section) => (
                  <Link key={section.id} href={section.href}>                    <Card className={`p-4 hover:shadow-md transition-shadow cursor-pointer group border-2 border-transparent ${isAISection
                    ? 'hover:border-purple-200 bg-gradient-to-br from-purple-50/50 to-indigo-50/50'
                    : 'hover:border-blue-200'
                    }`}>
                    <h3 className={`font-medium mb-2 text-gray-900 ${isAISection
                      ? 'group-hover:text-purple-600'
                      : 'group-hover:text-blue-600'
                      }`}>
                      {section.title}
                    </h3>
                    <div className={`flex items-center text-sm ${isAISection
                      ? 'text-purple-600'
                      : 'text-blue-600'
                      }`}>
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
          )
        })}

        <section className="mt-12">
          <Card className="p-8 text-center bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Check out our community resources or open an issue on GitHub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <a href="https://github.com/akitectio/aki-ui/discussions" target="_blank" rel="noopener noreferrer">
                  Community Discussions
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/akitectio/aki-ui/issues" target="_blank" rel="noopener noreferrer">
                  Report an Issue
                </a>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </PageHeader>
  )
}
