import React, { useState } from 'react';
import {
    Button,
    Card,
    Badge,
    Grid,
    Typography,
    HStack,
    VStack,
    Switch
} from '../lib/components';
import { useRouter } from '../components/Router';
import { useSEO, SEO_CONFIGS } from '../lib/seo';
import ErrorBoundary from '../components/ErrorBoundary';
import { VERSION } from '../lib/version';
import {
    ArrowRightIcon,
    CodeBracketIcon,
    CubeIcon,
    ShieldCheckIcon,
    ChartBarIcon,
    UserGroupIcon,
    DocumentTextIcon,
    CogIcon,
    BellIcon,
    EyeIcon,
    PencilIcon,
    TrashIcon,
    PlayIcon,
    StarIcon,
    LightBulbIcon,
    RocketLaunchIcon,
    BoltIcon,
    SparklesIcon,
    Bars3Icon
} from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/20/solid';

const HomePage: React.FC = () => {
    const { navigate } = useRouter();
    
    // SEO optimization
    useSEO(SEO_CONFIGS.home);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="bg-white">
            {/* Navigation */}
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5 flex items-center">
                            <CubeIcon className="h-8 w-8 text-indigo-600" />
                            <span className="ml-2 text-xl font-bold text-gray-900">Aki UI</span>
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <Button variant="ghost" onClick={() => navigate('/docs')}>Documentation</Button>
                        <Button variant="ghost" onClick={() => navigate('/templates')}>Templates</Button>
                        <Button variant="ghost" onClick={() => navigate('/playground')}>Playground</Button>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
                        <Button variant="ghost" size="sm" onClick={() => window.open('https://github.com/akitectio/aki-ui', '_blank')}>
                            GitHub
                        </Button>
                        <Button variant="primary" size="sm" onClick={() => navigate('/docs')}>
                            Get Started
                        </Button>
                    </div>
                </nav>
                
                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden">
                        <div className="fixed inset-0 z-40 bg-black bg-opacity-25" onClick={() => setMobileMenuOpen(false)}></div>
                        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="/" className="-m-1.5 p-1.5 flex items-center">
                                    <CubeIcon className="h-8 w-8 text-indigo-600" />
                                    <span className="ml-2 text-xl font-bold text-gray-900">Aki UI</span>
                                </a>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <button
                                            onClick={() => {
                                                navigate('/docs');
                                                setMobileMenuOpen(false);
                                            }}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 w-full text-left"
                                        >
                                            Documentation
                                        </button>
                                        <button
                                            onClick={() => {
                                                navigate('/templates');
                                                setMobileMenuOpen(false);
                                            }}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 w-full text-left"
                                        >
                                            Templates
                                        </button>
                                        <button
                                            onClick={() => {
                                                navigate('/playground');
                                                setMobileMenuOpen(false);
                                            }}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 w-full text-left"
                                        >
                                            Playground
                                        </button>
                                    </div>
                                    <div className="py-6 space-y-3">
                                        <Button 
                                            variant="ghost" 
                                            className="w-full justify-start" 
                                            onClick={() => {
                                                window.open('https://github.com/akitectio/aki-ui', '_blank');
                                                setMobileMenuOpen(false);
                                            }}
                                        >
                                            GitHub
                                        </Button>
                                        <Button 
                                            variant="primary" 
                                            className="w-full"
                                            onClick={() => {
                                                navigate('/docs');
                                                setMobileMenuOpen(false);
                                            }}
                                        >
                                            Get Started
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <div className="relative isolate px-6 pt-20 lg:px-8">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
                </div>
                <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-56">
                    <div className="text-center">
                        <Typography variant="h1" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-6xl">
                            Rapidly build modern{' '}
                            <span className="text-indigo-600">websites</span>{' '}
                            without ever leaving your HTML.
                        </Typography>
                        <Typography variant="body1" className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 px-4 sm:px-0">
                            A utility-first React component library packed with beautiful components like{' '}
                            <code className="text-sm font-semibold text-gray-900 bg-gray-100 px-1 py-0.5 rounded">Button</code>,{' '}
                            <code className="text-sm font-semibold text-gray-900 bg-gray-100 px-1 py-0.5 rounded">Card</code>, and{' '}
                            <code className="text-sm font-semibold text-gray-900 bg-gray-100 px-1 py-0.5 rounded">DataTable</code>{' '}
                            that can be composed to build any design, directly in your markup.
                        </Typography>
                        
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
                            <Button 
                                variant="primary" 
                                size="lg" 
                                className="w-full sm:w-auto px-8 py-3"
                                onClick={() => navigate('/docs')}
                            >
                                Get started
                            </Button>
                            <Button 
                                variant="ghost" 
                                size="lg" 
                                className="w-full sm:w-auto px-8 py-3"
                                onClick={() => navigate('/docs')}
                            >
                                <PlayIcon className="h-5 w-5 mr-2" />
                                View docs
                            </Button>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 text-sm">
                            <div className="flex items-center text-gray-500">
                                <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                                36+ Components
                            </div>
                            <div className="flex items-center text-gray-500">
                                <CheckIcon className="h-4 w-4 text-green-500 mr-1" />
                                TypeScript Ready
                            </div>
                            <div className="flex items-center text-gray-500">
                                <BoltIcon className="h-4 w-4 text-indigo-500 mr-1" />
                                Tailwind CSS
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                    <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
                </div>
            </div>

            {/* Code Preview */}
            <div className="py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
                        <Typography variant="h2" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
                            See it in action
                        </Typography>
                        <Typography variant="body1" className="mt-4 text-base sm:text-lg text-gray-600">
                            This is the actual result rendered in your browser.
                        </Typography>
                    </div>
                    
                    <div className="mx-auto max-w-5xl mb-12 sm:mb-16">
                        <div className="rounded-2xl bg-gray-900 p-4 sm:p-6 ring-1 ring-gray-900/10 shadow-2xl">
                            <div className="flex items-center mb-4 sm:mb-6">
                                <div className="flex space-x-2">
                                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="flex-1 text-center">
                                    <Typography variant="caption" className="text-gray-400 text-xs sm:text-sm">
                                        App.tsx
                                    </Typography>
                                </div>
                            </div>
                            <pre className="text-xs sm:text-sm text-gray-300 overflow-x-auto">
                                <code>{`import { Button, Card, Badge, Grid } from '@akitectio/aki-ui';

function App() {
  return (
    <Grid cols={{ base: 1, md: 2, lg: 3 }} gap={6}>
      <Card className="p-6">
        <Card.Header>
          <h3 className="font-semibold">Project Alpha</h3>
          <Badge variant="success">Active</Badge>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-600 mb-4">
            A modern web application built with Aki UI components.
          </p>
          <Button variant="primary" size="sm">
            View Details
          </Button>
        </Card.Body>
      </Card>
      {/* More cards... */}
    </Grid>
  );
}`}</code>
                            </pre>
                        </div>
                    </div>
                    
                    <div className="mx-auto max-w-6xl">
                        <ErrorBoundary fallback={<div className="p-8 text-center text-gray-500">Example components unavailable</div>}>
                            <Grid cols={{ base: 1, md: 2, lg: 3 }} gap={6}>
                                <Card className="p-6">
                                    <Card.Header className="flex items-center justify-between mb-4">
                                        <Typography variant="h5" className="font-semibold">Project Alpha</Typography>
                                        <Badge variant="success">Active</Badge>
                                    </Card.Header>
                                    <Card.Body>
                                        <Typography variant="body2" className="text-gray-600 mb-4">
                                            A modern web application built with Aki UI components.
                                        </Typography>
                                        <Button variant="primary" size="sm">
                                            View Details
                                        </Button>
                                    </Card.Body>
                                </Card>
                                
                                <Card className="p-6">
                                    <Card.Header className="flex items-center justify-between mb-4">
                                        <Typography variant="h5" className="font-semibold">Project Beta</Typography>
                                        <Badge variant="warning">In Progress</Badge>
                                    </Card.Header>
                                    <Card.Body>
                                        <Typography variant="body2" className="text-gray-600 mb-4">
                                            E-commerce platform with advanced features and integrations.
                                        </Typography>
                                        <Button variant="outline-primary" size="sm">
                                            View Details
                                        </Button>
                                    </Card.Body>
                                </Card>
                                
                                <Card className="p-6">
                                    <Card.Header className="flex items-center justify-between mb-4">
                                        <Typography variant="h5" className="font-semibold">Project Gamma</Typography>
                                        <Badge variant="secondary">Planning</Badge>
                                    </Card.Header>
                                    <Card.Body>
                                        <Typography variant="body2" className="text-gray-600 mb-4">
                                            Mobile application with cross-platform compatibility.
                                        </Typography>
                                        <Button variant="ghost" size="sm">
                                            View Details
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Grid>
                        </ErrorBoundary>
                    </div>
                </div>
            </div>

            {/* Why Aki UI Section */}
            <div className="bg-gray-50 py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <Typography variant="overline" className="text-indigo-600 font-semibold text-sm sm:text-base">
                            Why Aki UI?
                        </Typography>
                        <Typography variant="h2" className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
                            Built for the modern web.
                        </Typography>
                        <Typography variant="body1" className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                            Aki UI is unapologetically modern, and takes advantage of all the latest and greatest React features to make the developer experience as enjoyable as possible.
                        </Typography>
                    </div>
                    
                    <div className="mt-16 sm:mt-20">
                        <Grid cols={{ base: 1, md: 3 }} gap={8}>
                            {/* TypeScript Support */}
                            <div className="text-center">
                                <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 rounded-xl bg-indigo-100 flex items-center justify-center">
                                    <CodeBracketIcon className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600" />
                                </div>
                                <Typography variant="h6" className="mt-4 sm:mt-6 font-semibold text-gray-900 text-base sm:text-lg">
                                    Built with TypeScript
                                </Typography>
                                <Typography variant="body2" className="mt-2 text-gray-600 text-sm sm:text-base">
                                    Full TypeScript support with comprehensive type definitions for better developer experience and IntelliSense.
                                </Typography>
                            </div>

                            {/* Component Library */}
                            <div className="text-center">
                                <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 rounded-xl bg-green-100 flex items-center justify-center">
                                    <CubeIcon className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                                </div>
                                <Typography variant="h6" className="mt-4 sm:mt-6 font-semibold text-gray-900 text-base sm:text-lg">
                                    36+ Components
                                </Typography>
                                <Typography variant="body2" className="mt-2 text-gray-600 text-sm sm:text-base">
                                    Comprehensive component library with forms, navigation, data display, and interactive elements.
                                </Typography>
                            </div>

                            {/* Accessibility */}
                            <div className="text-center">
                                <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 rounded-xl bg-purple-100 flex items-center justify-center">
                                    <ShieldCheckIcon className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                                </div>
                                <Typography variant="h6" className="mt-4 sm:mt-6 font-semibold text-gray-900 text-base sm:text-lg">
                                    Accessible by Default
                                </Typography>
                                <Typography variant="body2" className="mt-2 text-gray-600 text-sm sm:text-base">
                                    WCAG 2.1 compliant components with keyboard navigation and screen reader support built-in.
                                </Typography>
                            </div>
                        </Grid>
                    </div>
                </div>
            </div>

            {/* Feature Spotlight */}
            <div className="py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Grid cols={{ base: 1, lg: 2 }} gap={12} className="items-center">
                        <div>
                            <Typography variant="h2" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
                                Responsive design
                            </Typography>
                            <Typography variant="body1" className="mt-4 text-base sm:text-lg text-gray-600">
                                Every component works beautifully across all screen sizes. Just add responsive prefixes to apply styles at different breakpoints.
                            </Typography>
                            
                            <div className="mt-6 sm:mt-8">
                                <div className="rounded-lg bg-gray-100 p-3 sm:p-4">
                                    <Typography variant="caption" className="text-gray-500 font-medium text-xs sm:text-sm">
                                        Responsive Grid Example
                                    </Typography>
                                    <pre className="mt-2 text-xs sm:text-sm text-gray-800 overflow-x-auto">
                                        <code>{`<Grid cols={{ base: 1, md: 2, lg: 3 }} gap={4}>
  <Card>Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols</Card>
</Grid>`}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex space-x-3 sm:space-x-4">
                                <Card className="flex-1 p-3 sm:p-4">
                                    <Typography variant="caption" className="text-gray-500 text-xs sm:text-sm">Mobile (1 col)</Typography>
                                </Card>
                            </div>
                            <div className="flex space-x-3 sm:space-x-4">
                                <Card className="flex-1 p-3 sm:p-4">
                                    <Typography variant="caption" className="text-gray-500 text-xs sm:text-sm">Tablet</Typography>
                                </Card>
                                <Card className="flex-1 p-3 sm:p-4">
                                    <Typography variant="caption" className="text-gray-500 text-xs sm:text-sm">(2 cols)</Typography>
                                </Card>
                            </div>
                            <div className="flex space-x-3 sm:space-x-4">
                                <Card className="flex-1 p-3 sm:p-4">
                                    <Typography variant="caption" className="text-gray-500 text-xs sm:text-sm">Desktop</Typography>
                                </Card>
                                <Card className="flex-1 p-3 sm:p-4">
                                    <Typography variant="caption" className="text-gray-500 text-xs sm:text-sm">(3 cols)</Typography>
                                </Card>
                                <Card className="flex-1 p-3 sm:p-4">
                                    <Typography variant="caption" className="text-gray-500">Layout</Typography>
                                </Card>
                            </div>
                        </div>
                    </Grid>
                </div>
            </div>

            {/* Dark Mode Feature */}
            <div className="bg-gray-50 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Grid cols={{ base: 1, lg: 2 }} gap={16} className="items-center">
                        <div className="order-2 lg:order-1">
                            <ErrorBoundary fallback={<div className="p-4 text-center text-gray-500">Theme preview unavailable</div>}>
                                <div className="space-y-4">
                                    <div className="rounded-lg border border-gray-200 bg-white p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <Typography variant="h6" className="font-semibold">Light Mode</Typography>
                                            <Switch />
                                        </div>
                                        <Typography variant="body2" className="text-gray-600">
                                            Clean, modern interface with carefully crafted light theme.
                                        </Typography>
                                    </div>
                                    
                                    <div className="rounded-lg border border-gray-700 bg-gray-900 p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <Typography variant="h6" className="font-semibold text-white">Dark Mode</Typography>
                                            <Switch defaultChecked />
                                        </div>
                                        <Typography variant="body2" className="text-gray-300">
                                            Elegant dark theme that's easy on the eyes during long coding sessions.
                                        </Typography>
                                    </div>
                                </div>
                            </ErrorBoundary>
                        </div>

                        <div className="order-1 lg:order-2">
                            <Typography variant="h2" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Dark mode
                            </Typography>
                            <Typography variant="body1" className="mt-4 text-lg text-gray-600">
                                If you're not a fan of burning your retinas, just add{' '}
                                <code className="text-sm font-semibold text-gray-900">dark:</code>{' '}
                                in front of any utility class to apply it in dark mode.
                            </Typography>
                            
                            <div className="mt-8">
                                <div className="rounded-lg bg-gray-100 p-4">
                                    <Typography variant="caption" className="text-gray-500 font-medium">
                                        Dark Mode Example
                                    </Typography>
                                    <pre className="mt-2 text-sm text-gray-800">
                                        <code>{`<Card className="bg-white dark:bg-gray-900">
  <Typography className="text-gray-900 dark:text-white">
    Automatically adapts to dark mode
  </Typography>
</Card>`}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-indigo-600">
                <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <Typography variant="h2" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ready to dive in?
                        </Typography>
                        <Typography variant="body1" className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
                            Start building beautiful interfaces today with our comprehensive component library.
                        </Typography>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button 
                                variant="secondary" 
                                size="lg" 
                                className="bg-white text-indigo-600 hover:bg-gray-50 px-8 py-3"
                                onClick={() => navigate('/docs')}
                            >
                                Get started
                            </Button>
                            <Button 
                                variant="ghost" 
                                size="lg" 
                                className="text-white hover:text-indigo-200 px-8 py-3"
                                onClick={() => navigate('/docs')}
                            >
                                Learn more <ArrowRightIcon className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200">
                <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                        <div>
                            <Typography variant="h6" className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
                                Learn
                            </Typography>
                            <ul className="space-y-1 sm:space-y-2">
                                <li><a href="/docs" className="text-gray-600 hover:text-gray-900 text-sm">Documentation</a></li>
                                <li><a href="/templates" className="text-gray-600 hover:text-gray-900 text-sm">Templates</a></li>
                                <li><a href="/playground" className="text-gray-600 hover:text-gray-900 text-sm">Playground</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <Typography variant="h6" className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
                                Resources
                            </Typography>
                            <ul className="space-y-1 sm:space-y-2">
                                <li><a href="https://github.com/akitectio/aki-ui" className="text-gray-600 hover:text-gray-900 text-sm">GitHub</a></li>
                                <li><a href="https://www.npmjs.com/package/@akitectio/aki-ui" className="text-gray-600 hover:text-gray-900 text-sm">NPM</a></li>
                                <li><a href="https://akitectio.github.io/aki-ui/" className="text-gray-600 hover:text-gray-900 text-sm">Storybook</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <Typography variant="h6" className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
                                Community
                            </Typography>
                            <ul className="space-y-1 sm:space-y-2">
                                <li><a href="https://github.com/akitectio/aki-ui/discussions" className="text-gray-600 hover:text-gray-900 text-sm">Discussions</a></li>
                                <li><a href="https://github.com/akitectio/aki-ui/issues" className="text-gray-600 hover:text-gray-900 text-sm">Issues</a></li>
                                <li><a href="https://twitter.com/akitectio" className="text-gray-600 hover:text-gray-900 text-sm">Twitter</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <Typography variant="h6" className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
                                Company
                            </Typography>
                            <ul className="space-y-1 sm:space-y-2">
                                <li><a href="https://akitect.io" className="text-gray-600 hover:text-gray-900 text-sm">Akitect.io</a></li>
                                <li><a href="/about" className="text-gray-600 hover:text-gray-900 text-sm">About</a></li>
                                <li><a href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                        <div className="flex items-center">
                            <CubeIcon className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />
                            <span className="ml-2 text-base sm:text-lg font-bold text-gray-900">Aki UI</span>
                        </div>
                        <Typography variant="caption" className="text-gray-500 text-xs sm:text-sm">
                            © 2025 Akitect.io. All rights reserved.
                        </Typography>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
