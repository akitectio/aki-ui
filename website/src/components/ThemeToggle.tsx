'use client'

import { useColorMode } from '@akitectio/aki-ui'
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'

export function ThemeToggle() {
  const { colorMode, setColorMode } = useColorMode()

  const toggleColorMode = () => {
    if (colorMode === 'light') {
      setColorMode('dark')
    } else {
      setColorMode('light')
    }
  }

  const getIcon = () => {
    switch (colorMode) {
      case 'light':
        return <SunIcon className="h-4 w-4" />
      case 'dark':
        return <MoonIcon className="h-4 w-4" />
      default:
        return <ComputerDesktopIcon className="h-4 w-4" />
    }
  }

  const getLabel = () => {
    switch (colorMode) {
      case 'light':
        return 'Light'
      case 'dark':
        return 'Dark'
      default:
        return 'System'
    }
  }

  return (
    <button
      onClick={toggleColorMode}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/80 dark:hover:from-gray-800/50 dark:hover:to-gray-700/30 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50 hover:border-gray-300/50 dark:hover:border-gray-500/50 hover:shadow-sm"
      aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className="w-4 h-4 transition-transform duration-300 hover:scale-110">
        {getIcon()}
      </span>
      <span className="hidden sm:inline">{getLabel()}</span>
    </button>
  )
}
