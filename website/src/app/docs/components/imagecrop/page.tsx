'use client'

import { useState } from 'react'
import { Card, Modal, ModalHeader, ModalBody, ModalFooter } from '@akitectio/aki-ui'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

// Import ImageCrop component dynamically to avoid SSR issues
import dynamic from 'next/dynamic'

const ImageCrop = dynamic(() => import('@akitectio/aki-ui').then(mod => ({ default: mod.ImageCrop })), {
    ssr: false,
    loading: () => (
        <div className="border border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
            <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
        </div>
    )
}) as any

// Enhanced Demo with Aki UI Modal
function EnhancedModalDemo() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [croppedImage, setCroppedImage] = useState<string>('')
    const [showModal, setShowModal] = useState(false)
    const [cropInfo, setCropInfo] = useState<any>(null)
    const [borderRadiusPercent, setBorderRadiusPercent] = useState(25)

    const handleFileSelect = (file: File) => {
        setSelectedFile(file)
        setShowModal(true)
        setCroppedImage('')
    }

    const handleCropComplete = (crop: any, croppedImageUrl: string) => {
        setCroppedImage(croppedImageUrl)
        setShowModal(false)
    }

    const triggerFilePicker = () => {
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = 'image/*'
        input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0]
            if (file) handleFileSelect(file)
        }
        input.click()
    }

    return (
        <div className="space-y-6">
            {/* Trigger Button */}
            <div className="text-center">
                <button
                    onClick={triggerFilePicker}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium mb-4"
                >
                    Select Image to Crop
                </button>
                <p className="text-sm text-gray-500">
                    This will open the crop modal using Aki UI Modal component
                </p>
            </div>

            {/* Aki UI Modal */}
            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                size="xl"
            >
                <ModalHeader onClose={() => setShowModal(false)}>
                    <h3 className="text-lg font-semibold">Crop Your Image</h3>
                </ModalHeader>

                <ModalBody>
                    <div className="p-4">
                        {selectedFile && (
                            <ImageCrop
                                file={selectedFile}
                                enableFilePicker={false}
                                defaultAspectRatio={1}
                                size="lg"
                                maxWidth={500}
                                maxHeight={400}
                                enableZoom={true}
                                minZoom={0.5}
                                maxZoom={3}
                                showBorderRadiusControl={true}
                                cropBorderRadiusPercent={borderRadiusPercent}
                                onBorderRadiusPercentChange={(percent: number) => {
                                    setBorderRadiusPercent(percent)
                                    console.log('Border radius changed:', percent + '%')
                                }}
                                onCropChange={setCropInfo}
                                onCropComplete={handleCropComplete}
                                onZoomChange={(zoom: number) => {
                                    console.log('Zoom level:', zoom)
                                }}
                                onError={(error: string) => alert(error)}
                            />
                        )}
                    </div>
                </ModalBody>

                <ModalFooter>
                    <div className="flex justify-between items-center w-full">
                        <div className="text-sm text-gray-600">
                            {cropInfo && (
                                <span>
                                    Crop Size: {Math.round(cropInfo.width)} × {Math.round(cropInfo.height)} | Border: {borderRadiusPercent}%
                                </span>
                            )}
                            {!cropInfo && (
                                <span>
                                    Border Radius: {borderRadiusPercent}%
                                </span>
                            )}
                        </div>
                        <div className="flex gap-2">
                            <button
                                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </ModalFooter>
            </Modal>

            {/* Result Display */}
            {croppedImage && (
                <Card className="p-6 bg-green-50 dark:bg-green-900/20">
                    <h4 className="font-medium text-green-900 dark:text-green-100 mb-3">
                        ✅ Image Cropped Successfully!
                    </h4>
                    <div className="text-center">
                        <img
                            src={croppedImage}
                            alt="Cropped result"
                            className="border rounded shadow-sm max-w-full h-auto mx-auto mb-3"
                            style={{
                                maxHeight: '300px',
                                borderRadius: `${borderRadiusPercent}%`
                            }}
                        />
                        <p className="text-sm text-green-700 dark:text-green-300">
                            Right-click the image above to save it to your device
                        </p>
                        <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                            Border radius: {borderRadiusPercent}%
                        </p>
                    </div>
                </Card>
            )}
        </div>
    )
}

export default function ImageCropPage() {
    return (
        <PageHeader
            title="ImageCrop"
            description="A powerful component for cropping images with customizable aspect ratios, drag-and-drop functionality, and real-time preview."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Import</h2>
                    <CodeBlock language="typescript">
                        {`import { ImageCrop } from '@akitectio/aki-ui'`}
                    </CodeBlock>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Modal/Popup Pattern</h2>
                    <Card className="p-6">
                        <div className="mb-4">
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                                ImageCrop works perfectly in modal patterns using Aki UI's Modal component.
                                This provides a focused editing experience without leaving the current page.
                            </p>
                        </div>
                        <EnhancedModalDemo />
                    </Card>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Implementation Code</h2>
                    <Card className="p-6">
                        <CodeBlock language="typescript">
                            {`import { Modal, ModalHeader, ModalBody, ModalFooter, ImageCrop } from '@akitectio/aki-ui'

function ImageCropModal() {
  const [showModal, setShowModal] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [croppedImage, setCroppedImage] = useState('')
  const [borderRadiusPercent, setBorderRadiusPercent] = useState(25)

  const handleFileSelect = (file: File) => {
    setSelectedFile(file)
    setShowModal(true)
  }

  const handleCropComplete = (crop: any, croppedImageUrl: string) => {
    setCroppedImage(croppedImageUrl)
    setShowModal(false)
  }

  return (
    <>
      {/* File Picker Button */}
      <button onClick={triggerFilePicker}>
        Select Image to Crop
      </button>

      {/* Aki UI Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="xl">
        <ModalHeader onClose={() => setShowModal(false)}>
          Crop Your Image
        </ModalHeader>
        
        <ModalBody>
          <ImageCrop
            file={selectedFile}
            enableFilePicker={false}
            defaultAspectRatio={1}
            size="lg"
            enableZoom={true}
            minZoom={0.5}
            maxZoom={3}
            showBorderRadiusControl={true}
            cropBorderRadiusPercent={borderRadiusPercent}
            onBorderRadiusPercentChange={setBorderRadiusPercent}
            onCropComplete={handleCropComplete}
          />
        </ModalBody>
        
        <ModalFooter>
          <button onClick={() => setShowModal(false)}>Cancel</button>
        </ModalFooter>
      </Modal>

      {/* Display Result */}
      {croppedImage && (
        <img 
          src={croppedImage} 
          alt="Cropped" 
          style={{ borderRadius: borderRadiusPercent + '%' }}
        />
      )}
    </>
  )
}`}
                        </CodeBlock>
                    </Card>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                    <Card className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-3 text-green-700 dark:text-green-400">🎯 Interactive Cropping</h4>
                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                    <li>• Drag to move crop area</li>
                                    <li>• 8 resize handles for precise control</li>
                                    <li>• Visual grid lines (rule of thirds)</li>
                                    <li>• Real-time crop preview</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-400">📐 Aspect Ratio Control</h4>
                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                    <li>• Predefined ratios (1:1, 4:3, 16:9, etc.)</li>
                                    <li>• Custom aspect ratio support</li>
                                    <li>• Free-form cropping mode</li>
                                    <li>• Automatic ratio enforcement</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3 text-purple-700 dark:text-purple-400">📁 File Handling</h4>
                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                    <li>• File object upload support</li>
                                    <li>• URL-based image loading</li>
                                    <li>• Canvas-based processing</li>
                                    <li>• PNG/JPEG output formats</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3 text-orange-700 dark:text-orange-400">🔍 Zoom & Navigation</h4>
                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                    <li>• Mouse wheel zoom support</li>
                                    <li>• Zoom in/out/reset buttons</li>
                                    <li>• Configurable zoom range (0.5x-3x)</li>
                                    <li>• Real-time zoom level display</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3 text-pink-700 dark:text-pink-400">🎨 Border Radius Control</h4>
                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                    <li>• Interactive slider control (0-50%)</li>
                                    <li>• Perfect circles for avatars</li>
                                    <li>• Real-time preview</li>
                                    <li>• Percentage-based radius</li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">API Reference</h2>
                    <Card className="p-6">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <th className="pb-3 font-medium text-sm">Prop</th>
                                        <th className="pb-3 font-medium text-sm">Type</th>
                                        <th className="pb-3 font-medium text-sm">Default</th>
                                        <th className="pb-3 font-medium text-sm">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 font-mono text-xs">file</td>
                                        <td className="py-3">File</td>
                                        <td className="py-3 text-gray-500">-</td>
                                        <td className="py-3">File object for upload</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 font-mono text-xs">defaultAspectRatio</td>
                                        <td className="py-3">number | null</td>
                                        <td className="py-3">1</td>
                                        <td className="py-3">Initial aspect ratio</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 font-mono text-xs">size</td>
                                        <td className="py-3">'sm' | 'md' | 'lg'</td>
                                        <td className="py-3">'md'</td>
                                        <td className="py-3">Component size variant</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 font-mono text-xs">enableZoom</td>
                                        <td className="py-3">boolean</td>
                                        <td className="py-3">true</td>
                                        <td className="py-3">Enable zoom functionality</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 font-mono text-xs">minZoom</td>
                                        <td className="py-3">number</td>
                                        <td className="py-3">0.5</td>
                                        <td className="py-3">Minimum zoom level</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 font-mono text-xs">maxZoom</td>
                                        <td className="py-3">number</td>
                                        <td className="py-3">3.0</td>
                                        <td className="py-3">Maximum zoom level</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 font-mono text-xs">onCropComplete</td>
                                        <td className="py-3">function</td>
                                        <td className="py-3 text-gray-500">-</td>
                                        <td className="py-3">Callback when crop is finalized</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 font-mono text-xs">showBorderRadiusControl</td>
                                        <td className="py-3">boolean</td>
                                        <td className="py-3">false</td>
                                        <td className="py-3">Show border radius control slider</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 font-mono text-xs">cropBorderRadiusPercent</td>
                                        <td className="py-3">number</td>
                                        <td className="py-3 text-gray-500">-</td>
                                        <td className="py-3">Custom border radius percentage (0-50)</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 font-mono text-xs">onBorderRadiusPercentChange</td>
                                        <td className="py-3">function</td>
                                        <td className="py-3 text-gray-500">-</td>
                                        <td className="py-3">Border radius percent change callback</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </section>
            </div>
        </PageHeader>
    )
}
