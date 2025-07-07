'use client'

import { useState } from 'react'
import { CheckIcon, XMarkIcon, StarIcon } from '@heroicons/react/24/outline'
import { Card } from '@akitectio/aki-ui'
import { CodeBlock } from '@/components/CodeBlock'
import { Tabs } from '@/components/Tabs'
import BlockHeader from '@/components/BlockHeader'
import DevicePreviewWrapper from '@/components/DevicePreviewWrapper'

// Pricing data
const pricingPlans = [
    {
        name: 'Starter',
        description: 'Perfect for individuals and small projects',
        monthlyPrice: 9,
        annualPrice: 90,
        popular: false,
        features: [
            { name: 'Up to 5 projects', included: true },
            { name: '10GB storage', included: true },
            { name: 'Basic support', included: true },
            { name: 'API access', included: true },
            { name: 'Advanced analytics', included: false },
            { name: 'Priority support', included: false },
            { name: 'Custom integrations', included: false },
            { name: 'White-label options', included: false }
        ],
        buttonText: 'Get Started',
        buttonVariant: 'outline' as const
    },
    {
        name: 'Professional',
        description: 'Ideal for growing teams and businesses',
        monthlyPrice: 29,
        annualPrice: 290,
        popular: true,
        features: [
            { name: 'Up to 25 projects', included: true },
            { name: '100GB storage', included: true },
            { name: 'Priority support', included: true },
            { name: 'API access', included: true },
            { name: 'Advanced analytics', included: true },
            { name: 'Team collaboration', included: true },
            { name: 'Custom integrations', included: false },
            { name: 'White-label options', included: false }
        ],
        buttonText: 'Start Free Trial',
        buttonVariant: 'default' as const
    },
    {
        name: 'Enterprise',
        description: 'For large organizations with custom needs',
        monthlyPrice: 99,
        annualPrice: 990,
        popular: false,
        features: [
            { name: 'Unlimited projects', included: true },
            { name: 'Unlimited storage', included: true },
            { name: '24/7 dedicated support', included: true },
            { name: 'Full API access', included: true },
            { name: 'Advanced analytics', included: true },
            { name: 'Team collaboration', included: true },
            { name: 'Custom integrations', included: true },
            { name: 'White-label options', included: true }
        ],
        buttonText: 'Contact Sales',
        buttonVariant: 'outline' as const
    }
]

// Pricing Table Component
function PricingTable({ selectedDevice = 'desktop' }: { selectedDevice?: 'mobile' | 'tablet' | 'desktop' | 'fullscreen' }) {
    const [isAnnual, setIsAnnual] = useState(false)

    const isMobile = selectedDevice === 'mobile'

    return (
        <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Choose Your Plan
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                        Simple, transparent pricing that grows with you. Try any plan free for 30 days.
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center space-x-4 mb-8">
                        <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isAnnual ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                                }`}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                            />
                        </button>
                        <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                            Annual
                        </span>
                        {isAnnual && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                Save 20%
                            </span>
                        )}
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-3'} gap-8 max-w-5xl mx-auto`}>
                    {pricingPlans.map((plan, index) => (
                        <Card key={index} className={`relative p-8 ${plan.popular ? 'border-2 border-blue-500 shadow-xl' : ''}`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
                                        <StarIcon className="h-4 w-4 mr-1" />
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    {plan.description}
                                </p>

                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-400 ml-2">
                                        / {isAnnual ? 'year' : 'month'}
                                    </span>
                                    {isAnnual && (
                                        <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                                            ${((plan.monthlyPrice * 12) - plan.annualPrice)} saved annually
                                        </div>
                                    )}
                                </div>

                                <button
                                    className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${plan.popular
                                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                                        : plan.buttonVariant === 'outline'
                                            ? 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                                            : 'bg-blue-600 text-white hover:bg-blue-700'
                                        }`}
                                >
                                    {plan.buttonText}
                                </button>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                                    What's included:
                                </h4>
                                {plan.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center">
                                        {feature.included ? (
                                            <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                        ) : (
                                            <XMarkIcon className="h-5 w-5 text-gray-300 dark:text-gray-600 mr-3 flex-shrink-0" />
                                        )}
                                        <span className={`text-sm ${feature.included
                                            ? 'text-gray-900 dark:text-white'
                                            : 'text-gray-500 dark:text-gray-400'
                                            }`}>
                                            {feature.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        All plans include a 30-day free trial. No credit card required.
                    </p>
                    <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                        <span>✓ Cancel anytime</span>
                        <span>✓ 24/7 support</span>
                        <span>✓ Secure payments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function PricingTablePage() {
    const code = `import { useState } from 'react'
import { CheckIcon, XMarkIcon, StarIcon } from '@heroicons/react/24/outline'
import { Card, Button } from '@akitectio/aki-ui'

const pricingPlans = [
    {
        name: 'Starter',
        description: 'Perfect for individuals and small projects',
        monthlyPrice: 9,
        annualPrice: 90,
        popular: false,
        features: [
            { name: 'Up to 5 projects', included: true },
            { name: '10GB storage', included: true },
            { name: 'Basic support', included: true },
            { name: 'API access', included: true },
            { name: 'Advanced analytics', included: false },
            { name: 'Priority support', included: false }
        ],
        buttonText: 'Get Started',
        buttonVariant: 'outline'
    },
    {
        name: 'Professional',
        description: 'Ideal for growing teams and businesses',
        monthlyPrice: 29,
        annualPrice: 290,
        popular: true,
        features: [
            { name: 'Up to 25 projects', included: true },
            { name: '100GB storage', included: true },
            { name: 'Priority support', included: true },
            { name: 'API access', included: true },
            { name: 'Advanced analytics', included: true },
            { name: 'Team collaboration', included: true }
        ],
        buttonText: 'Start Free Trial',
        buttonVariant: 'default'
    },
    {
        name: 'Enterprise',
        description: 'For large organizations with custom needs',
        monthlyPrice: 99,
        annualPrice: 990,
        popular: false,
        features: [
            { name: 'Unlimited projects', included: true },
            { name: 'Unlimited storage', included: true },
            { name: '24/7 dedicated support', included: true },
            { name: 'Full API access', included: true },
            { name: 'Advanced analytics', included: true },
            { name: 'Custom integrations', included: true }
        ],
        buttonText: 'Contact Sales',
        buttonVariant: 'outline'
    }
]

function PricingTable() {
    const [isAnnual, setIsAnnual] = useState(false)
    
    return (
        <div className="bg-gray-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Choose Your Plan
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Simple, transparent pricing that grows with you. Try any plan free for 30 days.
                    </p>
                    
                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center space-x-4 mb-8">
                        <span className={\`text-sm font-medium \${!isAnnual ? 'text-gray-900' : 'text-gray-500'}\`}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className={\`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 \${
                                isAnnual ? 'bg-blue-600' : 'bg-gray-200'
                            }\`}
                        >
                            <span
                                className={\`inline-block h-4 w-4 transform rounded-full bg-white transition-transform \${
                                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                                }\`}
                            />
                        </button>
                        <span className={\`text-sm font-medium \${isAnnual ? 'text-gray-900' : 'text-gray-500'}\`}>
                            Annual
                        </span>
                        {isAnnual && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Save 20%
                            </span>
                        )}
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <Card key={index} className={\`relative p-8 \${plan.popular ? 'border-2 border-blue-500 shadow-xl' : ''}\`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
                                        <StarIcon className="h-4 w-4 mr-1" />
                                        Most Popular
                                    </span>
                                </div>
                            )}
                            
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {plan.description}
                                </p>
                                
                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-gray-900">
                                        $\{isAnnual ? plan.annualPrice : plan.monthlyPrice}
                                    </span>
                                    <span className="text-gray-600 ml-2">
                                        / \{isAnnual ? 'year' : 'month'}
                                    </span>
                                    {isAnnual && (
                                        <div className="text-sm text-green-600 mt-1">
                                            $\{((plan.monthlyPrice * 12) - plan.annualPrice)} saved annually
                                        </div>
                                    )}
                                </div>
                                
                                <Button 
                                    variant={plan.buttonVariant}
                                    className={\`w-full \${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}\`}
                                >
                                    {plan.buttonText}
                                </Button>
                            </div>
                            
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900 mb-4">
                                    What's included:
                                </h4>
                                {plan.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center">
                                        {feature.included ? (
                                            <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                        ) : (
                                            <XMarkIcon className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                                        )}
                                        <span className={\`text-sm \${
                                            feature.included 
                                                ? 'text-gray-900' 
                                                : 'text-gray-500'
                                        }\`}>
                                            {feature.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
                
                {/* Additional Info */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">
                        All plans include a 30-day free trial. No credit card required.
                    </p>
                    <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                        <span>✓ Cancel anytime</span>
                        <span>✓ 24/7 support</span>
                        <span>✓ Secure payments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}`

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <BlockHeader title="Pricing Table" />

            {/* Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Pricing Table
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        An elegant pricing table with multiple plans, feature comparisons, and call-to-action buttons.
                        Perfect for SaaS products and subscription services with monthly/annual billing options.
                    </p>
                </div>

                {/* Tabs for Preview and Code */}
                <Tabs
                    persistKey="pricing-table"
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
                                                <PricingTable selectedDevice={selectedDevice} />
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
                            <li>• Multiple pricing tiers</li>
                            <li>• Feature comparison matrix</li>
                            <li>• Popular plan highlighting</li>
                            <li>• Monthly/annual billing toggle</li>
                            <li>• Savings calculation display</li>
                            <li>• Call-to-action buttons</li>
                            <li>• Responsive design</li>
                            <li>• Dark mode support</li>
                            <li>• Feature inclusion indicators</li>
                            <li>• Trust signals (trial, support)</li>
                            <li>• Professional styling</li>
                            <li>• Mobile-optimized layout</li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Use Cases
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <li>• SaaS subscription plans</li>
                            <li>• Software licensing</li>
                            <li>• Service packages</li>
                            <li>• Membership tiers</li>
                            <li>• Hosting plans</li>
                            <li>• Course pricing</li>
                            <li>• Consulting packages</li>
                            <li>• Product variants</li>
                            <li>• Digital product tiers</li>
                            <li>• API pricing plans</li>
                            <li>• App store listings</li>
                            <li>• E-commerce packages</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}
