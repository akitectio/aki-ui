'use client'

import React, { useEffect, useState } from 'react'
import { Button, useToast } from '@akitectio/aki-ui'

// Interactive component that uses toast
function InteractiveToastButtons() {
    const [isMounted, setIsMounted] = useState(false)
    const toast = useToast()

    // Ensure we're mounted before rendering interactive content
    useEffect(() => {
        setIsMounted(true)
    }, [])

    // Don't render interactive elements until mounted
    if (!isMounted) {
        return <div className="space-y-4">Loading toast demo...</div>
    }

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Button
                    onClick={() =>
                        toast.show({
                            title: 'Success!',
                            message: 'Your action was completed successfully.',
                            variant: 'success',
                        })
                    }
                    variant="success"
                    size="sm"
                >
                    Success Toast
                </Button>

                <Button
                    onClick={() =>
                        toast.show({
                            title: 'Error!',
                            message: 'Something went wrong. Please try again.',
                            variant: 'error',
                        })
                    }
                    variant="danger"
                    size="sm"
                >
                    Error Toast
                </Button>

                <Button
                    onClick={() =>
                        toast.show({
                            title: 'Warning!',
                            message: 'Please check your input before proceeding.',
                            variant: 'warning',
                        })
                    }
                    variant="warning"
                    size="sm"
                >
                    Warning Toast
                </Button>

                <Button
                    onClick={() =>
                        toast.show({
                            title: 'Info',
                            message: 'Here is some useful information for you.',
                            variant: 'info',
                        })
                    }
                    variant="secondary"
                    size="sm"
                >
                    Info Toast
                </Button>
            </div>

            <div className="flex gap-3">
                <Button
                    onClick={() =>
                        toast.show({
                            message: 'This toast will auto-close after 10 seconds.',
                            duration: 10000,
                        })
                    }
                    variant="outline"
                    size="sm"
                >
                    Long Duration
                </Button>

                <Button
                    onClick={() =>
                        toast.show({
                            message: 'This toast will stay until manually dismissed.',
                            duration: 0,
                            dismissible: true,
                        })
                    }
                    variant="outline"
                    size="sm"
                >
                    Persistent Toast
                </Button>

                <Button
                    onClick={() => toast.dismissAll()}
                    variant="outline"
                    size="sm"
                >
                    Dismiss All
                </Button>
            </div>
        </div>
    )
}

// Main component with provider and client-side mounting check
export default function ToastDemo() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    // Show fallback buttons during hydration
    if (!isMounted) {
        return (
            <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <button className="px-4 py-2 bg-green-100 text-green-700 rounded-md text-sm" disabled>
                        Success Toast
                    </button>
                    <button className="px-4 py-2 bg-red-100 text-red-700 rounded-md text-sm" disabled>
                        Error Toast
                    </button>
                    <button className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-md text-sm" disabled>
                        Warning Toast
                    </button>
                    <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md text-sm" disabled>
                        Info Toast
                    </button>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-sm" disabled>
                        Long Duration
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-sm" disabled>
                        Persistent Toast
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-sm" disabled>
                        Dismiss All
                    </button>
                </div>
            </div>
        )
    }

    return (
        <InteractiveToastButtons />
    )
}
