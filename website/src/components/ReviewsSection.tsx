'use client'

import { useState } from 'react'
import { Card, Avatar, Badge } from '@/components/client-components'
import { StarIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline'

interface Review {
    id: number
    name: string
    role: string
    company: string
    avatar: string
    rating: number
    review: string
    date: string
    verified: boolean
}

const sampleReviews: Review[] = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Senior Frontend Developer",
        company: "TechCorp",
        avatar: "/avatars/sarah.jpg",
        rating: 5,
        review: "Aki UI has completely transformed our development workflow. The components are beautifully designed and incredibly easy to integrate. Our team productivity has increased by 40%!",
        date: "2024-12-15",
        verified: true
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Product Manager",
        company: "StartupXYZ",
        avatar: "/avatars/michael.jpg",
        rating: 5,
        review: "The design system is fantastic. We were able to build our entire dashboard in just 2 weeks using Aki UI components. The documentation is clear and comprehensive.",
        date: "2024-12-10",
        verified: true
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "UI/UX Designer",
        company: "DesignStudio",
        avatar: "/avatars/emily.jpg",
        rating: 5,
        review: "As a designer, I love how flexible and customizable these components are. The theming system is intuitive, and the components look great out of the box.",
        date: "2024-12-08",
        verified: true
    },
    {
        id: 4,
        name: "David Kim",
        role: "CTO",
        company: "InnovateLabs",
        avatar: "/avatars/david.jpg",
        rating: 4,
        review: "Great component library with excellent TypeScript support. The performance is outstanding and the bundle size is reasonable. Highly recommend for React projects.",
        date: "2024-12-05",
        verified: true
    },
    {
        id: 5,
        name: "Lisa Thompson",
        role: "Full Stack Developer",
        company: "WebSolutions",
        avatar: "/avatars/lisa.jpg",
        rating: 5,
        review: "The accessibility features are top-notch. All components follow WCAG guidelines, which is crucial for our enterprise clients. Excellent work!",
        date: "2024-12-01",
        verified: true
    },
    {
        id: 6,
        name: "Alex Martinez",
        role: "Lead Developer",
        company: "AppBuilder",
        avatar: "/avatars/alex.jpg",
        rating: 5,
        review: "The component variety is impressive. From simple buttons to complex data tables, everything is well-crafted. The dark mode support is seamless.",
        date: "2024-11-28",
        verified: true
    }
]

function RatingStars({ rating }: { rating: number }) {
    return (
        <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}>
                    {star <= rating ? (
                        <StarIcon className="w-4 h-4 text-yellow-400" />
                    ) : (
                        <StarOutlineIcon className="w-4 h-4 text-gray-300" />
                    )}
                </span>
            ))}
        </div>
    )
}

export function ReviewsSection() {
    const [filter, setFilter] = useState<'all' | 'verified'>('all')

    const filteredReviews = filter === 'verified'
        ? sampleReviews.filter(review => review.verified)
        : sampleReviews

    const averageRating = sampleReviews.reduce((sum, review) => sum + review.rating, 0) / sampleReviews.length
    const totalReviews = sampleReviews.length

    return (
        <div className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        What Developers Say
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                        Trusted by thousands of developers worldwide
                    </p>

                    {/* Rating Summary */}
                    <div className="flex items-center justify-center space-x-4 mb-8">
                        <div className="flex items-center space-x-2">
                            <RatingStars rating={Math.round(averageRating)} />
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                {averageRating.toFixed(1)}
                            </span>
                        </div>
                        <div className="text-gray-500 dark:text-gray-400">
                            ({totalReviews} reviews)
                        </div>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === 'all'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                        >
                            All Reviews
                        </button>
                        <button
                            onClick={() => setFilter('verified')}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === 'verified'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                        >
                            Verified Only
                        </button>
                    </div>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredReviews.map((review) => (
                        <Card key={review.id} className="p-6 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-start space-x-4 mb-4">
                                <Avatar
                                    src={review.avatar}
                                    fallback={review.name.charAt(0)}
                                    size="md"
                                    borderColor={undefined}
                                    status={undefined}
                                />
                                <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <h3 className="font-semibold text-gray-900 dark:text-white">
                                            {review.name}
                                        </h3>
                                        {review.verified && (
                                            <Badge variant="success" position={undefined}>
                                                Verified
                                            </Badge>
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {review.role} at {review.company}
                                    </p>
                                    <div className="flex items-center justify-between mt-2">
                                        <RatingStars rating={review.rating} />
                                        <span className="text-xs text-gray-500 dark:text-gray-400">
                                            {new Date(review.date).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                "{review.review}"
                            </blockquote>
                        </Card>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Join thousands of satisfied developers
                    </p>
                    <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Get Started Today
                    </button>
                </div>
            </div>
        </div>
    )
}
