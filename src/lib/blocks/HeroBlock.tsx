import { Button } from '../components';

interface HeroBlockProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButton?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryButton?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  backgroundImage?: string;
  backgroundColor?: string;
  textAlign?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'py-12 lg:py-16',
  md: 'py-16 lg:py-24',
  lg: 'py-20 lg:py-32',
  xl: 'py-24 lg:py-40'
};

const textSizeClasses = {
  sm: {
    title: 'text-3xl md:text-4xl',
    subtitle: 'text-lg md:text-xl',
    description: 'text-base md:text-lg'
  },
  md: {
    title: 'text-4xl md:text-5xl',
    subtitle: 'text-xl md:text-2xl',
    description: 'text-lg md:text-xl'
  },
  lg: {
    title: 'text-5xl md:text-6xl',
    subtitle: 'text-2xl md:text-3xl',
    description: 'text-xl md:text-2xl'
  },
  xl: {
    title: 'text-6xl md:text-7xl',
    subtitle: 'text-3xl md:text-4xl',
    description: 'text-2xl md:text-3xl'
  }
};

export function HeroBlock({
  title = 'Welcome to Our Platform',
  subtitle,
  description = 'Build amazing products with our comprehensive suite of tools and services. Join thousands of developers who trust our platform.',
  primaryButton = { text: 'Get Started', href: '#' },
  secondaryButton = { text: 'Learn More', href: '#' },
  backgroundImage,
  backgroundColor = 'bg-gradient-to-br from-blue-600 to-purple-700',
  textAlign = 'center',
  size = 'lg',
  className = ''
}: HeroBlockProps) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : {};

  return (
    <section 
      className={`
        ${backgroundColor} 
        ${sizeClasses[size]} 
        text-white relative overflow-hidden
        ${className}
      `}
      style={backgroundStyle}
    >
      {/* Background Pattern/Overlay */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-black/20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-4xl mx-auto flex flex-col ${alignmentClasses[textAlign]}`}>
          {/* Subtitle */}
          {subtitle && (
            <div className="mb-4">
              <span className={`
                inline-block px-4 py-2 rounded-full text-sm font-medium
                bg-white/20 backdrop-blur-sm border border-white/30
                ${textSizeClasses[size].subtitle}
              `}>
                {subtitle}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className={`
            font-bold leading-tight mb-6
            ${textSizeClasses[size].title}
          `}>
            {title}
          </h1>

          {/* Description */}
          <p className={`
            mb-8 opacity-90 max-w-3xl
            ${textSizeClasses[size].description}
            ${textAlign === 'center' ? 'mx-auto' : ''}
          `}>
            {description}
          </p>

          {/* Buttons */}
          <div className={`
            flex gap-4
            ${textAlign === 'center' ? 'justify-center' : 
              textAlign === 'right' ? 'justify-end' : 'justify-start'}
            ${size === 'sm' ? 'flex-col sm:flex-row' : 'flex-col md:flex-row'}
          `}>
            {primaryButton && (
              primaryButton.href ? (
                <a href={primaryButton.href} className="inline-block">
                  <Button
                    size={size === 'sm' ? 'md' : 'lg'}
                    variant="secondary"
                    className="font-semibold"
                  >
                    {primaryButton.text}
                  </Button>
                </a>
              ) : (
                <Button
                  size={size === 'sm' ? 'md' : 'lg'}
                  variant="secondary"
                  onClick={primaryButton.onClick}
                  className="font-semibold"
                >
                  {primaryButton.text}
                </Button>
              )
            )}
            
            {secondaryButton && (
              secondaryButton.href ? (
                <a href={secondaryButton.href} className="inline-block">
                  <Button
                    size={size === 'sm' ? 'md' : 'lg'}
                    variant="outline"
                    className="font-semibold border-white/30 hover:bg-white/10"
                  >
                    {secondaryButton.text}
                  </Button>
                </a>
              ) : (
                <Button
                  size={size === 'sm' ? 'md' : 'lg'}
                  variant="outline"
                  onClick={secondaryButton.onClick}
                  className="font-semibold border-white/30 hover:bg-white/10"
                >
                  {secondaryButton.text}
                </Button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}