'use client'

import { useState } from 'react'
// @ts-ignore - Required for component usage
import { Chip } from '@akitectio/aki-ui'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

export default function ChipPage() {
  const handleClick = () => {
    alert('Chip clicked')
  }

  const handleDelete = () => {
    alert('Delete clicked')
  }

  return (
    <PageHeader
      title="Chip"
      description="Compact elements that represent an input, attribute, or action. They can be used for selections, filtering, or as interactive elements."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">Chip</h2>
          <p className="mb-4">
            Chips are compact elements that represent an input, attribute, or action. They can be used for selections, filtering, or as interactive elements.
          </p>

          <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
            <h3 className="text-lg font-semibold mb-3">Basic Chip Example</h3>
            <div className="flex flex-wrap gap-2">
              {/* @ts-ignore */}
              <Chip label="Basic Chip" />
            </div>
          </div>

          <CodeBlock
            code={`import { Chip } from "@akitectio/aki-ui";

export default function ChipExample() {
  return (
    <Chip label="Basic Chip" />
  );
}`}
            language="jsx"
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Variants</h2>
          <p className="mb-4">
            Chips come in three visual style variants: solid, outlined, and soft.
          </p>

          <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
            <div className="flex flex-wrap gap-2">
              {/* @ts-ignore */}
              <Chip label="Solid" variant="solid" color="primary" />
              {/* @ts-ignore */}
              <Chip label="Outlined" variant="outlined" color="primary" />
              {/* @ts-ignore */}
              <Chip label="Soft" variant="soft" color="primary" />
            </div>
          </div>

          <CodeBlock
            code={`import { Chip } from "@akitectio/aki-ui";

export default function ChipVariants() {
  return (
    <div className="flex flex-wrap gap-2">
      <Chip label="Solid" variant="solid" />
      <Chip label="Outlined" variant="outlined" />
      <Chip label="Soft" variant="soft" />
    </div>
  );
}`}
            language="jsx"
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Colors</h2>
          <p className="mb-4">
            Chips support various color schemes to represent different states or categories.
          </p>

          <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
            <div className="flex flex-wrap gap-2">
              {/* @ts-ignore */}
              <Chip label="Default" color="default" />
              {/* @ts-ignore */}
              <Chip label="Primary" color="primary" />
              {/* @ts-ignore */}
              <Chip label="Secondary" color="secondary" />
              {/* @ts-ignore */}
              <Chip label="Success" color="success" />
              {/* @ts-ignore */}
              <Chip label="Warning" color="warning" />
              {/* @ts-ignore */}
              <Chip label="Danger" color="danger" />
              {/* @ts-ignore */}
              <Chip label="Info" color="info" />
            </div>
          </div>

          <CodeBlock
            code={`import { Chip } from "@akitectio/aki-ui";

export default function ChipColors() {
  return (
    <div className="flex flex-wrap gap-2">
      <Chip label="Default" color="default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Success" color="success" />
      <Chip label="Warning" color="warning" />
      <Chip label="Danger" color="danger" />
      <Chip label="Info" color="info" />
    </div>
  );
}`}
            language="jsx"
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Sizes</h2>
          <p className="mb-4">
            Chips are available in three sizes: small, medium, and large.
          </p>

          <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center gap-2">
              {/* @ts-ignore */}
              <Chip label="Small" size="sm" color="primary" />
              {/* @ts-ignore */}
              <Chip label="Medium" size="md" color="primary" />
              {/* @ts-ignore */}
              <Chip label="Large" size="lg" color="primary" />
            </div>
          </div>

          <CodeBlock
            code={`import { Chip } from "@akitectio/aki-ui";

export default function ChipSizes() {
  return (
    <div className="flex items-center gap-2">
      <Chip label="Small" size="sm" />
      <Chip label="Medium" size="md" />
      <Chip label="Large" size="lg" />
    </div>
  );
}`}
            language="jsx"
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Interactive Chips</h2>
          <p className="mb-4">
            Chips can be clickable, deletable, or both to support different interaction patterns.
          </p>

          <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
            <div className="flex flex-wrap gap-2">
              {/* @ts-ignore */}
              <Chip
                label="Clickable"
                clickable
                onClick={handleClick}
                color="primary"
              />
              {/* @ts-ignore */}
              <Chip
                label="Deletable"
                deletable
                onDelete={handleDelete}
                color="primary"
              />
              {/* @ts-ignore */}
              <Chip
                label="Both"
                clickable
                deletable
                onClick={handleClick}
                onDelete={handleDelete}
                color="primary"
              />
            </div>
          </div>

          <CodeBlock
            code={`import { Chip } from "@akitectio/aki-ui";

export default function InteractiveChips() {
  return (
    <div className="flex flex-wrap gap-2">
      <Chip 
        label="Clickable" 
        clickable 
        onClick={() => alert('Chip clicked')}
      />
      <Chip 
        label="Deletable" 
        deletable 
        onDelete={() => alert('Delete clicked')}
      />
      <Chip 
        label="Both" 
        clickable 
        deletable
        onClick={() => alert('Chip clicked')}
        onDelete={() => alert('Delete clicked')}
      />
    </div>
  );
}`}
            language="jsx"
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Chips with Icons</h2>
          <p className="mb-4">
            Chips can include icons at the start or end to provide visual context.
          </p>

          <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
            <div className="flex flex-wrap gap-2">
              {/* @ts-ignore */}
              <Chip
                label="With Start Icon"
                color="primary"
                startIcon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                }
              />
              {/* @ts-ignore */}
              <Chip
                label="With End Icon"
                color="primary"
                endIcon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              />
            </div>
          </div>

          <CodeBlock
            code={`import { Chip } from "@akitectio/aki-ui";

export default function ChipsWithIcons() {
  return (
    <div className="flex flex-wrap gap-2">
      <Chip
        label="With Start Icon"
        startIcon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M5 13l4 4L19 7" />
          </svg>
        }
      />
      <Chip
        label="With End Icon"
        endIcon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      />
    </div>
  );
}`}
            language="jsx"
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Chips with Avatar</h2>
          <p className="mb-4">
            Chips can include an avatar for user representation or other visual contexts.
          </p>

          <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
            <div className="flex flex-wrap gap-2">
              {/* @ts-ignore */}
              <Chip
                label="John Doe"
                color="primary"
                avatar={
                  <img
                    src="https://i.pravatar.cc/300?img=1"
                    alt="John Doe"
                    className="rounded-full w-full h-full object-cover"
                  />
                }
              />
            </div>
          </div>

          <CodeBlock
            code={`import { Chip } from "@akitectio/aki-ui";

export default function ChipsWithAvatar() {
  return (
    <div className="flex flex-wrap gap-2">
      <Chip
        label="John Doe"
        avatar={
          <img
            src="https://i.pravatar.cc/300?img=1"
            alt="John Doe"
            className="rounded-full w-full h-full object-cover"
          />
        }
      />
    </div>
  );
}`}
            language="jsx"
          />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Props Reference</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Prop</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Type</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Default</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">label</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Content of the chip</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">variant</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">'solid' | 'outlined' | 'soft'</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">'solid'</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Style variant of the chip</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">size</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">'sm' | 'md' | 'lg'</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">'md'</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Size of the chip</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">color</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">'default'</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Color of the chip</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">disabled</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Whether the chip is disabled</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">clickable</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Whether the chip is clickable</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">deletable</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Whether the chip has a delete button</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">rounded</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">true</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Whether the chip has a circular shape</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">startIcon</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">ReactNode</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Icon displayed at the start of the chip</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">endIcon</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">ReactNode</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Icon displayed at the end of the chip</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">avatar</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">ReactNode</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Avatar element to display at the start of the chip</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">onClick</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{'() => void'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Callback fired when the chip is clicked</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">onDelete</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{'() => void'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Callback fired when the delete icon is clicked</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </PageHeader>
  )
}
