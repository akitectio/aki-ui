'use client'

import React from 'react'
import { useToastAPI } from '@/hooks/useToastAPI'

// Simple button component for our demo
const Button = ({ onClick, children, variant = 'primary' }: {
    onClick: () => void;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger' | 'warning';
}) => {
    const getVariantClasses = () => {
        switch (variant) {
            case 'primary':
                return 'bg-blue-500 hover:bg-blue-600 text-white';
            case 'secondary':
                return 'bg-gray-500 hover:bg-gray-600 text-white';
            case 'danger':
                return 'bg-red-500 hover:bg-red-600 text-white';
            case 'warning':
                return 'bg-yellow-500 hover:bg-yellow-600 text-white';
            default:
                return 'bg-blue-500 hover:bg-blue-600 text-white';
        }
    };

    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${getVariantClasses()}`}
        >
            {children}
        </button>
    );
};

export function ToastDemo() {
    const toast = useToastAPI()

    return (
        <div className="flex flex-wrap gap-3">
            <Button
                onClick={() => toast.info('This is an informational message')}
                variant="secondary"
            >
                Show Info Toast
            </Button>

            <Button
                onClick={() => toast.success('Operation completed successfully!')}
                variant="primary"
            >
                Show Success Toast
            </Button>

            <Button
                onClick={() => toast.warning('This is a warning message')}
                variant="warning"
            >
                Show Warning Toast
            </Button>

            <Button
                onClick={() => toast.error('An error occurred')}
                variant="danger"
            >
                Show Error Toast
            </Button>

            <Button
                onClick={() => toast.dismissAll()}
                variant="secondary"
            >
                Dismiss All
            </Button>
        </div>
    )
}

export default ToastDemo
