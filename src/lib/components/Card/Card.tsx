import React from 'react';

export interface CardProps {
    /**
     * The content of the card
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes to apply to the card
     */
    className?: string;

    /**
     * Inline style object for the card
     */
    style?: React.CSSProperties;

    /**
     * Makes the card take the full width of its container
     * @default false
     */
    fullWidth?: boolean;

    /**
     * Adds a border to the card
     * @default true
     */
    bordered?: boolean;

    /**
     * Adds a shadow to the card
     * @default false
     */
    elevated?: boolean;

    /**
     * Makes the card have a hover effect
     * @default false
     */
    hoverable?: boolean;

    /**
     * The background color of the card
     * @default 'white'
     */
    bgColor?: string;

    /**
     * The border radius of the card
     * @default 'md'
     */
    borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl';

    /**
     * Align the content of the card
     * @default 'left'
     */
    align?: 'left' | 'center' | 'right';

    /**
     * Element to render as the card
     * @default 'div'
     */
    as?: React.ElementType;

    /**
     * onClick handler for the card
     */
    onClick?: () => void;
}

export interface CardHeaderProps {
    /**
     * The content of the card header
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes to apply to the card header
     */
    className?: string;

    /**
     * Makes the header have a border
     * @default true
     */
    bordered?: boolean;

    /**
     * Makes the header have a background color
     * @default false
     */
    filled?: boolean;
}

export interface CardBodyProps {
    /**
     * The content of the card body
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes to apply to the card body
     */
    className?: string;

    /**
     * The padding of the card body
     * @default 'md'
     */
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface CardFooterProps {
    /**
     * The content of the card footer
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes to apply to the card footer
     */
    className?: string;

    /**
     * Makes the footer have a border
     * @default true
     */
    bordered?: boolean;

    /**
     * Makes the footer have a background color
     * @default false
     */
    filled?: boolean;
}

export interface CardImageProps {
    /**
     * The src attribute for the image
     */
    src: string;

    /**
     * The alt attribute for the image
     */
    alt: string;

    /**
     * The position of the image
     * @default 'top'
     */
    position?: 'top' | 'bottom';

    /**
     * The object-fit property for the image
     * @default 'cover'
     */
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';

    /**
     * The height of the image
     */
    height?: string | number;

    /**
     * Additional CSS classes to apply to the image
     */
    className?: string;

    /**
     * Makes the image overlay with content
     * @default false
     */
    overlay?: boolean;
}

/**
 * Card component for displaying content in a box
 */
const Card: React.FC<CardProps> & {
    Header: React.FC<CardHeaderProps>;
    Body: React.FC<CardBodyProps>;
    Footer: React.FC<CardFooterProps>;
    Image: React.FC<CardImageProps>;
} = ({
    children,
    className = '',
    fullWidth = false,
    bordered = true,
    elevated = false,
    hoverable = false,
    bgColor = 'white',
    borderRadius = 'md',
    align = 'left',
    as: Component = 'div',
    onClick,
    style,
}) => {
        // Base classes
        const baseClasses = 'overflow-hidden';

        // Width classes
        const widthClasses = fullWidth ? 'w-full' : '';

        // Border classes
        const borderClasses = bordered ? 'border border-gray-200' : '';

        // Shadow classes
        const shadowClasses = elevated ? 'shadow-md' : '';

        // Hover classes
        const hoverClasses = hoverable ? 'transition-shadow duration-300 hover:shadow-lg' : '';

        // Border radius classes
        const radiusClasses = {
            none: 'rounded-none',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            xl: 'rounded-xl'
        };

        // Text alignment classes
        const alignClasses = {
            left: 'text-left',
            center: 'text-center',
            right: 'text-right'
        };

        // Background color
        const bgClasses = bgColor === 'white' ? 'bg-white' : `bg-${bgColor}`;

        // Clickable classes
        const clickableClasses = onClick ? 'cursor-pointer' : '';

        // Combine all classes
        const cardClasses = [
            baseClasses,
            widthClasses,
            borderClasses,
            shadowClasses,
            hoverClasses,
            radiusClasses[borderRadius],
            alignClasses[align],
            bgClasses,
            clickableClasses,
            className
        ].join(' ');

        return (
            <Component className={cardClasses} onClick={onClick} style={style}>
                {children}
            </Component>
        );
    };

/**
 * Card header component
 */
const CardHeader: React.FC<CardHeaderProps> = ({
    children,
    className = '',
    bordered = true,
    filled = false,
}) => {
    // Base classes
    const baseClasses = 'px-6 py-4';

    // Border classes
    const borderClasses = bordered ? 'border-b border-gray-200' : '';

    // Background classes
    const bgClasses = filled ? 'bg-gray-50' : '';

    // Combine all classes
    const headerClasses = [
        baseClasses,
        borderClasses,
        bgClasses,
        className
    ].join(' ');

    return (
        <div className={headerClasses}>
            {children}
        </div>
    );
};

/**
 * Card body component
 */
const CardBody: React.FC<CardBodyProps> = ({
    children,
    className = '',
    padding = 'md',
}) => {
    // Padding classes
    const paddingClasses = {
        none: 'p-0',
        sm: 'p-3',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10'
    };

    // Combine all classes
    const bodyClasses = [
        paddingClasses[padding],
        className
    ].join(' ');

    return (
        <div className={bodyClasses}>
            {children}
        </div>
    );
};

/**
 * Card footer component
 */
const CardFooter: React.FC<CardFooterProps> = ({
    children,
    className = '',
    bordered = true,
    filled = false,
}) => {
    // Base classes
    const baseClasses = 'px-6 py-4';

    // Border classes
    const borderClasses = bordered ? 'border-t border-gray-200' : '';

    // Background classes
    const bgClasses = filled ? 'bg-gray-50' : '';

    // Combine all classes
    const footerClasses = [
        baseClasses,
        borderClasses,
        bgClasses,
        className
    ].join(' ');

    return (
        <div className={footerClasses}>
            {children}
        </div>
    );
};

/**
 * Card image component
 */
const CardImage: React.FC<CardImageProps> = ({
    src,
    alt,
    position = 'top',
    objectFit = 'cover',
    height,
    className = '',
    overlay = false,
}) => {
    // Base classes
    const baseClasses = 'w-full';

    // Object fit classes
    const fitClasses = `object-${objectFit}`;

    // Height classes
    const heightClasses = height ? `h-${height}` : 'h-48';

    // Position classes
    const orderClasses = position === 'top' ? 'order-first' : 'order-last';

    // Overlay classes
    const overlayClasses = overlay ? 'absolute inset-0' : '';

    // Parent container classes
    const containerClasses = overlay ? 'relative' : '';

    // Combine all classes
    const imageClasses = [
        baseClasses,
        fitClasses,
        heightClasses,
        orderClasses,
        overlayClasses,
        className
    ].join(' ');

    return (
        <div className={containerClasses}>
            <img src={src} alt={alt} className={imageClasses} />
            {overlay && <div className="absolute inset-0 bg-black bg-opacity-40" />}
        </div>
    );
};

// Assign subcomponents
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card;
