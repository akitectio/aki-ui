'use client'

import BlockTemplate from '@/components/BlockTemplate'

export default function CheckoutFormPage() {
    return (
        <BlockTemplate
            title="Checkout Form"
            description="A comprehensive e-commerce checkout form with payment integration, shipping options, and order summary. Perfect for online stores and subscription services."
            category="E-commerce"
            features={[
                'Multi-step checkout process',
                'Payment method selection',
                'Shipping address forms',
                'Order summary with totals',
                'Coupon/discount codes',
                'Guest checkout option',
                'Form validation',
                'Mobile-optimized design'
            ]}
            useCases={[
                'E-commerce websites',
                'Subscription services',
                'Event ticketing',
                'Course purchases',
                'Software licensing',
                'Digital downloads',
                'Service bookings',
                'Donation platforms'
            ]}
        />
    )
}
