'use client'

import { Navbar } from '@/components/client-components'
import { PageHeader } from '@/components/PageHeader'
import { CodeBlock } from '@/components/CodeBlock'

export default function NavbarPage() {
    return (
        <PageHeader
            title="Navbar"
            description="A responsive navigation bar component with brand, items, and mobile toggle functionality."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Import</h2>
                    <CodeBlock language="typescript">
                        {`import { Navbar } from '@/components/client-components'`}
                    </CodeBlock>
                </section>

                {/* Basic Usage */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border mb-4">
                        {/* @ts-ignore */}
                        <Navbar>
                            {/* @ts-ignore */}
                            <Navbar.Brand href="#">
                                <div className="flex items-center space-x-2">
                                    <svg className="h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                    <span className="font-bold text-xl">Aki UI</span>
                                </div>
                            </Navbar.Brand>
                            {/* @ts-ignore */}
                            <Navbar.Item href="#" active>Home</Navbar.Item>
                            {/* @ts-ignore */}
                            <Navbar.Item href="#">Features</Navbar.Item>
                            {/* @ts-ignore */}
                            <Navbar.Item href="#">Pricing</Navbar.Item>
                            {/* @ts-ignore */}
                            <Navbar.Item href="#">About</Navbar.Item>
                        </Navbar>
                    </div>
                    <CodeBlock language="tsx">
                        {`<Navbar>
  <Navbar.Brand href="#">
    <div className="flex items-center space-x-2">
      <svg className="h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
      <span className="font-bold text-xl">Aki UI</span>
    </div>
  </Navbar.Brand>
  <Navbar.Item href="#" active>Home</Navbar.Item>
  <Navbar.Item href="#">Features</Navbar.Item>
  <Navbar.Item href="#">Pricing</Navbar.Item>
  <Navbar.Item href="#">About</Navbar.Item>
</Navbar>`}
                    </CodeBlock>
                </section>

                {/* Variants */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Variants</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Primary</h3>
                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border mb-4">
                                {/* @ts-ignore */}
                                <Navbar variant="primary">
                                    {/* @ts-ignore */}
                                    <Navbar.Brand href="#">
                                        <span className="font-bold text-xl">Aki UI</span>
                                    </Navbar.Brand>
                                    {/* @ts-ignore */}
                                    <Navbar.Item href="#" active>Home</Navbar.Item>
                                    {/* @ts-ignore */}
                                    <Navbar.Item href="#">Products</Navbar.Item>
                                    {/* @ts-ignore */}
                                    <Navbar.Item href="#">Services</Navbar.Item>
                                </Navbar>
                            </div>
                            <CodeBlock language="tsx">
                                {`<Navbar variant="primary">
  <Navbar.Brand href="#">
    <span className="font-bold text-xl">Aki UI</span>
  </Navbar.Brand>
  <Navbar.Item href="#" active>Home</Navbar.Item>
  <Navbar.Item href="#">Products</Navbar.Item>
  <Navbar.Item href="#">Services</Navbar.Item>
</Navbar>`}
                            </CodeBlock>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3">Dark</h3>
                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border mb-4">
                                {/* @ts-ignore */}
                                <Navbar variant="dark">
                                    {/* @ts-ignore */}
                                    <Navbar.Brand href="#">
                                        <span className="font-bold text-xl">Aki UI</span>
                                    </Navbar.Brand>
                                    {/* @ts-ignore */}
                                    <Navbar.Item href="#" active>Dashboard</Navbar.Item>
                                    {/* @ts-ignore */}
                                    <Navbar.Item href="#">Analytics</Navbar.Item>
                                    {/* @ts-ignore */}
                                    <Navbar.Item href="#">Settings</Navbar.Item>
                                </Navbar>
                            </div>
                            <CodeBlock language="tsx">
                                {`<Navbar variant="dark">
  <Navbar.Brand href="#">
    <span className="font-bold text-xl">Aki UI</span>
  </Navbar.Brand>
  <Navbar.Item href="#" active>Dashboard</Navbar.Item>
  <Navbar.Item href="#">Analytics</Navbar.Item>
  <Navbar.Item href="#">Settings</Navbar.Item>
</Navbar>`}
                            </CodeBlock>
                        </div>
                    </div>
                </section>

                {/* Positioning */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Positioning</h2>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                        The Navbar component supports various positioning options:
                    </p>
                    <CodeBlock language="tsx">
                        {`// Static (default)
<Navbar position="static">
  {/* Navbar content */}
</Navbar>

// Fixed to top
<Navbar position="fixed-top">
  {/* Navbar content */}
</Navbar>

// Fixed to bottom
<Navbar position="fixed-bottom">
  {/* Navbar content */}
</Navbar>

// Sticky top
<Navbar position="sticky-top">
  {/* Navbar content */}
</Navbar>`}
                    </CodeBlock>
                </section>

                {/* API Reference */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">API Reference</h2>
                    <div className="p-6 bg-white dark:bg-gray-800 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-4">Navbar Props</h3>
                        <div className="overflow-x-auto mb-6">
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
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">variant</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">'primary' | 'secondary' | 'light' | 'dark' | 'transparent'</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">'light'</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Visual style variant of the navbar</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">position</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">'static' | 'fixed-top' | 'fixed-bottom' | 'sticky-top'</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">'static'</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Positioning behavior of the navbar</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">expand</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">boolean | 'sm' | 'md' | 'lg' | 'xl'</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">true</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">When to expand on larger screens</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">toggleable</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">boolean</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">true</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Whether to include a toggle button for mobile</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">toggleContent</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">React.ReactNode</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Custom toggle button content</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">onToggle</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">{'() => void'}</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Callback when toggle button is clicked</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-semibold mb-4">Navbar.Brand Props</h3>
                        <div className="overflow-x-auto mb-6">
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
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">children</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">React.ReactNode</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Brand content (logo, text, or custom element)</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">href</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">string</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">URL to navigate to when brand is clicked</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">onClick</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">{'(event: MouseEvent) => void'}</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Custom click handler for brand</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-semibold mb-4">Navbar.Item Props</h3>
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
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">children</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">React.ReactNode</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Item content</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">href</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">string</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">URL to navigate to</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">active</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">boolean</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">false</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Whether the item is active/current</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">disabled</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">boolean</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">false</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Whether the item is disabled</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">onClick</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">{'(event: MouseEvent) => void'}</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Custom click handler</td>
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
                            <li>✅ Full keyboard navigation support</li>
                            <li>✅ ARIA attributes for mobile toggle</li>
                            <li>✅ Escape key closes mobile menu</li>
                            <li>✅ Screen reader compatible</li>
                            <li>✅ Focus management for navigation items</li>
                        </ul>
                    </div>
                </section>
            </div>
        </PageHeader>
    )
}
