'use client'

import { useState } from 'react';
import { Textarea } from '@/components/client-components';
import { CodeBlock } from '@/components/CodeBlock';
import { PageHeader } from '@/components/PageHeader';

export default function TextareaPage() {
    const [value, setValue] = useState('');

    return (
        <PageHeader
            title="Textarea"
            description="Displays a form textarea or a component that looks like a textarea."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Import</h2>
                    <CodeBlock language="typescript">
                        {`import { Textarea } from '@/components/client-components'`}
                    </CodeBlock>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <Textarea placeholder="Type your message here." />
                        </div>
                        <CodeBlock language="jsx">
                            {`<Textarea placeholder="Type your message here." />`}
                        </CodeBlock>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Disabled</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <Textarea placeholder="Type your message here." disabled />
                        </div>
                        <CodeBlock language="jsx">
                            {`<Textarea placeholder="Type your message here." disabled />`}
                        </CodeBlock>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">With Text</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <Textarea
                                placeholder="Type your message here."
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </div>
                        <CodeBlock language="jsx">
                            {`const [value, setValue] = useState('');

<Textarea 
  placeholder="Type your message here." 
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`}
                        </CodeBlock>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">With Label</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="grid w-full gap-1.5">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Your message
                                </label>
                                <Textarea placeholder="Type your message here." />
                            </div>
                        </div>
                        <CodeBlock language="jsx">
                            {`<div className="grid w-full gap-1.5">
  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
    Your message
  </label>
  <Textarea placeholder="Type your message here." />
</div>`}
                        </CodeBlock>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">With Text and Button</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="grid w-full gap-2">
                                <Textarea placeholder="Type your message here." />
                                <button className="bg-black text-white px-4 py-2 rounded text-sm">
                                    Send message
                                </button>
                            </div>
                        </div>
                        <CodeBlock language="jsx">
                            {`<div className="grid w-full gap-2">
  <Textarea placeholder="Type your message here." />
  <button className="bg-black text-white px-4 py-2 rounded text-sm">
    Send message
  </button>
</div>`}
                        </CodeBlock>
                    </div>
                </section>
            </div>
        </PageHeader>
    );
}
