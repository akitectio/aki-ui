'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { Card } from '@akitectio/aki-ui'
import { PageHeader } from '@/components/PageHeader'
import { CodeBlock } from '@/components/CodeBlock'

// Dynamically import the toast demo to avoid SSR issues
const ToastDemo = dynamic(() => import('@/components/ToastDemo'), {
  ssr: false,
  loading: () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <button className="px-4 py-2 bg-green-100 text-green-700 rounded-md text-sm" disabled>
          Success Toast
        </button>
        <button className="px-4 py-2 bg-red-100 text-red-700 rounded-md text-sm" disabled>
          Error Toast
        </button>
        <button className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-md text-sm" disabled>
          Warning Toast
        </button>
        <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md text-sm" disabled>
          Info Toast
        </button>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 border border-gray-300 rounded-md text-sm" disabled>
          Long Duration
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md text-sm" disabled>
          Persistent Toast
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md text-sm" disabled>
          Dismiss All
        </button>
      </div>
    </div>
  )
})

export default function ToastPage() {
  return (
    <PageHeader
      title="Toast"
      description="Display temporary notification messages with customizable variants, positioning, and auto-dismiss functionality."
    >
      <div className="space-y-8">
        {/* Basic Usage */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Toast notifications are temporary messages that appear to provide feedback about an action or system status.
            They automatically dismiss after a set duration and can be positioned anywhere on the screen.
          </p>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
            <ToastDemo />
          </div>

          <CodeBlock
            title="Setup Toast Provider"
            language="tsx"
            code={`import { ToastProvider } from '@akitectio/aki-ui'

function App() {
  return (
    <ToastProvider position="top-right">
      {/* Your app content */}
    </ToastProvider>
  )
}`}
          />

          <CodeBlock
            title="Using the useToast Hook"
            language="tsx"
            code={`import { useToast, Button } from '@akitectio/aki-ui'

function MyComponent() {
  const toast = useToast()

  const showToast = () => {
    toast.show({
      title: 'Success!',
      message: 'Your action was completed successfully.',
      variant: 'success',
    })
  }

  return <Button onClick={showToast}>Show Toast</Button>
}`}
          />
        </section>

        {/* Variants */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Variants</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Toast supports different variants to convey the appropriate message type.
          </p>

          <CodeBlock
            title="Toast Variants"
            language="tsx"
            code={`const toast = useToast()

// Success variant
toast.show({
  title: 'Success!',
  message: 'Operation completed successfully.',
  variant: 'success',
})

// Error variant
toast.show({
  title: 'Error!',
  message: 'Something went wrong.',
  variant: 'error',
})

// Warning variant
toast.show({
  title: 'Warning!',
  message: 'Please check your input.',
  variant: 'warning',
})

// Info variant
toast.show({
  title: 'Info',
  message: 'Here is some information.',
  variant: 'info',
})

// Default variant
toast.show({
  title: 'Default',
  message: 'A default message.',
  variant: 'default',
})`}
          />
        </section>

        {/* Position */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Positioning</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            You can position the toast container in different locations on the screen.
          </p>

          <CodeBlock
            title="Toast Positions"
            language="tsx"
            code={`// Available positions:
// 'top', 'top-right', 'top-left', 'bottom', 'bottom-right', 'bottom-left'

<ToastProvider position="top-right">
  {/* Your app */}
</ToastProvider>

<ToastProvider position="bottom-left">
  {/* Your app */}
</ToastProvider>`}
          />
        </section>

        {/* Duration and Persistence */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Duration and Persistence</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Control how long toasts stay visible and whether they can be manually dismissed.
          </p>

          <CodeBlock
            title="Duration Options"
            language="tsx"
            code={`const toast = useToast()

// Auto-dismiss after 5 seconds (default)
toast.show({
  message: 'This will disappear in 5 seconds.',
  duration: 5000,
})

// Custom duration
toast.show({
  message: 'This will disappear in 10 seconds.',
  duration: 10000,
})

// Persistent toast (no auto-dismiss)
toast.show({
  message: 'This will stay until manually dismissed.',
  duration: 0,
  dismissible: true,
})

// Non-dismissible toast
toast.show({
  message: 'This cannot be dismissed manually.',
  dismissible: false,
})`}
          />
        </section>

        {/* Custom Icons */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Custom Icons</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Provide custom icons for your toast notifications.
          </p>

          <CodeBlock
            title="Custom Icons"
            language="tsx"
            code={`toast.show({
  title: 'Custom Icon',
  message: 'This toast has a custom icon.',
  icon: (
    <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
})`}
          />
        </section>

        {/* Management */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Toast Management</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Programmatically manage toasts with update and dismiss methods.
          </p>

          <CodeBlock
            title="Toast Management"
            language="tsx"
            code={`const toast = useToast()

// Show a toast and get its ID
const toastId = toast.show({
  title: 'Loading...',
  message: 'Please wait while we process your request.',
  variant: 'info',
  duration: 0, // Don't auto-dismiss
})

// Update the toast later
setTimeout(() => {
  toast.update(toastId, {
    title: 'Success!',
    message: 'Your request has been processed.',
    variant: 'success',
    duration: 5000, // Now auto-dismiss
  })
}, 3000)

// Dismiss a specific toast
toast.dismiss(toastId)

// Dismiss all toasts
toast.dismissAll()`}
          />
        </section>

        {/* Props Table */}
        <section>
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>

          <h3 className="text-xl font-semibold mb-4">ToastProvider Props</h3>
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
                    <td className="py-3 font-mono text-sm">position</td>
                    <td className="py-3 text-sm">'top' | 'top-right' | 'top-left' | 'bottom' | 'bottom-right' | 'bottom-left'</td>
                    <td className="py-3 text-sm">'top-right'</td>
                    <td className="py-3 text-sm">Position of the toast container on the screen</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">limit</td>
                    <td className="py-3 text-sm">number</td>
                    <td className="py-3 text-sm">10</td>
                    <td className="py-3 text-sm">Maximum number of toasts to show at once</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">gap</td>
                    <td className="py-3 text-sm">'sm' | 'md' | 'lg'</td>
                    <td className="py-3 text-sm">'md'</td>
                    <td className="py-3 text-sm">Gap between toast messages</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">className</td>
                    <td className="py-3 text-sm">string</td>
                    <td className="py-3 text-sm">''</td>
                    <td className="py-3 text-sm">Additional CSS classes for the container</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <h3 className="text-xl font-semibold mb-4 mt-8">useToast Hook Methods</h3>
          <Card className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="pb-3 font-medium">Method</th>
                    <th className="pb-3 font-medium">Type</th>
                    <th className="pb-3 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">show(options)</td>
                    <td className="py-3 text-sm">(options: ToastOptions) =&gt; string</td>
                    <td className="py-3 text-sm">Show a new toast and return its ID</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">update(id, options)</td>
                    <td className="py-3 text-sm">(id: string, options: Partial&lt;ToastOptions&gt;) =&gt; void</td>
                    <td className="py-3 text-sm">Update an existing toast by ID</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">dismiss(id)</td>
                    <td className="py-3 text-sm">(id: string) =&gt; void</td>
                    <td className="py-3 text-sm">Dismiss a specific toast by ID</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">dismissAll()</td>
                    <td className="py-3 text-sm">() =&gt; void</td>
                    <td className="py-3 text-sm">Dismiss all currently visible toasts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <h3 className="text-xl font-semibold mb-4 mt-8">Toast Options</h3>
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
                    <td className="py-3 font-mono text-sm">title</td>
                    <td className="py-3 text-sm">React.ReactNode</td>
                    <td className="py-3 text-sm">-</td>
                    <td className="py-3 text-sm">Optional title for the toast</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">message</td>
                    <td className="py-3 text-sm">React.ReactNode</td>
                    <td className="py-3 text-sm">-</td>
                    <td className="py-3 text-sm">The main message content</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">variant</td>
                    <td className="py-3 text-sm">'default' | 'info' | 'success' | 'warning' | 'error'</td>
                    <td className="py-3 text-sm">'default'</td>
                    <td className="py-3 text-sm">Visual variant of the toast</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">duration</td>
                    <td className="py-3 text-sm">number</td>
                    <td className="py-3 text-sm">5000</td>
                    <td className="py-3 text-sm">Auto-dismiss duration in milliseconds (0 to disable)</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">icon</td>
                    <td className="py-3 text-sm">React.ReactNode</td>
                    <td className="py-3 text-sm">-</td>
                    <td className="py-3 text-sm">Custom icon to display</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">dismissible</td>
                    <td className="py-3 text-sm">boolean</td>
                    <td className="py-3 text-sm">true</td>
                    <td className="py-3 text-sm">Whether the toast can be manually dismissed</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">showProgress</td>
                    <td className="py-3 text-sm">boolean</td>
                    <td className="py-3 text-sm">true</td>
                    <td className="py-3 text-sm">Whether to show a progress bar</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">pauseOnHover</td>
                    <td className="py-3 text-sm">boolean</td>
                    <td className="py-3 text-sm">true</td>
                    <td className="py-3 text-sm">Whether to pause the timer when hovering</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">onClose</td>
                    <td className="py-3 text-sm">(id: string) =&gt; void</td>
                    <td className="py-3 text-sm">-</td>
                    <td className="py-3 text-sm">Callback when the toast is closed</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">onClick</td>
                    <td className="py-3 text-sm">(id: string) =&gt; void</td>
                    <td className="py-3 text-sm">-</td>
                    <td className="py-3 text-sm">Callback when the toast is clicked</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">className</td>
                    <td className="py-3 text-sm">string</td>
                    <td className="py-3 text-sm">''</td>
                    <td className="py-3 text-sm">Additional CSS classes for the toast</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Accessibility */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Accessibility</h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <ul className="space-y-2 text-sm">
              <li>• Toast messages use <code>role="alert"</code> and <code>aria-live="assertive"</code> for screen readers</li>
              <li>• Toast container uses <code>aria-live="polite"</code> to announce new toasts</li>
              <li>• Dismiss buttons have proper <code>aria-label</code> attributes</li>
              <li>• Keyboard navigation is supported for interactive elements</li>
              <li>• Color variants include sufficient contrast ratios</li>
              <li>• Toast content is announced to screen readers when shown</li>
            </ul>
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">✅ Do</h3>
              <ul className="space-y-2 text-sm">
                <li>• Use appropriate variants for different message types</li>
                <li>• Keep messages concise and actionable</li>
                <li>• Use consistent positioning throughout your app</li>
                <li>• Provide clear feedback for user actions</li>
                <li>• Allow users to dismiss persistent toasts</li>
                <li>• Use progress bars for timed toasts</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">❌ Don't</h3>
              <ul className="space-y-2 text-sm">
                <li>• Show too many toasts at once</li>
                <li>• Use toasts for critical information that requires action</li>
                <li>• Make toast duration too short for users to read</li>
                <li>• Use toasts for complex or lengthy messages</li>
                <li>• Stack toasts in confusing arrangements</li>
                <li>• Rely only on color to convey meaning</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </PageHeader>
  )
}
