'use client'

import { useEffect, useState } from 'react'

export function GurubaseWidget() {
    const [loadStatus, setLoadStatus] = useState<'loading' | 'loaded' | 'error'>('loading')

    useEffect(() => {
        // Only load the widget after React has hydrated to avoid DOM conflicts
        if (typeof window !== 'undefined') {
            console.log('🔧 GurubaseWidget: Starting to load widget...')

            // Check if widget is already loaded
            const existingScript = document.getElementById('guru-widget-script')
            if (existingScript) {
                console.log('🔧 GurubaseWidget: Script already exists')
                setLoadStatus('loaded')
                return
            }

            const script = document.createElement('script')
            script.id = 'guru-widget-script'
            script.async = true
            script.src = 'https://widget.gurubase.io/widget.latest.min.js'
            script.setAttribute('data-widget-id', 'SVS8JvZPz1_JssKP_nVszZcxnn7xDjWEjMwfOXA-lBw')
            script.setAttribute('data-text', 'Ask AI')
            script.setAttribute('data-margins', '{"bottom": "1rem", "right": "1rem"}')
            script.setAttribute('data-light-mode', 'auto')

            // Add success handling
            script.onload = () => {
                console.log('✅ GurubaseWidget: Script loaded successfully')
                setLoadStatus('loaded')

                // Wait a bit then check if widget actually appeared
                setTimeout(() => {
                    const widget = document.querySelector('[data-widget-id]')
                    console.log('🔍 Widget DOM element:', widget)
                }, 2000)
            }

            // Add error handling
            script.onerror = (e) => {
                console.warn('❌ GurubaseWidget: Failed to load widget', e)
                setLoadStatus('error')
            }

            console.log('🔧 GurubaseWidget: Adding script to head...')
            document.head.appendChild(script)

            // Set timeout to check status
            setTimeout(() => {
                if (loadStatus === 'loading') {
                    console.warn('⏰ GurubaseWidget: Loading timeout')
                    setLoadStatus('error')
                }
            }, 10000)
        }
    }, [])

    // Show status indicator in development
    if (process.env.NODE_ENV === 'development') {
        return (
            <div className="fixed bottom-0 left-0 bg-black text-white text-xs p-2 z-50">
                Gurubase: {loadStatus}
            </div>
        )
    }

    return null
}
