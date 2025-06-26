import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton, SkeletonContainer, Card, Badge } from '../lib/components';
import { useState, useEffect } from 'react';

const meta: Meta<typeof Skeleton> = {
    title: 'Components/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select', options: ['text', 'circular', 'rectangular', 'rounded'] },
            description: 'Type of skeleton to render',
        },
        width: {
            control: 'text',
            description: 'Width of the skeleton (number in px or CSS value)',
        },
        height: {
            control: 'text',
            description: 'Height of the skeleton (number in px or CSS value)',
        },
        lines: {
            control: { type: 'number', min: 1, max: 10 },
            description: 'Number of lines for text variant',
        },
        animation: {
            control: { type: 'select', options: [true, false, 'pulse', 'wave'] },
            description: 'Animation type',
        },
        shortenLastLine: {
            control: 'boolean',
            description: 'Whether to make the last line shorter',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Text: Story = {
    args: {
        variant: 'text',
        width: '100%',
        height: '1rem',
        animation: 'pulse',
    },
};

export const MultiLine: Story = {
    args: {
        variant: 'text',
        width: '100%',
        lines: 3,
        gap: '0.75rem',
        shortenLastLine: true,
    },
};

export const Circular: Story = {
    args: {
        variant: 'circular',
        width: 60,
        height: 60,
    },
};

export const Rectangular: Story = {
    args: {
        variant: 'rectangular',
        width: 200,
        height: 100,
    },
};

export const Rounded: Story = {
    args: {
        variant: 'rounded',
        width: 200,
        height: 100,
        borderRadius: '0.5rem',
    },
};

export const NoAnimation: Story = {
    args: {
        variant: 'text',
        width: '80%',
        lines: 3,
        animation: false,
    },
};

export const CustomColor: Story = {
    args: {
        variant: 'text',
        width: '80%',
        lines: 2,
        color: '#d1d5db', // gray-300
    },
};

export const SkeletonCard = () => {
    return (
        <Card className="w-80">
            <div className="p-4">
                <Skeleton variant="rounded" height={150} />
                <div className="mt-4">
                    <Skeleton variant="text" width="70%" height="1.5rem" />
                </div>
                <div className="mt-2">
                    <Skeleton variant="text" lines={3} />
                </div>
                <div className="mt-4 flex gap-2">
                    <Skeleton variant="rounded" width={80} height={30} />
                    <Skeleton variant="rounded" width={80} height={30} />
                </div>
            </div>
        </Card>
    );
};

export const ProfileSkeleton = () => {
    return (
        <div className="w-80 p-4 border rounded-lg">
            <div className="flex items-center gap-4">
                <Skeleton variant="circular" width={64} height={64} />
                <div className="flex-1">
                    <Skeleton variant="text" height="1.25rem" />
                    <div className="mt-2">
                        <Skeleton variant="text" width="70%" />
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <Skeleton variant="text" lines={4} />
            </div>
            <div className="mt-4 flex justify-between">
                <Skeleton variant="rounded" width={100} height={30} />
                <Skeleton variant="rounded" width={100} height={30} />
            </div>
        </div>
    );
};

export const LoadingState = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for 3 seconds
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-80">
            <button
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => setLoading(true)}
            >
                Reload
            </button>

            <SkeletonContainer
                loading={loading}
                fallback={
                    <Card className="p-4">
                        <h2 className="text-xl font-bold">Product Details</h2>
                        <div className="mt-2">
                            <p>Awesome product with amazing features!</p>
                            <p className="mt-2">
                                This product will revolutionize the way you work and play.
                            </p>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                            <Badge variant="success">In Stock</Badge>
                            <span className="font-bold">$99.99</span>
                        </div>
                    </Card>
                }
            >
                <Card className="p-4">
                    <Skeleton variant="text" width="60%" height="1.5rem" />
                    <div className="mt-2">
                        <Skeleton variant="text" lines={3} />
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                        <Skeleton variant="rounded" width={80} height={24} />
                        <Skeleton variant="text" width={60} />
                    </div>
                </Card>
            </SkeletonContainer>
        </div>
    );
};

export const TableSkeleton = () => {
    return (
        <div className="w-full max-w-2xl border rounded-lg overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-100 p-4">
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
            </div>
            {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="grid grid-cols-4 border-t p-4">
                    <Skeleton variant="text" width="80%" />
                    <Skeleton variant="text" width="60%" />
                    <Skeleton variant="text" width="70%" />
                    <Skeleton variant="text" width="40%" />
                </div>
            ))}
        </div>
    );
};

export const FormSkeleton = () => {
    return (
        <div className="w-full max-w-md p-6 border rounded-lg">
            <Skeleton variant="text" width="40%" height="1.5rem" />
            <div className="mt-6 space-y-4">
                <div>
                    <Skeleton variant="text" width="30%" height="1rem" />
                    <Skeleton variant="rectangular" height={40} className="mt-1" />
                </div>
                <div>
                    <Skeleton variant="text" width="30%" height="1rem" />
                    <Skeleton variant="rectangular" height={40} className="mt-1" />
                </div>
                <div>
                    <Skeleton variant="text" width="30%" height="1rem" />
                    <Skeleton variant="rectangular" height={80} className="mt-1" />
                </div>
                <Skeleton variant="rounded" width="40%" height={40} className="mt-4" />
            </div>
        </div>
    );
};

export const ComplexLayoutSkeleton = () => {
    return (
        <div className="w-full max-w-4xl">
            <div className="flex justify-between items-center mb-6">
                <Skeleton variant="text" width={200} height="2rem" />
                <div className="flex gap-2">
                    <Skeleton variant="rounded" width={100} height={36} />
                    <Skeleton variant="rounded" width={100} height={36} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                    <Skeleton variant="rectangular" height={300} />
                    <div className="mt-4">
                        <Skeleton variant="text" height="1.5rem" />
                        <Skeleton variant="text" lines={4} className="mt-2" />
                    </div>
                </div>

                <div className="space-y-4">
                    <Skeleton variant="rounded" height={150} />
                    <Skeleton variant="text" width="80%" />
                    <Skeleton variant="text" width="60%" />
                    <Skeleton variant="rounded" height={40} />
                </div>
            </div>

            <div className="mt-8">
                <Skeleton variant="text" width={150} height="1.5rem" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <div key={idx}>
                            <Skeleton variant="rectangular" height={120} />
                            <Skeleton variant="text" className="mt-2" />
                            <Skeleton variant="text" width="60%" className="mt-1" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
