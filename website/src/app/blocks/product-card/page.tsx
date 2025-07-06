'use client'

import { useState } from 'react'
import { StarIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import { Tabs } from '@/components/Tabs'
import DevicePreviewWrapper from '@/components/DevicePreviewWrapper'
import BlockHeader from '@/components/BlockHeader'

interface ProductCardProps {
    selectedDevice: 'mobile' | 'tablet' | 'desktop' | 'fullscreen'
}

function ProductCard({ selectedDevice }: ProductCardProps) {
    const [likedProducts, setLikedProducts] = useState<number[]>([])

    const isMobile = selectedDevice === 'mobile'
    const isTablet = selectedDevice === 'tablet'
    const isDesktop = selectedDevice === 'desktop' || selectedDevice === 'fullscreen'

    const products = [
        {
            id: 1,
            name: 'Wireless Earbuds Pro',
            price: 199.99,
            originalPrice: 249.99,
            image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            rating: 4.5,
            reviews: 234,
            discount: 20,
            badge: 'Best Seller',
            features: ['Noise Cancellation', 'Wireless Charging', '24H Battery']
        },
        {
            id: 2,
            name: 'Smart Watch Series 5',
            price: 399.99,
            originalPrice: 499.99,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            rating: 4.8,
            reviews: 156,
            discount: 15,
            badge: 'New',
            features: ['GPS Tracking', 'Heart Rate Monitor', 'Water Resistant']
        },
        {
            id: 3,
            name: 'Portable Bluetooth Speaker',
            price: 129.99,
            originalPrice: 159.99,
            image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            rating: 4.3,
            reviews: 89,
            discount: 10,
            badge: 'Hot Deal',
            features: ['360° Sound', 'Waterproof', '12H Playtime']
        },
        {
            id: 4,
            name: 'Wireless Charging Pad',
            price: 49.99,
            originalPrice: 69.99,
            image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            rating: 4.2,
            reviews: 67,
            discount: 25,
            badge: 'Sale',
            features: ['Fast Charging', 'LED Indicator', 'Universal Compatibility']
        },
        {
            id: 5,
            name: 'USB-C Hub 7-in-1',
            price: 79.99,
            originalPrice: 99.99,
            image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            rating: 4.6,
            reviews: 123,
            discount: 20,
            badge: 'Featured',
            features: ['7 Ports', 'Data Transfer', 'Compact Design']
        },
        {
            id: 6,
            name: 'Laptop Stand Adjustable',
            price: 89.99,
            originalPrice: 109.99,
            image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            rating: 4.4,
            reviews: 91,
            discount: 18,
            badge: 'Ergonomic',
            features: ['Height Adjustable', 'Aluminum Build', 'Heat Dissipation']
        }
    ]

    const toggleLike = (productId: number) => {
        setLikedProducts(prev =>
            prev.includes(productId)
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        )
    }

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="relative">
                {i < Math.floor(rating) ? (
                    <StarIconSolid className="w-4 h-4 text-yellow-400" />
                ) : i === Math.floor(rating) && rating % 1 !== 0 ? (
                    <div className="relative">
                        <StarIcon className="w-4 h-4 text-gray-300" />
                        <div className="absolute inset-0 overflow-hidden" style={{ width: `${(rating % 1) * 100}%` }}>
                            <StarIconSolid className="w-4 h-4 text-yellow-400" />
                        </div>
                    </div>
                ) : (
                    <StarIcon className="w-4 h-4 text-gray-300" />
                )}
            </div>
        ))
    }

    const gridClass = `
        grid gap-6
        ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'}
    `

    const cardClass = `
        bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105
        ${isMobile ? 'w-full' : ''}
    `

    const imageClass = `
        w-full object-cover
        ${isMobile ? 'h-48' : isTablet ? 'h-52' : 'h-56'}
    `

    const contentClass = `
        p-4 ${isMobile ? 'space-y-3' : 'space-y-4'}
    `

    const titleClass = `
        font-semibold text-gray-900
        ${isMobile ? 'text-lg' : isTablet ? 'text-xl' : 'text-xl'}
    `

    const priceClass = `
        text-2xl font-bold text-green-600
        ${isMobile ? 'text-xl' : ''}
    `

    const buttonClass = `
        w-full py-3 px-4 rounded-lg font-medium transition-colors
        ${isMobile ? 'py-2 text-sm' : ''}
    `

    return (
        <div className="min-h-screen bg-gray-50">
            <div className={`${isMobile ? 'p-4' : isTablet ? 'p-6' : 'p-8'}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className={`font-bold text-gray-900 mb-4 ${isMobile ? 'text-2xl' : isTablet ? 'text-3xl' : 'text-4xl'
                            }`}>
                            Featured Products
                        </h1>
                        <p className={`text-gray-600 ${isMobile ? 'text-base' : isTablet ? 'text-lg' : 'text-xl'
                            }`}>
                            Discover our best-selling tech accessories
                        </p>
                    </div>

                    <div className={gridClass}>
                        {products.map((product) => (
                            <div key={product.id} className={cardClass}>
                                {/* Product Image */}
                                <div className="relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className={imageClass}
                                    />
                                    {/* Badge */}
                                    <div className="absolute top-3 left-3">
                                        <span className={`
                                            px-2 py-1 text-xs font-semibold rounded-full
                                            ${product.badge === 'Best Seller' ? 'bg-blue-100 text-blue-800' : ''}
                                            ${product.badge === 'New' ? 'bg-green-100 text-green-800' : ''}
                                            ${product.badge === 'Hot Deal' ? 'bg-red-100 text-red-800' : ''}
                                            ${product.badge === 'Sale' ? 'bg-orange-100 text-orange-800' : ''}
                                            ${product.badge === 'Featured' ? 'bg-purple-100 text-purple-800' : ''}
                                            ${product.badge === 'Ergonomic' ? 'bg-teal-100 text-teal-800' : ''}
                                        `}>
                                            {product.badge}
                                        </span>
                                    </div>
                                    {/* Discount */}
                                    <div className="absolute top-3 right-3">
                                        <span className="bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded-full">
                                            -{product.discount}%
                                        </span>
                                    </div>
                                    {/* Heart Icon */}
                                    <button
                                        onClick={() => toggleLike(product.id)}
                                        className={`
                                            absolute bottom-3 right-3 p-2 rounded-full transition-colors
                                            ${likedProducts.includes(product.id)
                                                ? 'bg-red-500 text-white'
                                                : 'bg-white text-gray-500 hover:bg-gray-100'
                                            }
                                        `}
                                    >
                                        <HeartIcon className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Product Details */}
                                <div className={contentClass}>
                                    <h3 className={titleClass}>
                                        {product.name}
                                    </h3>

                                    {/* Rating */}
                                    <div className="flex items-center space-x-2">
                                        <div className="flex space-x-1">
                                            {renderStars(product.rating)}
                                        </div>
                                        <span className="text-sm text-gray-500">
                                            {product.rating} ({product.reviews} reviews)
                                        </span>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-1">
                                        {product.features.map((feature, index) => (
                                            <div key={index} className="flex items-center space-x-2">
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-center space-x-2">
                                        <span className={priceClass}>
                                            ${product.price}
                                        </span>
                                        <span className="text-sm text-gray-500 line-through">
                                            ${product.originalPrice}
                                        </span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-3">
                                        <button className={`
                                            ${buttonClass}
                                            bg-blue-600 text-white hover:bg-blue-700 flex-1
                                        `}>
                                            <ShoppingCartIcon className="w-5 h-5 inline mr-2" />
                                            Add to Cart
                                        </button>
                                        <button className={`
                                            ${buttonClass}
                                            bg-gray-200 text-gray-800 hover:bg-gray-300 px-4
                                        `}>
                                            Quick View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function ProductCardPage() {
    const tabs = [
        {
            id: 'preview',
            label: 'Preview',
            content: (
                <DevicePreviewWrapper>
                    {(selectedDevice: any) => (
                        <ProductCard selectedDevice={selectedDevice} />
                    )}
                </DevicePreviewWrapper>
            )
        },
        {
            id: 'details',
            label: 'Details',
            content: (
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Card Features</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <h4 className="font-medium text-gray-800">Visual Elements</h4>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• High-quality product images</li>
                                    <li>• Discount badges and labels</li>
                                    <li>• Interactive heart/like button</li>
                                    <li>• Star rating system</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-medium text-gray-800">Interactive Features</h4>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Add to cart functionality</li>
                                    <li>• Quick view option</li>
                                    <li>• Wishlist toggle</li>
                                    <li>• Hover effects and animations</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Responsive Design</h3>
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-sm text-blue-800">
                                This product card adapts seamlessly across all device sizes:
                            </p>
                            <ul className="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• <strong>Mobile:</strong> Single column layout with optimized touch targets</li>
                                <li>• <strong>Tablet:</strong> Two-column grid with balanced spacing</li>
                                <li>• <strong>Desktop:</strong> Three-column grid with enhanced hover effects</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <BlockHeader title="Product Card" />

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Responsive product showcase cards with pricing, ratings, and interactive elements. Perfect for e-commerce applications.
                        </p>
                    </div>

                    <Tabs tabs={tabs} persistKey="product-card" defaultTab="preview" className="w-full" />
                </div>
            </div>
        </div>
    )
}
