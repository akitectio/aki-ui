'use client'

import { useState } from 'react'
import {
    MagnifyingGlassIcon,
    Bars3Icon,
    XMarkIcon,
    ChevronDownIcon,
    BellIcon,
    UserIcon,
    Cog6ToothIcon,
    ArrowRightOnRectangleIcon,
    HomeIcon,
    ShoppingCartIcon,
    CubeIcon,
    UsersIcon,
    ChartBarIcon,
    ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'
import { Button, Input, Card } from '@akitectio/aki-ui'
import { CodeBlock } from '@/components/CodeBlock'
import { Tabs } from '@/components/Tabs'
import BlockHeader from '@/components/BlockHeader'
import DevicePreviewWrapper from '@/components/DevicePreviewWrapper'

// Navbar Component
function NavbarWithSearch({ selectedDevice = 'desktop' }: { selectedDevice?: 'mobile' | 'tablet' | 'desktop' | 'fullscreen' }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState<string[]>([])

    const isMobile = selectedDevice === 'mobile'
    const isTablet = selectedDevice === 'tablet'
    const isDesktop = selectedDevice === 'desktop' || selectedDevice === 'fullscreen'

    const navigationItems = [
        { name: 'Home', icon: HomeIcon, href: '#' },
        { name: 'Products', icon: CubeIcon, href: '#' },
        { name: 'Analytics', icon: ChartBarIcon, href: '#' },
        { name: 'Customers', icon: UsersIcon, href: '#' },
        { name: 'Messages', icon: ChatBubbleLeftRightIcon, href: '#' },
        { name: 'Orders', icon: ShoppingCartIcon, href: '#' },
    ]

    const mockSearchResults = [
        'Dashboard Analytics',
        'Product Inventory',
        'Customer Management',
        'Order History',
        'Revenue Reports',
        'User Settings'
    ]

    const handleSearch = (query: string) => {
        setSearchQuery(query)
        if (query.trim()) {
            const filtered = mockSearchResults.filter(item =>
                item.toLowerCase().includes(query.toLowerCase())
            )
            setSearchResults(filtered.slice(0, 5))
        } else {
            setSearchResults([])
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Main Navbar */}
            <nav className={`bg-white border-b shadow-sm relative ${isMobile ? 'px-4' : isTablet ? 'px-6' : 'px-8'}`}>
                <div className={`flex items-center justify-between ${isMobile ? 'h-14' : 'h-16'}`}>
                    {/* Left Side - Mobile Menu Button and Logo */}
                    <div className="flex items-center">
                        {/* Mobile Menu Button */}
                        {(isMobile || isTablet) && (
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 mr-2"
                            >
                                {isMenuOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
                            </Button>
                        )}

                        {/* Logo */}
                        <div className={`font-bold text-gray-900 dark:text-white ${isMobile ? 'text-lg' : 'text-xl'}`}>
                            AkiUI
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    {isDesktop && (
                        <div className="hidden lg:flex items-center space-x-6">
                            {navigationItems.slice(0, 4).map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    <item.icon className="w-4 h-4" />
                                    <span>{item.name}</span>
                                </a>
                            ))}
                        </div>
                    )}

                    {/* Search Bar (Hidden on mobile) */}
                    {!isMobile && (
                        <div className="relative flex-1 max-w-md mx-6">
                            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => handleSearch(e.target.value)}
                                className="pl-10 pr-4 py-2 w-full"
                            />

                            {/* Search Results Dropdown */}
                            {searchResults.length > 0 && (
                                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg mt-1 z-50">
                                    {searchResults.map((result, index) => (
                                        <div
                                            key={index}
                                            className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm"
                                            onClick={() => {
                                                setSearchQuery(result)
                                                setSearchResults([])
                                            }}
                                        >
                                            {result}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-2">
                        {/* Mobile Search Button */}
                        {isMobile && (
                            <Button variant="ghost" size="sm" className="p-2">
                                <MagnifyingGlassIcon className="w-5 h-5" />
                            </Button>
                        )}

                        {/* Notifications */}
                        <Button variant="ghost" size="sm" className="p-2 relative">
                            <BellIcon className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                3
                            </span>
                        </Button>

                        {/* User Menu */}
                        <div className="relative">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="flex items-center space-x-2"
                                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                            >
                                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                    <UserIcon className="w-4 h-4" />
                                </div>
                                {!isMobile && (
                                    <>
                                        <span className="text-sm text-gray-700">John Doe</span>
                                        <ChevronDownIcon className="w-4 h-4" />
                                    </>
                                )}
                            </Button>

                            {isUserMenuOpen && (
                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                                    <div className="py-1">
                                        <div className="px-4 py-2 text-sm font-medium text-gray-900">My Account</div>
                                        <div className="h-px bg-gray-200 my-1" />
                                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                            <UserIcon className="mr-2 h-4 w-4" />
                                            Profile
                                        </a>
                                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                            <Cog6ToothIcon className="mr-2 h-4 w-4" />
                                            Settings
                                        </a>
                                        <div className="h-px bg-gray-200 my-1" />
                                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                            <ArrowRightOnRectangleIcon className="mr-2 h-4 w-4" />
                                            Log out
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet Menu */}
                {isMenuOpen && (isMobile || isTablet) && (
                    <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg z-50 px-4 py-4">
                        {/* Mobile Search */}
                        {isMobile && (
                            <div className="mb-4">
                                <div className="relative">
                                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <Input
                                        type="text"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={(e) => handleSearch(e.target.value)}
                                        className="pl-10 pr-4 py-2 w-full"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Navigation Links */}
                        <div className="space-y-2">
                            {navigationItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span>{item.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Demo Content */}
            <div className={`${isMobile ? 'p-4' : isTablet ? 'p-6' : 'p-8'}`}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center py-12">
                        <h1 className={`font-bold text-gray-900 dark:text-white mb-4 ${isMobile ? 'text-2xl' : isTablet ? 'text-3xl' : 'text-4xl'}`}>
                            Welcome to AkiUI
                        </h1>
                        <p className={`text-gray-600 dark:text-gray-300 ${isMobile ? 'text-base' : isTablet ? 'text-lg' : 'text-xl'}`}>
                            Experience our responsive navigation bar with integrated search functionality
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'}`}>
                        {['Search Integration', 'User Management', 'Responsive Design'].map((feature) => (
                            <Card key={feature} className="p-6">
                                <h3 className={`font-semibold text-gray-900 dark:text-white mb-2 ${isMobile ? 'text-lg' : 'text-xl'}`}>
                                    {feature}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function NavbarWithSearchPage() {
    const code = `import { useState } from 'react'
import {
    MagnifyingGlassIcon,
    Bars3Icon,
    XMarkIcon,
    ChevronDownIcon,
    BellIcon,
    UserIcon,
    Cog6ToothIcon,
    ArrowRightOnRectangleIcon,
    HomeIcon,
    ShoppingCartIcon,
    CubeIcon,
    UsersIcon,
    ChartBarIcon,
    ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'
import { Button, Input, Card } from '@akitectio/aki-ui'

function NavbarWithSearch({ selectedDevice = 'desktop' }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const isMobile = selectedDevice === 'mobile'
    const isTablet = selectedDevice === 'tablet'
    const isDesktop = selectedDevice === 'desktop' || selectedDevice === 'fullscreen'

    const navigationItems = [
        { name: 'Home', icon: HomeIcon, href: '#' },
        { name: 'Products', icon: CubeIcon, href: '#' },
        { name: 'Analytics', icon: ChartBarIcon, href: '#' },
        { name: 'Customers', icon: UsersIcon, href: '#' },
        { name: 'Messages', icon: ChatBubbleLeftRightIcon, href: '#' },
        { name: 'Orders', icon: ShoppingCartIcon, href: '#' },
    ]

    const mockSearchResults = [
        'Dashboard Analytics',
        'Product Inventory',
        'Customer Management',
        'Order History',
        'Revenue Reports',
        'User Settings'
    ]

    const handleSearch = (query) => {
        setSearchQuery(query)
        if (query.trim()) {
            const filtered = mockSearchResults.filter(item =>
                item.toLowerCase().includes(query.toLowerCase())
            )
            setSearchResults(filtered.slice(0, 5))
        } else {
            setSearchResults([])
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Main Navbar */}
            <nav className="bg-white border-b shadow-sm relative px-4 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Left Side - Mobile Menu Button and Logo */}
                    <div className="flex items-center">
                        {/* Mobile Menu Button */}
                        {(isMobile || isTablet) && (
                            <Button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 mr-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                            >
                                {isMenuOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
                            </Button>
                        )}

                        {/* Logo */}
                        <div className="font-bold text-gray-900 text-xl">
                            AkiUI
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    {isDesktop && (
                        <div className="hidden lg:flex items-center space-x-6">
                            {navigationItems.slice(0, 4).map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    <item.icon className="w-4 h-4" />
                                    <span>{item.name}</span>
                                </a>
                            ))}
                        </div>
                    )}

                    {/* Search Bar (Hidden on mobile) */}
                    {!isMobile && (
                        <div className="relative flex-1 max-w-md mx-6">
                            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => handleSearch(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            
                            {/* Search Results Dropdown */}
                            {searchResults.length > 0 && (
                                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg mt-1 z-50">
                                    {searchResults.map((result, index) => (
                                        <div
                                            key={index}
                                            className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm"
                                            onClick={() => {
                                                setSearchQuery(result)
                                                setSearchResults([])
                                            }}
                                        >
                                            {result}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-2">
                        {/* Mobile Search Button */}
                        {isMobile && (
                            <Button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                                <MagnifyingGlassIcon className="w-5 h-5" />
                            </Button>
                        )}

                        {/* Notifications */}
                        <Button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 relative">
                            <BellIcon className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                3
                            </span>
                        </Button>

                        {/* User Menu */}
                        <div className="relative">
                            <Button
                                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                className="flex items-center space-x-2 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                            >
                                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                    <UserIcon className="w-4 h-4" />
                                </div>
                                {!isMobile && (
                                    <>
                                        <span className="text-sm text-gray-700">John Doe</span>
                                        <ChevronDownIcon className="w-4 h-4" />
                                    </>
                                )}
                            </Button>
                            
                            {isUserMenuOpen && (
                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                                    <div className="py-1">
                                        <div className="px-4 py-2 text-sm font-medium text-gray-900">My Account</div>
                                        <div className="h-px bg-gray-200 my-1" />
                                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                            <UserIcon className="mr-2 h-4 w-4" />
                                            Profile
                                        </a>
                                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                            <Cog6ToothIcon className="mr-2 h-4 w-4" />
                                            Settings
                                        </a>
                                        <div className="h-px bg-gray-200 my-1" />
                                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                            <ArrowRightOnRectangleIcon className="mr-2 h-4 w-4" />
                                            Log out
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet Menu */}
                {isMenuOpen && (isMobile || isTablet) && (
                    <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg z-50 px-4 py-4">
                        {/* Mobile Search */}
                        {isMobile && (
                            <div className="mb-4">
                                <div className="relative">
                                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <Input
                                        type="text"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={(e) => handleSearch(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Navigation Links */}
                        <div className="space-y-2">
                            {navigationItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span>{item.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Demo Content */}
            <div className="p-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center py-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to AkiUI</h1>
                        <p className="text-xl text-gray-600">Experience our responsive navigation bar with integrated search functionality</p>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {['Search Integration', 'User Management', 'Responsive Design'].map((feature) => (
                            <div key={feature} className="bg-white rounded-lg border shadow-sm p-6">
                                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}`

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <BlockHeader title="Navbar with Search" />

            {/* Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Navigation Bar with Search
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        A modern, responsive navigation bar with integrated search functionality, user menu, and mobile-friendly design. Perfect for content-rich websites and applications.
                    </p>
                </div>

                {/* Tabs for Preview and Code */}
                <Tabs
                    persistKey="navbar-with-search"
                    tabs={[
                        {
                            id: 'preview',
                            label: 'Preview',
                            content: (
                                <DevicePreviewWrapper>
                                    {(selectedDevice) => <NavbarWithSearch selectedDevice={selectedDevice} />}
                                </DevicePreviewWrapper>
                            )
                        },
                        {
                            id: 'code',
                            label: 'Code',
                            content: (
                                <div className="space-y-6">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Implementation
                                    </h3>
                                    <CodeBlock code={code} language="tsx" />
                                </div>
                            )
                        }
                    ]}
                    defaultTab="preview"
                />

                {/* Features and Use Cases */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Features
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <li>• Responsive design for mobile, tablet, and desktop</li>
                            <li>• Integrated search with dropdown results</li>
                            <li>• User menu with profile actions</li>
                            <li>• Notification badge with count</li>
                            <li>• Collapsible mobile menu</li>
                            <li>• Dark mode support</li>
                            <li>• Accessible navigation</li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Use Cases
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <li>• Content management systems</li>
                            <li>• E-commerce platforms</li>
                            <li>• Admin dashboards</li>
                            <li>• Blog and news sites</li>
                            <li>• SaaS applications</li>
                            <li>• Corporate websites</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}
