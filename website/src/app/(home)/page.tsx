'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ComponentShowcase } from '@/components/ComponentShowcase'
import { Badge, Card } from '@akitectio/aki-ui'

export default function Home() {
  const [copyText, setCopyText] = useState('Copy')

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('npm install @akitectio/aki-ui')
      setCopyText('Copied!')
      setTimeout(() => setCopyText('Copy'), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
      setCopyText('Failed')
      setTimeout(() => setCopyText('Copy'), 2000)
    }
  }
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-900 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Badge variant="primary" className="mb-4 shadow-lg mx-auto">
              🤖 AI-Powered UI • LLM Integration • MCP Support
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Build Beautiful UIs with{' '}
            <span className="bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 bg-clip-text text-transparent">
              Aki UI
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A modern, accessible, and customizable React component library built with TypeScript and Tailwind CSS.
            Create stunning user interfaces with AI-powered development tools, LLM integration, and Model Context Protocol (MCP) support.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
            <Link href="/docs/installation" className="inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500 rounded-md shadow-lg hover:shadow-xl w-full sm:w-auto">
              Get Started
            </Link>
            <Link href="/docs/components" className="inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-secondary-600 hover:bg-secondary-700 text-white focus:ring-secondary-500 rounded-md shadow-md hover:shadow-lg w-full sm:w-auto">
              Browse Components
            </Link>
            <a
              href="https://aki-ui.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base border-2 border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md shadow-md hover:shadow-xl ring-2 ring-blue-300 dark:ring-blue-700 ring-offset-2 dark:ring-offset-slate-900 relative w-full sm:w-auto"
            >
              {/* Decorative lines */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 dark:via-blue-600 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 dark:via-blue-600 to-transparent"></div>
              <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-blue-400 dark:via-blue-600 to-transparent"></div>
              <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-blue-400 dark:via-blue-600 to-transparent"></div>
              🚀 Live Storybook
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <Link href="/ai" className="inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors px-6 py-3 text-base border-2 border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-md shadow-md hover:shadow-lg">
              🤖 AI & LLM
            </Link>
          </div>

          {/* Quick Start */}
          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-slate-900 dark:bg-slate-800 rounded-xl p-3 sm:p-4 md:p-6 text-left shadow-2xl border border-slate-700 overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-400 text-xs sm:text-sm font-medium">Quick Install</span>
                <button
                  onClick={handleCopy}
                  className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors px-2 py-1 rounded hover:bg-slate-700 flex-shrink-0"
                >
                  {copyText}
                </button>
              </div>
              <div className="overflow-x-auto w-full">
                <code className="text-emerald-400 font-mono text-sm sm:text-base md:text-lg whitespace-nowrap block">
                  npm install @akitectio/aki-ui
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component Showcase with Theming */}
      <ComponentShowcase />

      {/* LLM & MCP Integration Highlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/20 overflow-hidden w-full">
        <div className="max-w-7xl mx-auto w-full overflow-hidden">
          <div className="text-center mb-12">
            <Badge variant="primary" className="mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              🚀 AI-Powered Development
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Supercharge Your Development with{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AI & LLM Integration
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Aki UI is the first component library designed for the AI era. Build faster with LLM-powered code generation,
              Model Context Protocol (MCP) support, and AI-friendly component APIs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-start overflow-hidden max-w-full">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m9 8h-1M4 12H3m12 6.5a2 2 0 11-4 0 2 2 0 014 0zM10 17h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">LLM-Optimized Components</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Every component is designed with clear, descriptive APIs that LLMs understand perfectly.
                    Generate complex UIs with simple natural language prompts.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 5h14v14H5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Model Context Protocol (MCP)</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Built-in MCP server support enables AI assistants to directly interact with Aki UI,
                    providing real-time component generation and customization.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V5L6 12h6v7l6-7h-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">AI Code Generation</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Integrated AI tools and prompts help you generate forms, layouts, and complex components
                    with intelligent defaults and best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 dark:bg-slate-800 rounded-2xl p-3 sm:p-4 md:p-6 shadow-2xl border border-slate-700 overflow-hidden">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-slate-400 text-xs sm:text-sm font-medium">AI-Generated Component</span>
                <Badge variant="secondary" className="bg-purple-600 text-white flex-shrink-0 text-xs">✨ AI</Badge>
              </div>
              <div className="overflow-hidden max-w-full">
                <div className="overflow-x-auto max-w-full">
                  <pre className="text-xs sm:text-sm md:text-base text-slate-300 p-2 max-w-full">
                    <code className="break-normal">{`// Generated with: "Create a user profile card"
import { Card, Avatar, Button } from '@akitectio/aki-ui'

export function UserProfile({ user }) {
  return (
    <Card className="p-6">
      <div className="flex items-center space-x-4">
        <Avatar src={user.avatar} alt={user.name} />
        <div>
          <h3 className="font-semibold">{user.name}</h3>
          <p className="text-gray-600">{user.role}</p>
        </div>
      </div>
      <Button className="mt-4 w-full">
        View Profile
      </Button>
    </Card>
  )
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-xl mx-auto">
              <Link href="/ai/llm" className="inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg rounded-md w-full sm:w-auto">
                Explore LLM Integration
              </Link>
              <Link href="/ai/mcp" className="inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors px-4 py-2 text-sm border-2 border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md w-full sm:w-auto">
                Learn about MCP
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Aki UI?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Built with modern technologies and best practices for exceptional developer experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">TypeScript First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built with TypeScript for excellent developer experience and type safety.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Accessible</h3>
              <p className="text-gray-600 dark:text-gray-300">
                WCAG 2.1 compliant components with proper ARIA attributes and keyboard navigation.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M13 13h4a2 2 0 012 2v4a2 2 0 01-2 2M9 9l3 3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Customizable</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Flexible theming system with Tailwind CSS integration for easy customization.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-2 border-purple-200 dark:border-purple-800">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">🤖 LLM Integration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                AI-optimized components with clear APIs that work perfectly with Large Language Models.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-2 border-blue-200 dark:border-blue-800">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">⚡ MCP Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built-in Model Context Protocol server for seamless AI assistant integration.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Dark Mode</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built-in dark mode support with seamless theme switching capabilities.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Performance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tree-shakable components with optimized bundle size and minimal runtime overhead.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Well Documented</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive documentation with examples, API references, and best practices.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">30+</div>
              <div className="text-gray-600 dark:text-gray-300">Components</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">AI</div>
              <div className="text-gray-600 dark:text-gray-300">LLM Ready</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">MCP</div>
              <div className="text-gray-600 dark:text-gray-300">Protocol</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">WCAG 2.1</div>
              <div className="text-gray-600 dark:text-gray-300">Accessible</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">MIT</div>
              <div className="text-gray-600 dark:text-gray-300">License</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8">
            Install Aki UI and start building beautiful interfaces today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/docs/installation" className="inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500 rounded-md w-full sm:w-auto">
              Get Started Now
            </Link>
            <a
              href="https://github.com/akitectio/aki-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 rounded-md w-full sm:w-auto"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
