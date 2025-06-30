'use client'

import { useEffect } from 'react'
import { Button, Card } from '@akitectio/aki-ui'
import Link from 'next/link'

export default function PlaygroundPage() {
  // Redirect to Storybook after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://aki-ui.vercel.app/'
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleRedirectNow = () => {
    window.location.href = 'https://aki-ui.vercel.app/'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-900 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 text-center shadow-2xl">
        <div className="mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Redirecting to Storybook
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Interactive component playground is now available on Storybook
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            🚀 <strong>New Location:</strong> We've moved our interactive component playground to Storybook for a better development experience!
          </p>
          <div className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
            <p>✨ Live component previews</p>
            <p>🎛️ Interactive controls</p>
            <p>📖 Comprehensive documentation</p>
            <p>🎨 Theme customization</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={handleRedirectNow}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Open Storybook Now
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/docs">View Documentation</Link>
          </Button>
        </div>

        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          <p>Automatically redirecting in <span className="font-mono">3</span> seconds...</p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
            Direct link to Storybook:
          </p>
          <a 
            href="https://aki-ui.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-mono break-all"
          >
            https://aki-ui.vercel.app/
          </a>
        </div>
      </Card>
    </div>
  )
}
            <Card className="p-6 sticky top-24">
              <h2 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
                Component Controls
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Button Variant
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(['default', 'primary', 'secondary', 'outline', 'ghost', 'link'] as const).map((variant) => (
                      <button
                        key={variant}
                        onClick={() => setButtonVariant(variant)}
                        className={`
                          px-3 py-2 text-sm rounded border text-left
                          ${buttonVariant === variant
                            ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300'
                            : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
                          }
                        `}
                      >
                        {variant}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Button Size
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['sm', 'md', 'lg'] as const).map((size) => (
                      <button
                        key={size}
                        onClick={() => setButtonSize(size)}
                        className={`
                          px-3 py-2 text-sm rounded border text-center
                          ${buttonSize === size
                            ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300'
                            : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
                          }
                        `}
                      >
                        {size.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="loading"
                      checked={buttonLoading}
                      onCheckedChange={setButtonLoading}
                    />
                    <label htmlFor="loading" className="text-sm text-gray-700 dark:text-gray-300">
                      Loading state
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="disabled"
                      checked={buttonDisabled}
                      onCheckedChange={setButtonDisabled}
                    />
                    <label htmlFor="disabled" className="text-sm text-gray-700 dark:text-gray-300">
                      Disabled state
                    </label>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {/* Button Preview */}
              <Card className="p-8">
                <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
                  Button Preview
                </h3>
                <div className="flex items-center justify-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Button
                    variant={buttonVariant}
                    size={buttonSize}
                    loading={buttonLoading}
                    disabled={buttonDisabled}
                  >
                    {buttonLoading ? 'Loading...' : 'Sample Button'}
                  </Button>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-3 text-gray-900 dark:text-white">Code</h4>
                  <div className="bg-gray-900 dark:bg-gray-800 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>
                      {`<Button${buttonVariant !== 'default' ? ` variant="${buttonVariant}"` : ''}${buttonSize !== 'md' ? ` size="${buttonSize}"` : ''}${buttonLoading ? ' loading' : ''}${buttonDisabled ? ' disabled' : ''}>
  ${buttonLoading ? 'Loading...' : 'Sample Button'}
</Button>`}
                    </code>
                  </div>
                </div>
              </Card>

              {/* Component Showcase */}
              <Card className="p-8">
                <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
                  Component Showcase
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium mb-4 text-gray-900 dark:text-white">Form Controls</h4>
                    <div className="space-y-4">
                      <Input placeholder="Enter your email" type="email" />
                      <Input placeholder="Enter your password" type="password" />
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <label htmlFor="remember" className="text-sm text-gray-700 dark:text-gray-300">
                          Remember me
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="notifications" />
                        <label htmlFor="notifications" className="text-sm text-gray-700 dark:text-gray-300">
                          Enable notifications
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-4 text-gray-900 dark:text-white">Badges & Status</h4>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="default">Default</Badge>
                        <Badge variant="primary">Primary</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="success">Success</Badge>
                        <Badge variant="warning">Warning</Badge>
                        <Badge variant="error">Error</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge size="sm">Small</Badge>
                        <Badge size="md">Medium</Badge>
                        <Badge size="lg">Large</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Color Palette */}
              <Card className="p-8">
                <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
                  Color Palette
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    { name: 'Blue', class: 'bg-blue-500' },
                    { name: 'Green', class: 'bg-green-500' },
                    { name: 'Yellow', class: 'bg-yellow-500' },
                    { name: 'Red', class: 'bg-red-500' },
                    { name: 'Purple', class: 'bg-purple-500' },
                    { name: 'Gray', class: 'bg-gray-500' },
                  ].map((color) => (
                    <div key={color.name} className="text-center">
                      <div className={`w-full h-16 rounded-lg ${color.class} mb-2`} />
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {color.name}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Typography */}
              <Card className="p-8">
                <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
                  Typography
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Heading 1</h1>
                    <code className="text-sm text-gray-500">text-4xl font-bold</code>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Heading 2</h2>
                    <code className="text-sm text-gray-500">text-3xl font-bold</code>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Heading 3</h3>
                    <code className="text-sm text-gray-500">text-2xl font-bold</code>
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 dark:text-gray-300">Large body text</p>
                    <code className="text-sm text-gray-500">text-lg</code>
                  </div>
                  <div>
                    <p className="text-base text-gray-700 dark:text-gray-300">Regular body text</p>
                    <code className="text-sm text-gray-500">text-base</code>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Small text</p>
                    <code className="text-sm text-gray-500">text-sm</code>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
