'use client'

import { useState } from 'react'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

export default function DrawerPage() {
  const [basicOpen, setBasicOpen] = useState(false)
  const [placement, setPlacement] = useState<'left' | 'right' | 'top' | 'bottom'>('right')
  const [placementOpen, setPlacementOpen] = useState(false)
  const [size, setSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'>('md')
  const [sizeOpen, setSizeOpen] = useState(false)
  const [customOpen, setCustomOpen] = useState(false)

  const handlePlacementOpen = (newPlacement: 'left' | 'right' | 'top' | 'bottom') => {
    setPlacement(newPlacement)
    setPlacementOpen(true)
  }

  const handleSizeOpen = (newSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full') => {
    setSize(newSize)
    setSizeOpen(true)
  }

  return (
    <PageHeader
      title="Drawer"
      description="A flexible drawer component that slides in from any direction with customizable content and behavior."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Import</h2>
          <CodeBlock language="typescript">
            {`import { Drawer } from '@akitectio/aki-ui'`}
          </CodeBlock>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  onClick={() => setBasicOpen(true)}
                >
                  Open Basic Drawer
                </button>
              </div>
              <CodeBlock language="typescript">
                {`const [isOpen, setIsOpen] = useState(false)

return (
  <>
    <Button onClick={() => setIsOpen(true)}>
      Open Drawer
    </Button>
    <Drawer
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Basic Drawer"
    >
      <p>This is the drawer content.</p>
      <p className="mt-4">You can put any content here.</p>
    </Drawer>
  </>
)`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Placement</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  onClick={() => handlePlacementOpen('left')}
                >
                  Left Drawer
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  onClick={() => handlePlacementOpen('right')}
                >
                  Right Drawer
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  onClick={() => handlePlacementOpen('top')}
                >
                  Top Drawer
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  onClick={() => handlePlacementOpen('bottom')}
                >
                  Bottom Drawer
                </button>
              </div>
              <CodeBlock language="typescript">
                {`<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  placement="left" // 'left' | 'right' | 'top' | 'bottom'
  title="Left Drawer"
>
  Content here
</Drawer>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Sizes</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  onClick={() => handleSizeOpen('xs')}
                >
                  Extra Small
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  onClick={() => handleSizeOpen('sm')}
                >
                  Small
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  onClick={() => handleSizeOpen('md')}
                >
                  Medium
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  onClick={() => handleSizeOpen('lg')}
                >
                  Large
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  onClick={() => handleSizeOpen('xl')}
                >
                  Extra Large
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  onClick={() => handleSizeOpen('full')}
                >
                  Full Size
                </button>
              </div>
              <CodeBlock language="typescript">
                {`<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  size="lg" // 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  title="Large Drawer"
>
  Content here
</Drawer>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">With Footer</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  onClick={() => setCustomOpen(true)}
                >
                  Open Drawer with Footer
                </button>
              </div>
              <CodeBlock language="typescript">
                {`<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Drawer with Footer"
  footer={
    <div className="flex justify-end gap-2">
      <Button variant="outline" onClick={() => setIsOpen(false)}>
        Cancel
      </Button>
      <Button variant="primary" onClick={() => setIsOpen(false)}>
        Save
      </Button>
    </div>
  }
>
  <p>This drawer has a footer with action buttons.</p>
</Drawer>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Props</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-200 dark:border-gray-700">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">Prop</th>
                        <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">Type</th>
                        <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">Default</th>
                        <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">isOpen</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">boolean</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">false</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Whether the drawer is open</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">onClose</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">{'() => void'}</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">-</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Called when the drawer should close</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">placement</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">{'\'left\' | \'right\' | \'top\' | \'bottom\''}</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">{'\'right\''}</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">The placement of the drawer</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">size</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">{'\'xs\' | \'sm\' | \'md\' | \'lg\' | \'xl\' | \'full\''}</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">{'\'md\''}</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">The size of the drawer</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">title</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">ReactNode</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">-</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">The title of the drawer</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">footer</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">ReactNode</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">-</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">The footer content of the drawer</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">closeButton</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">boolean</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">true</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Whether to show the close button</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">closeOnOverlayClick</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">boolean</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">true</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Whether to close when clicking outside</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">closeOnEsc</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">boolean</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">true</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Whether to close when pressing escape key</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">lockScroll</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">boolean</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">true</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Whether to disable scrolling of the background</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">hasOverlay</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">boolean</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">true</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Whether to show an overlay behind the drawer</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">zIndex</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">number</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">1000</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">The z-index of the drawer</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageHeader>
  )
}
