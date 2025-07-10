// Framework Grid Component
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

interface FrameworkItem {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    version: string;
    status: 'supported' | 'planned';
    description: string;
    color: string;
}

const frameworks: FrameworkItem[] = [
    {
        name: 'React',
        icon: ReactIcon,
        version: '16.8+',
        status: 'supported',
        description: 'Standard React support with hooks',
        color: 'text-blue-500'
    },
    {
        name: 'Next.js',
        icon: NextJSIcon,
        version: '13.0+',
        status: 'supported',
        description: 'App Router & Pages Router support',
        color: 'text-black dark:text-white'
    },
    {
        name: 'Remix',
        icon: RemixIcon,
        version: '1.0+',
        status: 'supported',
        description: 'SSR & hydration optimized',
        color: 'text-blue-600'
    },
    {
        name: 'Gatsby',
        icon: GatsbyIcon,
        version: '4.0+',
        status: 'supported',
        description: 'Static generation ready',
        color: 'text-purple-600'
    },
    {
        name: 'Vite',
        icon: ViteIcon,
        version: '4.0+',
        status: 'supported',
        description: 'Hot reload support',
        color: 'text-yellow-500'
    },
    {
        name: 'CRA',
        icon: CRAIcon,
        version: '5.0+',
        status: 'supported',
        description: 'Create React App support',
        color: 'text-blue-400'
    },
    {
        name: 'Angular',
        icon: AngularIcon,
        version: '14.0+',
        status: 'planned',
        description: 'React wrapper via Angular Elements',
        color: 'text-red-600'
    }
];

export default function FrameworkGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((framework) => (
                <div
                    key={framework.name}
                    className="relative group"
                >
                    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-all duration-200 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600">
                        {/* Status Badge */}
                        <div className="absolute top-3 right-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        </div>

                        {/* Icon and Framework Name */}
                        <div className="flex items-center mb-4">
                            <framework.icon className="w-12 h-12 mr-3" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {framework.name}
                                </h3>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {framework.version}
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            {framework.description}
                        </p>

                        {/* Status */}
                        <div className="flex items-center justify-between">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${framework.status === 'supported'
                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                                    : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
                                }`}>
                                {framework.status === 'supported' ? '✅ Supported' : '🚧 Planned'}
                            </span>
                            <span className="text-xs text-gray-400 dark:text-gray-500">
                                Universal
                            </span>
                        </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
                </div>
            ))}
        </div>
    );
}
