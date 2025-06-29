'use client'

import Link from 'next/link'
import { Button, Card, Badge, Alert } from '@akitectio/aki-ui'
import { PageHeader } from '@/components/PageHeader'
import { 
  SparklesIcon,
  CommandLineIcon,
  CpuChipIcon,
  CodeBracketIcon,
  LightBulbIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

const aiTools = [
  {
    name: 'GitHub Copilot',
    category: 'Code Completion',
    logo: '🐙',
    status: 'Fully Supported',
    description: 'AI-powered code completion and chat assistance directly in your IDE.',
    features: [
      'Real-time code suggestions',
      'Chat-based component generation',
      'Context-aware completions',
      'Multi-language support'
    ],
    setup: 'Add llms.txt URL to chat context',
    docs: '/docs/llm/setup#github-copilot'
  },
  {
    name: 'Cursor IDE',
    category: 'AI-First Editor',
    logo: '🔮',
    status: 'Fully Supported',
    description: 'AI-native code editor with built-in AI assistance and chat.',
    features: [
      'AI chat integration',
      'Codebase understanding',
      'Intelligent refactoring',
      'Custom rules support'
    ],
    setup: 'Configure .cursorrules file',
    docs: '/docs/llm/setup#cursor'
  },
  {
    name: 'Claude (Anthropic)',
    category: 'AI Assistant',
    logo: '🤖',
    status: 'Fully Supported',
    description: 'Advanced AI assistant with excellent code understanding and generation.',
    features: [
      'MCP integration',
      'Large context window',
      'Code analysis',
      'Documentation parsing'
    ],
    setup: 'Use MCP server or share llms.txt',
    docs: '/docs/llm/setup#claude'
  },
  {
    name: 'ChatGPT',
    category: 'AI Assistant',
    logo: '💬',
    status: 'Supported',
    description: 'Popular AI assistant with code generation capabilities.',
    features: [
      'Custom instructions',
      'Code generation',
      'Problem solving',
      'Documentation help'
    ],
    setup: 'Share llms.txt URL in conversations',
    docs: '/docs/llm/setup#other'
  },
  {
    name: 'Codeium',
    category: 'Code Completion',
    logo: '⚡',
    status: 'Supported',
    description: 'Free AI-powered code completion and chat.',
    features: [
      'Code autocompletion',
      'AI chat',
      'Multiple IDE support',
      'Team features'
    ],
    setup: 'Configure in IDE settings',
    docs: '/docs/llm/setup#other'
  },
  {
    name: 'Tabnine',
    category: 'Code Completion',
    logo: '🎯',
    status: 'Supported',
    description: 'AI code completion with privacy-focused options.',
    features: [
      'Local and cloud models',
      'Team training',
      'Privacy controls',
      'Enterprise features'
    ],
    setup: 'Add to team documentation',
    docs: '/docs/llm/setup#other'
  },
  {
    name: 'Continue.dev',
    category: 'Open Source',
    logo: '🔄',
    status: 'Beta Support',
    description: 'Open-source AI code assistant with MCP support.',
    features: [
      'MCP integration',
      'Local model support',
      'Customizable',
      'Privacy-focused'
    ],
    setup: 'Configure MCP server',
    docs: '/docs/mcp/installation'
  },
  {
    name: 'Windsurf Editor',
    category: 'AI-First Editor',
    logo: '🏄',
    status: 'Beta Support',
    description: 'AI-powered editor with collaborative features.',
    features: [
      'AI collaboration',
      'Real-time suggestions',
      'Team features',
      'Multi-model support'
    ],
    setup: 'Add llms.txt to project',
    docs: '/docs/llm/setup#other'
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Fully Supported':
      return 'success'
    case 'Supported':
      return 'warning'
    case 'Beta Support':
      return 'info'
    default:
      return 'secondary'
  }
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Code Completion':
      return CodeBracketIcon
    case 'AI-First Editor':
      return CpuChipIcon
    case 'AI Assistant':
      return SparklesIcon
    case 'Open Source':
      return LightBulbIcon
    default:
      return CommandLineIcon
  }
}

export default function LLMAIToolsPage() {
  const categories = [...new Set(aiTools.map(tool => tool.category))]

  return (
    <PageHeader
      title="Supported AI Tools"
      description="Complete list of AI tools and code assistants that work seamlessly with Aki UI components."
    >
      <div className="space-y-8">
        {/* Overview */}
        <section>
          <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
            <div className="flex items-start space-x-4">
              <SparklesIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-3 text-blue-900 dark:text-blue-100">
                  AI-Powered Development with Aki UI
                </h2>
                <p className="text-blue-800 dark:text-blue-200 mb-4">
                  Aki UI is designed to work seamlessly with modern AI tools and code assistants. 
                  Our llms.txt standard and MCP integration provide optimal context for AI-powered development.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-blue-300 text-blue-700 dark:border-blue-600 dark:text-blue-300">
                    {aiTools.length} AI Tools Supported
                  </Badge>
                  <Badge variant="outline" className="border-purple-300 text-purple-700 dark:border-purple-600 dark:text-purple-300">
                    LLMs.txt Standard
                  </Badge>
                  <Badge variant="outline" className="border-green-300 text-green-700 dark:border-green-600 dark:text-green-300">
                    MCP Integration
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Quick Setup Links */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Quick Setup</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/docs/llm/setup">
              <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer group border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800">
                <div className="flex items-center space-x-3 mb-2">
                  <SparklesIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    LLM Setup Guide
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Step-by-step setup for each AI tool
                </p>
              </Card>
            </Link>

            <Link href="/docs/mcp/installation">
              <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer group border-2 border-transparent hover:border-purple-200 dark:hover:border-purple-800">
                <div className="flex items-center space-x-3 mb-2">
                  <CommandLineIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <h3 className="font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    MCP Installation
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Advanced AI integration with MCP
                </p>
              </Card>
            </Link>

            <Link href="/docs/llm/examples">
              <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer group border-2 border-transparent hover:border-green-200 dark:hover:border-green-800">
                <div className="flex items-center space-x-3 mb-2">
                  <LightBulbIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <h3 className="font-semibold group-hover:text-green-600 dark:group-hover:text-green-400">
                    Usage Examples
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Real-world examples and prompts
                </p>
              </Card>
            </Link>
          </div>
        </section>

        {/* AI Tools by Category */}
        {categories.map(category => {
          const categoryTools = aiTools.filter(tool => tool.category === category)
          const CategoryIcon = getCategoryIcon(category)
          
          return (
            <section key={category}>
              <div className="flex items-center mb-6">
                <CategoryIcon className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold">{category}</h2>
                <Badge variant="outline" className="ml-3">
                  {categoryTools.length} tools
                </Badge>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {categoryTools.map(tool => (
                  <Card key={tool.name} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{tool.logo}</span>
                        <div>
                          <h3 className="text-lg font-semibold">{tool.name}</h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {tool.category}
                          </p>
                        </div>
                      </div>
                      <Badge variant={getStatusColor(tool.status) as any}>
                        {tool.status}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {tool.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2 text-sm text-gray-700 dark:text-gray-300">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {tool.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircleIcon className="w-3 h-3 mr-2 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Setup: {tool.setup}
                          </p>
                        </div>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={tool.docs}>
                            View Guide
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )
        })}

        {/* Integration Tips */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Integration Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-3 text-green-800 dark:text-green-200">
                    Best Practices
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• Always provide llms.txt URL for context</li>
                    <li>• Use specific component names in prompts</li>
                    <li>• Request TypeScript for better type safety</li>
                    <li>• Ask for accessibility best practices</li>
                    <li>• Mention responsive design requirements</li>
                    <li>• Include dark mode considerations</li>
                  </ul>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start space-x-3">
                <ExclamationTriangleIcon className="w-6 h-6 text-orange-600 dark:text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-3 text-orange-800 dark:text-orange-200">
                    Common Issues
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• AI using outdated component APIs</li>
                    <li>• Missing import statements</li>
                    <li>• Incorrect prop types or names</li>
                    <li>• Not following Aki UI patterns</li>
                    <li>• Forgetting responsive utilities</li>
                    <li>• Inconsistent styling approaches</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Get Started */}
        <section>
          <Card className="p-8 text-center bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Choose your preferred AI tool and follow our setup guide to start building 
              amazing UIs with AI assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/docs/llm/setup">
                  <SparklesIcon className="w-4 h-4 mr-2" />
                  Setup Your AI Tool
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/docs/llm/examples">
                  <LightBulbIcon className="w-4 h-4 mr-2" />
                  See Examples
                </Link>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </PageHeader>
  )
}
