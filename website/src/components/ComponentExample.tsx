"use client";

import React from 'react';
import { CodeBlock } from './CodeBlock';

interface ComponentExampleProps {
    children: React.ReactNode;
    code: string;
    language?: string;
    title?: string;
    description?: string;
}

export default function ComponentExample({
    children,
    code,
    language = "tsx",
    title,
    description
}: ComponentExampleProps) {
    return (
        <div className="space-y-4">
            {title && <h3 className="text-lg font-medium">{title}</h3>}
            {description && <p className="text-gray-600">{description}</p>}

            {/* Preview */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white dark:bg-gray-800 dark:border-gray-700">
                {children}
            </div>

            {/* Code */}
            <CodeBlock code={code} language={language} />
        </div>
    );
}

export { ComponentExample };
