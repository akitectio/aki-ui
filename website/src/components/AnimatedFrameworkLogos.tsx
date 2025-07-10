// Animated Framework Logo Component
import React, { useEffect, useState } from 'react';
import { ReactIcon, NextJSIcon, RemixIcon, AngularIcon } from './FrameworkIcons';

export default function AnimatedFrameworkLogos() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="flex items-center justify-center space-x-8 my-12">
            {/* React */}
            <div
                className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                style={{ transitionDelay: '0ms' }}
            >
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center group hover:scale-110 transition-transform">
                    <ReactIcon className="w-10 h-10" />
                </div>
                <p className="text-center text-sm mt-2 text-gray-600 dark:text-gray-300">React</p>
            </div>

            {/* Arrow */}
            <div className={`text-gray-400 transform transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`} style={{ transitionDelay: '200ms' }}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>

            {/* Next.js */}
            <div
                className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                style={{ transitionDelay: '400ms' }}
            >
                <div className="w-16 h-16 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center group hover:scale-110 transition-transform">
                    <NextJSIcon className="w-10 h-10" />
                </div>
                <p className="text-center text-sm mt-2 text-gray-600 dark:text-gray-300">Next.js</p>
            </div>

            {/* Arrow */}
            <div className={`text-gray-400 transform transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`} style={{ transitionDelay: '600ms' }}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>

            {/* Remix */}
            <div
                className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                style={{ transitionDelay: '800ms' }}
            >
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center group hover:scale-110 transition-transform">
                    <RemixIcon className="w-10 h-10" />
                </div>
                <p className="text-center text-sm mt-2 text-gray-600 dark:text-gray-300">Remix</p>
            </div>

            {/* Plus Angular & more */}
            <div className={`text-gray-400 transform transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`} style={{ transitionDelay: '1000ms' }}>
                <div className="flex items-center space-x-2">
                    <AngularIcon className="w-6 h-6" />
                    <span className="text-sm font-medium">Angular</span>
                    <span className="text-lg font-semibold">+ more</span>
                </div>
            </div>
        </div>
    );
}
