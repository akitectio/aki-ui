'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button, Card, Badge, Alert } from '@akitectio/aki-ui'

const CopyButton = ({ text, label }: { text: string; label: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
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
