'use client'

import { useState } from 'react'
import { Button, Card } from '@akitectio/aki-ui'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

export default function ThemingPage() {
  const [currentTheme, setCurrentTheme] = useState('light')

  const colorPalette = [
    { name: 'Primary', light: '#3B82F6', dark: '#60A5FA' },
    { name: 'Secondary', light: '#6B7280', dark: '#9CA3AF' },
    { name: 'Success', light: '#10B981', dark: '#34D399' },
    { name: 'Warning', light: '#F59E0B', dark: '#FBBF24' },
    { name: 'Error', light: '#EF4444', dark: '#F87171' },
  ]

  return (
    <PageHeader
      title="Theming"
      description="Customize Aki UI to match your brand with powerful theming capabilities."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <Card className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Aki UI provides a flexible theming system built on CSS custom properties and Tailwind CSS. 
              You can customize colors, typography, spacing, and more to match your brand identity.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• <strong>CSS Custom Properties:</strong> Dynamic theme switching</li>
              <li>• <strong>Tailwind Integration:</strong> Seamless with your design system</li>
              <li>• <strong>Dark Mode Support:</strong> Built-in dark theme variants</li>
              <li>• <strong>Component Variants:</strong> Multiple style options per component</li>
            </ul>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Color System</h2>
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Default Color Palette</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {colorPalette.map((color) => (
                    <div key={color.name} className="text-center">
                      <div className="space-y-2">
                        <div
                          className="w-full h-16 rounded-lg border border-gray-200 dark:border-gray-700"
                          style={{ backgroundColor: currentTheme === 'light' ? color.light : color.dark }}
                        />
                        <div>
                          <div className="font-medium text-sm">{color.name}</div>
                          <div className="text-xs text-gray-500 font-mono">
                            {currentTheme === 'light' ? color.light : color.dark}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button
                    variant={currentTheme === 'light' ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setCurrentTheme('light')}
                  >
                    Light
                  </Button>
                  <Button
                    variant={currentTheme === 'dark' ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setCurrentTheme('dark')}
                    className="ml-2"
                  >
                    Dark
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Custom Theme Configuration</h2>
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Tailwind Config</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Extend your Tailwind configuration to customize Aki UI's color system:
                </p>
                <CodeBlock language="javascript">
{`// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@akitectio/aki-ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      }
    }
  },
  plugins: []
}`}
                </CodeBlock>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">CSS Custom Properties</h2>
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Theme Variables</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Aki UI uses CSS custom properties for dynamic theming. You can override these in your CSS:
                </p>
                <CodeBlock language="css">
{`:root {
  /* Primary Colors */
  --aki-primary-50: 239 246 255;
  --aki-primary-500: 59 130 246;
  --aki-primary-600: 37 99 235;
  --aki-primary-700: 29 78 216;
  
  /* Gray Scale */
  --aki-gray-50: 249 250 251;
  --aki-gray-100: 243 244 246;
  --aki-gray-200: 229 231 235;
  --aki-gray-300: 209 213 219;
  --aki-gray-400: 156 163 175;
  --aki-gray-500: 107 114 128;
  --aki-gray-600: 75 85 99;
  --aki-gray-700: 55 65 81;
  --aki-gray-800: 31 41 55;
  --aki-gray-900: 17 24 39;
  
  /* Component Specific */
  --aki-border-radius: 0.5rem;
  --aki-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  --aki-shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

/* Dark theme overrides */
.dark {
  --aki-primary-500: 96 165 250;
  --aki-primary-600: 59 130 246;
}`}
                </CodeBlock>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Dark Mode</h2>
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Setup</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Enable dark mode in your Tailwind configuration:
                </p>
                <CodeBlock language="javascript">
{`// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media' for system preference
  // ... rest of your config
}`}
                </CodeBlock>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Implementation</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Toggle dark mode by adding/removing the 'dark' class:
                </p>
                <CodeBlock language="typescript">
{`// Theme toggle component
import { useState, useEffect } from 'react'
import { Button } from '@akitectio/aki-ui'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setIsDark(isDarkMode)
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    localStorage.setItem('darkMode', newIsDark.toString())
    document.documentElement.classList.toggle('dark', newIsDark)
  }

  return (
    <Button onClick={toggleTheme} variant="outline">
      {isDark ? '☀️' : '🌙'} {isDark ? 'Light' : 'Dark'} Mode
    </Button>
  )
}`}
                </CodeBlock>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Component Customization</h2>
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Custom Button Styles</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Create custom component variants using Tailwind classes:
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    Gradient Button
                  </Button>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg">
                    Custom Orange
                  </Button>
                  <Button className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                    Green Outline
                  </Button>
                </div>
                <CodeBlock language="typescript">
{`<Button className="bg-gradient-to-r from-purple-500 to-pink-500 
                  hover:from-purple-600 hover:to-pink-600 text-white">
  Gradient Button
</Button>

<Button className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg">
  Custom Orange
</Button>

<Button className="border-2 border-green-500 text-green-500 
                  hover:bg-green-500 hover:text-white">
  Green Outline
</Button>`}
                </CodeBlock>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Typography</h2>
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Font Customization</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Customize typography in your Tailwind configuration:
                </p>
                <CodeBlock language="javascript">
{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
      }
    }
  }
}`}
                </CodeBlock>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Theme Design Guidelines</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• <strong>Consistency:</strong> Use a limited color palette consistently</li>
                <li>• <strong>Contrast:</strong> Ensure sufficient contrast for accessibility</li>
                <li>• <strong>Hierarchy:</strong> Use color and typography to establish visual hierarchy</li>
                <li>• <strong>Testing:</strong> Test your theme in both light and dark modes</li>
                <li>• <strong>Performance:</strong> Minimize CSS custom property usage for better performance</li>
              </ul>
              
              <h3 className="font-semibold mt-6">Accessibility Considerations</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Maintain WCAG AA contrast ratios (4.5:1 for normal text)</li>
                <li>• Test with screen readers and keyboard navigation</li>
                <li>• Provide alternative ways to convey information beyond color</li>
                <li>• Consider users with color vision deficiencies</li>
              </ul>
            </div>
          </Card>
        </section>
      </div>
    </PageHeader>
  )
}
