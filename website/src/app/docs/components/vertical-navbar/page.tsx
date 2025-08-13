'use client'

import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'
import { VerticalNavbar } from '@akitectio/aki-ui'
import {
    HomeIcon,
    ChartBarIcon,
    DocumentTextIcon,
    UserGroupIcon,
    CogIcon,
} from '@heroicons/react/24/outline'

export default function VerticalNavbarPage() {
    return (
        <PageHeader
            title="VerticalNavbar"
            description="A flexible vertical navigation sidebar component perfect for dashboards and admin panels with customizable styling and behavior."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Import</h2>
                    <CodeBlock language="typescript">
                        {`import { VerticalNavbar } from '@akitectio/aki-ui'`}
                    </CodeBlock>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div className="space-y-4">
                            <div className="h-96 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-gray-50">
                                <div className="flex h-full">
                                    <div className="w-64 bg-white border-r border-gray-200 shadow-sm">
                                        <div className="px-4 py-6 border-b border-gray-200">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                                    A
                                                </div>
                                                <span className="font-semibold text-gray-900">
                                                    Aki UI
                                                </span>
                                            </div>
                                        </div>
                                        <div className="py-4">
                                            <div className="space-y-1 px-2">
                                                <div className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-white bg-blue-600">
                                                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                    </svg>
                                                    Dashboard
                                                </div>
                                                <div className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                                                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                    </svg>
                                                    Analytics
                                                </div>
                                                <div className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                                                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                                    </svg>
                                                    Users
                                                    <span className="ml-auto bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">3</span>
                                                </div>
                                                <div className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                                                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                    Documents
                                                </div>
                                                <div className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                                                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    Settings
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 p-6 bg-gray-50">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Main Content</h3>
                                        <p className="text-gray-600">Your main content goes here...</p>
                                    </div>
                                </div>
                            </div>

                            <CodeBlock language="typescript">
                                {`<VerticalNavbar variant="light" size="md">
  <VerticalNavbar.Header>
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
        A
      </div>
      <span className="font-semibold">Aki UI</span>
    </div>
  </VerticalNavbar.Header>
  
  <VerticalNavbar.Item href="#" active icon={<HomeIcon />}>
    Dashboard
  </VerticalNavbar.Item>
  
  <VerticalNavbar.Item href="#" icon={<ChartBarIcon />}>
    Analytics
  </VerticalNavbar.Item>
  
  <VerticalNavbar.Item href="#" icon={<UserGroupIcon />} badge="3">
    Users
  </VerticalNavbar.Item>
  
  <VerticalNavbar.Item href="#" icon={<DocumentTextIcon />}>
    Documents
  </VerticalNavbar.Item>
  
  <VerticalNavbar.Item href="#" icon={<CogIcon />}>
    Settings
  </VerticalNavbar.Item>
</VerticalNavbar>`}
                            </CodeBlock>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Live Example</h2>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div className="space-y-4">
                            <div className="h-96 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-gray-50">
                                <div className="flex h-full">
                                    <VerticalNavbar variant="light" size="md">
                                        <VerticalNavbar.Header>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                                    ✓
                                                </div>
                                                <span className="font-semibold text-gray-900">
                                                    Live Component
                                                </span>
                                            </div>
                                        </VerticalNavbar.Header>

                                        <VerticalNavbar.Item href="#" active icon={<HomeIcon className="w-5 h-5" />} badge={undefined} onClick={undefined}>
                                            Dashboard
                                        </VerticalNavbar.Item>

                                        <VerticalNavbar.Item href="#" icon={<ChartBarIcon className="w-5 h-5" />} badge={undefined} onClick={undefined}>
                                            Analytics
                                        </VerticalNavbar.Item>

                                        <VerticalNavbar.Item href="#" icon={<UserGroupIcon className="w-5 h-5" />} badge="3" onClick={undefined}>
                                            Users
                                        </VerticalNavbar.Item>

                                        <VerticalNavbar.Item href="#" icon={<DocumentTextIcon className="w-5 h-5" />} badge={undefined} onClick={undefined}>
                                            Documents
                                        </VerticalNavbar.Item>

                                        <VerticalNavbar.Item href="#" icon={<CogIcon className="w-5 h-5" />} badge={undefined} onClick={undefined}>
                                            Settings
                                        </VerticalNavbar.Item>
                                    </VerticalNavbar>
                                    <div className="flex-1 p-6 bg-gray-50">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Component Example</h3>
                                        <p className="text-gray-600 mb-2">This is a live example using the actual VerticalNavbar component imported from @akitectio/aki-ui!</p>
                                        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                                            <p className="text-green-800 text-sm font-medium">✅ Component Successfully Imported</p>
                                            <p className="text-green-600 text-sm">The VerticalNavbar component is now being used directly from the aki-ui library.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <CodeBlock language="typescript">
                                {`import { VerticalNavbar } from '@akitectio/aki-ui'
import { 
  HomeIcon, 
  ChartBarIcon, 
  UserGroupIcon, 
  DocumentTextIcon, 
  CogIcon 
} from '@heroicons/react/24/outline'

export default function MyComponent() {
  return (
    <VerticalNavbar variant="light" size="md">
      <VerticalNavbar.Header>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
          <span className="font-semibold">Aki UI</span>
        </div>
      </VerticalNavbar.Header>
      
      {/* Active item */}
      <VerticalNavbar.Item 
        href="/dashboard" 
        active 
        icon={<HomeIcon />} 
        badge={undefined}
        onClick={() => console.log('Dashboard clicked')}
      >
        Dashboard
      </VerticalNavbar.Item>
      
      {/* Regular items */}
      <VerticalNavbar.Item 
        href="/analytics" 
        icon={<ChartBarIcon />}
        badge={undefined}
        onClick={() => console.log('Analytics clicked')}
      >
        Analytics
      </VerticalNavbar.Item>
      
      {/* Item with badge */}
      <VerticalNavbar.Item 
        href="/users" 
        icon={<UserGroupIcon />} 
        badge="3"
        onClick={() => console.log('Users clicked')}
      >
        Users
      </VerticalNavbar.Item>
      
      <VerticalNavbar.Item 
        href="/documents" 
        icon={<DocumentTextIcon />}
        badge={undefined}
        onClick={() => console.log('Documents clicked')}
      >
        Documents
      </VerticalNavbar.Item>
      
      <VerticalNavbar.Item 
        href="/settings" 
        icon={<CogIcon />}
        badge={undefined}
        onClick={() => console.log('Settings clicked')}
      >
        Settings
      </VerticalNavbar.Item>
    </VerticalNavbar>
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-lg font-medium mb-3">Primary</h3>
                                    <div className="h-48 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                        <div className="w-full h-full bg-blue-600">
                                            <div className="px-4 py-4 border-b border-blue-500">
                                                <span className="font-bold text-white">Primary</span>
                                            </div>
                                            <div className="py-2 px-2 space-y-1">
                                                <div className="flex items-center px-3 py-1.5 text-sm font-medium rounded text-blue-100 bg-blue-500">
                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                    </svg>
                                                    Home
                                                </div>
                                                <div className="flex items-center px-3 py-1.5 text-sm font-medium rounded text-blue-200 hover:text-blue-100 hover:bg-blue-500">
                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                    </svg>
                                                    Charts
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-3">Dark</h3>
                                    <div className="h-48 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                        <div className="w-full h-full bg-gray-900">
                                            <div className="px-4 py-4 border-b border-gray-700">
                                                <span className="font-bold text-gray-100">Dark</span>
                                            </div>
                                            <div className="py-2 px-2 space-y-1">
                                                <div className="flex items-center px-3 py-1.5 text-sm font-medium rounded text-gray-100 bg-gray-700">
                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                    </svg>
                                                    Home
                                                </div>
                                                <div className="flex items-center px-3 py-1.5 text-sm font-medium rounded text-gray-300 hover:text-gray-100 hover:bg-gray-700">
                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                    </svg>
                                                    Charts
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <CodeBlock language="typescript">
                                {`// Primary variant
<VerticalNavbar variant="primary">
  {/* content */}
</VerticalNavbar>

// Secondary variant
<VerticalNavbar variant="secondary">
  {/* content */}
</VerticalNavbar>

// Light variant (default)
<VerticalNavbar variant="light">
  {/* content */}
</VerticalNavbar>

// Dark variant
<VerticalNavbar variant="dark">
  {/* content */}
</VerticalNavbar>`}
                            </CodeBlock>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-medium mb-3 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                    </svg>
                                    Grouping Support
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Organize navigation items into logical groups with collapsible sections for better organization.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-3 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                    Collapsible
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Save space with a collapsible sidebar that can expand and contract based on user needs.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-3 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    Mobile Responsive
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Automatically adapts to mobile devices with slide-out behavior and touch-friendly interactions.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-3 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                                    </svg>
                                    Multiple Variants
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Choose from primary, secondary, light, or dark variants to match your application's theme.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Props</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-200 dark:border-gray-700">
                            <thead>
                                <tr className="bg-gray-50 dark:bg-gray-800">
                                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-medium">Prop</th>
                                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-medium">Type</th>
                                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-medium">Default</th>
                                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-medium">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-200 dark:border-gray-700 p-3 font-mono text-sm">variant</td>
                                    <td className="border border-gray-200 dark:border-gray-700 p-3 text-sm">'primary' | 'secondary' | 'light' | 'dark'</td>
                                    <td className="border border-gray-200 dark:border-gray-700 p-3 text-sm">'light'</td>
                                    <td className="border border-gray-200 dark:border-gray-700 p-3 text-sm">Visual variant of the navbar</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 dark:border-gray-700 p-3 font-mono text-sm">size</td>
                                    <td className="border border-gray-200 dark:border-gray-700 p-3 text-sm">'sm' | 'md' | 'lg'</td>
                                    <td className="border border-gray-200 dark:border-gray-700 p-3 text-sm">'md'</td>
                                    <td className="border border-gray-200 dark:border-gray-700 p-3 text-sm">Size of the navbar</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 dark:border-gray-700 p-3 font-mono text-sm">collapsible</td>
                                    <td className="border border-gray-200 dark:border-gray-700 p-3 text-sm">boolean</td>
                                    <td className="border border-gray-200 dark:border-gray-700 p-3 text-sm">false</td>
                                    <td className="border border-gray-200 dark:border-gray-700 p-3 text-sm">Whether the navbar can be collapsed</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 dark:border-gray-700 p-3 font-mono text-sm">className</td>
                                    <td className="border border-gray-200 dark:border-gray-700 p-3 text-sm">string</td>
                                    <td className="border border-gray-200 dark:border-gray-700 p-3 text-sm">-</td>
                                    <td className="border border-gray-200 dark:border-gray-700 p-3 text-sm">Additional CSS classes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Sub-components</h2>
                    <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold mb-2">VerticalNavbar.Header</h3>
                            <p className="text-sm text-gray-600 mb-2">Container for the navbar header content (logo, title, etc.)</p>
                            <CodeBlock language="typescript">
                                {`<VerticalNavbar.Header collapsible>
  <div className="flex items-center space-x-2">
    <img src="/logo.png" className="w-8 h-8" />
    <span className="font-bold">My App</span>
  </div>
</VerticalNavbar.Header>`}
                            </CodeBlock>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold mb-2">VerticalNavbar.Item</h3>
                            <p className="text-sm text-gray-600 mb-2">Individual navigation item with icon, text, and badge support</p>
                            <CodeBlock language="typescript">
                                {`<VerticalNavbar.Item 
  href="/dashboard" 
  active 
  icon={<HomeIcon />} 
  badge="new"
>
  Dashboard
</VerticalNavbar.Item>`}
                            </CodeBlock>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold mb-2">VerticalNavbar.Group</h3>
                            <p className="text-sm text-gray-600 mb-2">Groups related navigation items with optional collapsing</p>
                            <CodeBlock language="typescript">
                                {`<VerticalNavbar.Group 
  title="Management" 
  collapsible 
  defaultCollapsed={false}
>
  <VerticalNavbar.Item href="/users" icon={<UsersIcon />}>
    Users
  </VerticalNavbar.Item>
  <VerticalNavbar.Item href="/settings" icon={<CogIcon />}>
    Settings
  </VerticalNavbar.Item>
</VerticalNavbar.Group>`}
                            </CodeBlock>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold mb-2">VerticalNavbar.Footer</h3>
                            <p className="text-sm text-gray-600 mb-2">Footer area for user profile or additional actions</p>
                            <CodeBlock language="typescript">
                                {`<VerticalNavbar.Footer>
  <div className="flex items-center space-x-2">
    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
    <div>
      <div className="text-sm font-medium">John Doe</div>
      <div className="text-xs text-gray-500">john@example.com</div>
    </div>
  </div>
</VerticalNavbar.Footer>`}
                            </CodeBlock>
                        </div>
                    </div>
                </section>
            </div>
        </PageHeader>
    )
}
