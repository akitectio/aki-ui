'use client'

import React from 'react'
import { Stack } from '@akitectio/aki-ui'

export default function StackDocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Stack</h1>
        <p className="text-lg text-gray-600 mb-6">
          A layout component for arranging elements in horizontal or vertical stacks with consistent spacing.
        </p>
      </div>

      {/* API Reference */}
      <section>
        <h2 className="text-2xl font-bold mb-4">API Reference</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Stack Props</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4">Prop</th>
                  <th className="text-left py-2 pr-4">Type</th>
                  <th className="text-left py-2 pr-4">Default</th>
                  <th className="text-left py-2">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono">direction</td>
                  <td className="py-2 pr-4">'vertical' | 'horizontal' | Responsive</td>
                  <td className="py-2 pr-4">'vertical'</td>
                  <td className="py-2">Direction of the stack</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono">spacing</td>
                  <td className="py-2 pr-4">number | string | Responsive</td>
                  <td className="py-2 pr-4">4</td>
                  <td className="py-2">Spacing between stack items</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono">align</td>
                  <td className="py-2 pr-4">'start' | 'center' | 'end' | 'stretch' | Responsive</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Alignment along cross axis</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono">justify</td>
                  <td className="py-2 pr-4">'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' | Responsive</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Justification along main axis</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono">wrap</td>
                  <td className="py-2 pr-4">boolean | Responsive</td>
                  <td className="py-2 pr-4">false</td>
                  <td className="py-2">Whether items should wrap</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono">reverse</td>
                  <td className="py-2 pr-4">boolean</td>
                  <td className="py-2 pr-4">false</td>
                  <td className="py-2">Reverse the order of items</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono">as</td>
                  <td className="py-2 pr-4">React.ElementType</td>
                  <td className="py-2 pr-4">'div'</td>
                  <td className="py-2">HTML element to render</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Vertical Stack */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Vertical Stack</h2>
        <div className="bg-white p-6 border rounded-lg">
          <div className="mb-4">
            <Stack spacing={4}>
              <div className="bg-blue-100 p-4 rounded">Item 1</div>
              <div className="bg-blue-100 p-4 rounded">Item 2</div>
              <div className="bg-blue-100 p-4 rounded">Item 3</div>
            </Stack>
          </div>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<Stack spacing={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>`}
          </pre>
        </div>
      </section>

      {/* Horizontal Stack */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Horizontal Stack</h2>
        <div className="bg-white p-6 border rounded-lg">
          <div className="mb-4">
            <Stack direction="horizontal" spacing={4}>
              <div className="bg-green-100 p-4 rounded">Item 1</div>
              <div className="bg-green-100 p-4 rounded">Item 2</div>
              <div className="bg-green-100 p-4 rounded">Item 3</div>
            </Stack>
          </div>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<Stack direction="horizontal" spacing={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>`}
          </pre>
        </div>
      </section>

      {/* Responsive Stack */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Responsive Stack</h2>
        <div className="bg-white p-6 border rounded-lg">
          <div className="mb-4">
            <Stack 
              direction={{ base: 'vertical', md: 'horizontal' }} 
              spacing={{ base: 2, md: 4 }}
            >
              <div className="bg-purple-100 p-4 rounded">Responsive 1</div>
              <div className="bg-purple-100 p-4 rounded">Responsive 2</div>
              <div className="bg-purple-100 p-4 rounded">Responsive 3</div>
            </Stack>
          </div>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<Stack 
  direction={{ base: 'vertical', md: 'horizontal' }} 
  spacing={{ base: 2, md: 4 }}
>
  <div>Responsive 1</div>
  <div>Responsive 2</div>
  <div>Responsive 3</div>
</Stack>`}
          </pre>
        </div>
      </section>

      {/* Alignment */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Alignment</h2>
        
        {/* Center Aligned */}
        <div className="bg-white p-6 border rounded-lg mb-4">
          <h3 className="text-lg font-semibold mb-3">Center Aligned</h3>
          <div className="mb-4">
            <Stack direction="horizontal" spacing={4} align="center" className="min-h-[100px] bg-gray-50 p-4">
              <div className="bg-yellow-100 p-2 rounded">Small</div>
              <div className="bg-yellow-100 p-4 rounded">Medium</div>
              <div className="bg-yellow-100 p-6 rounded">Large</div>
            </Stack>
          </div>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<Stack direction="horizontal" spacing={4} align="center">
  <div>Small</div>
  <div>Medium</div>
  <div>Large</div>
</Stack>`}
          </pre>
        </div>

        {/* Space Between */}
        <div className="bg-white p-6 border rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Space Between</h3>
          <div className="mb-4">
            <Stack direction="horizontal" justify="between" className="bg-gray-50 p-4">
              <div className="bg-red-100 p-4 rounded">Start</div>
              <div className="bg-red-100 p-4 rounded">Middle</div>
              <div className="bg-red-100 p-4 rounded">End</div>
            </Stack>
          </div>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<Stack direction="horizontal" justify="between">
  <div>Start</div>
  <div>Middle</div>
  <div>End</div>
</Stack>`}
          </pre>
        </div>
      </section>

      {/* Wrapping Stack */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Wrapping Stack</h2>
        <div className="bg-white p-6 border rounded-lg">
          <div className="mb-4">
            <Stack direction="horizontal" spacing={4} wrap>
              <div className="bg-indigo-100 p-4 rounded whitespace-nowrap">Item 1</div>
              <div className="bg-indigo-100 p-4 rounded whitespace-nowrap">Item 2</div>
              <div className="bg-indigo-100 p-4 rounded whitespace-nowrap">Item 3</div>
              <div className="bg-indigo-100 p-4 rounded whitespace-nowrap">Item 4</div>
              <div className="bg-indigo-100 p-4 rounded whitespace-nowrap">Item 5</div>
              <div className="bg-indigo-100 p-4 rounded whitespace-nowrap">Item 6</div>
              <div className="bg-indigo-100 p-4 rounded whitespace-nowrap">Item 7</div>
              <div className="bg-indigo-100 p-4 rounded whitespace-nowrap">Item 8</div>
            </Stack>
          </div>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<Stack direction="horizontal" spacing={4} wrap>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
  <div>Item 7</div>
  <div>Item 8</div>
</Stack>`}
          </pre>
        </div>
      </section>

      {/* Reverse Stack */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Reverse Stack</h2>
        <div className="bg-white p-6 border rounded-lg">
          <div className="mb-4">
            <Stack direction="horizontal" spacing={4} reverse>
              <div className="bg-teal-100 p-4 rounded">First</div>
              <div className="bg-teal-100 p-4 rounded">Second</div>
              <div className="bg-teal-100 p-4 rounded">Third</div>
            </Stack>
          </div>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<Stack direction="horizontal" spacing={4} reverse>
  <div>First</div>
  <div>Second</div>
  <div>Third</div>
</Stack>`}
          </pre>
        </div>
      </section>
    </div>
  )
}
