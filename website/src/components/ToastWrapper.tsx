'use client'

import React from 'react'
import { ToastProvider } from '@akitectio/aki-ui'

interface ToastWrapperProps {
    children: React.ReactNode
}

export function ToastWrapper({ children }: ToastWrapperProps) {
    return (
        <ToastProvider position="top-right">
            {children}
        </ToastProvider>
    )
}
