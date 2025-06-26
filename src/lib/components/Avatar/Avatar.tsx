import React from 'react';

export interface AvatarProps {
    /**
     * The source URL of the avatar image
     */
    src?: string;

    /**
     * Alt text for the avatar image
     */
    alt?: string;

    /**
     * Fallback content to display when image is not available (usually initials)
     */
    fallback?: string;

    /**
     * Size of the avatar
     * @default 'md'
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

    /**
     * Shape of the avatar
     * @default 'circle'
     */
    shape?: 'circle' | 'square' | 'rounded';

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * Border color
     */
    borderColor?: string;

    /**
     * Status indicator (online, away, offline)
     */
    status?: 'online' | 'away' | 'offline' | 'busy';
}

const Avatar: React.FC<AvatarProps> = ({
    src,
    alt = '',
    fallback,
    size = 'md',
    shape = 'circle',
    className = '',
    borderColor,
    status
}) => {
    const [imageError, setImageError] = React.useState<boolean>(false);

    const sizeClasses = {
        xs: 'h-6 w-6 text-xs',
        sm: 'h-8 w-8 text-sm',
        md: 'h-10 w-10 text-base',
        lg: 'h-12 w-12 text-lg',
        xl: 'h-16 w-16 text-xl',
    };

    const shapeClasses = {
        circle: 'rounded-full',
        square: 'rounded-none',
        rounded: 'rounded-md',
    };

    const statusClasses = {
        online: 'bg-green-500',
        away: 'bg-yellow-500',
        offline: 'bg-gray-500',
        busy: 'bg-red-500',
    };

    const getInitials = (text?: string): string => {
        if (!text) return '';
        return text
            .split(' ')
            .map(part => part[0])
            .join('')
            .toUpperCase()
            .substring(0, 2);
    };

    const baseClasses = `flex items-center justify-center overflow-hidden ${sizeClasses[size]} ${shapeClasses[shape]} ${borderColor ? `border-2 border-${borderColor}` : ''} ${className}`;

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className="relative inline-flex">
            {!src || imageError ? (
                <div
                    className={`${baseClasses} bg-gray-200 text-gray-600`}
                    aria-label={alt || fallback}
                >
                    {getInitials(fallback || alt)}
                </div>
            ) : (
                <img
                    src={src}
                    alt={alt}
                    className={baseClasses}
                    onError={handleImageError}
                />
            )}

            {status && (
                <span
                    className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ${statusClasses[status]} ring-2 ring-white`}
                    aria-label={`Status: ${status}`}
                ></span>
            )}
        </div>
    );
};

export default Avatar;
