'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './ThemeToggle'
import { getVersionBadge } from '@/lib/version'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

interface NavigationProps {
  showGetStarted?: boolean
  className?: string
  onMenuClick?: () => void
  showMobileMenu?: boolean
  isMobileMenuOpen?: boolean
}

export function Navigation({
  showGetStarted = true,
  className = '',
  onMenuClick,
  showMobileMenu = false,
  isMobileMenuOpen: externalMobileMenuOpen
}: NavigationProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Use external state for mobile menu if provided (e.g., in docs mode)
  const effectiveMobileMenuOpen = showMobileMenu ? externalMobileMenuOpen : isMobileMenuOpen

  const navigationItems = [
    { href: '/docs', label: 'Documentation', isActive: pathname?.startsWith('/docs') },
  ]

  return (
    <nav className={`relative border-b border-gray-200/30 dark:border-gray-700/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl sticky top-0 z-50 ${className}`}>
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 via-white/50 to-secondary-50/50 dark:from-primary-950/30 dark:via-slate-900/50 dark:to-secondary-950/30"></div>

      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300/40 to-transparent dark:via-primary-600/40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="flex items-center space-x-3 group"
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 bg-white dark:bg-gray-800 flex items-center justify-center">
                  <img src="/aki-ui-icon.png" alt="Aki UI" className="w-8 h-8 object-contain" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 bg-clip-text text-transparent group-hover:from-primary-700 group-hover:to-secondary-700 transition-all duration-300">
                  Aki UI
                </span>
                <span className="text-xs text-gray-700 dark:text-gray-300 font-medium tracking-wide hidden sm:block">
                  Modern React Components
                </span>
              </div>
            </Link>
            <div className="hidden sm:flex items-center space-x-2">
              <span className="inline-flex items-center rounded-md bg-gradient-to-r from-primary-500/90 to-secondary-500/90 dark:from-blue-900/50 dark:to-indigo-900/50 text-white dark:text-blue-200 border border-primary-400/50 dark:border-blue-700/50 px-2.5 py-1 text-xs font-medium shadow-sm hover:from-primary-600 hover:to-secondary-600 dark:hover:from-blue-800/50 dark:hover:to-indigo-800/50 transition-colors">
                {getVersionBadge()}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-sm"></div>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group ${item.isActive
                    ? 'bg-gradient-to-r from-primary-50 to-primary-100/80 dark:from-primary-900/30 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 shadow-sm border border-primary-200/50 dark:border-primary-700/50'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/80 dark:hover:from-gray-800/50 dark:hover:to-gray-700/30 hover:text-gray-900 dark:hover:text-gray-100 hover:shadow-sm'
                    }`}
                >
                  {item.label}
                  {item.isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-primary-500 shadow-sm"></div>
                  )}
                </Link>
              ))}

              <a
                href="https://aki-ui.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/80 dark:hover:from-gray-800/50 dark:hover:to-gray-700/30 hover:text-gray-900 dark:hover:text-gray-100 hover:shadow-sm transition-all duration-300 flex items-center gap-2 group"
              >
                Storybook
                <svg className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            {showGetStarted && (
              <Link
                href="/docs"
                className="hidden md:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 hover:from-primary-700 hover:via-primary-800 hover:to-primary-900 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 text-sm relative overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
                <svg className="ml-2 w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => {
                if (showMobileMenu && onMenuClick) {
                  onMenuClick()
                } else {
                  setMobileMenuOpen(!isMobileMenuOpen)
                }
              }}
              className="md:hidden p-2.5 rounded-xl text-gray-900 dark:text-white bg-white/90 dark:bg-gray-800/90 border border-gray-300/70 dark:border-gray-600/70 hover:bg-white dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm hover:scale-105 active:scale-95"
              aria-controls="mobile-menu"
              aria-expanded={effectiveMobileMenuOpen}
              aria-label={effectiveMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {effectiveMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-900 dark:text-white" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-900 dark:text-white" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Only show if not in docs mode */}
      {effectiveMobileMenuOpen && !showMobileMenu && (
        <div className="md:hidden border-t border-gray-200/30 dark:border-gray-700/30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl">
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${item.isActive
                  ? 'bg-gradient-to-r from-primary-50 to-primary-100/80 dark:from-primary-900/30 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 border border-primary-200/50 dark:border-primary-700/50'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/80 dark:hover:from-gray-800/50 dark:hover:to-gray-700/30'
                  }`}
              >
                {item.label}
              </Link>
            ))}

            <a
              href="https://aki-ui.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/80 dark:hover:from-gray-800/50 dark:hover:to-gray-700/30 transition-all duration-300 flex items-center justify-between"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Storybook</span>
              <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50 flex items-center justify-between">
              <ThemeToggle />
              {showGetStarted && (
                <Link
                  href="/docs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold text-sm shadow-lg"
                >
                  Get Started
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
