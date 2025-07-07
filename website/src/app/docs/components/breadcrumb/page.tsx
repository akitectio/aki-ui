'use client'

import { Breadcrumb } from '@akitectio/aki-ui'
import { PageHeader } from '@/components/PageHeader'
import { CodeBlock } from '@/components/CodeBlock'

export default function BreadcrumbPage() {
    return (
        <PageHeader
            title="Breadcrumb"
            description="Navigation breadcrumbs that show the hierarchical location of the current page."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Import</h2>
                    <CodeBlock language="typescript">
                        {`import { Breadcrumb } from '@akitectio/aki-ui'`}
                    </CodeBlock>
                </section>

                {/* Basic Usage */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border mb-4">
                        {/* @ts-ignore */}
                        <Breadcrumb>
                            {/* @ts-ignore */}
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            {/* @ts-ignore */}
                            <Breadcrumb.Item href="/docs">Documentation</Breadcrumb.Item>
                            {/* @ts-ignore */}
                            <Breadcrumb.Item href="/docs/components">Components</Breadcrumb.Item>
                            {/* @ts-ignore */}
                            <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <CodeBlock language="tsx">
                        {`<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/docs">Documentation</Breadcrumb.Item>
  <Breadcrumb.Item href="/docs/components">Components</Breadcrumb.Item>
  <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
</Breadcrumb>`}
                    </CodeBlock>
                </section>

                {/* With Icons */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">With Icons</h2>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border mb-4">
                        {/* @ts-ignore */}
                        <Breadcrumb>
                            {/* @ts-ignore */}
                            <Breadcrumb.Item href="/" icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            }>
                                Home
                            </Breadcrumb.Item>
                            {/* @ts-ignore */}
                            <Breadcrumb.Item href="/docs" icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            }>
                                Documentation
                            </Breadcrumb.Item>
                            {/* @ts-ignore */}
                            <Breadcrumb.Item href="/docs/components" icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            }>
                                Components
                            </Breadcrumb.Item>
                            {/* @ts-ignore */}
                            <Breadcrumb.Item active icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                                </svg>
                            }>
                                Breadcrumb
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <CodeBlock language="tsx">
                        {`<Breadcrumb>
  <Breadcrumb.Item href="/" icon={<HomeIcon />}>
    Home
  </Breadcrumb.Item>
  <Breadcrumb.Item href="/docs" icon={<DocumentIcon />}>
    Documentation
  </Breadcrumb.Item>
  <Breadcrumb.Item href="/docs/components" icon={<ComponentIcon />}>
    Components
  </Breadcrumb.Item>
  <Breadcrumb.Item active icon={<BreadcrumbIcon />}>
    Breadcrumb
  </Breadcrumb.Item>
</Breadcrumb>`}
                    </CodeBlock>
                </section>

                {/* Custom Separator */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Custom Separator</h2>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border mb-4">
                        {/* @ts-ignore */}
                        <Breadcrumb separator={
                            <span className="text-blue-500 mx-2">→</span>
                        }>
                            {/* @ts-ignore */}
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            {/* @ts-ignore */}
                            <Breadcrumb.Item href="/docs">Documentation</Breadcrumb.Item>
                            {/* @ts-ignore */}
                            <Breadcrumb.Item href="/docs/components">Components</Breadcrumb.Item>
                            {/* @ts-ignore */}
                            <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <CodeBlock language="tsx">
                        {`<Breadcrumb separator={<span className="text-blue-500 mx-2">→</span>}>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/docs">Documentation</Breadcrumb.Item>
  <Breadcrumb.Item href="/docs/components">Components</Breadcrumb.Item>
  <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
</Breadcrumb>`}
                    </CodeBlock>
                </section>

                {/* Max Items */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Max Items with Collapsed Middle</h2>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border mb-4">
                        {/* @ts-ignore */}
                        <Breadcrumb maxItems={3}>
                            {/* @ts-ignore */}
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            {/* @ts-ignore */}
                            <Breadcrumb.Item href="/docs">Documentation</Breadcrumb.Item>
                            {/* @ts-ignore */}
                            <Breadcrumb.Item href="/docs/components">Components</Breadcrumb.Item>
                            {/* @ts-ignore */}
                            <Breadcrumb.Item href="/docs/components/ui">UI</Breadcrumb.Item>
                            {/* @ts-ignore */}
                            <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <CodeBlock language="tsx">
                        {`<Breadcrumb maxItems={3}>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/docs">Documentation</Breadcrumb.Item>
  <Breadcrumb.Item href="/docs/components">Components</Breadcrumb.Item>
  <Breadcrumb.Item href="/docs/components/ui">UI</Breadcrumb.Item>
  <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
</Breadcrumb>`}
                    </CodeBlock>
                </section>

                {/* Transparent */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Transparent Background</h2>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border mb-4">
                        {/* @ts-ignore */}
                        <Breadcrumb transparent>
                            {/* @ts-ignore */}
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            {/* @ts-ignore */}
                            <Breadcrumb.Item href="/docs">Documentation</Breadcrumb.Item>
                            {/* @ts-ignore */}
                            <Breadcrumb.Item href="/docs/components">Components</Breadcrumb.Item>
                            {/* @ts-ignore */}
                            <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <CodeBlock language="tsx">
                        {`<Breadcrumb transparent>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/docs">Documentation</Breadcrumb.Item>
  <Breadcrumb.Item href="/docs/components">Components</Breadcrumb.Item>
  <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
</Breadcrumb>`}
                    </CodeBlock>
                </section>

                {/* API Reference */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">API Reference</h2>
                    <div className="p-6 bg-white dark:bg-gray-800 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-4">Breadcrumb Props</h3>
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
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">The breadcrumb items</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">separator</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">React.ReactNode</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">'/'</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Custom separator between items</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">maxItems</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">number</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Maximum items to show before collapsing</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">transparent</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">boolean</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">false</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Remove background styling</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-semibold mb-4">Breadcrumb.Item Props</h3>
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
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Content of the breadcrumb item</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">href</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">string</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">URL for the breadcrumb item link</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">active</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">boolean</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">false</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Whether the item is active (current page)</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">icon</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">React.ReactNode</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Icon to display before the text</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">truncate</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">boolean</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">false</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Truncate text if too long</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">onClick</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">(event: MouseEvent) =&gt; void</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Click event handler</td>
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
                            <li>✅ Screen reader compatible with proper ARIA attributes</li>
                            <li>✅ Semantic HTML structure with nav and ol elements</li>
                            <li>✅ Current page indication with aria-current="page"</li>
                            <li>✅ Descriptive aria-label for navigation context</li>
                        </ul>

                        <h3 className="text-lg font-semibold mt-6 mb-3">ARIA Attributes</h3>
                        <ul className="space-y-1">
                            <li><code>aria-label="Breadcrumb"</code> - Identifies the navigation purpose</li>
                            <li><code>aria-current="page"</code> - Indicates the current page item</li>
                            <li><code>role="navigation"</code> - Semantic role for the breadcrumb container</li>
                        </ul>
                    </div>
                </section>
            </div>
        </PageHeader>
    )
}
