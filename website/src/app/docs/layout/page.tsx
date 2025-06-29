'use client'

import React from 'react'
import Link from 'next/link'
import { Grid, Stack } from '@akitectio/aki-ui'

export default function LayoutDocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Layout</h1>
        <p className="text-lg text-gray-600 mb-6">
          Powerful layout components and utilities for building responsive, flexible interfaces.
        </p>
      </div>

      {/* Overview */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <div className="bg-white p-6 border rounded-lg">
          <p className="mb-4">
            Aki UI provides a comprehensive set of layout components that make it easy to create 
            responsive designs without writing custom CSS. All layout components support responsive 
            props that adapt to different screen sizes.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 p-4 rounded">
            <h4 className="font-semibold mb-2 text-blue-800">🎯 Key Features:</h4>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• Responsive-first design with mobile-first approach</li>
              <li>• TypeScript support with full type safety</li>
              <li>• Consistent API across all layout components</li>
              <li>• Zero runtime CSS-in-JS - uses Tailwind classes</li>
              <li>• Flexible and composable component architecture</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Components */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Components</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Grid Card */}
          <Link href="/docs/layout/grid" className="group">
            <div className="bg-white p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">Grid</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Flexible grid system with responsive columns, rows, and gap control.
              </p>
              <div className="text-xs text-gray-500">
                Features: Responsive columns • Grid spans • Auto-fit layouts
              </div>
            </div>
          </Link>

          {/* Stack Card */}
          <Link href="/docs/layout/stack" className="group">
            <div className="bg-white p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-green-600 transition-colors">Stack</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Arrange elements in horizontal or vertical stacks with consistent spacing.
              </p>
              <div className="text-xs text-gray-500">
                Features: Direction control • Alignment • Wrapping • Spacing
              </div>
            </div>
          </Link>

          {/* Breakpoints Card */}
          <Link href="/docs/layout/breakpoints" className="group">
            <div className="bg-white p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-purple-600 transition-colors">Breakpoints</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Responsive design utilities and hooks for adaptive layouts.
              </p>
              <div className="text-xs text-gray-500">
                Features: Breakpoint hooks • Media queries • Responsive props
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Quick Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Quick Examples</h2>
        
        {/* Responsive Grid Example */}
        <div className="bg-white p-6 border rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-3">Responsive Card Grid</h3>
          <div className="mb-4">
            <Grid cols={{ base: 1, md: 2, lg: 3 }} gap={4}>
              <div className="bg-blue-100 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Card 1</h4>
                <p className="text-sm text-gray-600">Sample card content with some text.</p>
              </div>
              <div className="bg-blue-100 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Card 2</h4>
                <p className="text-sm text-gray-600">Sample card content with some text.</p>
              </div>
              <div className="bg-blue-100 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Card 3</h4>
                <p className="text-sm text-gray-600">Sample card content with some text.</p>
              </div>
            </Grid>
          </div>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<Grid cols={{ base: 1, md: 2, lg: 3 }} gap={4}>
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</Grid>`}
          </pre>
        </div>

        {/* Responsive Stack Example */}
        <div className="bg-white p-6 border rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Responsive Navigation</h3>
          <div className="mb-4">
            <Stack 
              direction={{ base: 'vertical', md: 'horizontal' }} 
              spacing={4} 
              align="center"
              className="bg-gray-50 p-4 rounded"
            >
              <div className="font-semibold">Logo</div>
              <Stack direction="horizontal" spacing={6} className="flex-1">
                <a href="#" className="text-sm hover:text-blue-600">Home</a>
                <a href="#" className="text-sm hover:text-blue-600">About</a>
                <a href="#" className="text-sm hover:text-blue-600">Services</a>
                <a href="#" className="text-sm hover:text-blue-600">Contact</a>
              </Stack>
              <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm">
                Get Started
              </button>
            </Stack>
          </div>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<Stack 
  direction={{ base: 'vertical', md: 'horizontal' }} 
  spacing={4} 
  align="center"
>
  <div>Logo</div>
  <Stack direction="horizontal" spacing={6}>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
  </Stack>
  <button>Get Started</button>
</Stack>`}
          </pre>
        </div>
      </section>

      {/* Getting Started */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
        <div className="bg-white p-6 border rounded-lg">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">1. Import Components</h4>
              <pre className="bg-gray-100 p-3 rounded text-sm">
{`import { Grid, GridItem, Stack } from '@akitectio/aki-ui'`}
              </pre>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">2. Use Responsive Props</h4>
              <p className="text-sm text-gray-600 mb-2">
                Most layout components accept responsive props using breakpoint objects:
              </p>
              <pre className="bg-gray-100 p-3 rounded text-sm">
{`// Single value for all breakpoints
<Grid cols={3} />

// Responsive values
<Grid cols={{ base: 1, md: 2, lg: 3 }} />`}
              </pre>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">3. Compose Layouts</h4>
              <p className="text-sm text-gray-600 mb-2">
                Combine components to create complex, responsive layouts:
              </p>
              <pre className="bg-gray-100 p-3 rounded text-sm">
{`<Stack spacing={8}>
  <header>Header content</header>
  <Grid cols={{ base: 1, lg: 3 }} gap={6}>
    <Stack spacing={4}>Sidebar</Stack>
    <Stack spacing={6}>Main content</Stack>
    <Stack spacing={4}>Aside</Stack>
  </Grid>
</Stack>`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
