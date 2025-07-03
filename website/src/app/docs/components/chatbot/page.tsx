'use client'

import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

export default function ChatbotPage() {
    return (
        <PageHeader
            title="Chatbot"
            description="AI chatbot interface with customizable rules and responses for interactive user engagement."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Import</h2>
                    <CodeBlock language="typescript">
                        {`import { Chatbot } from '@akitectio/aki-ui'`}
                    </CodeBlock>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                        <div className="space-y-4">
                            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Example Chatbot Preview:</p>
                                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 p-4 rounded">
                                    <div className="bg-white dark:bg-gray-900 rounded-lg border p-4 max-w-sm">
                                        <div className="flex items-center justify-between mb-3 pb-2 border-b">
                                            <h3 className="font-semibold">AI Assistant</h3>
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        </div>
                                        <div className="space-y-2 text-sm">
                                            <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                                Hello! How can I help you today?
                                            </div>
                                            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded text-right">
                                                Tell me about your features
                                            </div>
                                            <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                                I can help you with various tasks and answer your questions!
                                            </div>
                                        </div>
                                        <div className="mt-3 pt-2 border-t">
                                            <div className="flex">
                                                <input className="flex-1 px-2 py-1 text-xs border rounded-l" placeholder="Type a message..." />
                                                <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded-r">Send</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <CodeBlock language="typescript">
                                {`<Chatbot 
  greeting="Hello! How can I help?" 
  title="Support Bot" 
/>`}
                            </CodeBlock>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">With Custom Rules</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                        <div className="space-y-4">
                            <CodeBlock language="typescript">
                                {`const customRules = [
  {
    keywords: ['hello', 'hi', 'hey'],
    responses: ['Hello! How can I help you?', 'Hi there! What can I do for you?']
  },
  {
    keywords: ['price', 'cost', 'pricing'],
    responses: ['Our pricing starts at $9/month. Would you like to see our plans?']
  },
  {
    keywords: ['support', 'help'],
    responses: ['I am here to help! What do you need assistance with?']
  }
]

<Chatbot 
  rules={customRules}
  greeting="Welcome to our support chat!"
  title="Customer Support"
/>`}
                            </CodeBlock>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Minimized State</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                        <div className="space-y-4">
                            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Minimized Chatbot Preview:</p>
                                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 p-4 rounded">
                                    <div className="flex justify-end">
                                        <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700">
                                            💬
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <CodeBlock language="typescript">
                                {`<Chatbot 
  minimized 
  greeting="Click to start chatting!"
  title="Help Assistant"
/>`}
                            </CodeBlock>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">API Reference</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left p-2 font-semibold">Prop</th>
                                        <th className="text-left p-2 font-semibold">Type</th>
                                        <th className="text-left p-2 font-semibold">Default</th>
                                        <th className="text-left p-2 font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2"><code>rules</code></td>
                                        <td className="p-2"><code>ChatbotRule[]</code></td>
                                        <td className="p-2">-</td>
                                        <td className="p-2">Chatbot conversation rules</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2"><code>greeting</code></td>
                                        <td className="p-2"><code>string</code></td>
                                        <td className="p-2">-</td>
                                        <td className="p-2">Initial greeting message</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2"><code>title</code></td>
                                        <td className="p-2"><code>string</code></td>
                                        <td className="p-2">"AI Assistant"</td>
                                        <td className="p-2">Chat window title</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2"><code>minimized</code></td>
                                        <td className="p-2"><code>boolean</code></td>
                                        <td className="p-2">false</td>
                                        <td className="p-2">Start in minimized state</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">ChatbotRule Interface</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                        <CodeBlock language="typescript">
                            {`interface ChatbotRule {
  keywords: string[]       // Keywords to match in user input
  responses: string[]      // Possible responses to choose from
  exact?: boolean         // Whether to match keywords exactly
  caseSensitive?: boolean // Whether matching is case sensitive
}`}
                        </CodeBlock>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Accessibility</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                                Accessibility Features
                            </h3>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span><strong>Keyboard Navigation:</strong> Full keyboard support for all interactive elements</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span><strong>Screen Reader Support:</strong> Proper ARIA labels and roles for assistive technologies</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span><strong>Focus Management:</strong> Clear focus indicators and logical tab order</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </PageHeader>
    )
}
