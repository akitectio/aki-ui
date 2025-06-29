import React, { useState } from 'react';
import {
    Button,
    Card,
    Badge,
    Avatar,
    Input,
    Grid,
    VStack
} from '../lib/components';
import { useRouter } from '../components/Router';
import { VERSION } from '../lib/version';
import {
    EyeIcon,
    CodeBracketIcon,
    ClipboardDocumentIcon,
    CheckIcon
} from '@heroicons/react/24/outline';

const TemplatesPage: React.FC = () => {
    const { navigate } = useRouter();
    const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const copyToClipboard = async (code: string, templateName: string) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopiedCode(templateName);
            setTimeout(() => setCopiedCode(null), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    const templates = [
        {
            id: 'admin-dashboard',
            name: 'Admin Dashboard',
            description: 'Complete admin dashboard with user management, analytics, and settings',
            category: 'Dashboard',
            difficulty: 'Advanced',
            components: ['DataTable', 'Card', 'Grid', 'Button', 'Avatar', 'Badge', 'Alert', 'Switch'],
            preview: (
                <div className="bg-gray-100 p-4 rounded-lg min-h-[300px]">
                    <div className="bg-indigo-600 text-white p-3 rounded-t-lg mb-4">
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold">Admin Dashboard</h3>
                            <Avatar fallback="AD" size="sm" />
                        </div>
                    </div>
                    <Grid cols={{ base: 1, md: 2, lg: 4 }} gap={4} className="mb-4">
                        <Card className="p-4 text-center">
                            <div className="text-2xl font-bold text-indigo-600">1,234</div>
                            <div className="text-sm text-gray-600">Users</div>
                        </Card>
                        <Card className="p-4 text-center">
                            <div className="text-2xl font-bold text-green-600">$45,678</div>
                            <div className="text-sm text-gray-600">Revenue</div>
                        </Card>
                        <Card className="p-4 text-center">
                            <div className="text-2xl font-bold text-yellow-600">567</div>
                            <div className="text-sm text-gray-600">Orders</div>
                        </Card>
                        <Card className="p-4 text-center">
                            <div className="text-2xl font-bold text-red-600">23</div>
                            <div className="text-sm text-gray-600">Issues</div>
                        </Card>
                    </Grid>
                    <Card className="p-4">
                        <h4 className="font-medium mb-3">Recent Activity</h4>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-sm">New user registered</span>
                                <Badge variant="success">New</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Order #1234 completed</span>
                                <Badge variant="info">Complete</Badge>
                            </div>
                        </div>
                    </Card>
                </div>
            ),
            code: `import { Card, Grid, GridItem, Avatar, Badge, DataTable, Button } from '@akitectio/aki-ui';

function AdminDashboard() {
  const stats = [
    { label: 'Users', value: '1,234', color: 'text-indigo-600' },
    { label: 'Revenue', value: '$45,678', color: 'text-green-600' },
    { label: 'Orders', value: '567', color: 'text-yellow-600' },
    { label: 'Issues', value: '23', color: 'text-red-600' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-indigo-600 text-white p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <Avatar fallback="AD" size="lg" />
        </div>
      </div>

      {/* Stats Grid */}
      <Grid cols={{ base: 1, md: 2, lg: 4 }} gap={6}>
        {stats.map((stat, index) => (
          <GridItem key={index}>
            <Card className="p-6 text-center">
              <div className={\`text-3xl font-bold \${stat.color}\`}>
                {stat.value}
              </div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </Card>
          </GridItem>
        ))}
      </Grid>

      {/* Recent Activity */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span>New user registered</span>
            <Badge variant="success">New</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span>Order #1234 completed</span>
            <Badge variant="info">Complete</Badge>
          </div>
        </div>
      </Card>
    </div>
  );
}`
        },
        {
            id: 'login-form',
            name: 'Login Form',
            description: 'Modern login form with validation and social login options',
            category: 'Form',
            difficulty: 'Beginner',
            components: ['Card', 'Input', 'Button', 'Alert', 'VStack'],
            preview: (
                <div className="bg-gray-100 p-4 rounded-lg min-h-[300px] flex items-center justify-center">
                    <Card className="w-full max-w-md p-6">
                        <h3 className="text-xl font-bold text-center mb-6">Sign In</h3>
                        <VStack spacing={4}>
                            <Input placeholder="Email" type="email" />
                            <Input placeholder="Password" type="password" />
                            <Button variant="primary" className="w-full">
                                Sign In
                            </Button>
                            <div className="text-center">
                                <span className="text-sm text-gray-600">
                                    Don't have an account?{' '}
                                    <Button variant="link" size="sm">Sign up</Button>
                                </span>
                            </div>
                        </VStack>
                    </Card>
                </div>
            ),
            code: `import { Card, Input, Button, VStack, Alert } from '@akitectio/aki-ui';
import { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Sign In</h2>
        
        {error && (
          <Alert variant="danger" className="mb-6">
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <VStack spacing={6}>
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
            />
            
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
              required
            />

            <Button
              type="submit"
              variant="primary"
              fullWidth
              size="lg"
            >
              Sign In
            </Button>
          </VStack>
        </form>

        <div className="text-center mt-6">
          <span className="text-gray-600">
            Don't have an account?{' '}
            <Button variant="link">Sign up</Button>
          </span>
        </div>
      </Card>
    </div>
  );
}`
        },
        {
            id: 'pricing-table',
            name: 'Pricing Table',
            description: 'Responsive pricing table with feature comparison',
            category: 'Marketing',
            difficulty: 'Intermediate',
            components: ['Card', 'Button', 'Badge', 'Grid', 'VStack'],
            preview: (
                <div className="bg-gray-100 p-4 rounded-lg min-h-[300px]">
                    <Grid cols={{ base: 1, md: 3 }} gap={4}>
                        <Card className="p-6 text-center">
                            <Badge variant="secondary" className="mb-4">Basic</Badge>
                            <div className="text-3xl font-bold mb-2">$9</div>
                            <div className="text-gray-600 mb-4">per month</div>
                            <VStack spacing={2} className="mb-6">
                                <div className="text-sm">✓ 5 Projects</div>
                                <div className="text-sm">✓ 10GB Storage</div>
                                <div className="text-sm">✓ Email Support</div>
                            </VStack>
                            <Button variant="outline-primary" className="w-full">Choose Plan</Button>
                        </Card>
                        <Card className="p-6 text-center border-2 border-indigo-500">
                            <Badge variant="primary" className="mb-4">Pro</Badge>
                            <div className="text-3xl font-bold mb-2">$29</div>
                            <div className="text-gray-600 mb-4">per month</div>
                            <VStack spacing={2} className="mb-6">
                                <div className="text-sm">✓ 50 Projects</div>
                                <div className="text-sm">✓ 100GB Storage</div>
                                <div className="text-sm">✓ Priority Support</div>
                            </VStack>
                            <Button variant="primary" className="w-full">Choose Plan</Button>
                        </Card>
                        <Card className="p-6 text-center">
                            <Badge variant="warning" className="mb-4">Enterprise</Badge>
                            <div className="text-3xl font-bold mb-2">$99</div>
                            <div className="text-gray-600 mb-4">per month</div>
                            <VStack spacing={2} className="mb-6">
                                <div className="text-sm">✓ Unlimited Projects</div>
                                <div className="text-sm">✓ 1TB Storage</div>
                                <div className="text-sm">✓ 24/7 Support</div>
                            </VStack>
                            <Button variant="outline-primary" className="w-full">Contact Sales</Button>
                        </Card>
                    </Grid>
                </div>
            ),
            code: `import { Card, Button, Badge, Grid, GridItem, VStack } from '@akitectio/aki-ui';

function PricingTable() {
  const plans = [
    {
      name: 'Basic',
      price: '$9',
      variant: 'secondary',
      features: ['5 Projects', '10GB Storage', 'Email Support'],
      buttonText: 'Choose Plan',
      buttonVariant: 'outline-primary',
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$29',
      variant: 'primary',
      features: ['50 Projects', '100GB Storage', 'Priority Support'],
      buttonText: 'Choose Plan',
      buttonVariant: 'primary',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      variant: 'warning',
      features: ['Unlimited Projects', '1TB Storage', '24/7 Support'],
      buttonText: 'Contact Sales',
      buttonVariant: 'outline-primary',
      highlighted: false
    }
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Select the perfect plan for your needs. Upgrade or downgrade at any time.
        </p>
      </div>

      <Grid cols={{ base: 1, md: 3 }} gap={8} className="max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <GridItem key={index}>
            <Card 
              className={\`p-8 text-center \${plan.highlighted ? 'border-2 border-indigo-500 shadow-lg' : ''}\`}
            >
              <Badge variant={plan.variant} className="mb-6">
                {plan.name}
              </Badge>
              
              <div className="text-4xl font-bold mb-2">{plan.price}</div>
              <div className="text-gray-600 mb-8">per month</div>
              
              <VStack spacing={3} className="mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </VStack>
              
              <Button
                variant={plan.buttonVariant}
                fullWidth
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}`
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <Button
                                variant="outline-secondary"
                                size="sm"
                                onClick={() => navigate('/')}
                                className="mr-4"
                            >
                                ← Home
                            </Button>
                            <h1 className="text-xl font-bold text-gray-900">Templates & Examples</h1>
                            <Badge variant="primary">v{VERSION}</Badge>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Ready-to-Use Templates
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Speed up your development with these pre-built templates and examples using Aki UI components.
                        Copy the code and customize as needed for your projects.
                    </p>
                </div>

                {/* Templates Grid */}
                <div className="space-y-12">
                    {templates.map((template) => (
                        <Card key={template.id} className="overflow-hidden">
                            <div className="p-6">
                                {/* Template Header */}
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                                    <div>
                                        <div className="flex items-center space-x-3 mb-2">
                                            <h3 className="text-2xl font-semibold text-gray-900">
                                                {template.name}
                                            </h3>
                                            <Badge variant="primary">{template.category}</Badge>
                                            <Badge
                                                variant={
                                                    template.difficulty === 'Beginner' ? 'success' :
                                                        template.difficulty === 'Intermediate' ? 'warning' : 'danger'
                                                }
                                            >
                                                {template.difficulty}
                                            </Badge>
                                        </div>
                                        <p className="text-gray-600 mb-3">{template.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {template.components.map((component) => (
                                                <Badge key={component} variant="secondary" className="text-xs">
                                                    {component}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex space-x-3 mt-4 lg:mt-0">
                                        <Button
                                            variant="outline-secondary"
                                            size="sm"
                                            onClick={() => setSelectedTemplate(
                                                selectedTemplate === template.id ? null : template.id
                                            )}
                                        >
                                            <CodeBracketIcon className="h-4 w-4 mr-1" />
                                            {selectedTemplate === template.id ? 'Hide' : 'Show'} Code
                                        </Button>
                                        <Button
                                            variant="outline-secondary"
                                            size="sm"
                                            onClick={() => copyToClipboard(template.code, template.id)}
                                        >
                                            {copiedCode === template.id ? (
                                                <CheckIcon className="h-4 w-4 mr-1" />
                                            ) : (
                                                <ClipboardDocumentIcon className="h-4 w-4 mr-1" />
                                            )}
                                            {copiedCode === template.id ? 'Copied!' : 'Copy Code'}
                                        </Button>
                                    </div>
                                </div>

                                {/* Preview */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                                        <EyeIcon className="h-4 w-4 mr-1" />
                                        Preview
                                    </h4>
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        {template.preview}
                                    </div>
                                </div>

                                {/* Code */}
                                {selectedTemplate === template.id && (
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                                            <CodeBracketIcon className="h-4 w-4 mr-1" />
                                            Code
                                        </h4>
                                        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                            <pre className="text-gray-100 text-sm">
                                                <code>{template.code}</code>
                                            </pre>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16 py-12 bg-white rounded-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Need More Templates?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        We're continuously adding new templates and examples.
                        Check back regularly or contribute your own templates to the community.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={() => navigate('/docs')}
                        >
                            Browse Components
                        </Button>
                        <Button
                            variant="outline-secondary"
                            size="lg"
                            onClick={() => window.open('https://github.com/akitectio/aki-ui', '_blank')}
                        >
                            Contribute on GitHub
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplatesPage;
