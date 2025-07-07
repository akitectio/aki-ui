'use client'

import { useState } from 'react'
import { EyeIcon, EyeSlashIcon, CheckIcon } from '@heroicons/react/24/outline'
import { Card } from '@akitectio/aki-ui'
import { CodeBlock } from '@/components/CodeBlock'
import { Tabs } from '@/components/Tabs'
import BlockHeader from '@/components/BlockHeader'
import DevicePreviewWrapper from '@/components/DevicePreviewWrapper'

// Multi-step Signup Form Component
function SignupForm({ selectedDevice = 'desktop' }: { selectedDevice?: 'mobile' | 'tablet' | 'desktop' | 'fullscreen' }) {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        // Step 1: Basic Info
        firstName: '',
        lastName: '',
        email: '',
        // Step 2: Account Security
        password: '',
        confirmPassword: '',
        // Step 3: Preferences
        accountType: 'personal',
        notifications: true,
        newsletter: false,
        terms: false
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})

    const isMobile = selectedDevice === 'mobile'
    const totalSteps = 3

    const getPasswordStrength = (password: string) => {
        let strength = 0
        if (password.length >= 8) strength++
        if (/[A-Z]/.test(password)) strength++
        if (/[a-z]/.test(password)) strength++
        if (/[0-9]/.test(password)) strength++
        if (/[^A-Za-z0-9]/.test(password)) strength++
        return strength
    }

    const passwordStrength = getPasswordStrength(formData.password)
    const passwordStrengthLabels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong']
    const passwordStrengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500']

    const validateStep = (step: number) => {
        const newErrors: Record<string, string> = {}

        if (step === 1) {
            if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
            if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
            if (!formData.email.trim()) {
                newErrors.email = 'Email is required'
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = 'Email is invalid'
            }
        }

        if (step === 2) {
            if (!formData.password) {
                newErrors.password = 'Password is required'
            } else if (formData.password.length < 8) {
                newErrors.password = 'Password must be at least 8 characters'
            }
            if (!formData.confirmPassword) {
                newErrors.confirmPassword = 'Please confirm your password'
            } else if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = 'Passwords do not match'
            }
        }

        if (step === 3) {
            if (!formData.terms) {
                newErrors.terms = 'You must accept the terms and conditions'
            }
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleNext = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(currentStep + 1)
        }
    }

    const handlePrevious = () => {
        setCurrentStep(currentStep - 1)
    }

    const handleSubmit = async () => {
        if (validateStep(currentStep)) {
            setIsLoading(true)
            // Simulate API call
            setTimeout(() => {
                setIsLoading(false)
                alert('Account created successfully!')
            }, 2000)
        }
    }

    const updateFormData = (field: string, value: any) => {
        setFormData({ ...formData, [field]: value })
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors({ ...errors, [field]: '' })
        }
    }

    const renderStep1 = () => (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2 className={`font-bold text-gray-900 dark:text-white ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
                    Create your account
                </h2>
                <p className={`mt-2 text-gray-600 dark:text-gray-400 ${isMobile ? 'text-sm' : 'text-base'}`}>
                    Let's start with some basic information
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        First Name
                    </label>
                    <input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => updateFormData('firstName', e.target.value)}
                        className={`mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm dark:bg-gray-800 dark:text-white ${errors.firstName ? 'border-red-300' : ''}`}
                        placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.firstName}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Last Name
                    </label>
                    <input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => updateFormData('lastName', e.target.value)}
                        className={`mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm dark:bg-gray-800 dark:text-white ${errors.lastName ? 'border-red-300' : ''}`}
                        placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.lastName}</p>
                    )}
                </div>
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className={`mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm dark:bg-gray-800 dark:text-white ${errors.email ? 'border-red-300' : ''}`}
                    placeholder="Enter your email address"
                />
                {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                )}
            </div>

            {/* Social Registration Options */}
            <div className="mt-6">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">Or continue with</span>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                    <button
                        type="button"
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2">GitHub</span>
                    </button>

                    <button
                        type="button"
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        <span className="ml-2">Google</span>
                    </button>
                </div>
            </div>
        </div>
    )

    const renderStep2 = () => (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2 className={`font-bold text-gray-900 dark:text-white ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
                    Secure your account
                </h2>
                <p className={`mt-2 text-gray-600 dark:text-gray-400 ${isMobile ? 'text-sm' : 'text-base'}`}>
                    Create a strong password to protect your account
                </p>
            </div>

            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Password
                </label>
                <div className="mt-1 relative">
                    <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => updateFormData('password', e.target.value)}
                        className={`appearance-none block w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm dark:bg-gray-800 dark:text-white ${errors.password ? 'border-red-300' : ''}`}
                        placeholder="Create a strong password"
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                        ) : (
                            <EyeIcon className="h-5 w-5 text-gray-400" />
                        )}
                    </button>
                </div>
                {errors.password && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.password}</p>
                )}

                {/* Password Strength Meter */}
                {formData.password && (
                    <div className="mt-3">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Password strength</span>
                            <span className={`text-sm font-medium ${passwordStrength <= 2 ? 'text-red-600' : passwordStrength <= 3 ? 'text-yellow-600' : 'text-green-600'}`}>
                                {passwordStrengthLabels[passwordStrength - 1] || 'Very Weak'}
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                                className={`h-2 rounded-full transition-all duration-300 ${passwordStrengthColors[passwordStrength - 1] || 'bg-red-500'}`}
                                style={{ width: `${(passwordStrength / 5) * 100}%` }}
                            ></div>
                        </div>
                        <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                                <li className={`flex items-center ${formData.password.length >= 8 ? 'text-green-600' : 'text-gray-400'}`}>
                                    <CheckIcon className="h-3 w-3 mr-1" />
                                    At least 8 characters
                                </li>
                                <li className={`flex items-center ${/[A-Z]/.test(formData.password) ? 'text-green-600' : 'text-gray-400'}`}>
                                    <CheckIcon className="h-3 w-3 mr-1" />
                                    Uppercase letter
                                </li>
                                <li className={`flex items-center ${/[a-z]/.test(formData.password) ? 'text-green-600' : 'text-gray-400'}`}>
                                    <CheckIcon className="h-3 w-3 mr-1" />
                                    Lowercase letter
                                </li>
                                <li className={`flex items-center ${/[0-9]/.test(formData.password) ? 'text-green-600' : 'text-gray-400'}`}>
                                    <CheckIcon className="h-3 w-3 mr-1" />
                                    Number
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>

            <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Confirm Password
                </label>
                <div className="mt-1 relative">
                    <input
                        id="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={formData.confirmPassword}
                        onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                        className={`appearance-none block w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm dark:bg-gray-800 dark:text-white ${errors.confirmPassword ? 'border-red-300' : ''}`}
                        placeholder="Confirm your password"
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword ? (
                            <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                        ) : (
                            <EyeIcon className="h-5 w-5 text-gray-400" />
                        )}
                    </button>
                </div>
                {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.confirmPassword}</p>
                )}
            </div>
        </div>
    )

    const renderStep3 = () => (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2 className={`font-bold text-gray-900 dark:text-white ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
                    Almost done!
                </h2>
                <p className={`mt-2 text-gray-600 dark:text-gray-400 ${isMobile ? 'text-sm' : 'text-base'}`}>
                    Choose your preferences and accept our terms
                </p>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Account Type
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className={`relative flex cursor-pointer rounded-lg border p-4 focus:outline-none ${formData.accountType === 'personal' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-300 dark:border-gray-600'}`}>
                        <input
                            type="radio"
                            value="personal"
                            checked={formData.accountType === 'personal'}
                            onChange={(e) => updateFormData('accountType', e.target.value)}
                            className="sr-only"
                        />
                        <div className="flex flex-1">
                            <div className="flex flex-col">
                                <span className="block text-sm font-medium text-gray-900 dark:text-white">Personal</span>
                                <span className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    For individual use
                                </span>
                            </div>
                        </div>
                        {formData.accountType === 'personal' && (
                            <CheckIcon className="h-5 w-5 text-blue-600" />
                        )}
                    </label>

                    <label className={`relative flex cursor-pointer rounded-lg border p-4 focus:outline-none ${formData.accountType === 'business' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-300 dark:border-gray-600'}`}>
                        <input
                            type="radio"
                            value="business"
                            checked={formData.accountType === 'business'}
                            onChange={(e) => updateFormData('accountType', e.target.value)}
                            className="sr-only"
                        />
                        <div className="flex flex-1">
                            <div className="flex flex-col">
                                <span className="block text-sm font-medium text-gray-900 dark:text-white">Business</span>
                                <span className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    For teams and organizations
                                </span>
                            </div>
                        </div>
                        {formData.accountType === 'business' && (
                            <CheckIcon className="h-5 w-5 text-blue-600" />
                        )}
                    </label>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center">
                    <input
                        id="notifications"
                        type="checkbox"
                        checked={formData.notifications}
                        onChange={(e) => updateFormData('notifications', e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="notifications" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                        Enable email notifications for important updates
                    </label>
                </div>

                <div className="flex items-center">
                    <input
                        id="newsletter"
                        type="checkbox"
                        checked={formData.newsletter}
                        onChange={(e) => updateFormData('newsletter', e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                        Subscribe to our newsletter for tips and updates
                    </label>
                </div>

                <div className="flex items-start">
                    <input
                        id="terms"
                        type="checkbox"
                        checked={formData.terms}
                        onChange={(e) => updateFormData('terms', e.target.checked)}
                        className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-0.5 ${errors.terms ? 'border-red-300' : ''}`}
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                        I agree to the{' '}
                        <a href="#" className="text-blue-600 hover:text-blue-500 dark:text-blue-400">
                            Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-blue-600 hover:text-blue-500 dark:text-blue-400">
                            Privacy Policy
                        </a>
                    </label>
                </div>
                {errors.terms && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.terms}</p>
                )}
            </div>
        </div>
    )

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                {/* Progress Indicator */}
                <div className="mb-8">
                    <div className="flex items-center justify-center">
                        {Array.from({ length: totalSteps }, (_, i) => (
                            <div key={i} className="flex items-center">
                                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${i + 1 <= currentStep ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300 dark:border-gray-600 text-gray-400'}`}>
                                    {i + 1 < currentStep ? (
                                        <CheckIcon className="w-5 h-5" />
                                    ) : (
                                        <span className="text-sm font-medium">{i + 1}</span>
                                    )}
                                </div>
                                {i < totalSteps - 1 && (
                                    <div className={`w-12 h-0.5 ${i + 1 < currentStep ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`} />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-600 dark:text-gray-400">
                        <span>Basic Info</span>
                        <span>Security</span>
                        <span>Preferences</span>
                    </div>
                </div>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Card className={`${isMobile ? 'mx-4' : ''} py-8 px-4 shadow sm:rounded-lg sm:px-10`}>
                    <form onSubmit={(e) => e.preventDefault()}>
                        {currentStep === 1 && renderStep1()}
                        {currentStep === 2 && renderStep2()}
                        {currentStep === 3 && renderStep3()}

                        {/* Navigation Buttons */}
                        <div className="mt-8 flex justify-between">
                            <button
                                type="button"
                                onClick={handlePrevious}
                                disabled={currentStep === 1}
                                className={`px-4 py-2 text-sm font-medium rounded-md ${currentStep === 1
                                    ? 'text-gray-400 cursor-not-allowed'
                                    : 'text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                                    }`}
                            >
                                Previous
                            </button>

                            {currentStep < totalSteps ? (
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Next
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                    className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                                >
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Creating...
                                        </>
                                    ) : (
                                        'Create Account'
                                    )}
                                </button>
                            )}
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default function SignupFormPage() {
    const code = `import { useState } from 'react'
import { EyeIcon, EyeSlashIcon, CheckIcon } from '@heroicons/react/24/outline'
import { Card } from '@akitectio/aki-ui'

function SignupForm() {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        accountType: 'personal',
        notifications: true,
        newsletter: false,
        terms: false
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})

    const totalSteps = 3

    const getPasswordStrength = (password) => {
        let strength = 0
        if (password.length >= 8) strength++
        if (/[A-Z]/.test(password)) strength++
        if (/[a-z]/.test(password)) strength++
        if (/[0-9]/.test(password)) strength++
        if (/[^A-Za-z0-9]/.test(password)) strength++
        return strength
    }

    const validateStep = (step) => {
        const newErrors = {}

        if (step === 1) {
            if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
            if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
            if (!formData.email.trim()) {
                newErrors.email = 'Email is required'
            } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
                newErrors.email = 'Email is invalid'
            }
        }

        if (step === 2) {
            if (!formData.password) {
                newErrors.password = 'Password is required'
            } else if (formData.password.length < 8) {
                newErrors.password = 'Password must be at least 8 characters'
            }
            if (!formData.confirmPassword) {
                newErrors.confirmPassword = 'Please confirm your password'
            } else if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = 'Passwords do not match'
            }
        }

        if (step === 3) {
            if (!formData.terms) {
                newErrors.terms = 'You must accept the terms and conditions'
            }
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleNext = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(currentStep + 1)
        }
    }

    const handlePrevious = () => {
        setCurrentStep(currentStep - 1)
    }

    const handleSubmit = async () => {
        if (validateStep(currentStep)) {
            setIsLoading(true)
            // Simulate API call
            setTimeout(() => {
                setIsLoading(false)
                alert('Account created successfully!')
            }, 2000)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                {/* Progress Indicator */}
                <div className="mb-8">
                    <div className="flex items-center justify-center">
                        {Array.from({ length: totalSteps }, (_, i) => (
                            <div key={i} className="flex items-center">
                                <div className={\`flex items-center justify-center w-8 h-8 rounded-full border-2 \${i + 1 <= currentStep ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300 text-gray-400'}\`}>
                                    {i + 1 < currentStep ? (
                                        <CheckIcon className="w-5 h-5" />
                                    ) : (
                                        <span className="text-sm font-medium">{i + 1}</span>
                                    )}
                                </div>
                                {i < totalSteps - 1 && (
                                    <div className={\`w-12 h-0.5 \${i + 1 < currentStep ? 'bg-blue-600' : 'bg-gray-300'}\`} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Card className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    {/* Multi-step form content here */}
                    
                    {/* Navigation Buttons */}
                    <div className="mt-8 flex justify-between">
                        <button
                            type="button"
                            onClick={handlePrevious}
                            disabled={currentStep === 1}
                            className="px-4 py-2 text-sm font-medium rounded-md border border-gray-300 hover:bg-gray-50"
                        >
                            Previous
                        </button>

                        {currentStep < totalSteps ? (
                            <button
                                type="button"
                                onClick={handleNext}
                                className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={handleSubmit}
                                disabled={isLoading}
                                className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 disabled:opacity-50"
                            >
                                {isLoading ? 'Creating...' : 'Create Account'}
                            </button>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    )
}`

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <BlockHeader title="Signup Form" />

            {/* Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Multi-Step Signup Form
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        A comprehensive signup form with multi-step wizard, progress indicator, real-time validation, and password strength meter. Perfect for detailed user registration flows.
                    </p>
                </div>

                {/* Tabs for Preview and Code */}
                <Tabs
                    persistKey="signup-form"
                    useUrlHash={true}
                    tabs={[
                        {
                            id: 'preview',
                            label: 'Preview',
                            content: (
                                <DevicePreviewWrapper>
                                    {(selectedDevice) => <SignupForm selectedDevice={selectedDevice} />}
                                </DevicePreviewWrapper>
                            )
                        },
                        {
                            id: 'code',
                            label: 'Code',
                            content: (
                                <div className="space-y-6">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Implementation
                                    </h3>
                                    <CodeBlock code={code} language="tsx" />
                                </div>
                            )
                        }
                    ]}
                    defaultTab="preview"
                />

                {/* Features */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Features
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <li>• Multi-step form wizard (3 steps)</li>
                            <li>• Progress indicator with visual feedback</li>
                            <li>• Real-time form validation</li>
                            <li>• Password strength meter</li>
                            <li>• Password visibility toggle</li>
                            <li>• Account type selection</li>
                            <li>• Terms and conditions acceptance</li>
                            <li>• Social registration options</li>
                            <li>• Responsive design</li>
                            <li>• Dark mode support</li>
                            <li>• Form state persistence</li>
                            <li>• Accessibility features</li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Use Cases
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <li>• SaaS platform signups</li>
                            <li>• Membership registrations</li>
                            <li>• Course enrollments</li>
                            <li>• Job application forms</li>
                            <li>• Event registrations</li>
                            <li>• Newsletter subscriptions</li>
                            <li>• Community platforms</li>
                            <li>• Service onboarding</li>
                            <li>• E-commerce account creation</li>
                            <li>• Professional service signups</li>
                            <li>• Educational platform registration</li>
                            <li>• Software trial signups</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}
