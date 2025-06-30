'use client'

import React from 'react'
import { useBreakpoint, useMediaQuery, breakpoints } from '@akitectio/aki-ui'

const BreakpointDemo = () => {
  const currentBreakpoint = useBreakpoint()
  const isMd = useMediaQuery('md')
  const isLg = useMediaQuery('lg')
  const isXl = useMediaQuery('xl')

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="space-y-2">
        <p><strong>Current Breakpoint:</strong> {currentBreakpoint}</p>
        <p><strong>Is MD or larger:</strong> {isMd ? 'Yes' : 'No'}</p>
        <p><strong>Is LG or larger:</strong> {isLg ? 'Yes' : 'No'}</p>
        <p><strong>Is XL or larger:</strong> {isXl ? 'Yes' : 'No'}</p>
      </div>
    </div>
  )
}

export default function BreakpointsDocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Breakpoints</h1>
        <p className="text-lg text-gray-600 mb-6">
          Responsive design utilities and hooks for building adaptive layouts that work across all screen sizes.
        </p>
      </div>

      {/* Breakpoint Values */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Breakpoint Values</h2>
        <div className="bg-white p-6 border rounded-lg">
          <p className="mb-4">Aki UI uses Tailwind CSS default breakpoints:</p>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4">Breakpoint</th>
                  <th className="text-left py-2 pr-4">Min Width</th>
                  <th className="text-left py-2 pr-4">Max Width</th>
                  <th className="text-left py-2">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono">sm</td>
                  <td className="py-2 pr-4">640px</td>
                  <td className="py-2 pr-4">767px</td>
                  <td className="py-2">Small devices (phones)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono">md</td>
                  <td className="py-2 pr-4">768px</td>
                  <td className="py-2 pr-4">1023px</td>
                  <td className="py-2">Medium devices (tablets)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono">lg</td>
                  <td className="py-2 pr-4">1024px</td>
                  <td className="py-2 pr-4">1279px</td>
                  <td className="py-2">Large devices (laptops)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono">xl</td>
                  <td className="py-2 pr-4">1280px</td>
                  <td className="py-2 pr-4">1535px</td>
                  <td className="py-2">Extra large devices (desktops)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono">2xl</td>
                  <td className="py-2 pr-4">1536px</td>
                  <td className="py-2 pr-4">∞</td>
                  <td className="py-2">2X large devices (large desktops)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Live Demo</h2>
        <div className="bg-white p-6 border rounded-lg">
          <p className="mb-4">Resize your browser window to see the breakpoint detection in action:</p>
          <BreakpointDemo />
        </div>
      </section>

      {/* useBreakpoint Hook */}
      <section>
        <h2 className="text-2xl font-bold mb-4">useBreakpoint Hook</h2>
        <div className="bg-white p-6 border rounded-lg">
          <p className="mb-4">
            The <code className="bg-gray-100 px-2 py-1 rounded">useBreakpoint</code> hook returns the current active breakpoint.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`import { useBreakpoint } from '@akitectio/aki-ui'

function MyComponent() {
  const breakpoint = useBreakpoint()
  
  return (
    <div>
      Current breakpoint: {breakpoint}
    </div>
  )
}`}
          </pre>
          
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2">Returns:</h4>
            <p className="text-sm"><code>'sm' | 'md' | 'lg' | 'xl' | '2xl'</code></p>
          </div>
        </div>
      </section>

      {/* useMediaQuery Hook */}
      <section>
        <h2 className="text-2xl font-bold mb-4">useMediaQuery Hook</h2>
        <div className="bg-white p-6 border rounded-lg">
          <p className="mb-4">
            The <code className="bg-gray-100 px-2 py-1 rounded">useMediaQuery</code> hook checks if the screen size matches a specific breakpoint or larger.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`import { useMediaQuery } from '@akitectio/aki-ui'

function MyComponent() {
  const isMobile = useMediaQuery('sm')
  const isTablet = useMediaQuery('md')
  const isDesktop = useMediaQuery('lg')
  
  return (
    <div>
      {isMobile && !isTablet && <MobileLayout />}
      {isTablet && !isDesktop && <TabletLayout />}
      {isDesktop && <DesktopLayout />}
    </div>
  )
}`}
          </pre>
          
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2">Parameters:</h4>
            <p className="text-sm mb-2"><code>breakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl'</code></p>
            <h4 className="font-semibold mb-2">Returns:</h4>
            <p className="text-sm"><code>boolean</code> - true if screen is at or above the specified breakpoint</p>
          </div>
        </div>
      </section>

      {/* Responsive Component Props */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Responsive Component Props</h2>
        <div className="bg-white p-6 border rounded-lg">
          <p className="mb-4">
            Many Aki UI components accept responsive props that can be configured per breakpoint:
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`import { Grid, Stack } from '@akitectio/aki-ui'

// Responsive grid columns
<Grid cols={{ base: 1, md: 2, lg: 3, xl: 4 }}>
  {/* Grid items */}
</Grid>

// Responsive stack direction
<Stack direction={{ base: 'vertical', md: 'horizontal' }}>
  {/* Stack items */}
</Stack>

// Responsive spacing
<Stack spacing={{ base: 2, md: 4, lg: 6 }}>
  {/* Stack items */}
</Stack>`}
          </pre>
          
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
            <h4 className="font-semibold mb-2 text-yellow-800">💡 Tip:</h4>
            <p className="text-yellow-700 text-sm">
              Use <code className="bg-yellow-100 px-1 rounded">base</code> for the default value (mobile-first), 
              then specify breakpoint-specific values as needed.
            </p>
          </div>
        </div>
      </section>

      {/* Responsive Utilities */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Responsive Utilities</h2>
        
        {/* getResponsiveClasses */}
        <div className="bg-white p-6 border rounded-lg mb-4">
          <h3 className="text-lg font-semibold mb-3">getResponsiveClasses</h3>
          <p className="mb-4">
            A utility function that converts responsive prop objects to CSS class strings:
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`import { getResponsiveClasses } from '@akitectio/aki-ui'

const classes = getResponsiveClasses({
  base: 'grid-cols-1',
  md: 'grid-cols-2',
  lg: 'grid-cols-3'
})
// Returns: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"`}
          </pre>
        </div>

        {/* breakpoints constant */}
        <div className="bg-white p-6 border rounded-lg">
          <h3 className="text-lg font-semibold mb-3">breakpoints constant</h3>
          <p className="mb-4">
            Access the breakpoint values directly for custom media queries:
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`import { breakpoints } from '@akitectio/aki-ui'

// Use in custom CSS or styled-components
const customMediaQuery = \`@media (min-width: \${breakpoints.md}px)\`

// Available values:
// breakpoints.sm = 640
// breakpoints.md = 768  
// breakpoints.lg = 1024
// breakpoints.xl = 1280
// breakpoints['2xl'] = 1536`}
          </pre>
        </div>
      </section>

      {/* Best Practices */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
        <div className="bg-white p-6 border rounded-lg">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">1. Mobile-First Approach</h4>
              <p className="text-sm text-gray-600">
                Always start with the mobile layout using the <code className="bg-gray-100 px-1 rounded">base</code> key, 
                then progressively enhance for larger screens.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">2. Use Semantic Breakpoints</h4>
              <p className="text-sm text-gray-600">
                Choose breakpoints based on your content and design needs, not just device sizes.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">3. Test on Real Devices</h4>
              <p className="text-sm text-gray-600">
                While browser dev tools are great for development, always test on real devices to ensure optimal user experience.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">4. Performance Considerations</h4>
              <p className="text-sm text-gray-600">
                The breakpoint hooks use event listeners that clean up automatically. 
                Use them liberally without worrying about performance impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
