import React from 'react';

export interface DividerProps {
    /**
     * The orientation of the divider.
     * @default 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';

    /**
     * The variant of the divider.
     * @default 'solid'
     */
    variant?: 'solid' | 'dashed' | 'dotted';

    /**
     * The color of the divider.
     */
    color?: string;

    /**
     * The thickness of the divider.
     * @default 1
     */
    thickness?: number;

    /**
     * The margin on the start and end of the divider.
     * @default 0
     */
    margin?: number | string;

    /**
     * Optional label to display in the center of the divider
     */
    label?: React.ReactNode;

    /**
     * The alignment of the label
     * @default 'center'
     */
    labelAlignment?: 'left' | 'center' | 'right';

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * Spacing around the label
     * @default 16
     */
    labelSpacing?: number;

    /**
     * Whether the divider is light or normal
     * @default false
     */
    light?: boolean;
}

const Divider: React.FC<DividerProps> = ({
    orientation = 'horizontal',
    variant = 'solid',
    color,
    thickness = 1,
    margin = 0,
    label,
    labelAlignment = 'center',
    className = '',
    labelSpacing = 16,
    light = false,
}) => {
    const marginValue = typeof margin === 'number' ? `${margin}px` : margin;

    // Style for the divider line
    const getLineStyle = () => {
        const lineStyle: React.CSSProperties = {
            borderStyle: variant,
            borderColor: color || (light ? 'rgba(0, 0, 0, 0.06)' : 'rgba(0, 0, 0, 0.12)'),
        };

        if (orientation === 'horizontal') {
            lineStyle.borderTopWidth = thickness;
            lineStyle.marginTop = marginValue;
            lineStyle.marginBottom = marginValue;
        } else {
            lineStyle.borderLeftWidth = thickness;
            lineStyle.marginLeft = marginValue;
            lineStyle.marginRight = marginValue;
            lineStyle.height = '100%';
        }

        return lineStyle;
    };

    // For horizontal divider with label
    if (orientation === 'horizontal' && label) {
        const labelAlignmentClass =
            labelAlignment === 'left' ? 'justify-start' :
                labelAlignment === 'right' ? 'justify-end' :
                    'justify-center';

        return (
            <div
                className={`flex items-center ${labelAlignmentClass} ${className}`}
                role="separator"
                aria-orientation={orientation}
            >
                <div className="flex-grow" style={getLineStyle()}></div>
                <div
                    className={`flex-shrink-0 text-sm text-gray-500 px-${labelSpacing / 4}`}
                >
                    {label}
                </div>
                <div className="flex-grow" style={getLineStyle()}></div>
            </div>
        );
    }

    // For simple horizontal or vertical divider
    return (
        <div
            className={`
        ${orientation === 'horizontal' ? 'w-full' : 'h-full inline-block'}
        ${className}
      `}
            style={getLineStyle()}
            role="separator"
            aria-orientation={orientation}
        />
    );
};

export default Divider;
