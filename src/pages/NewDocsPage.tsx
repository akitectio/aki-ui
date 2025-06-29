import React, { useState } from 'react';
import {
    Button,
    Card,
    Badge,
    Avatar,
    Input,
    Select,
    Switch,
    Alert,
    Breadcrumb,
    Grid,
    GridItem,
    HStack,
    VStack,
    Radio,
    RadioGroup,
    Spinner,
    Typography,
    Navbar,
    Drawer
} from '../lib/components';
import { useRouter } from '../components/Router';
import { useSEO, SEO_CONFIGS } from '../lib/seo';
import SafeDataTable from '../components/SafeDataTable';
import SafeCheckbox from '../components/SafeCheckbox';
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
    SparklesIcon,
    Bars3Icon,
    MagnifyingGlassIcon,
    BookOpenIcon,
    CommandLineIcon,
    SwatchIcon,
    RocketLaunchIcon
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
    icon: React.ComponentType<{ className?: string }>;
    examples: ComponentExample[];
}

const DocsPage: React.FC = () => {
    const { navigate } = useRouter();
    const [activeSection, setActiveSection] = useState('getting-started');
    const [showCode, setShowCode] = useState<string | null>(null);
    const [copiedCode, setCopiedCode] = useState<string | null>(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // SEO optimization
    useSEO(SEO_CONFIGS.docs);

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
            icon: RocketLaunchIcon,
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
                    description: 'Import and use components in your React application',
                    code: `import { Button, Card } from '@akitectio/aki-ui';

function App() {
  return (
    <Card className="p-6">
      <h1>Welcome to Aki UI</h1>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}`,
                    component: (
                        <Card className="p-6">
                            <Typography variant="h3" className="mb-4">Welcome to Aki UI</Typography>
                            <Button variant="primary">Get Started</Button>
                        </Card>
                    )
                }
            ]
        },
        {
            id: 'buttons',
            title: 'Buttons',
            description: 'Interactive button components with multiple variants and sizes.',
            icon: CubeIcon,
            examples: [
                {
                    name: 'Button Variants',
                    description: 'Different button styles for various use cases',
                    code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline-primary">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>`,
                    component: (
                        <HStack spacing={3} className="flex-wrap">
                            <Button variant="primary">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="outline-primary">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="danger">Danger</Button>
                        </HStack>
                    )
                },
                {
                    name: 'Button Sizes',
                    description: 'Different button sizes from small to large',
                    code: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,
                    component: (
                        <HStack spacing={3} className="items-center">
                            <Button size="sm">Small</Button>
                            <Button size="md">Medium</Button>
                            <Button size="lg">Large</Button>
                        </HStack>
                    )
                },
                {
                    name: 'Button States',
                    description: 'Loading and disabled button states',
                    code: `<Button disabled>Disabled</Button>
<Button variant="primary">
  <Spinner size="sm" className="mr-2" />
  Loading...
</Button>`,
                    component: (
                        <HStack spacing={3}>
                            <Button disabled>Disabled</Button>
                            <Button variant="primary">
                                <Spinner size="sm" className="mr-2" />
                                Loading...
                            </Button>
                        </HStack>
                    )
                }
            ]
        },
        {
            id: 'cards',
            title: 'Cards',
            description: 'Flexible content containers with header, body, and footer sections.',
            icon: DocumentTextIcon,
            examples: [
                {
                    name: 'Basic Card',
                    description: 'Simple card with header and body',
                    code: `<Card className="max-w-sm">
  <Card.Header>
    <Typography variant="h5">Card Title</Typography>
  </Card.Header>
  <Card.Body>
    <Typography variant="body2" className="text-gray-600">
      This is a basic card with header and body content.
    </Typography>
  </Card.Body>
</Card>`,
                    component: (
                        <Card className="max-w-sm">
                            <Card.Header>
                                <Typography variant="h5">Card Title</Typography>
                            </Card.Header>
                            <Card.Body>
                                <Typography variant="body2" className="text-gray-600">
                                    This is a basic card with header and body content.
                                </Typography>
                            </Card.Body>
                        </Card>
                    )
                },
                {
                    name: 'Card with Actions',
                    description: 'Card with action buttons in the footer',
                    code: `<Card className="max-w-sm">
  <Card.Header>
    <Typography variant="h5">Project Alpha</Typography>
    <Badge variant="success">Active</Badge>
  </Card.Header>
  <Card.Body>
    <Typography variant="body2" className="text-gray-600 mb-4">
      A modern web application built with React.
    </Typography>
    <HStack spacing={2}>
      <Button variant="primary" size="sm">View</Button>
      <Button variant="ghost" size="sm">Edit</Button>
    </HStack>
  </Card.Body>
</Card>`,
                    component: (
                        <Card className="max-w-sm">
                            <Card.Header className="flex items-center justify-between">
                                <Typography variant="h5">Project Alpha</Typography>
                                <Badge variant="success">Active</Badge>
                            </Card.Header>
                            <Card.Body>
                                <Typography variant="body2" className="text-gray-600 mb-4">
                                    A modern web application built with React.
                                </Typography>
                                <HStack spacing={2}>
                                    <Button variant="primary" size="sm">View</Button>
                                    <Button variant="ghost" size="sm">Edit</Button>
                                </HStack>
                            </Card.Body>
                        </Card>
                    )
                }
            ]
        },
        {
            id: 'forms',
            title: 'Form Controls',
            description: 'Input fields, selects, checkboxes and other form elements.',
            icon: CommandLineIcon,
            examples: [
                {
                    name: 'Input Fields',
                    description: 'Text inputs with different states',
                    code: `<VStack spacing={4} className="w-full max-w-sm">
  <Input placeholder="Default input" />
  <Input placeholder="With label" label="Email" />
  <Input placeholder="With error" error="This field is required" />
  <Input placeholder="Disabled" disabled />
</VStack>`,
                    component: (
                        <VStack spacing={4} className="w-full max-w-sm">
                            <Input placeholder="Default input" />
                            <Input placeholder="With label" label="Email" />
                            <Input placeholder="With error" error="This field is required" />
                            <Input placeholder="Disabled" disabled />
                        </VStack>
                    )
                },
                {
                    name: 'Select Dropdown',
                    description: 'Select dropdown with options',
                    code: `<Select 
  placeholder="Choose an option"
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ]}
/>`,
                    component: (
                        <div className="w-full max-w-sm">
                            <Select 
                                placeholder="Choose an option"
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' }
                                ]}
                            />
                        </div>
                    )
                },
                {
                    name: 'Checkboxes & Radio',
                    description: 'Checkboxes and radio button groups',
                    code: `<VStack spacing={4}>
  <HStack spacing={4}>
    <SafeCheckbox>Option 1</SafeCheckbox>
    <SafeCheckbox defaultChecked>Option 2</SafeCheckbox>
    <SafeCheckbox disabled>Disabled</SafeCheckbox>
  </HStack>
  
  <RadioGroup name="example" defaultValue="option1">
    <Radio value="option1">Radio 1</Radio>
    <Radio value="option2">Radio 2</Radio>
  </RadioGroup>
</VStack>`,
                    component: (
                        <VStack spacing={4}>
                            <HStack spacing={4}>
                                <SafeCheckbox>Option 1</SafeCheckbox>
                                <SafeCheckbox defaultChecked>Option 2</SafeCheckbox>
                                <SafeCheckbox disabled>Disabled</SafeCheckbox>
                            </HStack>
                            <RadioGroup name="example" defaultValue="option1">
                                <Radio value="option1">Radio 1</Radio>
                                <Radio value="option2">Radio 2</Radio>
                            </RadioGroup>
                        </VStack>
                    )
                },
                {
                    name: 'Switch Toggle',
                    description: 'Toggle switches for boolean values',
                    code: `<VStack spacing={3}>
  <HStack spacing={3} className="items-center">
    <Switch />
    <Typography>Default</Typography>
  </HStack>
  <HStack spacing={3} className="items-center">
    <Switch defaultChecked />
    <Typography>Checked</Typography>
  </HStack>
  <HStack spacing={3} className="items-center">
    <Switch disabled />
    <Typography>Disabled</Typography>
  </HStack>
</VStack>`,
                    component: (
                        <VStack spacing={3}>
                            <HStack spacing={3} className="items-center">
                                <Switch />
                                <Typography>Default</Typography>
                            </HStack>
                            <HStack spacing={3} className="items-center">
                                <Switch defaultChecked />
                                <Typography>Checked</Typography>
                            </HStack>
                            <HStack spacing={3} className="items-center">
                                <Switch disabled />
                                <Typography>Disabled</Typography>
                            </HStack>
                        </VStack>
                    )
                }
            ]
        },
        {
            id: 'feedback',
            title: 'Feedback',
            description: 'Components for displaying alerts, badges, and loading states.',
            icon: SparklesIcon,
            examples: [
                {
                    name: 'Alerts',
                    description: 'Alert messages with different severity levels',
                    code: `<VStack spacing={3}>
  <Alert variant="info">
    This is an info alert with some information.
  </Alert>
  <Alert variant="success">
    Success! Your action was completed.
  </Alert>
  <Alert variant="warning">
    Warning: Please check your input.
  </Alert>
  <Alert variant="danger">
    Error: Something went wrong.
  </Alert>
</VStack>`,
                    component: (
                        <VStack spacing={3} className="w-full">
                            <Alert variant="info">
                                This is an info alert with some information.
                            </Alert>
                            <Alert variant="success">
                                Success! Your action was completed.
                            </Alert>
                            <Alert variant="warning">
                                Warning: Please check your input.
                            </Alert>
                            <Alert variant="danger">
                                Error: Something went wrong.
                            </Alert>
                        </VStack>
                    )
                },
                {
                    name: 'Badges',
                    description: 'Small status indicators and labels',
                    code: `<HStack spacing={2} className="flex-wrap">
  <Badge variant="primary">Primary</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="danger">Danger</Badge>
  <Badge variant="info">Info</Badge>
</HStack>`,
                    component: (
                        <HStack spacing={2} className="flex-wrap">
                            <Badge variant="primary">Primary</Badge>
                            <Badge variant="secondary">Secondary</Badge>
                            <Badge variant="success">Success</Badge>
                            <Badge variant="warning">Warning</Badge>
                            <Badge variant="danger">Danger</Badge>
                            <Badge variant="info">Info</Badge>
                        </HStack>
                    )
                },
                {
                    name: 'Loading Spinner',
                    description: 'Loading indicators in different sizes',
                    code: `<HStack spacing={4} className="items-center">
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />
</HStack>`,
                    component: (
                        <HStack spacing={4} className="items-center">
                            <Spinner size="sm" />
                            <Spinner size="md" />
                            <Spinner size="lg" />
                        </HStack>
                    )
                }
            ]
        },
        {
            id: 'layout',
            title: 'Layout',
            description: 'Grid systems and layout components for organizing content.',
            icon: SwatchIcon,
            examples: [
                {
                    name: 'Grid System',
                    description: 'Responsive grid layout',
                    code: `<Grid cols={{ base: 1, md: 2, lg: 3 }} gap={4}>
  <Card className="p-4">
    <Typography>Grid Item 1</Typography>
  </Card>
  <Card className="p-4">
    <Typography>Grid Item 2</Typography>
  </Card>
  <Card className="p-4">
    <Typography>Grid Item 3</Typography>
  </Card>
</Grid>`,
                    component: (
                        <Grid cols={{ base: 1, md: 2, lg: 3 }} gap={4}>
                            <Card className="p-4">
                                <Typography>Grid Item 1</Typography>
                            </Card>
                            <Card className="p-4">
                                <Typography>Grid Item 2</Typography>
                            </Card>
                            <Card className="p-4">
                                <Typography>Grid Item 3</Typography>
                            </Card>
                        </Grid>
                    )
                },
                {
                    name: 'Stack Layouts',
                    description: 'Vertical and horizontal stacks',
                    code: `<VStack spacing={4}>
  <HStack spacing={3}>
    <Button size="sm">Button 1</Button>
    <Button size="sm">Button 2</Button>
    <Button size="sm">Button 3</Button>
  </HStack>
  <Typography>Vertical stack with horizontal stack inside</Typography>
</VStack>`,
                    component: (
                        <VStack spacing={4}>
                            <HStack spacing={3}>
                                <Button size="sm">Button 1</Button>
                                <Button size="sm">Button 2</Button>
                                <Button size="sm">Button 3</Button>
                            </HStack>
                            <Typography>Vertical stack with horizontal stack inside</Typography>
                        </VStack>
                    )
                }
            ]
        },
        {
            id: 'data-display',
            title: 'Data Display',
            description: 'Components for displaying structured data and user information.',
            icon: BookOpenIcon,
            examples: [
                {
                    name: 'Avatar',
                    description: 'User avatars in different sizes',
                    code: `<HStack spacing={4} className="items-center">
  <Avatar size="sm" name="John Doe" />
  <Avatar size="md" name="Jane Smith" />
  <Avatar size="lg" name="Mike Johnson" />
</HStack>`,
                    component: (
                        <HStack spacing={4} className="items-center">
                            <Avatar size="sm" name="John Doe" />
                            <Avatar size="md" name="Jane Smith" />
                            <Avatar size="lg" name="Mike Johnson" />
                        </HStack>
                    )
                },
                {
                    name: 'Data Table',
                    description: 'Interactive data table with selection',
                    code: `const columns = [
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  { key: 'role', header: 'Role' }
];

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' }
];

<DataTable 
  columns={columns} 
  data={data} 
  selectable 
/>`,
                    component: (
                        <SafeDataTable 
                            columns={[
                                { key: 'name' as const, header: 'Name' },
                                { key: 'email' as const, header: 'Email' },
                                { key: 'role' as const, header: 'Role' }
                            ]} 
                            data={[
                                { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
                                { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' }
                            ]} 
                            selectable 
                        />
                    )
                }
            ]
        }
    ];

    const sidebarNavigation = [
        { id: 'getting-started', title: 'Getting Started', icon: RocketLaunchIcon },
        { id: 'buttons', title: 'Buttons', icon: CubeIcon },
        { id: 'cards', title: 'Cards', icon: DocumentTextIcon },
        { id: 'forms', title: 'Form Controls', icon: CommandLineIcon },
        { id: 'feedback', title: 'Feedback', icon: SparklesIcon },
        { id: 'layout', title: 'Layout', icon: SwatchIcon },
        { id: 'data-display', title: 'Data Display', icon: BookOpenIcon },
    ];

    const currentSection = sections.find(section => section.id === activeSection);

    const SidebarContent = () => (
        <div className="flex h-full flex-col">
            <div className="flex h-16 shrink-0 items-center px-4 border-b border-gray-200">
                <CubeIcon className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-lg font-semibold text-gray-900">Aki UI Docs</span>
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto">
                <nav className="flex-1 px-4 py-6">
                    <ul className="space-y-1">
                        {sidebarNavigation.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => {
                                        setActiveSection(item.id);
                                        setSidebarOpen(false);
                                    }}
                                    className={`w-full group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                                        activeSection === item.id
                                            ? 'bg-indigo-50 text-indigo-700 border-r-2 border-indigo-700'
                                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                                >
                                    <item.icon className={`mr-3 h-5 w-5 ${
                                        activeSection === item.id ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500'
                                    }`} />
                                    {item.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-white">
            {/* Mobile sidebar */}
            <Drawer isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} side="left">
                <SidebarContent />
            </Drawer>

            {/* Desktop sidebar */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white">
                    <SidebarContent />
                </div>
            </div>

            {/* Main content */}
            <div className="lg:pl-72">
                {/* Top navigation */}
                <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                    <button
                        type="button"
                        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon className="h-6 w-6" />
                    </button>

                    <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                        <div className="relative flex flex-1 items-center">
                            <Typography variant="h5" className="font-semibold text-gray-900">
                                {currentSection?.title || 'Documentation'}
                            </Typography>
                        </div>
                        <div className="flex items-center gap-x-4 lg:gap-x-6">
                            <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => window.open('https://github.com/akitectio/aki-ui', '_blank')}
                            >
                                GitHub
                            </Button>
                            <Button variant="primary" size="sm" onClick={() => navigate('/')}>
                                Home
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Page content */}
                <main className="py-10">
                    <div className="px-4 sm:px-6 lg:px-8">
                        {/* Page header */}
                        <div className="mb-8">
                            <div className="flex items-center mb-4">
                                {currentSection?.icon && (
                                    <currentSection.icon className="h-8 w-8 text-indigo-600 mr-3" />
                                )}
                                <Typography variant="h1" className="text-3xl font-bold text-gray-900">
                                    {currentSection?.title}
                                </Typography>
                            </div>
                            <Typography variant="body1" className="text-lg text-gray-600 max-w-3xl">
                                {currentSection?.description}
                            </Typography>
                        </div>

                        {/* Examples */}
                        <div className="space-y-12">
                            {currentSection?.examples.map((example) => (
                                <div key={example.name} className="border border-gray-200 rounded-xl overflow-hidden">
                                    {/* Example header */}
                                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <Typography variant="h6" className="font-semibold text-gray-900">
                                                    {example.name}
                                                </Typography>
                                                <Typography variant="body2" className="text-gray-600 mt-1">
                                                    {example.description}
                                                </Typography>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => setShowCode(showCode === example.name ? null : example.name)}
                                                >
                                                    <CodeBracketIcon className="h-4 w-4 mr-1" />
                                                    {showCode === example.name ? 'Hide Code' : 'Show Code'}
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => copyToClipboard(example.code, example.name)}
                                                >
                                                    {copiedCode === example.name ? (
                                                        <CheckIcon className="h-4 w-4 mr-1 text-green-600" />
                                                    ) : (
                                                        <ClipboardDocumentIcon className="h-4 w-4 mr-1" />
                                                    )}
                                                    {copiedCode === example.name ? 'Copied!' : 'Copy'}
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Example preview */}
                                    <div className="p-6 bg-white">
                                        {example.component}
                                    </div>

                                    {/* Code view */}
                                    {showCode === example.name && (
                                        <div className="border-t border-gray-200">
                                            <div className="bg-gray-900 text-gray-100">
                                                <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
                                                    <Typography variant="caption" className="text-gray-400">
                                                        Code
                                                    </Typography>
                                                </div>
                                                <pre className="p-4 overflow-x-auto text-sm">
                                                    <code>{example.code}</code>
                                                </pre>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Navigation */}
                        <div className="mt-16 flex justify-between">
                            <div>
                                {sidebarNavigation.findIndex(item => item.id === activeSection) > 0 && (
                                    <Button
                                        variant="ghost"
                                        onClick={() => {
                                            const currentIndex = sidebarNavigation.findIndex(item => item.id === activeSection);
                                            setActiveSection(sidebarNavigation[currentIndex - 1].id);
                                        }}
                                    >
                                        <ChevronLeftIcon className="h-4 w-4 mr-1" />
                                        Previous
                                    </Button>
                                )}
                            </div>
                            <div>
                                {sidebarNavigation.findIndex(item => item.id === activeSection) < sidebarNavigation.length - 1 && (
                                    <Button
                                        variant="primary"
                                        onClick={() => {
                                            const currentIndex = sidebarNavigation.findIndex(item => item.id === activeSection);
                                            setActiveSection(sidebarNavigation[currentIndex + 1].id);
                                        }}
                                    >
                                        Next
                                        <ChevronRightIcon className="h-4 w-4 ml-1" />
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DocsPage;
