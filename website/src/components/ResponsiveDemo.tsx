'use client'

import { Card } from '@akitectio/aki-ui'
import { useState, useEffect } from 'react'

export function ResponsiveDemo() {
    const [windowWidth, setWindowWidth] = useState(0)
    const [activeBreakpoint, setActiveBreakpoint] = useState('')

    useEffect(() => {
        const updateWidth = () => {
            const width = window.innerWidth
            setWindowWidth(width)

            if (width >= 1280) {
                setActiveBreakpoint('XL')
            } else if (width >= 1024) {
                setActiveBreakpoint('LG')
            } else if (width >= 768) {
                setActiveBreakpoint('MD')
            } else if (width >= 640) {
                setActiveBreakpoint('SM')
            } else {
                setActiveBreakpoint('Base')
            }
        }

        updateWidth()
        window.addEventListener('resize', updateWidth)
        return () => window.removeEventListener('resize', updateWidth)
    }, [])

    const breakpoints = [
        { name: 'Base', min: 0, max: 639, color: 'red' },
        { name: 'SM', min: 640, max: 767, color: 'yellow' },
        { name: 'MD', min: 768, max: 1023, color: 'green' },
        { name: 'LG', min: 1024, max: 1279, color: 'blue' },
        { name: 'XL', min: 1280, max: Infinity, color: 'purple' },
    ]

    return (
        <Card className="p-6 sticky top-4">
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white text-center">
                🔍 Live Breakpoint Monitor
            </h4>

            <div className="text-center mb-6">
                <div className="text-3xl font-bold mb-2" style={{
                    color: activeBreakpoint === 'Base' ? '#ef4444' :
                        activeBreakpoint === 'SM' ? '#eab308' :
                            activeBreakpoint === 'MD' ? '#22c55e' :
                                activeBreakpoint === 'LG' ? '#3b82f6' : '#8b5cf6'
                }}>
                    {activeBreakpoint}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                    Current width: {windowWidth}px
                </div>
            </div>

            <div className="space-y-2">
                {breakpoints.map((bp) => (
                    <div
                        key={bp.name}
                        className={`p-3 rounded-lg transition-all ${activeBreakpoint === bp.name
                                ? `bg-${bp.color}-100 dark:bg-${bp.color}-900/30 border-2 border-${bp.color}-500 scale-105`
                                : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                            }`}
                    >
                        <div className="flex justify-between items-center">
                            <span className={`font-medium ${activeBreakpoint === bp.name
                                    ? `text-${bp.color}-600 dark:text-${bp.color}-400`
                                    : 'text-gray-600 dark:text-gray-300'
                                }`}>
                                {bp.name}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                {bp.min}px{bp.max !== Infinity ? ` - ${bp.max}px` : '+'}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-xs text-blue-600 dark:text-blue-400 text-center">
                    💡 Resize your browser window to see breakpoints change in real-time
                </p>
            </div>
        </Card>
    )
}
