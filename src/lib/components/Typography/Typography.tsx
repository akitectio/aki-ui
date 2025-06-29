import React from 'react';

/**
 * Typography variants available
 */
type TypographyVariant = 
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' 
  | 'body1' | 'body2' | 'subtitle1' | 'subtitle2' 
  | 'caption' | 'overline' | 'button';

/**
 * Typography alignment options
 */
type TypographyAlign = 'left' | 'center' | 'right' | 'justify' | 'inherit';

/**
 * Typography color variants
 */
type TypographyColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'muted' | 'inherit';

/**
 * Typography font weight options
 */
type TypographyWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'inherit';

/**
 * Typography component props interface
 */
interface TypographyProps {
  /**
   * Typography variant
   */
  variant?: TypographyVariant;
  /**
   * HTML element to render
   */
  component?: keyof JSX.IntrinsicElements;
  /**
   * Text alignment
   */
  align?: TypographyAlign;
  /**
   * Text color
   */
  color?: TypographyColor;
  /**
   * Font weight
   */
  weight?: TypographyWeight;
  /**
   * Whether the text should not wrap
   */
  noWrap?: boolean;
  /**
   * Whether to show ellipsis for overflow text
   */
  truncate?: boolean;
  /**
   * Whether the text is italic
   */
  italic?: boolean;
  /**
   * Whether the text is underlined
   */
  underline?: boolean;
  /**
   * Whether to transform text to uppercase
   */
  uppercase?: boolean;
  /**
   * Whether to transform text to lowercase
   */
  lowercase?: boolean;
  /**
   * Whether to capitalize the first letter of each word
   */
  capitalize?: boolean;
  /**
   * Custom className
   */
  className?: string;
  /**
   * Content to render
   */
  children: React.ReactNode;
}

/**
 * Get classes based on the variant
 */
const getVariantClasses = (variant: TypographyVariant): string => {
  const variants = {
    h1: 'text-4xl lg:text-5xl font-bold leading-tight',
    h2: 'text-3xl lg:text-4xl font-bold leading-tight',
    h3: 'text-2xl lg:text-3xl font-semibold leading-snug',
    h4: 'text-xl lg:text-2xl font-semibold leading-snug',
    h5: 'text-lg lg:text-xl font-medium leading-normal',
    h6: 'text-base lg:text-lg font-medium leading-normal',
    body1: 'text-base leading-relaxed',
    body2: 'text-sm leading-relaxed',
    subtitle1: 'text-lg font-medium leading-normal',
    subtitle2: 'text-base font-medium leading-normal',
    caption: 'text-xs leading-normal',
    overline: 'text-xs font-medium uppercase tracking-wide leading-normal',
    button: 'text-sm font-medium leading-none'
  };
  
  return variants[variant];
};

/**
 * Get default HTML component based on variant
 */
const getDefaultComponent = (variant: TypographyVariant): keyof JSX.IntrinsicElements => {
  const componentMap = {
    h1: 'h1',
    h2: 'h2', 
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body1: 'p',
    body2: 'p',
    subtitle1: 'p',
    subtitle2: 'p',
    caption: 'span',
    overline: 'span',
    button: 'span'
  } as const;
  
  return componentMap[variant];
};

/**
 * Get alignment classes
 */
const getAlignClasses = (align: TypographyAlign): string => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
    inherit: ''
  };
  
  return alignments[align];
};

/**
 * Get color classes
 */
const getColorClasses = (color: TypographyColor): string => {
  const colors = {
    primary: 'text-blue-600 dark:text-blue-400',
    secondary: 'text-gray-600 dark:text-gray-400',
    success: 'text-green-600 dark:text-green-400',
    warning: 'text-amber-600 dark:text-amber-400',
    error: 'text-red-600 dark:text-red-400',
    muted: 'text-gray-500 dark:text-gray-500',
    inherit: ''
  };
  
  return colors[color];
};

/**
 * Get font weight classes
 */
const getWeightClasses = (weight: TypographyWeight): string => {
  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    inherit: ''
  };
  
  return weights[weight];
};

/**
 * Typography component
 */
const Typography = ({
  variant = 'body1',
  component,
  align = 'inherit',
  color = 'inherit',
  weight = 'inherit',
  noWrap = false,
  truncate = false,
  italic = false,
  underline = false,
  uppercase = false,
  lowercase = false,
  capitalize = false,
  className = '',
  children,
  ...props
}: TypographyProps) => {
  const Component = component || getDefaultComponent(variant);
  
  const classes = [
    'text-gray-900 dark:text-white', // Default text color
    getVariantClasses(variant),
    getAlignClasses(align),
    color !== 'inherit' && getColorClasses(color),
    weight !== 'inherit' && getWeightClasses(weight),
    noWrap && 'whitespace-nowrap',
    truncate && 'truncate',
    italic && 'italic',
    underline && 'underline',
    uppercase && 'uppercase',
    lowercase && 'lowercase',
    capitalize && 'capitalize',
    className
  ].filter(Boolean).join(' ');

  return React.createElement(
    Component,
    {
      className: classes,
      ...props
    },
    children
  );
};

export type { TypographyProps };
export { Typography };
export default Typography;
