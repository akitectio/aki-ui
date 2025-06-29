import React, { useState } from 'react';
import {
    Button,
    Card,
    Badge,
    Input,
    Typography,
    Grid,
    HStack,
    VStack,
    Breadcrumb
} from '../lib/components';
import { useRouter } from '../components/Router';
import { useSEO, SEO_CONFIGS } from '../lib/seo';
import {
    DocumentTextIcon,
    CodeBracketIcon,
    MagnifyingGlassIcon,
    CubeIcon,
    CommandLineIcon,
    SparklesIcon,
    SwatchIcon,
    BookOpenIcon,
    RocketLaunchIcon,
    ChevronRightIcon
} from '@heroicons/react/24/outline';

interface ComponentInfo {
    id: string;
    name: string;
    description: string;
    category: string;
    icon: React.ComponentType<{ className?: string }>;
    tags: string[];
    examples: number;
}

const ComponentsPage: React.FC = () => {
    const { navigate } = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    
    // SEO optimization
    useSEO(SEO_CONFIGS.components);

    const components: ComponentInfo[] = [
        // Form Controls
        {
            id: 'button',
            name: 'Button',
            description: 'Interactive button component with multiple variants and sizes',
            category: 'form-controls',
            icon: CubeIcon,
            tags: ['interactive', 'form', 'action'],
            examples: 3
        },
        {
            id: 'input',
            name: 'Input',
            description: 'Text input field with validation and different states',
            category: 'form-controls',
            icon: CommandLineIcon,
            tags: ['form', 'text', 'validation'],
            examples: 4
        },
        {
            id: 'select',
            name: 'Select',
            description: 'Dropdown selection component with search and multi-select',
            category: 'form-controls',
            icon: CommandLineIcon,
            tags: ['form', 'dropdown', 'selection'],
            examples: 2
        },
        {
            id: 'checkbox',
            name: 'Checkbox',
            description: 'Checkbox input for boolean values and multiple selections',
            category: 'form-controls',
            icon: CommandLineIcon,
            tags: ['form', 'boolean', 'selection'],
            examples: 2
        },
        {
            id: 'radio',
            name: 'Radio',
            description: 'Radio button for single selection from multiple options',
            category: 'form-controls',
            icon: CommandLineIcon,
            tags: ['form', 'selection', 'exclusive'],
            examples: 2
        },
        {
            id: 'switch',
            name: 'Switch',
            description: 'Toggle switch for boolean settings and preferences',
            category: 'form-controls',
            icon: CommandLineIcon,
            tags: ['form', 'toggle', 'boolean'],
            examples: 2
        },

        // Layout
        {
            id: 'card',
            name: 'Card',
            description: 'Flexible content container with header, body, and footer',
            category: 'layout',
            icon: DocumentTextIcon,
            tags: ['container', 'content', 'layout'],
            examples: 3
        },
        {
            id: 'grid',
            name: 'Grid',
            description: 'Responsive grid system for organizing content',
            category: 'layout',
            icon: SwatchIcon,
            tags: ['layout', 'responsive', 'columns'],
            examples: 2
        },
        {
            id: 'stack',
            name: 'Stack',
            description: 'Vertical and horizontal stack layouts with spacing',
            category: 'layout',
            icon: SwatchIcon,
            tags: ['layout', 'spacing', 'alignment'],
            examples: 2
        },

        // Feedback
        {
            id: 'alert',
            name: 'Alert',
            description: 'Alert messages for user feedback and notifications',
            category: 'feedback',
            icon: SparklesIcon,
            tags: ['notification', 'message', 'feedback'],
            examples: 4
        },
        {
            id: 'badge',
            name: 'Badge',
            description: 'Small status indicators and count labels',
            category: 'feedback',
            icon: SparklesIcon,
            tags: ['status', 'indicator', 'label'],
            examples: 2
        },
        {
            id: 'spinner',
            name: 'Spinner',
            description: 'Loading indicators in different sizes',
            category: 'feedback',
            icon: SparklesIcon,
            tags: ['loading', 'progress', 'indicator'],
            examples: 1
        },

        // Data Display
        {
            id: 'avatar',
            name: 'Avatar',
            description: 'User profile pictures and initials display',
            category: 'data-display',
            icon: BookOpenIcon,
            tags: ['user', 'profile', 'image'],
            examples: 2
        },
        {
            id: 'datatable',
            name: 'DataTable',
            description: 'Interactive data table with sorting and selection',
            category: 'data-display',
            icon: BookOpenIcon,
            tags: ['table', 'data', 'interactive'],
            examples: 1
        },
        {
            id: 'typography',
            name: 'Typography',
            description: 'Text components with consistent styling',
            category: 'data-display',
            icon: BookOpenIcon,
            tags: ['text', 'heading', 'content'],
            examples: 2
        }
    ];

    const categories = [
        { id: 'all', name: 'All Components', count: components.length },
        { id: 'form-controls', name: 'Form Controls', count: components.filter(c => c.category === 'form-controls').length },
        { id: 'layout', name: 'Layout', count: components.filter(c => c.category === 'layout').length },
        { id: 'feedback', name: 'Feedback', count: components.filter(c => c.category === 'feedback').length },
        { id: 'data-display', name: 'Data Display', count: components.filter(c => c.category === 'data-display').length }
    ];

    const filteredComponents = components.filter(component => {
        const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            component.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            component.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        
        const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });

    const handleComponentClick = (componentId: string) => {
        navigate(`/docs?section=${componentId}`);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-6">
                        <Breadcrumb
                            items={[
                                { label: 'Home', href: '/' },
                                { label: 'Components', href: '/components' }
                            ]}
                            className="mb-4"
                        />
                        
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                            <div className="mb-6 lg:mb-0">
                                <Typography variant="h1" className="text-3xl font-bold text-gray-900 mb-2">
                                    Component Library
                                </Typography>
                                <Typography variant="body1" className="text-lg text-gray-600 max-w-3xl">
                                    Browse our collection of {components.length} production-ready React components. 
                                    Each component is fully documented with examples and customization options.
                                </Typography>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button variant="outline-primary" onClick={() => navigate('/docs')}>
                                    <BookOpenIcon className="h-4 w-4 mr-2" />
                                    Documentation
                                </Button>
                                <Button variant="primary" onClick={() => navigate('/playground')}>
                                    <CodeBracketIcon className="h-4 w-4 mr-2" />
                                    Playground
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Search */}
                        <div className="flex-1">
                            <div className="relative">
                                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <Input
                                    placeholder="Search components..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="lg:w-64">
                            <HStack spacing={2} wrap>
                                {categories.map((category) => (
                                    <Button
                                        key={category.id}
                                        variant={selectedCategory === category.id ? 'primary' : 'ghost'}
                                        size="sm"
                                        onClick={() => setSelectedCategory(category.id)}
                                    >
                                        {category.name} ({category.count})
                                    </Button>
                                ))}
                            </HStack>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                    <Typography variant="body2" className="text-gray-600">
                        {filteredComponents.length} component{filteredComponents.length !== 1 ? 's' : ''} found
                        {searchTerm && ` for "${searchTerm}"`}
                        {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
                    </Typography>
                </div>

                {/* Components Grid */}
                <Grid cols={{ base: 1, md: 2, lg: 3, xl: 4 }} gap={6}>
                    {filteredComponents.map((component) => (
                        <Card
                            key={component.id}
                            className="cursor-pointer hover:shadow-lg transition-shadow duration-200 border border-gray-200"
                            onClick={() => handleComponentClick(component.id)}
                        >
                            <Card.Body className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center">
                                        <div className="p-2 bg-indigo-50 rounded-lg mr-3">
                                            <component.icon className="h-6 w-6 text-indigo-600" />
                                        </div>
                                        <div>
                                            <Typography variant="h6" className="font-semibold text-gray-900">
                                                {component.name}
                                            </Typography>
                                            <Badge variant="secondary" className="text-xs">
                                                {component.examples} example{component.examples !== 1 ? 's' : ''}
                                            </Badge>
                                        </div>
                                    </div>
                                    <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                                </div>

                                <Typography variant="body2" className="text-gray-600 mb-4 line-clamp-2">
                                    {component.description}
                                </Typography>

                                <div className="flex flex-wrap gap-1">
                                    {component.tags.slice(0, 3).map((tag) => (
                                        <Badge key={tag} variant="outline" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                    {component.tags.length > 3 && (
                                        <Badge variant="outline" className="text-xs">
                                            +{component.tags.length - 3}
                                        </Badge>
                                    )}
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </Grid>

                {/* No Results */}
                {filteredComponents.length === 0 && (
                    <div className="text-center py-12">
                        <MagnifyingGlassIcon className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                        <Typography variant="h6" className="text-gray-500 mb-2">
                            No components found
                        </Typography>
                        <Typography variant="body2" className="text-gray-400 mb-4">
                            Try adjusting your search terms or category filter
                        </Typography>
                        <Button variant="ghost" onClick={() => {
                            setSearchTerm('');
                            setSelectedCategory('all');
                        }}>
                            Clear filters
                        </Button>
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <div className="bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <Typography variant="h2" className="text-2xl font-bold text-gray-900 mb-4">
                            Ready to get started?
                        </Typography>
                        <Typography variant="body1" className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Install Aki UI and start building beautiful interfaces with our component library.
                        </Typography>
                        <HStack spacing={4} className="justify-center">
                            <Button variant="primary" size="lg" onClick={() => navigate('/docs')}>
                                <RocketLaunchIcon className="h-5 w-5 mr-2" />
                                Get Started
                            </Button>
                            <Button variant="outline-primary" size="lg" onClick={() => window.open('https://github.com/akitectio/aki-ui', '_blank')}>
                                <CodeBracketIcon className="h-5 w-5 mr-2" />
                                View on GitHub
                            </Button>
                        </HStack>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComponentsPage;
