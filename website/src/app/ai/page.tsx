'use client'

import React from 'react'
import Link from 'next/link'
import { Button, Card, Badge } from '@akitectio/aki-ui'
import { Breadcrumb, useBreadcrumbs } from '@/components/Breadcrumb'
import { usePathname } from 'next/navigation'

export default function AIOverviewPage() {
    const pathname = usePathname()
    const breadcrumbItems = useBreadcrumbs(pathname)

    return (
        <div className="space-y-8">
            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} className="mb-4 text-sm" />

            <div>
                <h1 className="text-4xl font-bold mb-4">AI Integration Hub</h1>
                <p className="text-lg text-gray-600 mb-6">
                    Supercharge your development with AI-powered tools and integrations for Aki UI components.
                </p>
            </div>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Build Faster with AI
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Leverage the power of AI assistants to generate components, build applications, and accelerate your development workflow with Aki UI.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/ai/prompts">
                            <Button size="lg">Explore Prompts</Button>
                        </Link>
                        <Link href="/ai/mcp">
                            <Button variant="secondary" size="lg">MCP Integration</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* AI Integration Options */}
            <section>
                <h2 className="text-2xl font-bold mb-6">Choose Your AI Integration</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* MCP Integration */}
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">MCP Integration</h3>
                                <Badge className="mt-1 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Recommended</Badge>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Advanced real-time integration with Claude and other MCP-compatible AI assistants. Full access to components, documentation, and code generation.
                        </p>
                        <div className="space-y-2 mb-4">
                            <div className="flex items-center text-sm text-green-600">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Real-time component access
                            </div>
                            <div className="flex items-center text-sm text-green-600">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Intelligent code generation
                            </div>
                            <div className="flex items-center text-sm text-green-600">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Project scaffolding
                            </div>
                        </div>
                        <Link href="/ai/mcp">
                            <Button className="w-full">Setup MCP</Button>
                        </Link>
                    </Card>

                    {/* LLM Integration */}
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">LLM Integration</h3>
                                <Badge className="mt-1 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Universal</Badge>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Universal integration using llms.txt standard. Works with any AI assistant including GitHub Copilot, Cursor, and more.
                        </p>
                        <div className="space-y-2 mb-4">
                            <div className="flex items-center text-sm text-green-600">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Works with any AI tool
                            </div>
                            <div className="flex items-center text-sm text-green-600">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Structured documentation
                            </div>
                            <div className="flex items-center text-sm text-green-600">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Easy setup
                            </div>
                        </div>
                        <Link href="/ai/llm">
                            <Button variant="secondary" className="w-full">Setup LLM</Button>
                        </Link>
                    </Card>

                    {/* Prompt Library */}
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Prompt Library</h3>
                                <Badge className="mt-1 bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">50+ Prompts</Badge>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Comprehensive collection of ready-to-use prompts for every development scenario with Aki UI components.
                        </p>
                        <div className="space-y-2 mb-4">
                            <div className="flex items-center text-sm text-green-600">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Categorized by use case
                            </div>
                            <div className="flex items-center text-sm text-green-600">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Copy-paste ready
                            </div>
                            <div className="flex items-center text-sm text-green-600">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Beginner to expert
                            </div>
                        </div>
                        <Link href="/ai/prompts">
                            <Button variant="secondary" className="w-full">Browse Prompts</Button>
                        </Link>
                    </Card>
                </div>
            </section>

            {/* Supported AI Tools */}
            <section>
                <h2 className="text-2xl font-bold mb-6">Supported AI Tools</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {[
                        { name: 'Claude', status: 'MCP', color: 'bg-orange-100 text-orange-600' },
                        { name: 'GitHub Copilot', status: 'LLM', color: 'bg-blue-100 text-blue-600' },
                        { name: 'Cursor', status: 'LLM', color: 'bg-purple-100 text-purple-600' },
                        { name: 'Windsurf', status: 'LLM', color: 'bg-teal-100 text-teal-600' },
                        { name: 'Codeium', status: 'LLM', color: 'bg-green-100 text-green-600' },
                        { name: 'Continue.dev', status: 'LLM', color: 'bg-indigo-100 text-indigo-600' },
                    ].map((tool) => (
                        <Card key={tool.name} className="p-4 text-center hover:shadow-md transition-shadow">
                            <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h4 className="font-medium text-sm">{tool.name}</h4>
                            <Badge className="text-xs mt-1 bg-gray-100 text-gray-700 px-2 py-1 rounded">{tool.status}</Badge>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Quick Start */}
            <section className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Quick Start Guide</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                        <h3 className="font-semibold mb-2">Choose Integration</h3>
                        <p className="text-sm text-gray-600">Select MCP for advanced features or LLM for universal compatibility</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                        <h3 className="font-semibold mb-2">Configure AI Tool</h3>
                        <p className="text-sm text-gray-600">Follow our setup guides for your preferred AI assistant</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                        <h3 className="font-semibold mb-2">Start Building</h3>
                        <p className="text-sm text-gray-600">Use our prompts to generate components and build applications</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
