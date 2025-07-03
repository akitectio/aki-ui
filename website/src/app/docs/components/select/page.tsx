'use client'

import { useState } from 'react'
import { CodeBlock } from '@/components/CodeBlock'

export default function SelectPage() {
    const [selectedValue, setSelectedValue] = useState('')
    const [multiSelectedValues, setMultiSelectedValues] = useState<string[]>([])

    return (
        <div className="space-y-8">
            {/* Introduction */}
            <section>
                <h1 className="text-3xl font-bold mb-4">Select</h1>
                <p className="text-gray-600 mb-6">
                    A component for selecting options from a dropdown list with support for single and multi-select modes.
                </p>
            </section>

            {/* Import */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Import</h2>
                <CodeBlock language="tsx">
                    {`import { Select } from '@akitectio/aki-ui'

// TypeScript types
import type { SelectProps, SelectRef, SelectOption } from '@akitectio/aki-ui'`}
                </CodeBlock>
            </section>

            {/* Basic Usage */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-medium mb-4">Basic Select</h3>
                        <div className="space-y-4">
                            <select
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                value={selectedValue}
                                onChange={(e) => setSelectedValue(e.target.value)}
                            >
                                <option value="">Select an option...</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                            <p className="text-sm text-gray-600">Selected: {selectedValue || 'None'}</p>
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`import { Select } from '@akitectio/aki-ui'

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]

function BasicSelect() {
  const [value, setValue] = useState('')
  
  return (
    <Select
      placeholder="Select an option..."
      value={value}
      onChange={setValue}
      options={options}
    />
  )
}`}
                    </CodeBlock>
                </div>
            </section>

            {/* Multi Select */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Multi Select</h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-medium mb-4">Multi Select Demo</h3>
                        <div className="space-y-4">
                            <select
                                multiple
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[120px]"
                                value={multiSelectedValues}
                                onChange={(e) => {
                                    const values = Array.from(e.target.selectedOptions, option => option.value)
                                    setMultiSelectedValues(values)
                                }}
                            >
                                <option value="apple">Apple</option>
                                <option value="banana">Banana</option>
                                <option value="cherry">Cherry</option>
                                <option value="date">Date</option>
                                <option value="elderberry">Elderberry</option>
                            </select>
                            <p className="text-sm text-gray-600">
                                Selected: {multiSelectedValues.length > 0 ? multiSelectedValues.join(', ') : 'None'}
                            </p>
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`import { Select } from '@akitectio/aki-ui'

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
]

function MultiSelect() {
  const [values, setValues] = useState<string[]>([])
  
  return (
    <Select
      multiple
      placeholder="Select fruits..."
      value={values}
      onChange={setValues}
      options={fruits}
    />
  )
}`}
                    </CodeBlock>
                </div>
            </section>

            {/* Variants */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Variants</h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-medium mb-4">Different Variants</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Default</label>
                                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Default select</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Large</label>
                                <select className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Large select</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Small</label>
                                <select className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Small select</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Disabled</label>
                                <select disabled className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-400">
                                    <option>Disabled select</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`// Different sizes and states
<Select size="sm" placeholder="Small select" options={options} />
<Select size="md" placeholder="Default select" options={options} />
<Select size="lg" placeholder="Large select" options={options} />
<Select disabled placeholder="Disabled select" options={options} />`}
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
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">options</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">SelectOption[]</td>
                                <td className="border border-gray-300 px-4 py-2">[]</td>
                                <td className="border border-gray-300 px-4 py-2">Array of options to select from</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">value</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string | string[]</td>
                                <td className="border border-gray-300 px-4 py-2">-</td>
                                <td className="border border-gray-300 px-4 py-2">Selected value(s)</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onChange</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">function</td>
                                <td className="border border-gray-300 px-4 py-2">-</td>
                                <td className="border border-gray-300 px-4 py-2">Callback when selection changes</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">placeholder</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                                <td className="border border-gray-300 px-4 py-2">-</td>
                                <td className="border border-gray-300 px-4 py-2">Placeholder text</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">multiple</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                                <td className="border border-gray-300 px-4 py-2">false</td>
                                <td className="border border-gray-300 px-4 py-2">Enable multi-select mode</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">size</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'sm' | 'md' | 'lg'</td>
                                <td className="border border-gray-300 px-4 py-2">'md'</td>
                                <td className="border border-gray-300 px-4 py-2">Size of the select</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">disabled</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                                <td className="border border-gray-300 px-4 py-2">false</td>
                                <td className="border border-gray-300 px-4 py-2">Disable the select</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">searchable</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                                <td className="border border-gray-300 px-4 py-2">false</td>
                                <td className="border border-gray-300 px-4 py-2">Enable search functionality</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">clearable</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                                <td className="border border-gray-300 px-4 py-2">false</td>
                                <td className="border border-gray-300 px-4 py-2">Show clear button</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">loading</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                                <td className="border border-gray-300 px-4 py-2">false</td>
                                <td className="border border-gray-300 px-4 py-2">Show loading state</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* SelectOption Type */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">SelectOption Type</h2>
                <CodeBlock language="tsx">
                    {`interface SelectOption {
  value: string
  label: string
  disabled?: boolean
  group?: string
}`}
                </CodeBlock>
            </section>

            {/* Accessibility */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Accessibility</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Supports keyboard navigation (Arrow keys, Enter, Escape)</li>
                    <li>ARIA attributes for screen readers</li>
                    <li>Focus management and proper labeling</li>
                    <li>Supports disabled state with proper ARIA attributes</li>
                    <li>Multi-select mode with proper announcements</li>
                </ul>
            </section>
        </div>
    )
}
