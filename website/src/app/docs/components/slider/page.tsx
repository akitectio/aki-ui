'use client'

import { useState } from 'react'
import { Slider } from '@/components/client-components'
import { PageHeader } from '@/components/PageHeader'
import { CodeBlock } from '@/components/CodeBlock'

export default function SliderPage() {
    const [value, setValue] = useState(50)
    const [rangeValue, setRangeValue] = useState([20, 80])

    return (
        <PageHeader
            title="Slider"
            description="A component for selecting a value from a range with customizable appearance and behavior."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Import</h2>
                    <CodeBlock language="typescript">
                        {`import { Slider } from '@/components/client-components'`}
                    </CodeBlock>
                </section>

                {/* Basic Usage */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border mb-4">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Value: {value}</label>
                                <Slider
                                    value={value}
                                    onChange={setValue}
                                    min={0}
                                    max={100}
                                />
                            </div>
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`const [value, setValue] = useState(50)

<Slider 
  value={value} 
  onChange={setValue}
  min={0}
  max={100}
/>`}
                    </CodeBlock>
                </section>

                {/* Range Slider */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Range Slider</h2>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border mb-4">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Range: {rangeValue[0]} - {rangeValue[1]}
                                </label>
                                <Slider
                                    value={rangeValue}
                                    onChange={setRangeValue}
                                    min={0}
                                    max={100}
                                    range
                                />
                            </div>
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`const [rangeValue, setRangeValue] = useState([20, 80])

<Slider 
  value={rangeValue} 
  onChange={setRangeValue}
  min={0}
  max={100}
  range
/>`}
                    </CodeBlock>
                </section>

                {/* Different Steps */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Custom Steps</h2>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border mb-4 space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Step 10</label>
                            <Slider
                                defaultValue={30}
                                min={0}
                                max={100}
                                step={10}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Step 25</label>
                            <Slider
                                defaultValue={50}
                                min={0}
                                max={100}
                                step={25}
                            />
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`<Slider 
  defaultValue={30} 
  min={0}
  max={100}
  step={10}
/>

<Slider 
  defaultValue={50} 
  min={0}
  max={100}
  step={25}
/>`}
                    </CodeBlock>
                </section>

                {/* API Reference */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">API Reference</h2>
                    <div className="p-6 bg-white dark:bg-gray-800 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-4">Slider Props</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                                <thead>
                                    <tr className="bg-gray-100 dark:bg-gray-700">
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Prop</th>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Type</th>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Default</th>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">value</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">number | number[]</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Current value(s) of the slider</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">defaultValue</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">number | number[]</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Default value(s) of the slider</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">min</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">number</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Minimum value</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">max</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">number</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">100</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Maximum value</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">step</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">number</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">1</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Step size for value increments</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">range</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">boolean</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">false</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Enable range selection</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">disabled</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">boolean</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">false</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Disable the slider</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">onChange</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">(value) =&gt; void</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Callback when value changes</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Accessibility */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Accessibility</h2>
                    <div className="prose prose-gray max-w-none">
                        <ul className="space-y-2">
                            <li>✅ Full keyboard navigation support (arrow keys, page up/down, home/end)</li>
                            <li>✅ Screen reader compatible with proper ARIA attributes</li>
                            <li>✅ Focus management and visual indicators</li>
                            <li>✅ Value announcements for assistive technologies</li>
                        </ul>

                        <h3 className="text-lg font-semibold mt-6 mb-3">ARIA Attributes</h3>
                        <ul className="space-y-1">
                            <li><code>role="slider"</code> - Identifies the slider control</li>
                            <li><code>aria-valuemin</code> - Minimum allowed value</li>
                            <li><code>aria-valuemax</code> - Maximum allowed value</li>
                            <li><code>aria-valuenow</code> - Current value</li>
                            <li><code>aria-orientation</code> - Orientation of the slider</li>
                        </ul>
                    </div>
                </section>
            </div>
        </PageHeader>
    )
}
