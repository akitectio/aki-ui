'use client'

import { PageHeader } from '@/components/PageHeader'
import { CodeBlock } from '@/components/CodeBlock'
import { Button, ButtonGroup, Card } from '@akitectio/aki-ui'

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
                    <Card className="p-6 mb-4">
                        <ButtonGroup>
                            <Button variant="outline">First</Button>
                            <Button variant="outline">Second</Button>
                            <Button variant="outline">Third</Button>
                        </ButtonGroup>
                    </Card>
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
                    <Card className="p-6 mb-4 space-y-4">
                        <div>
                            <h3 className="text-md font-medium mb-2">Primary Buttons</h3>
                            <ButtonGroup>
                                <Button variant="primary">Save</Button>
                                <Button variant="primary">Save & Continue</Button>
                                <Button variant="primary">Save Draft</Button>
                            </ButtonGroup>
                        </div>

                        <div>
                            <h3 className="text-md font-medium mb-2">Secondary Buttons</h3>
                            <ButtonGroup>
                                <Button variant="secondary">View</Button>
                                <Button variant="secondary">Edit</Button>
                                <Button variant="secondary">Delete</Button>
                            </ButtonGroup>
                        </div>
                    </Card>
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
                    <Card className="p-6 mb-4">
                        <ButtonGroup vertical>
                            <Button variant="outline">Top</Button>
                            <Button variant="outline">Middle</Button>
                            <Button variant="outline">Bottom</Button>
                        </ButtonGroup>
                    </Card>
                    <CodeBlock
                        language="tsx"
                        code={`<ButtonGroup vertical>
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
                        <Card className="mb-4">
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
                        </Card>
                    </div>
                </section>

                {/* Accessibility */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Accessibility</h2>
                    <Card className="p-6">
                        <ul className="space-y-2 text-gray-700">
                            <li>• <strong>Keyboard Navigation:</strong> Tab moves between button groups, Arrow keys navigate within group</li>
                            <li>• <strong>ARIA Support:</strong> Uses <code>role="group"</code> for proper grouping</li>
                            <li>• <strong>Focus Management:</strong> Clear focus indicators and logical tab order</li>
                            <li>• <strong>Screen Reader:</strong> Properly announced as a button group</li>
                        </ul>
                    </Card>
                </section>
            </div>
        </PageHeader>
    )
}
