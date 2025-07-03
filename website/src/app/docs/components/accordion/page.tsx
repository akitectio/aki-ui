'use client'

import { useState } from 'react'
import { Accordion } from '@/components/client-components'
import { PageHeader } from '@/components/PageHeader'
import { CodeBlock } from '@/components/CodeBlock'

export default function AccordionPage() {
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

    const toggleItem = (itemId: string) => {
        setOpenItems(prev => ({
            ...prev,
            [itemId]: !prev[itemId]
        }))
    }

    return (
        <PageHeader
            title="Accordion"
            description="Collapsible content sections for organizing information in a space-efficient way with proper accessibility support."
        >
            <div className="space-y-8">
                {/* Import */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Import</h2>
                    <CodeBlock language="typescript">
                        {`import { Accordion } from '@/components/client-components'`}
                    </CodeBlock>
                </section>

                {/* Basic Usage */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
                    <div className="bg-gray-50 p-6 rounded-lg border mb-4">
                        {/* @ts-ignore */}
                        <Accordion>
                            {/* @ts-ignore */}
                            <Accordion.Item id="item1">
                                {/* @ts-ignore */}
                                <Accordion.Header>
                                    What is Aki UI?
                                </Accordion.Header>
                                {/* @ts-ignore */}
                                <Accordion.Body>
                                    <p>Aki UI is a modern React component library built with TypeScript and Tailwind CSS. It provides a comprehensive set of accessible components for building user interfaces.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            {/* @ts-ignore */}
                            <Accordion.Item id="item2">
                                {/* @ts-ignore */}
                                <Accordion.Header>
                                    How to install?
                                </Accordion.Header>
                                {/* @ts-ignore */}
                                <Accordion.Body>
                                    <p className="mb-3">You can install Aki UI using npm or yarn:</p>
                                    <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm">
                                        npm install @akitectio/aki-ui
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            {/* @ts-ignore */}
                            <Accordion.Item id="item3">
                                {/* @ts-ignore */}
                                <Accordion.Header>
                                    Browser Support
                                </Accordion.Header>
                                {/* @ts-ignore */}
                                <Accordion.Body>
                                    <p>Aki UI supports all modern browsers including Chrome, Firefox, Safari, and Edge. It also works on mobile browsers and provides responsive design out of the box.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <CodeBlock
                        language="tsx"
                        code={`<Accordion>
  <Accordion.Item id="item1">
    <Accordion.Header>
      What is Aki UI?
    </Accordion.Header>
    <Accordion.Body>
      <p>Aki UI is a modern React component library...</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item id="item2">
    <Accordion.Header>
      How to install?
    </Accordion.Header>
    <Accordion.Body>
      <p>You can install Aki UI using npm or yarn...</p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>`}
                    />
                </section>

                {/* Multiple Open */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Multiple Open Items</h2>
                    <div className="bg-gray-50 p-6 rounded-lg border mb-4">
                        <p className="text-gray-600 mb-4">
                            Set <code className="bg-gray-100 px-2 py-1 rounded text-sm">allowMultiple</code> to allow
                            multiple accordion items to be open simultaneously.
                        </p>
                        {/* @ts-ignore */}
                        <Accordion allowMultiple>
                            {/* @ts-ignore */}
                            <Accordion.Item id="frontend">
                                {/* @ts-ignore */}
                                <Accordion.Header>
                                    Frontend Development
                                </Accordion.Header>
                                {/* @ts-ignore */}
                                <Accordion.Body>
                                    <p>Build modern user interfaces with React, Vue, or Angular using Aki UI components.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            {/* @ts-ignore */}
                            <Accordion.Item id="backend">
                                {/* @ts-ignore */}
                                <Accordion.Header>
                                    Backend Development
                                </Accordion.Header>
                                {/* @ts-ignore */}
                                <Accordion.Body>
                                    <p>Create robust APIs and server-side applications with Node.js, Python, or other technologies.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <CodeBlock
                        language="tsx"
                        code={`<Accordion allowMultiple>
  <Accordion.Item id="frontend">
    <Accordion.Header>
      Frontend Development
    </Accordion.Header>
    <Accordion.Body>
      <p>Build modern user interfaces...</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item id="backend">
    <Accordion.Header>
      Backend Development
    </Accordion.Header>
    <Accordion.Body>
      <p>Create robust APIs...</p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>`}
                    />
                </section>

                {/* Flush Style */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Flush Style</h2>
                    <div className="bg-gray-50 p-6 rounded-lg border mb-4">
                        <p className="text-gray-600 mb-4">
                            Use the <code className="bg-gray-100 px-2 py-1 rounded text-sm">flush</code> prop to
                            remove borders and rounded corners.
                        </p>
                        {/* @ts-ignore */}
                        <Accordion flush>
                            {/* @ts-ignore */}
                            <Accordion.Item id="premium">
                                {/* @ts-ignore */}
                                <Accordion.Header>
                                    Premium Features
                                </Accordion.Header>
                                {/* @ts-ignore */}
                                <Accordion.Body>
                                    <p>Access advanced components, priority support, and exclusive templates.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            {/* @ts-ignore */}
                            <Accordion.Item id="support">
                                {/* @ts-ignore */}
                                <Accordion.Header>
                                    Support Options
                                </Accordion.Header>
                                {/* @ts-ignore */}
                                <Accordion.Body>
                                    <p>Get help through documentation, community forums, or direct support channels.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <CodeBlock
                        language="tsx"
                        code={`<Accordion flush>
  <Accordion.Item id="premium">
    <Accordion.Header>Premium Features</Accordion.Header>
    <Accordion.Body>
      <p>Access advanced components...</p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>`}
                    />
                </section>

                {/* API Reference */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">API Reference</h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Accordion Props</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Prop</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Type</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Default</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">allowMultiple</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">boolean</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">false</td>
                                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Allow multiple items to be open at once</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">defaultExpandedItems</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">string[]</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">[]</td>
                                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Default open items</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">flush</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">boolean</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">false</td>
                                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Remove borders and rounded corners</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">alwaysOpen</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">boolean</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">false</td>
                                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Always keep at least one item expanded</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Accordion.Item Props</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Prop</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Type</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Required</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">id</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">Yes</td>
                                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Unique identifier for the item</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">disabled</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">boolean</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">No</td>
                                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Disable the accordion item</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Accessibility */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Accessibility</h2>
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                        <ul className="space-y-2 text-gray-700">
                            <li>• <strong>Keyboard Navigation:</strong> Use Enter/Space to toggle items, Arrow keys to navigate</li>
                            <li>• <strong>ARIA Support:</strong> Proper ARIA attributes for screen readers</li>
                            <li>• <strong>Focus Management:</strong> Clear focus indicators and logical tab order</li>
                            <li>• <strong>Screen Reader:</strong> Announces expanded/collapsed state changes</li>
                        </ul>
                    </div>
                </section>
            </div>
        </PageHeader>
    )
}
