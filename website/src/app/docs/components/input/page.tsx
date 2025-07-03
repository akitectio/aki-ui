'use client'

import { useState } from 'react'
import { Input, Card, Button, Badge } from '@/components/client-components'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

export default function InputPage() {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')

  const handleValidation = (value: string) => {
    if (!value) {
      setError('This field is required')
    } else if (value.length < 3) {
      setError('Minimum 3 characters required')
    } else {
      setError('')
    }
  }

  return (
    <PageHeader
      title="Input"
      description="A flexible input component for text, email, password, and other input types with validation support."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Import</h2>
          <CodeBlock language="typescript">
            {`import { Input } from '@/components/client-components'`}
          </CodeBlock>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="space-y-3">
                <Input placeholder="Default input" />
                <Input placeholder="Email input" type="email" />
                <Input placeholder="Password input" type="password" />
                <Input placeholder="Search input" type="search" />
              </div>
              <CodeBlock language="typescript">
{`<Input placeholder="Default input" />
<Input placeholder="Email input" type="email" />
<Input placeholder="Password input" type="password" />
<Input placeholder="Search input" type="search" />`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Sizes</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="space-y-3">
                <Input placeholder="Small input" size="sm" />
                <Input placeholder="Medium input" size="md" />
                <Input placeholder="Large input" size="lg" />
              </div>
              <CodeBlock language="typescript">
{`<Input placeholder="Small input" size="sm" />
<Input placeholder="Medium input" size="md" />
<Input placeholder="Large input" size="lg" />`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">States</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="space-y-3">
                <Input placeholder="Normal state" />
                <Input placeholder="Disabled state" disabled />
                <Input placeholder="Required field" required />
                <Input placeholder="Read only" readOnly value="Read only value" />
              </div>
              <CodeBlock language="typescript">
{`<Input placeholder="Normal state" />
<Input placeholder="Disabled state" disabled />
<Input placeholder="Required field" required />
<Input placeholder="Read only" readOnly value="Read only value" />`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">With Icons</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="relative">
                  <Input placeholder="Search..." className="pl-10" />
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="relative">
                  <Input placeholder="Enter email" type="email" className="pr-10" />
                  <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
              </div>
              <CodeBlock language="typescript">
{`// With left icon
<div className="relative">
  <Input placeholder="Search..." className="pl-10" />
  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
</div>

// With right icon
<div className="relative">
  <Input placeholder="Enter email" type="email" className="pr-10" />
  <EmailIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
</div>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Validation</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="space-y-3">
                <div>
                  <Input 
                    placeholder="Enter username (min 3 characters)"
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value)
                      handleValidation(e.target.value)
                    }}
                    className={error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-1">{error}</p>
                  )}
                </div>
                <Input 
                  placeholder="Success state" 
                  className="border-green-500 focus:border-green-500 focus:ring-green-500" 
                />
              </div>
              <CodeBlock language="typescript">
{`const [value, setValue] = useState('')
const [error, setError] = useState('')

const handleChange = (e) => {
  setValue(e.target.value)
  if (!e.target.value) {
    setError('This field is required')
  } else {
    setError('')
  }
}

return (
  <div>
    <Input 
      value={value}
      onChange={handleChange}
      className={error ? 'border-red-500 focus:border-red-500' : ''}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
)`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Form Integration</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <Input placeholder="Enter your full name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="Enter your email" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <Input type="password" placeholder="Enter your password" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Bio</label>
                  <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                    placeholder="Tell us about yourself"
                  />
                </div>
                <Button type="submit">Submit</Button>
              </form>
              <CodeBlock language="typescript">
{`<form className="space-y-4">
  <div>
    <label className="block text-sm font-medium mb-2">Full Name</label>
    <Input placeholder="Enter your full name" required />
  </div>
  <div>
    <label className="block text-sm font-medium mb-2">Email</label>
    <Input type="email" placeholder="Enter your email" required />
  </div>
  <div>
    <label className="block text-sm font-medium mb-2">Password</label>
    <Input type="password" placeholder="Enter your password" required />
  </div>
  <Button type="submit">Submit</Button>
</form>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>
          <Card className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="pb-3 font-medium">Prop</th>
                    <th className="pb-3 font-medium">Type</th>
                    <th className="pb-3 font-medium">Default</th>
                    <th className="pb-3 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">size</td>
                    <td className="py-3 text-sm">'sm' | 'md' | 'lg'</td>
                    <td className="py-3 text-sm">'md'</td>
                    <td className="py-3 text-sm">Input size</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">type</td>
                    <td className="py-3 text-sm">string</td>
                    <td className="py-3 text-sm">'text'</td>
                    <td className="py-3 text-sm">HTML input type</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">placeholder</td>
                    <td className="py-3 text-sm">string</td>
                    <td className="py-3 text-sm">-</td>
                    <td className="py-3 text-sm">Placeholder text</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">disabled</td>
                    <td className="py-3 text-sm">boolean</td>
                    <td className="py-3 text-sm">false</td>
                    <td className="py-3 text-sm">Disable the input</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">required</td>
                    <td className="py-3 text-sm">boolean</td>
                    <td className="py-3 text-sm">false</td>
                    <td className="py-3 text-sm">Mark as required</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">className</td>
                    <td className="py-3 text-sm">string</td>
                    <td className="py-3 text-sm">-</td>
                    <td className="py-3 text-sm">Additional CSS classes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Accessibility</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                The Input component follows WAI-ARIA guidelines:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Supports keyboard navigation and focus management</li>
                <li>• Proper labeling with <code>aria-label</code> or associated labels</li>
                <li>• Screen reader compatible with appropriate roles</li>
                <li>• Error states announced to assistive technologies</li>
                <li>• Required fields properly indicated</li>
                <li>• Supports <code>aria-describedby</code> for help text</li>
              </ul>
            </div>
          </Card>
        </section>
      </div>
    </PageHeader>
  )
}
