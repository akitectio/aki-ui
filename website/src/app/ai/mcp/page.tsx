'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button, Card, Badge } from '@akitectio/aki-ui'
import { usePromptsData } from '@/hooks/usePromptsData'
import { Breadcrumb, useBreadcrumbs } from '@/components/Breadcrumb'
import { usePathname } from 'next/navigation'

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
            variant="secondary"
            onClick={handleCopy}
            className="mt-2"
        >
            {copied ? '✓ Copied' : `Copy ${label}`}
        </Button>
    )
}

export default function MCPIntegrationPage() {
    const promptsData = usePromptsData()
    const pathname = usePathname()
    const breadcrumbItems = useBreadcrumbs(pathname)
    return (
        <div className="space-y-8">
            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} className="mb-4 text-sm" />

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
                        <Badge className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Search Tools</Badge>
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
                        <Badge className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">AI Powered</Badge>
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
                        <Badge className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Live Docs</Badge>
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
                        <Badge className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Theming</Badge>
                    </Card>

                    <Card className="p-6">
                        <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold">Validation & Testing</h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">
                            Validate component usage, generate tests, and ensure accessibility compliance.
                        </p>
                        <Badge className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Quality</Badge>
                    </Card>

                    <Card className="p-6">
                        <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold">Performance Analysis</h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">
                            Analyze component performance, bundle size, and optimization opportunities.
                        </p>
                        <Badge className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Performance</Badge>
                    </Card>
                </div>
            </section>

            {/* Installation */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Installation</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">NPM Installation</h3>
                    <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm mb-4">
                        npm install @akitectio/aki-ui-mcp
                    </div>

                    <h3 className="text-lg font-semibold mb-3">Claude Desktop Configuration</h3>
                    <p className="text-gray-600 mb-3">
                        Add to your Claude Desktop configuration file:
                    </p>
                    <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
                        <pre>{`{
  "mcpServers": {
    "aki-ui": {
      "command": "npx",
      "args": ["@akitectio/aki-ui-mcp"]
    }
  }
}`}</pre>
                    </div>
                </div>
            </section>

            {/* Available Tools */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Available Tools</h2>
                <div className="space-y-4">
                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-2">🔍 Component Discovery</h3>
                            <p className="text-gray-600 text-sm mb-3">
                                Search and filter components by name, category, or functionality.
                            </p>
                            <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                                list_all_components(), search_components(query), get_component_details(name)
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-2">🛠️ Code Generation</h3>
                            <p className="text-gray-600 text-sm mb-3">
                                Generate components, forms, layouts, and complete projects.
                            </p>
                            <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                                generate_component(type, props), generate_form(schema), generate_layout(type)
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-2">🎨 Theme Management</h3>
                            <p className="text-gray-600 text-sm mb-3">
                                Create and customize themes, convert to CSS variables.
                            </p>
                            <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                                generate_theme(style, color), apply_theme_vars(config), get_theme()
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-2">🚀 Project Initialization</h3>
                            <p className="text-gray-600 text-sm mb-3">
                                Initialize complete React projects with Aki UI setup.
                            </p>
                            <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                                init_project(type, name, features), get_best_practices(topic)
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-2">✅ Validation & Testing</h3>
                            <p className="text-gray-600 text-sm mb-3">
                                Validate component usage and generate comprehensive tests.
                            </p>
                            <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                                validate_code(code), generate_tests(component), accessibility_audit(code)
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Usage Examples */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Usage Examples</h2>
                <div className="space-y-6">
                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-3">Component Discovery</h3>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm mb-2"><strong>User:</strong> "Show me all form components"</p>
                                <p className="text-sm mb-2"><strong>AI:</strong> "I'll search for form components using MCP..."</p>
                                <div className="bg-gray-900 text-green-400 p-3 rounded text-sm font-mono">
                                    search_components("form")
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-3">Component Generation</h3>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm mb-2"><strong>User:</strong> "Create a login form with validation"</p>
                                <p className="text-sm mb-2"><strong>AI:</strong> "I'll generate a login form with proper validation..."</p>
                                <div className="bg-gray-900 text-green-400 p-3 rounded text-sm font-mono">
                                    generate_form({"{ fields: [email, password], validation: true }"})
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-3">Theme Customization</h3>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm mb-2"><strong>User:</strong> "Create a dark theme with purple accent"</p>
                                <p className="text-sm mb-2"><strong>AI:</strong> "I'll create a custom dark theme..."</p>
                                <div className="bg-gray-900 text-green-400 p-3 rounded text-sm font-mono">
                                    generate_theme("dark", "#8B5CF6")
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-3">Project Initialization</h3>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm mb-2"><strong>User:</strong> "Initialize a Next.js project with Aki UI"</p>
                                <p className="text-sm mb-2"><strong>AI:</strong> "I'll set up a complete Next.js project..."</p>
                                <div className="bg-gray-900 text-green-400 p-3 rounded text-sm font-mono">
                                    init_project("next-js", "my-app", ["typescript", "tailwind"])
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Advanced Features */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Advanced Features</h2>
                <div className="space-y-4">
                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-3">🎯 Context-Aware Generation</h3>
                            <p className="text-gray-600 text-sm mb-3">
                                MCP provides context about your existing project, enabling smarter component suggestions and code generation.
                            </p>
                            <ul className="text-sm space-y-1">
                                <li>• Analyzes existing components to maintain consistency</li>
                                <li>• Suggests compatible components based on current usage</li>
                                <li>• Respects project structure and naming conventions</li>
                            </ul>
                        </div>
                    </Card>

                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-3">🔄 Real-time Updates</h3>
                            <p className="text-gray-600 text-sm mb-3">
                                Stay synchronized with the latest Aki UI updates and component changes.
                            </p>
                            <ul className="text-sm space-y-1">
                                <li>• Automatic component metadata synchronization</li>
                                <li>• Latest API changes and deprecation notices</li>
                                <li>• New component announcements and features</li>
                            </ul>
                        </div>
                    </Card>

                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-3">🎨 Design System Integration</h3>
                            <p className="text-gray-600 text-sm mb-3">
                                Seamlessly integrate with your design system and maintain consistency.
                            </p>
                            <ul className="text-sm space-y-1">
                                <li>• Custom theme generation and management</li>
                                <li>• Design token extraction and conversion</li>
                                <li>• Brand color palette integration</li>
                            </ul>
                        </div>
                    </Card>
                </div>
            </section>

            {/* MCP Prompt Library */}
            <section>
                <h2 className="text-2xl font-bold mb-4">MCP Prompt Library</h2>
                <p className="text-gray-600 mb-4">
                    Optimized prompts for MCP-powered AI assistants working with Aki UI.
                </p>

                {!promptsData ? (
                    <div className="flex items-center justify-center min-h-[200px]">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6">
                        {promptsData.prompts
                            .filter(prompt => prompt.mcpOptimized)
                            .map((prompt) => (
                                <Card key={prompt.id} className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <h3 className="text-lg font-semibold">{prompt.title}</h3>
                                                <Badge className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                                                    MCP Optimized
                                                </Badge>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-3">{prompt.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {prompt.tags.map((tag, index) => (
                                                    <Badge key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-semibold mb-2">Prompt:</h4>
                                        <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
                                            {prompt.prompt}
                                        </pre>
                                        <CopyButton text={prompt.prompt} label="Prompt" />
                                    </div>
                                </Card>
                            ))}
                    </div>
                )}
            </section>

            {/* Troubleshooting */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
                <div className="space-y-4">
                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-3">Common Issues</h3>
                            <div className="space-y-3">
                                <div className="border-l-4 border-yellow-400 pl-4">
                                    <h4 className="font-semibold text-sm">MCP Server Not Found</h4>
                                    <p className="text-sm text-gray-600">
                                        Ensure the package is installed globally or use npx for local installation.
                                    </p>
                                </div>
                                <div className="border-l-4 border-blue-400 pl-4">
                                    <h4 className="font-semibold text-sm">Claude Desktop Connection</h4>
                                    <p className="text-sm text-gray-600">
                                        Restart Claude Desktop after updating the configuration file.
                                    </p>
                                </div>
                                <div className="border-l-4 border-green-400 pl-4">
                                    <h4 className="font-semibold text-sm">Tool Not Available</h4>
                                    <p className="text-sm text-gray-600">
                                        Check if the MCP server is running and properly configured.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Related Resources */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-2">📚 LLM Integration</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Learn about direct LLM integration without MCP.
                            </p>
                            <Link href="/ai/llm">
                                <Button variant="secondary" size="sm">
                                    View Guide
                                </Button>
                            </Link>
                        </div>
                    </Card>

                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-2">📝 Prompt Library</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Explore our comprehensive prompt collection.
                            </p>
                            <Link href="/ai/prompts">
                                <Button variant="secondary" size="sm">
                                    Browse Prompts
                                </Button>
                            </Link>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    )
}
