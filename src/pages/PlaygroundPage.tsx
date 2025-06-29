import React, { useState } from 'react';
import {
    Button,
    Card,
    Badge,
    Select,
    Switch,
    Alert,
    Slider,
    Checkbox,
    Radio,
    RadioGroup,
    VStack,
    Grid
} from '../lib/components';
import { useRouter } from '../components/Router';
import { VERSION } from '../lib/version';

const PlaygroundPage: React.FC = () => {
    const { navigate } = useRouter();
    const [buttonVariant, setButtonVariant] = useState('primary');
    const [buttonSize, setButtonSize] = useState('md');
    const [alertVariant, setAlertVariant] = useState('info');
    const [showAlert, setShowAlert] = useState(true);
    const [sliderValue, setSliderValue] = useState(50);
    const [switchChecked, setSwitchChecked] = useState(false);
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('option1');

    const buttonVariants = [
        'primary', 'secondary', 'success', 'danger', 'warning', 'info',
        'outline-primary', 'outline-secondary', 'outline-success', 'outline-danger'
    ];

    const buttonSizes = ['sm', 'md', 'lg'];
    const alertVariants = ['success', 'danger', 'warning', 'info'];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <Button
                                variant="outline-secondary"
                                size="sm"
                                onClick={() => navigate('/')}
                                className="mr-4"
                            >
                                ← Home
                            </Button>
                            <h1 className="text-xl font-bold text-gray-900">Component Playground</h1>
                            <Badge variant="primary">v{VERSION}</Badge>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Interactive Component Playground
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Experiment with Aki UI components in real-time. Adjust properties and see changes instantly.
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Button Playground */}
                    <Card className="p-6">
                        <h3 className="text-xl font-semibold mb-6">Button Component</h3>
                        <Grid cols={{ base: 1, lg: 2 }} gap={8}>
                            <div>
                                <h4 className="font-medium mb-4">Configuration</h4>
                                <VStack spacing={4}>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Variant
                                        </label>
                                        <Select
                                            value={buttonVariant}
                                            onChange={(value) => setButtonVariant(value as string)}
                                            options={buttonVariants.map(variant => ({
                                                value: variant,
                                                label: variant.charAt(0).toUpperCase() + variant.slice(1)
                                            }))}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Size
                                        </label>
                                        <RadioGroup
                                            name="buttonSize"
                                            value={buttonSize}
                                            onChange={setButtonSize}
                                        >
                                            {buttonSizes.map(size => (
                                                <Radio
                                                    key={size}
                                                    value={size}
                                                    label={size.toUpperCase()}
                                                />
                                            ))}
                                        </RadioGroup>
                                    </div>
                                </VStack>
                            </div>
                            <div>
                                <h4 className="font-medium mb-4">Preview</h4>
                                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                                    <Button
                                        variant={buttonVariant as any}
                                        size={buttonSize as any}
                                    >
                                        Sample Button
                                    </Button>
                                </div>
                                <div className="mt-4 bg-gray-900 rounded-lg p-4">
                                    <pre className="text-gray-100 text-sm">
                                        <code>{`<Button variant="${buttonVariant}" size="${buttonSize}">
  Sample Button
</Button>`}</code>
                                    </pre>
                                </div>
                            </div>
                        </Grid>
                    </Card>

                    {/* Alert Playground */}
                    <Card className="p-6">
                        <h3 className="text-xl font-semibold mb-6">Alert Component</h3>
                        <Grid cols={{ base: 1, lg: 2 }} gap={8}>
                            <div>
                                <h4 className="font-medium mb-4">Configuration</h4>
                                <VStack spacing={4}>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Variant
                                        </label>
                                        <Select
                                            value={alertVariant}
                                            onChange={(value) => setAlertVariant(value as string)}
                                            options={alertVariants.map(variant => ({
                                                value: variant,
                                                label: variant.charAt(0).toUpperCase() + variant.slice(1)
                                            }))}
                                        />
                                    </div>
                                    <div>
                                        <Switch
                                            checked={showAlert}
                                            onChange={setShowAlert}
                                            label="Show Alert"
                                        />
                                    </div>
                                </VStack>
                            </div>
                            <div>
                                <h4 className="font-medium mb-4">Preview</h4>
                                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                                    {showAlert && (
                                        <Alert variant={alertVariant as any}>
                                            This is a {alertVariant} alert message.
                                        </Alert>
                                    )}
                                    {!showAlert && (
                                        <div className="text-gray-400 text-center py-4">
                                            Alert is hidden
                                        </div>
                                    )}
                                </div>
                                <div className="mt-4 bg-gray-900 rounded-lg p-4">
                                    <pre className="text-gray-100 text-sm">
                                        <code>{showAlert ?
                                            `<Alert variant="${alertVariant}">
  This is a ${alertVariant} alert message.
</Alert>` :
                                            '// Alert is hidden'}</code>
                                    </pre>
                                </div>
                            </div>
                        </Grid>
                    </Card>

                    {/* Form Controls Playground */}
                    <Card className="p-6">
                        <h3 className="text-xl font-semibold mb-6">Form Controls</h3>
                        <Grid cols={{ base: 1, lg: 2 }} gap={8}>
                            <div>
                                <h4 className="font-medium mb-4">Interactive Controls</h4>
                                <VStack spacing={6}>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Slider Value: {sliderValue}
                                        </label>
                                        <Slider
                                            value={sliderValue}
                                            onChange={(value) => setSliderValue(Array.isArray(value) ? value[0] : value)}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                    </div>
                                    <div>
                                        <Switch
                                            checked={switchChecked}
                                            onChange={setSwitchChecked}
                                            label={`Switch is ${switchChecked ? 'ON' : 'OFF'}`}
                                        />
                                    </div>
                                    <div>
                                        <Checkbox
                                            checked={checkboxChecked}
                                            onChange={setCheckboxChecked}
                                            label={`Checkbox is ${checkboxChecked ? 'checked' : 'unchecked'}`}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Radio Group
                                        </label>
                                        <RadioGroup
                                            name="playgroundRadio"
                                            value={radioValue}
                                            onChange={setRadioValue}
                                        >
                                            <Radio value="option1" label="Option 1" />
                                            <Radio value="option2" label="Option 2" />
                                            <Radio value="option3" label="Option 3" />
                                        </RadioGroup>
                                    </div>
                                </VStack>
                            </div>
                            <div>
                                <h4 className="font-medium mb-4">Current State</h4>
                                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                                    <VStack spacing={3}>
                                        <div className="flex justify-between">
                                            <span>Slider Value:</span>
                                            <Badge variant="primary">{sliderValue}</Badge>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Switch State:</span>
                                            <Badge variant={switchChecked ? 'success' : 'secondary'}>
                                                {switchChecked ? 'ON' : 'OFF'}
                                            </Badge>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Checkbox State:</span>
                                            <Badge variant={checkboxChecked ? 'success' : 'secondary'}>
                                                {checkboxChecked ? 'Checked' : 'Unchecked'}
                                            </Badge>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Radio Selection:</span>
                                            <Badge variant="info">{radioValue}</Badge>
                                        </div>
                                    </VStack>
                                </div>
                                <div className="mt-4 bg-gray-900 rounded-lg p-4">
                                    <pre className="text-gray-100 text-sm">
                                        <code>{`// Current state
sliderValue: ${sliderValue}
switchChecked: ${switchChecked}
checkboxChecked: ${checkboxChecked}
radioValue: "${radioValue}"`}</code>
                                    </pre>
                                </div>
                            </div>
                        </Grid>
                    </Card>

                    {/* Call to Action */}
                    <div className="text-center py-12 bg-white rounded-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Explore More Components
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            This playground showcases just a few of the available components.
                            Visit our documentation to see all components and their full capabilities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={() => navigate('/docs')}
                            >
                                View Documentation
                            </Button>
                            <Button
                                variant="outline-secondary"
                                size="lg"
                                onClick={() => navigate('/templates')}
                            >
                                Browse Templates
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaygroundPage;
