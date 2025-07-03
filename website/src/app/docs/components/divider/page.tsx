'use client'

import { useState } from 'react'
// @ts-ignore - Required for component usage
import { Divider, Card } from '@akitectio/aki-ui'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

export default function DividerPage() {
  return (
    <PageHeader
      title="Divider"
      description="A visual separator used to create clear boundaries between different sections of content."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">Divider</h2>
          <p className="mb-4">
            Divider is a visual separator that can be used to create clear boundaries between different sections of content. It can be horizontal or vertical, with various style options.
          </p>

          <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
            <h3 className="text-lg font-semibold mb-3">Basic Divider Example</h3>
            {/* @ts-ignore */}
            <Divider />
          </div>

          <CodeBlock
            code={`import { Divider } from "@akitectio/aki-ui";

export default function DividerExample() {
  return (
    <Divider />
  );
}`}
            language="jsx"
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Orientations</h2>
          <p className="mb-4">
            Dividers can be horizontal (default) or vertical to match your layout needs.
          </p>

          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
              <h3 className="text-lg font-semibold mb-3">Horizontal</h3>
              {/* @ts-ignore */}
              <Divider />
            </div>

            <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
              <h3 className="text-lg font-semibold mb-3">Vertical</h3>
              <div className="h-24 flex items-center justify-center">
                {/* @ts-ignore */}
                <Divider orientation="vertical" className="h-full" />
              </div>
            </div>
          </div>

          <CodeBlock
            code={`import { Divider } from "@akitectio/aki-ui";

export default function DividerOrientations() {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full">
        <p className="mb-2">Horizontal (Default)</p>
        <Divider />
      </div>
      
      <div className="h-32">
        <p className="mb-2">Vertical</p>
        <Divider orientation="vertical" className="h-full" />
      </div>
    </div>
  );
}`}
            language="jsx"
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Variants</h2>
          <p className="mb-4">
            Dividers come in different style variants to match your design.
          </p>

          <div className="mb-6 grid gap-6 md:grid-cols-3">
            <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
              <h3 className="text-sm font-medium mb-3">Solid (Default)</h3>
              {/* @ts-ignore */}
              <Divider variant="solid" />
            </div>

            <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
              <h3 className="text-sm font-medium mb-3">Dashed</h3>
              {/* @ts-ignore */}
              <Divider variant="dashed" />
            </div>

            <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
              <h3 className="text-sm font-medium mb-3">Dotted</h3>
              {/* @ts-ignore */}
              <Divider variant="dotted" />
            </div>
          </div>

          <CodeBlock
            code={`import { Divider } from "@akitectio/aki-ui";

export default function DividerVariants() {
  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2">Solid</p>
        <Divider variant="solid" />
      </div>
      
      <div>
        <p className="mb-2">Dashed</p>
        <Divider variant="dashed" />
      </div>
      
      <div>
        <p className="mb-2">Dotted</p>
        <Divider variant="dotted" />
      </div>
    </div>
  );
}`}
            language="jsx"
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Colors and Thickness</h2>
          <p className="mb-4">
            Customize the appearance of dividers with different colors and thicknesses.
          </p>

          <div className="mb-6 grid gap-6 md:grid-cols-3">
            <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
              <h3 className="text-sm font-medium mb-3">Custom Color</h3>
              {/* @ts-ignore */}
              <Divider color="#3B82F6" />
            </div>

            <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
              <h3 className="text-sm font-medium mb-3">Custom Thickness</h3>
              {/* @ts-ignore */}
              <Divider thickness={3} />
            </div>

            <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
              <h3 className="text-sm font-medium mb-3">Color & Thickness</h3>
              {/* @ts-ignore */}
              <Divider color="#10B981" thickness={2} />
            </div>
          </div>

          <CodeBlock
            code={`import { Divider } from "@akitectio/aki-ui";

export default function CustomDividers() {
  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2">Custom Color</p>
        <Divider color="#3B82F6" />
      </div>
      
      <div>
        <p className="mb-2">Custom Thickness</p>
        <Divider thickness={3} />
      </div>
      
      <div>
        <p className="mb-2">Custom Color and Thickness</p>
        <Divider color="#10B981" thickness={2} />
      </div>
    </div>
  );
}`}
            language="jsx"
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Divider with Label</h2>
          <p className="mb-4">
            Add text labels to dividers to provide additional context.
          </p>

          <div className="mb-6 grid gap-6 md:grid-cols-3">
            <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
              {/* @ts-ignore */}
              <Divider label="OR" />
            </div>

            <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
              {/* @ts-ignore */}
              <Divider label="CENTER" labelAlignment="center" />
            </div>

            <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
              {/* @ts-ignore */}
              <Divider label="RIGHT" labelAlignment="right" />
            </div>
          </div>

          <CodeBlock
            code={`import { Divider } from "@akitectio/aki-ui";

export default function DividerWithLabel() {
  return (
    <div className="space-y-6">
      <Divider label="OR" />
      
      <Divider 
        label="CENTER" 
        labelAlignment="center" 
      />
      
      <Divider 
        label="LEFT" 
        labelAlignment="left" 
      />
      
      <Divider 
        label="RIGHT" 
        labelAlignment="right" 
      />
      
      <Divider 
        label={<span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">CUSTOM</span>} 
        color="#3B82F6" 
      />
    </div>
  );
}`}
            language="jsx"
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Divider in a Card</h2>
          <p className="mb-4">
            Use dividers to separate different sections within a card or container.
          </p>

          <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
            {/* @ts-ignore */}
            <Card className="w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-sm">
              <div className="p-4">
                <h3 className="text-lg font-medium">Card Header</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">This is the card header content</p>
              </div>

              {/* @ts-ignore */}
              <Divider />

              <div className="p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">This is the card body content</p>
              </div>

              {/* @ts-ignore */}
              <Divider />

              <div className="p-4 bg-gray-50 dark:bg-gray-800/50">
                <p className="text-sm text-gray-600 dark:text-gray-400">Card Footer</p>
              </div>
            </Card>
          </div>

          <CodeBlock
            code={`import { Divider, Card } from "@akitectio/aki-ui";

export default function DividerInCard() {
  return (
    <Card className="w-80 overflow-hidden">
      <div className="p-4">
        <h3 className="text-lg font-medium">Card Header</h3>
        <p className="text-sm text-gray-600">This is the card header content</p>
      </div>
      
      <Divider />
      
      <div className="p-4">
        <p className="text-sm text-gray-600">This is the card body content</p>
      </div>
      
      <Divider />
      
      <div className="p-4 bg-gray-50">
        <p className="text-sm text-gray-600">Card Footer</p>
      </div>
    </Card>
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">orientation</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{'horizontal, vertical'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{'horizontal'}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">The orientation of the divider</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">variant</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{'solid, dashed, dotted'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{'solid'}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">The style variant of the divider</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">thickness</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">number</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">1</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">The thickness of the divider in pixels</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">color</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">The color of the divider</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">light</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Whether the divider should have a lighter color</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">margin</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">number</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">0</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">The margin around the divider in pixels</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">label</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">ReactNode</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Label to display in the middle of the divider</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">labelAlignment</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{'center, left, right'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{'center'}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Alignment of the label within the divider</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">className</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Additional CSS classes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </PageHeader>
  )
}