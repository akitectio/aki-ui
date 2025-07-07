'use client'

import { Progress } from '@akitectio/aki-ui';
import { CodeBlock } from '@/components/CodeBlock';
import { PageHeader } from '@/components/PageHeader';

export default function ProgressPage() {
    return (
        <PageHeader
            title="Progress"
            description="Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Import</h2>
                    <CodeBlock language="typescript">
                        {`import { Progress } from '@akitectio/aki-ui'`}
                    </CodeBlock>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="space-y-4">
                                <Progress value={33} className="w-full" />
                                <Progress value={66} className="w-full" />
                                <Progress value={100} className="w-full" />
                            </div>
                        </div>
                        <CodeBlock language="jsx">
                            {`<div className="space-y-4">
  <Progress value={33} className="w-full" />
  <Progress value={66} className="w-full" />
  <Progress value={100} className="w-full" />
</div>`}
                        </CodeBlock>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">With Size</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="space-y-4">
                                <Progress value={50} size="sm" className="w-full" />
                                <Progress value={50} size="md" className="w-full" />
                                <Progress value={50} size="lg" className="w-full" />
                            </div>
                        </div>
                        <CodeBlock language="jsx">
                            {`<div className="space-y-4">
  <Progress value={50} size="sm" className="w-full" />
  <Progress value={50} size="md" className="w-full" />
  <Progress value={50} size="lg" className="w-full" />
</div>`}
                        </CodeBlock>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">With Colors</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="space-y-4">
                                <Progress value={50} className="w-full" />
                                <Progress value={50} className="w-full [&>*]:bg-green-500" />
                                <Progress value={50} className="w-full [&>*]:bg-red-500" />
                                <Progress value={50} className="w-full [&>*]:bg-yellow-500" />
                            </div>
                        </div>
                        <CodeBlock language="jsx">
                            {`<div className="space-y-4">
  <Progress value={50} className="w-full" />
  <Progress value={50} className="w-full [&>*]:bg-green-500" />
  <Progress value={50} className="w-full [&>*]:bg-red-500" />
  <Progress value={50} className="w-full [&>*]:bg-yellow-500" />
</div>`}
                        </CodeBlock>
                    </div>
                </section>
            </div>
        </PageHeader>
    );
}
