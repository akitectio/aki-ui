import { useState, useEffect } from 'react';

// Tailwind CSS default breakpoints
export const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
} as const;

export type Breakpoint = keyof typeof breakpoints;

/**
 * Hook to get the current breakpoint
 */
export const useBreakpoint = (): Breakpoint => {
    const [breakpoint, setBreakpoint] = useState<Breakpoint>('sm');

    useEffect(() => {
        const updateBreakpoint = () => {
            const width = window.innerWidth;

            if (width >= breakpoints['2xl']) {
                setBreakpoint('2xl');
            } else if (width >= breakpoints.xl) {
                setBreakpoint('xl');
            } else if (width >= breakpoints.lg) {
                setBreakpoint('lg');
            } else if (width >= breakpoints.md) {
                setBreakpoint('md');
            } else {
                setBreakpoint('sm');
            }
        };

        // Set initial breakpoint
        updateBreakpoint();

        // Add event listener
        window.addEventListener('resize', updateBreakpoint);

        // Cleanup
        return () => window.removeEventListener('resize', updateBreakpoint);
    }, []);

    return breakpoint;
};

/**
 * Hook to check if screen size matches a specific breakpoint or larger
 */
export const useMediaQuery = (breakpoint: Breakpoint): boolean => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const query = `(min-width: ${breakpoints[breakpoint]}px)`;
        const media = window.matchMedia(query);

        // Set initial state
        setMatches(media.matches);

        // Define listener
        const listener = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        // Add listener
        media.addEventListener('change', listener);

        // Cleanup
        return () => media.removeEventListener('change', listener);
    }, [breakpoint]);

    return matches;
};

/**
 * Utility function to get responsive classes based on breakpoint values
 */
export const getResponsiveClasses = (
    values: Partial<Record<Breakpoint | 'base', string>>
): string => {
    const classes: string[] = [];

    // Add base class (no prefix)
    if (values.base) {
        classes.push(values.base);
    }

    // Add responsive classes
    Object.entries(values).forEach(([bp, value]) => {
        if (bp !== 'base' && value) {
            classes.push(`${bp}:${value}`);
        }
    });

    return classes.join(' ');
};

/**
 * Utility function to check if current screen size is at least the specified breakpoint
 */
export const isBreakpoint = (breakpoint: Breakpoint): boolean => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth >= breakpoints[breakpoint];
};

/**
 * Component to conditionally render content based on breakpoint
 */
export interface ShowProps {
    /**
     * Minimum breakpoint to show content
     */
    above?: Breakpoint;

    /**
     * Maximum breakpoint to show content (exclusive)
     */
    below?: Breakpoint;

    /**
     * Only show at specific breakpoint
     */
    at?: Breakpoint;

    /**
     * Content to render
     */
    children: React.ReactNode;
}

export const Show: React.FC<ShowProps> = ({ above, below, at, children }) => {
    const currentBreakpoint = useBreakpoint();
    const currentWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

    let shouldShow = true;

    if (at) {
        // Show only at specific breakpoint
        shouldShow = currentBreakpoint === at;
    } else {
        // Show based on above/below conditions
        if (above && currentWidth < breakpoints[above]) {
            shouldShow = false;
        }

        if (below && currentWidth >= breakpoints[below]) {
            shouldShow = false;
        }
    }

    return shouldShow ? <>{children}</> : null;
};

/**
 * Hook to get screen size information
 */
export const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    const breakpoint = useBreakpoint();

    useEffect(() => {
        const updateSize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return {
        ...screenSize,
        breakpoint,
        isMobile: screenSize.width < breakpoints.md,
        isTablet: screenSize.width >= breakpoints.md && screenSize.width < breakpoints.lg,
        isDesktop: screenSize.width >= breakpoints.lg,
    };
};
