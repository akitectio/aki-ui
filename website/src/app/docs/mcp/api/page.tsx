'use client'

import { useState } from 'react'
import { Button, Card, Badge, Alert } from '@akitectio/aki-ui'
import { PageHeader } from '@/components/PageHeader'
import { 
  CommandLineIcon,
  CpuChipIcon,
  DocumentTextIcon,
  SwatchIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  CodeBracketIcon,
  ArrowRightIcon,
  ClipboardDocumentIcon
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

const ApiMethod = ({ tool, description, parameters, returns, example }: {
  tool: string
  description: string
  parameters: Array<{ name: string; type: string; required: boolean; description: string }>
  returns: string
  example: string
}) => (
  <Card className="group relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-xl transition-all duration-300">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-3">
            <CodeBracketIcon className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{tool}</h3>
            <Badge variant="primary" className="mt-1 text-xs">{tool}</Badge>
          </div>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Badge variant="outline" className="text-xs">
            MCP Tool
          </Badge>
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">{description}</p>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-bold mb-3 text-gray-900 dark:text-white flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            Parameters
          </h4>
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
            {parameters.length === 0 ? (
              <p className="text-sm text-gray-500 italic">No parameters required</p>
            ) : (
              parameters.map((param, index) => (
                <div key={param.name} className={`${index > 0 ? 'pt-4 border-t border-gray-200 dark:border-gray-600 mt-4' : ''}`}>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-mono text-sm bg-white dark:bg-gray-700 px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-600 text-blue-600 dark:text-blue-400 font-semibold">
                      {param.name}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      param.required 
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' 
                        : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    }`}>
                      {param.required ? 'required' : 'optional'}
                    </span>
                    <span className="text-sm px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 font-mono">
                      {param.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{param.description}</p>
                </div>
              ))
            )}
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-3 text-gray-900 dark:text-white flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Returns
          </h4>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{returns}</p>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-3 text-gray-900 dark:text-white flex items-center">
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
            Example Usage
          </h4>
          <CodeBlock language="json">{example}</CodeBlock>
        </div>
      </div>
    </div>
  </Card>
)

export default function MCPAPIPage() {
  const [activeTab, setActiveTab] = useState('component-discovery')

  const componentDiscoveryTools = [
    {
      tool: 'search_components',
      description: 'Search for Aki UI components by name, category, or description',
      parameters: [
        { name: 'query', type: 'string', required: true, description: 'Search query (component name, category, or keywords)' },
        { name: 'category', type: 'string', required: false, description: 'Filter by component category (Layout, Data Entry, Data Display, Feedback, Navigation, Interactive)' }
      ],
      returns: 'Array of matching components with basic information',
      example: `// Search for form-related components
{
  "query": "form input",
  "category": "Data Entry"
}`
    },
    {
      tool: 'get_component_details',
      description: 'Get detailed information about a specific component',
      parameters: [
        { name: 'name', type: 'string', required: true, description: 'Component name (e.g., Button, Card, Input)' }
      ],
      returns: 'Detailed component information including props, examples, and accessibility guidelines',
      example: `// Get details about the Button component
{
  "name": "Button"
}`
    },
    {
      tool: 'list_all_components',
      description: 'List all available Aki UI components with brief descriptions',
      parameters: [],
      returns: 'Complete list of all available components with basic information',
      example: `// Get all components
{}`
    }
  ]

  const codeGenerationTools = [
    {
      tool: 'generate_component',
      description: 'Generate React component code using Aki UI components',
      parameters: [
        { name: 'type', type: 'string', required: true, description: 'Type of component to generate (form, dashboard, card, table, layout, custom)' },
        { name: 'components', type: 'string[]', required: false, description: 'List of Aki UI components to use' },
        { name: 'props', type: 'object', required: false, description: 'Component properties and configuration' },
        { name: 'features', type: 'string[]', required: false, description: 'Features to include (validation, dark mode, responsive, etc.)' }
      ],
      returns: 'Generated React component code with proper imports and usage',
      example: `// Generate a contact form
{
  "type": "form",
  "components": ["Input", "Button", "Card"],
  "features": ["validation", "responsive"],
  "props": {
    "title": "Contact Form",
    "fields": ["name", "email", "message"]
  }
}`
    },
    {
      tool: 'init_project',
      description: 'Initialize a complete React project with Aki UI setup',
      parameters: [
        { name: 'projectType', type: 'string', required: true, description: 'Type of project (vite-react, next-js, react-app, dashboard, website, admin-panel, portfolio)' },
        { name: 'projectName', type: 'string', required: true, description: 'Name of the project' },
        { name: 'features', type: 'string[]', required: false, description: 'Features to include (typescript, tailwind, router, auth, forms, etc.)' },
        { name: 'theme', type: 'string', required: false, description: 'Default theme style (default, dark, modern, minimal, colorful)' },
        { name: 'includeExamples', type: 'boolean', required: false, description: 'Include example components and pages' }
      ],
      returns: 'Complete project structure with configuration files and example code',
      example: `// Initialize a Next.js dashboard project
{
  "projectType": "next-js",
  "projectName": "my-dashboard",
  "features": ["typescript", "tailwind", "auth"],
  "theme": "modern",
  "includeExamples": true
}`
    }
  ]

  const documentationTools = [
    {
      tool: 'search_docs',
      description: 'Search Aki UI documentation for specific topics or components',
      parameters: [
        { name: 'query', type: 'string', required: true, description: 'Search query for documentation (component names, features, concepts)' },
        { name: 'type', type: 'string', required: false, description: 'Type of documentation to search (component, guide, example, api, all)' }
      ],
      returns: 'Relevant documentation sections and guides',
      example: `// Search for theming documentation
{
  "query": "dark mode theming",
  "type": "guide"
}`
    },
    {
      tool: 'get_examples',
      description: 'Get usage examples for specific Aki UI components',
      parameters: [
        { name: 'component', type: 'string', required: true, description: 'Component name to get examples for' },
        { name: 'complexity', type: 'string', required: false, description: 'Complexity level of examples (basic, intermediate, advanced, all)' }
      ],
      returns: 'Code examples demonstrating component usage',
      example: `// Get advanced Button examples
{
  "component": "Button",
  "complexity": "advanced"
}`
    },
    {
      tool: 'get_best_practices',
      description: 'Get best practices and guidelines for Aki UI usage',
      parameters: [
        { name: 'topic', type: 'string', required: true, description: 'Best practices topic (accessibility, performance, theming, forms, layouts, general)' }
      ],
      returns: 'Best practices guidelines and recommendations',
      example: `// Get accessibility best practices
{
  "topic": "accessibility"
}`
    }
  ]

  const themeManagementTools = [
    {
      tool: 'get_theme',
      description: 'Get current theme configuration',
      parameters: [],
      returns: 'Current theme configuration object',
      example: `// Get current theme
{}`
    },
    {
      tool: 'generate_theme',
      description: 'Generate a custom theme configuration',
      parameters: [
        { name: 'style', type: 'string', required: true, description: 'Theme style preset (modern, classic, minimal, colorful, dark, custom)' },
        { name: 'primaryColor', type: 'string', required: false, description: 'Primary brand color (hex, rgb, or color name)' },
        { name: 'preferences', type: 'object', required: false, description: 'Theme preferences (roundedCorners, boldText, largeSpacing)' }
      ],
      returns: 'Generated theme configuration object',
      example: `// Generate a modern blue theme
{
  "style": "modern",
  "primaryColor": "#3B82F6",
  "preferences": {
    "roundedCorners": true,
    "boldText": false,
    "largeSpacing": false
  }
}`
    },
    {
      tool: 'apply_theme_vars',
      description: 'Generate CSS custom properties for theme variables',
      parameters: [
        { name: 'config', type: 'object', required: true, description: 'Theme configuration object' },
        { name: 'format', type: 'string', required: false, description: 'Output format for theme variables (css, tailwind, json)' }
      ],
      returns: 'CSS custom properties or theme variable definitions',
      example: `// Generate CSS variables for theme
{
  "config": {
    "colors": {
      "primary": "#3B82F6",
      "secondary": "#64748B"
    }
  },
  "format": "css"
}`
    }
  ]

  const optimizationTools = [
    {
      tool: 'optimize_component',
      description: 'Optimize React component code for better performance and accessibility',
      parameters: [
        { name: 'code', type: 'string', required: true, description: 'React component code to optimize' },
        { name: 'focus', type: 'string', required: false, description: 'Optimization focus area (performance, accessibility, bundle-size, best-practices)' }
      ],
      returns: 'Optimized component code with performance and accessibility improvements',
      example: `// Optimize component for performance
{
  "code": "export function MyComponent() { ... }",
  "focus": "performance"
}`
    },
    {
      tool: 'validate_code',
      description: 'Validate React/Aki UI component code for best practices',
      parameters: [
        { name: 'code', type: 'string', required: true, description: 'React component code to validate' }
      ],
      returns: 'Validation results with suggestions for improvements',
      example: `// Validate component code
{
  "code": "export function MyComponent() { ... }"
}`
    }
  ]

  // Helper function to get tab descriptions
  const getTabDescription = (tabId: string) => {
    const descriptions = {
      'component-discovery': 'Discover and explore Aki UI components with powerful search and detailed information retrieval tools.',
      'code-generation': 'Generate complete React components and project structures with Aki UI integration and best practices.',
      'documentation': 'Access comprehensive documentation, examples, and best practices for effective Aki UI usage.',
      'theme-management': 'Create, customize, and apply themes to achieve perfect visual consistency across your applications.',
      'optimization': 'Analyze and optimize your components for performance, accessibility, and maintainability.'
    }
    return descriptions[tabId] || 'Powerful tools for UI development'
  }

  const tabsData = [
    { id: 'component-discovery', label: 'Component Discovery', icon: CpuChipIcon, tools: componentDiscoveryTools },
    { id: 'code-generation', label: 'Code Generation', icon: CodeBracketIcon, tools: codeGenerationTools },
    { id: 'documentation', label: 'Documentation', icon: DocumentTextIcon, tools: documentationTools },
    { id: 'theme-management', label: 'Theme Management', icon: SwatchIcon, tools: themeManagementTools },
    { id: 'optimization', label: 'Optimization', icon: CheckCircleIcon, tools: optimizationTools }
  ]

  return (
    <div className="space-y-8">
      <PageHeader 
        title="MCP API Reference"
        description="Complete reference for all available MCP tools and their usage"
      />

      {/* Overview */}
      <section>
        <Alert variant="info" className="mb-6">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <div>
            <h4 className="font-semibold">API Usage</h4>
            <p className="text-sm mt-1">
              All tools are accessible through the MCP protocol. Use your AI assistant to call these tools 
              by providing the tool name and required parameters.
            </p>
          </div>
        </Alert>

        {/* Enhanced Tool Categories Overview */}
        <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1"></div>
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
              Available Tool Categories
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Comprehensive MCP tools for every aspect of UI development with Aki UI
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tabsData.map((tab, index) => {
                const gradientColors = [
                  'from-blue-500 to-indigo-500',
                  'from-purple-500 to-pink-500', 
                  'from-green-500 to-emerald-500',
                  'from-orange-500 to-red-500',
                  'from-teal-500 to-cyan-500'
                ]
                const bgColors = [
                  'from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20',
                  'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20',
                  'from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20',
                  'from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20',
                  'from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20'
                ]
                
                return (
                  <Card 
                    key={tab.id} 
                    className={`group relative overflow-hidden cursor-pointer transition-all duration-300 border-2 hover:shadow-xl hover:-translate-y-2 ${
                      activeTab === tab.id 
                        ? 'border-blue-500 shadow-lg scale-105' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${bgColors[index]} opacity-50`}></div>
                    <div className="relative p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 bg-gradient-to-r ${gradientColors[index]} rounded-xl shadow-lg`}>
                          <tab.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          activeTab === tab.id 
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' 
                            : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                        }`}>
                          {tab.tools.length} tools
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {tab.label}
                      </h3>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {getTabDescription(tab.id)}
                      </p>
                      
                      {/* Hover indicator */}
                      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${gradientColors[index]} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </Card>
      </section>

      {/* API Tools */}
      <section>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Interactive API Explorer
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            Select a category below to explore available tools and their detailed documentation.
          </p>
          
          {/* Custom Tab Implementation */}
          <div className="flex flex-wrap gap-3 mb-8">
            {tabsData.map((tab, index) => {
              const gradientColors = [
                'from-blue-500 to-indigo-500',
                'from-purple-500 to-pink-500', 
                'from-green-500 to-emerald-500',
                'from-orange-500 to-red-500',
                'from-teal-500 to-cyan-500'
              ]
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group flex items-center px-6 py-3 rounded-xl transition-all duration-300 border-2 font-medium ${
                    activeTab === tab.id 
                      ? `bg-gradient-to-r ${gradientColors[index]} text-white border-transparent shadow-lg transform scale-105` 
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  <tab.icon className={`h-5 w-5 mr-3 transition-colors ${
                    activeTab === tab.id ? 'text-white' : 'text-gray-500 group-hover:text-blue-500'
                  }`} />
                  <span>{tab.label}</span>
                  <Badge 
                    variant={activeTab === tab.id ? "outline" : "secondary"} 
                    className={`ml-3 text-xs ${
                      activeTab === tab.id 
                        ? 'bg-white/20 text-white border-white/30' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {tab.tools.length}
                  </Badge>
                </button>
              )
            })}
          </div>

          {/* Tab Content */}
          {tabsData.map((tab) => (
            <div key={tab.id} className={activeTab === tab.id ? 'block' : 'hidden'}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-4">
                    <tab.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{tab.label}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{getTabDescription(tab.id)}</p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  {tab.tools.map((tool, index) => (
                    <ApiMethod key={index} {...tool} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Error Handling */}
      <section>
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl mr-4">
              <ExclamationTriangleIcon className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Error Handling
            </h2>
          </div>
          
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-red-200 dark:border-red-800">
            <div className="p-6">
              <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                All MCP tools return structured responses. In case of errors, you'll receive an error response 
                with detailed information about what went wrong.
              </p>
              
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                Common Error Types
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  { type: 'Invalid Parameters', desc: 'Missing or incorrect parameter types', color: 'red' },
                  { type: 'Component Not Found', desc: 'Requested component doesn\'t exist', color: 'orange' },
                  { type: 'Generation Error', desc: 'Issues during code generation', color: 'yellow' },
                  { type: 'Theme Error', desc: 'Invalid theme configuration', color: 'pink' }
                ].map((error, index) => (
                  <div key={index} className={`p-4 rounded-xl bg-${error.color}-50 dark:bg-${error.color}-950/20 border border-${error.color}-200 dark:border-${error.color}-800`}>
                    <h4 className={`font-semibold text-${error.color}-700 dark:text-${error.color}-400 mb-1`}>{error.type}</h4>
                    <p className={`text-sm text-${error.color}-600 dark:text-${error.color}-300`}>{error.desc}</p>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-bold mb-3 text-gray-900 dark:text-white flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Example Error Response
                </h4>
                <CodeBlock language="json">{`{
  "content": [
    {
      "type": "text",
      "text": "Error executing tool search_components: Component category 'invalid' not found"
    }
  ],
  "isError": true
}`}</CodeBlock>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Getting Started */}
      <section>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mr-4">
              <ArrowRightIcon className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Getting Started
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-green-200 dark:border-green-800 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-1"></div>
              <div className="p-6">
                <h3 className="font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                  <ArrowRightIcon className="h-5 w-5 mr-2 text-green-600" />
                  First Steps
                </h3>
                <div className="space-y-4">
                  {[
                    'Install and configure the MCP server',
                    'Test the connection with list_all_components',
                    'Search for components with search_components',
                    'Generate your first component with generate_component'
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-blue-200 dark:border-blue-800 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1"></div>
              <div className="p-6">
                <h3 className="font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                  <ClipboardDocumentIcon className="h-5 w-5 mr-2 text-blue-600" />
                  Best Practices
                </h3>
                <div className="space-y-4">
                  {[
                    'Always validate parameters before making tool calls',
                    'Use specific queries for better search results',
                    'Check component details before generating code',
                    'Apply themes after generating components'
                  ].map((practice, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{practice}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
