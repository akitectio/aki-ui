'use client'

import { useState } from 'react'
import { CodeBlock } from '@/components/CodeBlock'

export default function TooltipPage() {
    const [showTooltip, setShowTooltip] = useState(false)

    return (
        <div className="space-y-8">
            {/* Introduction */}
            <section>
                <h1 className="text-3xl font-bold mb-4">Tooltip</h1>
                <p className="text-gray-600 mb-6">
                    A component for displaying additional information on hover or focus.
                </p>
            </section>

            {/* Import */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Import</h2>
                <CodeBlock language="tsx">
                    {`import { Tooltip } from '@akitectio/aki-ui'

// TypeScript types
import type { TooltipProps } from '@akitectio/aki-ui'`}
                </CodeBlock>
            </section>

            {/* Basic Usage */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-medium mb-4">Hover to see tooltip</h3>
                        <div className="space-y-4">
                            <div className="relative inline-block">
                                <button
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onMouseEnter={() => setShowTooltip(true)}
                                    onMouseLeave={() => setShowTooltip(false)}
                                >
                                    Hover me
                                </button>
                                {showTooltip && (
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-gray-900 rounded shadow-lg whitespace-nowrap">
                                        This is a tooltip
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`import { Tooltip } from '@akitectio/aki-ui'

function BasicTooltip() {
  return (
    <Tooltip content="This is a tooltip">
      <button>Hover me</button>
    </Tooltip>
  )
}`}
                    </CodeBlock>
                </div>
            </section>

            {/* Positioning */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Positioning</h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-medium mb-4">Different Positions</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
                            {/* Top */}
                            <div className="relative">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 group">
                                    Top
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-gray-900 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                        Top tooltip
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                                    </div>
                                </button>
                            </div>

                            {/* Right */}
                            <div className="relative">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 group">
                                    Right
                                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-2 text-sm text-white bg-gray-900 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                        Right tooltip
                                        <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-gray-900"></div>
                                    </div>
                                </button>
                            </div>

                            {/* Bottom */}
                            <div className="relative">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 group">
                                    Bottom
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 text-sm text-white bg-gray-900 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                        Bottom tooltip
                                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-900"></div>
                                    </div>
                                </button>
                            </div>

                            {/* Left */}
                            <div className="relative">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 group">
                                    Left
                                    <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 px-3 py-2 text-sm text-white bg-gray-900 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                        Left tooltip
                                        <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-900"></div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`// Different placement options
<Tooltip content="Top tooltip" placement="top">
  <button>Top</button>
</Tooltip>

<Tooltip content="Right tooltip" placement="right">
  <button>Right</button>
</Tooltip>

<Tooltip content="Bottom tooltip" placement="bottom">
  <button>Bottom</button>
</Tooltip>

<Tooltip content="Left tooltip" placement="left">
  <button>Left</button>
</Tooltip>`}
                    </CodeBlock>
                </div>
            </section>

            {/* Variants */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Variants</h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-medium mb-4">Different Variants</h3>
                        <div className="flex flex-wrap gap-4">
                            <div className="relative">
                                <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 group">
                                    Default
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-gray-900 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                        Default tooltip
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                                    </div>
                                </button>
                            </div>

                            <div className="relative">
                                <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 group">
                                    Error
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-red-600 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                        Error tooltip
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-red-600"></div>
                                    </div>
                                </button>
                            </div>

                            <div className="relative">
                                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 group">
                                    Success
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-green-600 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                        Success tooltip
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-green-600"></div>
                                    </div>
                                </button>
                            </div>

                            <div className="relative">
                                <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 group">
                                    Warning
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-black bg-yellow-400 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                        Warning tooltip
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-yellow-400"></div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`// Different variant styles
<Tooltip content="Default tooltip" variant="default">
  <button>Default</button>
</Tooltip>

<Tooltip content="Error tooltip" variant="error">
  <button>Error</button>
</Tooltip>

<Tooltip content="Success tooltip" variant="success">
  <button>Success</button>
</Tooltip>

<Tooltip content="Warning tooltip" variant="warning">
  <button>Warning</button>
</Tooltip>`}
                    </CodeBlock>
                </div>
            </section>

            {/* Rich Content */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Rich Content</h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-medium mb-4">Tooltip with Rich Content</h3>
                        <div className="relative inline-block">
                            <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 group">
                                Rich Content
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-4 text-sm bg-white border border-gray-300 rounded shadow-lg w-64 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0">
                                            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Information</h4>
                                            <p className="text-gray-600 mt-1">This tooltip contains rich content with multiple elements and styling.</p>
                                        </div>
                                    </div>
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`import { InformationCircleIcon } from '@heroicons/react/24/outline'

const richContent = (
  <div className="flex items-start space-x-3 max-w-xs">
    <InformationCircleIcon className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
    <div>
      <h4 className="font-medium">Information</h4>
      <p className="text-sm text-gray-600 mt-1">
        This tooltip contains rich content with multiple elements.
      </p>
    </div>
  </div>
)

<Tooltip content={richContent} placement="top">
  <button>Rich Content</button>
</Tooltip>`}
                    </CodeBlock>
                </div>
            </section>

            {/* API Reference */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="border border-gray-300 px-4 py-2 text-left">Prop</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">content</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">ReactNode</td>
                                <td className="border border-gray-300 px-4 py-2">-</td>
                                <td className="border border-gray-300 px-4 py-2">Content to display in the tooltip</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">placement</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'top' | 'right' | 'bottom' | 'left'</td>
                                <td className="border border-gray-300 px-4 py-2">'top'</td>
                                <td className="border border-gray-300 px-4 py-2">Position of the tooltip</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">variant</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'default' | 'error' | 'success' | 'warning'</td>
                                <td className="border border-gray-300 px-4 py-2">'default'</td>
                                <td className="border border-gray-300 px-4 py-2">Visual style variant</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">trigger</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'hover' | 'click' | 'focus'</td>
                                <td className="border border-gray-300 px-4 py-2">'hover'</td>
                                <td className="border border-gray-300 px-4 py-2">How to trigger the tooltip</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">delay</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">number</td>
                                <td className="border border-gray-300 px-4 py-2">0</td>
                                <td className="border border-gray-300 px-4 py-2">Delay before showing tooltip (ms)</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">hideDelay</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">number</td>
                                <td className="border border-gray-300 px-4 py-2">0</td>
                                <td className="border border-gray-300 px-4 py-2">Delay before hiding tooltip (ms)</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">disabled</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                                <td className="border border-gray-300 px-4 py-2">false</td>
                                <td className="border border-gray-300 px-4 py-2">Disable the tooltip</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">arrow</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                                <td className="border border-gray-300 px-4 py-2">true</td>
                                <td className="border border-gray-300 px-4 py-2">Show arrow pointing to trigger</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">offset</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">number</td>
                                <td className="border border-gray-300 px-4 py-2">8</td>
                                <td className="border border-gray-300 px-4 py-2">Distance from trigger element</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Accessibility */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Accessibility</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Supports keyboard focus and hover triggers</li>
                    <li>ARIA attributes for screen readers (aria-describedby)</li>
                    <li>Properly labeled with role="tooltip"</li>
                    <li>Respects prefers-reduced-motion for animations</li>
                    <li>Keyboard navigation support (Escape to close)</li>
                    <li>Focus management when triggered by keyboard</li>
                </ul>
            </section>
        </div>
    )
}
