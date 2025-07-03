'use client'

import { useState, useRef, useEffect } from 'react'
import { CodeBlock } from '@/components/CodeBlock'
import { InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function PopoverPage() {
    const [isOpen, setIsOpen] = useState(false)
    const [isFormPopoverOpen, setIsFormPopoverOpen] = useState(false)
    const [isInfoPopoverOpen, setIsInfoPopoverOpen] = useState(false)
    const popoverRef = useRef<HTMLDivElement>(null)
    const formPopoverRef = useRef<HTMLDivElement>(null)
    const infoPopoverRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
            if (formPopoverRef.current && !formPopoverRef.current.contains(event.target as Node)) {
                setIsFormPopoverOpen(false)
            }
            if (infoPopoverRef.current && !infoPopoverRef.current.contains(event.target as Node)) {
                setIsInfoPopoverOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="space-y-8">
            {/* Introduction */}
            <section>
                <h1 className="text-3xl font-bold mb-4">Popover</h1>
                <p className="text-gray-600 mb-6">
                    A small floating content container triggered by click or hover.
                </p>
            </section>

            {/* Import */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Import</h2>
                <CodeBlock language="tsx">
                    {`import { Popover } from '@/components/client-components'

// TypeScript types
import type { 
  PopoverProps,
  PopoverRef,
  PopoverPlacement,
  PopoverTrigger 
} from '@/components/client-components'`}
                </CodeBlock>
            </section>

            {/* Basic Usage */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-medium mb-4">Basic Popover</h3>
                        <div className="relative inline-block" ref={popoverRef}>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                Click me
                            </button>
                            {isOpen && (
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-4 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2">Popover Title</h4>
                                            <p className="text-sm text-gray-600">
                                                This is a basic popover with some content. It can contain text, buttons, or other elements.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="ml-2 text-gray-400 hover:text-gray-600"
                                        >
                                            <XMarkIcon className="h-4 w-4" />
                                        </button>
                                    </div>
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
                                </div>
                            )}
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`import { Popover } from '@/components/client-components'

function BasicPopover() {
  return (
    <Popover
      trigger="click"
      content={
        <div>
          <h4 className="font-medium mb-2">Popover Title</h4>
          <p className="text-sm text-gray-600">
            This is a basic popover with some content.
          </p>
        </div>
      }
    >
      <button>Click me</button>
    </Popover>
  )
}`}
                    </CodeBlock>
                </div>
            </section>

            {/* Form Popover */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Form Popover</h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-medium mb-4">Popover with Form</h3>
                        <div className="relative inline-block" ref={formPopoverRef}>
                            <button
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                onClick={() => setIsFormPopoverOpen(!isFormPopoverOpen)}
                            >
                                Add Comment
                            </button>
                            {isFormPopoverOpen && (
                                <div className="absolute bottom-full left-0 mb-2 w-80 p-4 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                    <div className="space-y-3">
                                        <h4 className="font-medium text-gray-900">Add a comment</h4>
                                        <textarea
                                            className="w-full p-2 border border-gray-300 rounded-md text-sm resize-none"
                                            rows={3}
                                            placeholder="Write your comment here..."
                                        ></textarea>
                                        <div className="flex justify-end space-x-2">
                                            <button
                                                onClick={() => setIsFormPopoverOpen(false)}
                                                className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={() => setIsFormPopoverOpen(false)}
                                                className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
                                            >
                                                Post
                                            </button>
                                        </div>
                                    </div>
                                    <div className="absolute top-full left-8 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
                                </div>
                            )}
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`const formContent = (
  <div className="space-y-3">
    <h4 className="font-medium">Add a comment</h4>
    <textarea
      className="w-full p-2 border border-gray-300 rounded-md text-sm resize-none"
      rows={3}
      placeholder="Write your comment here..."
    />
    <div className="flex justify-end space-x-2">
      <button className="px-3 py-1 text-sm text-gray-600">Cancel</button>
      <button className="px-3 py-1 text-sm bg-green-500 text-white rounded">
        Post
      </button>
    </div>
  </div>
)

<Popover
  trigger="click"
  placement="top-start"
  content={formContent}
  width={320}
>
  <button>Add Comment</button>
</Popover>`}
                    </CodeBlock>
                </div>
            </section>

            {/* Info Popover */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Information Popover</h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-medium mb-4">Hover for Information</h3>
                        <div className="flex items-center space-x-2">
                            <span>User permissions</span>
                            <div
                                className="relative inline-block"
                                ref={infoPopoverRef}
                                onMouseEnter={() => setIsInfoPopoverOpen(true)}
                                onMouseLeave={() => setIsInfoPopoverOpen(false)}
                            >
                                <InformationCircleIcon className="h-5 w-5 text-gray-400 cursor-help" />
                                {isInfoPopoverOpen && (
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-72 p-4 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                        <div className="space-y-2">
                                            <h4 className="font-medium text-gray-900">Permission Levels</h4>
                                            <div className="space-y-1 text-sm text-gray-600">
                                                <div><strong>Read:</strong> Can view content</div>
                                                <div><strong>Write:</strong> Can edit content</div>
                                                <div><strong>Admin:</strong> Can manage users and settings</div>
                                            </div>
                                        </div>
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`import { InformationCircleIcon } from '@heroicons/react/24/outline'

const infoContent = (
  <div className="space-y-2">
    <h4 className="font-medium">Permission Levels</h4>
    <div className="space-y-1 text-sm text-gray-600">
      <div><strong>Read:</strong> Can view content</div>
      <div><strong>Write:</strong> Can edit content</div>
      <div><strong>Admin:</strong> Can manage users and settings</div>
    </div>
  </div>
)

<div className="flex items-center space-x-2">
  <span>User permissions</span>
  <Popover
    trigger="hover"
    placement="top"
    content={infoContent}
    width={288}
  >
    <InformationCircleIcon className="h-5 w-5 text-gray-400 cursor-help" />
  </Popover>
</div>`}
                    </CodeBlock>
                </div>
            </section>

            {/* Positioning */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Positioning</h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-medium mb-4">Different Positions</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
                            {['Top', 'Right', 'Bottom', 'Left'].map((position) => (
                                <div key={position} className="relative">
                                    <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 group w-full">
                                        {position}
                                        <div className={`absolute ${position === 'Top' ? 'bottom-full left-1/2 transform -translate-x-1/2 mb-2' :
                                                position === 'Right' ? 'left-full top-1/2 transform -translate-y-1/2 ml-2' :
                                                    position === 'Bottom' ? 'top-full left-1/2 transform -translate-x-1/2 mt-2' :
                                                        'right-full top-1/2 transform -translate-y-1/2 mr-2'
                                            } w-48 p-3 bg-white border border-gray-300 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}>
                                            <p className="text-sm text-gray-700">{position} positioned popover</p>
                                            <div className={`absolute ${position === 'Top' ? 'top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white' :
                                                    position === 'Right' ? 'right-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-white' :
                                                        position === 'Bottom' ? 'bottom-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-white' :
                                                            'left-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-white'
                                                } w-0 h-0`}></div>
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`// Different placement options
<Popover placement="top" content="Top positioned">
  <button>Top</button>
</Popover>

<Popover placement="right" content="Right positioned">
  <button>Right</button>
</Popover>

<Popover placement="bottom" content="Bottom positioned">
  <button>Bottom</button>
</Popover>

<Popover placement="left" content="Left positioned">
  <button>Left</button>
</Popover>

// With alignment
<Popover placement="top-start" content="Top start">
  <button>Top Start</button>
</Popover>

<Popover placement="top-end" content="Top end">
  <button>Top End</button>
</Popover>`}
                    </CodeBlock>
                </div>
            </section>

            {/* API Reference */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="border border-gray-300 px-4 py-2 text-left">Prop</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">content</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">ReactNode</td>
                                <td className="border border-gray-300 px-4 py-2">-</td>
                                <td className="border border-gray-300 px-4 py-2">Content to display in the popover</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">trigger</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'click' | 'hover' | 'focus'</td>
                                <td className="border border-gray-300 px-4 py-2">'click'</td>
                                <td className="border border-gray-300 px-4 py-2">How to trigger the popover</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">placement</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">PopoverPlacement</td>
                                <td className="border border-gray-300 px-4 py-2">'top'</td>
                                <td className="border border-gray-300 px-4 py-2">Position of the popover</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">width</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">number | string</td>
                                <td className="border border-gray-300 px-4 py-2">'auto'</td>
                                <td className="border border-gray-300 px-4 py-2">Width of the popover</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">maxWidth</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">number | string</td>
                                <td className="border border-gray-300 px-4 py-2">320</td>
                                <td className="border border-gray-300 px-4 py-2">Maximum width of the popover</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">offset</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">number</td>
                                <td className="border border-gray-300 px-4 py-2">8</td>
                                <td className="border border-gray-300 px-4 py-2">Distance from trigger element</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">arrow</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                                <td className="border border-gray-300 px-4 py-2">true</td>
                                <td className="border border-gray-300 px-4 py-2">Show arrow pointing to trigger</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">closeOnClickOutside</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                                <td className="border border-gray-300 px-4 py-2">true</td>
                                <td className="border border-gray-300 px-4 py-2">Close when clicking outside</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">closeOnEscape</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                                <td className="border border-gray-300 px-4 py-2">true</td>
                                <td className="border border-gray-300 px-4 py-2">Close when pressing Escape</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">disabled</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                                <td className="border border-gray-300 px-4 py-2">false</td>
                                <td className="border border-gray-300 px-4 py-2">Disable the popover</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onOpen</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">function</td>
                                <td className="border border-gray-300 px-4 py-2">-</td>
                                <td className="border border-gray-300 px-4 py-2">Callback when popover opens</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onClose</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">function</td>
                                <td className="border border-gray-300 px-4 py-2">-</td>
                                <td className="border border-gray-300 px-4 py-2">Callback when popover closes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* PopoverPlacement Type */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">PopoverPlacement Type</h2>
                <CodeBlock language="tsx">
                    {`type PopoverPlacement = 
  | 'top' | 'top-start' | 'top-end'
  | 'right' | 'right-start' | 'right-end'
  | 'bottom' | 'bottom-start' | 'bottom-end'
  | 'left' | 'left-start' | 'left-end'`}
                </CodeBlock>
            </section>

            {/* Accessibility */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Accessibility</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Supports keyboard navigation (Tab, Enter, Escape)</li>
                    <li>ARIA attributes for screen readers (aria-describedby, role="dialog")</li>
                    <li>Focus management when opening/closing</li>
                    <li>Closes on Escape key press</li>
                    <li>Click outside to close functionality</li>
                    <li>Proper focus trapping within complex popovers</li>
                    <li>Respects prefers-reduced-motion for animations</li>
                </ul>
            </section>
        </div>
    )
}
