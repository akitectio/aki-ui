'use client';

import React from 'react';
import BadgeOriginal from '../../components/Badge/Badge';
import ButtonOriginal from '../../components/Button/Button';
import CardOriginal from '../../components/Card/Card';
import type { BadgeProps } from '../../components/Badge';
import type { ButtonProps } from '../../components/Button';
import type { CardProps } from '../../components/Card';

/**
 * Client-side wrapper for Aki UI Badge component
 * Safe to use in Next.js App Router client components
 */
export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
    // @ts-ignore - Handle ref forwarding issues
    return React.createElement(BadgeOriginal, { ...props });
});
Badge.displayName = 'NextBadge';

/**
 * Client-side wrapper for Aki UI Button component
 * Safe to use in Next.js App Router client components
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    // @ts-ignore - Handle ref forwarding issues
    return React.createElement(ButtonOriginal, { ...props, ref });
});
Button.displayName = 'NextButton';

/**
 * Client-side wrapper for Aki UI Card component
 * Safe to use in Next.js App Router client components
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
    // @ts-ignore - Handle ref forwarding issues
    return React.createElement(CardOriginal, { ...props });
});
Card.displayName = 'NextCard';
