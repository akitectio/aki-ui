'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { PageHeader } from '@/components/PageHeader'
import { CodeBlock } from '@/components/CodeBlock'

// Create a client-side safe wrapper for the toast demo
const ToastDemoWrapper = dynamic(() => import('@/components/ToastDemo'), {
  ssr: false,
  loading: () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="px-4 py-2 bg-green-100 text-green-700 rounded-md text-sm animate-pulse">
          Success Toast
        </div>
        <div className="px-4 py-2 bg-red-100 text-red-700 rounded-md text-sm animate-pulse">
          Error Toast
        </div>
        <div className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-md text-sm animate-pulse">
          Warning Toast
        </div>
        <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md text-sm animate-pulse">
          Info Toast
        </div>
      </div>
      <div className="flex gap-3">
        <div className="px-4 py-2 border border-gray-300 rounded-md text-sm animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  )
})

export default function ToastPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
            {mounted && <ToastDemoWrapper />}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Setup Toast Provider</h3>
            <CodeBlock
              language="tsx"
              code={`import { ToastProvider } from '@/components/client-components'

function App() {
  return (
    <ToastProvider position="top-right">
      {/* Your app content */}
    </ToastProvider>
  )
}`}
            />

            <h3 className="text-lg font-semibold">Using the useToast Hook</h3>
            <CodeBlock
              language="tsx"
              code={`import { useToast, Button } from '@/components/client-components'

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
          </div>
        </section>

        {/* Variants */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Variants</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Toast notifications come in different variants to communicate different types of information.
          </p>

          <h3 className="text-lg font-semibold mb-4">Toast Variants</h3>
          <CodeBlock
            language="tsx"
            code={`// Success Toast
toast.success('Operation completed successfully!')

// Error Toast
toast.error('An error occurred')

// Warning Toast
toast.warning('This is a warning message')

// Info Toast
toast.info('This is an informational message')

// Custom variant
toast.show({
  message: 'Custom message',
  variant: 'success',
  duration: 3000
})`}
          />
        </section>

        {/* API Reference */}
        <section>
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>

          <h3 className="text-lg font-semibold mb-4">Toast Methods</h3>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <ul className="space-y-2 text-sm">
              <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">toast.success(message, options?)</code> - Show success toast</li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">toast.error(message, options?)</code> - Show error toast</li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">toast.warning(message, options?)</code> - Show warning toast</li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">toast.info(message, options?)</code> - Show info toast</li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">toast.show(options)</code> - Show custom toast</li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">toast.dismiss(id)</code> - Dismiss specific toast</li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">toast.dismissAll()</code> - Dismiss all toasts</li>
            </ul>
          </div>
        </section>
      </div>
    </PageHeader>
  )
}
