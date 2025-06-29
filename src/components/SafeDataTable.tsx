import React from 'react';
import { DataTable } from '../lib/components';
import ErrorBoundary from './ErrorBoundary';

// Safe wrapper for DataTable to handle potential errors
const SafeDataTable: React.FC<React.ComponentProps<typeof DataTable>> = (props) => {
    return (
        <ErrorBoundary
            fallback={
                <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <p className="text-gray-500 text-sm">
                        Unable to load data table. Please try refreshing the page.
                    </p>
                </div>
            }
        >
            <DataTable {...props} />
        </ErrorBoundary>
    );
};

export default SafeDataTable;
