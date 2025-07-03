'use client'

import { useState } from 'react'
import { CodeBlock } from '@/components/CodeBlock'
import { MagnifyingGlassIcon, UserIcon, CurrencyDollarIcon, AtSymbolIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

export default function InputGroupPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [amount, setAmount] = useState('')

    return (
        <div className="space-y-8">
            {/* Introduction */}
            <section>
                <h1 className="text-3xl font-bold mb-4">InputGroup</h1>
                <p className="text-gray-600 mb-6">
                    A container for grouping input elements with addons and icons.
                </p>
            </section>

            {/* Import */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Import</h2>
                <CodeBlock language="tsx">
                    {`import { 
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputLeftElement,
  InputRightElement 
} from '@/components/client-components'

// TypeScript types
import type { 
  InputGroupProps,
  InputAddonProps,
  InputElementProps 
} from '@/components/client-components'`}
                </CodeBlock>
            </section>

            {/* Left and Right Addons */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Left and Right Addons</h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-medium mb-4">Text Addons</h3>
                        <div className="space-y-4">
                            {/* Left Addon */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                                        https://
                                    </span>
                                    <input
                                        type="text"
                                        className="flex-1 min-w-0 px-3 py-2 text-sm border border-gray-300 rounded-none rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="example.com"
                                    />
                                </div>
                            </div>

                            {/* Right Addon */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <div className="flex">
                                    <input
                                        type="text"
                                        className="flex-1 min-w-0 px-3 py-2 text-sm border border-gray-300 rounded-none rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="username"
                                    />
                                    <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-50 border border-l-0 border-gray-300 rounded-r-md">
                                        @example.com
                                    </span>
                                </div>
                            </div>

                            {/* Both Addons */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                                        $
                                    </span>
                                    <input
                                        type="number"
                                        className="flex-1 min-w-0 px-3 py-2 text-sm border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="0.00"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                    <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-50 border border-l-0 border-gray-300 rounded-r-md">
                                        USD
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`import { InputGroup, InputLeftAddon, InputRightAddon } from '@/components/client-components'

// Left addon
<InputGroup>
  <InputLeftAddon>https://</InputLeftAddon>
  <Input placeholder="example.com" />
</InputGroup>

// Right addon  
<InputGroup>
  <Input placeholder="username" />
  <InputRightAddon>@example.com</InputRightAddon>
</InputGroup>

// Both addons
<InputGroup>
  <InputLeftAddon>$</InputLeftAddon>
  <Input type="number" placeholder="0.00" />
  <InputRightAddon>USD</InputRightAddon>
</InputGroup>`}
                    </CodeBlock>
                </div>
            </section>

            {/* Left and Right Elements */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Left and Right Elements</h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-medium mb-4">Icon Elements</h3>
                        <div className="space-y-4">
                            {/* Left Element */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Search..."
                                        value={searchValue}
                                        onChange={(e) => setSearchValue(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Right Element */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter username"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <UserIcon className="h-5 w-5 text-gray-400" />
                                    </div>
                                </div>
                            </div>

                            {/* Clickable Right Element */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter password"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="text-gray-400 hover:text-gray-600 focus:outline-none"
                                        >
                                            {showPassword ? (
                                                <EyeSlashIcon className="h-5 w-5" />
                                            ) : (
                                                <EyeIcon className="h-5 w-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Both Elements */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="number"
                                        className="block w-full pl-10 pr-16 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="0.00"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <span className="text-gray-500 text-sm">USD</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`import { 
  InputGroup, 
  InputLeftElement, 
  InputRightElement 
} from '@/components/client-components'
import { MagnifyingGlassIcon, UserIcon, EyeIcon } from '@heroicons/react/24/outline'

// Left element
<InputGroup>
  <InputLeftElement>
    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
  </InputLeftElement>
  <Input placeholder="Search..." />
</InputGroup>

// Right element
<InputGroup>
  <Input placeholder="Enter username" />
  <InputRightElement>
    <UserIcon className="h-5 w-5 text-gray-400" />
  </InputRightElement>
</InputGroup>

// Clickable right element
<InputGroup>
  <Input type="password" placeholder="Enter password" />
  <InputRightElement>
    <button onClick={toggleShowPassword}>
      <EyeIcon className="h-5 w-5 text-gray-400" />
    </button>
  </InputRightElement>
</InputGroup>

// Both elements
<InputGroup>
  <InputLeftElement>
    <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />
  </InputLeftElement>
  <Input type="number" placeholder="0.00" />
  <InputRightElement>
    <span className="text-gray-500 text-sm">USD</span>
  </InputRightElement>
</InputGroup>`}
                    </CodeBlock>
                </div>
            </section>

            {/* Sizes */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-medium mb-4">Different Sizes</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Small</label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-2 text-xs text-gray-500 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                                        $
                                    </span>
                                    <input
                                        type="number"
                                        className="flex-1 min-w-0 px-2 py-1 text-xs border border-gray-300 rounded-none rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="0.00"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Medium (Default)</label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                                        $
                                    </span>
                                    <input
                                        type="number"
                                        className="flex-1 min-w-0 px-3 py-2 text-sm border border-gray-300 rounded-none rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="0.00"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Large</label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-4 text-lg text-gray-500 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                                        $
                                    </span>
                                    <input
                                        type="number"
                                        className="flex-1 min-w-0 px-4 py-3 text-lg border border-gray-300 rounded-none rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="0.00"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`// Different sizes
<InputGroup size="sm">
  <InputLeftAddon>$</InputLeftAddon>
  <Input placeholder="0.00" />
</InputGroup>

<InputGroup size="md">
  <InputLeftAddon>$</InputLeftAddon>
  <Input placeholder="0.00" />
</InputGroup>

<InputGroup size="lg">
  <InputLeftAddon>$</InputLeftAddon>
  <Input placeholder="0.00" />
</InputGroup>`}
                    </CodeBlock>
                </div>
            </section>

            {/* API Reference */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">API Reference</h2>

                <h3 className="text-xl font-medium mb-3">InputGroup Props</h3>
                <div className="overflow-x-auto mb-6">
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
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'sm' | 'md' | 'lg'</td>
                                <td className="border border-gray-300 px-4 py-2">'md'</td>
                                <td className="border border-gray-300 px-4 py-2">Size of the input group</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">variant</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'outline' | 'filled' | 'flushed'</td>
                                <td className="border border-gray-300 px-4 py-2">'outline'</td>
                                <td className="border border-gray-300 px-4 py-2">Visual variant</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">isDisabled</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                                <td className="border border-gray-300 px-4 py-2">false</td>
                                <td className="border border-gray-300 px-4 py-2">Disable the entire input group</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">isInvalid</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                                <td className="border border-gray-300 px-4 py-2">false</td>
                                <td className="border border-gray-300 px-4 py-2">Mark as invalid state</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-xl font-medium mb-3">InputAddon Props</h3>
                <div className="overflow-x-auto mb-6">
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
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">children</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">ReactNode</td>
                                <td className="border border-gray-300 px-4 py-2">-</td>
                                <td className="border border-gray-300 px-4 py-2">Content of the addon</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-xl font-medium mb-3">InputElement Props</h3>
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
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">children</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">ReactNode</td>
                                <td className="border border-gray-300 px-4 py-2">-</td>
                                <td className="border border-gray-300 px-4 py-2">Content of the element (icon, button, etc.)</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">placement</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'left' | 'right'</td>
                                <td className="border border-gray-300 px-4 py-2">-</td>
                                <td className="border border-gray-300 px-4 py-2">Position of the element</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Accessibility */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Accessibility</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Supports proper focus management across input and elements</li>
                    <li>ARIA attributes are properly applied to all parts</li>
                    <li>Screen reader compatible with addon/element descriptions</li>
                    <li>Keyboard navigation works seamlessly</li>
                    <li>Disabled state is properly communicated</li>
                    <li>Invalid state includes appropriate ARIA attributes</li>
                </ul>
            </section>
        </div>
    )
}
