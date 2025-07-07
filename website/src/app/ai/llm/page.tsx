'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button, Card, Badge, Alert } from '@akitectio/aki-ui'
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
            className="ml-2"
        >
            {copied ? '✓ Copied' : `Copy ${label}`}
        </Button>
    )
}

export default function LLMIntegrationPage() {
    const [mounted, setMounted] = useState(false)
    const [baseUrl, setBaseUrl] = useState('https://aki-ui.akitect.io')
    const pathname = usePathname()
    const breadcrumbItems = useBreadcrumbs(pathname)

    useEffect(() => {
        setMounted(true)
        setBaseUrl(window.location.origin)
    }, [])

    const llmsUrl = `${baseUrl}/llms.txt`
    const llmsFullUrl = `${baseUrl}/llms-full.txt`

    return (
        <div className="space-y-8">
            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} className="mb-4 text-sm" />

            <div>
                <h1 className="text-4xl font-bold mb-4">LLM Integration</h1>
                <p className="text-lg text-gray-600 mb-6">
                    Seamlessly integrate Aki UI with Large Language Models and AI-powered development tools.
                </p>

                <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-700 rounded">
                    <strong>Direct Documentation Access:</strong> Point your LLM to our documentation endpoints for real-time component information.
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                            <span>📚</span>
                            Basic Component Library
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Essential component documentation for quick reference and basic usage.
                        </p>
                        <div className="flex items-center text-sm font-mono bg-gray-100 p-2 rounded">
                            <span className="flex-1 truncate">{llmsUrl}</span>
                            {mounted && <CopyButton text={llmsUrl} label="URL" />}
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                            <span>🚀</span>
                            Complete Documentation
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Comprehensive documentation including advanced features, examples, and best practices.
                        </p>
                        <div className="flex items-center text-sm font-mono bg-gray-100 p-2 rounded">
                            <span className="flex-1 truncate">{llmsFullUrl}</span>
                            {mounted && <CopyButton text={llmsFullUrl} label="URL" />}
                        </div>
                    </div>
                </Card>
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl font-bold">Supported AI Tools</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">🤖</span>
                            <div>
                                <h3 className="font-semibold">Claude</h3>
                                <Badge className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Anthropic</Badge>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600">
                            Excellent for complex component design and architecture discussions.
                        </p>
                    </Card>

                    <Card className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">⚡</span>
                            <div>
                                <h3 className="font-semibold">GPT-4</h3>
                                <Badge className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">OpenAI</Badge>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600">
                            Great for code generation and component customization.
                        </p>
                    </Card>

                    <Card className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">🔮</span>
                            <div>
                                <h3 className="font-semibold">GitHub Copilot</h3>
                                <Badge className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">GitHub</Badge>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600">
                            Perfect for inline code suggestions and autocomplete.
                        </p>
                    </Card>

                    <Card className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">🎯</span>
                            <div>
                                <h3 className="font-semibold">Cursor</h3>
                                <Badge className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Cursor</Badge>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600">
                            Excellent for refactoring and code optimization.
                        </p>
                    </Card>

                    <Card className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">💎</span>
                            <div>
                                <h3 className="font-semibold">Gemini</h3>
                                <Badge className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Google</Badge>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600">
                            Great for understanding component patterns and best practices.
                        </p>
                    </Card>

                    <Card className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">🌊</span>
                            <div>
                                <h3 className="font-semibold">Perplexity</h3>
                                <Badge className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Perplexity</Badge>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600">
                            Excellent for research and finding the right components.
                        </p>
                    </Card>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl font-bold">Integration Examples</h2>

                <div className="space-y-4">
                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-4">Basic Component Request</h3>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm mb-2"><strong>User:</strong></p>
                                <p className="text-sm text-gray-700 mb-4">
                                    "I need a login form using Aki UI components with email validation"
                                </p>
                                <p className="text-sm mb-2"><strong>LLM Response:</strong></p>
                                <div className="bg-gray-800 text-green-400 p-3 rounded text-sm font-mono">
                                    <p>Based on Aki UI documentation, here's a login form:</p>
                                    <p className="mt-2 text-gray-300">
                                        import {`{ Input, Button, Card }`} from '@akitectio/aki-ui'
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-4">Advanced Component Customization</h3>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm mb-2"><strong>User:</strong></p>
                                <p className="text-sm text-gray-700 mb-4">
                                    "Create a data table with sorting, filtering, and export functionality"
                                </p>
                                <p className="text-sm mb-2"><strong>LLM Response:</strong></p>
                                <div className="bg-gray-800 text-green-400 p-3 rounded text-sm font-mono">
                                    <p>I'll create an advanced DataTable with all requested features:</p>
                                    <p className="mt-2 text-gray-300">
                                        import {`{ DataTable, Button, Input }`} from '@akitectio/aki-ui'
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl font-bold">Comprehensive Prompt Library</h2>
                <p className="text-gray-600 mb-4">
                    Ready-to-use prompts for common development scenarios with Aki UI.
                </p>

                <div className="space-y-4">
                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-4">🏗️ Component Architecture</h3>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm font-mono mb-2">
                                    "I'm building a React application with Aki UI. Help me create a [COMPONENT_TYPE] that includes [FEATURES].
                                    Use Aki UI components and follow React best practices. Make it TypeScript-ready, accessible, and responsive."
                                </p>
                                {mounted && (
                                    <CopyButton
                                        text="I'm building a React application with Aki UI. Help me create a [COMPONENT_TYPE] that includes [FEATURES]. Use Aki UI components and follow React best practices. Make it TypeScript-ready, accessible, and responsive."
                                        label="Prompt"
                                    />
                                )}
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-4">🎨 Design System Integration</h3>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm font-mono mb-2">
                                    "Using Aki UI's design system, help me create a consistent [PAGE_TYPE] page. Include proper spacing, colors, and typography.
                                    Ensure it works well with both light and dark themes."
                                </p>
                                {mounted && (
                                    <CopyButton
                                        text="Using Aki UI's design system, help me create a consistent [PAGE_TYPE] page. Include proper spacing, colors, and typography. Ensure it works well with both light and dark themes."
                                        label="Prompt"
                                    />
                                )}
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-4">🔧 Component Customization</h3>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm font-mono mb-2">
                                    "I need to customize the [COMPONENT_NAME] component from Aki UI. Help me extend it with [CUSTOM_FEATURES]
                                    while maintaining the original design consistency and accessibility features."
                                </p>
                                {mounted && (
                                    <CopyButton
                                        text="I need to customize the [COMPONENT_NAME] component from Aki UI. Help me extend it with [CUSTOM_FEATURES] while maintaining the original design consistency and accessibility features."
                                        label="Prompt"
                                    />
                                )}
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-4">🚀 Performance Optimization</h3>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm font-mono mb-2">
                                    "Review my Aki UI implementation for [FEATURE_DESCRIPTION]. Optimize for performance, bundle size, and runtime efficiency.
                                    Suggest any better patterns or components that could improve the user experience."
                                </p>
                                {mounted && (
                                    <CopyButton
                                        text="Review my Aki UI implementation for [FEATURE_DESCRIPTION]. Optimize for performance, bundle size, and runtime efficiency. Suggest any better patterns or components that could improve the user experience."
                                        label="Prompt"
                                    />
                                )}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl font-bold">Best Practices</h2>

                <div className="space-y-4">
                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-4">📖 Documentation Reference</h3>
                            <ul className="space-y-2 text-sm">
                                <li>• Always reference the latest component documentation</li>
                                <li>• Use the /llms.txt endpoint for quick component lookup</li>
                                <li>• Include TypeScript types in your requests</li>
                                <li>• Specify responsive behavior requirements</li>
                            </ul>
                        </div>
                    </Card>

                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-4">🎯 Prompt Engineering</h3>
                            <ul className="space-y-2 text-sm">
                                <li>• Be specific about the component features you need</li>
                                <li>• Include context about your application type</li>
                                <li>• Mention accessibility requirements upfront</li>
                                <li>• Request code examples with proper imports</li>
                            </ul>
                        </div>
                    </Card>

                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-4">⚡ Performance Tips</h3>
                            <ul className="space-y-2 text-sm">
                                <li>• Use tree-shaking with named imports</li>
                                <li>• Request lazy loading for heavy components</li>
                                <li>• Ask for bundle size optimization suggestions</li>
                                <li>• Include performance requirements in prompts</li>
                            </ul>
                        </div>
                    </Card>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl font-bold">Related Resources</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-2">🔧 MCP Integration</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Model Context Protocol for enhanced AI development workflows.
                            </p>
                            <Link href="/ai/mcp">
                                <Button variant="secondary" size="sm">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </Card>

                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-2">📝 Prompt Library</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Collection of specialized prompts for different use cases.
                            </p>
                            <Link href="/ai/prompts">
                                <Button variant="secondary" size="sm">
                                    Browse Prompts
                                </Button>
                            </Link>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
