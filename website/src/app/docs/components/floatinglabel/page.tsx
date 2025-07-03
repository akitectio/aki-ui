'use client'

import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

export default function FloatingLabelPage() {
    return (
        <PageHeader
            title="FloatingLabel"
            description="An input component with an animated floating label that moves up and shrinks when focused or has content, providing a clean and modern user experience."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Import</h2>
                    <CodeBlock language="typescript">
                        {`import { FloatingLabel } from '@/components/client-components'`}
                    </CodeBlock>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div className="space-y-4">
                            <div className="relative">
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="floating-example"
                                        className="peer h-10 w-full border-b border-blue-500 bg-transparent pt-4 pb-1.5 px-0 text-sm text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none focus:ring-0 dark:text-white dark:border-blue-400 dark:focus:border-blue-400"
                                        placeholder="Email Address"
                                        defaultValue="john.doe@example.com"
                                    />
                                    <label
                                        htmlFor="floating-example"
                                        className="absolute left-0 top-2 text-xs text-blue-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 dark:text-blue-400 dark:peer-placeholder-shown:text-gray-400 dark:peer-focus:text-blue-400"
                                    >
                                        Email Address
                                    </label>
                                </div>
                            </div>
                            <CodeBlock language="tsx">
                                {`import { FloatingLabel } from '@/components/client-components'

export default function MyForm() {
  return (
    <FloatingLabel 
      label="Email Address"
      placeholder=""
      variant="outline"
      size="md"
      colorScheme="blue"
    />
  )
}`}
                            </CodeBlock>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Variants</h2>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div className="space-y-6">
                            <p className="mb-4">
                                FloatingLabel offers three visual style variants to match your application's design.
                            </p>
                            <div className="grid gap-6 md:grid-cols-3">
                                {/* Outline */}
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold">Outline</h3>
                                    <div className="relative pt-2">
                                        <input
                                            type="text"
                                            id="outline-example"
                                            className="peer h-10 w-full rounded-md border border-gray-300 bg-transparent pt-4 pb-1.5 px-3 text-sm text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:text-white dark:border-gray-600 dark:focus:border-blue-400 dark:focus:ring-blue-400"
                                            placeholder="First Name"
                                        />
                                        <label
                                            htmlFor="outline-example"
                                            className="absolute left-3 top-1 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 dark:text-gray-400 dark:peer-focus:text-blue-400"
                                        >
                                            First Name
                                        </label>
                                    </div>
                                </div>
                                {/* Filled */}
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold">Filled</h3>
                                    <div className="relative pt-2">
                                        <input
                                            type="text"
                                            id="filled-example"
                                            className="peer h-10 w-full rounded-md border-0 bg-gray-100 pt-4 pb-1.5 px-3 text-sm text-gray-900 placeholder-transparent focus:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:focus:bg-gray-800 dark:focus:ring-blue-400"
                                            placeholder="Last Name"
                                        />
                                        <label
                                            htmlFor="filled-example"
                                            className="absolute left-3 top-1 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 dark:text-gray-400 dark:peer-focus:text-blue-400"
                                        >
                                            Last Name
                                        </label>
                                    </div>
                                </div>
                                {/* Standard */}
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold">Standard</h3>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="standard-example"
                                            className="peer h-10 w-full border-b border-gray-300 bg-transparent pt-4 pb-1.5 px-0 text-sm text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none focus:ring-0 dark:text-white dark:border-gray-600 dark:focus:border-blue-400"
                                            placeholder="Phone Number"
                                        />
                                        <label
                                            htmlFor="standard-example"
                                            className="absolute left-0 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 dark:text-gray-400 dark:peer-focus:text-blue-400"
                                        >
                                            Phone Number
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <CodeBlock language="tsx">
                                {`// Outline variant
<FloatingLabel label="First Name" variant="outline" />

// Filled variant
<FloatingLabel label="Last Name" variant="filled" />

// Standard variant (underline)
<FloatingLabel label="Phone Number" variant="standard" />`}
                            </CodeBlock>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Sizes</h2>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div className="space-y-6">
                            <p className="mb-4">
                                FloatingLabel supports three sizes to accommodate different design needs.
                            </p>
                            <div className="grid gap-6 md:grid-cols-3">
                                {/* Small */}
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold">Small</h3>
                                    <div className="relative pt-2">
                                        <input
                                            type="text"
                                            id="small-example"
                                            className="peer h-8 w-full rounded-md border border-gray-300 bg-transparent pt-3 pb-1 px-2 text-xs text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:text-white dark:border-gray-600 dark:focus:border-blue-400 dark:focus:ring-blue-400"
                                            placeholder="Small Input"
                                        />
                                        <label
                                            htmlFor="small-example"
                                            className="absolute left-2 top-0 text-[10px] text-gray-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2.5 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-blue-600 dark:text-gray-400 dark:peer-focus:text-blue-400"
                                        >
                                            Small Input
                                        </label>
                                    </div>
                                </div>
                                {/* Medium */}
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold">Medium</h3>
                                    <div className="relative pt-2">
                                        <input
                                            type="text"
                                            id="medium-example"
                                            className="peer h-10 w-full rounded-md border border-gray-300 bg-transparent pt-4 pb-1.5 px-3 text-sm text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:text-white dark:border-gray-600 dark:focus:border-blue-400 dark:focus:ring-blue-400"
                                            placeholder="Medium Input"
                                        />
                                        <label
                                            htmlFor="medium-example"
                                            className="absolute left-3 top-1 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 dark:text-gray-400 dark:peer-focus:text-blue-400"
                                        >
                                            Medium Input
                                        </label>
                                    </div>
                                </div>
                                {/* Large */}
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold">Large</h3>
                                    <div className="relative pt-2">
                                        <input
                                            type="text"
                                            id="large-example"
                                            className="peer h-12 w-full rounded-md border border-gray-300 bg-transparent pt-5 pb-2 px-3 text-base text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:text-white dark:border-gray-600 dark:focus:border-blue-400 dark:focus:ring-blue-400"
                                            placeholder="Large Input"
                                        />
                                        <label
                                            htmlFor="large-example"
                                            className="absolute left-3 top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600 dark:text-gray-400 dark:peer-focus:text-blue-400"
                                        >
                                            Large Input
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <CodeBlock language="tsx">
                                {`// Small size
<FloatingLabel label="Small Input" size="sm" />

// Medium size (default)
<FloatingLabel label="Medium Input" size="md" />

// Large size
<FloatingLabel label="Large Input" size="lg" />`}
                            </CodeBlock>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Input States</h2>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div className="space-y-6">
                            <p className="mb-4">
                                FloatingLabel supports different states including normal, disabled, read-only, and validation states.
                            </p>
                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Disabled */}
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold">Disabled</h3>
                                    <div className="relative pt-2">
                                        <input
                                            type="text"
                                            id="disabled-example"
                                            className="peer h-10 w-full rounded-md border border-gray-200 bg-gray-100 pt-4 pb-1.5 px-3 text-sm text-gray-400 placeholder-transparent focus:outline-none dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500"
                                            placeholder="Disabled Input"
                                            defaultValue="Cannot edit this"
                                            disabled
                                        />
                                        <label
                                            htmlFor="disabled-example"
                                            className="absolute left-3 top-1 text-xs text-gray-400 dark:text-gray-500"
                                        >
                                            Disabled Input
                                        </label>
                                    </div>
                                </div>
                                {/* With Error */}
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold">With Error</h3>
                                    <div className="relative pt-2">
                                        <input
                                            type="text"
                                            id="error-example"
                                            className="peer h-10 w-full rounded-md border border-red-500 bg-transparent pt-4 pb-1.5 px-3 text-sm text-gray-900 placeholder-transparent focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 dark:text-white dark:border-red-500 dark:focus:border-red-500 dark:focus:ring-red-500"
                                            placeholder="Invalid Input"
                                            defaultValue="invalid@"
                                        />
                                        <label
                                            htmlFor="error-example"
                                            className="absolute left-3 top-1 text-xs text-red-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-red-500 peer-placeholder-shown:top-3.5 peer-focus:top-1 peer-focus:text-xs peer-focus:text-red-500 dark:text-red-400 dark:peer-focus:text-red-400"
                                        >
                                            Invalid Input
                                        </label>
                                        <p className="mt-1 text-xs text-red-500 dark:text-red-400">This field is required</p>
                                    </div>
                                </div>
                            </div>
                            <CodeBlock language="tsx">
                                {`// Disabled state
<FloatingLabel label="Disabled Input" disabled />

// Error state
<FloatingLabel 
  label="Invalid Input" 
  error="This field is required"
  variant="outline"
/>`}
                            </CodeBlock>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">API Reference</h2>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-3">Props</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse border border-gray-200 dark:border-gray-700">
                                        <thead>
                                            <tr className="bg-gray-50 dark:bg-gray-800">
                                                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">Prop</th>
                                                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">Type</th>
                                                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">Default</th>
                                                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">label</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">string</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">-</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">The floating label text</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">variant</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">{'\'outline\' | \'filled\' | \'standard\''}</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">{'\'outline\''}</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Visual style variant</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">size</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">{'\'sm\' | \'md\' | \'lg\''}</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">{'\'md\''}</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Size of the input</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">placeholder</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">string</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">-</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Placeholder text</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">disabled</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">boolean</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">false</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Whether the input is disabled</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">error</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">string</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">-</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Error message to display</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">colorScheme</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">string</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">{'\'blue\''}</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Color scheme for the input</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">className</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">string</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">-</td>
                                                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Additional CSS class for the input</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PageHeader>
    )
}
