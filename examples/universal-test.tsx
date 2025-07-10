// Test universal import approach - should work across all React frameworks
import React from 'react';
import { Button, Card, Badge, Input } from '@akitectio/aki-ui';

// Works in React, Next.js, Remix, Gatsby without any adapters!
export default function UniversalTest() {
    return (
        <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">
                Universal Aki UI Components
                <Badge variant="success" className="ml-2">Universal</Badge>
            </h2>

            <div className="space-y-4">
                <div>
                    <Input
                        placeholder="This works everywhere!"
                        className="mb-2"
                    />
                    <Button variant="primary">
                        Works in Next.js, Remix, Gatsby, Vite!
                    </Button>
                </div>

                <div className="text-sm text-gray-600">
                    ✅ No adapters needed<br />
                    ✅ SSR compatible<br />
                    ✅ Framework agnostic<br />
                    ✅ TypeScript ready
                </div>
            </div>
        </Card>
    );
}

// Framework detection example (optional usage)
import { getFrameworkInfo } from '@akitectio/aki-ui';

export function FrameworkInfo() {
    const framework = getFrameworkInfo();

    return (
        <div className="mt-4 p-3 bg-gray-100 rounded">
            <strong>Framework:</strong> {framework.framework}<br />
            <strong>SSR:</strong> {framework.isSSR ? 'Yes' : 'No'}
        </div>
    );
}
