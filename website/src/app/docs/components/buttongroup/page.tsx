'use client'

import { PageHeader } from '@/components/PageHeader'
import { CodeBlock } from '@/components/CodeBlock'

export default function ButtonGroupPage() {
    return (
        <PageHeader
            title="ButtonGroup"
            description="Group related buttons together with seamless visual connection and consistent spacing."
        >
            <div className="space-y-8">
                {/* Import */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Import</h2>
                    <CodeBlock language="typescript">
                        {`import { ButtonGroup, Button } from '@akitectio/aki-ui'`}
                    </CodeBlock>
                </section>

                {/* Basic Usage */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
                    <div className="bg-gray-50 p-6 rounded-lg border mb-4">
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                            <button
                                type="button"
                                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                            >
                                First
                            </button>
                            <button
                                type="button"
                                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                            >
                                Second
                            </button>
                            <button
                                type="button"
                                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                            >
                                Third
                            </button>
                        </div>
                    </div>
                    <CodeBlock
                        language="tsx"
                        code={`<ButtonGroup>
  <Button variant="outline">First</Button>
  <Button variant="outline">Second</Button>
  <Button variant="outline">Third</Button>
</ButtonGroup>`}
                    />
                </section>

                {/* Different Variants */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Different Variants</h2>
                    <div className="bg-gray-50 p-6 rounded-lg border mb-4 space-y-4">
                        <div>
                            <h3 className="text-md font-medium mb-2">Primary Buttons</h3>
                            <div className="inline-flex rounded-md shadow-sm" role="group">
                                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-l-lg hover:bg-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-500">
                                    Save
                                </button>
                                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border-t border-b border-blue-600 hover:bg-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-500">
                                    Save & Continue
                                </button>
                                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-r-md hover:bg-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-500">
                                    Save Draft
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-md font-medium mb-2">Secondary Buttons</h3>
                            <div className="inline-flex rounded-md shadow-sm" role="group">
                                <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:z-10 focus:ring-2 focus:ring-gray-500">
                                    View
                                </button>
                                <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-300 hover:bg-gray-200 focus:z-10 focus:ring-2 focus:ring-gray-500">
                                    Edit
                                </button>
                                <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:z-10 focus:ring-2 focus:ring-gray-500">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                    <CodeBlock
                        language="tsx"
                        code={`{/* Primary Button Group */}
<ButtonGroup>
  <Button variant="primary">Save</Button>
  <Button variant="primary">Save & Continue</Button>
  <Button variant="primary">Save Draft</Button>
</ButtonGroup>

{/* Secondary Button Group */}
<ButtonGroup>
  <Button variant="secondary">View</Button>
  <Button variant="secondary">Edit</Button>
  <Button variant="secondary">Delete</Button>
</ButtonGroup>`}
                    />
                </section>

                {/* Vertical Orientation */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Vertical Orientation</h2>
                    <div className="bg-gray-50 p-6 rounded-lg border mb-4">
                        <div className="inline-flex flex-col rounded-md shadow-sm" role="group">
                            <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700">
                                Top
                            </button>
                            <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-l border-r border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700">
                                Middle
                            </button>
                            <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700">
                                Bottom
                            </button>
                        </div>
                    </div>
                    <CodeBlock
                        language="tsx"
                        code={`<ButtonGroup orientation="vertical">
  <Button variant="outline">Top</Button>
  <Button variant="outline">Middle</Button>
  <Button variant="outline">Bottom</Button>
</ButtonGroup>`}
                    />
                </section>

                {/* API Reference */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">API Reference</h2>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">ButtonGroup Props</h3>
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
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">vertical</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">boolean</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">false</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Stack buttons vertically</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">size</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">"sm" | "md" | "lg"</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">"md"</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Size of all buttons in the group</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">equalWidth</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">boolean</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">false</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Make all buttons equal width</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Accessibility */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Accessibility</h2>
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                        <ul className="space-y-2 text-gray-700">
                            <li>• <strong>Keyboard Navigation:</strong> Tab moves between button groups, Arrow keys navigate within group</li>
                            <li>• <strong>ARIA Support:</strong> Uses <code>role="group"</code> for proper grouping</li>
                            <li>• <strong>Focus Management:</strong> Clear focus indicators and logical tab order</li>
                            <li>• <strong>Screen Reader:</strong> Properly announced as a button group</li>
                        </ul>
                    </div>
                </section>
            </div>
        </PageHeader>
    )
}
