import React from 'react';

export interface SkeletonProps {
    /**
     * The type of skeleton to render
     * @default 'text'
     */
    variant?: 'text' | 'circular' | 'rectangular' | 'rounded';

    /**
     * Width of the skeleton
     * Can be a number (in pixels) or a string (CSS value)
     * @default '100%'
     */
    width?: number | string;

    /**
     * Height of the skeleton
     * Can be a number (in pixels) or a string (CSS value)
     * @default depends on variant (text: 16px, others: 40px)
     */
    height?: number | string;

    /**
     * Number of lines to render for text variant
     * @default 1
     */
    lines?: number;

    /**
     * Gap between text lines
     * @default '0.5rem'
     */
    gap?: string;

    /**
     * Whether to animate the skeleton
     * @default true
     */
    animation?: boolean | 'pulse' | 'wave';

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * Whether the last line should be shorter than the others
     * @default false
     */
    shortenLastLine?: boolean;

    /**
     * The border radius for the rounded variant
     * @default '0.25rem'
     */
    borderRadius?: string;

    /**
     * Color of the skeleton
     * @default '#e2e8f0' (tailwind gray-200)
     */
    color?: string;

    /**
     * Additional inline styles
     */
    style?: React.CSSProperties;
}

const Skeleton: React.FC<SkeletonProps> = ({
    variant = 'text',
    width = '100%',
    height,
    lines = 1,
    gap = '0.5rem',
    animation = true,
    className = '',
    shortenLastLine = false,
    borderRadius = '0.25rem',
    color = '#e2e8f0',
    style,
    ...rest
}) => {
    // Determine height based on variant if not provided
    const defaultHeight = variant === 'text' ? '1rem' : '40px';
    const actualHeight = height !== undefined ? height : defaultHeight;

    // Prepare inline styles for the skeleton
    const skeletonStyle: React.CSSProperties = {
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof actualHeight === 'number' ? `${actualHeight}px` : actualHeight,
        backgroundColor: color,
        ...style,
    };

    // Add border radius based on variant
    if (variant === 'circular') {
        skeletonStyle.borderRadius = '50%';
    } else if (variant === 'rounded') {
        skeletonStyle.borderRadius = borderRadius;
    } else if (variant === 'rectangular') {
        skeletonStyle.borderRadius = '0';
    } else {
        // Text variant
        skeletonStyle.borderRadius = '4px';
    }

    // Animation classes
    const animationClass = animation
        ? animation === 'wave'
            ? 'animate-skeleton-wave'
            : 'animate-pulse' // Default to pulse animation
        : '';

    // Base skeleton classes
    const baseClasses = `
        inline-block
        ${animationClass}
        ${className}
    `;

    // Render multiple lines for text variant
    if (variant === 'text' && lines > 1) {
        return (
            <div className="flex flex-col" style={{ gap }}>
                {Array.from({ length: lines }).map((_, index) => {
                    // Apply shorter width to last line if specified
                    const isLastLine = index === lines - 1;
                    const lineWidth = isLastLine && shortenLastLine
                        ? typeof width === 'number'
                            ? width * 0.7 // 70% of original width
                            : `calc(${width} * 0.7)`
                        : width;

                    return (
                        <div
                            key={index}
                            className={baseClasses}
                            style={{
                                ...skeletonStyle,
                                width: typeof lineWidth === 'number' ? `${lineWidth}px` : lineWidth,
                            }}
                            {...rest}
                        />
                    );
                })}
            </div>
        );
    }

    // Single skeleton element (for all variants)
    return (
        <div
            className={baseClasses}
            style={skeletonStyle}
            {...rest}
        />
    );
};

// Container component for building skeleton layouts
export interface SkeletonContainerProps {
    /**
     * Content of the skeleton container
     */
    children: React.ReactNode;

    /**
     * Whether the skeletons are loading
     * @default true
     */
    loading?: boolean;

    /**
     * Content to show when not loading
     */
    fallback?: React.ReactNode;

    /**
     * Additional CSS classes
     */
    className?: string;
}

export const SkeletonContainer: React.FC<SkeletonContainerProps> = ({
    children,
    loading = true,
    fallback,
    className = '',
}) => {
    // If not loading, show the fallback content
    if (!loading) {
        return <>{fallback}</>;
    }

    // When loading, show the skeleton children
    return (
        <div className={`skeleton-container ${className}`}>
            {children}
        </div>
    );
};

Skeleton.displayName = 'Skeleton';
SkeletonContainer.displayName = 'SkeletonContainer';

export default Skeleton;
