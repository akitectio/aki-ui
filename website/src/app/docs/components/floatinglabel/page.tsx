'use client'

import { useState } from 'react'
import { FloatingLabel, Card } from '@akitectio/aki-ui'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

export default function FloatingLabelPage() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    return (
        <PageHeader
            title="FloatingLabel"
            description="An input component with an animated floating label that moves up and shrinks when focused or has content."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Import</h2>
                    <CodeBlock language="typescript">
                        {`import { FloatingLabel } from '@akitectio/aki-ui'`}
                    </CodeBlock>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
                    <Card className="p-6">
                        <div className="space-y-6">
                            <div className="max-w-md">
                                <FloatingLabel
                                    label="Email Address"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                />
                            </div>
                            <CodeBlock language="tsx">
                                {`import { FloatingLabel } from '@akitectio/aki-ui'

export default function MyForm() {
  const [email, setEmail] = useState('')

  return (
    <FloatingLabel 
      label="Email Address"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email"
    />
  )
}`}
                            </CodeBlock>
                        </div>
                    </Card>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Variants</h2>
                    <Card className="p-6">
                        <div className="space-y-6">
                            <p className="text-gray-600 dark:text-gray-300">
                                FloatingLabel supports multiple visual style variants.
                            </p>
                            <div className="grid gap-6 md:grid-cols-3">
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Outline</h3>
                                    <FloatingLabel
                                        label="First Name"
                                        variant="outline"
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filled</h3>
                                    <FloatingLabel
                                        label="Last Name"
                                        variant="filled"
                                        placeholder="Enter your last name"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Standard</h3>
                                    <FloatingLabel
                                        label="Phone Number"
                                        variant="standard"
                                        placeholder="Enter your phone"
                                    />
                                </div>
                            </div>
                            <CodeBlock language="tsx">
                                {`// Different variants
<FloatingLabel label="First Name" variant="outline" />
<FloatingLabel label="Last Name" variant="filled" />
<FloatingLabel label="Phone Number" variant="standard" />`}
                            </CodeBlock>
                        </div>
                    </Card>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Sizes</h2>
                    <Card className="p-6">
                        <div className="space-y-6">
                            <p className="text-gray-600 dark:text-gray-300">
                                FloatingLabel supports three sizes to accommodate different design needs.
                            </p>
                            <div className="grid gap-6 md:grid-cols-3">
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Small</h3>
                                    <FloatingLabel
                                        label="Small Input"
                                        size="sm"
                                        placeholder="Small size"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Medium</h3>
                                    <FloatingLabel
                                        label="Medium Input"
                                        size="md"
                                        placeholder="Medium size"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Large</h3>
                                    <FloatingLabel
                                        label="Large Input"
                                        size="lg"
                                        placeholder="Large size"
                                    />
                                </div>
                            </div>
                            <CodeBlock language="tsx">
                                {`// Different sizes
<FloatingLabel label="Small Input" size="sm" />
<FloatingLabel label="Medium Input" size="md" />
<FloatingLabel label="Large Input" size="lg" />`}
                            </CodeBlock>
                        </div>
                    </Card>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">States</h2>
                    <Card className="p-6">
                        <div className="space-y-6">
                            <p className="text-gray-600 dark:text-gray-300">
                                FloatingLabel supports various states including disabled and error states.
                            </p>
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Disabled</h3>
                                    <FloatingLabel
                                        label="Disabled Input"
                                        value="Cannot edit this"
                                        isDisabled
                                        placeholder="This input is disabled"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Error</h3>
                                    <FloatingLabel
                                        label="Invalid Input"
                                        value="invalid@"
                                        isInvalid
                                        errorMessage="Please enter a valid email address"
                                        placeholder="Enter valid email"
                                    />
                                </div>
                            </div>
                            <CodeBlock language="tsx">
                                {`// Different states
<FloatingLabel 
  label="Disabled Input" 
  value="Cannot edit this"
  isDisabled
  placeholder="This input is disabled"
/>

<FloatingLabel 
  label="Invalid Input" 
  value="invalid@"
  isInvalid
  errorMessage="Please enter a valid email address"
  placeholder="Enter valid email"
/>`}
                            </CodeBlock>
                        </div>
                    </Card>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Color Schemes</h2>
                    <Card className="p-6">
                        <div className="space-y-6">
                            <p className="text-gray-600 dark:text-gray-300">
                                Customize the color scheme of the floating label and focus states.
                            </p>
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Blue</h3>
                                    <FloatingLabel
                                        label="Blue Theme"
                                        colorScheme="blue"
                                        placeholder="Blue focus color"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Green</h3>
                                    <FloatingLabel
                                        label="Green Theme"
                                        colorScheme="green"
                                        placeholder="Green focus color"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Red</h3>
                                    <FloatingLabel
                                        label="Red Theme"
                                        colorScheme="red"
                                        placeholder="Red focus color"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Purple</h3>
                                    <FloatingLabel
                                        label="Purple Theme"
                                        colorScheme="purple"
                                        placeholder="Purple focus color"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Gray</h3>
                                    <FloatingLabel
                                        label="Gray Theme"
                                        colorScheme="gray"
                                        placeholder="Gray focus color"
                                    />
                                </div>
                            </div>
                            <CodeBlock language="tsx">
                                {`// Different color schemes
<FloatingLabel label="Blue Theme" colorScheme="blue" />
<FloatingLabel label="Green Theme" colorScheme="green" />
<FloatingLabel label="Red Theme" colorScheme="red" />
<FloatingLabel label="Purple Theme" colorScheme="purple" />
<FloatingLabel label="Gray Theme" colorScheme="gray" />`}
                            </CodeBlock>
                        </div>
                    </Card>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">API Reference</h2>
                    <Card className="p-6">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Name</th>
                                        <th scope="col" className="px-6 py-3">Type</th>
                                        <th scope="col" className="px-6 py-3">Default</th>
                                        <th scope="col" className="px-6 py-3">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-4 font-medium text-blue-600">label</td>
                                        <td className="px-6 py-4 font-mono text-sm">string</td>
                                        <td className="px-6 py-4">-</td>
                                        <td className="px-6 py-4">The floating label text</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b dark:bg-gray-700 dark:border-gray-600">
                                        <td className="px-6 py-4 font-medium text-blue-600">variant</td>
                                        <td className="px-6 py-4 font-mono text-sm">'outline' | 'filled' | 'standard'</td>
                                        <td className="px-6 py-4">'outline'</td>
                                        <td className="px-6 py-4">Input variant style</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-4 font-medium text-blue-600">size</td>
                                        <td className="px-6 py-4 font-mono text-sm">'sm' | 'md' | 'lg'</td>
                                        <td className="px-6 py-4">'md'</td>
                                        <td className="px-6 py-4">Size of the input</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b dark:bg-gray-700 dark:border-gray-600">
                                        <td className="px-6 py-4 font-medium text-blue-600">colorScheme</td>
                                        <td className="px-6 py-4 font-mono text-sm">'blue' | 'green' | 'red' | 'purple' | 'gray'</td>
                                        <td className="px-6 py-4">'blue'</td>
                                        <td className="px-6 py-4">Color scheme for focus states</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-4 font-medium text-blue-600">isInvalid</td>
                                        <td className="px-6 py-4 font-mono text-sm">boolean</td>
                                        <td className="px-6 py-4">false</td>
                                        <td className="px-6 py-4">Whether the input is invalid</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b dark:bg-gray-700 dark:border-gray-600">
                                        <td className="px-6 py-4 font-medium text-blue-600">isDisabled</td>
                                        <td className="px-6 py-4 font-mono text-sm">boolean</td>
                                        <td className="px-6 py-4">false</td>
                                        <td className="px-6 py-4">Whether the input is disabled</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-4 font-medium text-blue-600">isReadOnly</td>
                                        <td className="px-6 py-4 font-mono text-sm">boolean</td>
                                        <td className="px-6 py-4">false</td>
                                        <td className="px-6 py-4">Whether the input is read-only</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b dark:bg-gray-700 dark:border-gray-600">
                                        <td className="px-6 py-4 font-medium text-blue-600">errorMessage</td>
                                        <td className="px-6 py-4 font-mono text-sm">string</td>
                                        <td className="px-6 py-4">-</td>
                                        <td className="px-6 py-4">Error message to display</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-4 font-medium text-blue-600">helperText</td>
                                        <td className="px-6 py-4 font-mono text-sm">string</td>
                                        <td className="px-6 py-4">-</td>
                                        <td className="px-6 py-4">Helper text to display below input</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b dark:bg-gray-700 dark:border-gray-600">
                                        <td className="px-6 py-4 font-medium text-blue-600">fullWidth</td>
                                        <td className="px-6 py-4 font-mono text-sm">boolean</td>
                                        <td className="px-6 py-4">false</td>
                                        <td className="px-6 py-4">Expand to fill container width</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </section>
            </div>
        </PageHeader>
    )
}
