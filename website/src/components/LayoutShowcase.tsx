'use client'

import { Card } from '@akitectio/aki-ui'
import { ResponsiveDemo } from './ResponsiveDemo'

export function LayoutShowcase() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        ⚡ Responsive Layout System
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Aki UI provides powerful Grid, Stack, and Breakpoint components for creating responsive layouts
                        that adapt beautifully to any screen size.
                    </p>
                </div>

                {/* Grid Demo */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-center">
                        📱 Responsive Grid System
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700">
                            <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                <span className="text-white font-bold">1</span>
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Col 1</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Mobile: 1 col<br />Tablet: 2 cols<br />Desktop: 3-4 cols</p>
                        </Card>

                        <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-700">
                            <div className="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                <span className="text-white font-bold">2</span>
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Col 2</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Responsive<br />Grid Layout<br />Auto-adapts</p>
                        </Card>

                        <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-700">
                            <div className="w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                <span className="text-white font-bold">3</span>
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Col 3</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Flexible<br />Spacing<br />Perfect gaps</p>
                        </Card>

                        <Card className="p-6 text-center bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-700">
                            <div className="w-12 h-12 bg-orange-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                <span className="text-white font-bold">4</span>
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Col 4</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Modern<br />Design<br />Beautiful UI</p>
                        </Card>
                    </div>
                </div>

                {/* Stack Demo */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-center">
                        📚 Stack Layout System
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Vertical Stack */}
                        <Card className="p-6">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-center">Vertical Stack</h4>
                            <div className="space-y-4">
                                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg text-center">
                                    <span className="text-blue-600 dark:text-blue-400 font-medium">Stack Item 1</span>
                                </div>
                                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg text-center">
                                    <span className="text-green-600 dark:text-green-400 font-medium">Stack Item 2</span>
                                </div>
                                <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg text-center">
                                    <span className="text-purple-600 dark:text-purple-400 font-medium">Stack Item 3</span>
                                </div>
                            </div>
                        </Card>

                        {/* Horizontal Stack */}
                        <Card className="p-6">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-center">Horizontal Stack</h4>
                            <div className="flex gap-4">
                                <div className="flex-1 bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg text-center">
                                    <span className="text-blue-600 dark:text-blue-400 font-medium">Item 1</span>
                                </div>
                                <div className="flex-1 bg-green-100 dark:bg-green-900/30 p-4 rounded-lg text-center">
                                    <span className="text-green-600 dark:text-green-400 font-medium">Item 2</span>
                                </div>
                                <div className="flex-1 bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg text-center">
                                    <span className="text-purple-600 dark:text-purple-400 font-medium">Item 3</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Breakpoints Demo */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-center">
                        🔄 Responsive Breakpoints
                    </h3>
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <Card className="p-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg text-center">
                                        <div className="text-red-600 dark:text-red-400 font-bold text-lg mb-2">SM</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">≥ 640px</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Tablet</div>
                                    </div>
                                    <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg text-center">
                                        <div className="text-yellow-600 dark:text-yellow-400 font-bold text-lg mb-2">MD</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">≥ 768px</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Small Desktop</div>
                                    </div>
                                    <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg text-center">
                                        <div className="text-green-600 dark:text-green-400 font-bold text-lg mb-2">LG</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">≥ 1024px</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Desktop</div>
                                    </div>
                                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg text-center">
                                        <div className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-2">XL</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">≥ 1280px</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Large Desktop</div>
                                    </div>
                                </div>
                                <div className="mt-6 text-center">
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        🔍 Resize your browser window to see how layouts adapt at different breakpoints
                                    </p>
                                </div>
                            </Card>
                        </div>
                        <div>
                            <ResponsiveDemo />
                        </div>
                    </div>
                </div>

                {/* Features List */}
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 text-center hover:shadow-lg transition-shadow border-2 border-blue-200 dark:border-blue-800">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Grid System</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                            Powerful responsive grid with flexible columns, gaps, and auto-fit capabilities.
                        </p>
                    </Card>

                    <Card className="p-6 text-center hover:shadow-lg transition-shadow border-2 border-green-200 dark:border-green-800">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Stack Layouts</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                            Simple and intuitive stack components for vertical and horizontal layouts.
                        </p>
                    </Card>

                    <Card className="p-6 text-center hover:shadow-lg transition-shadow border-2 border-purple-200 dark:border-purple-800">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Breakpoints</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                            Smart responsive design with built-in breakpoint utilities and hooks.
                        </p>
                    </Card>
                </div>

                {/* Code Example */}
                <div className="mt-12">
                    <Card className="p-6 bg-slate-900 dark:bg-slate-800 border-slate-700">
                        <h4 className="text-lg font-semibold mb-4 text-white">🔧 Easy Implementation</h4>
                        <div className="bg-slate-800 dark:bg-slate-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-slate-300">
                                <code>{`// Grid Layout
<Grid cols={{ base: 1, md: 2, lg: 3 }} gap={6}>
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>

// Stack Layout
<Stack direction="vertical" spacing={4}>
  <Button>Action 1</Button>
  <Button>Action 2</Button>
</Stack>

// Responsive Hooks
const isMobile = useBreakpoint('md', 'down');
const isDesktop = useBreakpoint('lg', 'up');`}</code>
                            </pre>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}
