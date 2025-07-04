'use client'

import { useEffect } from 'react'

declare global {
    interface Window {
        gurubaseWidget?: any
    }
}

export function GurubaseWidget() {
    useEffect(() => {
        // Only load on client side
        if (typeof window === 'undefined') return

        // Only load in production or when NEXT_PUBLIC_ENABLE_GURUBASE is set
        const enableGurubase = process.env.NODE_ENV === 'production' ||
            process.env.NEXT_PUBLIC_ENABLE_GURUBASE === 'true'

        if (!enableGurubase) {
            console.log('Gurubase widget disabled in development')
            return
        }

        // Prevent multiple loads
        if (window.gurubaseWidget || document.getElementById('guru-widget-id')) {
            return
        }

        const loadWidget = () => {
            try {
                // Add custom CSS for better visibility
                const style = document.createElement('style')
                style.textContent = `
                    /* Gurubase Widget Styling - Fix visibility issues */
                    .gurubase-widget, 
                    .gurubase-widget *,
                    [data-widget-id="SVS8JvZPz1_JssKP_nVszZcxnn7xDjWEjMwfOXA-lBw"] *,
                    div[id*="guru"], 
                    div[class*="guru"] {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
                    }
                    
                    /* Light mode - Dark text on light background */
                    .gurubase-widget button,
                    [data-widget-id="SVS8JvZPz1_JssKP_nVszZcxnn7xDjWEjMwfOXA-lBw"] button,
                    div[id*="guru"] button,
                    div[class*="guru"] button {
                        background-color: #ffffff !important;
                        color: #1f2937 !important;
                        border: 2px solid #3b82f6 !important;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
                        transition: all 0.2s ease !important;
                        font-weight: 500 !important;
                        padding: 8px 16px !important;
                        border-radius: 8px !important;
                    }
                    
                    .gurubase-widget button:hover,
                    [data-widget-id="SVS8JvZPz1_JssKP_nVszZcxnn7xDjWEjMwfOXA-lBw"] button:hover,
                    div[id*="guru"] button:hover,
                    div[class*="guru"] button:hover {
                        background-color: #3b82f6 !important;
                        color: #ffffff !important;
                        transform: translateY(-1px) !important;
                        box-shadow: 0 6px 8px -2px rgba(0, 0, 0, 0.15) !important;
                    }
                    
                    /* Dark mode compatibility */
                    @media (prefers-color-scheme: dark) {
                        .gurubase-widget button,
                        [data-widget-id="SVS8JvZPz1_JssKP_nVszZcxnn7xDjWEjMwfOXA-lBw"] button,
                        div[id*="guru"] button,
                        div[class*="guru"] button {
                            background-color: #1f2937 !important;
                            color: #ffffff !important;
                            border-color: #6366f1 !important;
                        }
                        
                        .gurubase-widget button:hover,
                        [data-widget-id="SVS8JvZPz1_JssKP_nVszZcxnn7xDjWEjMwfOXA-lBw"] button:hover,
                        div[id*="guru"] button:hover,
                        div[class*="guru"] button:hover {
                            background-color: #6366f1 !important;
                            color: #ffffff !important;
                        }
                    }
                    
                    /* Force text visibility in all contexts - but not for buttons */
                    .gurubase-widget *:not(button),
                    [data-widget-id="SVS8JvZPz1_JssKP_nVszZcxnn7xDjWEjMwfOXA-lBw"] *:not(button),
                    div[id*="guru"] *:not(button),
                    div[class*="guru"] *:not(button) {
                        color: inherit !important;
                        text-shadow: none !important;
                    }
                    
                    /* Ensure button text colors are preserved */
                    .gurubase-widget button,
                    .gurubase-widget button *,
                    [data-widget-id="SVS8JvZPz1_JssKP_nVszZcxnn7xDjWEjMwfOXA-lBw"] button,
                    [data-widget-id="SVS8JvZPz1_JssKP_nVszZcxnn7xDjWEjMwfOXA-lBw"] button *,
                    div[id*="guru"] button,
                    div[id*="guru"] button *,
                    div[class*="guru"] button,
                    div[class*="guru"] button * {
                        color: inherit !important;
                        text-shadow: none !important;
                    }
                `
                document.head.appendChild(style)

                const script = document.createElement('script')
                script.src = 'https://widget.gurubase.io/widget.latest.min.js'
                script.async = true
                script.setAttribute('data-widget-id', 'SVS8JvZPz1_JssKP_nVszZcxnn7xDjWEjMwfOXA-lBw')
                script.setAttribute('data-text', 'Ask AI')
                script.setAttribute('data-margins', '{"bottom": "1rem", "right": "1rem"}')
                script.setAttribute('data-light-mode', 'light')
                script.id = 'guru-widget-id'

                script.onload = () => {
                    console.log('Gurubase widget loaded successfully')
                }

                script.onerror = () => {
                    console.warn('Gurubase widget failed to load')
                }

                document.head.appendChild(script)
            } catch (error) {
                console.error('Error loading Gurubase widget:', error)
            }
        }

        // Load after a small delay to ensure DOM is fully ready
        const timer = setTimeout(loadWidget, 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    return null // This component doesn't render anything
}
