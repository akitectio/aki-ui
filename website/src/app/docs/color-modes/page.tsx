'use client'

import { Card } from '@akitectio/aki-ui'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

export default function ColorModesPage() {
  return (
    <PageHeader
      title="Color Modes"
      description="Learn how to implement and customize dark mode and other color schemes in Aki UI."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <Card className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Aki UI provides built-in support for multiple color modes, including light and dark themes. 
              The components automatically adapt to the current color mode using CSS custom properties 
              and Tailwind's dark mode utilities.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• <strong>Automatic Detection:</strong> Respects user's system preference</li>
              <li>• <strong>Manual Toggle:</strong> Programmatic theme switching</li>
              <li>• <strong>Persistent Storage:</strong> Remembers user's choice</li>
              <li>• <strong>SSR Compatible:</strong> No flash of unstyled content</li>
            </ul>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Setup</h2>
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">1. Configure Tailwind CSS</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Enable dark mode in your Tailwind configuration:
                </p>
                <CodeBlock language="javascript">
{`// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@akitectio/aki-ui/**/*.{js,ts,jsx,tsx}',
  ],
  // ... rest of your config
}`}
                </CodeBlock>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">2. Theme Provider (Optional)</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Create a theme provider to manage color mode state:
                </p>
                <CodeBlock language="typescript">
{`'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  actualTheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system')
  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    const updateTheme = () => {
      const isDark = theme === 'dark' || 
        (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
      
      setActualTheme(isDark ? 'dark' : 'light')
      document.documentElement.classList.toggle('dark', isDark)
    }

    updateTheme()
    
    if (theme !== 'system') {
      localStorage.setItem('theme', theme)
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    if (theme === 'system') {
      mediaQuery.addEventListener('change', updateTheme)
      return () => mediaQuery.removeEventListener('change', updateTheme)
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, actualTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}`}
                </CodeBlock>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Theme Toggle Component</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Create a theme toggle component for users to switch between modes:
              </p>
              <CodeBlock language="typescript">
{`'use client'

import { Button } from '@akitectio/aki-ui'
import { useTheme } from './theme-provider'

export function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  const getIcon = () => {
    if (theme === 'light') return '☀️'
    if (theme === 'dark') return '🌙'
    return '🖥️'
  }

  const getLabel = () => {
    if (theme === 'light') return 'Light'
    if (theme === 'dark') return 'Dark'
    return 'System'
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="gap-2"
    >
      <span>{getIcon()}</span>
      <span>{getLabel()}</span>
    </Button>
  )
}`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Component Implementation</h2>
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Using Dark Mode Classes</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Aki UI components use Tailwind's dark mode utilities. You can extend this pattern in your own components:
                </p>
                <CodeBlock language="typescript">
{`// Example component with dark mode support
function MyCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="
      bg-white dark:bg-gray-800
      text-gray-900 dark:text-white
      border border-gray-200 dark:border-gray-700
      shadow-sm dark:shadow-gray-900/20
      rounded-lg p-6
    ">
      {children}
    </div>
  )
}`}
                </CodeBlock>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">CSS Custom Properties</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  For more complex theming, use CSS custom properties:
                </p>
                <CodeBlock language="css">
{`:root {
  --color-background: 255 255 255;
  --color-foreground: 0 0 0;
  --color-primary: 59 130 246;
  --color-border: 229 231 235;
}

.dark {
  --color-background: 17 24 39;
  --color-foreground: 255 255 255;
  --color-primary: 96 165 250;
  --color-border: 55 65 81;
}

.my-component {
  background-color: rgb(var(--color-background));
  color: rgb(var(--color-foreground));
  border-color: rgb(var(--color-border));
}`}
                </CodeBlock>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Color Palette</h2>
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-4">Light Mode</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Background', light: '#FFFFFF', dark: '#111827' },
                    { name: 'Surface', light: '#F9FAFB', dark: '#1F2937' },
                    { name: 'Primary', light: '#3B82F6', dark: '#60A5FA' },
                    { name: 'Text', light: '#111827', dark: '#F9FAFB' },
                  ].map((color) => (
                    <div key={color.name} className="text-center">
                      <div 
                        className="w-full h-16 rounded border border-gray-200 dark:border-gray-700 mb-2"
                        style={{ backgroundColor: color.light }}
                      />
                      <div className="text-sm font-medium">{color.name}</div>
                      <div className="text-xs text-gray-500 font-mono">{color.light}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Dark Mode</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Background', light: '#FFFFFF', dark: '#111827' },
                    { name: 'Surface', light: '#F9FAFB', dark: '#1F2937' },
                    { name: 'Primary', light: '#3B82F6', dark: '#60A5FA' },
                    { name: 'Text', light: '#111827', dark: '#F9FAFB' },
                  ].map((color) => (
                    <div key={color.name} className="text-center">
                      <div 
                        className="w-full h-16 rounded border border-gray-200 dark:border-gray-700 mb-2"
                        style={{ backgroundColor: color.dark }}
                      />
                      <div className="text-sm font-medium">{color.name}</div>
                      <div className="text-xs text-gray-500 font-mono">{color.dark}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Design Guidelines</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• <strong>Contrast:</strong> Ensure sufficient contrast in both light and dark modes (WCAG AA: 4.5:1)</li>
                <li>• <strong>Consistency:</strong> Maintain visual hierarchy across both themes</li>
                <li>• <strong>Colors:</strong> Don't rely solely on color to convey information</li>
                <li>• <strong>Testing:</strong> Test all interactions in both color modes</li>
                <li>• <strong>Images:</strong> Consider different images or filters for dark mode</li>
              </ul>
              
              <h3 className="font-semibold mt-6">Implementation Tips</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Use semantic color names instead of specific values</li>
                <li>• Prefer CSS custom properties for dynamic theming</li>
                <li>• Test with system preference changes</li>
                <li>• Consider reduced motion preferences</li>
                <li>• Provide visual feedback for theme changes</li>
              </ul>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Next.js App Router Setup</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                For Next.js App Router applications, wrap your app with the theme provider:
              </p>
              <CodeBlock language="typescript">
{`// app/layout.tsx
import { ThemeProvider } from '@/components/theme-provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}`}
              </CodeBlock>
            </div>
          </Card>
        </section>
      </div>
    </PageHeader>
  )
}
