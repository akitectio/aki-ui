'use client'

import { useToast, Button } from '@akitectio/aki-ui'

export default function GlobalToastTest() {
    const toast = useToast()

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border">
                <h3 className="text-sm font-medium mb-2">Global Toast Test</h3>
                <button
                    onClick={() =>
                        toast.show({
                            title: 'Global Toast Working!',
                            message: 'Toast functionality is available globally.',
                            variant: 'success',
                        })
                    }
                    className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                >
                    Test Global Toast
                </button>
            </div>
        </div>
    )
}
