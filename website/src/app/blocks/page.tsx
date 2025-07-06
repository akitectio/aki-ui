'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, Badge } from '@akitectio/aki-ui'
import { getBlockSVG } from '@/components/BlockIllustrations'

const featuredBlocks = [
    {
        id: 'dashboard-01',
        title: 'Dashboard Layout',
        description: 'A complete dashboard with sidebar, charts and data table',
        category: 'Dashboard',
        image: '/blocks/dashboard-01.png',
        href: '/blocks/dashboard-01',
        featured: true
    },
    {
        id: 'sidebar-collapsible',
        title: 'Collapsible Sidebar',
        description: 'A sidebar that collapses to icons with smooth animations',
        category: 'Navigation',
        image: '/blocks/sidebar-collapsible.png',
        href: '/blocks/sidebar-collapsible',
        featured: true
    },
    {
        id: 'authentication-form',
        title: 'Authentication Form',
        description: 'Modern login and registration forms with validation',
        category: 'Authentication',
        image: '/blocks/authentication-form.png',
        href: '/blocks/authentication-form',
        featured: true
    },
    {
        id: 'reviews-testimonials',
        title: 'Reviews & Testimonials',
        description: 'Customer reviews and testimonials with rating system',
        category: 'Marketing',
        image: '/blocks/reviews-testimonials.png',
        href: '/blocks/reviews-testimonials',
        featured: true
    },
    {
        id: 'calendar-widget',
        title: 'Calendar Widget',
        description: 'Interactive calendar with event management',
        category: 'Data Display',
        image: '/blocks/calendar-widget.png',
        href: '/blocks/calendar-widget',
        featured: true
    }
]

const allBlocks = [
    // Dashboard Category
    {
        id: 'dashboard-01',
        title: 'Admin Dashboard',
        description: 'Complete admin dashboard with sidebar, stats, and data table',
        category: 'Dashboard',
        href: '/blocks/dashboard-01'
    },
    {
        id: 'dashboard-analytics',
        title: 'Analytics Dashboard',
        description: 'Focus on charts and analytics with minimal sidebar',
        category: 'Dashboard',
        href: '/blocks/dashboard-analytics'
    },

    // Navigation Category
    {
        id: 'sidebar-collapsible',
        title: 'Collapsible Sidebar',
        description: 'Sidebar that collapses to icons with smooth animations',
        category: 'Navigation',
        href: '/blocks/sidebar-collapsible'
    },
    {
        id: 'navbar-with-search',
        title: 'Navbar with Search',
        description: 'Navigation bar with integrated search functionality',
        category: 'Navigation',
        href: '/blocks/navbar-with-search'
    },

    // Authentication Category
    {
        id: 'login-simple',
        title: 'Simple Login',
        description: 'Clean and minimal login form',
        category: 'Authentication',
        href: '/blocks/login-simple'
    },
    {
        id: 'login-with-image',
        title: 'Login with Image',
        description: 'Login form with split layout and background image',
        category: 'Authentication',
        href: '/blocks/login-with-image'
    },
    {
        id: 'signup-form',
        title: 'Registration Form',
        description: 'Multi-step registration form with validation',
        category: 'Authentication',
        href: '/blocks/signup-form'
    },

    // E-commerce Category
    {
        id: 'product-card',
        title: 'Product Card',
        description: 'Product showcase card with pricing and actions',
        category: 'E-commerce',
        href: '/blocks/product-card'
    },
    {
        id: 'checkout-form',
        title: 'Checkout Form',
        description: 'Complete checkout process with payment integration',
        category: 'E-commerce',
        href: '/blocks/checkout-form'
    },

    // Forms Category
    {
        id: 'contact-form',
        title: 'Contact Form',
        description: 'Contact form with validation and file upload',
        category: 'Forms',
        href: '/blocks/contact-form'
    },
    {
        id: 'settings-form',
        title: 'Settings Form',
        description: 'User preferences and account settings form',
        category: 'Forms',
        href: '/blocks/settings-form'
    },

    // Communication Category
    {
        id: 'chat-interface',
        title: 'Chat Interface',
        description: 'Real-time chat interface with message history',
        category: 'Communication',
        href: '/blocks/chat-interface'
    },

    // Data Display Category
    {
        id: 'data-table-advanced',
        title: 'Advanced Data Table',
        description: 'Data table with sorting, filtering, and pagination',
        category: 'Data Display',
        href: '/blocks/data-table-advanced'
    },
    {
        id: 'calendar-widget',
        title: 'Calendar Widget',
        description: 'Interactive calendar with event management',
        category: 'Data Display',
        href: '/blocks/calendar-widget'
    },

    // Marketing Category
    {
        id: 'reviews-testimonials',
        title: 'Reviews & Testimonials',
        description: 'Customer reviews and testimonials with rating system',
        category: 'Marketing',
        href: '/blocks/reviews-testimonials'
    },
    {
        id: 'pricing-table',
        title: 'Pricing Table',
        description: 'Pricing plans with feature comparison',
        category: 'Marketing',
        href: '/blocks/pricing-table'
    },
    {
        id: 'hero-section',
        title: 'Hero Section',
        description: 'Landing page hero with call-to-action',
        category: 'Marketing',
        href: '/blocks/hero-section'
    }
]

const categories = [
    'Featured',
    'Sidebar',
    'Authentication',
    'Login',
    'Calendar',
    'Dashboard',
    'Charts',
    'Themes',
    'Colors'
]

export default function BlocksPage() {
    const [activeCategory, setActiveCategory] = useState('Featured')

    // Filter blocks based on active category
    const getFilteredBlocks = () => {
        if (activeCategory === 'Featured') {
            return featuredBlocks
        }
        if (activeCategory === 'Browse all blocks') {
            return allBlocks
        }

        // Map category names to actual categories in the data
        const categoryMap: { [key: string]: string } = {
            'Sidebar': 'Navigation',
            'Authentication': 'Authentication',
            'Login': 'Authentication',
            'Calendar': 'Data Display',
            'Dashboard': 'Dashboard',
            'Charts': 'Dashboard',
            'Themes': 'Marketing',
            'Colors': 'Marketing'
        }

        const mappedCategory = categoryMap[activeCategory]
        return allBlocks.filter(block => block.category === mappedCategory)
    }

    const filteredBlocks = getFilteredBlocks()

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <header className="border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Building Blocks for the Web
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Clean, modern building blocks. Copy and paste into your apps.<br />
                            Works with all React frameworks. Open Source. Free forever.
                        </p>
                    </div>
                </div>
            </header>

            {/* Category Navigation */}
            <nav className="border-b border-gray-200 dark:border-gray-700" aria-label="Block categories">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-8 overflow-x-auto" role="tablist">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${category === activeCategory
                                    ? 'border-gray-900 text-gray-900 dark:border-white dark:text-white'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                                    }`}
                                role="tab"
                                aria-selected={category === activeCategory}
                            >
                                {category}
                            </button>
                        ))}
                        <button
                            onClick={() => setActiveCategory('Browse all blocks')}
                            className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${activeCategory === 'Browse all blocks'
                                ? 'border-gray-900 text-gray-900 dark:border-white dark:text-white'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                                }`}
                            role="tab"
                            aria-selected={activeCategory === 'Browse all blocks'}
                        >
                            Browse all blocks
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Dynamic Content Based on Active Category */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                                {activeCategory === 'Browse all blocks' ? 'All blocks' : activeCategory}
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {filteredBlocks.length} {filteredBlocks.length === 1 ? 'block' : 'blocks'}
                            </p>
                        </div>
                        {activeCategory === 'Featured' && (
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                                <div className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                                <div className="w-1.5 h-1.5 bg-gray-800 dark:bg-gray-300 rounded-full"></div>
                                <div className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                            </div>
                        )}
                    </div>

                    <div className={`grid gap-6 ${activeCategory === 'Featured'
                        ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                        }`}>
                        {filteredBlocks.map((block) => {
                            const SVGComponent = getBlockSVG(block.category.toLowerCase())
                            return (
                                <Link key={block.id} href={block.href} aria-label={`View ${block.title} block`}>
                                    <Card className="group hover:shadow-md transition-all duration-200 cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 overflow-hidden bg-white dark:bg-gray-800">
                                        <div className="aspect-[16/10] bg-gray-50 dark:bg-gray-700 p-8 flex items-center justify-center border-b border-gray-100 dark:border-gray-600" role="img" aria-label={`${block.category} block preview`}>
                                            <SVGComponent className="w-full h-full opacity-50 text-gray-500 dark:text-gray-400" />
                                        </div>
                                        <div className="p-4">
                                            <div className="flex items-start justify-between mb-2">
                                                <h3 className="font-medium text-sm text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors leading-tight">
                                                    {block.title}
                                                </h3>
                                                <Badge variant="secondary" className="text-xs ml-2 flex-shrink-0 px-2 py-1" position={undefined} aria-label={`Category: ${block.category}`}>
                                                    {block.category}
                                                </Badge>
                                            </div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                                                {block.description}
                                            </p>
                                            {activeCategory === 'Featured' && (
                                                <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-600 flex items-center justify-between">
                                                    <div className="flex items-center space-x-1">
                                                        <div className="w-2 h-2 bg-gray-300 dark:bg-gray-500 rounded-full"></div>
                                                        <div className="w-2 h-2 bg-gray-300 dark:bg-gray-500 rounded-full"></div>
                                                        <div className="w-2 h-2 bg-gray-900 dark:bg-gray-300 rounded-full"></div>
                                                    </div>
                                                    <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                                                        Featured
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </Card>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </main>
        </div>
    )
}
