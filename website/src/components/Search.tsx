'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

interface SearchResult {
    title: string
    href: string
    description: string
    category: string
}

// Mock search data - in a real app, this would come from an API or search index
const searchData: SearchResult[] = [
    // Components
    { title: 'Button', href: '/docs/components/button', description: 'Interactive button component with variants', category: 'Components' },
    { title: 'Card', href: '/docs/components/card', description: 'Flexible content container', category: 'Components' },
    { title: 'Input', href: '/docs/components/input', description: 'Form input field with validation', category: 'Components' },
    { title: 'Badge', href: '/docs/components/badge', description: 'Small status indicator', category: 'Components' },
    { title: 'Avatar', href: '/docs/components/avatar', description: 'User profile image component', category: 'Components' },
    { title: 'Alert', href: '/docs/components/alert', description: 'Contextual feedback messages', category: 'Components' },
    { title: 'Modal', href: '/docs/components/modal', description: 'Overlay dialog component', category: 'Components' },
    { title: 'Toast', href: '/docs/components/toast', description: 'Temporary notification messages', category: 'Components' },

    // Documentation
    { title: 'Introduction', href: '/docs/introduction', description: 'Getting started with Aki UI', category: 'Documentation' },
    { title: 'Installation', href: '/docs/installation', description: 'How to install Aki UI', category: 'Documentation' },
    { title: 'Theming', href: '/docs/theming', description: 'Customize component appearance', category: 'Documentation' },

    // AI Integration
    { title: 'LLM Support', href: '/docs/llm', description: 'Large Language Model integration', category: 'AI Integration' },
    { title: 'MCP Protocol', href: '/docs/mcp', description: 'Model Context Protocol support', category: 'AI Integration' },
    { title: 'AI Tools', href: '/docs/llm/ai-tools', description: 'AI-powered development tools', category: 'AI Integration' },
]

export function Search() {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<SearchResult[]>([])
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const searchRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    // Filter results based on query
    useEffect(() => {
        if (query.trim() === '') {
            setResults([])
            setSelectedIndex(-1)
            return
        }

        const filtered = searchData.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        )

        setResults(filtered.slice(0, 8)) // Show max 8 results
        setSelectedIndex(-1)
    }, [query])

    // Handle keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Open search with Cmd/Ctrl + K
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault()
                setIsOpen(true)
                setTimeout(() => inputRef.current?.focus(), 100)
            }

            // Close search with Escape
            if (e.key === 'Escape') {
                setIsOpen(false)
                setQuery('')
            }

            // Navigate results with arrow keys
            if (isOpen && results.length > 0) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault()
                    setSelectedIndex(prev => (prev + 1) % results.length)
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault()
                    setSelectedIndex(prev => prev <= 0 ? results.length - 1 : prev - 1)
                } else if (e.key === 'Enter' && selectedIndex >= 0) {
                    e.preventDefault()
                    window.location.href = results[selectedIndex].href
                }
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, results, selectedIndex])

    // Close search when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
            return () => document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    const handleResultClick = (href: string) => {
        setIsOpen(false)
        setQuery('')
    }

    return (
        <>
            {/* Search Button */}
            <button
                onClick={() => {
                    setIsOpen(true)
                    setTimeout(() => inputRef.current?.focus(), 100)
                }}
                className="relative w-full md:w-64 flex items-center justify-start px-4 py-2.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
                <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="flex-1 text-left">Search documentation...</span>
                <div className="ml-auto flex items-center space-x-1">
                    <span className="hidden sm:block text-xs text-gray-400">⌘K</span>
                </div>
            </button>

            {/* Search Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={() => setIsOpen(false)} />

                    <div
                        ref={searchRef}
                        className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-2xl transition-all border border-gray-200 dark:border-gray-800 z-[10000]"
                    >
                        {/* Search Input */}
                        <div className="relative border-b border-gray-200 dark:border-gray-800">
                            <svg className="absolute left-6 top-6 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search documentation..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full border-0 bg-transparent py-6 pl-16 pr-6 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-0 text-lg"
                            />
                            <div className="absolute right-6 top-6 flex items-center space-x-2">
                                <span className="text-sm text-gray-400">Press</span>
                                <kbd className="inline-flex h-6 select-none items-center gap-1 rounded border bg-gray-100 px-2 font-mono text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700">
                                    ESC
                                </kbd>
                                <span className="text-sm text-gray-400">to close</span>
                            </div>
                        </div>

                        {/* Search Results */}
                        {query && (
                            <div className="max-h-96 overflow-y-auto">
                                {results.length > 0 ? (
                                    <div className="p-2">
                                        {/* Group results by category */}
                                        {['Components', 'Documentation', 'AI Integration'].map(category => {
                                            const categoryResults = results.filter(r => r.category === category)
                                            if (categoryResults.length === 0) return null

                                            return (
                                                <div key={category} className="mb-4 last:mb-0">
                                                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                                        {category}
                                                    </div>
                                                    <div className="space-y-1">
                                                        {categoryResults.map((result, index) => {
                                                            const globalIndex = results.indexOf(result)
                                                            return (
                                                                <Link
                                                                    key={result.href}
                                                                    href={result.href}
                                                                    onClick={() => handleResultClick(result.href)}
                                                                    className={`flex items-center gap-3 rounded-xl p-3 text-sm transition-all duration-150 ${globalIndex === selectedIndex
                                                                        ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                                                                        : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                                                                        }`}
                                                                >
                                                                    <div className="flex-shrink-0">
                                                                        <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${globalIndex === selectedIndex
                                                                            ? 'bg-blue-100 dark:bg-blue-900'
                                                                            : 'bg-gray-100 dark:bg-gray-800'
                                                                            }`}>
                                                                            {result.category === 'Components' && (
                                                                                <svg className={`w-5 h-5 ${globalIndex === selectedIndex ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M13 13h4a2 2 0 012 2v4a2 2 0 01-2 2M9 9l3 3" />
                                                                                </svg>
                                                                            )}
                                                                            {result.category === 'Documentation' && (
                                                                                <svg className={`w-5 h-5 ${globalIndex === selectedIndex ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                                                </svg>
                                                                            )}
                                                                            {result.category === 'AI Integration' && (
                                                                                <svg className={`w-5 h-5 ${globalIndex === selectedIndex ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                                                </svg>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-1 text-left min-w-0">
                                                                        <div className="font-medium text-gray-900 dark:text-white truncate">
                                                                            {result.title}
                                                                        </div>
                                                                        <div className="text-gray-500 dark:text-gray-400 text-sm mt-1 truncate">
                                                                            {result.description}
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-shrink-0">
                                                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                        </svg>
                                                                    </div>
                                                                </Link>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                ) : (
                                    <div className="p-12 text-center text-gray-500 dark:text-gray-400">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No results found</h3>
                                        <p className="text-sm">Try searching for components, guides, or features.</p>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Footer với keyboard shortcuts */}
                        {!query && (
                            <div className="border-t border-gray-200 dark:border-gray-800 px-6 py-4 bg-gray-50 dark:bg-gray-800/50">
                                <div className="text-center">
                                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">Quick search tips</div>
                                    <div className="flex items-center justify-center space-x-6 text-xs text-gray-500 dark:text-gray-400">
                                        <span className="flex items-center">
                                            <kbd className="mr-2 inline-flex h-6 select-none items-center gap-1 rounded border bg-white px-2 font-mono text-xs font-medium text-gray-600 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700">
                                                ↑↓
                                            </kbd>
                                            Navigate
                                        </span>
                                        <span className="flex items-center">
                                            <kbd className="mr-2 inline-flex h-6 select-none items-center gap-1 rounded border bg-white px-2 font-mono text-xs font-medium text-gray-600 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700">
                                                ↵
                                            </kbd>
                                            Select
                                        </span>
                                        <span className="flex items-center">
                                            <kbd className="mr-2 inline-flex h-6 select-none items-center gap-1 rounded border bg-white px-2 font-mono text-xs font-medium text-gray-600 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700">
                                                ESC
                                            </kbd>
                                            Close
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Footer khi có kết quả */}
                        {query && results.length > 0 && (
                            <div className="border-t border-gray-200 dark:border-gray-800 px-6 py-3 bg-gray-50 dark:bg-gray-800/50">
                                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                                    <span>
                                        {results.length} result{results.length !== 1 ? 's' : ''} found
                                    </span>
                                    <div className="flex items-center space-x-4">
                                        <span className="flex items-center">
                                            <kbd className="mr-1 inline-flex h-5 select-none items-center gap-1 rounded border bg-white px-1.5 font-mono text-[10px] font-medium text-gray-600 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700">
                                                ↑↓
                                            </kbd>
                                            Navigate
                                        </span>
                                        <span className="flex items-center">
                                            <kbd className="mr-1 inline-flex h-5 select-none items-center gap-1 rounded border bg-white px-1.5 font-mono text-[10px] font-medium text-gray-600 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700">
                                                ↵
                                            </kbd>
                                            Open
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
