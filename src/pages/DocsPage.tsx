import React, { useState } from 'react';
import {
    Button,
    Card,
    Badge,
    Avatar,
    DataTable,
    Input,
    Select,
    Switch,
    Alert,
    Breadcrumb,
    Grid,
    GridItem,
    HStack,
    VStack,
    Checkbox,
    Radio,
    RadioGroup,
    Spinner
} from '../lib/components';
import { useRouter } from '../components/Router';
import { VERSION } from '../lib/version';
import {
    DocumentTextIcon,
    CodeBracketIcon,
    EyeIcon,
    ClipboardDocumentIcon,
    CheckIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    HomeIcon,
    CubeIcon,
    Cog6ToothIcon,
    PaintBrushIcon,
    SparklesIcon
} from '@heroicons/react/24/outline';

interface ComponentExample {
    name: string;
    description: string;
    code: string;
    component: React.ReactNode;
    props?: Record<string, any>;
}

interface DocSection {
    id: string;
    title: string;
    description: string;
    examples: ComponentExample[];
}

const DocsPage: React.FC = () => {
    const { navigate } = useRouter();
    const [activeSection, setActiveSection] = useState('getting-started');
    const [showCode, setShowCode] = useState<string | null>(null);
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const copyToClipboard = async (code: string, exampleName: string) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopiedCode(exampleName);
            setTimeout(() => setCopiedCode(null), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    const sections: DocSection[] = [
        {
            id: 'getting-started',
            title: 'Getting Started',
            description: 'Quick start guide to using Aki UI components in your project.',
            examples: [
                {
                    name: 'Installation',
                    description: 'Install Aki UI using npm or yarn',
                    code: `npm install @akitectio/aki-ui
# or
yarn add @akitectio/aki-ui`,
                    component: (
                        <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
                            npm install @akitectio/aki-ui
                        </div>
                    )
                },
                {
                    name: 'Basic Usage',
                    description: 'Import and use Aki UI components',
                    code: `import { Button, Card } from '@akitectio/aki-ui';

function App() {
  return (
    <Card className="p-6">
      <Button variant="primary">Hello Aki UI</Button>
    </Card>
  );
}`,
                    component: (
                        <Card className="p-6">
                            <Button variant="primary">Hello Aki UI</Button>
                        </Card>
                    )
                }
            ]
        },
        {
            id: 'buttons',
            title: 'Buttons',
            description: 'Interactive button components with various styles and states.',
            examples: [
                {
                    name: 'Button Variants',
                    description: 'Different visual styles for buttons',
                    code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>
<Button variant="warning">Warning</Button>
<Button variant="info">Info</Button>`,
                    component: (
                        <HStack spacing={3} wrap>
                            <Button variant="primary">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="success">Success</Button>
                            <Button variant="danger">Danger</Button>
                            <Button variant="warning">Warning</Button>
                            <Button variant="info">Info</Button>
                        </HStack>
                    )
                },
                {
                    name: 'Button Sizes',
                    description: 'Different sizes for buttons',
                    code: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,
                    component: (
                        <HStack spacing={3} align="center">
                            <Button size="sm">Small</Button>
                            <Button size="md">Medium</Button>
                            <Button size="lg">Large</Button>
                        </HStack>
                    )
                },
                {
                    name: 'Outline Buttons',
                    description: 'Outline style buttons',
                    code: `<Button variant="outline-primary">Outline Primary</Button>
<Button variant="outline-secondary">Outline Secondary</Button>
<Button variant="outline-success">Outline Success</Button>`,
                    component: (
                        <HStack spacing={3}>
                            <Button variant="outline-primary">Outline Primary</Button>
                            <Button variant="outline-secondary">Outline Secondary</Button>
                            <Button variant="outline-success">Outline Success</Button>
                        </HStack>
                    )
                }
            ]
        },
        {
            id: 'forms',
            title: 'Form Components',
            description: 'Input fields, selects, checkboxes and other form elements.',
            examples: [
                {
                    name: 'Input Fields',
                    description: 'Text input with different sizes and states',
                    code: `<Input placeholder="Default input" />
<Input placeholder="Small input" size="sm" />
<Input placeholder="Large input" size="lg" />
<Input placeholder="Disabled input" disabled />`,
                    component: (
                        <VStack spacing={3}>
                            <Input placeholder="Default input" />
                            <Input placeholder="Small input" size="sm" />
                            <Input placeholder="Large input" size="lg" />
                            <Input placeholder="Disabled input" disabled />
                        </VStack>
                    )
                },
                {
                    name: 'Select Component',
                    description: 'Dropdown select with options',
                    code: `<Select
  placeholder="Choose an option"
  options={[
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' }
  ]}
/>`,
                    component: (
                        <Select
                            placeholder="Choose an option"
                            options={[
                                { value: 'react', label: 'React' },
                                { value: 'vue', label: 'Vue' },
                                { value: 'angular', label: 'Angular' }
                            ]}
                        />
                    )
                },
                {
                    name: 'Checkboxes and Radio',
                    description: 'Checkbox and radio button controls',
                    code: `<Checkbox label="Accept terms and conditions" />
<Checkbox label="Default checked" defaultChecked />

<RadioGroup name="options" defaultValue="option1">
  <Radio value="option1" label="Option 1" />
  <Radio value="option2" label="Option 2" />
  <Radio value="option3" label="Option 3" />
</RadioGroup>`,
                    component: (
                        <VStack spacing={4}>
                            <VStack spacing={2}>
                                <Checkbox label="Accept terms and conditions" />
                                <Checkbox label="Default checked" defaultChecked />
                            </VStack>
                            <RadioGroup name="options" defaultValue="option1">
                                <Radio value="option1" label="Option 1" />
                                <Radio value="option2" label="Option 2" />
                                <Radio value="option3" label="Option 3" />
                            </RadioGroup>
                        </VStack>
                    )
                },
                {
                    name: 'Switch Component',
                    description: 'Toggle switch for boolean values',
                    code: `<Switch />
<Switch defaultChecked />
<Switch disabled />`,
                    component: (
                        <HStack spacing={4}>
                            <VStack spacing={1}>
                                <Switch />
                                <span className="text-sm text-gray-600">Default</span>
                            </VStack>
                            <VStack spacing={1}>
                                <Switch defaultChecked />
                                <span className="text-sm text-gray-600">Checked</span>
                            </VStack>
                            <VStack spacing={1}>
                                <Switch disabled />
                                <span className="text-sm text-gray-600">Disabled</span>
                            </VStack>
                        </HStack>
                    )
                }
            ]
        },
        {
            id: 'layout',
            title: 'Layout Components',
            description: 'Grid, stack, and other layout components for organizing content.',
            examples: [
                {
                    name: 'Grid System',
                    description: 'Responsive grid layout',
                    code: `<Grid cols={{ base: 1, md: 2, lg: 3 }} gap={4}>
  <GridItem><Card className="p-4">Item 1</Card></GridItem>
  <GridItem><Card className="p-4">Item 2</Card></GridItem>
  <GridItem><Card className="p-4">Item 3</Card></GridItem>
</Grid>`,
                    component: (
                        <Grid cols={{ base: 1, md: 2, lg: 3 }} gap={4}>
                            <GridItem><Card className="p-4 text-center">Item 1</Card></GridItem>
                            <GridItem><Card className="p-4 text-center">Item 2</Card></GridItem>
                            <GridItem><Card className="p-4 text-center">Item 3</Card></GridItem>
                        </Grid>
                    )
                },
                {
                    name: 'Stack Layouts',
                    description: 'Vertical and horizontal stacks',
                    code: `<VStack spacing={3}>
  <Button>Item 1</Button>
  <Button>Item 2</Button>
  <Button>Item 3</Button>
</VStack>

<HStack spacing={3}>
  <Button>Item A</Button>
  <Button>Item B</Button>
  <Button>Item C</Button>
</HStack>`,
                    component: (
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-medium mb-3">Vertical Stack</h4>
                                <VStack spacing={3}>
                                    <Button size="sm">Item 1</Button>
                                    <Button size="sm">Item 2</Button>
                                    <Button size="sm">Item 3</Button>
                                </VStack>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium mb-3">Horizontal Stack</h4>
                                <HStack spacing={3}>
                                    <Button size="sm">Item A</Button>
                                    <Button size="sm">Item B</Button>
                                    <Button size="sm">Item C</Button>
                                </HStack>
                            </div>
                        </div>
                    )
                }
            ]
        },
        {
            id: 'feedback',
            title: 'Feedback Components',
            description: 'Alerts, badges, spinners, and other feedback components.',
            examples: [
                {
                    name: 'Alert Messages',
                    description: 'Different alert types for user feedback',
                    code: `<Alert variant="success">Success alert message</Alert>
<Alert variant="danger">Error alert message</Alert>
<Alert variant="warning">Warning alert message</Alert>
<Alert variant="info">Info alert message</Alert>`,
                    component: (
                        <VStack spacing={3}>
                            <Alert variant="success">Success alert message</Alert>
                            <Alert variant="danger">Error alert message</Alert>
                            <Alert variant="warning">Warning alert message</Alert>
                            <Alert variant="info">Info alert message</Alert>
                        </VStack>
                    )
                },
                {
                    name: 'Badges',
                    description: 'Small status indicators and labels',
                    code: `<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>`,
                    component: (
                        <HStack spacing={3}>
                            <Badge variant="primary">Primary</Badge>
                            <Badge variant="success">Success</Badge>
                            <Badge variant="warning">Warning</Badge>
                            <Badge variant="danger">Danger</Badge>
                        </HStack>
                    )
                },
                {
                    name: 'Loading Spinners',
                    description: 'Loading indicators for async operations',
                    code: `<Spinner />
<Spinner size="sm" />
<Spinner size="lg" />`,
                    component: (
                        <HStack spacing={6} align="center">
                            <VStack spacing={2}>
                                <Spinner size="sm" />
                                <span className="text-xs text-gray-600">Small</span>
                            </VStack>
                            <VStack spacing={2}>
                                <Spinner />
                                <span className="text-xs text-gray-600">Default</span>
                            </VStack>
                            <VStack spacing={2}>
                                <Spinner size="lg" />
                                <span className="text-xs text-gray-600">Large</span>
                            </VStack>
                        </HStack>
                    )
                }
            ]
        },
        {
            id: 'data-display',
            title: 'Data Display',
            description: 'Components for displaying and organizing data.',
            examples: [
                {
                    name: 'Data Table',
                    description: 'Table component with sorting and pagination',
                    code: `<DataTable
  data={[
    { id: 1, name: 'John Doe', role: 'Admin' },
    { id: 2, name: 'Jane Smith', role: 'User' }
  ]}
  columns={[
    { header: 'Name', accessor: 'name' },
    { header: 'Role', accessor: 'role' }
  ]}
/>`,
                    component: (
                        <DataTable
                            data={[
                                { id: 1, name: 'John Doe', role: 'Admin', status: 'Active' },
                                { id: 2, name: 'Jane Smith', role: 'User', status: 'Active' },
                                { id: 3, name: 'Mike Johnson', role: 'Moderator', status: 'Inactive' }
                            ]}
                            columns={[
                                { header: 'Name', accessor: 'name' },
                                {
                                    header: 'Role',
                                    accessor: 'role',
                                    cell: (value: any) => (
                                        <Badge variant={value === 'Admin' ? 'primary' : 'secondary'}>
                                            {value}
                                        </Badge>
                                    )
                                },
                                { header: 'Status', accessor: 'status' }
                            ]}
                        />
                    )
                },
                {
                    name: 'Avatar Component',
                    description: 'User profile pictures and initials',
                    code: `<Avatar 
  src="https://example.com/avatar.jpg" 
  alt="User" 
  size="sm" 
/>
<Avatar fallback="JD" size="md" />
<Avatar fallback="JS" size="lg" />`,
                    component: (
                        <HStack spacing={4} align="center">
                            <VStack spacing={2}>
                                <Avatar fallback="JD" size="sm" />
                                <span className="text-xs text-gray-600">Small</span>
                            </VStack>
                            <VStack spacing={2}>
                                <Avatar fallback="JS" size="md" />
                                <span className="text-xs text-gray-600">Medium</span>
                            </VStack>
                            <VStack spacing={2}>
                                <Avatar fallback="MJ" size="lg" />
                                <span className="text-xs text-gray-600">Large</span>
                            </VStack>
                        </HStack>
                    )
                }
            ]
        }
    ];

    const sidebarItems = [
        { id: 'getting-started', title: 'Getting Started', icon: HomeIcon },
        { id: 'buttons', title: 'Buttons', icon: CubeIcon },
        { id: 'forms', title: 'Form Components', icon: DocumentTextIcon },
        { id: 'layout', title: 'Layout', icon: Cog6ToothIcon },
        { id: 'feedback', title: 'Feedback', icon: SparklesIcon },
        { id: 'data-display', title: 'Data Display', icon: PaintBrushIcon }
    ];

    const currentSection = sections.find(s => s.id === activeSection);

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
                                className="mr-2"
                            >
                                ← Home
                            </Button>
                            <Button
                                variant="outline-secondary"
                                size="sm"
                                onClick={() => navigate('/templates')}
                                className="mr-4"
                            >
                                Templates
                            </Button>
                            <h1 className="text-xl font-bold text-gray-900">Aki UI Documentation</h1>
                            <Badge variant="primary">v{VERSION}</Badge>
                        </div>
                        <Breadcrumb>
                            <span className="text-gray-500 hover:text-gray-700 cursor-pointer">Docs</span>
                            <span className="text-gray-900">{currentSection?.title}</span>
                        </Breadcrumb>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Grid cols={{ base: 1, lg: 4 }} gap={8}>
                    {/* Sidebar */}
                    <GridItem>
                        <Card className="p-4 sticky top-8">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Components</h3>
                            <VStack spacing={1}>
                                {sidebarItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => setActiveSection(item.id)}
                                            className={`w-full flex items-center space-x-3 px-3 py-2 text-left rounded-md transition-colors ${activeSection === item.id
                                                    ? 'bg-indigo-100 text-indigo-700'
                                                    : 'text-gray-700 hover:bg-gray-100'
                                                }`}
                                        >
                                            <Icon className="h-5 w-5" />
                                            <span className="text-sm font-medium">{item.title}</span>
                                        </button>
                                    );
                                })}
                            </VStack>
                        </Card>
                    </GridItem>

                    {/* Main Content */}
                    <GridItem colSpan={{ base: 1, lg: 3 }}>
                        <div className="space-y-8">
                            {/* Section Header */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    {currentSection?.title}
                                </h2>
                                <p className="text-lg text-gray-600">
                                    {currentSection?.description}
                                </p>
                            </div>

                            {/* Examples */}
                            <div className="space-y-8">
                                {currentSection?.examples.map((example, index) => (
                                    <Card key={index} className="p-6">
                                        <div className="mb-6">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-xl font-semibold text-gray-900">
                                                    {example.name}
                                                </h3>
                                                <HStack spacing={2}>
                                                    <Button
                                                        variant="outline-secondary"
                                                        size="sm"
                                                        onClick={() => setShowCode(
                                                            showCode === `${index}-${example.name}`
                                                                ? null
                                                                : `${index}-${example.name}`
                                                        )}
                                                    >
                                                        <CodeBracketIcon className="h-4 w-4 mr-1" />
                                                        {showCode === `${index}-${example.name}` ? 'Hide' : 'Show'} Code
                                                    </Button>
                                                    <Button
                                                        variant="outline-secondary"
                                                        size="sm"
                                                        onClick={() => copyToClipboard(example.code, `${index}-${example.name}`)}
                                                    >
                                                        {copiedCode === `${index}-${example.name}` ? (
                                                            <CheckIcon className="h-4 w-4 mr-1" />
                                                        ) : (
                                                            <ClipboardDocumentIcon className="h-4 w-4 mr-1" />
                                                        )}
                                                        {copiedCode === `${index}-${example.name}` ? 'Copied!' : 'Copy'}
                                                    </Button>
                                                </HStack>
                                            </div>
                                            <p className="text-gray-600">{example.description}</p>
                                        </div>

                                        {/* Preview */}
                                        <div className="mb-6">
                                            <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                                                <EyeIcon className="h-4 w-4 mr-1" />
                                                Preview
                                            </h4>
                                            <div className="border border-gray-200 rounded-lg p-6 bg-white">
                                                {example.component}
                                            </div>
                                        </div>

                                        {/* Code */}
                                        {showCode === `${index}-${example.name}` && (
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                                                    <CodeBracketIcon className="h-4 w-4 mr-1" />
                                                    Code
                                                </h4>
                                                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                                    <pre className="text-gray-100 text-sm">
                                                        <code>{example.code}</code>
                                                    </pre>
                                                </div>
                                            </div>
                                        )}
                                    </Card>
                                ))}
                            </div>

                            {/* Navigation */}
                            <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                                <div>
                                    {sidebarItems.findIndex(item => item.id === activeSection) > 0 && (
                                        <Button
                                            variant="outline-secondary"
                                            onClick={() => {
                                                const currentIndex = sidebarItems.findIndex(item => item.id === activeSection);
                                                setActiveSection(sidebarItems[currentIndex - 1].id);
                                            }}
                                        >
                                            <ChevronLeftIcon className="h-4 w-4 mr-1" />
                                            Previous
                                        </Button>
                                    )}
                                </div>
                                <div>
                                    {sidebarItems.findIndex(item => item.id === activeSection) < sidebarItems.length - 1 && (
                                        <Button
                                            variant="outline-secondary"
                                            onClick={() => {
                                                const currentIndex = sidebarItems.findIndex(item => item.id === activeSection);
                                                setActiveSection(sidebarItems[currentIndex + 1].id);
                                            }}
                                        >
                                            Next
                                            <ChevronRightIcon className="h-4 w-4 ml-1" />
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </GridItem>
                </Grid>
            </div>
        </div>
    );
};

export default DocsPage;
