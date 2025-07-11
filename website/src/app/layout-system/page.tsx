'use client'

import { Card } from '@akitectio/aki-ui'
import Link from 'next/link'

export default function LayoutSystemPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-900 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        🎯 Layout System
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Master responsive design with Aki UI's powerful Grid, Stack, and Breakpoint components.
                        Build layouts that look perfect on every device.
                    </p>
                </div>

                {/* Navigation Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <Link href="/docs/components/grid" className="group">
                        <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-blue-200 dark:border-blue-800 group-hover:border-blue-400 dark:group-hover:border-blue-600">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                Grid System
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Create flexible, responsive grid layouts with automatic column sizing and gap management.
                            </p>
                            <div className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                                Learn Grid →
                            </div>
                        </Card>
                    </Link>

                    <Link href="/docs/components/stack" className="group">
                        <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-green-200 dark:border-green-800 group-hover:border-green-400 dark:group-hover:border-green-600">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                                Stack Components
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Organize elements in horizontal or vertical stacks with intelligent spacing and alignment.
                            </p>
                            <div className="text-green-600 dark:text-green-400 font-medium group-hover:underline">
                                Learn Stack →
                            </div>
                        </Card>
                    </Link>

                    <Link href="/docs/components/breakpoints" className="group">
                        <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-purple-200 dark:border-purple-800 group-hover:border-purple-400 dark:group-hover:border-purple-600">
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                                Breakpoints
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Responsive utilities and hooks for building adaptive interfaces across all screen sizes.
                            </p>
                            <div className="text-purple-600 dark:text-purple-400 font-medium group-hover:underline">
                                Learn Breakpoints →
                            </div>
                        </Card>
                    </Link>
                </div>

                {/* Live Examples */}
                <div className="space-y-16">

                    {/* Grid Examples */}
                    <section>
                        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
                            🔥 Grid System Examples
                        </h2>

                        <div className="space-y-8">
                            {/* Auto Grid */}
                            <Card className="p-6">
                                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Auto-Responsive Grid</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                                        <div key={item} className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 p-4 rounded-lg text-center">
                                            <div className="text-blue-600 dark:text-blue-400 font-bold">Item {item}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                                    <code className="text-sm text-slate-600 dark:text-slate-300">
                                        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                                    </code>
                                </div>
                            </Card>

                            {/* Asymmetric Grid */}
                            <Card className="p-6">
                                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Asymmetric Layout</h3>
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                                    <div className="lg:col-span-2 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 p-6 rounded-lg">
                                        <div className="text-green-600 dark:text-green-400 font-bold text-lg">Main Content (2/3)</div>
                                        <p className="text-green-700 dark:text-green-300 mt-2">This area takes up 2/3 of the width on large screens</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 p-6 rounded-lg">
                                        <div className="text-purple-600 dark:text-purple-400 font-bold">Sidebar (1/3)</div>
                                        <p className="text-purple-700 dark:text-purple-300 mt-2">Sidebar content</p>
                                    </div>
                                </div>
                                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                                    <code className="text-sm text-slate-600 dark:text-slate-300">
                                        grid-cols-1 lg:grid-cols-3 + lg:col-span-2
                                    </code>
                                </div>
                            </Card>
                        </div>
                    </section>

                    {/* Stack Examples */}
                    <section>
                        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
                            📚 Stack Layout Examples
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Vertical Stack */}
                            <Card className="p-6">
                                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Vertical Stack</h3>
                                <div className="space-y-3 mb-4">
                                    <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg text-center">
                                        <span className="text-red-600 dark:text-red-400 font-medium">Header</span>
                                    </div>
                                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-center">
                                        <span className="text-blue-600 dark:text-blue-400 font-medium">Navigation</span>
                                    </div>
                                    <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-lg text-center">
                                        <span className="text-green-600 dark:text-green-400 font-medium">Main Content</span>
                                    </div>
                                    <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg text-center">
                                        <span className="text-purple-600 dark:text-purple-400 font-medium">Footer</span>
                                    </div>
                                </div>
                                <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                                    <code className="text-sm text-slate-600 dark:text-slate-300">
                                        &lt;Stack direction="vertical" spacing=&#123;3&#125;&gt;
                                    </code>
                                </div>
                            </Card>

                            {/* Horizontal Stack */}
                            <Card className="p-6">
                                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Horizontal Stack</h3>
                                <div className="flex gap-3 mb-4">
                                    <div className="flex-1 bg-red-100 dark:bg-red-900/30 p-4 rounded-lg text-center">
                                        <span className="text-red-600 dark:text-red-400 font-medium">Button 1</span>
                                    </div>
                                    <div className="flex-1 bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg text-center">
                                        <span className="text-blue-600 dark:text-blue-400 font-medium">Button 2</span>
                                    </div>
                                    <div className="flex-1 bg-green-100 dark:bg-green-900/30 p-4 rounded-lg text-center">
                                        <span className="text-green-600 dark:text-green-400 font-medium">Button 3</span>
                                    </div>
                                </div>
                                <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                                    <code className="text-sm text-slate-600 dark:text-slate-300">
                                        &lt;Stack direction="horizontal" spacing=&#123;3&#125;&gt;
                                    </code>
                                </div>
                            </Card>
                        </div>
                    </section>

                    {/* Breakpoints Examples */}
                    <section>
                        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
                            📱 Responsive Breakpoints
                        </h2>

                        <Card className="p-6">
                            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white text-center">Interactive Breakpoint Demo</h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                                <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg text-center">
                                    <div className="text-red-600 dark:text-red-400 font-bold mb-2">Base</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">0px+</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Mobile</div>
                                </div>
                                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg text-center">
                                    <div className="text-yellow-600 dark:text-yellow-400 font-bold mb-2">SM</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">640px+</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Tablet</div>
                                </div>
                                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg text-center">
                                    <div className="text-green-600 dark:text-green-400 font-bold mb-2">MD</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">768px+</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Small Desktop</div>
                                </div>
                                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg text-center">
                                    <div className="text-blue-600 dark:text-blue-400 font-bold mb-2">LG</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">1024px+</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Desktop</div>
                                </div>
                            </div>

                            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2 text-slate-700 dark:text-slate-300">Breakpoint Hooks</h4>
                                <pre className="text-sm text-slate-600 dark:text-slate-300 overflow-x-auto">
                                    {`const isMobile = useBreakpoint('md', 'down');
const isTablet = useBreakpoint('md', 'up') && useBreakpoint('lg', 'down');
const isDesktop = useBreakpoint('lg', 'up');

// Responsive utilities
<Show above="md">Desktop content</Show>
<Show below="md">Mobile content</Show>`}
                                </pre>
                            </div>
                        </Card>
                    </section>

                    {/* Best Practices */}
                    <section>
                        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
                            💡 Best Practices
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="p-6 border-2 border-green-200 dark:border-green-800">
                                <div className="flex items-center mb-4">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Do</h3>
                                </div>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>• Use consistent spacing across components</li>
                                    <li>• Start with mobile-first design</li>
                                    <li>• Leverage grid auto-placement</li>
                                    <li>• Use Stack for simple linear layouts</li>
                                    <li>• Test on multiple screen sizes</li>
                                </ul>
                            </Card>

                            <Card className="p-6 border-2 border-red-200 dark:border-red-800">
                                <div className="flex items-center mb-4">
                                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Don't</h3>
                                </div>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>• Nest grids unnecessarily deep</li>
                                    <li>• Use fixed pixel values for breakpoints</li>
                                    <li>• Override too many default styles</li>
                                    <li>• Ignore performance on complex layouts</li>
                                    <li>• Forget accessibility considerations</li>
                                </ul>
                            </Card>
                        </div>
                    </section>

                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <Card className="inline-block p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                            🚀 Ready to Build Amazing Layouts?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
                            Start using Aki UI's layout system today and create responsive designs that work everywhere.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/docs/installation" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                                Get Started
                            </Link>
                            <Link href="/docs/components" className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium rounded-lg transition-colors">
                                View All Components
                            </Link>
                        </div>
                    </Card>
                </div>

            </div>
        </div>
    )
}
