import type { Meta, StoryObj } from '@storybook/react';
import { ValidationMessage, FieldValidator, ValidationRules, Input, FloatingLabel, FormLayout } from '../lib/components';
import { useState } from 'react';

const meta: Meta<typeof ValidationMessage> = {
    title: 'Forms/Validation',
    component: ValidationMessage,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `Form validation components provide a comprehensive system for validating user input with clear error messaging and visual feedback.

## Features
- **ValidationMessage**: Display validation messages with different types and icons
- **FieldValidator**: Automatic validation wrapper for form fields
- **ValidationRules**: Pre-built common validation rules
- **Custom Validators**: Support for custom validation logic
- **Real-time Validation**: Validate on change, blur, or submit
- **Multiple Messages**: Display multiple validation errors
- **Accessibility**: Proper ARIA attributes and screen reader support

## Usage
Wrap form fields with FieldValidator and provide validation rules. ValidationMessage can be used standalone for custom validation feedback.`,
            },
        },
    },
    argTypes: {
        message: {
            control: 'text',
            description: 'Validation message text',
        },
        type: {
            control: 'select',
            options: ['error', 'warning', 'success', 'info'],
            description: 'Type of validation message',
        },
        showIcon: {
            control: 'boolean',
            description: 'Whether to show an icon',
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        message: 'This field is required',
        type: 'error',
        showIcon: true,
    },
};

export const MessageTypes: Story = {
    render: () => (
        <div className="space-y-3">
            <ValidationMessage message="This field is required" type="error" />
            <ValidationMessage message="Password should be stronger" type="warning" />
            <ValidationMessage message="Email format is correct" type="success" />
            <ValidationMessage message="This field accepts email addresses" type="info" />
        </div>
    ),
};

export const WithoutIcons: Story = {
    render: () => (
        <div className="space-y-3">
            <ValidationMessage message="Error without icon" type="error" showIcon={false} />
            <ValidationMessage message="Warning without icon" type="warning" showIcon={false} />
            <ValidationMessage message="Success without icon" type="success" showIcon={false} />
            <ValidationMessage message="Info without icon" type="info" showIcon={false} />
        </div>
    ),
};

export const BasicValidation: Story = {
    render: () => (
        <div className="space-y-4">
            <FieldValidator
                rules={[ValidationRules.required()]}
                validateOnChange={true}
                validateOnBlur={true}
            >
                <Input label="Required Field" placeholder="This field is required" />
            </FieldValidator>

            <FieldValidator
                rules={[
                    ValidationRules.required(),
                    ValidationRules.email()
                ]}
            >
                <FloatingLabel label="Email Address" type="email" />
            </FieldValidator>

            <FieldValidator
                rules={[
                    ValidationRules.required(),
                    ValidationRules.minLength(8, 'Password must be at least 8 characters')
                ]}
            >
                <FloatingLabel label="Password" type="password" />
            </FieldValidator>
        </div>
    ),
};

export const ComplexValidation: Story = {
    render: () => (
        <FormLayout spacing="lg" maxWidth="400px" centered>
            <FieldValidator
                rules={[
                    ValidationRules.required('Username is required'),
                    ValidationRules.minLength(3, 'Username must be at least 3 characters'),
                    ValidationRules.maxLength(20, 'Username must be no more than 20 characters'),
                    ValidationRules.pattern(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores')
                ]}
            >
                <FloatingLabel label="Username" />
            </FieldValidator>

            <FieldValidator
                rules={[
                    ValidationRules.required('Email is required'),
                    ValidationRules.email('Please enter a valid email address')
                ]}
            >
                <FloatingLabel label="Email Address" type="email" />
            </FieldValidator>

            <FieldValidator
                rules={[
                    ValidationRules.required('Password is required'),
                    ValidationRules.minLength(8, 'Password must be at least 8 characters'),
                    ValidationRules.custom(
                        (value) => {
                            const hasUpper = /[A-Z]/.test(value);
                            const hasLower = /[a-z]/.test(value);
                            const hasNumber = /\d/.test(value);
                            const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);

                            if (!hasUpper) return 'Password must contain at least one uppercase letter';
                            if (!hasLower) return 'Password must contain at least one lowercase letter';
                            if (!hasNumber) return 'Password must contain at least one number';
                            if (!hasSpecial) return 'Password must contain at least one special character';

                            return true;
                        },
                        'Password does not meet requirements'
                    )
                ]}
            >
                <FloatingLabel label="Strong Password" type="password" />
            </FieldValidator>

            <FieldValidator
                rules={[
                    ValidationRules.required('Age is required'),
                    ValidationRules.number('Age must be a valid number'),
                    ValidationRules.min(18, 'You must be at least 18 years old'),
                    ValidationRules.max(120, 'Please enter a valid age')
                ]}
            >
                <FloatingLabel label="Age" type="number" />
            </FieldValidator>
        </FormLayout>
    ),
};

export const RealTimeValidation: Story = {
    render: () => {
        const [formData, setFormData] = useState({
            username: '',
            email: '',
            confirmEmail: ''
        });

        const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData(prev => ({
                ...prev,
                [field]: e.target.value
            }));
        };

        return (
            <FormLayout spacing="lg" maxWidth="400px" centered>
                <h2 className="text-xl font-semibold mb-4">Registration Form</h2>

                <FieldValidator
                    rules={[
                        ValidationRules.required('Username is required'),
                        ValidationRules.minLength(3, 'Username must be at least 3 characters'),
                        ValidationRules.pattern(/^[a-zA-Z0-9_]+$/, 'Only letters, numbers, and underscores allowed')
                    ]}
                    value={formData.username}
                    validateOnChange={true}
                >
                    <FloatingLabel
                        label="Username"
                        value={formData.username}
                        onChange={handleChange('username')}
                        fullWidth
                    />
                </FieldValidator>

                <FieldValidator
                    rules={[
                        ValidationRules.required('Email is required'),
                        ValidationRules.email('Please enter a valid email address')
                    ]}
                    value={formData.email}
                    validateOnChange={true}
                >
                    <FloatingLabel
                        label="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={handleChange('email')}
                        fullWidth
                    />
                </FieldValidator>

                <FieldValidator
                    rules={[
                        ValidationRules.required('Please confirm your email'),
                        ValidationRules.custom(
                            (value) => value === formData.email || 'Email addresses do not match',
                            'Email addresses do not match'
                        )
                    ]}
                    value={formData.confirmEmail}
                    validateOnChange={true}
                >
                    <FloatingLabel
                        label="Confirm Email"
                        type="email"
                        value={formData.confirmEmail}
                        onChange={handleChange('confirmEmail')}
                        fullWidth
                    />
                </FieldValidator>

                <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="text-sm font-medium mb-2">Form State:</h3>
                    <pre className="text-xs text-gray-600">
                        {JSON.stringify(formData, null, 2)}
                    </pre>
                </div>
            </FormLayout>
        );
    },
};

export const ValidationOnSubmit: Story = {
    render: () => {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            phone: ''
        });
        const [validationErrors, setValidationErrors] = useState<Record<string, string[]>>({});
        const [isSubmitted, setIsSubmitted] = useState(false);

        const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData(prev => ({
                ...prev,
                [field]: e.target.value
            }));

            // Clear errors when user starts typing
            if (validationErrors[field]) {
                setValidationErrors(prev => ({
                    ...prev,
                    [field]: []
                }));
            }
        };

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            setIsSubmitted(true);

            const errors: Record<string, string[]> = {};

            // Validate name
            const nameRules = [
                ValidationRules.required('Name is required'),
                ValidationRules.minLength(2, 'Name must be at least 2 characters')
            ];
            const nameErrors: string[] = [];
            nameRules.forEach(rule => {
                const result = rule.validator(formData.name);
                if (result !== true) {
                    nameErrors.push(typeof result === 'string' ? result : rule.message || 'Invalid');
                }
            });
            if (nameErrors.length > 0) errors.name = nameErrors;

            // Validate email
            const emailRules = [
                ValidationRules.required('Email is required'),
                ValidationRules.email('Please enter a valid email address')
            ];
            const emailErrors: string[] = [];
            emailRules.forEach(rule => {
                const result = rule.validator(formData.email);
                if (result !== true) {
                    emailErrors.push(typeof result === 'string' ? result : rule.message || 'Invalid');
                }
            });
            if (emailErrors.length > 0) errors.email = emailErrors;

            // Validate phone
            const phoneRules = [
                ValidationRules.required('Phone is required'),
                ValidationRules.pattern(/^\+?[\d\s\-()]+$/, 'Please enter a valid phone number')
            ];
            const phoneErrors: string[] = [];
            phoneRules.forEach(rule => {
                const result = rule.validator(formData.phone);
                if (result !== true) {
                    phoneErrors.push(typeof result === 'string' ? result : rule.message || 'Invalid');
                }
            });
            if (phoneErrors.length > 0) errors.phone = phoneErrors;

            setValidationErrors(errors);

            if (Object.keys(errors).length === 0) {
                alert('Form submitted successfully!');
                setIsSubmitted(false);
                setFormData({ name: '', email: '', phone: '' });
            }
        };

        return (
            <FormLayout spacing="lg" maxWidth="400px" centered>
                <h2 className="text-xl font-semibold mb-4">Contact Form (Submit Validation)</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <FloatingLabel
                            label="Full Name"
                            value={formData.name}
                            onChange={handleChange('name')}
                            isInvalid={isSubmitted && validationErrors.name?.length > 0}
                            fullWidth
                        />
                        {isSubmitted && validationErrors.name?.map((error, index) => (
                            <ValidationMessage key={index} message={error} type="error" />
                        ))}
                    </div>

                    <div>
                        <FloatingLabel
                            label="Email Address"
                            type="email"
                            value={formData.email}
                            onChange={handleChange('email')}
                            isInvalid={isSubmitted && validationErrors.email?.length > 0}
                            fullWidth
                        />
                        {isSubmitted && validationErrors.email?.map((error, index) => (
                            <ValidationMessage key={index} message={error} type="error" />
                        ))}
                    </div>

                    <div>
                        <FloatingLabel
                            label="Phone Number"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange('phone')}
                            isInvalid={isSubmitted && validationErrors.phone?.length > 0}
                            fullWidth
                        />
                        {isSubmitted && validationErrors.phone?.map((error, index) => (
                            <ValidationMessage key={index} message={error} type="error" />
                        ))}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Submit Form
                    </button>
                </form>

                {isSubmitted && Object.keys(validationErrors).length === 0 && (
                    <ValidationMessage
                        message="Form is valid and ready to submit!"
                        type="success"
                    />
                )}
            </FormLayout>
        );
    },
};

export const CustomValidation: Story = {
    render: () => (
        <FormLayout spacing="lg" maxWidth="400px" centered>
            <h2 className="text-xl font-semibold mb-4">Custom Validation Rules</h2>

            <FieldValidator
                rules={[
                    ValidationRules.required('Credit card number is required'),
                    ValidationRules.custom(
                        (value) => {
                            // Simple Luhn algorithm check
                            if (!value) return true;
                            const cleaned = value.replace(/\s/g, '');
                            if (!/^\d+$/.test(cleaned)) return 'Credit card number must contain only digits';
                            if (cleaned.length !== 16) return 'Credit card number must be 16 digits';

                            let sum = 0;
                            let isEven = false;
                            for (let i = cleaned.length - 1; i >= 0; i--) {
                                let digit = parseInt(cleaned.charAt(i));
                                if (isEven) {
                                    digit *= 2;
                                    if (digit > 9) digit -= 9;
                                }
                                sum += digit;
                                isEven = !isEven;
                            }

                            return sum % 10 === 0 || 'Invalid credit card number';
                        },
                        'Invalid credit card number'
                    )
                ]}
            >
                <FloatingLabel
                    label="Credit Card Number"
                    placeholder="1234 5678 9012 3456"
                    fullWidth
                />
            </FieldValidator>

            <FieldValidator
                rules={[
                    ValidationRules.required('Website URL is required'),
                    ValidationRules.custom(
                        (value) => {
                            if (!value) return true;
                            try {
                                new URL(value);
                                return true;
                            } catch {
                                return 'Please enter a valid URL (e.g., https://example.com)';
                            }
                        },
                        'Invalid URL format'
                    )
                ]}
            >
                <FloatingLabel
                    label="Website URL"
                    placeholder="https://example.com"
                    fullWidth
                />
            </FieldValidator>

            <FieldValidator
                rules={[
                    ValidationRules.required('Color is required'),
                    ValidationRules.custom(
                        (value) => {
                            if (!value) return true;
                            const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
                            return hexRegex.test(value) || 'Please enter a valid hex color (e.g., #FF0000)';
                        },
                        'Invalid hex color format'
                    )
                ]}
            >
                <FloatingLabel
                    label="Hex Color"
                    placeholder="#FF0000"
                    fullWidth
                />
            </FieldValidator>
        </FormLayout>
    ),
};
