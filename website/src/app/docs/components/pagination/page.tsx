'use client'

import { useState } from 'react'
import { Pagination, Card } from '@akitectio/aki-ui'
import { PageHeader } from '@/components/PageHeader'
import { CodeBlock } from '@/components/CodeBlock'

export default function PaginationPage() {
    const [currentPage, setCurrentPage] = useState(1)
    const [tablePage, setTablePage] = useState(1)

    return (
        <PageHeader
            title="Pagination"
            description="Navigate through pages of content with customizable pagination controls."
        >
            <div className="space-y-12">
                {/* Basic Usage */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                        <div className="flex justify-center">
                            <div className="space-y-4">
                                <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
                                    Current page: {currentPage}
                                </p>
                                {/* Interactive pagination demo using aki-ui styling patterns */}
                                <div className="flex items-center justify-center space-x-2">
                                    <button
                                        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                                        className="px-3 py-2 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 transition-colors"
                                        disabled={currentPage === 1}
                                    >
                                        ‹
                                    </button>
                                    {[1, 2, 3, 4, 5].map(page => (
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className={`px-3 py-2 text-sm border rounded transition-colors ${currentPage === page
                                                    ? 'bg-blue-500 text-white border-blue-500'
                                                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => currentPage < 5 && setCurrentPage(currentPage + 1)}
                                        className="px-3 py-2 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 transition-colors"
                                        disabled={currentPage === 5}
                                    >
                                        ›
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CodeBlock
                        language="tsx"
                        code={`import { Pagination } from '@akitectio/aki-ui';

function MyComponent() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      totalPages={10}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    />
  );
}`}
                    />
                </section>

                {/* Sizes */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
                    <div className="bg-gray-50 p-6 rounded-lg border mb-4 space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Small</h3>
                            <div className="flex justify-center">
                                <div className="flex items-center space-x-1">
                                    <button className="px-2 py-1 text-xs border rounded hover:bg-gray-100">‹</button>
                                    <button className="px-2 py-1 text-xs border rounded bg-blue-500 text-white">1</button>
                                    <button className="px-2 py-1 text-xs border rounded hover:bg-gray-100">2</button>
                                    <button className="px-2 py-1 text-xs border rounded hover:bg-gray-100">3</button>
                                    <button className="px-2 py-1 text-xs border rounded hover:bg-gray-100">›</button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Medium (Default)</h3>
                            <div className="flex justify-center">
                                <div className="flex items-center space-x-2">
                                    <button className="px-3 py-2 text-sm border rounded hover:bg-gray-100">‹</button>
                                    <button className="px-3 py-2 text-sm border rounded bg-blue-500 text-white">1</button>
                                    <button className="px-3 py-2 text-sm border rounded hover:bg-gray-100">2</button>
                                    <button className="px-3 py-2 text-sm border rounded hover:bg-gray-100">3</button>
                                    <button className="px-3 py-2 text-sm border rounded hover:bg-gray-100">›</button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Large</h3>
                            <div className="flex justify-center">
                                <div className="flex items-center space-x-2">
                                    <button className="px-4 py-3 text-base border rounded hover:bg-gray-100">‹</button>
                                    <button className="px-4 py-3 text-base border rounded bg-blue-500 text-white">1</button>
                                    <button className="px-4 py-3 text-base border rounded hover:bg-gray-100">2</button>
                                    <button className="px-4 py-3 text-base border rounded hover:bg-gray-100">3</button>
                                    <button className="px-4 py-3 text-base border rounded hover:bg-gray-100">›</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CodeBlock
                        language="tsx"
                        code={`<Pagination size="sm" totalPages={5} currentPage={1} onPageChange={handlePageChange} />
<Pagination size="md" totalPages={5} currentPage={1} onPageChange={handlePageChange} />
<Pagination size="lg" totalPages={5} currentPage={1} onPageChange={handlePageChange} />`}
                    />
                </section>

                {/* Advanced Configuration */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Advanced Configuration</h2>
                    <div className="bg-gray-50 p-6 rounded-lg border mb-4">
                        <div className="flex justify-center">
                            <div className="flex items-center space-x-2">
                                <button className="px-3 py-2 text-sm border rounded hover:bg-gray-100">First</button>
                                <button className="px-3 py-2 text-sm border rounded hover:bg-gray-100">Prev</button>
                                <button className="px-3 py-2 text-sm border rounded hover:bg-gray-100">1</button>
                                <button className="px-3 py-2 text-sm border rounded hover:bg-gray-100">2</button>
                                <button className="px-3 py-2 text-sm border rounded bg-blue-500 text-white">3</button>
                                <button className="px-3 py-2 text-sm border rounded hover:bg-gray-100">4</button>
                                <button className="px-3 py-2 text-sm border rounded hover:bg-gray-100">5</button>
                                <button className="px-3 py-2 text-sm border rounded hover:bg-gray-100">Next</button>
                                <button className="px-3 py-2 text-sm border rounded hover:bg-gray-100">Last</button>
                            </div>
                        </div>
                    </div>
                    <CodeBlock
                        language="tsx"
                        code={`<Pagination
  totalPages={20}
  currentPage={currentPage}
  onPageChange={setCurrentPage}
  maxVisiblePages={7}
  showFirstLast={true}
  showPrevNext={true}
  rounded={true}
  labels={{
    first: 'First',
    last: 'Last',
    previous: 'Prev',
    next: 'Next',
  }}
/>`}
                    />
                </section>

                {/* Interactive Example */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Interactive Example</h2>
                    <div className="p-6 bg-white border rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold mb-4">Data Table with Pagination</h3>
                        <div className="mb-4">
                            <div className="bg-white border rounded-lg">
                                <table className="w-full">
                                    <thead className="bg-gray-50 border-b">
                                        <tr>
                                            <th className="text-left p-3 font-medium">ID</th>
                                            <th className="text-left p-3 font-medium">Name</th>
                                            <th className="text-left p-3 font-medium">Email</th>
                                            <th className="text-left p-3 font-medium">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <tr key={i} className="border-b">
                                                <td className="p-3">{(tablePage - 1) * 5 + i + 1}</td>
                                                <td className="p-3">User {(tablePage - 1) * 5 + i + 1}</td>
                                                <td className="p-3">user{(tablePage - 1) * 5 + i + 1}@example.com</td>
                                                <td className="p-3">
                                                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                                                        Active
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Showing {(tablePage - 1) * 5 + 1} to {Math.min(tablePage * 5, 50)} of 50 results
                            </p>
                            <div className="flex items-center space-x-1">
                                <button
                                    onClick={() => tablePage > 1 && setTablePage(tablePage - 1)}
                                    className="px-2 py-1 text-xs border rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 transition-colors"
                                    disabled={tablePage === 1}
                                >
                                    ‹
                                </button>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(page => (
                                    <button
                                        key={page}
                                        onClick={() => setTablePage(page)}
                                        className={`px-2 py-1 text-xs border rounded transition-colors ${tablePage === page
                                                ? 'bg-blue-500 text-white border-blue-500'
                                                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <button
                                    onClick={() => tablePage < 10 && setTablePage(tablePage + 1)}
                                    className="px-2 py-1 text-xs border rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 transition-colors"
                                    disabled={tablePage === 10}
                                >
                                    ›
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* API Reference */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
                    <div className="p-6 bg-white border rounded-lg shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-2 text-left">Prop</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">totalPages</td>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">number</td>
                                        <td className="border border-gray-300 px-4 py-2">-</td>
                                        <td className="border border-gray-300 px-4 py-2">The total number of pages</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">currentPage</td>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">number</td>
                                        <td className="border border-gray-300 px-4 py-2">-</td>
                                        <td className="border border-gray-300 px-4 py-2">The current active page (1-indexed)</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onPageChange</td>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">(page: number) =&gt; void</td>
                                        <td className="border border-gray-300 px-4 py-2">-</td>
                                        <td className="border border-gray-300 px-4 py-2">Callback function called when a page is clicked</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">className</td>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                                        <td className="border border-gray-300 px-4 py-2">''</td>
                                        <td className="border border-gray-300 px-4 py-2">Additional CSS classes to apply</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">maxVisiblePages</td>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">number</td>
                                        <td className="border border-gray-300 px-4 py-2">5</td>
                                        <td className="border border-gray-300 px-4 py-2">The maximum number of page buttons to show</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">showFirstLast</td>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                                        <td className="border border-gray-300 px-4 py-2">true</td>
                                        <td className="border border-gray-300 px-4 py-2">Whether to show the first and last page buttons</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">showPrevNext</td>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                                        <td className="border border-gray-300 px-4 py-2">true</td>
                                        <td className="border border-gray-300 px-4 py-2">Whether to show the previous and next page buttons</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">size</td>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'sm' | 'md' | 'lg'</td>
                                        <td className="border border-gray-300 px-4 py-2">'md'</td>
                                        <td className="border border-gray-300 px-4 py-2">The size of the pagination buttons</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">rounded</td>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                                        <td className="border border-gray-300 px-4 py-2">false</td>
                                        <td className="border border-gray-300 px-4 py-2">Whether the pagination should have rounded appearance</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">labels</td>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">object</td>
                                        <td className="border border-gray-300 px-4 py-2">See below</td>
                                        <td className="border border-gray-300 px-4 py-2">Labels for the navigation buttons</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-semibold mb-3 mt-6">Labels Object</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-2 text-left">Property</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">first</td>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                                        <td className="border border-gray-300 px-4 py-2">'«'</td>
                                        <td className="border border-gray-300 px-4 py-2">Label for the first page button</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">last</td>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                                        <td className="border border-gray-300 px-4 py-2">'»'</td>
                                        <td className="border border-gray-300 px-4 py-2">Label for the last page button</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">previous</td>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                                        <td className="border border-gray-300 px-4 py-2">'‹'</td>
                                        <td className="border border-gray-300 px-4 py-2">Label for the previous page button</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">next</td>
                                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                                        <td className="border border-gray-300 px-4 py-2">'›'</td>
                                        <td className="border border-gray-300 px-4 py-2">Label for the next page button</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Accessibility */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Accessibility</h2>
                    <div className="prose prose-gray max-w-none">
                        <ul className="space-y-2">
                            <li>✅ Full keyboard navigation support</li>
                            <li>✅ Screen reader compatible with proper ARIA attributes</li>
                            <li>✅ Focus management and visible focus indicators</li>
                            <li>✅ Semantic HTML structure</li>
                            <li>✅ High contrast mode support</li>
                        </ul>

                        <h3 className="text-lg font-semibold mt-6 mb-3">ARIA Attributes</h3>
                        <ul className="space-y-1">
                            <li><code>aria-label</code> - Descriptive labels for navigation buttons</li>
                            <li><code>aria-current="page"</code> - Indicates the current page</li>
                            <li><code>role="navigation"</code> - Identifies the pagination as navigation</li>
                            <li><code>aria-label</code> - Overall pagination description</li>
                        </ul>
                    </div>
                </section>

                {/* Best Practices */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
                    <div className="space-y-4">
                        <div className="border-l-4 border-green-500 bg-green-50 p-4">
                            <h4 className="font-semibold text-green-800 mb-2">✅ Do</h4>
                            <ul className="text-green-700 space-y-1">
                                <li>Show pagination when there are more than 10-20 items</li>
                                <li>Display the total number of pages or items when helpful</li>
                                <li>Use consistent page sizes throughout your application</li>
                                <li>Consider mobile-friendly compact pagination for small screens</li>
                                <li>Provide feedback about current position (e.g., "Page 3 of 10")</li>
                                <li>Maintain pagination state when navigating back</li>
                            </ul>
                        </div>

                        <div className="border-l-4 border-red-500 bg-red-50 p-4">
                            <h4 className="font-semibold text-red-800 mb-2">❌ Don't</h4>
                            <ul className="text-red-700 space-y-1">
                                <li>Use pagination for small datasets (less than 10 items)</li>
                                <li>Show too many page numbers on mobile devices</li>
                                <li>Reset to page 1 when applying filters or sorting</li>
                                <li>Use pagination without showing loading states</li>
                                <li>Make pagination buttons too small for touch interaction</li>
                                <li>Hide essential information about total results</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Common Use Cases */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Common Use Cases</h2>
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border">
                            <h3 className="text-lg font-semibold mb-2">📊 Data Tables</h3>
                            <p className="text-gray-600 mb-2">Navigate through large datasets with pagination controls</p>
                            <ul className="text-sm text-gray-500 list-disc list-inside">
                                <li>User lists, transaction history, product catalogs</li>
                                <li>Combined with search and filtering</li>
                                <li>Server-side or client-side pagination</li>
                            </ul>
                        </div>

                        <div className="bg-white p-4 rounded-lg border">
                            <h3 className="text-lg font-semibold mb-2">📝 Content Lists</h3>
                            <p className="text-gray-600 mb-2">Browse through articles, posts, or media collections</p>
                            <ul className="text-sm text-gray-500 list-disc list-inside">
                                <li>Blog posts, news articles, gallery images</li>
                                <li>Comments and reviews</li>
                                <li>Search results and category listings</li>
                            </ul>
                        </div>

                        <div className="bg-white p-4 rounded-lg border">
                            <h3 className="text-lg font-semibold mb-2">🛍️ E-commerce</h3>
                            <p className="text-gray-600 mb-2">Navigate product listings and order history</p>
                            <ul className="text-sm text-gray-500 list-disc list-inside">
                                <li>Product catalogs with filtering</li>
                                <li>Order history and tracking</li>
                                <li>Customer reviews and ratings</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </PageHeader>
    )
}
