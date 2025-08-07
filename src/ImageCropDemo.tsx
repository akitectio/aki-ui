import { useState } from 'react';
import { ImageCrop, type CropArea } from './lib/components';

export default function ImageCropDemo() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [croppedImage, setCroppedImage] = useState<string>('');
    const [cropData, setCropData] = useState<CropArea | null>(null);

    return (
        <div className="p-8 max-w-4xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold mb-4">ImageCrop Component Test</h1>

            <div className="bg-white border rounded-lg p-6">
                <h2 className="text-lg font-medium mb-4">Upload and Crop Image</h2>

                <ImageCrop
                    file={selectedFile || undefined}
                    enableFilePicker={true}
                    accept="image/*"
                    defaultAspectRatio={1}
                    size="lg"
                    onFileSelect={(file) => {
                        console.log('File selected:', file.name);
                        setSelectedFile(file);
                        setCroppedImage(''); // Reset cropped image
                    }}
                    onCropChange={(crop) => {
                        console.log('Crop changed:', crop);
                        setCropData(crop);
                    }}
                    onCropComplete={(crop, croppedImageUrl) => {
                        console.log('Crop completed:', crop);
                        setCroppedImage(croppedImageUrl);
                    }}
                    onError={(error) => {
                        console.error('Crop error:', error);
                        alert(error);
                    }}
                />
            </div>

            {/* File Info */}
            {selectedFile && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-medium text-blue-900 mb-2">Selected File Info:</h3>
                    <div className="text-sm text-blue-800 space-y-1">
                        <p><strong>Name:</strong> {selectedFile.name}</p>
                        <p><strong>Size:</strong> {(selectedFile.size / 1024).toFixed(1)} KB</p>
                        <p><strong>Type:</strong> {selectedFile.type}</p>
                    </div>
                </div>
            )}

            {/* Crop Info */}
            {cropData && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium mb-2">Current Crop Area:</h3>
                    <div className="text-sm space-y-1">
                        <p><strong>Position:</strong> ({Math.round(cropData.x)}, {Math.round(cropData.y)})</p>
                        <p><strong>Size:</strong> {Math.round(cropData.width)} × {Math.round(cropData.height)}</p>
                    </div>
                </div>
            )}

            {/* Cropped Result */}
            {croppedImage && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-medium text-green-900 mb-3">Cropped Result:</h3>
                    <img
                        src={croppedImage}
                        alt="Cropped result"
                        className="border rounded shadow-sm max-w-sm"
                    />
                    <div className="mt-2 text-sm text-green-700">
                        <p>Image cropped successfully! Right-click to save.</p>
                    </div>
                </div>
            )}

            {/* Instructions */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-medium text-yellow-900 mb-2">Instructions:</h3>
                <ul className="text-sm text-yellow-800 space-y-1">
                    <li>1. Click on the crop area or drag & drop an image file</li>
                    <li>2. Select an aspect ratio from the buttons above</li>
                    <li>3. Drag the crop area to move it</li>
                    <li>4. Drag the handles to resize the crop area</li>
                    <li>5. Click "Crop Image" to generate the final result</li>
                </ul>
            </div>
        </div>
    );
}
