'use client'

import { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@akitectio/aki-ui'
import { PageHeader } from '@/components/PageHeader'
import { CodeBlock } from '@/components/CodeBlock'

export default function ModalPage() {
  const [basicModalOpen, setBasicModalOpen] = useState(false)
  const [sizeModalOpen, setSizeModalOpen] = useState('')
  const [centeredModalOpen, setCenteredModalOpen] = useState(false)
  const [scrollableModalOpen, setScrollableModalOpen] = useState(false)
  const [customModalOpen, setCustomModalOpen] = useState(false)
  const [confirmModalOpen, setConfirmModalOpen] = useState(false)

  return (
    <div className="space-y-8">
      <PageHeader
        title="Modal"
        description="Overlay dialogs for focused interactions, forms, and important information display."
      />

      {/* Basic Usage */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <Button onClick={() => setBasicModalOpen(true)}>
            Open Basic Modal
          </Button>
          
          <Modal isOpen={basicModalOpen} onClose={() => setBasicModalOpen(false)}>
            <ModalHeader onClose={() => setBasicModalOpen(false)}>
              Basic Modal
            </ModalHeader>
            <ModalBody>
              <p>This is a basic modal with header, body, and footer sections.</p>
              <p className="mt-2">You can click outside the modal or press Escape to close it.</p>
            </ModalBody>
            <ModalFooter>
              <Button variant="secondary" onClick={() => setBasicModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setBasicModalOpen(false)}>
                OK
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <CodeBlock
          language="tsx"
          code={`import { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@akitectio/aki-ui'

function BasicModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader onClose={() => setIsOpen(false)}>
          Modal Title
        </ModalHeader>
        <ModalBody>
          <p>This is the modal content.</p>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}`}
        />
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Modal Sizes</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => setSizeModalOpen('sm')}>Small</Button>
            <Button onClick={() => setSizeModalOpen('md')}>Medium</Button>
            <Button onClick={() => setSizeModalOpen('lg')}>Large</Button>
            <Button onClick={() => setSizeModalOpen('xl')}>Extra Large</Button>
            <Button onClick={() => setSizeModalOpen('full')}>Full Screen</Button>
          </div>
          
          {['sm', 'md', 'lg', 'xl', 'full'].map((size) => (
            <Modal
              key={size}
              isOpen={sizeModalOpen === size}
              onClose={() => setSizeModalOpen('')}
              size={size as any}
            >
              <ModalHeader onClose={() => setSizeModalOpen('')}>
                {size.charAt(0).toUpperCase() + size.slice(1)} Modal
              </ModalHeader>
              <ModalBody>
                <p>This is a {size} sized modal.</p>
                <p className="mt-2">
                  Content adapts to the modal size. Larger modals are good for complex forms
                  or detailed information, while smaller ones work well for confirmations.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button onClick={() => setSizeModalOpen('')}>Close</Button>
              </ModalFooter>
            </Modal>
          ))}
        </div>
        <CodeBlock
          language="tsx"
          code={`<div className="flex gap-2">
  <Button onClick={() => setModalOpen('sm')}>Small</Button>
  <Button onClick={() => setModalOpen('md')}>Medium</Button>
  <Button onClick={() => setModalOpen('lg')}>Large</Button>
  <Button onClick={() => setModalOpen('xl')}>Extra Large</Button>
  <Button onClick={() => setModalOpen('full')}>Full Screen</Button>
</div>

<Modal
  isOpen={modalSize === 'lg'}
  onClose={() => setModalSize('')}
  size="lg"
>
  <ModalHeader>Large Modal</ModalHeader>
  <ModalBody>Content for large modal...</ModalBody>
  <ModalFooter>
    <Button onClick={() => setModalSize('')}>Close</Button>
  </ModalFooter>
</Modal>`}
        />
      </section>

      {/* Centered Modal */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Centered Modal</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <Button onClick={() => setCenteredModalOpen(true)}>
            Open Centered Modal
          </Button>
          
          <Modal
            isOpen={centeredModalOpen}
            onClose={() => setCenteredModalOpen(false)}
            centered={true}
          >
            <ModalHeader onClose={() => setCenteredModalOpen(false)}>
              Centered Modal
            </ModalHeader>
            <ModalBody>
              <p>This modal is vertically centered on the screen.</p>
              <p className="mt-2">This is useful for important dialogs that need user attention.</p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setCenteredModalOpen(false)}>Close</Button>
            </ModalFooter>
          </Modal>
        </div>
        <CodeBlock
          language="tsx"
          code={`<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  centered={true}
>
  <ModalHeader>Centered Modal</ModalHeader>
  <ModalBody>
    This modal is vertically centered on the screen.
  </ModalBody>
  <ModalFooter>
    <Button onClick={() => setIsOpen(false)}>Close</Button>
  </ModalFooter>
</Modal>`}
        />
      </section>

      {/* Scrollable Modal */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Scrollable Modal</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <Button onClick={() => setScrollableModalOpen(true)}>
            Open Scrollable Modal
          </Button>
          
          <Modal
            isOpen={scrollableModalOpen}
            onClose={() => setScrollableModalOpen(false)}
            scrollable={true}
          >
            <ModalHeader onClose={() => setScrollableModalOpen(false)}>
              Scrollable Modal
            </ModalHeader>
            <ModalBody>
              <p className="mb-4">This modal has a lot of content that requires scrolling.</p>
              {Array.from({ length: 20 }, (_, i) => (
                <p key={i} className="mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Paragraph {i + 1}
                </p>
              ))}
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setScrollableModalOpen(false)}>Close</Button>
            </ModalFooter>
          </Modal>
        </div>
        <CodeBlock
          language="tsx"
          code={`<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  scrollable={true}
>
  <ModalHeader>Scrollable Modal</ModalHeader>
  <ModalBody>
    {/* Long content that needs scrolling */}
    <div>Lots of content here...</div>
  </ModalBody>
  <ModalFooter>
    <Button onClick={() => setIsOpen(false)}>Close</Button>
  </ModalFooter>
</Modal>`}
        />
      </section>

      {/* Custom Modal */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Custom Modal</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <Button onClick={() => setCustomModalOpen(true)}>
            Open Custom Modal
          </Button>
          
          <Modal
            isOpen={customModalOpen}
            onClose={() => setCustomModalOpen(false)}
            hasCloseButton={false}
            closeOnOverlayClick={false}
            className="max-w-md"
          >
            <div className="p-6 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <span className="text-green-600 text-xl">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Success!
              </h3>
              <p className="text-gray-600 mb-6">
                Your account has been created successfully. Welcome to our platform!
              </p>
              <div className="flex justify-center gap-3">
                <Button variant="secondary" onClick={() => setCustomModalOpen(false)}>
                  Close
                </Button>
                <Button onClick={() => setCustomModalOpen(false)}>
                  Get Started
                </Button>
              </div>
            </div>
          </Modal>
        </div>
        <CodeBlock
          language="tsx"
          code={`<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  hasCloseButton={false}
  closeOnOverlayClick={false}
  className="max-w-md"
>
  <div className="p-6 text-center">
    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
      <span className="text-green-600 text-xl">✓</span>
    </div>
    <h3 className="text-lg font-semibold mb-2">Success!</h3>
    <p className="text-gray-600 mb-6">
      Your account has been created successfully.
    </p>
    <div className="flex justify-center gap-3">
      <Button variant="secondary" onClick={() => setIsOpen(false)}>
        Close
      </Button>
      <Button onClick={() => setIsOpen(false)}>
        Get Started
      </Button>
    </div>
  </div>
</Modal>`}
        />
      </section>

      {/* Confirmation Modal */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Confirmation Modal</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <Button variant="danger" onClick={() => setConfirmModalOpen(true)}>
            Delete Account
          </Button>
          
          <Modal
            isOpen={confirmModalOpen}
            onClose={() => setConfirmModalOpen(false)}
            size="sm"
            centered
          >
            <ModalHeader onClose={() => setConfirmModalOpen(false)}>
              Confirm Deletion
            </ModalHeader>
            <ModalBody>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <span className="text-red-500 text-xl">⚠️</span>
                </div>
                <div>
                  <p className="text-gray-900 font-medium mb-2">
                    Are you sure you want to delete your account?
                  </p>
                  <p className="text-gray-600 text-sm">
                    This action cannot be undone. All your data will be permanently removed
                    from our servers.
                  </p>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button variant="secondary" onClick={() => setConfirmModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => setConfirmModalOpen(false)}>
                Delete Account
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <CodeBlock
          language="tsx"
          code={`<Button variant="danger" onClick={() => setConfirmModalOpen(true)}>
  Delete Account
</Button>

<Modal
  isOpen={confirmModalOpen}
  onClose={() => setConfirmModalOpen(false)}
  size="sm"
  centered
>
  <ModalHeader>Confirm Deletion</ModalHeader>
  <ModalBody>
    <div className="flex items-start gap-3">
      <span className="text-red-500 text-xl">⚠️</span>
      <div>
        <p className="font-medium mb-2">
          Are you sure you want to delete your account?
        </p>
        <p className="text-gray-600 text-sm">
          This action cannot be undone.
        </p>
      </div>
    </div>
  </ModalBody>
  <ModalFooter>
    <Button variant="secondary" onClick={() => setConfirmModalOpen(false)}>
      Cancel
    </Button>
    <Button variant="danger" onClick={() => setConfirmModalOpen(false)}>
      Delete Account
    </Button>
  </ModalFooter>
</Modal>`}
        />
      </section>

      {/* API Reference */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
        
        <h3 className="text-xl font-semibold mb-3">Modal Props</h3>
        <div className="overflow-x-auto mb-6">
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
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">isOpen</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Whether the modal is currently open</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onClose</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">{`() => void`}</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Callback function called when the modal should close</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">children</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">React.ReactNode</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">The content of the modal</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">size</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'sm' | 'md' | 'lg' | 'xl' | 'full'</td>
                <td className="border border-gray-300 px-4 py-2">'md'</td>
                <td className="border border-gray-300 px-4 py-2">The size of the modal</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">closeOnEsc</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-300 px-4 py-2">true</td>
                <td className="border border-gray-300 px-4 py-2">Whether the modal should close when the escape key is pressed</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">closeOnOverlayClick</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-300 px-4 py-2">true</td>
                <td className="border border-gray-300 px-4 py-2">Whether the modal should close when clicking the overlay</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">centered</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-300 px-4 py-2">true</td>
                <td className="border border-gray-300 px-4 py-2">Whether the modal is centered vertically</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">hasCloseButton</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-300 px-4 py-2">true</td>
                <td className="border border-gray-300 px-4 py-2">Whether the modal has a close button in the top right corner</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">scrollable</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-300 px-4 py-2">true</td>
                <td className="border border-gray-300 px-4 py-2">Whether to show a scrollbar when content overflows</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">backdrop</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean | 'static'</td>
                <td className="border border-gray-300 px-4 py-2">true</td>
                <td className="border border-gray-300 px-4 py-2">Whether the modal should have a backdrop</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">animationDuration</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">number</td>
                <td className="border border-gray-300 px-4 py-2">300</td>
                <td className="border border-gray-300 px-4 py-2">Animation duration in milliseconds</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-3">ModalHeader Props</h3>
        <div className="overflow-x-auto mb-6">
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
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">children</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">React.ReactNode</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">The content of the modal header</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onClose</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">{`() => void`}</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Callback function called when the close button is clicked</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">hasCloseButton</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-300 px-4 py-2">true</td>
                <td className="border border-gray-300 px-4 py-2">Whether the modal header has a close button</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-3">ModalBody Props</h3>
        <div className="overflow-x-auto mb-6">
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
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">children</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">React.ReactNode</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">The content of the modal body</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-3">ModalFooter Props</h3>
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
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">children</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">React.ReactNode</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">The content of the modal footer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Accessibility</h2>
        <div className="prose prose-gray max-w-none">
          <ul className="space-y-2">
            <li>✅ Focus trap within modal when open</li>
            <li>✅ Focus returns to trigger element when closed</li>
            <li>✅ Screen reader compatible with proper ARIA attributes</li>
            <li>✅ Keyboard navigation support</li>
            <li>✅ High contrast mode support</li>
            <li>✅ Portal rendering for proper stacking</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-6 mb-3">Keyboard Navigation</h3>
          <ul className="space-y-1">
            <li><kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Escape</kbd> - Close modal (if closeOnEsc is true)</li>
            <li><kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Tab</kbd> - Navigate forward through focusable elements</li>
            <li><kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Shift + Tab</kbd> - Navigate backward through focusable elements</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-6 mb-3">ARIA Attributes</h3>
          <ul className="space-y-1">
            <li><code>role="dialog"</code> - Identifies the modal as a dialog</li>
            <li><code>aria-modal="true"</code> - Indicates the dialog is modal</li>
            <li><code>aria-labelledby</code> - References the modal title</li>
            <li><code>aria-describedby</code> - References the modal description</li>
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
              <li>Use modals for focused tasks that require user attention</li>
              <li>Keep modal content concise and actionable</li>
              <li>Provide clear close mechanisms (X button, Cancel, etc.)</li>
              <li>Use appropriate sizes based on content complexity</li>
              <li>Handle focus management properly</li>
              <li>Use confirmation modals for destructive actions</li>
              <li>Test with keyboard navigation and screen readers</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-red-500 bg-red-50 p-4">
            <h4 className="font-semibold text-red-800 mb-2">❌ Don't</h4>
            <ul className="text-red-700 space-y-1">
              <li>Use modals for simple notifications (use alerts or toasts instead)</li>
              <li>Stack multiple modals on top of each other</li>
              <li>Make modals too large or too small for their content</li>
              <li>Use modals for primary navigation</li>
              <li>Disable close mechanisms without good reason</li>
              <li>Put forms with many fields in small modals</li>
              <li>Use modals on mobile for complex workflows</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common Patterns */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Common Patterns</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">🎯 Confirmation Dialog</h3>
            <p className="text-gray-600 mb-2">For confirming destructive actions like deletions</p>
            <ul className="text-sm text-gray-500 list-disc list-inside">
              <li>Small size, centered</li>
              <li>Clear warning message</li>
              <li>Two actions: Cancel and Confirm</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">📝 Form Modal</h3>
            <p className="text-gray-600 mb-2">For data entry and editing</p>
            <ul className="text-sm text-gray-500 list-disc list-inside">
              <li>Medium to large size</li>
              <li>Scrollable if content is long</li>
              <li>Save and Cancel actions</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">ℹ️ Information Modal</h3>
            <p className="text-gray-600 mb-2">For displaying detailed information</p>
            <ul className="text-sm text-gray-500 list-disc list-inside">
              <li>Size based on content</li>
              <li>Single close action</li>
              <li>Scrollable for long content</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">🎉 Success Modal</h3>
            <p className="text-gray-600 mb-2">For celebrating completed actions</p>
            <ul className="text-sm text-gray-500 list-disc list-inside">
              <li>Small to medium size</li>
              <li>Centered with success indicators</li>
              <li>Next step or close actions</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
