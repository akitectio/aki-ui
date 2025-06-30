import React from 'react';

export interface SwitchProps {
    /**
     * Whether the switch is checked
     */
    checked?: boolean;

    /**
     * Default checked state (uncontrolled)
     */
    defaultChecked?: boolean;

    /**
     * Called when the switch state changes
     */
    onChange?: (checked: boolean) => void;

    /**
     * Whether the switch is disabled
     */
    disabled?: boolean;

    /**
     * Size of the switch
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';

    /**
     * The label to display next to the switch
     */
    label?: string;

    /**
     * Position of the label relative to the switch
     * @default 'right'
     */
    labelPosition?: 'left' | 'right';

    /**
     * Color of the switch when checked
     * @default 'primary'
     */
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * ID for the input element
     */
    id?: string;

    /**
     * Name for the input element
     */
    name?: string;

    /**
     * The value of the switch
     */
    value?: string;
}

const Switch: React.FC<SwitchProps> = ({
    checked,
    defaultChecked,
    onChange,
    disabled = false,
    size = 'md',
    label,
    labelPosition = 'right',
    color = 'primary',
    className = '',
    id,
    name,
    value
}) => {
    const [internalChecked, setInternalChecked] = React.useState<boolean>(
        defaultChecked ?? false
    );

    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;

    const sizeClasses = {
        sm: {
            switch: 'w-9 h-5',
            thumb: 'h-4 w-4',
            translate: 'translate-x-4',
            padding: 'p-0.5',
        },
        md: {
            switch: 'w-11 h-6',
            thumb: 'h-5 w-5',
            translate: 'translate-x-5',
            padding: 'p-0.5',
        },
        lg: {
            switch: 'w-14 h-7',
            thumb: 'h-6 w-6',
            translate: 'translate-x-7',
            padding: 'p-0.5',
        },
    };

    const colorClasses = {
        primary: 'bg-primary-600',
        secondary: 'bg-secondary-600',
        success: 'bg-success-600',
        danger: 'bg-red-500',
        warning: 'bg-warning-500',
        info: 'bg-blue-500',
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = e.target.checked;

        if (!isControlled) {
            setInternalChecked(newChecked);
        }

        onChange?.(newChecked);
    };

    const handleLabelClick = () => {
        if (disabled) return;
        
        const newChecked = !isChecked;
        if (!isControlled) {
            setInternalChecked(newChecked);
        }
        onChange?.(newChecked);
    };

    const switchId = id || `switch-${Math.random().toString(36).substring(2, 9)}`;

    return (
        <div className={`inline-flex items-center ${className}`}>
            {label && labelPosition === 'left' && (
                <span
                    onClick={handleLabelClick}
                    className={`mr-3 text-sm select-none cursor-pointer ${disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 dark:text-gray-300'}`}
                >
                    {label}
                </span>
            )}

            <div className="relative inline-block">
                <input
                    type="checkbox"
                    id={switchId}
                    name={name}
                    value={value}
                    checked={isChecked}
                    onChange={handleChange}
                    disabled={disabled}
                    className="sr-only"
                />

                <label
                    htmlFor={switchId}
                    className={`flex items-center ${sizeClasses[size].switch} ${sizeClasses[size].padding} ${isChecked ? colorClasses[color] : 'bg-gray-200 dark:bg-gray-600'
                        } rounded-full transition-all duration-200 ease-in-out ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-md'
                        }`}
                >
                    <div
                        className={`${sizeClasses[size].thumb} rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out ${isChecked ? sizeClasses[size].translate : 'translate-x-0'
                            }`}
                    />
                </label>
            </div>

            {label && labelPosition === 'right' && (
                <span
                    onClick={handleLabelClick}
                    className={`ml-3 text-sm select-none cursor-pointer ${disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 dark:text-gray-300'}`}
                >
                    {label}
                </span>
            )}
        </div>
    );
};

export default Switch;
