'use client'

import { CodeBlock } from '@/components/CodeBlock';
import { PageHeader } from '@/components/PageHeader';

export default function LabelPage() {
    return (
        <PageHeader
            title="Label"
            description="Renders an accessible label associated with controls."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Import</h2>
                    <CodeBlock language="typescript">
                        {`import { Label } from '@akitectio/aki-ui'`}
                    </CodeBlock>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                                />
                            </div>
                        </div>
                        <CodeBlock language="jsx">
                            {`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`}
                        </CodeBlock>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">With Checkbox</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="h-4 w-4 rounded border-gray-300"
                                />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Accept terms and conditions
                                </label>
                            </div>
                        </div>
                        <CodeBlock language="jsx">
                            {`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label
    htmlFor="terms"
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    Accept terms and conditions
  </Label>
</div>`}
                        </CodeBlock>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Required Field</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Username <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    placeholder="Username"
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                                />
                            </div>
                        </div>
                        <CodeBlock language="jsx">
                            {`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="username">
    Username <span className="text-red-500">*</span>
  </Label>
  <Input type="text" id="username" placeholder="Username" />
</div>`}
                        </CodeBlock>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Disabled Field</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 opacity-50">
                                    Disabled Field
                                </label>
                                <input
                                    type="text"
                                    id="disabled"
                                    placeholder="Disabled"
                                    disabled
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm opacity-50 cursor-not-allowed"
                                />
                            </div>
                        </div>
                        <CodeBlock language="jsx">
                            {`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="disabled" className="opacity-50">
    Disabled Field
  </Label>
  <Input type="text" id="disabled" placeholder="Disabled" disabled />
</div>`}
                        </CodeBlock>
                    </div>
                </section>
            </div>
        </PageHeader>
    );
}
