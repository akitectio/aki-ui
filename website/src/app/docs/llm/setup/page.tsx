'use client'

import React, { useState, useEffect } from 'react'
import { Button, Card, Badge, Alert, Tabs, Tab } from '@akitectio/aki-ui'

const CodeBlock = ({ children, language = 'bash' }: { children: string; language?: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="relative">
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>{children}</code>
      </pre>
      <Button
        size="sm"
        variant="outline"
        onClick={handleCopy}
        className="absolute top-2 right-2 text-xs"
      >
        {copied ? '✓ Copied' : 'Copy'}
      </Button>
    </div>
  )
}

const CopyUrlButton = ({ url, label }: { url: string; label: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={handleCopy}
      className="ml-2"
    >
      {copied ? '✓ Copied' : `Copy ${label}`}
    </Button>
  )
}

export default function LLMSetupPage() {
  const [mounted, setMounted] = useState(false)
  const [baseUrl, setBaseUrl] = useState('https://aki-ui.akitect.io')

  useEffect(() => {
    setMounted(true)
    setBaseUrl(window.location.origin)
  }, [])

  const llmsUrl = `${baseUrl}/llms.txt`
  const llmsFullUrl = `${baseUrl}/llms-full.txt`

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">LLM Setup Guide</h1>
        <p className="text-lg text-gray-600 mb-6">
          Configure your AI tools to work seamlessly with Aki UI components using the llms.txt standard.
        </p>
      </div>

      {/* LLMs.txt URLs */}
      <section>
        <h2 className="text-2xl font-bold mb-4">LLMs.txt Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              📄 Standard Documentation
              {mounted && <CopyUrlButton url={llmsUrl} label="URL" />}
            </h3>
            <p className="text-gray-600 mb-3">
              Concise overview and component information for quick AI context.
            </p>
            <div className="bg-gray-50 p-3 rounded text-sm font-mono break-all">
              {mounted ? llmsUrl : 'https://aki-ui.akitect.io/llms.txt'}
            </div>
            <Badge variant="outline" className="mt-2">Recommended for most use cases</Badge>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              📚 Full Documentation
              {mounted && <CopyUrlButton url={llmsFullUrl} label="URL" />}
            </h3>
            <p className="text-gray-600 mb-3">
              Complete API reference with detailed examples and best practices.
            </p>
            <div className="bg-gray-50 p-3 rounded text-sm font-mono break-all">
              {mounted ? llmsFullUrl : 'https://aki-ui.akitect.io/llms-full.txt'}
            </div>
            <Badge variant="outline" className="mt-2">For comprehensive projects</Badge>
          </Card>
        </div>
      </section>

      {/* Setup by AI Tool */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Setup by AI Tool</h2>

        <Tabs defaultIndex={0}>
          <Tab label="GitHub Copilot">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">GitHub Copilot Setup</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Method 1: Chat Context</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Share the llms.txt URL in your Copilot chat for immediate context:
                  </p>
                  <CodeBlock language="text">{`Please use this documentation for Aki UI components: ${mounted ? llmsUrl : 'https://aki-ui.akitect.io/llms.txt'}

Help me create a contact form using Aki UI components.`}</CodeBlock>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Method 2: Workspace Context</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Add a reference file to your project:
                  </p>
                  <CodeBlock language="bash">{`# Create a docs reference file
echo "Aki UI Documentation: ${mounted ? llmsUrl : 'https://aki-ui.akitect.io/llms.txt'}" > .github/copilot-instructions.md`}</CodeBlock>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Method 3: Comment Instructions</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Add comments in your code files:
                  </p>
                  <CodeBlock language="typescript">{`// Aki UI Documentation: ${mounted ? llmsUrl : 'https://aki-ui.akitect.io/llms.txt'}
// Use Aki UI components for this React component

import { Button, Card } from '@akitectio/aki-ui'

export default function MyComponent() {
  // Component implementation
}`}</CodeBlock>
                </div>
              </div>

              <Alert variant="info" showIcon className="mt-4">
                <div>
                  <strong>Pro Tip</strong>
                  <p className="mt-1">
                    Start your conversations with Copilot Chat by sharing the llms.txt URL for better component suggestions.
                  </p>
                </div>
              </Alert>
            </Card>
          </Tab>

          <Tab label="Cursor IDE">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">Cursor IDE Setup</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">1. Add to Cursor Rules</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Create or edit <code className="bg-gray-100 px-1 rounded">.cursorrules</code> in your project root:
                  </p>
                  <CodeBlock>{`# Aki UI Component Library
Use Aki UI components from @akitectio/aki-ui for React development.
Documentation: ${mounted ? llmsUrl : 'https://aki-ui.akitect.io/llms.txt'}

When creating UI components:
- Import from '@akitectio/aki-ui'
- Follow the component patterns in the documentation
- Use TypeScript for better type safety
- Implement responsive design using breakpoint props`}</CodeBlock>
                </div>

                <div>
                  <h4 className="font-medium mb-2">2. Use AI Chat</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Reference the documentation in your AI conversations:
                  </p>
                  <CodeBlock language="text">{`Using the Aki UI documentation at ${mounted ? llmsUrl : 'https://aki-ui.akitect.io/llms.txt'}, create a responsive navigation component with the following features:
- Logo on the left
- Menu items in the center
- User avatar on the right
- Mobile-friendly hamburger menu`}</CodeBlock>
                </div>

                <div>
                  <h4 className="font-medium mb-2">3. Codebase Context</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Let Cursor analyze your existing Aki UI usage for better suggestions:
                  </p>
                  <CodeBlock language="bash">{`# Add Aki UI imports to establish context
import { Button, Card, Grid, Stack } from '@akitectio/aki-ui'`}</CodeBlock>
                </div>
              </div>
            </Card>
          </Tab>

          <Tab label="Claude">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">Claude (Anthropic) Setup</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Direct Documentation Sharing</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Share the llms.txt content directly in your conversation:
                  </p>
                  <CodeBlock language="text">{`I'm working with the Aki UI component library. Here's the documentation: ${mounted ? llmsUrl : 'https://aki-ui.akitect.io/llms.txt'}

Please help me build a dashboard layout using Aki UI components.`}</CodeBlock>
                </div>

                <div>
                  <h4 className="font-medium mb-2">MCP Integration (Advanced)</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    For the most powerful integration, use our MCP server:
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-3 rounded">
                    <p className="text-blue-800 text-sm">
                      The Aki UI MCP server provides real-time access to component documentation and code generation.
                      <Button size="sm" variant="outline" className="ml-2" asChild>
                        <a href="/docs/mcp/installation">Setup MCP</a>
                      </Button>
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Project Context</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    For ongoing projects, establish context early:
                  </p>
                  <CodeBlock language="text">{`This is a React project using:
- Aki UI component library (${llmsUrl})
- TypeScript
- Tailwind CSS
- Next.js

Please help me maintain consistency with these technologies.`}</CodeBlock>
                </div>
              </div>
            </Card>
          </Tab>

          <Tab label="Other Tools">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">Other AI Tools</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2 flex items-center">
                    <Badge variant="outline" className="mr-2">Codeium</Badge>
                    Setup Instructions
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p>1. Add documentation reference in your IDE settings</p>
                    <p>2. Use inline comments with llms.txt URL</p>
                    <p>3. Reference Aki UI in your chat conversations</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 flex items-center">
                    <Badge variant="outline" className="mr-2">Tabnine</Badge>
                    Setup Instructions
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p>1. Configure team settings with documentation URL</p>
                    <p>2. Add Aki UI patterns to your codebase</p>
                    <p>3. Use consistent import patterns for better suggestions</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 flex items-center">
                    <Badge variant="outline" className="mr-2">Continue.dev</Badge>
                    Setup Instructions
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p>1. Add to Continue.dev configuration</p>
                    <p>2. Include llms.txt URL in system prompts</p>
                    <p>3. Use MCP integration for advanced features</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 flex items-center">
                    <Badge variant="outline" className="mr-2">ChatGPT</Badge>
                    Setup Instructions
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p>1. Share llms.txt URL in your conversations</p>
                    <p>2. Use custom instructions with Aki UI context</p>
                    <p>3. Reference specific component documentation as needed</p>
                  </div>
                </div>
              </div>

              <Alert variant="info" showIcon className="mt-4">
                <div>
                  <strong>Universal Approach</strong>
                  <p className="mt-1">
                    Most AI tools can benefit from sharing the llms.txt URL and establishing Aki UI context
                    in your conversations or configuration files.
                  </p>
                </div>
              </Alert>
            </Card>
          </Tab>
        </Tabs>
      </section>

      {/* Best Practices */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-3">🎯 Effective Prompting</h3>
            <ul className="space-y-2 text-sm">
              <li>• Start with documentation URL context</li>
              <li>• Be specific about component requirements</li>
              <li>• Mention accessibility and responsive needs</li>
              <li>• Request TypeScript types when needed</li>
              <li>• Ask for best practices and examples</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-3">📝 Project Setup</h3>
            <ul className="space-y-2 text-sm">
              <li>• Add llms.txt URL to project README</li>
              <li>• Include Aki UI in dependency documentation</li>
              <li>• Create component usage examples</li>
              <li>• Document your theming approach</li>
              <li>• Maintain consistent import patterns</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-3">🔄 Iterative Development</h3>
            <ul className="space-y-2 text-sm">
              <li>• Start with basic component structure</li>
              <li>• Add props and customization gradually</li>
              <li>• Request responsive design iterations</li>
              <li>• Ask for accessibility improvements</li>
              <li>• Optimize for performance when needed</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-3">🛠 Troubleshooting</h3>
            <ul className="space-y-2 text-sm">
              <li>• Share specific error messages</li>
              <li>• Provide component code context</li>
              <li>• Mention Aki UI version being used</li>
              <li>• Include relevant TypeScript errors</li>
              <li>• Ask for alternative approaches</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Example Workflows */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Example Workflows</h2>
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-3">Creating a New Component</h3>
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <p className="text-sm"><strong>Step 1:</strong> Provide context</p>
                <code className="text-xs">"Using Aki UI documentation at {llmsUrl}, help me create..."</code>
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-green-500">
                <p className="text-sm"><strong>Step 2:</strong> Specify requirements</p>
                <code className="text-xs">"The component should be responsive, accessible, and use TypeScript"</code>
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-purple-500">
                <p className="text-sm"><strong>Step 3:</strong> Request examples</p>
                <code className="text-xs">"Show me usage examples and best practices"</code>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-3">Debugging Issues</h3>
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded border-l-4 border-red-500">
                <p className="text-sm"><strong>Share context:</strong></p>
                <code className="text-xs">"I'm using Aki UI ({llmsUrl}) and getting this error..."</code>
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-yellow-500">
                <p className="text-sm"><strong>Provide code:</strong></p>
                <code className="text-xs">"Here's my component code and the specific issue I'm facing"</code>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Testing Setup */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Testing Your Setup</h2>
        <Card className="p-6">
          <p className="text-gray-600 mb-4">
            Verify your AI tool setup with these test prompts:
          </p>

          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-medium text-blue-800 mb-2">Basic Test</h4>
              <p className="text-sm text-blue-700">
                "Using Aki UI documentation, show me how to create a simple button with different variants"
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-medium text-green-800 mb-2">Advanced Test</h4>
              <p className="text-sm text-green-700">
                "Create a responsive card grid using Aki UI components with proper TypeScript types"
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded">
              <h4 className="font-medium text-purple-800 mb-2">Integration Test</h4>
              <p className="text-sm text-purple-700">
                "Build a complete contact form with validation using Aki UI form components"
              </p>
            </div>
          </div>

          <Alert variant="success" showIcon className="mt-4">
            <div>
              <strong>Expected Results</strong>
              <p className="mt-1">
                Your AI tool should provide code that imports from '@akitectio/aki-ui' and follows
                the component patterns shown in our documentation.
              </p>
            </div>
          </Alert>
        </Card>
      </section>
    </div>
  )
}
