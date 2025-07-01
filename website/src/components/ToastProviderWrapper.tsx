'use client'

import React from 'react'
import { ToastProvider } from '@akitectio/aki-ui'

interface ToastProviderWrapperProps {
    children: React.ReactNode
}

export function ToastProviderWrapper({ children }: ToastProviderWrapperProps) {
    console.log('ToastProviderWrapper rendered with fixed ToastProvider')
    const Provider = ToastProvider as any

    return (
        <Provider>
            {children}
        </Provider>
    )
}
