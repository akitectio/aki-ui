import React, { useState, useRef, useEffect, useCallback } from 'react';

export interface SliderProps {
    /**
     * Current value of the slider
     */
    value?: number | [number, number];

    /**
     * Default value of the slider (uncontrolled)
     */
    defaultValue?: number | [number, number];

    /**
     * Callback when the value changes
     */
    onChange?: (value: number | [number, number]) => void;

    /**
     * Minimum value of the slider
     * @default 0
     */
    min?: number;

    /**
     * Maximum value of the slider
     * @default 100
     */
    max?: number;

    /**
     * Step size for the slider
     * @default 1
     */
    step?: number;

    /**
     * Whether the slider is disabled
     * @default false
     */
    disabled?: boolean;

    /**
     * Whether to show the value tooltip
     * @default false
     */
    showTooltip?: boolean;

    /**
     * Whether to show markers for each step
     * @default false
     */
    showMarkers?: boolean;

    /**
     * Whether the slider is a range (two handles)
     * @default false
     */
    range?: boolean;

    /**
     * Size of the slider
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';

    /**
     * Color of the slider track
     * @default 'primary'
     */
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * Vertical orientation for the slider
     * @default false
     */
    vertical?: boolean;

    /**
     * Height for vertical sliders (in pixels or CSS units)
     * @default '200px'
     */
    verticalHeight?: string;

    /**
     * Format function for the tooltip value
     */
    formatTooltip?: (value: number) => React.ReactNode;

    /**
     * Labels to display under the slider
     */
    labels?: Record<number, React.ReactNode>;
}

const Slider: React.FC<SliderProps> = ({
    value,
    defaultValue,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    showTooltip = false,
    showMarkers = false,
    range = false,
    size = 'md',
    color = 'primary',
    className = '',
    vertical = false,
    verticalHeight = '200px',
    formatTooltip,
    labels,
}) => {
    // Check if the slider is controlled by parent
    const isControlled = value !== undefined;

    // State for uncontrolled component
    const [internalValue, setInternalValue] = useState<number | [number, number]>(() => {
        if (range) {
            return defaultValue as [number, number] || [min, max];
        } else {
            return defaultValue as number || min;
        }
    });

    // Get the current value (either controlled or uncontrolled)
    const currentValue = isControlled ? value : internalValue;

    // Get current values for range slider
    const getValues = useCallback((): [number, number] => {
        if (range) {
            return currentValue as [number, number];
        } else {
            return [min, currentValue as number];
        }
    }, [currentValue, range, min]);

    // Get the single current value for single slider
    const getSingleValue = useCallback((): number => {
        if (!range) {
            return currentValue as number;
        }
        // This should not happen unless misused
        return (currentValue as [number, number])[1];
    }, [currentValue, range]);

    const trackRef = useRef<HTMLDivElement>(null);
    const thumbOneRef = useRef<HTMLDivElement>(null);
    const thumbTwoRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState<number | null>(null); // null, 0, or 1
    const [showTooltipState, setShowTooltipState] = useState<boolean>(showTooltip);

    // Style maps for sizes
    const sizeClasses = {
        sm: {
            track: 'h-1',
            verticalTrack: 'w-1',
            thumb: 'h-3 w-3',
            marker: 'h-1 w-1',
        },
        md: {
            track: 'h-2',
            verticalTrack: 'w-2',
            thumb: 'h-4 w-4',
            marker: 'h-1.5 w-1.5',
        },
        lg: {
            track: 'h-3',
            verticalTrack: 'w-3',
            thumb: 'h-5 w-5',
            marker: 'h-2 w-2',
        },
    };

    const colorClasses = {
        primary: 'bg-blue-600',
        secondary: 'bg-purple-600',
        success: 'bg-green-500',
        danger: 'bg-red-500',
        warning: 'bg-yellow-500',
        info: 'bg-cyan-500',
    };

    // Calculate the percentage of the value within the range
    const calculatePercentage = useCallback((value: number): number => {
        return ((value - min) / (max - min)) * 100;
    }, [min, max]);

    // Set value based on mouse/touch position
    const setValueFromPosition = useCallback(
        (clientPosition: number, handleIndex?: number) => {
            if (!trackRef.current) return;

            const trackRect = trackRef.current.getBoundingClientRect();
            let percentage;

            if (vertical) {
                const trackHeight = trackRect.height;
                percentage = ((trackRect.bottom - clientPosition) / trackHeight) * 100;
            } else {
                const trackWidth = trackRect.width;
                percentage = ((clientPosition - trackRect.left) / trackWidth) * 100;
            }

            // Clamp percentage between 0 and 100
            percentage = Math.max(0, Math.min(100, percentage));

            // Calculate the new value based on percentage
            let newValue = min + (percentage / 100) * (max - min);

            // Snap to step
            if (step > 0) {
                newValue = Math.round(newValue / step) * step;
            }

            // Clamp to min/max
            newValue = Math.max(min, Math.min(max, newValue));

            // Update value based on range mode and handle being dragged
            if (range) {
                const values = getValues();
                let newValues: [number, number];

                if (handleIndex === 0) {
                    // First handle
                    newValues = [Math.min(newValue, values[1]), values[1]];
                } else if (handleIndex === 1) {
                    // Second handle
                    newValues = [values[0], Math.max(values[0], newValue)];
                } else {
                    // Determine closest handle
                    const distanceToFirst = Math.abs(newValue - values[0]);
                    const distanceToSecond = Math.abs(newValue - values[1]);
                    if (distanceToFirst <= distanceToSecond) {
                        newValues = [Math.min(newValue, values[1]), values[1]];
                    } else {
                        newValues = [values[0], Math.max(values[0], newValue)];
                    }
                }

                if (!isControlled) {
                    setInternalValue(newValues);
                }

                onChange?.(newValues);
            } else {
                if (!isControlled) {
                    setInternalValue(newValue);
                }

                onChange?.(newValue);
            }
        },
        [isControlled, min, max, step, range, vertical, getValues, onChange]
    );

    // Event handlers
    const handleMouseDown = (event: React.MouseEvent, handleIndex?: number) => {
        if (disabled) return;

        event.preventDefault();
        setShowTooltipState(true);
        setIsDragging(handleIndex !== undefined ? handleIndex : null);
        setValueFromPosition(vertical ? event.clientY : event.clientX, handleIndex);
    };

    // Clean up and remove event listeners
    const handleDragEnd = useCallback(() => {
        if (isDragging !== null) {
            setIsDragging(null);
            if (!showTooltip) {
                setShowTooltipState(false);
            }
        }
    }, [isDragging, showTooltip]);

    // Handle mouse movement during drag
    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            if (isDragging !== null && !disabled) {
                setValueFromPosition(vertical ? event.clientY : event.clientX, isDragging);
            }
        },
        [isDragging, disabled, vertical, setValueFromPosition]
    );

    // Set up event listeners for mouse move/up
    useEffect(() => {
        if (isDragging !== null) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleDragEnd);

            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleDragEnd);
            };
        }
        return undefined;
    }, [isDragging, handleMouseMove, handleDragEnd]);

    // Track click handler
    const handleTrackClick = (event: React.MouseEvent) => {
        if (disabled) return;
        setValueFromPosition(vertical ? event.clientY : event.clientX);
    };

    // Format the tooltip content
    const formatValue = (val: number): React.ReactNode => {
        if (formatTooltip) {
            return formatTooltip(val);
        }
        return val;
    };

    // Get values for rendering
    const values = range ? getValues() : [min, getSingleValue()];
    const startPercentage = calculatePercentage(values[0]);
    const endPercentage = calculatePercentage(values[1]);
    const trackLength = endPercentage - startPercentage;

    // Generate step markers if needed
    const markers = showMarkers ? [...Array(Math.floor((max - min) / step) + 1)].map((_, i) => {
        const markerValue = min + i * step;
        const markerPosition = calculatePercentage(markerValue);
        return { value: markerValue, position: markerPosition };
    }) : [];

    return (
        <div
            className={`relative ${vertical ? 'h-full' : 'w-full'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
            style={{ height: vertical ? verticalHeight : undefined }}
        >
            {/* Main track */}
            <div
                ref={trackRef}
                className={`absolute rounded-full ${vertical ? sizeClasses[size].verticalTrack : sizeClasses[size].track} ${vertical ? 'h-full' : 'w-full'} bg-gray-200 cursor-pointer`}
                onClick={handleTrackClick}
            >
                {/* Active track portion */}
                <div
                    className={`absolute rounded-full ${vertical ? sizeClasses[size].verticalTrack : sizeClasses[size].track} ${colorClasses[color]}`}
                    style={
                        vertical ? {
                            bottom: `${startPercentage}%`,
                            height: `${trackLength}%`,
                        } : {
                            left: `${startPercentage}%`,
                            width: `${trackLength}%`,
                        }
                    }
                />

                {/* Step markers */}
                {showMarkers && markers.map((marker, index) => (
                    <div
                        key={index}
                        className={`absolute ${sizeClasses[size].marker} rounded-full bg-gray-400 -translate-x-1/2 -translate-y-1/2`}
                        style={
                            vertical ? {
                                bottom: `${marker.position}%`,
                                left: '50%',
                            } : {
                                left: `${marker.position}%`,
                                top: '50%',
                            }
                        }
                    />
                ))}

                {/* First handle (or only handle for non-range) */}
                {range && (
                    <div
                        ref={thumbOneRef}
                        className={`absolute ${sizeClasses[size].thumb} rounded-full ${colorClasses[color]} shadow-md transform -translate-x-1/2 -translate-y-1/2 cursor-grab focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500 ${isDragging === 0 ? 'cursor-grabbing' : ''}`}
                        style={
                            vertical ? {
                                bottom: `${startPercentage}%`,
                                left: '50%',
                            } : {
                                left: `${startPercentage}%`,
                                top: '50%',
                            }
                        }
                        onMouseDown={(e) => handleMouseDown(e, 0)}
                        tabIndex={disabled ? -1 : 0}
                        role="slider"
                        aria-valuemin={min}
                        aria-valuemax={values[1]}
                        aria-valuenow={values[0]}
                        aria-disabled={disabled}
                    >
                        {showTooltipState && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 z-10">
                                <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                                    {formatValue(values[0])}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Second handle (main handle for non-range) */}
                <div
                    ref={thumbTwoRef}
                    className={`absolute ${sizeClasses[size].thumb} rounded-full ${colorClasses[color]} shadow-md transform -translate-x-1/2 -translate-y-1/2 cursor-grab focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500 ${isDragging === 1 ? 'cursor-grabbing' : ''}`}
                    style={
                        vertical ? {
                            bottom: `${endPercentage}%`,
                            left: '50%',
                        } : {
                            left: `${endPercentage}%`,
                            top: '50%',
                        }
                    }
                    onMouseDown={(e) => handleMouseDown(e, 1)}
                    tabIndex={disabled ? -1 : 0}
                    role="slider"
                    aria-valuemin={range ? values[0] : min}
                    aria-valuemax={max}
                    aria-valuenow={values[1]}
                    aria-disabled={disabled}
                >
                    {showTooltipState && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 z-10">
                            <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                                {formatValue(values[1])}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Labels if provided */}
            {labels && (
                <div
                    className={`relative ${vertical ? 'h-full flex items-center' : 'w-full mt-2 flex'}`}
                    style={{ height: vertical ? verticalHeight : undefined }}
                >
                    {Object.entries(labels).map(([value, label]) => (
                        <div
                            key={value}
                            className={`absolute text-xs text-gray-600 ${vertical ? '-translate-y-1/2' : ''}`}
                            style={
                                vertical ? {
                                    bottom: `${calculatePercentage(Number(value))}%`,
                                    right: '100%',
                                    marginRight: '8px',
                                } : {
                                    left: `${calculatePercentage(Number(value))}%`,
                                    transform: 'translateX(-50%)',
                                }
                            }
                        >
                            {label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Slider;
