'use client'

import { Button, Card, Badge } from '@akitectio/aki-ui'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

export default function CardPage() {
  return (
    <PageHeader
      title="Card"
      description="A flexible container component for grouping related content with optional headers, footers, and actions."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Import</h2>
          <CodeBlock language="typescript">
            {`import { Card } from '@akitectio/aki-ui'`}
          </CodeBlock>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Simple Card</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  This is a basic card with some content inside.
                </p>
              </Card>
              <CodeBlock language="typescript">
{`<Card className="p-6">
  <h3 className="text-lg font-semibold mb-2">Simple Card</h3>
  <p className="text-gray-600 dark:text-gray-300">
    This is a basic card with some content inside.
  </p>
</Card>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">With Header and Footer</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <Card className="overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Card Title</h3>
                    <Badge variant="primary">New</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    This card has a header with a title and badge, plus a footer with actions.
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Additional content can go here with proper spacing and typography.
                  </p>
                </div>
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-end space-x-3">
                    <Button variant="outline" size="sm">Cancel</Button>
                    <Button variant="primary" size="sm">Save</Button>
                  </div>
                </div>
              </Card>
              <CodeBlock language="typescript">
{`<Card className="overflow-hidden">
  <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-b">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold">Card Title</h3>
      <Badge variant="primary">New</Badge>
    </div>
  </div>
  <div className="p-6">
    <p className="text-gray-600 dark:text-gray-300 mb-4">
      Card content goes here...
    </p>
  </div>
  <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t">
    <div className="flex justify-end space-x-3">
      <Button variant="outline" size="sm">Cancel</Button>
      <Button variant="primary" size="sm">Save</Button>
    </div>
  </div>
</Card>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Interactive Cards</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Fast Performance</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Optimized for speed and efficiency
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-green-200 dark:hover:border-green-800">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Reliable</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Built with quality and stability in mind
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              <CodeBlock language="typescript">
{`<Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer 
               border-2 border-transparent hover:border-blue-200">
  <div className="flex items-start space-x-3">
    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
      <Icon className="w-5 h-5 text-blue-600" />
    </div>
    <div>
      <h3 className="font-semibold mb-1">Card Title</h3>
      <p className="text-sm text-gray-600">Card description...</p>
    </div>
  </div>
</Card>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Card Layouts</h2>
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Horizontal Layout</h3>
                <Card className="overflow-hidden">
                  <div className="flex">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 flex-shrink-0"></div>
                    <div className="p-4 flex-1">
                      <h4 className="font-semibold mb-1">Product Name</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        Brief product description here
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-lg">$99</span>
                        <Button size="sm">Add to Cart</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Grid Layout</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="p-4 text-center">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <span className="font-bold text-blue-600 dark:text-blue-400">{i}</span>
                      </div>
                      <h4 className="font-semibold mb-2">Step {i}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Description for step {i}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
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
                    <td className="py-3 font-mono text-sm">className</td>
                    <td className="py-3 text-sm">string</td>
                    <td className="py-3 text-sm">-</td>
                    <td className="py-3 text-sm">Additional CSS classes</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">children</td>
                    <td className="py-3 text-sm">ReactNode</td>
                    <td className="py-3 text-sm">-</td>
                    <td className="py-3 text-sm">Card content</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">...props</td>
                    <td className="py-3 text-sm">HTMLDivElement</td>
                    <td className="py-3 text-sm">-</td>
                    <td className="py-3 text-sm">All standard div props</td>
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
                <li>• Use cards to group related information together</li>
                <li>• Keep card content scannable with clear hierarchy</li>
                <li>• Use consistent spacing and padding</li>
                <li>• Consider hover states for interactive cards</li>
                <li>• Use semantic HTML structure within cards</li>
              </ul>
              
              <h3 className="font-semibold mt-6">Don'ts</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Don't nest cards too deeply</li>
                <li>• Avoid overcrowding cards with too much content</li>
                <li>• Don't use cards for single pieces of text</li>
                <li>• Avoid inconsistent spacing between card elements</li>
              </ul>
            </div>
          </Card>
        </section>
      </div>
    </PageHeader>
  )
}
