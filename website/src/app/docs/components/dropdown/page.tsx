'use client'

import { useState, useRef, useEffect } from 'react'
import { CodeBlock } from '@/components/CodeBlock'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function DropdownPage() {
    const [isOpen, setIsOpen] = useState(false)
    const [isRightDropdownOpen, setIsRightDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const rightDropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
            if (rightDropdownRef.current && !rightDropdownRef.current.contains(event.target as Node)) {
                setIsRightDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="space-y-8">
            {/* Introduction */}
            <section>
                <h1 className="text-3xl font-bold mb-4">Dropdown</h1>
                <p className="text-gray-600 mb-6">
                    A toggleable menu component for displaying a list of options, actions, or links.
                </p>
            </section>

            {/* Import */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Import</h2>
                <CodeBlock language="tsx">
                    {`import { 
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from '@/components/client-components'

// TypeScript types
import type { 
  DropdownProps,
  DropdownToggleProps,
  DropdownMenuProps,
  DropdownItemProps 
} from '@/components/client-components'`}
                </CodeBlock>
            </section>

            {/* Basic Usage */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-medium mb-4">Basic Dropdown</h3>
                        <div className="relative inline-block" ref={dropdownRef}>
                            <button
                                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                Options
                                <ChevronDownIcon className="ml-2 h-4 w-4" />
                            </button>
                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                    <div className="py-1">
                                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Action 1
                                        </button>
                                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Action 2
                                        </button>
                                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Action 3
                                        </button>
                                        <div className="border-t border-gray-100"></div>
                                        <button className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-gray-100">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from '@/components/client-components'

function BasicDropdown() {
  return (
    <Dropdown>
      <DropdownToggle>
        Options
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Action 1</DropdownItem>
        <DropdownItem>Action 2</DropdownItem>
        <DropdownItem>Action 3</DropdownItem>
        <DropdownItem divider />
        <DropdownItem variant="danger">Delete</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}`}
                    </CodeBlock>
                </div>
            </section>

            {/* Positioning */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Positioning</h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-medium mb-4">Different Positions</h3>
                        <div className="flex flex-wrap gap-4">
                            <div className="relative inline-block" ref={rightDropdownRef}>
                                <button
                                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsRightDropdownOpen(!isRightDropdownOpen)}
                                >
                                    Right Aligned
                                    <ChevronDownIcon className="ml-2 h-4 w-4" />
                                </button>
                                {isRightDropdownOpen && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                        <div className="py-1">
                                            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Left aligned option
                                            </button>
                                            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Another option
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`// Different alignment options
<Dropdown placement="bottom-start">
  <DropdownToggle>Left Aligned</DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Option 1</DropdownItem>
  </DropdownMenu>
</Dropdown>

<Dropdown placement="bottom-end">
  <DropdownToggle>Right Aligned</DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Option 1</DropdownItem>
  </DropdownMenu>
</Dropdown>

<Dropdown placement="top">
  <DropdownToggle>Drop Up</DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Option 1</DropdownItem>
  </DropdownMenu>
</Dropdown>`}
                    </CodeBlock>
                </div>
            </section>

            {/* With Icons and Descriptions */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">With Icons and Descriptions</h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-medium mb-4">Rich Content</h3>
                        <div className="relative inline-block">
                            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                User Menu
                                <ChevronDownIcon className="ml-2 h-4 w-4" />
                            </button>
                            <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                <div className="py-1">
                                    <div className="px-4 py-3 border-b border-gray-100">
                                        <p className="text-sm font-medium text-gray-900">John Doe</p>
                                        <p className="text-sm text-gray-500">john@example.com</p>
                                    </div>
                                    <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        <svg className="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        Profile
                                    </button>
                                    <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        <svg className="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        Settings
                                    </button>
                                    <div className="border-t border-gray-100"></div>
                                    <button className="flex items-center w-full px-4 py-2 text-sm text-red-700 hover:bg-gray-100">
                                        <svg className="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                        Sign out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CodeBlock language="tsx">
                        {`import { UserIcon, CogIcon, LogoutIcon } from '@heroicons/react/24/outline'

<Dropdown>
  <DropdownToggle>User Menu</DropdownToggle>
  <DropdownMenu>
    <DropdownItem header>
      <div>
        <div className="font-medium">John Doe</div>
        <div className="text-sm text-gray-500">john@example.com</div>
      </div>
    </DropdownItem>
    <DropdownItem icon={<UserIcon />}>Profile</DropdownItem>
    <DropdownItem icon={<CogIcon />}>Settings</DropdownItem>
    <DropdownItem divider />
    <DropdownItem icon={<LogoutIcon />} variant="danger">
      Sign out
    </DropdownItem>
  </DropdownMenu>
</Dropdown>`}
                    </CodeBlock>
                </div>
            </section>

            {/* API Reference */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">API Reference</h2>

                <h3 className="text-xl font-medium mb-3">Dropdown Props</h3>
                <div className="overflow-x-auto mb-6">
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
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">placement</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                                <td className="border border-gray-300 px-4 py-2">'bottom-end'</td>
                                <td className="border border-gray-300 px-4 py-2">Dropdown menu placement</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">trigger</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'click' | 'hover'</td>
                                <td className="border border-gray-300 px-4 py-2">'click'</td>
                                <td className="border border-gray-300 px-4 py-2">How to trigger the dropdown</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">disabled</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                                <td className="border border-gray-300 px-4 py-2">false</td>
                                <td className="border border-gray-300 px-4 py-2">Disable the dropdown</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">closeOnSelect</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                                <td className="border border-gray-300 px-4 py-2">true</td>
                                <td className="border border-gray-300 px-4 py-2">Close dropdown when item is selected</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-xl font-medium mb-3">DropdownItem Props</h3>
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
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">variant</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'default' | 'danger'</td>
                                <td className="border border-gray-300 px-4 py-2">'default'</td>
                                <td className="border border-gray-300 px-4 py-2">Visual variant of the item</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">disabled</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                                <td className="border border-gray-300 px-4 py-2">false</td>
                                <td className="border border-gray-300 px-4 py-2">Disable the item</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">divider</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                                <td className="border border-gray-300 px-4 py-2">false</td>
                                <td className="border border-gray-300 px-4 py-2">Render as a divider</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">header</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                                <td className="border border-gray-300 px-4 py-2">false</td>
                                <td className="border border-gray-300 px-4 py-2">Render as a header</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">icon</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">ReactNode</td>
                                <td className="border border-gray-300 px-4 py-2">-</td>
                                <td className="border border-gray-300 px-4 py-2">Icon to display</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onClick</td>
                                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">function</td>
                                <td className="border border-gray-300 px-4 py-2">-</td>
                                <td className="border border-gray-300 px-4 py-2">Click handler</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Accessibility */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Accessibility</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Supports keyboard navigation (Tab, Enter, Escape, Arrow keys)</li>
                    <li>ARIA attributes for screen readers (aria-expanded, aria-haspopup)</li>
                    <li>Focus management when opening/closing</li>
                    <li>Proper role attributes for menu items</li>
                    <li>Closes on Escape key press</li>
                    <li>Supports disabled state with proper ARIA attributes</li>
                </ul>
            </section>
        </div>
    )
}
