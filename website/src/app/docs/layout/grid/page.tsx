'use client'

import React from 'react'
import { Grid, GridItem } from '@akitectio/aki-ui'

export default function GridDocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Grid</h1>
        <p className="text-lg text-gray-600 mb-6">
          A flexible grid system for creating responsive layouts with ease.
        </p>
      </div>

      {/* API Reference */}
      <section>
        <h2 className="text-2xl font-bold mb-4">API Reference</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-3">Grid Props</h3>
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
                  <td className="py-2 pr-4 font-mono">cols</td>
                  <td className="py-2 pr-4">number | Responsive</td>
                  <td className="py-2 pr-4">1</td>
                  <td className="py-2">Number of columns</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono">gap</td>
                  <td className="py-2 pr-4">number | string | Responsive</td>
                  <td className="py-2 pr-4">4</td>
                  <td className="py-2">Gap between grid items</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono">rows</td>
                  <td className="py-2 pr-4">number | Responsive</td>
                  <td className="py-2 pr-4">auto</td>
                  <td className="py-2">Number of rows</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono">flow</td>
                  <td className="py-2 pr-4">'row' | 'col' | 'row-dense' | 'col-dense'</td>
                  <td className="py-2 pr-4">'row'</td>
                  <td className="py-2">Grid auto flow direction</td>
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

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">GridItem Props</h3>
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
                  <td className="py-2 pr-4 font-mono">colSpan</td>
                  <td className="py-2 pr-4">number | Responsive</td>
                  <td className="py-2 pr-4">1</td>
                  <td className="py-2">Number of columns to span</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono">rowSpan</td>
                  <td className="py-2 pr-4">number | Responsive</td>
                  <td className="py-2 pr-4">1</td>
                  <td className="py-2">Number of rows to span</td>
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

      {/* Basic Usage */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <div className="bg-white p-6 border rounded-lg">
          <div className="mb-4">
            <Grid cols={3} gap={4}>
              <GridItem className="bg-blue-100 p-4 rounded">Item 1</GridItem>
              <GridItem className="bg-blue-100 p-4 rounded">Item 2</GridItem>
              <GridItem className="bg-blue-100 p-4 rounded">Item 3</GridItem>
              <GridItem className="bg-blue-100 p-4 rounded">Item 4</GridItem>
              <GridItem className="bg-blue-100 p-4 rounded">Item 5</GridItem>
              <GridItem className="bg-blue-100 p-4 rounded">Item 6</GridItem>
            </Grid>
          </div>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<Grid cols={3} gap={4}>
  <GridItem>Item 1</GridItem>
  <GridItem>Item 2</GridItem>
  <GridItem>Item 3</GridItem>
  <GridItem>Item 4</GridItem>
  <GridItem>Item 5</GridItem>
  <GridItem>Item 6</GridItem>
</Grid>`}
          </pre>
        </div>
      </section>

      {/* Responsive Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Responsive Grid</h2>
        <div className="bg-white p-6 border rounded-lg">
          <div className="mb-4">
            <Grid cols={{ base: 1, md: 2, lg: 3 }} gap={4}>
              <GridItem className="bg-green-100 p-4 rounded">Responsive 1</GridItem>
              <GridItem className="bg-green-100 p-4 rounded">Responsive 2</GridItem>
              <GridItem className="bg-green-100 p-4 rounded">Responsive 3</GridItem>
              <GridItem className="bg-green-100 p-4 rounded">Responsive 4</GridItem>
              <GridItem className="bg-green-100 p-4 rounded">Responsive 5</GridItem>
              <GridItem className="bg-green-100 p-4 rounded">Responsive 6</GridItem>
            </Grid>
          </div>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<Grid cols={{ base: 1, md: 2, lg: 3 }} gap={4}>
  <GridItem>Responsive 1</GridItem>
  <GridItem>Responsive 2</GridItem>
  <GridItem>Responsive 3</GridItem>
  <GridItem>Responsive 4</GridItem>
  <GridItem>Responsive 5</GridItem>
  <GridItem>Responsive 6</GridItem>
</Grid>`}
          </pre>
        </div>
      </section>

      {/* Grid with Spans */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Grid with Spans</h2>
        <div className="bg-white p-6 border rounded-lg">
          <div className="mb-4">
            <Grid cols={4} gap={4}>
              <GridItem colSpan={2} className="bg-purple-100 p-4 rounded">Span 2 columns</GridItem>
              <GridItem className="bg-purple-100 p-4 rounded">Item 1</GridItem>
              <GridItem className="bg-purple-100 p-4 rounded">Item 2</GridItem>
              <GridItem className="bg-purple-100 p-4 rounded">Item 3</GridItem>
              <GridItem colSpan={3} className="bg-purple-100 p-4 rounded">Span 3 columns</GridItem>
            </Grid>
          </div>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<Grid cols={4} gap={4}>
  <GridItem colSpan={2}>Span 2 columns</GridItem>
  <GridItem>Item 1</GridItem>
  <GridItem>Item 2</GridItem>
  <GridItem>Item 3</GridItem>
  <GridItem colSpan={3}>Span 3 columns</GridItem>
</Grid>`}
          </pre>
        </div>
      </section>

      {/* Auto-fit Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Auto-fit Grid</h2>
        <div className="bg-white p-6 border rounded-lg">
          <div className="mb-4">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
              <div className="bg-yellow-100 p-4 rounded">Auto-fit 1</div>
              <div className="bg-yellow-100 p-4 rounded">Auto-fit 2</div>
              <div className="bg-yellow-100 p-4 rounded">Auto-fit 3</div>
              <div className="bg-yellow-100 p-4 rounded">Auto-fit 4</div>
            </div>
          </div>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
  <div>Auto-fit 1</div>
  <div>Auto-fit 2</div>
  <div>Auto-fit 3</div>
  <div>Auto-fit 4</div>
</div>`}
          </pre>
        </div>
      </section>
    </div>
  )
}
