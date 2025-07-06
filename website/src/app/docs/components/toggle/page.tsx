'use client'

import { useState } from 'react';
import { Toggle } from '@/components/client-components';
import { CodeBlock } from '@/components/CodeBlock';
import { PageHeader } from '@/components/PageHeader';

export default function TogglePage() {
    const [pressed, setPressed] = useState(false);

    return (
        <PageHeader
            title="Toggle"
            description="A two-state button that can be either on or off."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Import</h2>
                    <CodeBlock language="typescript">
                        {`import { Toggle } from '@/components/client-components'`}
                    </CodeBlock>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <Toggle aria-label="Toggle italic">
                                <span className="text-sm font-medium">B</span>
                            </Toggle>
                        </div>
                        <CodeBlock language="jsx">
                            {`<Toggle aria-label="Toggle italic">
  <span className="text-sm font-medium">B</span>
</Toggle>`}
                        </CodeBlock>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Controlled</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="flex items-center gap-2">
                                <Toggle
                                    pressed={pressed}
                                    onPressedChange={setPressed}
                                    aria-label="Toggle bold"
                                >
                                    <span className="text-sm font-medium">B</span>
                                </Toggle>
                                <span className="text-sm text-gray-600">
                                    {pressed ? 'Bold is on' : 'Bold is off'}
                                </span>
                            </div>
                        </div>
                        <CodeBlock language="jsx">
                            {`const [pressed, setPressed] = useState(false);

<div className="flex items-center gap-2">
  <Toggle 
    pressed={pressed}
    onPressedChange={setPressed}
    aria-label="Toggle bold"
  >
    <span className="text-sm font-medium">B</span>
  </Toggle>
  <span className="text-sm text-gray-600">
    {pressed ? 'Bold is on' : 'Bold is off'}
  </span>
</div>`}
                        </CodeBlock>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Disabled</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <Toggle disabled aria-label="Toggle italic">
                                <span className="text-sm font-medium">I</span>
                            </Toggle>
                        </div>
                        <CodeBlock language="jsx">
                            {`<Toggle disabled aria-label="Toggle italic">
  <span className="text-sm font-medium">I</span>
</Toggle>`}
                        </CodeBlock>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">With Text</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <Toggle aria-label="Toggle notifications">
                                <span className="text-sm">Enable notifications</span>
                            </Toggle>
                        </div>
                        <CodeBlock language="jsx">
                            {`<Toggle aria-label="Toggle notifications">
  <span className="text-sm">Enable notifications</span>
</Toggle>`}
                        </CodeBlock>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Size Variants</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="flex items-center gap-4">
                                <Toggle size="sm" aria-label="Toggle small">
                                    <span className="text-xs">S</span>
                                </Toggle>
                                <Toggle size="md" aria-label="Toggle medium">
                                    <span className="text-sm">M</span>
                                </Toggle>
                                <Toggle size="lg" aria-label="Toggle large">
                                    <span className="text-base">L</span>
                                </Toggle>
                            </div>
                        </div>
                        <CodeBlock language="jsx">
                            {`<div className="flex items-center gap-4">
  <Toggle size="sm" aria-label="Toggle small">
    <span className="text-xs">S</span>
  </Toggle>
  <Toggle size="md" aria-label="Toggle medium">
    <span className="text-sm">M</span>
  </Toggle>
  <Toggle size="lg" aria-label="Toggle large">
    <span className="text-base">L</span>
  </Toggle>
</div>`}
                        </CodeBlock>
                    </div>
                </section>
            </div>
        </PageHeader>
    );
}
