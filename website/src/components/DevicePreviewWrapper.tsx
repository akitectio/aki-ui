'use client'

import { useState, useEffect, useRef } from 'react'
import { Card } from '@akitectio/aki-ui'

// Device Preview Toolbar Component
const DevicePreviewToolbar = ({ selectedDevice, onDeviceChange, onFullscreen }: {
    selectedDevice: 'mobile' | 'tablet' | 'desktop' | 'fullscreen';
    onDeviceChange: (device: 'mobile' | 'tablet' | 'desktop' | 'fullscreen') => void;
    onFullscreen: () => void;
}) => {

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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            id: 'mobile' as const,
            label: 'Mobile',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
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
            ),
            onClick: onFullscreen
        }
    ]

    return (
        <div className="flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-850 border-b border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center space-x-1 bg-white dark:bg-gray-900 rounded-xl p-1.5 shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-white/95 dark:bg-gray-900/95">
                {/* Device selection buttons */}
                {deviceButtons.filter(device => device.id !== 'fullscreen').map((device) => (
                    <button
                        key={device.id}
                        type="button"
                        className={`
                            p-2.5 rounded-lg transition-all duration-300 cursor-pointer select-none relative group
                            ${selectedDevice === device.id
                                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30 scale-105'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200 hover:scale-105'
                            }
                        `}
                        onClick={() => onDeviceChange(device.id)}
                        title={device.label}
                        aria-label={device.label}
                    >
                        <div className="relative">
                            {device.icon}
                            {selectedDevice === device.id && (
                                <div className="absolute inset-0 rounded-lg bg-blue-400 opacity-20 animate-pulse"></div>
                            )}
                        </div>
                    </button>
                ))}

                {/* Divider */}
                <div className="w-px h-8 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 mx-2"></div>

                {/* Fullscreen button */}
                <button
                    type="button"
                    className="p-2.5 rounded-lg transition-all duration-300 cursor-pointer select-none relative group text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/20 hover:text-purple-700 dark:hover:text-purple-300 hover:scale-105"
                    onClick={onFullscreen}
                    title="Fullscreen Preview"
                    aria-label="Fullscreen Preview"
                >
                    <div className="relative">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50"></span>
                        <div className="absolute inset-0 rounded-lg bg-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                </button>
            </div>
        </div>
    )
}

// Responsive Preview Container
const ResponsivePreviewContainer = ({
    children,
    selectedDevice,
    customScale = false,
    isFullscreen = false
}: {
    children: React.ReactNode;
    selectedDevice: 'mobile' | 'tablet' | 'desktop' | 'fullscreen';
    customScale?: boolean;
    isFullscreen?: boolean;
}) => {
    const [isTransitioning, setIsTransitioning] = useState(false)

    const getDeviceStyles = (device: 'mobile' | 'tablet' | 'desktop' | 'fullscreen') => {
        const baseStyles = {
            mobile: {
                width: '375px',
                height: '667px',
                maxHeight: '667px',
                minHeight: '400px',
            },
            tablet: {
                width: '768px',
                height: '1024px',
                maxHeight: '1024px',
                minHeight: '500px',
            },
            desktop: {
                width: '1200px',
                height: '800px',
                maxHeight: '800px',
                minHeight: '600px',
            },
            fullscreen: {
                width: '100%',
                height: isFullscreen ? '100vh' : '100vh',
            }
        }

        const style = baseStyles[device as keyof typeof baseStyles] || {
            width: '100%',
            height: 'auto',
        }

        // Add transform scaling based on device and fullscreen state
        if (!customScale) {
            if (isFullscreen) {
                // In fullscreen mode, scale devices appropriately
                switch (device) {
                    case 'mobile':
                        return { ...style, transform: 'scale(1.2)', transformOrigin: 'center center', maxWidth: '450px', margin: '0 auto' }
                    case 'tablet':
                        return { ...style, transform: 'scale(0.9)', transformOrigin: 'center center', maxWidth: '90%', margin: '0 auto' }
                    case 'desktop':
                        return { ...style, transform: 'scale(0.8)', transformOrigin: 'center center', maxWidth: '95%', margin: '0 auto' }
                    default:
                        return { ...style, transform: 'scale(1)', transformOrigin: 'center center' }
                }
            } else {
                // Normal mode scaling
                switch (device) {
                    case 'mobile':
                        return { ...style, transform: 'scale(1)', transformOrigin: 'top center' }
                    case 'tablet':
                        return { ...style, transform: 'scale(0.8)', transformOrigin: 'top center' }
                    case 'desktop':
                        return { ...style, transform: 'scale(0.7)', transformOrigin: 'top center' }
                    default:
                        return { ...style, transform: 'scale(1)', transformOrigin: 'top center' }
                }
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
        <div className={`flex justify-center items-start relative ${isFullscreen ? 'p-6 min-h-full items-center' : 'p-6 min-h-[600px] overflow-hidden'
            }`}>

            {/* Enhanced background pattern for non-fullscreen */}
            {!isFullscreen && (
                <>
                    {/* Primary gradient background */}
                    <div
                        className="absolute inset-0 opacity-50 pointer-events-none"
                        style={{
                            background: `
                                radial-gradient(circle at 20% 20%, rgba(59,130,246,0.25) 0%, transparent 50%), 
                                radial-gradient(circle at 80% 80%, rgba(168,85,247,0.25) 0%, transparent 50%),
                                radial-gradient(circle at 50% 50%, rgba(34,197,94,0.15) 0%, transparent 60%),
                                radial-gradient(circle at 10% 90%, rgba(251,146,60,0.15) 0%, transparent 50%),
                                linear-gradient(135deg, rgba(249,250,251,0.9) 0%, rgba(243,244,246,0.95) 100%)
                            `,
                        }}
                    ></div>

                    {/* Enhanced dot pattern */}
                    <div
                        className="absolute inset-0 opacity-30 pointer-events-none"
                        style={{
                            backgroundImage: `
                                radial-gradient(circle, rgba(99,102,241,0.3) 1px, transparent 1px),
                                radial-gradient(circle, rgba(168,85,247,0.2) 0.5px, transparent 0.5px)
                            `,
                            backgroundSize: '20px 20px, 40px 40px',
                            backgroundPosition: '0 0, 10px 10px'
                        }}
                    ></div>

                    {/* Animated floating elements */}
                    <div
                        className="absolute inset-0 opacity-15 pointer-events-none"
                        style={{
                            backgroundImage: `
                                radial-gradient(circle, rgba(59,130,246,0.6) 2px, transparent 2px),
                                radial-gradient(circle, rgba(168,85,247,0.4) 1.5px, transparent 1.5px)
                            `,
                            backgroundSize: '80px 80px, 120px 120px',
                            animation: 'float-bg 20s ease-in-out infinite'
                        }}
                    ></div>

                    {/* Additional sparkle layer */}
                    <div
                        className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{
                            backgroundImage: `radial-gradient(circle, rgba(251,146,60,0.8) 1px, transparent 1px)`,
                            backgroundSize: '60px 60px',
                            animation: 'sparkle 15s ease-in-out infinite alternate'
                        }}
                    ></div>

                    <style jsx>{`
                        @keyframes float-bg {
                            0%, 100% { 
                                transform: translate(0, 0) rotate(0deg);
                                opacity: 0.15;
                            }
                            25% { 
                                transform: translate(10px, -15px) rotate(90deg);
                                opacity: 0.2;
                            }
                            50% { 
                                transform: translate(-5px, -25px) rotate(180deg);
                                opacity: 0.1;
                            }
                            75% { 
                                transform: translate(-15px, -10px) rotate(270deg);
                                opacity: 0.25;
                            }
                        }
                        
                        @keyframes sparkle {
                            0%, 100% { 
                                transform: translate(0, 0) scale(1);
                                opacity: 0.1;
                            }
                            50% { 
                                transform: translate(5px, -8px) scale(1.2);
                                opacity: 0.15;
                            }
                        }
                    `}</style>
                </>
            )}

            <div className="text-center w-full relative z-10">
                {!isFullscreen && (
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex items-center justify-center space-x-3">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Previewing:</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="font-semibold capitalize bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950">
                                {selectedDevice}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                                {selectedDevice === 'mobile' && '375px'}
                                {selectedDevice === 'tablet' && '768px'}
                                {selectedDevice === 'desktop' && '1200px'}
                                {selectedDevice === 'fullscreen' && '100%'}
                            </span>
                        </div>
                    </div>
                )}
                <Card
                    className={`transition-all duration-700 ease-in-out transform ${isFullscreen
                        ? 'bg-white dark:bg-gray-800 shadow-2xl border border-gray-200 dark:border-gray-700 rounded-lg'
                        : `bg-white/98 dark:bg-gray-800/98 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/60 dark:border-gray-700/60 ${isTransitioning ? 'border-blue-400 shadow-blue-500/40 shadow-2xl scale-105' : 'hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-600'
                        }`
                        }`}
                    style={deviceStyles}
                >
                    <div className="w-full h-full relative overflow-hidden">
                        {/* Add a subtle inner glow */}
                        {!isFullscreen && (
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                        )}
                        <div className="w-full h-full overflow-auto" style={{ maxHeight: isFullscreen ? '100vh' : 'inherit' }}>
                            {children}
                        </div>
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
    const [isFullscreen, setIsFullscreen] = useState(false)

    // Handle fullscreen functionality (modal-style overlay)
    const handleFullscreen = () => {
        setIsFullscreen(!isFullscreen)
    }

    // Close fullscreen on Escape key
    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isFullscreen) {
                setIsFullscreen(false)
            }
        }

        if (isFullscreen) {
            document.addEventListener('keydown', handleEscapeKey)
            // Prevent body scroll when fullscreen is open
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey)
            document.body.style.overflow = 'unset'
        }
    }, [isFullscreen])

    return (
        <>
            <div className={`border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
                <DevicePreviewToolbar
                    selectedDevice={selectedDevice}
                    onDeviceChange={setSelectedDevice}
                    onFullscreen={handleFullscreen}
                />
                <ResponsivePreviewContainer
                    selectedDevice={selectedDevice}
                    customScale={customScale}
                    isFullscreen={false}
                >
                    {typeof children === 'function' ? children(selectedDevice) : children}
                </ResponsivePreviewContainer>
            </div>

            {/* Fullscreen Modal Overlay */}
            {isFullscreen && (
                <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md">
                    {/* Enhanced dot pattern background */}
                    <div
                        className="absolute inset-0 opacity-40"
                        style={{
                            backgroundImage: `
                                radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px),
                                radial-gradient(circle, rgba(59,130,246,0.1) 0.5px, transparent 0.5px)
                            `,
                            backgroundSize: '24px 24px, 48px 48px',
                            backgroundPosition: '0 0, 12px 12px'
                        }}
                    ></div>

                    {/* Animated floating dots - Blue */}
                    <div
                        className="absolute inset-0 opacity-25"
                        style={{
                            backgroundImage: `radial-gradient(circle, rgba(59,130,246,0.8) 2px, transparent 2px)`,
                            backgroundSize: '60px 60px',
                            animation: 'float-dots 25s ease-in-out infinite'
                        }}
                    ></div>

                    {/* Animated floating dots - Purple */}
                    <div
                        className="absolute inset-0 opacity-15"
                        style={{
                            backgroundImage: `radial-gradient(circle, rgba(168,85,247,0.9) 1.5px, transparent 1.5px)`,
                            backgroundSize: '45px 45px',
                            animation: 'float-dots-reverse 30s ease-in-out infinite reverse'
                        }}
                    ></div>

                    {/* Animated floating dots - Green */}
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `radial-gradient(circle, rgba(34,197,94,0.7) 1px, transparent 1px)`,
                            backgroundSize: '35px 35px',
                            animation: 'float-dots-slow 35s ease-in-out infinite'
                        }}
                    ></div>

                    <style jsx>{`
                        @keyframes float-dots {
                            0%, 100% { 
                                transform: translate(0, 0) rotate(0deg);
                                opacity: 0.25;
                            }
                            25% { 
                                transform: translate(20px, -15px) rotate(90deg);
                                opacity: 0.35;
                            }
                            50% { 
                                transform: translate(-10px, -25px) rotate(180deg);
                                opacity: 0.15;
                            }
                            75% { 
                                transform: translate(-15px, -10px) rotate(270deg);
                                opacity: 0.3;
                            }
                        }
                        
                        @keyframes float-dots-reverse {
                            0%, 100% { 
                                transform: translate(0, 0) rotate(0deg);
                                opacity: 0.15;
                            }
                            33% { 
                                transform: translate(-12px, 18px) rotate(-120deg);
                                opacity: 0.25;
                            }
                            66% { 
                                transform: translate(8px, -20px) rotate(-240deg);
                                opacity: 0.1;
                            }
                        }
                        
                        @keyframes float-dots-slow {
                            0%, 100% { 
                                transform: translate(0, 0) rotate(0deg);
                                opacity: 0.1;
                            }
                            50% { 
                                transform: translate(15px, -12px) rotate(180deg);
                                opacity: 0.15;
                            }
                        }
                    `}</style>

                    <div className="w-full h-full flex flex-col relative z-10">
                        {/* Fullscreen Toolbar */}
                        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between shadow-sm">
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
                                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Fullscreen Preview
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-xl p-1.5 shadow-inner">
                                    {['desktop', 'tablet', 'mobile'].map((device) => (
                                        <button
                                            key={device}
                                            type="button"
                                            className={`
                                                px-4 py-2 text-sm rounded-lg transition-all duration-300 capitalize font-medium
                                                ${selectedDevice === device
                                                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30 scale-105'
                                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200'
                                                }
                                            `}
                                            onClick={() => setSelectedDevice(device as any)}
                                        >
                                            {device}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <button
                                type="button"
                                className="p-3 rounded-xl text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md"
                                onClick={() => setIsFullscreen(false)}
                                title="Close Fullscreen (Esc)"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Fullscreen Content */}
                        <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
                            <ResponsivePreviewContainer
                                selectedDevice={selectedDevice}
                                customScale={false}
                                isFullscreen={true}
                            >
                                {typeof children === 'function' ? children(selectedDevice) : children}
                            </ResponsivePreviewContainer>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

// Export individual components for advanced usage
export { DevicePreviewToolbar, ResponsivePreviewContainer }
