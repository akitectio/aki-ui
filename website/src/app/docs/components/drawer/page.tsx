'use client'

import { useState } from 'react'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'
import { ClientDrawer, ClientButton } from '@/components/ClientDrawer'

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
                <ClientButton
                  variant="primary"
                  onClick={() => setBasicOpen(true)}
                >
                  Open Basic Drawer
                </ClientButton>
              </div>
              <ClientDrawer
                isOpen={basicOpen}
                onClose={() => setBasicOpen(false)}
                title="Basic Drawer"
              >
                <p>This is the drawer content.</p>
                <p className="mt-4">You can put any content here.</p>
              </ClientDrawer>
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
                <ClientButton
                  onClick={() => handlePlacementOpen('left')}
                >
                  Left Drawer
                </ClientButton>
                <ClientButton
                  onClick={() => handlePlacementOpen('right')}
                >
                  Right Drawer
                </ClientButton>
                <ClientButton
                  onClick={() => handlePlacementOpen('top')}
                >
                  Top Drawer
                </ClientButton>
                <ClientButton
                  onClick={() => handlePlacementOpen('bottom')}
                >
                  Bottom Drawer
                </ClientButton>
              </div>
              <ClientDrawer
                isOpen={placementOpen}
                onClose={() => setPlacementOpen(false)}
                title={`${placement.charAt(0).toUpperCase() + placement.slice(1)} Drawer`}
                placement={placement}
              >
                <p>This drawer opens from the {placement}.</p>
                <p className="mt-4">You can choose different placements based on your design needs.</p>
              </ClientDrawer>
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
                <ClientButton
                  onClick={() => handleSizeOpen('xs')}
                >
                  Extra Small
                </ClientButton>
                <ClientButton
                  onClick={() => handleSizeOpen('sm')}
                >
                  Small
                </ClientButton>
                <ClientButton
                  onClick={() => handleSizeOpen('md')}
                >
                  Medium
                </ClientButton>
                <ClientButton
                  onClick={() => handleSizeOpen('lg')}
                >
                  Large
                </ClientButton>
                <ClientButton
                  onClick={() => handleSizeOpen('xl')}
                >
                  Extra Large
                </ClientButton>
                <ClientButton
                  onClick={() => handleSizeOpen('full')}
                >
                  Full Size
                </ClientButton>
              </div>
              <ClientDrawer
                isOpen={sizeOpen}
                onClose={() => setSizeOpen(false)}
                title={`${size.toUpperCase()} Size Drawer`}
                size={size}
              >
                <p>This is a drawer with size <strong>{size}</strong>.</p>
                <p className="mt-4">Different sizes can be used for different content needs.</p>
              </ClientDrawer>
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
                <ClientButton
                  onClick={() => setCustomOpen(true)}
                >
                  Open Drawer with Footer
                </ClientButton>
              </div>
              <ClientDrawer
                isOpen={customOpen}
                onClose={() => setCustomOpen(false)}
                title="Drawer with Footer"
                footer={
                  <div className="flex justify-end gap-2">
                    <ClientButton variant="outline" onClick={() => setCustomOpen(false)}>
                      Cancel
                    </ClientButton>
                    <ClientButton onClick={() => setCustomOpen(false)}>
                      Save
                    </ClientButton>
                  </div>
                }
              >
                <p>This drawer has a footer with action buttons.</p>
                <p className="mt-4">The footer is perfect for placing action buttons or other controls.</p>
              </ClientDrawer>
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
