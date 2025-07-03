'use client'

import { useState } from 'react'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'
import { Button, Card } from '@akitectio/aki-ui'

export default function ButtonPage() {
  const [loading, setLoading] = useState(false)

  const handleLoadingClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <PageHeader
      title="Button"
      description="A versatile button component with multiple variants, sizes, and states."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Import</h2>
          <CodeBlock language="typescript">
            {`import { Button } from '@akitectio/aki-ui'`}
          </CodeBlock>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button>Default Button</Button>
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
              </div>
              <CodeBlock language="typescript">
                {`<Button>Default Button</Button>
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Sizes</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
              <CodeBlock language="typescript">
                {`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">States</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button disabled>Disabled</Button>
                <Button loading={loading} onClick={handleLoadingClick}>
                  {loading ? 'Loading...' : 'Click for Loading'}
                </Button>
              </div>
              <CodeBlock language="typescript">
                {`<Button disabled>Disabled</Button>
<Button loading={isLoading} onClick={handleClick}>
  {isLoading ? 'Loading...' : 'Click for Loading'}
</Button>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">With Icons</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Item
                </Button>
                <Button variant="outline">
                  Download
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </Button>
              </div>
              <CodeBlock language="typescript">
                {`<Button>
  <PlusIcon className="w-4 h-4 mr-2" />
  Add Item
</Button>
<Button variant="outline">
  Download
  <DownloadIcon className="w-4 h-4 ml-2" />
</Button>`}
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
                <tbody className="space-y-2">
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">variant</td>
                    <td className="py-3 text-sm">'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'</td>
                    <td className="py-3 text-sm">'default'</td>
                    <td className="py-3 text-sm">Visual style variant</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">size</td>
                    <td className="py-3 text-sm">'sm' | 'md' | 'lg'</td>
                    <td className="py-3 text-sm">'md'</td>
                    <td className="py-3 text-sm">Button size</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">loading</td>
                    <td className="py-3 text-sm">boolean</td>
                    <td className="py-3 text-sm">false</td>
                    <td className="py-3 text-sm">Show loading state</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">disabled</td>
                    <td className="py-3 text-sm">boolean</td>
                    <td className="py-3 text-sm">false</td>
                    <td className="py-3 text-sm">Disable the button</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">className</td>
                    <td className="py-3 text-sm">string</td>
                    <td className="py-3 text-sm">-</td>
                    <td className="py-3 text-sm">Additional CSS classes</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">children</td>
                    <td className="py-3 text-sm">ReactNode</td>
                    <td className="py-3 text-sm">-</td>
                    <td className="py-3 text-sm">Button content</td>
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
                The Button component follows WAI-ARIA guidelines:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Supports keyboard navigation with Enter and Space keys</li>
                <li>• Proper focus management and visual indicators</li>
                <li>• Screen reader friendly with proper role attributes</li>
                <li>• Loading state announced to assistive technologies</li>
                <li>• Disabled state properly communicated</li>
              </ul>
            </div>
          </Card>
        </section>
      </div>
    </PageHeader>
  )
}
