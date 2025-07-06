'use client'

import { useState } from 'react';
import { Command } from '@/components/client-components';
import { CodeBlock } from '@/components/CodeBlock';
import { PageHeader } from '@/components/PageHeader';

export default function CommandPage() {
    const [value, setValue] = useState('');

    return (
        <PageHeader
            title="Command"
            description="Fast, composable, unstyled command menu for React."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Import</h2>
                    <CodeBlock language="typescript">
                        {`import { Command } from '@/components/client-components'`}
                    </CodeBlock>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <Command className="rounded-lg border shadow-md">
                                <div className="p-2">
                                    <input
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        placeholder="Type a command or search..."
                                        className="w-full px-3 py-2 text-sm border rounded"
                                    />
                                </div>
                                <div className="p-2 border-t">
                                    <div className="space-y-1">
                                        <div className="px-2 py-1.5 text-sm rounded hover:bg-gray-100 cursor-pointer">
                                            📁 New File
                                        </div>
                                        <div className="px-2 py-1.5 text-sm rounded hover:bg-gray-100 cursor-pointer">
                                            📂 New Folder
                                        </div>
                                        <div className="px-2 py-1.5 text-sm rounded hover:bg-gray-100 cursor-pointer">
                                            🔍 Search Files
                                        </div>
                                        <div className="px-2 py-1.5 text-sm rounded hover:bg-gray-100 cursor-pointer">
                                            ⚙️ Settings
                                        </div>
                                    </div>
                                </div>
                            </Command>
                        </div>
                        <CodeBlock language="jsx">
                            {`const [value, setValue] = useState('');

<Command className="rounded-lg border shadow-md">
  <div className="p-2">
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Type a command or search..."
      className="w-full px-3 py-2 text-sm border rounded"
    />
  </div>
  <div className="p-2 border-t">
    <div className="space-y-1">
      <div className="px-2 py-1.5 text-sm rounded hover:bg-gray-100 cursor-pointer">
        📁 New File
      </div>
      <div className="px-2 py-1.5 text-sm rounded hover:bg-gray-100 cursor-pointer">
        📂 New Folder
      </div>
      <div className="px-2 py-1.5 text-sm rounded hover:bg-gray-100 cursor-pointer">
        🔍 Search Files
      </div>
      <div className="px-2 py-1.5 text-sm rounded hover:bg-gray-100 cursor-pointer">
        ⚙️ Settings
      </div>
    </div>
  </div>
</Command>`}
                        </CodeBlock>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">With Groups</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <Command className="rounded-lg border shadow-md">
                                <div className="p-2">
                                    <input
                                        placeholder="Type a command or search..."
                                        className="w-full px-3 py-2 text-sm border rounded"
                                    />
                                </div>
                                <div className="p-2 border-t">
                                    <div className="space-y-3">
                                        <div>
                                            <div className="px-2 py-1 text-xs font-medium text-gray-500 uppercase tracking-wide">
                                                Suggestions
                                            </div>
                                            <div className="space-y-1">
                                                <div className="px-2 py-1.5 text-sm rounded hover:bg-gray-100 cursor-pointer">
                                                    📁 New File
                                                </div>
                                                <div className="px-2 py-1.5 text-sm rounded hover:bg-gray-100 cursor-pointer">
                                                    📂 New Folder
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="px-2 py-1 text-xs font-medium text-gray-500 uppercase tracking-wide">
                                                Settings
                                            </div>
                                            <div className="space-y-1">
                                                <div className="px-2 py-1.5 text-sm rounded hover:bg-gray-100 cursor-pointer">
                                                    👤 Profile
                                                </div>
                                                <div className="px-2 py-1.5 text-sm rounded hover:bg-gray-100 cursor-pointer">
                                                    🔔 Notifications
                                                </div>
                                                <div className="px-2 py-1.5 text-sm rounded hover:bg-gray-100 cursor-pointer">
                                                    🎨 Theme
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Command>
                        </div>
                        <CodeBlock language="jsx">
                            {`<Command className="rounded-lg border shadow-md">
  <div className="p-2">
    <input
      placeholder="Type a command or search..."
      className="w-full px-3 py-2 text-sm border rounded"
    />
  </div>
  <div className="p-2 border-t">
    <div className="space-y-3">
      <div>
        <div className="px-2 py-1 text-xs font-medium text-gray-500 uppercase tracking-wide">
          Suggestions
        </div>
        <div className="space-y-1">
          <div className="px-2 py-1.5 text-sm rounded hover:bg-gray-100 cursor-pointer">
            📁 New File
          </div>
          <div className="px-2 py-1.5 text-sm rounded hover:bg-gray-100 cursor-pointer">
            📂 New Folder
          </div>
        </div>
      </div>
      <div>
        <div className="px-2 py-1 text-xs font-medium text-gray-500 uppercase tracking-wide">
          Settings
        </div>
        <div className="space-y-1">
          <div className="px-2 py-1.5 text-sm rounded hover:bg-gray-100 cursor-pointer">
            👤 Profile
          </div>
          <div className="px-2 py-1.5 text-sm rounded hover:bg-gray-100 cursor-pointer">
            🔔 Notifications
          </div>
          <div className="px-2 py-1.5 text-sm rounded hover:bg-gray-100 cursor-pointer">
            🎨 Theme
          </div>
        </div>
      </div>
    </div>
  </div>
</Command>`}
                        </CodeBlock>
                    </div>
                </section>
            </div>
        </PageHeader>
    );
}
