import React from 'react';
import { Button, Card, Badge } from '../lib/components';
import { ArrowRightIcon, CodeBracketIcon, CubeIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">Aki UI</span>{' '}
                                    <span className="block text-indigo-600 xl:inline">Component Library</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    A modern React UI component library built with TypeScript and Tailwind CSS.
                                    Build beautiful, accessible, and responsive applications with ease.
                                </p>

                                <div className="mt-8 flex items-center gap-4">
                                    <Badge variant="primary" className="text-sm">
                                        Current version: v0.1.0
                                    </Badge>
                                </div>

                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <Button
                                            variant="primary"
                                            size="lg"
                                            className="w-full flex items-center justify-center px-8 py-3"
                                            onClick={() => window.location.href = '/docs/getting-started'}
                                        >
                                            Get Started
                                            <ArrowRightIcon className="ml-2 h-5 w-5" />
                                        </Button>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <Button
                                            variant="outline-primary"
                                            size="lg"
                                            className="w-full flex items-center justify-center px-8 py-3"
                                            onClick={() => window.location.href = '/docs/components'}
                                        >
                                            Components
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <div className="h-56 w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
                        <div className="text-white text-center">
                            <CubeIcon className="h-24 w-24 mx-auto mb-4 opacity-80" />
                            <div className="text-lg font-semibold">Beautiful Components</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Why Choose Aki UI?
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Built with modern technologies and best practices for the best developer experience.
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                            <Card className="p-6 text-center">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                                    <CodeBracketIcon className="h-6 w-6" />
                                </div>
                                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">Built with TypeScript</h3>
                                <p className="mt-2 text-base text-gray-500">
                                    Full TypeScript support with comprehensive type definitions for better developer experience.
                                </p>
                            </Card>

                            <Card className="p-6 text-center">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                                    <CubeIcon className="h-6 w-6" />
                                </div>
                                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">Tailwind CSS</h3>
                                <p className="mt-2 text-base text-gray-500">
                                    Built on top of Tailwind CSS for utility-first styling and easy customization.
                                </p>
                            </Card>

                            <Card className="p-6 text-center">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                                    <ShieldCheckIcon className="h-6 w-6" />
                                </div>
                                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">Accessible by Default</h3>
                                <p className="mt-2 text-base text-gray-500">
                                    All components are built with accessibility in mind, following WCAG guidelines.
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Start Section */}
            <div className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Quick Start</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Get up and running in minutes
                        </p>
                    </div>

                    <div className="mt-10 max-w-3xl mx-auto">
                        <Card className="p-6">
                            <h3 className="text-lg font-semibold mb-4">Installation</h3>
                            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
                                npm install @akitectio/aki-ui
                            </div>

                            <h3 className="text-lg font-semibold mb-4 mt-6">Usage</h3>
                            <div className="bg-gray-900 rounded-lg p-4 text-gray-100 font-mono text-sm">
                                <div className="text-blue-400">import</div>{' '}
                                <span className="text-yellow-300">{'{ Button, Card }'}</span>{' '}
                                <div className="text-blue-400">from</div>{' '}
                                <span className="text-green-400">'@akitectio/aki-ui'</span>
                                <br /><br />
                                <div className="text-purple-400">function</div>{' '}
                                <span className="text-yellow-300">App</span>() {'{'}
                                <br />
                                <span className="ml-4">
                                    <div className="text-blue-400">return</div> (
                                    <br />
                                    <span className="ml-4 text-red-400">{'<Button variant="primary">Hello World</Button>'}</span>
                                    <br />
                                    )
                                </span>
                                <br />
                                {'}'}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                    <div className="flex justify-center space-x-6 md:order-2">
                        <a href="https://github.com/akitectio/aki-ui" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">GitHub</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                    <div className="mt-8 md:mt-0 md:order-1">
                        <p className="text-center text-base text-gray-400">
                            &copy; 2025 Akitect.io. Built with ❤️ using Aki UI.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
