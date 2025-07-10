// Framework Support Hero Component
import React from 'react';
import {
    ReactIcon,
    NextJSIcon,
    RemixIcon,
    GatsbyIcon,
    ViteIcon,
    CRAIcon,
    AngularIcon
} from './FrameworkIcons';

export default function FrameworkHero() {
    const frameworks = [
        { icon: ReactIcon, name: 'React' },
        { icon: NextJSIcon, name: 'Next.js' },
        { icon: RemixIcon, name: 'Remix' },
        { icon: GatsbyIcon, name: 'Gatsby' },
        { icon: ViteIcon, name: 'Vite' },
        { icon: CRAIcon, name: 'CRA' },
        { icon: AngularIcon, name: 'Angular' }
    ];

    return (
        <div className="relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium mb-6">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                        Universal Framework Support
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        One Import.
                        <br />
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            All Frameworks.
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Aki UI works universally across all React-based frameworks without any adapters.
                        No more framework-specific imports or configurations.
                    </p>

                    {/* Framework Icons Grid */}
                    <div className="grid grid-cols-3 md:grid-cols-7 gap-6 mb-12 max-w-6xl mx-auto">
                        {frameworks.map((framework, index) => (
                            <div
                                key={framework.name}
                                className="group flex flex-col items-center space-y-3"
                                style={{
                                    animationDelay: `${index * 0.1}s`
                                }}
                            >
                                <div className="relative">
                                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white dark:bg-gray-800 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                                        <framework.icon className="w-10 h-10" />
                                    </div>

                                    {/* Status indicator */}
                                    <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center ${framework.name === 'Angular' ? 'bg-orange-500' : 'bg-green-500'
                                        }`}>
                                        {framework.name === 'Angular' ? (
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        ) : (
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </div>
                                </div>

                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                    {framework.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Code Example */}
                    <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-6 max-w-2xl mx-auto text-left shadow-2xl">
                        <div className="flex items-center mb-4">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="ml-4 text-gray-400 text-sm">universal-import.tsx</span>
                        </div>

                        <pre className="text-sm text-gray-300 leading-relaxed">
                            <code>
                                <span className="text-blue-400">import</span> {`{ `}
                                <span className="text-green-400">Button</span>,
                                <span className="text-green-400">Card</span>,
                                <span className="text-green-400">Input</span>
                                {` }`} <span className="text-blue-400">from</span> <span className="text-yellow-300">'@akitectio/aki-ui'</span>
                                <br />
                                <br />
                                <span className="text-gray-500">// Works in React, Next.js, Remix, Gatsby, Vite, CRA!</span>
                                <br />
                                <span className="text-blue-400">function</span> <span className="text-yellow-300">App</span>() {`{`}
                                <br />
                                &nbsp;&nbsp;<span className="text-blue-400">return</span> (
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">&lt;Card&gt;</span>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">&lt;Button&gt;</span>Universal Component<span className="text-red-400">&lt;/Button&gt;</span>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">&lt;/Card&gt;</span>
                                <br />
                                &nbsp;&nbsp;)
                                <br />
                                {`}`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}
