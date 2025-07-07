import type { Meta, StoryObj } from '@storybook/react';
import { Button, Card, Badge, Alert, Grid, Avatar } from '../lib';

// Component to demonstrate LLM integration
const LLMIntegrationDemo = () => {
    // Detect environment and set correct base URL
    const getBaseUrl = () => {
        if (typeof window === 'undefined') return '';

        // Check for GitHub Pages environment
        const isGitHubPages = window.location.hostname === 'akitectio.github.io' || window.location.hostname === 'aki-ui.akitect.io';
        const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

        if (isGitHubPages) {
            // Handle both GitHub Pages URL patterns
            if (window.location.hostname === 'aki-ui.akitect.io') {
                return 'https://aki-ui.akitect.io';
            } else {
                return 'https://akitectio.github.io/aki-ui';
            }
        } else if (isLocalhost) {
            return window.location.origin;
        } else {
            // Fallback for other environments
            return window.location.origin;
        }
    };

    const baseUrl = getBaseUrl();
    const llmsUrl = `${baseUrl}/llms.txt`;
    const llmsFullUrl = `${baseUrl}/llms-full.txt`;

    const handleCopyLLMsText = () => {
        navigator.clipboard.writeText(llmsUrl);
        alert('LLMs.txt URL copied to clipboard!');
    };

    const handleCopyFullText = () => {
        navigator.clipboard.writeText(llmsFullUrl);
        alert('LLMs-full.txt URL copied to clipboard!');
    };

    const aiTools = [
        { name: 'GitHub Copilot', status: 'Supported', badge: 'success' },
        { name: 'Cursor IDE', status: 'Supported', badge: 'success' },
        { name: 'Windsurf', status: 'Supported', badge: 'success' },
        { name: 'Claude Dev', status: 'Supported', badge: 'success' },
        { name: 'Codeium', status: 'Supported', badge: 'success' },
        { name: 'Tabnine', status: 'Supported', badge: 'success' },
        { name: 'ChatGPT', status: 'Supported', badge: 'success' },
        { name: 'MCP Server', status: 'Available Now', badge: 'success' },
    ];

    const promptTemplates = [
        {
            title: 'Dashboard Creation',
            prompt: 'Create an admin dashboard using @akitectio/aki-ui with sidebar navigation, stats cards, data table, and charts. Include dark mode support.',
            category: 'Layout'
        },
        {
            title: 'Form Generation',
            prompt: 'Build a user registration form using Aki UI FormControl, validation, and proper accessibility attributes.',
            category: 'Forms'
        },
        {
            title: 'Landing Page',
            prompt: 'Design a modern landing page with Aki UI featuring hero section, feature cards, testimonials, and contact form.',
            category: 'Pages'
        },
        {
            title: 'E-commerce Interface',
            prompt: 'Create a product catalog page with Aki UI cards, filters, pagination, and shopping cart functionality.',
            category: 'E-commerce'
        }
    ];

    return (
        <div className="space-y-8 p-6">
            {/* Debug Info */}
            <Card className="bg-blue-50 border-blue-200">
                <Card.Body>
                    <h3 className="font-semibold text-blue-900 mb-2">🔍 Environment Debug</h3>
                    <div className="text-sm text-blue-800 space-y-1">
                        <p><strong>Hostname:</strong> {typeof window !== 'undefined' ? window.location.hostname : 'N/A'}</p>
                        <p><strong>Is GitHub Pages:</strong> {typeof window !== 'undefined' && window.location.hostname === 'akitectio.github.io' ? 'true' : 'false'}</p>
                        <p><strong>Is Localhost:</strong> {typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') ? 'true' : 'false'}</p>
                        <p><strong>Computed Base URL:</strong> {baseUrl}</p>
                        <p><strong>LLMs URL:</strong> {llmsUrl}</p>
                        <p><strong>Full URL:</strong> {llmsFullUrl}</p>
                    </div>
                </Card.Body>
            </Card>

            {/* Introduction */}
            <div className="text-center space-y-4">
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Aki UI is designed to work seamlessly with AI tools and LLMs. Generate beautiful UIs faster and more efficiently!
                </p>
            </div>

            {/* LLMs.txt Files */}
            <Card>
                <Card.Header>
                    <h2 className="text-xl font-semibold">📄 LLMs.txt Files</h2>
                    <p className="text-gray-600 text-sm">
                        Structured data files specifically designed for AI systems
                    </p>
                </Card.Header>
                <Card.Body>
                    <Grid cols={{ base: 1, md: 2 }} gap={4}>
                        <Card className="border">
                            <Card.Body className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold">llms.txt</h3>
                                    <Badge variant="primary">Quick Overview</Badge>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Streamlined overview for quick AI understanding. Perfect for context windows.
                                </p>
                                <div className="space-y-2">
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        className="w-full"
                                        onClick={handleCopyLLMsText}
                                    >
                                        📋 Copy llms.txt URL
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        className="w-full"
                                        onClick={() => window.open(llmsUrl, '_blank')}
                                    >
                                        🔗 View llms.txt
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className="border">
                            <Card.Body className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold">llms-full.txt</h3>
                                    <Badge variant="success">Complete Docs</Badge>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Complete documentation in single file. Comprehensive for detailed AI training.
                                </p>
                                <div className="space-y-2">
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        className="w-full"
                                        onClick={handleCopyFullText}
                                    >
                                        📋 Copy llms-full.txt URL
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        className="w-full"
                                        onClick={() => window.open(llmsFullUrl, '_blank')}
                                    >
                                        🔗 View llms-full.txt
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Grid>
                </Card.Body>
            </Card>

            {/* Supported AI Tools */}
            <Card>
                <Card.Header>
                    <h2 className="text-xl font-semibold">🚀 Supported AI Tools</h2>
                    <p className="text-gray-600 text-sm">
                        Aki UI works perfectly with popular AI coding assistants
                    </p>
                </Card.Header>
                <Card.Body>
                    <Grid cols={{ base: 1, sm: 2, lg: 3 }} gap={4}>
                        {aiTools.map((tool, index) => (
                            <Card key={index} className="border">
                                <Card.Body className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <Avatar size="sm" fallback="AI" />
                                        <span className="font-medium">{tool.name}</span>
                                    </div>
                                    <Badge variant={tool.badge as any}>{tool.status}</Badge>
                                </Card.Body>
                            </Card>
                        ))}
                    </Grid>
                </Card.Body>
            </Card>

            {/* AI Prompt Templates */}
            <Card>
                <Card.Header>
                    <h2 className="text-xl font-semibold">💡 AI Prompt Templates</h2>
                    <p className="text-gray-600 text-sm">
                        Proven prompt templates for generating UI with Aki UI
                    </p>
                </Card.Header>
                <Card.Body>
                    <div className="space-y-4">
                        {promptTemplates.map((template, index) => (
                            <Card key={index} className="border">
                                <Card.Body className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-semibold">{template.title}</h3>
                                        <Badge variant="secondary">{template.category}</Badge>
                                    </div>
                                    <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                                        "{template.prompt}"
                                    </p>
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        onClick={() => navigator.clipboard.writeText(template.prompt)}
                                    >
                                        📋 Copy Prompt
                                    </Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Card.Body>
            </Card>

            {/* Usage Examples */}
            <Card>
                <Card.Header>
                    <h2 className="text-xl font-semibold">🔧 How to Use with AI</h2>
                </Card.Header>
                <Card.Body>
                    <div className="space-y-4">
                        <Alert variant="info">
                            <div>
                                <h4 className="font-semibold">Step 1: Provide Context</h4>
                                <p>Copy the llms.txt URL and provide it to your AI assistant:</p>
                                <code className="block mt-2 p-2 bg-gray-100 rounded text-sm">
                                    "Please review the Aki UI documentation at {llmsUrl}"
                                </code>
                            </div>
                        </Alert>

                        <Alert variant="success">
                            <div>
                                <h4 className="font-semibold">Step 2: Use Prompt Templates</h4>
                                <p>Use our proven prompt templates for better results:</p>
                                <code className="block mt-2 p-2 bg-gray-100 rounded text-sm">
                                    "Create a dashboard using @akitectio/aki-ui with sidebar navigation and data table"
                                </code>
                            </div>
                        </Alert>

                        <Alert variant="warning">
                            <div>
                                <h4 className="font-semibold">Step 3: Iterate and Refine</h4>
                                <p>Refine the generated code with specific Aki UI patterns:</p>
                                <code className="block mt-2 p-2 bg-gray-100 rounded text-sm">
                                    "Use Aki UI's Card.Header and Card.Body structure for better organization"
                                </code>
                            </div>
                        </Alert>

                        <Alert variant="success">
                            <div>
                                <h4 className="font-semibold">🔌 MCP Server Integration ✅</h4>
                                <p>Connect AI assistants directly to Aki UI components in real-time:</p>
                                <code className="block mt-2 p-2 bg-gray-100 rounded text-sm">
                                    "AI assistants can now query components, validate code, and generate optimized solutions dynamically"
                                </code>

                                <div className="mt-3 p-3 bg-green-50 rounded border-l-4 border-green-500">
                                    <p className="text-sm text-green-800 font-medium">📦 Installation:</p>
                                    <div className="mt-2 text-xs text-green-700">
                                        <code>npm install -g @akitectio/aki-ui-mcp-server</code>
                                    </div>
                                </div>

                                <div className="mt-3 p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                                    <p className="text-sm text-blue-800 font-medium">⚙️ Claude Desktop Setup:</p>
                                    <div className="mt-2 text-xs text-blue-700 space-y-1">
                                        <p>1. <code>npm run mcp:install</code> - Install MCP server dependencies</p>
                                        <p>2. <code>npm run mcp:build</code> - Build the MCP server</p>
                                        <p>3. Add to Claude Desktop config or other MCP clients</p>
                                        <p>4. Enjoy real-time AI interactions with Aki UI!</p>
                                    </div>
                                </div>
                            </div>
                        </Alert>
                    </div>
                </Card.Body>
            </Card>

            {/* Future Features */}
            <Card>
                <Card.Header>
                    <h2 className="text-xl font-semibold">🔮 Future AI Features</h2>
                    <Badge variant="warning">Roadmap</Badge>
                </Card.Header>
                <Card.Body>
                    <Grid cols={{ base: 1, md: 2 }} gap={4}>
                        <div className="space-y-3">
                            <h3 className="font-semibold text-purple-600">🤖 Aki UI GPT (Coming Soon)</h3>
                            <ul className="text-sm space-y-1 text-gray-600">
                                <li>• Custom ChatGPT model trained on Aki UI</li>
                                <li>• Component generator from natural language</li>
                                <li>• AI-powered theme generation</li>
                                <li>• Smart layout suggestions</li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <h3 className="font-semibold text-green-600">🎨 AI Design Tools (Planned)</h3>
                            <ul className="text-sm space-y-1 text-gray-600">
                                <li>• Figma to Aki UI code conversion</li>
                                <li>• Screenshot to UI generation</li>
                                <li>• AI-powered code optimization</li>
                                <li>• Context-aware component suggestions</li>
                            </ul>
                        </div>
                    </Grid>

                    {/* New MCP Section */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                        <div className="flex items-center space-x-2 mb-3">
                            <span className="text-xl">🔌</span>
                            <h3 className="font-semibold text-blue-800">Model Context Protocol (MCP) Server</h3>
                            <Badge variant="primary">In Development</Badge>
                        </div>
                        <p className="text-sm text-blue-700 mb-3">
                            Interactive AI tool that provides real-time access to Aki UI components and documentation
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-medium text-blue-800 mb-2">🛠 Core Features:</h4>
                                <ul className="text-xs text-blue-600 space-y-1">
                                    <li>• Real-time component search</li>
                                    <li>• Code generation & validation</li>
                                    <li>• Theme customization tools</li>
                                    <li>• Interactive documentation</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium text-blue-800 mb-2">🎯 Benefits:</h4>
                                <ul className="text-xs text-blue-600 space-y-1">
                                    <li>• Dynamic AI interactions</li>
                                    <li>• Faster development workflow</li>
                                    <li>• Intelligent code suggestions</li>
                                    <li>• Enhanced AI assistant capabilities</li>
                                </ul>
                            </div>
                        </div>
                        <Alert variant="success" className="mt-4">
                            <div>
                                <h4 className="font-semibold text-sm">✅ MCP Server Available Now</h4>
                                <p className="text-xs">The Aki UI MCP Server is now available! AI assistants can directly interact with our component library, providing dynamic code generation and real-time documentation access. Install with: <code>npm install -g @akitectio/aki-ui-mcp-server</code></p>
                            </div>
                        </Alert>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

const meta: Meta = {
    title: 'Documentation/AI & LLM Integration',
    component: LLMIntegrationDemo,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
# AI & LLM Integration Overview

This component demonstrates how Aki UI integrates with AI tools and provides resources for AI-assisted development.

## Documentation Resources

The component below showcases access to structured documentation files and provides examples of how to use Aki UI with various AI assistants for rapid UI development.

**Available Resources:**
- Interactive llms.txt file viewer
- Copy-to-clipboard functionality for AI prompts  
- Debug information for different environments
- Best practices for AI-assisted development

Use the interactive demo below to explore how Aki UI works with AI tools.
        `,
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof LLMIntegrationDemo>;

// Default story
export const Default: Story = {
    render: () => <LLMIntegrationDemo />,
};

// Interactive demo
export const InteractiveDemo: Story = {
    render: () => (
        <div className="space-y-6">
            <Card>
                <Card.Header>
                    <h2 className="text-xl font-semibold">🤖 Try AI Generation</h2>
                    <p className="text-gray-600 text-sm">
                        Copy the llms.txt content and try generating components with your favorite AI tool
                    </p>
                </Card.Header>
                <Card.Body>
                    <Alert variant="info">
                        <div>
                            <h4 className="font-semibold">Quick Start</h4>
                            <p>Copy this prompt and paste it into ChatGPT, Claude, or your AI assistant:</p>
                            <div className="mt-3 p-3 bg-gray-50 rounded border">
                                <code className="text-sm">
                                    Please review the Aki UI documentation at https://aki-ui.akitect.io/llms.txt and then create a modern dashboard with cards, a data table, and navigation using these components.
                                </code>
                            </div>
                            <Button
                                variant="primary"
                                size="sm"
                                className="mt-3"
                                onClick={() => {
                                    const prompt = "Please review the Aki UI documentation at https://aki-ui.akitect.io/llms.txt and then create a modern dashboard with cards, a data table, and navigation using these components.";
                                    navigator.clipboard.writeText(prompt);
                                    alert('Prompt copied to clipboard!');
                                }}
                            >
                                📋 Copy Prompt
                            </Button>
                        </div>
                    </Alert>
                </Card.Body>
            </Card>
            <LLMIntegrationDemo />
        </div>
    ),
};
