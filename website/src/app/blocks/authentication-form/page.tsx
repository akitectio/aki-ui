'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline'
import { CodeBlock } from '@/components/CodeBlock'
import { Tabs } from '@/components/Tabs'
import BlockHeader from '@/components/BlockHeader'
import DevicePreviewWrapper from '@/components/DevicePreviewWrapper'

// Simple Card component for demo
const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white dark:bg-gray-800 shadow-sm rounded-lg ${className}`}>
    {children}
  </div>
)

// Simple Alert component for demo
const Alert = ({
  children,
  variant = 'success',
  onDismiss
}: {
  children: React.ReactNode;
  variant?: 'success' | 'error' | 'warning' | 'info';
  onDismiss?: () => void;
}) => (
  <div className={`
        p-4 rounded-md mb-4 
        ${variant === 'success' ? 'bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400' : ''}
        ${variant === 'error' ? 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400' : ''}
        ${variant === 'warning' ? 'bg-yellow-50 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' : ''}
        ${variant === 'info' ? 'bg-blue-50 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' : ''}
    `}>
    <div className="flex items-center justify-between">
      <div>{children}</div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="ml-4 text-current hover:opacity-75"
        >
          ×
        </button>
      )}
    </div>
  </div>
)

// Responsive Authentication Form Component
function LoginExample({ selectedDevice = 'desktop' }: { selectedDevice?: string }) {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  const isMobile = selectedDevice === 'mobile'
  const isTablet = selectedDevice === 'tablet'

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-4 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className={`w-full space-y-6 sm:space-y-8 ${isMobile ? 'max-w-sm' :
        isTablet ? 'max-w-md' :
          'max-w-md'
        }`}>
        <div>
          <div className={`mx-auto flex items-center justify-center rounded-xl bg-blue-600 ${isMobile ? 'h-10 w-10' : 'h-12 w-12'
            }`}>
            <LockClosedIcon className={`text-white ${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />
          </div>
          <h2 className={`mt-4 sm:mt-6 text-center font-extrabold text-gray-900 dark:text-white ${isMobile ? 'text-xl' :
            isTablet ? 'text-2xl' :
              'text-2xl sm:text-3xl'
            }`}>
            Sign in to your account
          </h2>
          <p className={`mt-2 text-center text-gray-600 dark:text-gray-400 ${isMobile ? 'text-xs' : 'text-sm'
            }`}>
            Or{' '}
            <Link href="#" className="font-medium text-blue-600 hover:text-blue-500">
              start your 14-day free trial
            </Link>
          </p>
        </div>

        {showAlert && (
          <Alert variant="success" onDismiss={() => setShowAlert(false)}>
            Login successful! Redirecting...
          </Alert>
        )}

        <Card className={`${isMobile ? 'p-4 sm:p-6' : 'p-6 sm:p-8'}`}>
          <form onSubmit={handleSubmit} className={`space-y-4 sm:space-y-6`}>
            <div>
              <label htmlFor="email" className={`block font-medium text-gray-700 dark:text-gray-300 ${isMobile ? 'text-xs' : 'text-sm'
                }`}>
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`appearance-none relative block w-full border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 ${isMobile ? 'px-3 py-2 text-sm' : 'px-3 py-2 sm:text-sm'
                    }`}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className={`block font-medium text-gray-700 dark:text-gray-300 ${isMobile ? 'text-xs' : 'text-sm'
                }`}>
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`appearance-none relative block w-full border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 ${isMobile ? 'px-3 py-2 pr-10 text-sm' : 'px-3 py-2 pr-10 sm:text-sm'
                    }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className={`text-gray-400 ${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
                  ) : (
                    <EyeIcon className={`text-gray-400 ${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
                  )}
                </button>
              </div>
            </div>

            <div className={`flex items-center ${isMobile ? 'flex-col space-y-2' : 'justify-between'}`}>
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className={`ml-2 block text-gray-900 dark:text-gray-300 ${isMobile ? 'text-xs' : 'text-sm'
                  }`}>
                  Remember me
                </label>
              </div>

              <div className={isMobile ? 'text-xs' : 'text-sm'}>
                <Link href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`group relative w-full flex justify-center border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${isMobile ? 'py-2 px-4 text-sm' : 'py-2 px-4 text-sm'
                  }`}
              >
                Sign in
              </button>
            </div>

            <div className={`mt-4 sm:mt-6`}>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className={`px-2 bg-white dark:bg-gray-800 text-gray-500 ${isMobile ? 'text-xs' : 'text-sm'
                    }`}>Or continue with</span>
                </div>
              </div>

              <div className={`mt-4 sm:mt-6 grid gap-3 ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
                <button
                  type="button"
                  className={`w-full inline-flex justify-center border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 ${isMobile ? 'py-2 px-4 text-xs' : 'py-2 px-4 text-sm'
                    }`}
                >
                  <svg className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="ml-2">Google</span>
                </button>

                <button
                  type="button"
                  className={`w-full inline-flex justify-center border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 ${isMobile ? 'py-2 px-4 text-xs' : 'py-2 px-4 text-sm'
                    }`}
                >
                  <svg className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="ml-2">Facebook</span>
                </button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}

export default function LoginBlockPage() {
  const code = `import { useState } from 'react'
import Link from 'next/link'
import { Card, Alert } from '@akitectio/aki-ui'
import { 
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline'

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login:', { email, password })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-xl bg-blue-600">
            <LockClosedIcon className="h-6 w-6 text-white" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link href="#" className="font-medium text-blue-600 hover:text-blue-500">
              start your 14-day free trial
            </Link>
          </p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none relative block w-full px-3 py-2 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>

            {/* Social login buttons */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  Google
                </button>
                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  Facebook
                </button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}`

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <BlockHeader
        title="Authentication Form"
      />

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Modern Login Form
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            A sleek authentication form with social login options, password visibility toggle, and form validation. Perfect for modern web applications.
          </p>
        </div>

        {/* Tabs for Preview and Code */}
        <Tabs
          persistKey="authentication-form"
          tabs={[
            {
              id: 'preview',
              label: 'Preview',
              content: (
                <DevicePreviewWrapper>
                  {(selectedDevice) => <LoginExample selectedDevice={selectedDevice} />}
                </DevicePreviewWrapper>
              )
            },
            {
              id: 'code',
              label: 'Code',
              content: (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Implementation
                  </h3>
                  <CodeBlock code={code} language="tsx" />
                </div>
              )
            }
          ]}
          defaultTab="preview"
        />

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              Features
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Email and password validation</li>
              <li>• Password visibility toggle</li>
              <li>• Remember me functionality</li>
              <li>• Social authentication buttons</li>
              <li>• Responsive design</li>
              <li>• Dark mode support</li>
              <li>• Accessible form elements</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              Use Cases
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• User authentication</li>
              <li>• Login screens</li>
              <li>• Admin panels</li>
              <li>• SaaS applications</li>
              <li>• E-commerce checkout</li>
              <li>• Member portals</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
