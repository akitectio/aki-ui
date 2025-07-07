'use client'

import React, { useState, useEffect } from 'react'
import { Card, Badge, Button } from '@akitectio/aki-ui'
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

export default function PromptsLibraryPage() {
    const promptsData = usePromptsData()
    const [activeCategory, setActiveCategory] = useState('all')
    const pathname = usePathname()
    const breadcrumbItems = useBreadcrumbs(pathname)

    if (!promptsData) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
        )
    }

    const { categories, prompts } = promptsData

    const filteredPrompts = prompts.filter(prompt => {
        // Filter by category
        const matchesCategory = activeCategory === 'all' || prompt.category === activeCategory
        return matchesCategory
    })

    return (
        <div className="space-y-8">
            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} className="mb-4 text-sm" aria-label="Page navigation" />

            <section>
                <h1 className="text-4xl font-bold mb-4">Prompt Library</h1>
                <p className="text-lg text-gray-600 mb-6">
                    A collection of optimized prompts for AI-assisted development with Aki UI components.
                    These prompts help you build better interfaces faster with AI assistance.
                </p>
                <meta name="description" content="Browse our comprehensive collection of AI prompts optimized for UI development with Aki UI components. Find prompts for component creation, form generation, layouts, and MCP integration." />
            </section>

            {/* Category Filter */}
            <section aria-labelledby="category-heading">
                <h2 id="category-heading" className="sr-only">Prompt Categories</h2>
                <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {categories.map((category) => (
                            <Button
                                key={category.id}
                                variant={activeCategory === category.id ? "primary" : "secondary"}
                                size="sm"
                                onClick={() => setActiveCategory(category.id)}
                                aria-pressed={activeCategory === category.id}
                            >
                                {category.name}
                            </Button>
                        ))}
                    </div>

                    <p className="text-sm text-gray-600">
                        {categories.find(c => c.id === activeCategory)?.description}
                    </p>
                </div>
            </section>

            {/* Stats */}
            <div className="mb-6" aria-live="polite">
                <p className="text-sm text-gray-600">
                    Showing {filteredPrompts.length} prompt{filteredPrompts.length !== 1 ? 's' : ''} in {activeCategory === 'all' ? 'all categories' : `the "${categories.find(c => c.id === activeCategory)?.name}" category`}
                </p>
            </div>

            {/* Prompts Grid */}
            <section aria-labelledby="prompts-heading">
                <h2 id="prompts-heading" className="sr-only">Available Prompts</h2>
                <div className="space-y-6">
                    {filteredPrompts.length === 0 ? (
                        <div className="text-center py-12">
                            <h3 className="text-lg font-medium">No prompts found</h3>
                            <p className="text-gray-500">Try selecting a different category</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredPrompts.map((prompt) => (
                                <Card key={prompt.id} className="p-6 flex flex-col h-full">
                                    <div className="flex flex-col flex-grow">
                                        <div className="mb-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h3 className="text-lg font-semibold" id={`prompt-${prompt.id}-title`}>{prompt.title}</h3>
                                                {prompt.mcpOptimized && (
                                                    <Badge className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                                                        MCP Optimized
                                                    </Badge>
                                                )}
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

                                        <div className="bg-gray-50 p-4 rounded-lg mt-auto">
                                            <h4 className="font-semibold mb-2" id={`prompt-${prompt.id}-content`}>Prompt:</h4>
                                            <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono max-h-[150px] overflow-y-auto" aria-labelledby={`prompt-${prompt.id}-content`}>
                                                {prompt.prompt}
                                            </pre>
                                            <CopyButton text={prompt.prompt} label="Prompt" />
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Usage Guidelines */}
            <section aria-labelledby="guidelines-heading" className="mt-12">
                <h2 id="guidelines-heading" className="text-2xl font-bold mb-4">Usage Guidelines</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="p-4">
                        <h3 className="font-semibold mb-2">🎯 Be Specific</h3>
                        <p className="text-sm text-gray-600">
                            Replace placeholder variables like [COMPONENT_TYPE] with specific values
                            to get more targeted and accurate responses.
                        </p>
                    </Card>

                    <Card className="p-4">
                        <h3 className="font-semibold mb-2">🧩 Mix & Match</h3>
                        <p className="text-sm text-gray-600">
                            Combine elements from different prompts to create the perfect prompt
                            for your specific development needs.
                        </p>
                    </Card>

                    <Card className="p-4">
                        <h3 className="font-semibold mb-2">📋 Include Context</h3>
                        <p className="text-sm text-gray-600">
                            Add relevant details about your project's requirements, constraints,
                            and target audience for better results.
                        </p>
                    </Card>
                </div>
            </section>

            {/* Related Resources */}
            <section aria-labelledby="resources-heading" className="mt-12">
                <h2 id="resources-heading" className="text-2xl font-bold mb-4">Related Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-2">📚 LLM Integration</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Learn about direct LLM integration with Aki UI.
                            </p>
                            <Button variant="secondary" size="sm" asChild>
                                <a href="/ai/llm">View Guide</a>
                            </Button>
                        </div>
                    </Card>

                    <Card>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-2">🛠️ MCP Integration</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Discover how to use Model Context Protocol with Aki UI.
                            </p>
                            <Button variant="secondary" size="sm" asChild>
                                <a href="/ai/mcp">Learn More</a>
                            </Button>
                        </div>
                    </Card>
                </div>
            </section>

            {/* FAQ Section */}
            <section aria-labelledby="faq-heading" className="mt-12">
                <h2 id="faq-heading" className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <Card className="p-4">
                        <h3 className="font-semibold mb-2">What is the Aki UI Prompt Library?</h3>
                        <p className="text-sm text-gray-600">
                            The Aki UI Prompt Library is a collection of optimized prompts for AI-assisted development with Aki UI components.
                            These prompts help developers create, customize, and optimize UI components using AI tools.
                        </p>
                    </Card>

                    <Card className="p-4">
                        <h3 className="font-semibold mb-2">How do I use the prompts in this library?</h3>
                        <p className="text-sm text-gray-600">
                            Copy the prompt you need, replace any placeholder variables (like [COMPONENT_TYPE]) with specific values,
                            and then paste it into your AI assistant or LLM tool. These prompts are designed to work with both general LLMs and MCP-optimized AI assistants.
                        </p>
                    </Card>

                    <Card className="p-4">
                        <h3 className="font-semibold mb-2">What are MCP-optimized prompts?</h3>
                        <p className="text-sm text-gray-600">
                            MCP (Model Context Protocol) optimized prompts are specially designed to work with AI assistants that support the Model Context Protocol.
                            These prompts can directly invoke MCP tools to generate components, validate code, create themes, and more.
                        </p>
                    </Card>

                    <Card className="p-4">
                        <h3 className="font-semibold mb-2">Can I customize these prompts for my own projects?</h3>
                        <p className="text-sm text-gray-600">
                            Yes! We encourage you to customize these prompts by combining elements from different prompts
                            and adding your own project-specific details to get the most accurate and helpful responses from AI assistants.
                        </p>
                    </Card>

                    <Card className="p-4">
                        <h3 className="font-semibold mb-2">How often is the Prompt Library updated?</h3>
                        <p className="text-sm text-gray-600">
                            The Prompt Library is regularly updated with new prompts as we add features to Aki UI and discover more effective ways to use AI for component development.
                            Check back frequently for new additions.
                        </p>
                    </Card>
                </div>
            </section>

            {/* SEO Footer with Sitemap Link */}
            <div className="mt-12 text-center text-xs text-gray-500">
                <p>Last updated: July 2025 - <a href="/sitemap.xml" className="underline hover:text-gray-700">Sitemap</a></p>
            </div>
        </div>
    )
}
