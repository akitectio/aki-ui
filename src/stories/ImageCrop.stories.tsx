import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ImageCrop, type AspectRatio, type CropArea } from '../lib/components';

const meta: Meta<typeof ImageCrop> = {
    title: 'Components/ImageCrop',
    component: ImageCrop,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Size of the crop area',
        },
        defaultAspectRatio: {
            control: { type: 'number' },
            description: 'Default aspect ratio (width/height)',
        },
        showAspectRatioSelector: {
            control: { type: 'boolean' },
            description: 'Show aspect ratio selector buttons',
        },
        allowMove: {
            control: { type: 'boolean' },
            description: 'Allow moving the crop area',
        },
        allowResize: {
            control: { type: 'boolean' },
            description: 'Allow resizing the crop area',
        },
        enableZoom: {
            control: { type: 'boolean' },
            description: 'Enable zoom functionality',
        },
        minZoom: {
            control: { type: 'number', min: 0.1, max: 1, step: 0.1 },
            description: 'Minimum zoom level',
        },
        maxZoom: {
            control: { type: 'number', min: 1, max: 5, step: 0.1 },
            description: 'Maximum zoom level',
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Disabled state',
        },
        cropBorderRadius: {
            control: { type: 'select' },
            options: ['rounded-none', 'rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-3xl', 'rounded-full'],
            description: 'Predefined border radius classes',
        },
        cropBorderRadiusPercent: {
            control: { type: 'range', min: 0, max: 50, step: 1 },
            description: 'Custom border radius percentage (0-50%)',
        },
        showBorderRadiusControl: {
            control: { type: 'boolean' },
            description: 'Show border radius control slider',
        },
    },
};

export default meta;
type Story = StoryObj<typeof ImageCrop>;

// Sample image for demonstrations
const SAMPLE_IMAGE = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop';

export const Default: Story = {
    args: {
        src: SAMPLE_IMAGE,
        size: 'md',
        defaultAspectRatio: 1,
        showAspectRatioSelector: true,
        allowMove: true,
        allowResize: true,
    },
};

export const WithCustomAspectRatios: Story = {
    args: {
        src: SAMPLE_IMAGE,
        size: 'md',
        defaultAspectRatio: 16 / 9,
        showAspectRatioSelector: true,
        allowMove: true,
        allowResize: true,
        aspectRatios: [
            { label: 'Free', value: null },
            { label: 'Square (1:1)', value: 1, width: 1, height: 1 },
            { label: 'Instagram (1:1)', value: 1, width: 1, height: 1 },
            { label: 'Twitter Header (3:1)', value: 3, width: 3, height: 1 },
            { label: 'Facebook Cover (16:9)', value: 16 / 9, width: 16, height: 9 },
            { label: 'Portrait (3:4)', value: 3 / 4, width: 3, height: 4 },
        ],
    },
};

export const Sizes: Story = {
    render: (args) => (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-medium mb-4">Small</h3>
                <ImageCrop {...args} size="sm" />
            </div>
            <div>
                <h3 className="text-lg font-medium mb-4">Medium</h3>
                <ImageCrop {...args} size="md" />
            </div>
            <div>
                <h3 className="text-lg font-medium mb-4">Large</h3>
                <ImageCrop {...args} size="lg" />
            </div>
        </div>
    ),
    args: {
        src: SAMPLE_IMAGE,
        defaultAspectRatio: 1,
    },
};

export const NoAspectRatioSelector: Story = {
    args: {
        src: SAMPLE_IMAGE,
        size: 'md',
        defaultAspectRatio: null,
        showAspectRatioSelector: false,
        allowMove: true,
        allowResize: true,
    },
};

export const FixedSquareAspectRatio: Story = {
    args: {
        src: SAMPLE_IMAGE,
        size: 'md',
        defaultAspectRatio: 1,
        showAspectRatioSelector: false,
        allowMove: true,
        allowResize: true,
        aspectRatios: [
            { label: 'Square (1:1)', value: 1, width: 1, height: 1 },
        ],
    },
};

export const ReadOnly: Story = {
    args: {
        src: SAMPLE_IMAGE,
        size: 'md',
        defaultAspectRatio: 16 / 9,
        showAspectRatioSelector: true,
        allowMove: false,
        allowResize: false,
    },
};

export const Disabled: Story = {
    args: {
        src: SAMPLE_IMAGE,
        size: 'md',
        defaultAspectRatio: 1,
        showAspectRatioSelector: true,
        allowMove: true,
        allowResize: true,
        disabled: true,
    },
};

export const WithFileUpload: Story = {
    render: (args) => {
        const [selectedFile, setSelectedFile] = useState<File | undefined>();
        const [cropArea, setCropArea] = useState<CropArea | null>(null);
        const [croppedImageUrl, setCroppedImageUrl] = useState<string>('');

        const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];
            if (file) {
                setSelectedFile(file);
                setCroppedImageUrl(''); // Reset cropped image when new file is selected
            }
        };

        const handleCropComplete = (crop: CropArea, croppedUrl: string) => {
            setCropArea(crop);
            setCroppedImageUrl(croppedUrl);
        };

        return (
            <div className="space-y-6 max-w-2xl">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Choose Image File
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                </div>

                {selectedFile && (
                    <div>
                        <h3 className="text-lg font-medium mb-4">Crop Your Image</h3>
                        <ImageCrop
                            {...args}
                            file={selectedFile}
                            onCropChange={setCropArea}
                            onCropComplete={handleCropComplete}
                        />
                    </div>
                )}

                {cropArea && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Crop Information:</h4>
                        <pre className="text-sm text-gray-600">
                            {JSON.stringify(cropArea, null, 2)}
                        </pre>
                    </div>
                )}

                {croppedImageUrl && (
                    <div>
                        <h4 className="font-medium mb-2">Cropped Result:</h4>
                        <img
                            src={croppedImageUrl}
                            alt="Cropped result"
                            className="border border-gray-300 rounded max-w-xs"
                        />
                    </div>
                )}
            </div>
        );
    },
    args: {
        size: 'md',
        defaultAspectRatio: 1,
        showAspectRatioSelector: true,
        allowMove: true,
        allowResize: true,
    },
};

export const FilePicker: Story = {
    render: (args) => {
        const [selectedFile, setSelectedFile] = useState<File | null>(null);
        const [croppedImage, setCroppedImage] = useState<string>('');
        const [cropInfo, setCropInfo] = useState<CropArea | null>(null);

        return (
            <div className="space-y-6 max-w-2xl">
                <div className="text-center">
                    <h3 className="text-lg font-medium mb-2">File Picker & Drag-and-Drop</h3>
                    <p className="text-sm text-gray-600">
                        Click the area below or drag and drop an image to start cropping
                    </p>
                </div>

                <ImageCrop
                    {...args}
                    file={selectedFile || undefined}
                    onFileSelect={(file) => {
                        setSelectedFile(file);
                        setCroppedImage(''); // Reset cropped image
                        setCropInfo(null);
                        console.log('File selected:', file.name);
                    }}
                    onCropChange={(crop) => {
                        setCropInfo(crop);
                    }}
                    onCropComplete={(crop, croppedImageUrl) => {
                        setCroppedImage(croppedImageUrl);
                        console.log('Crop completed:', { crop, croppedImageUrl });
                    }}
                    onError={(error) => {
                        alert(`Error: ${error}`);
                    }}
                    onZoomChange={(zoom) => {
                        console.log('Zoom changed:', zoom);
                    }}
                />

                {/* File info */}
                {selectedFile && (
                    <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">Selected File:</h4>
                        <p className="text-sm text-blue-800">
                            <strong>Name:</strong> {selectedFile.name}
                        </p>
                        <p className="text-sm text-blue-800">
                            <strong>Size:</strong> {(selectedFile.size / 1024).toFixed(1)} KB
                        </p>
                        <p className="text-sm text-blue-800">
                            <strong>Type:</strong> {selectedFile.type}
                        </p>
                    </div>
                )}

                {/* Crop info */}
                {cropInfo && (
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium mb-2">Current Crop Area:</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <strong>Position:</strong> ({Math.round(cropInfo.x)}, {Math.round(cropInfo.y)})
                            </div>
                            <div>
                                <strong>Size:</strong> {Math.round(cropInfo.width)} × {Math.round(cropInfo.height)}
                            </div>
                        </div>
                    </div>
                )}

                {/* Cropped result */}
                {croppedImage && (
                    <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-medium text-green-900 mb-3">Cropped Result:</h4>
                        <img
                            src={croppedImage}
                            alt="Cropped result"
                            className="border rounded max-w-full h-auto shadow-sm"
                        />
                        <div className="mt-2 text-xs text-green-700">
                            <p>Right-click the image above to save it</p>
                        </div>
                    </div>
                )}
            </div>
        );
    },
    args: {
        enableFilePicker: true,
        accept: 'image/*',
        size: 'lg',
        showAspectRatioSelector: true,
        defaultAspectRatio: 1,
        allowMove: true,
        allowResize: true,
        enableZoom: true,
        minZoom: 0.5,
        maxZoom: 3,
    },
};

export const ZoomDemo: Story = {
    render: (args) => {
        const [selectedFile, setSelectedFile] = useState<File | null>(null);
        const [croppedImage, setCroppedImage] = useState<string>('');
        const [zoomLevel, setZoomLevel] = useState<number>(1);

        return (
            <div className="space-y-6 max-w-2xl">
                <div className="text-center">
                    <h3 className="text-lg font-medium mb-2">Zoom & Crop Demo</h3>
                    <p className="text-sm text-gray-600">
                        Use mouse wheel to zoom, or click the zoom buttons. Current zoom: {(zoomLevel * 100).toFixed(0)}%
                    </p>
                </div>

                <ImageCrop
                    {...args}
                    src={SAMPLE_IMAGE}
                    enableZoom={true}
                    minZoom={0.3}
                    maxZoom={4}
                    onZoomChange={(zoom) => {
                        setZoomLevel(zoom);
                        console.log('Zoom level:', zoom);
                    }}
                    onCropComplete={(crop, croppedImageUrl) => {
                        setCroppedImage(croppedImageUrl);
                        console.log('Crop completed at zoom level:', zoomLevel);
                    }}
                />

                {/* Zoom Info */}
                <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-medium text-purple-900 mb-2">Zoom Features:</h4>
                    <ul className="text-sm text-purple-800 space-y-1">
                        <li>• Mouse wheel: Scroll to zoom in/out</li>
                        <li>• Zoom buttons: Click +/- to adjust zoom</li>
                        <li>• Reset button: Return to 100% zoom</li>
                        <li>• Current zoom level: {(zoomLevel * 100).toFixed(0)}%</li>
                    </ul>
                </div>

                {croppedImage && (
                    <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-medium text-green-900 mb-3">Cropped at {(zoomLevel * 100).toFixed(0)}% zoom:</h4>
                        <img
                            src={croppedImage}
                            alt="Cropped result"
                            className="border rounded shadow-sm max-w-full h-auto"
                        />
                    </div>
                )}
            </div>
        );
    },
    args: {
        size: 'lg',
        enableZoom: true,
        minZoom: 0.3,
        maxZoom: 4,
        showAspectRatioSelector: true,
        defaultAspectRatio: 1,
    },
};

export const WithBorderRadiusControl: Story = {
    args: {
        src: SAMPLE_IMAGE,
        size: 'md',
        defaultAspectRatio: 1,
        showAspectRatioSelector: true,
        allowMove: true,
        allowResize: true,
        showBorderRadiusControl: true,
        cropBorderRadiusPercent: 25,
    },
};

export const CustomBorderRadius: Story = {
    render: (args) => {
        const [borderRadiusPercent, setBorderRadiusPercent] = useState(20);

        return (
            <div className="max-w-2xl space-y-4">
                <h3 className="text-lg font-medium">Custom Border Radius</h3>
                <p className="text-sm text-gray-600">
                    Use the slider below to adjust the crop area border radius from 0% to 50%.
                </p>
                <ImageCrop
                    {...args}
                    cropBorderRadiusPercent={borderRadiusPercent}
                    onBorderRadiusPercentChange={setBorderRadiusPercent}
                    showBorderRadiusControl={true}
                />
            </div>
        );
    },
    args: {
        src: SAMPLE_IMAGE,
        size: 'md',
        defaultAspectRatio: 1,
        showAspectRatioSelector: true,
        allowMove: true,
        allowResize: true,
    },
};

export const BorderRadiusVariations: Story = {
    render: (args) => (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-medium mb-4">No Border Radius (0%)</h3>
                <ImageCrop {...args} cropBorderRadiusPercent={0} />
            </div>
            <div>
                <h3 className="text-lg font-medium mb-4">Medium Border Radius (25%)</h3>
                <ImageCrop {...args} cropBorderRadiusPercent={25} />
            </div>
            <div>
                <h3 className="text-lg font-medium mb-4">High Border Radius (50% - Circle)</h3>
                <ImageCrop {...args} cropBorderRadiusPercent={50} />
            </div>
        </div>
    ),
    args: {
        src: SAMPLE_IMAGE,
        size: 'md',
        defaultAspectRatio: 1,
        showAspectRatioSelector: false,
        allowMove: true,
        allowResize: true,
    },
};

export const SocialMediaPresets: Story = {
    render: (args) => {
        const socialAspectRatios: AspectRatio[] = [
            { label: 'Instagram Square', value: 1, width: 1, height: 1 },
            { label: 'Instagram Story', value: 9 / 16, width: 9, height: 16 },
            { label: 'Facebook Post', value: 16 / 9, width: 16, height: 9 },
            { label: 'Twitter Post', value: 16 / 9, width: 16, height: 9 },
            { label: 'Twitter Header', value: 3, width: 3, height: 1 },
            { label: 'LinkedIn Post', value: 16 / 9, width: 16, height: 9 },
            { label: 'YouTube Thumbnail', value: 16 / 9, width: 16, height: 9 },
            { label: 'Pinterest Pin', value: 2 / 3, width: 2, height: 3 },
        ];

        return (
            <div className="max-w-2xl">
                <h3 className="text-lg font-medium mb-4">Social Media Crop Presets</h3>
                <ImageCrop
                    {...args}
                    aspectRatios={socialAspectRatios}
                    defaultAspectRatio={1}
                />
            </div>
        );
    },
    args: {
        src: SAMPLE_IMAGE,
        size: 'md',
        showAspectRatioSelector: true,
        allowMove: true,
        allowResize: true,
    },
};
