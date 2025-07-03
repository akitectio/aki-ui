'use client'

import { Badge, Card, Button } from '@/components/client-components'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

export default function BadgePage() {
  return (
    <PageHeader
      title="Badge"
      description="Small status indicators and labels for highlighting important information or categorizing content."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Import</h2>
          <CodeBlock language="typescript">
            {`import { Badge } from '@/components/client-components'`}
          </CodeBlock>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
              </div>
              <CodeBlock language="typescript">
{`<Badge>Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Sizes</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Badge small variant="primary">Small</Badge>
                <Badge variant="primary">Default</Badge>
                <Badge variant="primary" className="text-sm px-3 py-1">Large</Badge>
              </div>
              <CodeBlock language="typescript">
{`<Badge small variant="primary">Small</Badge>
<Badge variant="primary">Default</Badge>
<Badge variant="primary" className="text-sm px-3 py-1">Large</Badge>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">With Icons</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Badge variant="success" className="inline-flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Verified
                </Badge>
                <Badge variant="warning" className="inline-flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Pending
                </Badge>
                <Badge variant="error" className="inline-flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Failed
                </Badge>
              </div>
              <CodeBlock language="typescript">
{`<Badge variant="success" className="inline-flex items-center gap-1">
  <CheckIcon className="w-3 h-3" />
  Verified
</Badge>
<Badge variant="warning" className="inline-flex items-center gap-1">
  <ExclamationIcon className="w-3 h-3" />
  Pending
</Badge>
<Badge variant="error" className="inline-flex items-center gap-1">
  <XIcon className="w-3 h-3" />
  Failed
</Badge>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Status Indicators</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span>Order #12345</span>
                    <Badge variant="success">Delivered</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span>Order #12346</span>
                    <Badge variant="warning">Processing</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span>Order #12347</span>
                    <Badge variant="error">Cancelled</Badge>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Category Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="primary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="primary">Next.js</Badge>
                  <Badge variant="secondary">Tailwind</Badge>
                  <Badge variant="primary">Design System</Badge>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Notification Counts</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Button variant="outline" className="relative">
                      Messages
                      <Badge 
                        size="sm" 
                        variant="error" 
                        className="absolute -top-2 -right-2 min-w-[20px] h-5 rounded-full flex items-center justify-center"
                      >
                        3
                      </Badge>
                    </Button>
                    <Button variant="outline" className="relative">
                      Notifications
                      <Badge 
                        size="sm" 
                        variant="warning" 
                        className="absolute -top-2 -right-2 min-w-[20px] h-5 rounded-full flex items-center justify-center"
                      >
                        12
                      </Badge>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Dismissible Badges</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Badge variant="primary" className="inline-flex items-center gap-1">
                  Frontend
                  <button className="ml-1 hover:bg-blue-700 rounded-full p-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </Badge>
                <Badge variant="secondary" className="inline-flex items-center gap-1">
                  Backend
                  <button className="ml-1 hover:bg-gray-600 rounded-full p-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </Badge>
              </div>
              <CodeBlock language="typescript">
{`<Badge variant="primary" className="inline-flex items-center gap-1">
  Frontend
  <button 
    onClick={() => removeBadge('frontend')}
    className="ml-1 hover:bg-blue-700 rounded-full p-0.5"
  >
    <XIcon className="w-3 h-3" />
  </button>
</Badge>`}
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
                    <td className="py-3 font-mono text-sm">variant</td>
                    <td className="py-3 text-sm">'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'</td>
                    <td className="py-3 text-sm">'default'</td>
                    <td className="py-3 text-sm">Visual style variant</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">size</td>
                    <td className="py-3 text-sm">'sm' | 'md' | 'lg'</td>
                    <td className="py-3 text-sm">'md'</td>
                    <td className="py-3 text-sm">Badge size</td>
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
                    <td className="py-3 text-sm">Badge content</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Do's</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Use consistent color coding across your application</li>
                <li>• Keep badge text short and meaningful</li>
                <li>• Use appropriate variants for different states</li>
                <li>• Consider accessibility when choosing colors</li>
                <li>• Group related badges together</li>
              </ul>
              
              <h3 className="font-semibold mt-6">Don'ts</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Don't use too many different badge variants in one view</li>
                <li>• Avoid long text in badges</li>
                <li>• Don't use badges as primary navigation elements</li>
                <li>• Don't rely solely on color to convey meaning</li>
              </ul>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Accessibility</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                The Badge component is designed with accessibility in mind:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Sufficient color contrast for all variants</li>
                <li>• Screen reader friendly text content</li>
                <li>• Supports <code>aria-label</code> for additional context</li>
                <li>• Interactive badges support keyboard navigation</li>
                <li>• Semantic meaning conveyed through text, not just color</li>
              </ul>
            </div>
          </Card>
        </section>
      </div>
    </PageHeader>
  )
}
