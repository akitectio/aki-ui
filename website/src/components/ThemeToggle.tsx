'use client'

import { useColorMode } from '@akitectio/aki-ui'
import { Button } from '@akitectio/aki-ui'
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
    <Button
      variant="outline"
      size="sm"
      onClick={toggleColorMode}
      className="gap-2 px-3"
      aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
    >
      {getIcon()}
      <span className="hidden sm:inline">{getLabel()}</span>
    </Button>
  )
}
