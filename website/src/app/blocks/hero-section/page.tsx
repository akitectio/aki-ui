'use client'

import { useState } from 'react'
import {
    PlayIcon,
    StarIcon,
    CheckCircleIcon,
    ArrowRightIcon,
    SparklesIcon,
    BoltIcon,
    ShieldCheckIcon,
    GlobeAltIcon
} from '@heroicons/react/24/outline'
import { Card } from '@akitectio/aki-ui'
import { CodeBlock } from '@/components/CodeBlock'
import { Tabs } from '@/components/Tabs'
import BlockHeader from '@/components/BlockHeader'
import DevicePreviewWrapper from '@/components/DevicePreviewWrapper'

// Hero Section Component
function HeroSection({ selectedDevice = 'desktop' }: { selectedDevice?: 'mobile' | 'tablet' | 'desktop' | 'fullscreen' }) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const [selectedPlan, setSelectedPlan] = useState('pro')

    const isMobile = selectedDevice === 'mobile'
    const isTablet = selectedDevice === 'tablet'

    const features = [
        { icon: BoltIcon, title: 'Lightning Fast', description: 'Built for speed and performance' },
        { icon: ShieldCheckIcon, title: 'Secure by Default', description: 'Enterprise-grade security' },
        { icon: GlobeAltIcon, title: 'Global Scale', description: 'Worldwide CDN coverage' },
        { icon: SparklesIcon, title: 'Modern Design', description: 'Beautiful, responsive UI' }
    ]

    const testimonials = [
        { name: 'Sarah Johnson', role: 'CTO at TechCorp', content: 'This platform transformed our workflow completely!', rating: 5 },
        { name: 'Michael Chen', role: 'Founder of StartupLab', content: 'The best investment we\'ve made for our business.', rating: 5 },
        { name: 'Emily Rodriguez', role: 'Designer at Creative Co', content: 'Intuitive design and powerful features.', rating: 5 }
    ]

    return (
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 min-h-screen">
            {/* Main Hero Section */}
            <div className="relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 dark:opacity-5">
                    <div className="absolute inset-0 bg-grid-black/[0.2] dark:bg-grid-white/[0.2]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-100/20 to-purple-100/20 dark:from-transparent dark:via-blue-900/20 dark:to-purple-900/20" />
                </div>

                <div className="relative px-6 py-20">
                    <div className="max-w-7xl mx-auto">
                        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'} gap-12 items-center`}>
                            {/* Left Content */}
                            <div className="space-y-8">
                                {/* Badge */}
                                <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                                    <SparklesIcon className="h-4 w-4 mr-2" />
                                    New: AI-Powered Features Available
                                </div>

                                {/* Main Headline */}
                                <div className="space-y-4">
                                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                                        Build Amazing
                                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            {' '}Products
                                        </span>
                                        <br />
                                        10x Faster
                                    </h1>
                                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                                        The most powerful platform for modern teams to design, develop, and deploy
                                        applications at scale. Get started today and see the difference.
                                    </p>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
                                        Start Free Trial
                                        <ArrowRightIcon className="ml-2 h-5 w-5" />
                                    </button>
                                    <button
                                        onClick={() => setIsVideoPlaying(true)}
                                        className="inline-flex items-center px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-semibold text-lg"
                                    >
                                        <PlayIcon className="mr-2 h-5 w-5" />
                                        Watch Demo
                                    </button>
                                </div>

                                {/* Social Proof */}
                                <div className="flex items-center space-x-8">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex -space-x-2">
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white dark:border-gray-800" />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            Join 10,000+ users
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                        <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                                            4.9/5 rating
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Content - Dashboard Preview */}
                            {!isMobile && (
                                <div className="relative">
                                    <div className="relative z-10">
                                        <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl">
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                        Project Dashboard
                                                    </h3>
                                                    <div className="flex space-x-2">
                                                        <div className="w-3 h-3 bg-red-400 rounded-full" />
                                                        <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                                                        <div className="w-3 h-3 bg-green-400 rounded-full" />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                                            127
                                                        </div>
                                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                                            Active Projects
                                                        </div>
                                                    </div>
                                                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                                                            98%
                                                        </div>
                                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                                            Success Rate
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                                            Monthly Progress
                                                        </span>
                                                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                                                            85%
                                                        </span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>

                                    {/* Background decorations */}
                                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl" />
                                    <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-20 blur-xl" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 bg-white/50 dark:bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Why Choose Our Platform?
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Everything you need to build, deploy, and scale your applications
                        </p>
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-4'} gap-8`}>
                        {features.map((feature, index) => (
                            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full mb-4">
                                    <feature.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {feature.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Loved by Thousands
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            See what our customers are saying about us
                        </p>
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'} gap-8`}>
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="p-6">
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <StarIcon key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    "{testimonial.content}"
                                </p>
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Final CTA Section */}
            <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Transform Your Workflow?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Join thousands of teams already building amazing products with our platform
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg">
                            Start Free Trial
                            <ArrowRightIcon className="ml-2 h-5 w-5" />
                        </button>
                        <button className="inline-flex items-center px-8 py-4 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {isVideoPlaying && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setIsVideoPlaying(false)}
                >
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-4xl w-full">
                        <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                                <PlayIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                                <p className="text-gray-600 dark:text-gray-300">
                                    Video demo would be embedded here
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default function HeroSectionPage() {
    const code = `import { useState } from 'react'
import {
    PlayIcon,
    StarIcon,
    ArrowRightIcon,
    SparklesIcon,
    BoltIcon,
    ShieldCheckIcon,
    GlobeAltIcon
} from '@heroicons/react/24/outline'
import { Card } from '@akitectio/aki-ui'

function HeroSection() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)

    const features = [
        { icon: BoltIcon, title: 'Lightning Fast', description: 'Built for speed and performance' },
        { icon: ShieldCheckIcon, title: 'Secure by Default', description: 'Enterprise-grade security' },
        { icon: GlobeAltIcon, title: 'Global Scale', description: 'Worldwide CDN coverage' },
        { icon: SparklesIcon, title: 'Modern Design', description: 'Beautiful, responsive UI' }
    ]

    const testimonials = [
        { name: 'Sarah Johnson', role: 'CTO at TechCorp', content: 'This platform transformed our workflow!', rating: 5 },
        { name: 'Michael Chen', role: 'Founder of StartupLab', content: 'The best investment we\'ve made.', rating: 5 },
        { name: 'Emily Rodriguez', role: 'Designer at Creative Co', content: 'Intuitive and powerful.', rating: 5 }
    ]

    return (
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
            {/* Main Hero Section */}
            <div className="relative overflow-hidden">
                <div className="relative px-6 py-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div className="space-y-8">
                                {/* Badge */}
                                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                    <SparklesIcon className="h-4 w-4 mr-2" />
                                    New: AI-Powered Features Available
                                </div>

                                {/* Main Headline */}
                                <div className="space-y-4">
                                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                        Build Amazing
                                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            {' '}Products
                                        </span>
                                        <br />
                                        10x Faster
                                    </h1>
                                    <p className="text-xl text-gray-600 max-w-lg">
                                        The most powerful platform for modern teams to design, develop, and deploy 
                                        applications at scale. Get started today and see the difference.
                                    </p>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
                                        Start Free Trial
                                        <ArrowRightIcon className="ml-2 h-5 w-5" />
                                    </button>
                                    <button 
                                        onClick={() => setIsVideoPlaying(true)}
                                        className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg"
                                    >
                                        <PlayIcon className="mr-2 h-5 w-5" />
                                        Watch Demo
                                    </button>
                                </div>

                                {/* Social Proof */}
                                <div className="flex items-center space-x-8">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex -space-x-2">
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white" />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-600">
                                            Join 10,000+ users
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                        <span className="text-sm text-gray-600 ml-2">
                                            4.9/5 rating
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Content - Dashboard Preview */}
                            <div className="relative">
                                <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold text-gray-900">
                                                Project Dashboard
                                            </h3>
                                            <div className="flex space-x-2">
                                                <div className="w-3 h-3 bg-red-400 rounded-full" />
                                                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                                                <div className="w-3 h-3 bg-green-400 rounded-full" />
                                            </div>
                                        </div>
                                        
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <div className="text-2xl font-bold text-blue-600">127</div>
                                                <div className="text-sm text-gray-600">Active Projects</div>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg">
                                                <div className="text-2xl font-bold text-green-600">98%</div>
                                                <div className="text-sm text-gray-600">Success Rate</div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-gray-600">Monthly Progress</span>
                                                <span className="text-sm font-medium text-gray-900">85%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 bg-white/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Why Choose Our Platform?
                        </h2>
                        <p className="text-xl text-gray-600">
                            Everything you need to build, deploy, and scale your applications
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                                    <feature.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Loved by Thousands
                        </h2>
                        <p className="text-xl text-gray-600">
                            See what our customers are saying about us
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="p-6">
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <StarIcon key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4">
                                    "{testimonial.content}"
                                </p>
                                <div>
                                    <p className="font-semibold text-gray-900">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Final CTA Section */}
            <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Transform Your Workflow?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Join thousands of teams already building amazing products
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg">
                            Start Free Trial
                            <ArrowRightIcon className="ml-2 h-5 w-5" />
                        </button>
                        <button className="inline-flex items-center px-8 py-4 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}`

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <BlockHeader title="Hero Section" />

            {/* Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Hero Section
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        A stunning landing page hero section with compelling headlines, call-to-action buttons, and background graphics.
                        Perfect for marketing websites and product launches.
                    </p>
                </div>

                {/* Tabs for Preview and Code */}
                <Tabs
                    persistKey="hero-section"
                    useUrlHash={true}
                    tabs={[
                        {
                            id: 'preview',
                            label: 'Preview',
                            content: (
                                <DevicePreviewWrapper>
                                    {(selectedDevice) => (
                                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
                                                <HeroSection selectedDevice={selectedDevice} />
                                            </div>
                                        </div>
                                    )}
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

                {/* Features */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Features
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <li>• Compelling headline and subtext</li>
                            <li>• Primary and secondary CTAs</li>
                            <li>• Interactive demo video modal</li>
                            <li>• Social proof indicators</li>
                            <li>• Feature highlights grid</li>
                            <li>• Customer testimonials</li>
                            <li>• Gradient backgrounds</li>
                            <li>• Responsive design</li>
                            <li>• Dark mode support</li>
                            <li>• Animation effects</li>
                            <li>• Dashboard preview</li>
                            <li>• Mobile-optimized layout</li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Use Cases
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <li>• Product landing pages</li>
                            <li>• Company homepages</li>
                            <li>• Marketing campaigns</li>
                            <li>• App launch pages</li>
                            <li>• Service promotions</li>
                            <li>• Event announcements</li>
                            <li>• Course sales pages</li>
                            <li>• Portfolio showcases</li>
                            <li>• SaaS product pages</li>
                            <li>• Startup websites</li>
                            <li>• Conference sites</li>
                            <li>• Agency portfolios</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}
