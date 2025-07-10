// Test file to verify universal components work in Remix
import React from 'react';
import { Badge, Button, Card } from '@akitectio/aki-ui';

export default function RemixTest() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Universal Aki UI Test</h1>

            <Card className="p-6 mb-4">
                <div className="flex items-center gap-2 mb-3">
                    <Badge variant="success">Universal</Badge>
                    <h2 className="text-lg font-semibold">Works in Remix!</h2>
                </div>
                <p className="text-gray-600 mb-4">
                    This demonstrates universal Aki UI components working with Remix without adapters.
                </p>
                <Button variant="primary" onClick={() => alert('Universal components work!')}>
                    Test Universal Component
                </Button>
            </Card>
        </div>
    );
}
