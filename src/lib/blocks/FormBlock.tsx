import { Card, Button, Input, Select, Textarea } from '../components';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea' | 'checkbox' | 'radio';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
}

interface FormBlockProps {
  title?: string;
  description?: string;
  fields: FormField[];
  submitText?: string;
  onSubmit?: (data: any) => void;
  layout?: 'single' | 'double' | 'grid';
  showValidation?: boolean;
  className?: string;
}

const defaultFields: FormField[] = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    placeholder: 'Enter your first name',
    required: true
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    placeholder: 'Enter your last name',
    required: true
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email',
    required: true
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'text',
    placeholder: 'Enter your phone number'
  },
  {
    name: 'company',
    label: 'Company',
    type: 'select',
    placeholder: 'Select your company size',
    options: [
      { value: '1-10', label: '1-10 employees' },
      { value: '11-50', label: '11-50 employees' },
      { value: '51-200', label: '51-200 employees' },
      { value: '200+', label: '200+ employees' }
    ]
  },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Tell us about your project...'
  }
];

export function FormBlock({
  title = 'Contact Us',
  description = 'Get in touch with our team. We\'d love to hear from you.',
  fields = defaultFields,
  submitText = 'Submit',
  onSubmit,
  layout = 'single',
  showValidation = true,
  className = ''
}: FormBlockProps) {
  const layoutClasses = {
    single: 'grid grid-cols-1 gap-6',
    double: 'grid grid-cols-1 md:grid-cols-2 gap-6',
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    onSubmit?.(data);
  };

  const renderField = (field: FormField, index: number) => {
    const fieldId = `field-${field.name}`;
    const commonProps = {
      id: fieldId,
      name: field.name,
      placeholder: field.placeholder,
      required: field.required,
      className: 'w-full'
    };

    switch (field.type) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
        return (
          <div key={index} className={layout === 'double' && ['message', 'textarea'].includes(field.type) ? 'md:col-span-2' : ''}>
            <label htmlFor={fieldId} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <Input
              {...commonProps}
              type={field.type}
            />
            {showValidation && field.validation?.message && (
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {field.validation.message}
              </p>
            )}
          </div>
        );

      case 'select':
        return (
          <div key={index}>
            <label htmlFor={fieldId} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <Select 
              {...commonProps}
              options={[
                { value: '', label: field.placeholder || `Select ${field.label}` },
                ...(field.options || [])
              ]}
            />
          </div>
        );

      case 'textarea':
        return (
          <div key={index} className={layout === 'double' ? 'md:col-span-2' : layout === 'grid' ? 'lg:col-span-3' : ''}>
            <label htmlFor={fieldId} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <Textarea
              {...commonProps}
              rows={4}
            />
          </div>
        );

      case 'checkbox':
        return (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={fieldId}
              name={field.name}
              required={field.required}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor={fieldId} className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className={`max-w-4xl mx-auto ${className}`}>
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className={layoutClasses[layout]}>
            {fields.map((field, index) => renderField(field, index))}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <Button 
              type="submit" 
              size="lg" 
              className="px-8 py-3 min-w-[200px]"
            >
              {submitText}
            </Button>
          </div>
        </form>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            We'll get back to you within 24 hours. Your information is secure and will never be shared.
          </p>
        </div>
      </div>
    </Card>
  );
}