'use client'

import { useState, useEffect } from 'react'
import { Card } from '@akitectio/aki-ui'

// Device Preview Toolbar Component
const DevicePreviewToolbar = ({ selectedDevice, onDeviceChange }: {
    selectedDevice: 'mobile' | 'tablet' | 'desktop' | 'fullscreen';
    onDeviceChange: (device: 'mobile' | 'tablet' | 'desktop' | 'fullscreen') => void;
}) => {
    const [isRefreshing, setIsRefreshing] = useState(false)

    const handleRefresh = () => {
        setIsRefreshing(true)
        setTimeout(() => {
            setIsRefreshing(false)
            window.location.reload()
        }, 500)
    }

    const deviceButtons = [
        {
            id: 'desktop' as const,
            label: 'Desktop',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            id: 'tablet' as const,
            label: 'Tablet',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
                </svg>
            )
        },
        {
            id: 'mobile' as const,
            label: 'Mobile',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            id: 'fullscreen' as const,
            label: 'Fullscreen',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
            )
        }
    ]

    return (
        <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-3">
            <div className="flex items-center space-x-1 bg-white dark:bg-gray-900 rounded-lg p-1 shadow-sm border border-gray-200 dark:border-gray-700">
                {deviceButtons.map((device) => (
                    <button
                        key={device.id}
                        type="button"
                        className={`
                            p-2 rounded-md transition-all duration-200 cursor-pointer select-none
                            ${selectedDevice === device.id
                                ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'
                            }
                        `}
                        onClick={() => onDeviceChange(device.id)}
                        title={device.label}
                        aria-label={device.label}
                    >
                        {device.icon}
                    </button>
                ))}
                <button
                    type="button"
                    className={`
                        p-2 rounded-md transition-all duration-200 cursor-pointer select-none
                        text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200
                        ${isRefreshing ? 'animate-spin' : ''}
                    `}
                    onClick={handleRefresh}
                    disabled={isRefreshing}
                    title="Refresh"
                    aria-label="Refresh"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

// Responsive Preview Container
const ResponsivePreviewContainer = ({
    children,
    selectedDevice,
    customScale = false
}: {
    children: React.ReactNode;
    selectedDevice: 'mobile' | 'tablet' | 'desktop' | 'fullscreen';
    customScale?: boolean;
}) => {
    const [isTransitioning, setIsTransitioning] = useState(false)

    const getDeviceStyles = (device: 'mobile' | 'tablet' | 'desktop' | 'fullscreen') => {
        const baseStyles = {
            mobile: {
                width: '375px',
                height: '667px',
            },
            tablet: {
                width: '768px',
                height: '1024px',
            },
            desktop: {
                width: '1200px',
                height: '800px',
            },
            fullscreen: {
                width: '100%',
                height: '100vh',
            }
        }

        const style = baseStyles[device as keyof typeof baseStyles] || {
            width: '100%',
            height: 'auto',
        }

        // Add transform scaling if not custom scale
        if (!customScale) {
            switch (device) {
                case 'mobile':
                    return { ...style, transform: 'scale(1)', transformOrigin: 'top center' }
                case 'tablet':
                    return { ...style, transform: 'scale(0.8)', transformOrigin: 'top center' }
                case 'desktop':
                    return { ...style, transform: 'scale(0.7)', transformOrigin: 'top center' }
                case 'fullscreen':
                    return { ...style, transform: 'scale(1)', transformOrigin: 'top center' }
                default:
                    return { ...style, transform: 'scale(1)', transformOrigin: 'top center' }
            }
        }

        return style
    }

    const deviceStyles = getDeviceStyles(selectedDevice)

    // Trigger transition animation when device changes
    useEffect(() => {
        setIsTransitioning(true)
        const timer = setTimeout(() => {
            setIsTransitioning(false)
        }, 500)
        return () => clearTimeout(timer)
    }, [selectedDevice])

    return (
        <div className="flex justify-center items-start p-6 bg-gray-50 dark:bg-gray-900 overflow-auto min-h-[600px]">
            <div className="text-center">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center justify-center space-x-2">
                    <span>Previewing:</span>                <span className="font-medium capitalize bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">
                        {selectedDevice}
                    </span>
                    {selectedDevice === 'mobile' && <span className="text-xs">(375px)</span>}
                    {selectedDevice === 'tablet' && <span className="text-xs">(768px)</span>}
                    {selectedDevice === 'desktop' && <span className="text-xs">(1200px)</span>}
                    {selectedDevice === 'fullscreen' && <span className="text-xs">(100%)</span>}
                </div>
                <Card
                    className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-500 ease-in-out border-2 ${isTransitioning ? 'border-blue-500 shadow-blue-500/20' : 'border-gray-200 dark:border-gray-700'
                        }`}
                    style={deviceStyles}
                >
                    <div className="w-full h-full overflow-auto">
                        {children}
                    </div>
                </Card>
            </div>
        </div>
    )
}

// Main Device Preview Wrapper Component
interface DevicePreviewWrapperProps {
    children: React.ReactNode | ((selectedDevice: 'mobile' | 'tablet' | 'desktop' | 'fullscreen') => React.ReactNode);
    defaultDevice?: 'mobile' | 'tablet' | 'desktop' | 'fullscreen';
    customScale?: boolean;
    className?: string;
}

export default function DevicePreviewWrapper({
    children,
    defaultDevice = 'desktop',
    customScale = false,
    className = ''
}: DevicePreviewWrapperProps) {
    const [selectedDevice, setSelectedDevice] = useState(defaultDevice)

    return (
        <div className={`border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden ${className}`}>
            <DevicePreviewToolbar
                selectedDevice={selectedDevice}
                onDeviceChange={setSelectedDevice}
            />
            <ResponsivePreviewContainer
                selectedDevice={selectedDevice}
                customScale={customScale}
            >
                {typeof children === 'function' ? children(selectedDevice) : children}
            </ResponsivePreviewContainer>
        </div>
    )
}

// Export individual components for advanced usage
export { DevicePreviewToolbar, ResponsivePreviewContainer }
