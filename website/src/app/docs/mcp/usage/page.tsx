'use client'

import { useState } from 'react'
import { Button, Card, Badge, Alert } from '@akitectio/aki-ui'
import { PageHeader } from '@/components/PageHeader'
import { 
  CommandLineIcon,
  CpuChipIcon,
  ClipboardDocumentIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  ArrowRightIcon,
  PlayIcon
} from '@heroicons/react/24/outline'

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
    <div className="relative group">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-1 rounded-xl">
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          {/* Code header */}
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-gray-400 font-mono">{language}</span>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={handleCopy}
              className={`text-xs border-gray-600 transition-all duration-200 ${
                copied 
                  ? 'bg-green-600 text-white border-green-600' 
                  : 'text-gray-300 hover:text-white hover:border-gray-500 hover:bg-gray-700'
              }`}
            >
              {copied ? (
                <span className="flex items-center">
                  <CheckCircleIcon className="h-3 w-3 mr-1" />
                  Copied
                </span>
              ) : (
                <span className="flex items-center">
                  <ClipboardDocumentIcon className="h-3 w-3 mr-1" />
                  Copy
                </span>
              )}
            </Button>
          </div>
          
          {/* Code content */}
          <pre className="p-4 text-gray-100 overflow-x-auto text-sm leading-relaxed">
            <code className="font-mono">{children}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}

const usageSenarios = [
  {
    id: 'component-generation',
    title: 'Component Generation',
    description: 'Generate React components using Aki UI',
    icon: CpuChipIcon,
    examples: [
      {
        name: 'Generate Dashboard',
        prompt: 'Create a dashboard with cards and charts',
        tool: 'generate_component'
      },
      {
        name: 'Generate Form',
        prompt: 'Create a contact form with validation',
        tool: 'generate_component'
      }
    ]
  },
  {
    id: 'component-discovery',
    title: 'Component Discovery',
    description: 'Search and explore available components',
    icon: CommandLineIcon,
    examples: [
      {
        name: 'Search Components',
        prompt: 'Find components for forms',
        tool: 'search_components'
      },
      {
        name: 'Get Component Details',
        prompt: 'Get details about Button component',
        tool: 'get_component_details'
      }
    ]
  },
  {
    id: 'code-optimization',
    title: 'Code Optimization',
    description: 'Optimize and validate your code',
    icon: LightBulbIcon,
    examples: [
      {
        name: 'Optimize Component',
        prompt: 'Optimize this component for performance',
        tool: 'optimize_component'
      },
      {
        name: 'Validate Code',
        prompt: 'Check if this code follows best practices',
        tool: 'validate_code'
      }
    ]
  }
]

export default function MCPUsagePage() {
  const [selectedScenario, setSelectedScenario] = useState(usageSenarios[0])
  const [activeTab, setActiveTab] = useState('prompts')

  return (
    <PageHeader
      title="MCP Usage Guide"
      description="Learn how to effectively use the Aki UI MCP server with your AI tools for enhanced development workflows."
    >
      <div className="space-y-8">
        {/* Overview */}
        <section>
          <Card className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200 dark:border-purple-800">
            <div className="flex items-start space-x-4">
              <CommandLineIcon className="w-8 h-8 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-3 text-purple-900 dark:text-purple-100">
                  MCP-Powered Development
                </h2>
                <p className="text-purple-800 dark:text-purple-200 mb-4">
                  The Aki UI MCP server provides real-time access to component documentation, code generation, 
                  and optimization tools directly within your AI assistant conversations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-purple-300 text-purple-700 dark:border-purple-600 dark:text-purple-300">
                    15+ Tools Available
                  </Badge>
                  <Badge variant="outline" className="border-blue-300 text-blue-700 dark:border-blue-600 dark:text-blue-300">
                    Real-time Access
                  </Badge>
                  <Badge variant="outline" className="border-green-300 text-green-700 dark:border-green-600 dark:text-green-300">
                    Claude Compatible
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Quick Start */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Basic MCP Commands</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">1. Search for Components</h4>
                <CodeBlock language="text">
{`Ask Claude: "Search for form components in Aki UI"

This will use the search_components tool to find relevant form-related components.`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">2. Generate a Component</h4>
                <CodeBlock language="text">
{`Ask Claude: "Generate a contact form using Aki UI components"

This will use the generate_component tool to create a complete form with validation.`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">3. Get Component Details</h4>
                <CodeBlock language="text">
{`Ask Claude: "Show me the details and props for the Button component"

This will use the get_component_details tool to provide comprehensive information.`}
                </CodeBlock>
              </div>
            </div>
          </Card>
        </section>

        {/* Usage Scenarios */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Common Usage Scenarios</h2>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {usageSenarios.map((scenario) => {
              const Icon = scenario.icon
              return (
                <Card 
                  key={scenario.id}
                  className={`p-4 cursor-pointer transition-all border-2 ${
                    selectedScenario.id === scenario.id 
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' 
                      : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                  onClick={() => setSelectedScenario(scenario)}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    <h3 className="font-semibold">{scenario.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {scenario.description}
                  </p>
                </Card>
              )
            })}
          </div>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">{selectedScenario.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {selectedScenario.description}
            </p>

            <div className="space-y-4">
              {selectedScenario.examples.map((example, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">{example.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Tool: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">{example.tool}</code>
                  </p>
                  <CodeBlock language="text">
                    {`Claude: "${example.prompt}"`}
                  </CodeBlock>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Advanced Usage */}
        <section>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Advanced Usage
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              Explore advanced techniques and workflows for power users.
            </p>
            
            {/* Custom Tab Implementation */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { id: 'prompts', label: 'Custom Prompts', icon: CommandLineIcon, color: 'from-blue-500 to-indigo-500' },
                { id: 'workflows', label: 'Workflows', icon: CpuChipIcon, color: 'from-purple-500 to-pink-500' },
                { id: 'resources', label: 'Resources', icon: ClipboardDocumentIcon, color: 'from-green-500 to-emerald-500' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group flex items-center px-6 py-3 rounded-xl transition-all duration-300 border-2 font-medium ${
                    activeTab === tab.id 
                      ? `bg-gradient-to-r ${tab.color} text-white border-transparent shadow-lg transform scale-105` 
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  <tab.icon className={`h-5 w-5 mr-3 transition-colors ${
                    activeTab === tab.id ? 'text-white' : 'text-gray-500 group-hover:text-indigo-500'
                  }`} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              {activeTab === 'prompts' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg mr-3">
                      <CommandLineIcon className="h-6 w-6 text-white" />
                    </div>
                    Custom Prompts
                  </h3>
                  <div className="space-y-6">
                    <Card className="overflow-hidden border-0 shadow-lg">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-1"></div>
                      <div className="p-6">
                        <h4 className="font-bold mb-3 text-gray-900 dark:text-white">Dashboard Generation Prompt</h4>
                        <CodeBlock language="text">
{`Please use the generate_dashboard prompt with the following parameters:
- type: "admin"
- features: "charts, tables, cards, navigation, user management"

Create a comprehensive admin dashboard with modern design patterns.`}
                        </CodeBlock>
                      </div>
                    </Card>

                    <Card className="overflow-hidden border-0 shadow-lg">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1"></div>
                      <div className="p-6">
                        <h4 className="font-bold mb-3 text-gray-900 dark:text-white">Form Creation Prompt</h4>
                        <CodeBlock language="text">
{`Use the create_form prompt to generate:
- fields: "name, email, phone, company, message"
- validation: "required fields, email format, phone format"

Include proper error handling and success states.`}
                        </CodeBlock>
                      </div>
                    </Card>
                  </div>
                </div>
              )}

              {activeTab === 'workflows' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3">
                      <CpuChipIcon className="h-6 w-6 text-white" />
                    </div>
                    Development Workflows
                  </h3>
                  <div className="space-y-6">
                    <Card className="overflow-hidden border-0 shadow-lg">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-1"></div>
                      <div className="p-6">
                        <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Component Development Workflow</h4>
                        <div className="space-y-4">
                          {[
                            'Search for similar components',
                            'Generate initial component structure',
                            'Validate code for best practices',
                            'Optimize for performance and accessibility'
                          ].map((step, index) => (
                            <div key={index} className="flex items-center space-x-4">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                {index + 1}
                              </div>
                              <span className="text-gray-700 dark:text-gray-300">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>

                    <Card className="overflow-hidden border-0 shadow-lg">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1"></div>
                      <div className="p-6">
                        <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Theme Customization Workflow</h4>
                        <div className="space-y-4">
                          {[
                            'Get current theme configuration',
                            'Generate custom theme with brand colors',
                            'Apply theme variables to CSS'
                          ].map((step, index) => (
                            <div key={index} className="flex items-center space-x-4">
                              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                {index + 1}
                              </div>
                              <span className="text-gray-700 dark:text-gray-300">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              )}

              {activeTab === 'resources' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                    <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mr-3">
                      <ClipboardDocumentIcon className="h-6 w-6 text-white" />
                    </div>
                    Available Resources
                  </h3>
                  <div className="space-y-6">
                    <Card className="overflow-hidden border-0 shadow-lg">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-1"></div>
                      <div className="p-6">
                        <h4 className="font-bold mb-3 text-gray-900 dark:text-white">Component List Resource</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          Access the complete list of all Aki UI components with their properties and examples.
                        </p>
                        <CodeBlock language="text">
                          {`URI: aki-ui://components/list
Access: Complete component catalog with metadata`}
                        </CodeBlock>
                      </div>
                    </Card>

                    <Card className="overflow-hidden border-0 shadow-lg">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-1"></div>
                      <div className="p-6">
                        <h4 className="font-bold mb-3 text-gray-900 dark:text-white">LLMs Documentation Resource</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          AI-optimized documentation in the llms.txt format for better context understanding.
                        </p>
                        <CodeBlock language="text">
                          {`URI: aki-ui://docs/llms.txt
Access: AI-optimized documentation`}
                        </CodeBlock>
                      </div>
                    </Card>

                    <Card className="overflow-hidden border-0 shadow-lg">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1"></div>
                      <div className="p-6">
                        <h4 className="font-bold mb-3 text-gray-900 dark:text-white">Default Theme Resource</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          Default theme configuration that can be used as a starting point for customization.
                        </p>
                        <CodeBlock language="text">
                          {`URI: aki-ui://theme/default
Access: Default theme configuration JSON`}
                        </CodeBlock>
                      </div>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-3 text-green-800 dark:text-green-200">
                    Effective MCP Usage
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• Be specific about component requirements</li>
                    <li>• Use descriptive prompts for better results</li>
                    <li>• Combine multiple tools in a single conversation</li>
                    <li>• Ask for explanations of the generated code</li>
                    <li>• Request modifications and improvements iteratively</li>
                    <li>• Leverage resources for comprehensive information</li>
                  </ul>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start space-x-3">
                <ExclamationTriangleIcon className="w-6 h-6 text-orange-600 dark:text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-3 text-orange-800 dark:text-orange-200">
                    Common Pitfalls
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• Being too vague in component descriptions</li>
                    <li>• Not specifying design requirements clearly</li>
                    <li>• Forgetting to mention accessibility needs</li>
                    <li>• Not asking for TypeScript types when needed</li>
                    <li>• Overlooking responsive design requirements</li>
                    <li>• Not validating generated code</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Troubleshooting */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-3">MCP Server Not Responding</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                If Claude cannot access the MCP tools, check your configuration:
              </p>
              <CodeBlock language="bash">
{`# Check if MCP server is running
npx @akitectio/aki-ui-mcp-server

# Verify Claude configuration
cat ~/.config/claude/claude_desktop_config.json`}
              </CodeBlock>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3">Tool Not Found Errors</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                If you get "tool not found" errors, ensure you're using the correct tool names:
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• <code>search_components</code> - Search for components</li>
                <li>• <code>get_component_details</code> - Get component information</li>
                <li>• <code>generate_component</code> - Generate new components</li>
                <li>• <code>validate_code</code> - Validate code quality</li>
                <li>• <code>optimize_component</code> - Optimize performance</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <Card className="p-8 text-center bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20">
            <h2 className="text-2xl font-bold mb-4">Start Using MCP Today</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Experience the power of AI-assisted development with direct access to Aki UI components and tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="/docs/mcp/installation">
                  <PlayIcon className="w-4 h-4 mr-2" />
                  Install MCP Server
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/docs/mcp/api">
                  <ArrowRightIcon className="w-4 h-4 mr-2" />
                  API Reference
                </a>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </PageHeader>
  )
}
