'use client'

import React from 'react'
import Link from 'next/link'
import { Button, Card, Badge } from '@akitectio/aki-ui'

export default function MCPOverviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">MCP Integration</h1>
        <p className="text-lg text-gray-600 mb-6">
          Model Context Protocol server for seamless AI assistant integration with Aki UI components.
        </p>
      </div>

      {/* What is MCP */}
      <section>
        <h2 className="text-2xl font-bold mb-4">What is MCP?</h2>
        <div className="bg-white p-6 border rounded-lg">
          <p className="mb-4">
            The <strong>Model Context Protocol (MCP)</strong> is an open standard that enables AI assistants
            to securely access external tools and data sources. Aki UI's MCP server provides real-time access
            to component documentation, code generation, and project initialization capabilities.
          </p>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2 text-blue-800">🎯 Key Benefits:</h4>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• Real-time component discovery and documentation</li>
              <li>• Intelligent code generation with context awareness</li>
              <li>• Complete project initialization with best practices</li>
              <li>• Theme management and customization assistance</li>
              <li>• Performance and accessibility optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Component Discovery</h3>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Search and discover Aki UI components by name, category, or description with intelligent filtering.
            </p>
            <Badge variant="secondary">Search Tools</Badge>
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Code Generation</h3>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Generate React components, forms, dashboards, and complete project templates with best practices.
            </p>
            <Badge variant="secondary">AI Powered</Badge>
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Documentation Access</h3>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Real-time access to component docs, API references, examples, and best practices.
            </p>
            <Badge variant="secondary">Live Docs</Badge>
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Theme Management</h3>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Generate and customize themes, convert to CSS variables, and manage design tokens.
            </p>
            <Badge variant="secondary">Theming</Badge>
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Code Validation</h3>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Validate React components for best practices, accessibility, and performance optimization.
            </p>
            <Badge variant="secondary">Quality</Badge>
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Project Initialization</h3>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Initialize complete React projects with Vite, Next.js, TypeScript, and Aki UI pre-configured.
            </p>
            <Badge variant="secondary">Scaffolding</Badge>
          </Card>
        </div>
      </section>

      {/* Supported AI Tools */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Supported AI Tools</h2>
        <div className="bg-white p-6 border rounded-lg">
          <p className="mb-4">
            Aki UI MCP server works with any MCP-compatible AI assistant:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <Badge variant="success">✓</Badge>
              <span className="text-sm">Claude (Anthropic)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="success">✓</Badge>
              <span className="text-sm">GitHub Copilot</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="success">✓</Badge>
              <span className="text-sm">Cursor IDE</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="success">✓</Badge>
              <span className="text-sm">Windsurf</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="success">✓</Badge>
              <span className="text-sm">Continue.dev</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="success">✓</Badge>
              <span className="text-sm">Codeium</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="warning">Soon</Badge>
              <span className="text-sm">ChatGPT</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="warning">Soon</Badge>
              <span className="text-sm">Copilot Chat</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
        <div className="bg-white p-6 border rounded-lg">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">1</div>
              <div>
                <h4 className="font-semibold mb-1">Install the MCP Server</h4>
                <pre className="bg-gray-100 p-2 rounded text-sm">npm install -g @akitectio/aki-ui-mcp-server</pre>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">2</div>
              <div>
                <h4 className="font-semibold mb-1">Configure Your AI Assistant</h4>
                <p className="text-sm text-gray-600">Add the MCP server to your AI assistant configuration</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">3</div>
              <div>
                <h4 className="font-semibold mb-1">Start Building</h4>
                <p className="text-sm text-gray-600">Ask your AI assistant to help with Aki UI components and projects</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            <Button asChild>
              <Link href="/docs/mcp/installation">Installation Guide</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs/mcp/usage">Usage Examples</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Example Usage */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Example Prompts</h2>
        <div className="bg-white p-6 border rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Ask your AI assistant:</h3>

          {/* Component Discovery */}
          <div className="mb-6">
            <h4 className="font-medium mb-3 text-blue-600">🔍 Component Discovery</h4>
            <div className="space-y-2">
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <p className="text-sm">"Show me all Aki UI form components with their props and examples"</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <p className="text-sm">"Find components for data display and tables in Aki UI"</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <p className="text-sm">"List all navigation components with usage examples"</p>
              </div>
            </div>
          </div>

          {/* Code Generation */}
          <div className="mb-6">
            <h4 className="font-medium mb-3 text-green-600">⚡ Code Generation</h4>
            <div className="space-y-2">
              <div className="bg-gray-50 p-3 rounded border-l-4 border-green-500">
                <p className="text-sm">"Create a contact form using Aki UI components with validation and error handling"</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-green-500">
                <p className="text-sm">"Generate a dashboard layout with sidebar navigation and data cards"</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-green-500">
                <p className="text-sm">"Build a responsive pricing table with 3 tiers using Aki UI components"</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-green-500">
                <p className="text-sm">"Create an e-commerce product grid with search and filtering"</p>
              </div>
            </div>
          </div>

          {/* Project Setup */}
          <div className="mb-6">
            <h4 className="font-medium mb-3 text-purple-600">🚀 Project Setup</h4>
            <div className="space-y-2">
              <div className="bg-gray-50 p-3 rounded border-l-4 border-purple-500">
                <p className="text-sm">"Initialize a new Next.js project with Aki UI, TypeScript, and dark mode support"</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-purple-500">
                <p className="text-sm">"Set up a Vite React project with Aki UI and Tailwind CSS"</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-purple-500">
                <p className="text-sm">"Create a portfolio website template using Aki UI components"</p>
              </div>
            </div>
          </div>

          {/* Theme & Styling */}
          <div className="mb-6">
            <h4 className="font-medium mb-3 text-yellow-600">🎨 Theme & Styling</h4>
            <div className="space-y-2">
              <div className="bg-gray-50 p-3 rounded border-l-4 border-yellow-500">
                <p className="text-sm">"Generate a custom theme with blue primary color and modern style"</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-yellow-500">
                <p className="text-sm">"Create CSS variables for a dark theme with purple accents"</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-yellow-500">
                <p className="text-sm">"Convert my design tokens to Aki UI theme configuration"</p>
              </div>
            </div>
          </div>

          {/* Forms & Validation */}
          <div className="mb-6">
            <h4 className="font-medium mb-3 text-red-600">📝 Forms & Validation</h4>
            <div className="space-y-2">
              <div className="bg-gray-50 p-3 rounded border-l-4 border-red-500">
                <p className="text-sm">"Create a registration form with email validation and password confirmation"</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-red-500">
                <p className="text-sm">"Build a multi-step form with progress indicator using Aki UI"</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-red-500">
                <p className="text-sm">"Generate form validation schema for user profile update"</p>
              </div>
            </div>
          </div>

          {/* Data Display */}
          <div className="mb-6">
            <h4 className="font-medium mb-3 text-indigo-600">📊 Data Display</h4>
            <div className="space-y-2">
              <div className="bg-gray-50 p-3 rounded border-l-4 border-indigo-500">
                <p className="text-sm">"Create a data table with sorting, filtering, and pagination"</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-indigo-500">
                <p className="text-sm">"Build a dashboard with analytics cards and charts"</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-indigo-500">
                <p className="text-sm">"Generate a user list with avatars, badges, and action buttons"</p>
              </div>
            </div>
          </div>

          {/* Advanced Features */}
          <div className="mb-6">
            <h4 className="font-medium mb-3 text-teal-600">🔧 Advanced Features</h4>
            <div className="space-y-2">
              <div className="bg-gray-50 p-3 rounded border-l-4 border-teal-500">
                <p className="text-sm">"Optimize my Aki UI components for better performance and accessibility"</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-teal-500">
                <p className="text-sm">"Generate TypeScript interfaces for my component props"</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-teal-500">
                <p className="text-sm">"Create responsive design breakpoints for mobile and desktop"</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-teal-500">
                <p className="text-sm">"Add keyboard navigation and ARIA attributes to my components"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Architecture</h2>
        <div className="bg-white p-6 border rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">AI Assistant</h4>
              <p className="text-sm text-gray-600">Your preferred AI tool (Claude, Copilot, etc.)</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">MCP Server</h4>
              <p className="text-sm text-gray-600">Aki UI MCP server providing tools and data</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Aki UI Library</h4>
              <p className="text-sm text-gray-600">Component library with documentation and tools</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
