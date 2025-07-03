'use client'

import { useState } from 'react'
import { CodeBlock } from '@/components/CodeBlock'

export default function SpinnerPage() {
    const [isLoading, setIsLoading] = useState(false)

    const handleAsyncAction = () => {
        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 3000)
    }

    return (
        <div className="space-y-8">
            {/* Introduction */}
            <section>
                <h1 className="text-3xl font-bold mb-4">Spinner</h1>
                <p className="text-gray-600 mb-6">
                    A loading indicator component for showing loading states.
                </p>
            </section>

            {/* Import */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Import</h2>
                <CodeBlock language="tsx">
                    {`import { Spinner } from '@akitectio/aki-ui'

// TypeScript types
import type { SpinnerProps } from '@akitectio/aki-ui'`}
                </CodeBlock>
            </section>

            {/* Basic Usage */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-medium mb-4">Default Spinner</h3>
                        <div className="flex items-center space-x-4">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                            <span className="text-gray-600">Loading...</span>
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`import { Spinner } from '@akitectio/aki-ui'

function BasicSpinner() {
  return <Spinner />
}`}
                    </CodeBlock>
                </div>
            </section>

            {/* Sizes */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-medium mb-4">Different Sizes</h3>
                        <div className="flex items-center space-x-8">
                            <div className="text-center">
                                <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mb-2"></div>
                                <p className="text-xs text-gray-600">Small</p>
                            </div>
                            <div className="text-center">
                                <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mb-2"></div>
                                <p className="text-xs text-gray-600">Medium</p>
                            </div>
                            <div className="text-center">
                                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
                                <p className="text-xs text-gray-600">Large</p>
                            </div>
                            <div className="text-center">
                                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-2"></div>
                                <p className="text-xs text-gray-600">Extra Large</p>
                            </div>
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`// Different sizes
<Spinner size="sm" />   // Small
<Spinner size="md" />   // Medium (default)
<Spinner size="lg" />   // Large
<Spinner size="xl" />   // Extra Large`}
                    </CodeBlock>
                </div>
            </section>

            {/* Colors */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Colors</h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-medium mb-4">Different Colors</h3>
                        <div className="flex items-center space-x-8">
                            <div className="text-center">
                                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
                                <p className="text-xs text-gray-600">Primary</p>
                            </div>
                            <div className="text-center">
                                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mb-2"></div>
                                <p className="text-xs text-gray-600">Success</p>
                            </div>
                            <div className="text-center">
                                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-600 mb-2"></div>
                                <p className="text-xs text-gray-600">Warning</p>
                            </div>
                            <div className="text-center">
                                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mb-2"></div>
                                <p className="text-xs text-gray-600">Danger</p>
                            </div>
                            <div className="text-center">
                                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600 mb-2"></div>
                                <p className="text-xs text-gray-600">Gray</p>
                            </div>
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`// Different colors
<Spinner color="primary" />
<Spinner color="success" />
<Spinner color="warning" />
<Spinner color="danger" />
<Spinner color="gray" />`}
                    </CodeBlock>
                </div>
            </section>

            {/* With Label */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">With Label</h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-medium mb-4">Spinner with Text</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                                <span className="text-sm text-gray-600">Loading...</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-green-600"></div>
                                <span className="text-sm text-gray-600">Saving changes...</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
                                <span className="text-sm text-gray-600">Processing your request...</span>
                            </div>
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`// With label
<Spinner label="Loading..." />
<Spinner label="Saving changes..." color="success" />
<Spinner label="Processing your request..." color="purple" />`}
                    </CodeBlock>
                </div>
            </section>

            {/* In Button */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">In Button</h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-medium mb-4">Loading Button States</h3>
                        <div className="flex space-x-4">
                            <button
                                onClick={handleAsyncAction}
                                disabled={isLoading}
                                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading && (
                                    <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                )}
                                <span>{isLoading ? 'Loading...' : 'Save Changes'}</span>
                            </button>

                            <button
                                disabled={isLoading}
                                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading && (
                                    <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                )}
                                <span>{isLoading ? 'Submitting...' : 'Submit Form'}</span>
                            </button>
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`function LoadingButton() {
  const [isLoading, setIsLoading] = useState(false)
  
  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      await submitForm()
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <button 
      onClick={handleSubmit}
      disabled={isLoading}
      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded"
    >
      {isLoading && <Spinner size="sm" color="white" />}
      <span>{isLoading ? 'Loading...' : 'Save Changes'}</span>
    </button>
  )
}`}
                    </CodeBlock>
                </div>
            </section>

            {/* Overlay Spinner */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Overlay Spinner</h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-medium mb-4">Full Page Loading</h3>
                        <div className="relative bg-white border border-gray-200 rounded-lg p-8 min-h-[200px]">
                            <div className="space-y-4">
                                <h4 className="text-lg font-medium">Page Content</h4>
                                <p className="text-gray-600">This is some page content that would be covered by the loading overlay.</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-4 bg-gray-200 rounded"></div>
                                    <div className="h-4 bg-gray-200 rounded"></div>
                                </div>
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center rounded-lg">
                                <div className="text-center">
                                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                                    <p className="text-gray-600">Loading content...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`function OverlaySpinner({ isLoading, children }) {
  return (
    <div className="relative">
      {children}
      {isLoading && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center">
          <div className="text-center">
            <Spinner size="lg" />
            <p className="mt-2 text-gray-600">Loading content...</p>
          </div>
        </div>
      )}
    </div>
  )
}`}
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
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">size</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'sm' | 'md' | 'lg' | 'xl'</td>
                                <td className="border border-gray-300 px-4 py-2">'md'</td>
                                <td className="border border-gray-300 px-4 py-2">Size of the spinner</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">color</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                                <td className="border border-gray-300 px-4 py-2">'primary'</td>
                                <td className="border border-gray-300 px-4 py-2">Color of the spinner</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">label</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                                <td className="border border-gray-300 px-4 py-2">-</td>
                                <td className="border border-gray-300 px-4 py-2">Accessible label for screen readers</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">thickness</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                                <td className="border border-gray-300 px-4 py-2">'2px'</td>
                                <td className="border border-gray-300 px-4 py-2">Thickness of the spinner border</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">speed</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                                <td className="border border-gray-300 px-4 py-2">'0.65s'</td>
                                <td className="border border-gray-300 px-4 py-2">Animation duration</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">emptyColor</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                                <td className="border border-gray-300 px-4 py-2">'transparent'</td>
                                <td className="border border-gray-300 px-4 py-2">Color of the empty part</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Accessibility */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Accessibility</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Uses <code>role="status"</code> for screen reader announcements</li>
                    <li>Includes <code>aria-label</code> for describing the loading state</li>
                    <li>Respects <code>prefers-reduced-motion</code> for users with motion sensitivity</li>
                    <li>Proper color contrast for visibility</li>
                    <li>Hidden from screen readers when not actively loading</li>
                </ul>
            </section>
        </div>
    )
}
