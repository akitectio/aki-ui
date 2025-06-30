'use client'

import React, { useState } from 'react'
import { Button, Card, Badge, Alert, Tabs, Tab } from '@akitectio/aki-ui'
import { getVersionBadge } from '@/lib/version'

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

export default function MCPInstallationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">MCP Server Installation</h1>
        <p className="text-lg text-gray-600 mb-6">
          Install and configure the Aki UI MCP server for your AI development workflow.
        </p>
      </div>

      {/* Installation Methods */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Installation Methods</h2>
        
        <Tabs defaultIndex={0}>
          <Tab label="npm (Recommended)">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">Install from npm</h3>
              <p className="text-gray-600 mb-4">
                The easiest way to install the Aki UI MCP server is through npm:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Global Installation (Recommended)</h4>
                  <CodeBlock>npm install -g @akitectio/aki-ui-mcp-server</CodeBlock>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Local Installation</h4>
                  <CodeBlock>npm install @akitectio/aki-ui-mcp-server</CodeBlock>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Verify Installation</h4>
                  <CodeBlock>aki-ui-mcp --version</CodeBlock>
                </div>
              </div>

              <Alert variant="info" showIcon>
                <div>
                  <strong>Requirements</strong>
                  <p className="mt-1">
                    Node.js 18+ and npm 8+ are required for installation.
                  </p>
                </div>
              </Alert>
            </Card>
          </Tab>
          
          <Tab label="From Source">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">Install from Source</h3>
              <p className="text-gray-600 mb-4">
                For development or customization, you can install from the source repository:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Clone Repository</h4>
                  <CodeBlock>git clone https://github.com/akitectio/aki-ui.git
cd aki-ui/mcp</CodeBlock>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Install Dependencies</h4>
                  <CodeBlock>npm install</CodeBlock>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Build</h4>
                  <CodeBlock>npm run build</CodeBlock>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Link Globally</h4>
                  <CodeBlock>npm link</CodeBlock>
                </div>
              </div>
            </Card>
          </Tab>
          
          <Tab label="Docker">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">Docker Installation</h3>
              <p className="text-gray-600 mb-4">
                Run the MCP server in a containerized environment:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Pull Image</h4>
                  <CodeBlock>docker pull akitectio/aki-ui-mcp:latest</CodeBlock>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Run Container</h4>
                  <CodeBlock>docker run -p 3000:3000 akitectio/aki-ui-mcp:latest</CodeBlock>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">With Volume Mount</h4>
                  <CodeBlock>docker run -p 3000:3000 -v $(pwd):/workspace akitectio/aki-ui-mcp:latest</CodeBlock>
                </div>
              </div>

              <Badge variant="warning" className="mt-4">
                Docker image coming soon
              </Badge>
            </Card>
          </Tab>
        </Tabs>
      </section>

      {/* Configuration */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Configuration</h2>
        
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Claude Desktop Configuration</h3>
            <p className="text-gray-600 mb-4">
              Add the MCP server to your Claude Desktop configuration:
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">1. Open Claude Desktop Settings</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Navigate to Settings → Developer → MCP Servers
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">2. Add Configuration</h4>
                <CodeBlock language="json">{`{
  "mcpServers": {
    "aki-ui": {
      "command": "aki-ui-mcp",
      "args": [],
      "env": {}
    }
  }
}`}</CodeBlock>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">3. Restart Claude Desktop</h4>
                <p className="text-sm text-gray-600">
                  Restart the application to load the new MCP server configuration.
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Cursor IDE Configuration</h3>
            <p className="text-gray-600 mb-4">
              Configure Cursor IDE to use the Aki UI MCP server:
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">1. Open Cursor Settings</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Go to Preferences → Extensions → MCP
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">2. Add Server Configuration</h4>
                <CodeBlock language="json">{`{
  "mcp": {
    "servers": [
      {
        "name": "aki-ui",
        "command": "aki-ui-mcp",
        "args": ["--port", "3000"]
      }
    ]
  }
}`}</CodeBlock>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">VS Code with Continue.dev</h3>
            <p className="text-gray-600 mb-4">
              Use the MCP server with Continue.dev extension in VS Code:
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">1. Install Continue.dev Extension</h4>
                <CodeBlock>code --install-extension continue.continue</CodeBlock>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">2. Configure Continue.dev</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Edit <code className="bg-gray-100 px-1 rounded">.continue/config.json</code>:
                </p>
                <CodeBlock language="json">{`{
  "models": [...],
  "mcpServers": [
    {
      "name": "aki-ui",
      "command": "aki-ui-mcp",
      "args": []
    }
  ]
}`}</CodeBlock>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Environment Variables */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Environment Variables</h2>
        <Card className="p-6">
          <p className="text-gray-600 mb-4">
            Configure the MCP server behavior using environment variables:
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4 font-medium">Variable</th>
                  <th className="text-left py-2 pr-4 font-medium">Default</th>
                  <th className="text-left py-2 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono">MCP_PORT</td>
                  <td className="py-2 pr-4">3000</td>
                  <td className="py-2">Port for MCP server</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono">MCP_HOST</td>
                  <td className="py-2 pr-4">localhost</td>
                  <td className="py-2">Host address</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono">LOG_LEVEL</td>
                  <td className="py-2 pr-4">info</td>
                  <td className="py-2">Logging level (debug, info, warn, error)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono">CACHE_TTL</td>
                  <td className="py-2 pr-4">3600</td>
                  <td className="py-2">Cache time-to-live in seconds</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-4">
            <h4 className="font-medium mb-2">Example .env file:</h4>
            <CodeBlock language="bash">{`MCP_PORT=3001
LOG_LEVEL=debug
CACHE_TTL=7200`}</CodeBlock>
          </div>
        </Card>
      </section>

      {/* Verification */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Verify Installation</h2>
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">1. Check Server Status</h4>
              <CodeBlock>aki-ui-mcp --status</CodeBlock>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">2. Test MCP Connection</h4>
              <CodeBlock>aki-ui-mcp --test</CodeBlock>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">3. List Available Tools</h4>
              <CodeBlock>aki-ui-mcp --list-tools</CodeBlock>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Expected Output</h4>
              <div className="bg-green-50 border border-green-200 p-3 rounded text-sm">
                <pre className="text-green-800">{`✓ Aki UI MCP Server ${getVersionBadge()}
✓ Connection: OK
✓ Available tools: 15
✓ Ready to use with AI assistants`}</pre>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Troubleshooting */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="font-semibold mb-3">Common Issues</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-red-600 mb-1">Command not found: aki-ui-mcp</h4>
                <p className="text-sm text-gray-600 mb-2">
                  The global installation didn't add the command to your PATH.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <strong>Solution:</strong> Try running with npx: <code>npx @akitectio/aki-ui-mcp-server</code>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-red-600 mb-1">Permission denied during installation</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Insufficient permissions for global installation.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <strong>Solution:</strong> Use sudo: <code>sudo npm install -g @akitectio/aki-ui-mcp-server</code>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-red-600 mb-1">MCP server not responding</h4>
                <p className="text-sm text-gray-600 mb-2">
                  The server may not be running or configured correctly.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <strong>Solution:</strong> Check the logs: <code>aki-ui-mcp --logs</code>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <h3 className="font-semibold mb-3">Getting Help</h3>
            <p className="text-gray-600 mb-4">
              If you encounter issues not covered here:
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Badge variant="outline">GitHub</Badge>
                <a 
                  href="https://github.com/akitectio/aki-ui/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Report an issue
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline">Discussions</Badge>
                <a 
                  href="https://github.com/akitectio/aki-ui/discussions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Community support
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline">Docs</Badge>
                <span className="text-sm">Check the usage guide for examples</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Next Steps */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
        <Card className="p-6">
          <p className="text-gray-600 mb-4">
            Now that you have the MCP server installed, you can:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button className="h-auto p-4 flex flex-col items-start" variant="outline" asChild>
              <a href="/docs/mcp/usage">
                <span className="font-semibold mb-1">Learn Usage</span>
                <span className="text-sm text-gray-600">Explore available tools and commands</span>
              </a>
            </Button>
            
            <Button className="h-auto p-4 flex flex-col items-start" variant="outline" asChild>
              <a href="/docs/mcp/api">
                <span className="font-semibold mb-1">API Reference</span>
                <span className="text-sm text-gray-600">Detailed documentation of all functions</span>
              </a>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  )
}
