'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { ComponentShowcase } from '@/components/ComponentShowcase'
import { ToastDemo } from '@/components/ToastDemo'
import { FloatingSearch } from '@/components/FloatingSearch'
import { Badge, Button, Card } from '@/components/client-components'

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-900">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Badge variant="primary" className="mb-4 shadow-lg">
              🤖 AI-Powered UI • LLM Integration • MCP Support
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Build Beautiful UIs with{' '}
            <span className="bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 bg-clip-text text-transparent">
              Aki UI
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            A modern, accessible, and customizable React component library built with TypeScript and Tailwind CSS.
            Create stunning user interfaces with AI-powered development tools, LLM integration, and Model Context Protocol (MCP) support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow" asChild>
              <Link href="/docs/installation">Get Started</Link>
            </Button>
            <Button variant="secondary" size="lg" className="shadow-md hover:shadow-lg transition-shadow" asChild>
              <Link href="/docs/components">Browse Components</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="shadow-md hover:shadow-lg transition-shadow border-2 border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              asChild
            >
              <a href="https://aki-ui.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                🚀 Live Storybook
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </Button>
            <Button variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-shadow border-2 border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20" asChild>
              <Link href="/docs/llm">🤖 AI & LLM</Link>
            </Button>
          </div>

          {/* Quick Start */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-900 dark:bg-slate-800 rounded-xl p-6 text-left shadow-2xl border border-slate-700">
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-400 text-sm font-medium">Quick Install</span>
                <button
                  onClick={handleCopy}
                  className="text-slate-400 hover:text-white text-sm transition-colors px-2 py-1 rounded hover:bg-slate-700"
                >
                  {copyText}
                </button>
              </div>
              <code className="text-emerald-400 font-mono text-lg">npm install @akitectio/aki-ui</code>
            </div>
          </div>
        </div>
      </section>

      {/* Component Showcase with Theming */}
      <ComponentShowcase />

      {/* LLM & MCP Integration Highlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="primary" className="mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              🚀 AI-Powered Development
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Supercharge Your Development with{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AI & LLM Integration
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Aki UI is the first component library designed for the AI era. Build faster with LLM-powered code generation,
              Model Context Protocol (MCP) support, and AI-friendly component APIs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">LLM-Optimized Components</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Every component is designed with clear, descriptive APIs that LLMs understand perfectly.
                    Generate complex UIs with simple natural language prompts.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Model Context Protocol (MCP)</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Built-in MCP server support enables AI assistants to directly interact with Aki UI,
                    providing real-time component generation and customization.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Code Generation</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Integrated AI tools and prompts help you generate forms, layouts, and complex components
                    with intelligent defaults and best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 dark:bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-400 text-sm font-medium">AI-Generated Component</span>
                <Badge variant="secondary" className="bg-purple-600 text-white">✨ AI</Badge>
              </div>
              <pre className="text-sm text-slate-300 overflow-x-auto">
                <code>{`// Generated with: "Create a user profile card"
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

          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg" asChild>
                <Link href="/docs/llm">Explore LLM Integration</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20" asChild>
                <Link href="/docs/mcp">Learn about MCP</Link>
              </Button>
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
              <h3 className="text-xl font-semibold mb-2">TypeScript First</h3>
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
              <h3 className="text-xl font-semibold mb-2">Accessible</h3>
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
              <h3 className="text-xl font-semibold mb-2">Customizable</h3>
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
              <h3 className="text-xl font-semibold mb-2">🤖 LLM Integration</h3>
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
              <h3 className="text-xl font-semibold mb-2">⚡ MCP Support</h3>
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
              <h3 className="text-xl font-semibold mb-2">Dark Mode</h3>
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
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
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
              <h3 className="text-xl font-semibold mb-2">Well Documented</h3>
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
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Install Aki UI and start building beautiful interfaces today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/docs/installation">Get Started Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/akitectio/aki-ui" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Aki UI</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Modern React component library for building beautiful user interfaces.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-4">Documentation</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/docs/introduction" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Introduction</Link></li>
                <li><Link href="/docs/installation" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Installation</Link></li>
                <li><Link href="/docs/theming" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Theming</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-4">AI Integration</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/docs/llm" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">🤖 LLM Support</Link></li>
                <li><Link href="/docs/mcp" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">⚡ MCP Protocol</Link></li>
                <li><Link href="/docs/llm/ai-tools" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">🛠️ AI Tools</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/docs/components/button" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Button</Link></li>
                <li><Link href="/docs/components/card" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Card</Link></li>
                <li><Link href="/docs/components/input" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Input</Link></li>
                <li>
                  <a
                    href="https://aki-ui.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center gap-1"
                  >
                    🚀 Storybook
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-4">Community</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://github.com/akitectio/aki-ui" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">GitHub</a></li>
                <li><a href="https://github.com/akitectio/aki-ui/issues" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Issues</a></li>
                <li><a href="https://github.com/akitectio/aki-ui/discussions" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Discussions</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              © 2024 Aki UI. Released under the MIT License.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Search */}
      <FloatingSearch />
    </div>
  )
}
