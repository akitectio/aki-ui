'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button, Card, Badge, Alert } from '@akitectio/aki-ui'

const CopyButton = ({ text, label }: { text: string; label: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.wri      {/* Comprehensive AI Prompts */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Comprehensive AI Prompts Library</h2>
        <div className="bg-white p-6 border rounded-lg">
          <p className="mb-6">A comprehensive collection of prompts organized by development tasks. Use these with any AI assistant for optimal results:</p>
          
          {/* Component Discovery & Research */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">🔍 Component Discovery & Research</h3>
            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
                <p className="text-sm">"Show me all available form components in Aki UI with their props and usage examples"</p>
              </div>
              <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
                <p className="text-sm">"What data display components does Aki UI offer? Include tables, cards, and lists"</p>
              </div>
              <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
                <p className="text-sm">"Compare Aki UI's navigation components - when should I use each one?"</p>
              </div>
              <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
                <p className="text-sm">"List all interactive components with accessibility features and keyboard navigation"</p>
              </div>
            </div>
          </div>

          {/* Project Setup & Architecture */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-green-600">🚀 Project Setup & Architecture</h3>
            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                <p className="text-sm">"Set up a new Next.js 14 project with Aki UI, TypeScript, Tailwind CSS, and ESLint configuration"</p>
              </div>
              <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                <p className="text-sm">"Create a Vite React project with Aki UI, including proper build configuration and development setup"</p>
              </div>
              <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                <p className="text-sm">"Initialize a monorepo with multiple apps using Aki UI components, including shared theme configuration"</p>
              </div>
              <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                <p className="text-sm">"Set up a micro-frontend architecture where each app uses Aki UI with consistent theming"</p>
              </div>
            </div>
          </div>

          {/* Form Development */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-purple-600">📝 Form Development</h3>
            <div className="space-y-3">
              <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
                <p className="text-sm">"Create a multi-step registration form with validation, progress indicator, and error handling using Aki UI"</p>
              </div>
              <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
                <p className="text-sm">"Build a dynamic form builder where users can add/remove fields, with real-time validation using Zod"</p>
              </div>
              <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
                <p className="text-sm">"Design a survey form with conditional logic, file uploads, and progress saving functionality"</p>
              </div>
              <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
                <p className="text-sm">"Create an e-commerce checkout form with address validation, payment integration, and order summary"</p>
              </div>
            </div>
          </div>

          {/* Dashboard & Analytics */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-red-600">📊 Dashboard & Analytics</h3>
            <div className="space-y-3">
              <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
                <p className="text-sm">"Build a comprehensive admin dashboard with sidebar navigation, data cards, charts, and user management"</p>
              </div>
              <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
                <p className="text-sm">"Create a sales analytics dashboard with KPI cards, trend charts, and filterable data tables"</p>
              </div>
              <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
                <p className="text-sm">"Design a project management dashboard with kanban boards, progress tracking, and team collaboration features"</p>
              </div>
              <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
                <p className="text-sm">"Develop a financial dashboard with portfolio tracking, transaction history, and budget visualization"</p>
              </div>
            </div>
          </div>

          {/* E-commerce & Business */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-yellow-600">🛒 E-commerce & Business</h3>
            <div className="space-y-3">
              <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
                <p className="text-sm">"Create a product catalog with search, filtering, sorting, and pagination using Aki UI components"</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
                <p className="text-sm">"Build a shopping cart interface with item management, quantity controls, and checkout flow"</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
                <p className="text-sm">"Design a vendor marketplace with seller profiles, product listings, and review system"</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
                <p className="text-sm">"Develop a subscription management interface with plan comparison, billing history, and upgrade options"</p>
              </div>
            </div>
          </div>

          {/* Data Management */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">📋 Data Management</h3>
            <div className="space-y-3">
              <div className="bg-indigo-50 p-4 rounded border-l-4 border-indigo-500">
                <p className="text-sm">"Create an advanced data table with server-side pagination, sorting, filtering, and bulk actions"</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded border-l-4 border-indigo-500">
                <p className="text-sm">"Build a user management system with role-based permissions, user profiles, and activity logs"</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded border-l-4 border-indigo-500">
                <p className="text-sm">"Design a CRM interface with contact management, lead tracking, and communication history"</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded border-l-4 border-indigo-500">
                <p className="text-sm">"Develop a content management system with drag-and-drop page builder and media library"</p>
              </div>
            </div>
          </div>

          {/* Theme & Styling */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-teal-600">🎨 Theme & Styling</h3>
            <div className="space-y-3">
              <div className="bg-teal-50 p-4 rounded border-l-4 border-teal-500">
                <p className="text-sm">"Create a custom theme with brand colors, typography, and component styling that works across all Aki UI components"</p>
              </div>
              <div className="bg-teal-50 p-4 rounded border-l-4 border-teal-500">
                <p className="text-sm">"Implement a dynamic theme switcher with multiple color schemes and user preference persistence"</p>
              </div>
              <div className="bg-teal-50 p-4 rounded border-l-4 border-teal-500">
                <p className="text-sm">"Design a responsive layout system that adapts to different screen sizes while maintaining design consistency"</p>
              </div>
              <div className="bg-teal-50 p-4 rounded border-l-4 border-teal-500">
                <p className="text-sm">"Create CSS custom properties for a design system that supports multiple brands and white-labeling"</p>
              </div>
            </div>
          </div>

          {/* Performance & Optimization */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-orange-600">⚡ Performance & Optimization</h3>
            <div className="space-y-3">
              <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-500">
                <p className="text-sm">"Optimize my Aki UI components for better performance, including code splitting and lazy loading"</p>
              </div>
              <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-500">
                <p className="text-sm">"Implement virtualization for large data tables and lists to improve rendering performance"</p>
              </div>
              <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-500">
                <p className="text-sm">"Add proper error boundaries and loading states to all components for better user experience"</p>
              </div>
              <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-500">
                <p className="text-sm">"Bundle analyze and optimize my Aki UI implementation to reduce package size and improve load times"</p>
              </div>
            </div>
          </div>

          {/* Accessibility & Testing */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-pink-600">♿ Accessibility & Testing</h3>
            <div className="space-y-3">
              <div className="bg-pink-50 p-4 rounded border-l-4 border-pink-500">
                <p className="text-sm">"Audit my Aki UI components for WCAG 2.1 AA compliance and provide accessibility improvements"</p>
              </div>
              <div className="bg-pink-50 p-4 rounded border-l-4 border-pink-500">
                <p className="text-sm">"Add comprehensive keyboard navigation and screen reader support to all interactive components"</p>
              </div>
              <div className="bg-pink-50 p-4 rounded border-l-4 border-pink-500">
                <p className="text-sm">"Create unit tests and integration tests for all Aki UI components using Jest and React Testing Library"</p>
              </div>
              <div className="bg-pink-50 p-4 rounded border-l-4 border-pink-500">
                <p className="text-sm">"Set up end-to-end testing with Playwright for critical user flows in my Aki UI application"</p>
              </div>
            </div>
          </div>

          {/* Advanced Integration */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-600">🔧 Advanced Integration</h3>
            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded border-l-4 border-gray-500">
                <p className="text-sm">"Integrate Aki UI with React Hook Form and Zod for complex form validation and state management"</p>
              </div>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-gray-500">
                <p className="text-sm">"Connect Aki UI components with React Query for data fetching, caching, and synchronization"</p>
              </div>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-gray-500">
                <p className="text-sm">"Implement state management with Zustand/Redux Toolkit while maintaining component encapsulation"</p>
              </div>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-gray-500">
                <p className="text-sm">"Add internationalization (i18n) support to all Aki UI components with proper RTL layout handling"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example AI Prompts */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Quick Start Examples</h2>ext(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={handleCopy}
      className="ml-2"
    >
      {copied ? '✓ Copied' : `Copy ${label}`}
    </Button>
  )
}

export default function LLMOverviewPage() {
  const [mounted, setMounted] = useState(false)
  const [baseUrl, setBaseUrl] = useState('https://aki-ui.akitect.io')

  useEffect(() => {
    setMounted(true)
    setBaseUrl(window.location.origin)
  }, [])

  const llmsUrl = `${baseUrl}/llms.txt`
  const llmsFullUrl = `${baseUrl}/llms-full.txt`

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">LLM Integration</h1>
        <p className="text-lg text-gray-600 mb-6">
          Seamlessly integrate Aki UI with Large Language Models and AI-powered development tools.
        </p>
      </div>

      {/* What is LLM Integration */}
      <section>
        <h2 className="text-2xl font-bold mb-4">What is LLM Integration?</h2>
        <div className="bg-white p-6 border rounded-lg">
          <p className="mb-4">
            LLM Integration enables AI-powered development tools to understand and work with Aki UI components
            through structured documentation and code examples. This allows developers to get intelligent
            code suggestions, automatic component generation, and contextual help.
          </p>

          <div className="bg-green-50 border border-green-200 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2 text-green-800">🚀 Benefits:</h4>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• Intelligent code completion for Aki UI components</li>
              <li>• Automated component generation based on descriptions</li>
              <li>• Contextual documentation and examples</li>
              <li>• Best practices enforcement through AI suggestions</li>
              <li>• Faster development with AI-assisted coding</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LLMs.txt Integration */}
      <section>
        <h2 className="text-2xl font-bold mb-4">LLMs.txt Integration</h2>
        <div className="bg-white p-6 border rounded-lg">
          <p className="mb-4">
            Aki UI follows the <a href="https://llmstxt.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">llms.txt</a> standard
            to provide AI tools with structured access to our documentation and component library.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Card className="p-4">
              <h4 className="font-semibold mb-2 flex items-center">
                📄 Standard Documentation
                {mounted && <CopyButton text={llmsUrl} label="URL" />}
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                Concise overview and component information
              </p>
              <code className="text-xs bg-gray-100 p-1 rounded">
                {mounted ? llmsUrl : 'https://aki-ui.akitect.io/llms.txt'}
              </code>
            </Card>

            <Card className="p-4">
              <h4 className="font-semibold mb-2 flex items-center">
                📚 Full Documentation
                {mounted && <CopyButton text={llmsFullUrl} label="URL" />}
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                Complete API reference and examples
              </p>
              <code className="text-xs bg-gray-100 p-1 rounded">
                {mounted ? llmsFullUrl : 'https://aki-ui.akitect.io/llms-full.txt'}
              </code>
            </Card>
          </div>

          <Alert variant="info" showIcon>
            <div>
              <strong>Pro Tip</strong>
              <p className="mt-1">
                Share these URLs with your AI assistant to provide context about Aki UI components and their usage.
              </p>
            </div>
          </Alert>
        </div>
      </section>

      {/* Supported AI Tools */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Supported AI Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <img src="/aki-ui-icon.png" alt="Aki UI" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">GitHub Copilot</h3>
                <Badge variant="success" size="sm">Fully Supported</Badge>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Intelligent code completion and suggestions within VS Code and other editors.
            </p>
            <div className="text-xs text-gray-500">
              Features: Code completion • Inline chat • Documentation lookup
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                <img src="/aki-ui-icon.png" alt="Aki UI" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Cursor IDE</h3>
                <Badge variant="success" size="sm">Fully Supported</Badge>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              AI-first code editor with deep integration for component generation.
            </p>
            <div className="text-xs text-gray-500">
              Features: AI chat • Code generation • Refactoring
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center mr-3">
                <img src="/aki-ui-icon.png" alt="Aki UI" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Windsurf</h3>
                <Badge variant="success" size="sm">Fully Supported</Badge>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              AI-powered development environment with advanced code understanding.
            </p>
            <div className="text-xs text-gray-500">
              Features: Context-aware coding • Smart suggestions
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mr-3">
                <img src="/aki-ui-icon.png" alt="Aki UI" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Claude (Anthropic)</h3>
                <Badge variant="success" size="sm">MCP Support</Badge>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Advanced AI assistant with Model Context Protocol integration.
            </p>
            <div className="text-xs text-gray-500">
              Features: MCP integration • Code analysis • Documentation
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                <img src="/aki-ui-icon.png" alt="Aki UI" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Codeium</h3>
                <Badge variant="success" size="sm">Supported</Badge>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Free AI-powered code completion and chat assistant.
            </p>
            <div className="text-xs text-gray-500">
              Features: Autocomplete • Chat • Documentation search
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                <img src="/aki-ui-icon.png" alt="Aki UI" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Tabnine</h3>
                <Badge variant="success" size="sm">Supported</Badge>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              AI-powered code completion for multiple editors and IDEs.
            </p>
            <div className="text-xs text-gray-500">
              Features: Smart completion • Privacy-focused • Multi-language
            </div>
          </Card>
        </div>
      </section>

      {/* Integration Methods */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Integration Methods</h2>
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3" />
                </svg>
              </div>
              Model Context Protocol (MCP)
            </h3>
            <p className="text-gray-600 mb-3">
              The most advanced integration method, providing real-time access to components,
              documentation, and code generation capabilities.
            </p>
            <div className="flex items-center space-x-4">
              <Badge variant="success">Recommended</Badge>
              <Button size="sm" asChild>
                <Link href="/docs/mcp">Learn More</Link>
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              LLMs.txt Standard
            </h3>
            <p className="text-gray-600 mb-3">
              Structured documentation files that AI tools can automatically discover and use for context.
            </p>
            <div className="flex items-center space-x-4">
              <Badge variant="outline">Universal</Badge>
              <Button size="sm" variant="outline" asChild>
                <Link href="/docs/llm/setup">Setup Guide</Link>
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              Direct Documentation Sharing
            </h3>
            <p className="text-gray-600 mb-3">
              Manually share component documentation and examples with your AI assistant for context.
            </p>
            <div className="flex items-center space-x-4">
              <Badge variant="outline">Manual</Badge>
              <Button size="sm" variant="outline" asChild>
                <Link href="/docs/llm/examples">View Examples</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Quick Start */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
        <div className="bg-white p-6 border rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">For Advanced Integration (MCP)</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">1</span>
                  <span>Install MCP server</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">2</span>
                  <span>Configure AI assistant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">3</span>
                  <span>Start building with AI</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">For Quick Setup (LLMs.txt)</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs">1</span>
                  <span>Copy llms.txt URL</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs">2</span>
                  <span>Share with AI assistant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs">3</span>
                  <span>Ask for Aki UI help</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/docs/mcp/installation">MCP Setup</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs/llm/setup">LLMs.txt Setup</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs/llm/examples">View Examples</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Example Prompts */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Example AI Prompts</h2>
        <div className="bg-white p-6 border rounded-lg">
          <p className="mb-4">Try these prompts with your AI assistant after setting up integration:</p>

          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-800 mb-1">Component Generation</h4>
              <p className="text-sm text-blue-700">
                "Create a user profile card using Aki UI components with avatar, name, email, and action buttons"
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
              <h4 className="font-semibold text-green-800 mb-1">Form Creation</h4>
              <p className="text-sm text-green-700">
                "Build a contact form with Aki UI that includes validation, proper styling, and accessibility features"
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-800 mb-1">Layout Design</h4>
              <p className="text-sm text-purple-700">
                "Design a responsive dashboard layout using Aki UI's Grid and Stack components"
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-800 mb-1">Theming Help</h4>
              <p className="text-sm text-yellow-700">
                "Show me how to customize Aki UI theme colors and create a dark mode toggle"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
