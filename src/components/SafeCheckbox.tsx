import React from 'react';
import { Checkbox } from '../lib/components';
import ErrorBoundary from './ErrorBoundary';

// Safe wrapper for Checkbox to handle potential errors
const SafeCheckbox: React.FC<React.ComponentProps<typeof Checkbox>> = ({ children, ...props }) => {
    return (
        <ErrorBoundary
            fallback={
                <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border border-gray-300 rounded bg-gray-100"></div>
                    <span className="text-gray-500 text-sm">{children || 'Checkbox'}</span>
                </div>
            }
        >
            <Checkbox {...props}>
                {children}
            </Checkbox>
        </ErrorBoundary>
    );
};

export default SafeCheckbox;
