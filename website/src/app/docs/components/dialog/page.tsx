'use client'

import { useState } from 'react';
import { Dialog } from '@akitectio/aki-ui';
import { CodeBlock } from '@/components/CodeBlock';
import { PageHeader } from '@/components/PageHeader';

export default function DialogPage() {
    const [open, setOpen] = useState(false);

    return (
        <PageHeader
            title="Dialog"
            description="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Import</h2>
                    <CodeBlock language="typescript">
                        {`import { Dialog } from '@akitectio/aki-ui'`}
                    </CodeBlock>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <button
                                onClick={() => setOpen(true)}
                                className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800"
                            >
                                Open Dialog
                            </button>
                            <Dialog open={open} onOpenChange={setOpen}>
                                <div className="p-6">
                                    <h2 className="text-lg font-semibold mb-2">Dialog Title</h2>
                                    <p className="text-sm text-gray-600 mb-4">
                                        This is a dialog. You can put any content here.
                                    </p>
                                    <div className="flex gap-2 justify-end">
                                        <button
                                            onClick={() => setOpen(false)}
                                            className="px-4 py-2 text-sm border rounded hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={() => setOpen(false)}
                                            className="px-4 py-2 text-sm bg-black text-white rounded hover:bg-gray-800"
                                        >
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            </Dialog>
                        </div>
                        <CodeBlock language="jsx">
                            {`const [open, setOpen] = useState(false);

<button
  onClick={() => setOpen(true)}
  className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800"
>
  Open Dialog
</button>
<Dialog open={open} onOpenChange={setOpen}>
  <div className="p-6">
    <h2 className="text-lg font-semibold mb-2">Dialog Title</h2>
    <p className="text-sm text-gray-600 mb-4">
      This is a dialog. You can put any content here.
    </p>
    <div className="flex gap-2 justify-end">
      <button
        onClick={() => setOpen(false)}
        className="px-4 py-2 text-sm border rounded hover:bg-gray-50"
      >
        Cancel
      </button>
      <button
        onClick={() => setOpen(false)}
        className="px-4 py-2 text-sm bg-black text-white rounded hover:bg-gray-800"
      >
        Confirm
      </button>
    </div>
  </div>
</Dialog>`}
                        </CodeBlock>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Custom Content</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <p className="text-sm text-gray-600 mb-4">
                                Dialog can contain any content including forms, lists, or complex layouts.
                            </p>
                        </div>
                        <CodeBlock language="jsx">
                            {`<Dialog open={open} onOpenChange={setOpen}>
  <div className="p-6">
    <h2 className="text-lg font-semibold mb-4">User Profile</h2>
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter your email"
        />
      </div>
      <div className="flex gap-2 justify-end">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="px-4 py-2 text-sm border rounded hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm bg-black text-white rounded hover:bg-gray-800"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</Dialog>`}
                        </CodeBlock>
                    </div>
                </section>
            </div>
        </PageHeader>
    );
}
