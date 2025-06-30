import React from 'react';
import Typography from './Typography';
import type { TypographyProps } from './Typography';

/**
 * Pre-configured Typography components for common use cases
 */

export interface HeadingProps extends Omit<TypographyProps, 'variant'> {}

export const H1: React.FC<HeadingProps> = (props) => (
  <Typography variant="h1" {...props} />
);

export const H2: React.FC<HeadingProps> = (props) => (
  <Typography variant="h2" {...props} />
);

export const H3: React.FC<HeadingProps> = (props) => (
  <Typography variant="h3" {...props} />
);

export const H4: React.FC<HeadingProps> = (props) => (
  <Typography variant="h4" {...props} />
);

export const H5: React.FC<HeadingProps> = (props) => (
  <Typography variant="h5" {...props} />
);

export const H6: React.FC<HeadingProps> = (props) => (
  <Typography variant="h6" {...props} />
);

export const Body: React.FC<HeadingProps> = (props) => (
  <Typography variant="body1" {...props} />
);

export const SmallText: React.FC<HeadingProps> = (props) => (
  <Typography variant="body2" {...props} />
);

export const Caption: React.FC<HeadingProps> = (props) => (
  <Typography variant="caption" {...props} />
);

export const Subtitle: React.FC<HeadingProps> = (props) => (
  <Typography variant="subtitle1" {...props} />
);

export const Overline: React.FC<HeadingProps> = (props) => (
  <Typography variant="overline" {...props} />
);

/**
 * Specialized typography components
 */

export interface LinkProps extends Omit<TypographyProps, 'component'> {
  href?: string;
  target?: string;
  rel?: string;
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  target, 
  rel,
  className = '',
  color = 'primary',
  variant = 'body1',
  children,
  ...rest 
}) => {
  return (
    <Typography
      component="a"
      variant={variant}
      color={color}
      className={`hover:underline cursor-pointer transition-colors ${className}`}
      {...rest}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </Typography>
  );
};

export const Code: React.FC<Omit<TypographyProps, 'component'>> = ({ 
  className = '',
  children,
  ...rest 
}) => (
  <Typography
    component="code"
    className={`bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono ${className}`}
    {...rest}
  >
    {children}
  </Typography>
);

export const Pre: React.FC<Omit<TypographyProps, 'component'>> = ({ 
  className = '',
  children,
  ...rest 
}) => (
  <Typography
    component="pre"
    className={`bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto ${className}`}
    {...rest}
  >
    {children}
  </Typography>
);

export const Blockquote: React.FC<Omit<TypographyProps, 'component'>> = ({ 
  className = '',
  children,
  ...rest 
}) => (
  <Typography
    component="blockquote"
    className={`border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic ${className}`}
    {...rest}
  >
    {children}
  </Typography>
);

export const Label: React.FC<Omit<TypographyProps, 'component'>> = ({ 
  className = '',
  weight = 'medium',
  ...rest 
}) => (
  <Typography
    component="label"
    variant="body2"
    weight={weight}
    className={`block ${className}`}
    {...rest}
  />
);

export const ErrorText: React.FC<Omit<TypographyProps, 'color' | 'variant'>> = ({ 
  ...rest 
}) => (
  <Typography
    color="error"
    variant="caption"
    {...rest}
  />
);

export const HelperText: React.FC<Omit<TypographyProps, 'color' | 'variant'>> = ({ 
  ...rest 
}) => (
  <Typography
    color="secondary"
    variant="caption"
    {...rest}
  />
);
