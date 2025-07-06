'use client'

import { ReviewsSection } from '@/components/ReviewsSection'
import { CodeBlock } from '@/components/CodeBlock'
import { Tabs } from '@/components/Tabs'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import DevicePreviewWrapper from '@/components/DevicePreviewWrapper'

export default function ReviewsBlockPage() {
  const code = `'use client'

import { useState } from 'react'
import { Card, Avatar, Badge } from '@akitectio/aki-ui'
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
  // ... more reviews
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
              className={\`px-6 py-2 rounded-full font-medium transition-all duration-300 \${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }\`}
            >
              All Reviews
            </button>
            <button
              onClick={() => setFilter('verified')}
              className={\`px-6 py-2 rounded-full font-medium transition-all duration-300 \${
                filter === 'verified'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }\`}
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
}`

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/blocks"
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                <ArrowLeftIcon className="w-5 h-5" />
                <span>Back to Blocks</span>
              </Link>
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                Reviews & Testimonials
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Copy Code
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Reviews & Testimonials Section
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            A beautiful testimonials section with rating system, filtering, and responsive design. Perfect for showcasing customer feedback and building trust.
          </p>
        </div>

        {/* Tabs for Preview and Code */}
        <Tabs
          persistKey="reviews-testimonials"
          tabs={[
            {
              id: 'preview',
              label: 'Preview',
              content: (
                <DevicePreviewWrapper>
                  <ReviewsSection />
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
              <li>• Star rating system</li>
              <li>• Verified badges</li>
              <li>• Filter by verification status</li>
              <li>• Responsive grid layout</li>
              <li>• Dark mode support</li>
              <li>• Hover animations</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              Use Cases
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Product testimonials</li>
              <li>• Service reviews</li>
              <li>• Team feedback</li>
              <li>• Customer stories</li>
              <li>• App store reviews</li>
              <li>• Course testimonials</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
