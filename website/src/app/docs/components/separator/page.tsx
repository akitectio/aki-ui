'use client'

import { Separator } from '@/components/client-components';
import { CodeBlock } from '@/components/CodeBlock';
import { PageHeader } from '@/components/PageHeader';

export default function SeparatorPage() {
    return (
        <PageHeader
            title="Separator"
            description="Visually or semantically separates content."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Import</h2>
                    <CodeBlock language="typescript">
                        {`import { Separator } from '@/components/client-components'`}
                    </CodeBlock>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="space-y-1">
                                <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
                                <p className="text-sm text-muted-foreground">
                                    An open-source UI component library.
                                </p>
                            </div>
                            <Separator className="my-4" />
                            <div className="flex h-5 items-center space-x-4 text-sm">
                                <div>Blog</div>
                                <Separator orientation="vertical" />
                                <div>Docs</div>
                                <Separator orientation="vertical" />
                                <div>Source</div>
                            </div>
                        </div>
                        <CodeBlock language="jsx">
                            {`<div>
  <div className="space-y-1">
    <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
    <p className="text-sm text-muted-foreground">
      An open-source UI component library.
    </p>
  </div>
  <Separator className="my-4" />
  <div className="flex h-5 items-center space-x-4 text-sm">
    <div>Blog</div>
    <Separator orientation="vertical" />
    <div>Docs</div>
    <Separator orientation="vertical" />
    <div>Source</div>
  </div>
</div>`}
                        </CodeBlock>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Vertical Separator</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="flex h-5 items-center space-x-4 text-sm">
                                <div>Blog</div>
                                <Separator orientation="vertical" />
                                <div>Docs</div>
                                <Separator orientation="vertical" />
                                <div>Source</div>
                            </div>
                        </div>
                        <CodeBlock language="jsx">
                            {`<div className="flex h-5 items-center space-x-4 text-sm">
  <div>Blog</div>
  <Separator orientation="vertical" />
  <div>Docs</div>
  <Separator orientation="vertical" />
  <div>Source</div>
</div>`}
                        </CodeBlock>
                    </div>
                </section>
            </div>
        </PageHeader>
    );
}
