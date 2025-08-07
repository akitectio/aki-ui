import React, { useState, useRef, useCallback, useEffect } from 'react';
import { cn } from '../../utils/cn';

export interface AspectRatio {
    label: string;
    value: number | null; // null means free aspect ratio
    width?: number;
    height?: number;
}

export interface CropArea {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface ImageCropProps {
    /**
     * The image source to crop
     */
    src?: string;

    /**
     * File object if uploading
     */
    file?: File;

    /**
     * Enable file picker when clicking on empty state
     * @default true
     */
    enableFilePicker?: boolean;

    /**
     * Accepted file types for file picker
     * @default 'image/*'
     */
    accept?: string;

    /**
     * File selection callback
     */
    onFileSelect?: (file: File) => void;

    /**
     * Predefined aspect ratios
     */
    aspectRatios?: AspectRatio[];

    /**
     * Default aspect ratio
     */
    defaultAspectRatio?: number | null;

    /**
     * Enable/disable aspect ratio selector
     * @default true
     */
    showAspectRatioSelector?: boolean;

    /**
     * Crop area change callback
     */
    onCropChange?: (crop: CropArea) => void;

    /**
     * Crop complete callback
     */
    onCropComplete?: (crop: CropArea, croppedImageUrl: string) => void;

    /**
     * Error callback
     */
    onError?: (error: string) => void;

    /**
     * Enable zoom functionality
     * @default true
     */
    enableZoom?: boolean;

    /**
     * Minimum zoom level
     * @default 0.5
     */
    minZoom?: number;

    /**
     * Maximum zoom level
     * @default 3
     */
    maxZoom?: number;

    /**
     * Zoom step
     * @default 0.1
     */
    zoomStep?: number;

    /**
     * Zoom change callback
     */
    onZoomChange?: (zoom: number) => void;

    /**
     * Component size
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';

    /**
     * Maximum width of the crop area
     * @default 400
     */
    maxWidth?: number;

    /**
     * Maximum height of the crop area
     * @default 400
     */
    maxHeight?: number;

    /**
     * Enable crop area moving
     * @default true
     */
    allowMove?: boolean;

    /**
     * Enable crop area resizing
     * @default true
     */
    allowResize?: boolean;

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * Disabled state
     */
    disabled?: boolean;

    /**
     * Border radius for crop area
     * @default 'rounded-2xl'
     */
    cropBorderRadius?: 'rounded-none' | 'rounded-sm' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl' | 'rounded-full';

    /**
     * Custom border radius percentage for crop area (0-50)
     * When set, overrides cropBorderRadius
     * @default undefined
     */
    cropBorderRadiusPercent?: number;

    /**
     * Callback when border radius percent changes
     */
    onBorderRadiusPercentChange?: (percent: number) => void;

    /**
     * Show border radius control slider
     * @default false
     */
    showBorderRadiusControl?: boolean;
}

const DEFAULT_ASPECT_RATIOS: AspectRatio[] = [
    { label: 'Free', value: null },
    { label: 'Square (1:1)', value: 1, width: 1, height: 1 },
    { label: 'Portrait (3:4)', value: 3 / 4, width: 3, height: 4 },
    { label: 'Landscape (4:3)', value: 4 / 3, width: 4, height: 3 },
    { label: 'Widescreen (16:9)', value: 16 / 9, width: 16, height: 9 },
    { label: 'Story (9:16)', value: 9 / 16, width: 9, height: 16 },
    { label: 'Golden Ratio', value: 1.618, width: 1618, height: 1000 },
];

const ImageCrop: React.FC<ImageCropProps> = ({
    src,
    file,
    enableFilePicker = true,
    accept = 'image/*',
    onFileSelect,
    aspectRatios = DEFAULT_ASPECT_RATIOS,
    defaultAspectRatio = 1,
    showAspectRatioSelector = true,
    onCropChange,
    onCropComplete,
    onError,
    enableZoom = true,
    minZoom = 0.5,
    maxZoom = 3,
    zoomStep = 0.1,
    onZoomChange,
    size = 'md',
    maxWidth = 400,
    maxHeight = 400,
    allowMove = true,
    allowResize = true,
    className,
    disabled = false,
    cropBorderRadius = 'rounded-2xl',
    cropBorderRadiusPercent,
    onBorderRadiusPercentChange,
    showBorderRadiusControl = false,
}) => {
    const [imageUrl, setImageUrl] = useState<string | null>(src || null);
    const [crop, setCrop] = useState<CropArea>({ x: 0, y: 0, width: 100, height: 100 });
    const [zoom, setZoom] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [isResizing, setIsResizing] = useState<string | null>(null);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [selectedAspectRatio, setSelectedAspectRatio] = useState<number | null>(defaultAspectRatio);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageNaturalSize, setImageNaturalSize] = useState({ width: 0, height: 0 });
    const [isDragOver, setIsDragOver] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Handle drag and drop
    const handleDragOver = (e: React.DragEvent) => {
        if (!enableFilePicker || disabled) return;

        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(false);

        if (!enableFilePicker || disabled) return;

        const files = e.dataTransfer.files;
        const selectedFile = files?.[0];

        if (selectedFile && selectedFile.type.startsWith('image/')) {
            onFileSelect?.(selectedFile);

            // Create URL for preview
            const url = URL.createObjectURL(selectedFile);
            setImageUrl(url);
            setImageLoaded(false);
        } else if (selectedFile) {
            onError?.('Please drop a valid image file');
        }
    };

    // Handle zoom functions
    const handleZoomIn = () => {
        if (!enableZoom || disabled) return;
        const newZoom = Math.min(zoom + zoomStep, maxZoom);
        setZoom(newZoom);
        onZoomChange?.(newZoom);
    };

    const handleZoomOut = () => {
        if (!enableZoom || disabled) return;
        const newZoom = Math.max(zoom - zoomStep, minZoom);
        setZoom(newZoom);
        onZoomChange?.(newZoom);
    };

    const handleZoomReset = () => {
        if (!enableZoom || disabled) return;
        setZoom(1);
        onZoomChange?.(1);
    };

    // Handle mouse wheel zoom
    const handleWheel = useCallback((e: React.WheelEvent) => {
        if (!enableZoom || disabled) return;

        e.preventDefault();
        const delta = e.deltaY > 0 ? -zoomStep : zoomStep;
        const newZoom = Math.max(minZoom, Math.min(maxZoom, zoom + delta));

        setZoom(newZoom);
        onZoomChange?.(newZoom);
    }, [enableZoom, disabled, zoom, zoomStep, minZoom, maxZoom, onZoomChange]);

    // Handle file input change
    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            // Validate file type
            if (!selectedFile.type.startsWith('image/')) {
                onError?.('Please select a valid image file');
                return;
            }

            onFileSelect?.(selectedFile);

            // Create URL for preview
            const url = URL.createObjectURL(selectedFile);
            setImageUrl(url);
            setImageLoaded(false);
        }
        // Reset input value to allow selecting the same file again
        event.target.value = '';
    };

    // Handle click on empty state
    const handleEmptyStateClick = () => {
        if (enableFilePicker && !disabled && fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    // Handle file input
    useEffect(() => {
        if (file) {
            const url = URL.createObjectURL(file);
            setImageUrl(url);
            return () => URL.revokeObjectURL(url);
        }
    }, [file]);

    // Handle image load
    const handleImageLoad = useCallback(() => {
        if (imageRef.current) {
            const { naturalWidth, naturalHeight } = imageRef.current;
            setImageNaturalSize({ width: naturalWidth, height: naturalHeight });
            setImageLoaded(true);

            // Initialize crop area
            setTimeout(() => {
                const imageRect = imageRef.current?.getBoundingClientRect();
                if (imageRect) {
                    let initialWidth = Math.min(imageRect.width * 0.6, 200);
                    let initialHeight = initialWidth;

                    if (selectedAspectRatio) {
                        initialHeight = initialWidth / selectedAspectRatio;

                        // Ensure crop area fits within image bounds
                        if (initialHeight > imageRect.height * 0.8) {
                            initialHeight = imageRect.height * 0.6;
                            initialWidth = initialHeight * selectedAspectRatio;
                        }
                    } else {
                        initialHeight = Math.min(imageRect.height * 0.6, 200);
                    }

                    const initialCrop = {
                        x: (imageRect.width - initialWidth) / 2,
                        y: (imageRect.height - initialHeight) / 2,
                        width: initialWidth,
                        height: initialHeight,
                    };

                    setCrop(initialCrop);
                    onCropChange?.(initialCrop);
                }
            }, 100); // Small delay to ensure image is fully rendered
        }
    }, [selectedAspectRatio, onCropChange]);

    // Size classes
    const sizeClasses = {
        sm: { container: 'w-64 h-64', button: 'px-2 py-1 text-xs' },
        md: { container: 'w-80 h-80', button: 'px-3 py-1.5 text-sm' },
        lg: { container: 'w-96 h-96', button: 'px-4 py-2 text-base' },
    };

    // Handle aspect ratio change
    const handleAspectRatioChange = (ratio: number | null) => {
        setSelectedAspectRatio(ratio);

        if (imageLoaded && imageRef.current) {
            const imageRect = imageRef.current.getBoundingClientRect();

            if (ratio) {
                // Calculate new dimensions maintaining aspect ratio
                let newWidth = crop.width;
                let newHeight = newWidth / ratio;

                // If height exceeds image bounds, adjust width
                if (crop.y + newHeight > imageRect.height) {
                    newHeight = imageRect.height - crop.y;
                    newWidth = newHeight * ratio;
                }

                // If width exceeds image bounds, recalculate both
                if (crop.x + newWidth > imageRect.width) {
                    newWidth = imageRect.width - crop.x;
                    newHeight = newWidth / ratio;

                    // If still doesn't fit, center it
                    if (crop.y + newHeight > imageRect.height) {
                        newHeight = Math.min(imageRect.height * 0.8, imageRect.width * 0.8 / ratio);
                        newWidth = newHeight * ratio;

                        const newCrop = {
                            x: (imageRect.width - newWidth) / 2,
                            y: (imageRect.height - newHeight) / 2,
                            width: newWidth,
                            height: newHeight,
                        };

                        setCrop(newCrop);
                        onCropChange?.(newCrop);
                        return;
                    }
                }

                const newCrop = { ...crop, width: newWidth, height: newHeight };
                setCrop(newCrop);
                onCropChange?.(newCrop);
            }
        }
    };

    // Handle mouse down on crop area
    const handleMouseDown = useCallback((e: React.MouseEvent, action: 'move' | string) => {
        if (disabled) return;

        e.preventDefault();
        e.stopPropagation();

        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;

        const startX = e.clientX - rect.left;
        const startY = e.clientY - rect.top;

        setDragStart({ x: startX, y: startY });

        if (action === 'move' && allowMove) {
            setIsDragging(true);
        } else if (allowResize && action.includes('resize')) {
            setIsResizing(action);
        }
    }, [disabled, allowMove, allowResize]);

    // Handle mouse move
    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (disabled || (!isDragging && !isResizing)) return;

        const rect = containerRef.current?.getBoundingClientRect();
        const imageRect = imageRef.current?.getBoundingClientRect();
        if (!rect || !imageRect) return;

        const currentX = e.clientX - rect.left;
        const currentY = e.clientY - rect.top;
        const deltaX = currentX - dragStart.x;
        const deltaY = currentY - dragStart.y;

        if (isDragging) {
            const newX = Math.max(0, Math.min(crop.x + deltaX, imageRect.width - crop.width));
            const newY = Math.max(0, Math.min(crop.y + deltaY, imageRect.height - crop.height));

            const newCrop = { ...crop, x: newX, y: newY };
            setCrop(newCrop);
            onCropChange?.(newCrop);
            setDragStart({ x: currentX, y: currentY });
        } else if (isResizing) {
            let newCrop = { ...crop };

            if (isResizing.includes('right')) {
                newCrop.width = Math.max(20, Math.min(crop.width + deltaX, imageRect.width - crop.x));
            }
            if (isResizing.includes('left')) {
                const newWidth = Math.max(20, crop.width - deltaX);
                const newX = crop.x + crop.width - newWidth;
                if (newX >= 0) {
                    newCrop.width = newWidth;
                    newCrop.x = newX;
                }
            }
            if (isResizing.includes('bottom')) {
                newCrop.height = Math.max(20, Math.min(crop.height + deltaY, imageRect.height - crop.y));
            }
            if (isResizing.includes('top')) {
                const newHeight = Math.max(20, crop.height - deltaY);
                const newY = crop.y + crop.height - newHeight;
                if (newY >= 0) {
                    newCrop.height = newHeight;
                    newCrop.y = newY;
                }
            }

            // Maintain aspect ratio if selected
            if (selectedAspectRatio) {
                if (isResizing.includes('right') || isResizing.includes('left')) {
                    newCrop.height = newCrop.width / selectedAspectRatio;
                } else if (isResizing.includes('top') || isResizing.includes('bottom')) {
                    newCrop.width = newCrop.height * selectedAspectRatio;
                }

                // Ensure crop stays within bounds
                if (newCrop.x + newCrop.width > imageRect.width) {
                    newCrop.width = imageRect.width - newCrop.x;
                    newCrop.height = newCrop.width / selectedAspectRatio;
                }
                if (newCrop.y + newCrop.height > imageRect.height) {
                    newCrop.height = imageRect.height - newCrop.y;
                    newCrop.width = newCrop.height * selectedAspectRatio;
                }
            }

            setCrop(newCrop);
            onCropChange?.(newCrop);
            setDragStart({ x: currentX, y: currentY });
        }
    }, [disabled, isDragging, isResizing, dragStart, crop, selectedAspectRatio, onCropChange]);

    // Handle mouse up
    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
        setIsResizing(null);
    }, []);

    // Generate cropped image
    const generateCroppedImage = useCallback(async () => {
        if (!imageRef.current || !imageLoaded) {
            onError?.('No image loaded');
            return;
        }

        try {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                onError?.('Canvas not supported');
                return;
            }

            // Get image element's bounding rect (includes zoom transform)
            const imageRect = imageRef.current.getBoundingClientRect();

            // Calculate the base display size (without CSS transform scale)
            const baseDisplayWidth = imageRect.width / zoom;
            const baseDisplayHeight = imageRect.height / zoom;

            // For object-contain, we need to calculate the actual displayed image size
            const imageAspectRatio = imageNaturalSize.width / imageNaturalSize.height;
            const containerAspectRatio = baseDisplayWidth / baseDisplayHeight;

            let actualImageDisplayWidth, actualImageDisplayHeight;

            if (imageAspectRatio > containerAspectRatio) {
                // Image is wider - fits to container width
                actualImageDisplayWidth = baseDisplayWidth;
                actualImageDisplayHeight = baseDisplayWidth / imageAspectRatio;
            } else {
                // Image is taller - fits to container height
                actualImageDisplayHeight = baseDisplayHeight;
                actualImageDisplayWidth = baseDisplayHeight * imageAspectRatio;
            }

            // Calculate scale factors from actual displayed image size to natural size
            const scaleX = imageNaturalSize.width / actualImageDisplayWidth;
            const scaleY = imageNaturalSize.height / actualImageDisplayHeight;

            // Calculate offset for object-contain centering
            const offsetX = (baseDisplayWidth - actualImageDisplayWidth) / 2;
            const offsetY = (baseDisplayHeight - actualImageDisplayHeight) / 2;

            // Convert crop coordinates to natural image coordinates
            const cropX = Math.round((crop.x - offsetX) * scaleX);
            const cropY = Math.round((crop.y - offsetY) * scaleY);
            const cropWidth = Math.round(crop.width * scaleX);
            const cropHeight = Math.round(crop.height * scaleY);

            // Set canvas size to crop area (maintain quality)
            canvas.width = cropWidth;
            canvas.height = cropHeight;

            // Enable image smoothing for better quality
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';

            // Draw cropped image with correct zoom-adjusted scaling
            ctx.drawImage(
                imageRef.current,
                Math.round(cropX),
                Math.round(cropY),
                cropWidth,
                cropHeight,
                0,
                0,
                cropWidth,
                cropHeight
            );

            // Convert to blob with high quality
            canvas.toBlob((blob) => {
                if (blob) {
                    const croppedImageUrl = URL.createObjectURL(blob);
                    onCropComplete?.(crop, croppedImageUrl);
                } else {
                    onError?.('Failed to generate cropped image');
                }
            }, 'image/png', 0.95);

        } catch (error) {
            console.error('Error generating cropped image:', error);
            onError?.('Failed to crop image');
        }
    }, [crop, imageLoaded, imageNaturalSize, zoom, onCropComplete, onError]);

    // Add global mouse events
    useEffect(() => {
        if (isDragging || isResizing) {
            const handleGlobalMouseMove = (e: MouseEvent) => {
                handleMouseMove(e as any);
            };
            const handleGlobalMouseUp = () => {
                handleMouseUp();
            };

            document.addEventListener('mousemove', handleGlobalMouseMove);
            document.addEventListener('mouseup', handleGlobalMouseUp);

            return () => {
                document.removeEventListener('mousemove', handleGlobalMouseMove);
                document.removeEventListener('mouseup', handleGlobalMouseUp);
            };
        }
    }, [isDragging, isResizing, handleMouseMove, handleMouseUp]);

    if (!imageUrl) {
        return (
            <div className={cn('space-y-4', className)}>
                {/* Hidden file input */}
                <input
                    ref={fileInputRef}
                    type="file"
                    accept={accept}
                    onChange={handleFileInputChange}
                    className="hidden"
                />

                {/* Empty state with file picker */}
                <div
                    className={cn(
                        'border-2 border-dashed rounded-xl p-8 text-center transition-colors',
                        sizeClasses[size].container,
                        isDragOver
                            ? 'border-blue-400 bg-blue-50 dark:bg-blue-900/20'
                            : 'border-gray-300',
                        enableFilePicker && !disabled && 'hover:border-gray-400 hover:bg-gray-50 cursor-pointer',
                        disabled && 'opacity-50 cursor-not-allowed',
                        className
                    )}
                    onClick={handleEmptyStateClick}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <div className="text-gray-500">
                        <svg className="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm font-medium">
                            {isDragOver
                                ? 'Drop image here'
                                : enableFilePicker && !disabled
                                    ? 'Click to select an image'
                                    : 'No image selected'
                            }
                        </p>
                        {enableFilePicker && !disabled && !isDragOver && (
                            <p className="text-xs mt-1 text-gray-400">
                                or drag and drop an image file
                            </p>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={cn('space-y-4', className)}>
            {/* Hidden file input */}
            <input
                ref={fileInputRef}
                type="file"
                accept={accept}
                onChange={handleFileInputChange}
                className="hidden"
            />

            {/* Aspect Ratio Selector */}
            {showAspectRatioSelector && (
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Aspect Ratio
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {aspectRatios.map((ratio) => (
                            <button
                                key={ratio.label}
                                type="button"
                                onClick={() => handleAspectRatioChange(ratio.value)}
                                disabled={disabled}
                                className={cn(
                                    sizeClasses[size].button,
                                    'border rounded-lg transition-colors',
                                    selectedAspectRatio === ratio.value
                                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                                        : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
                                    disabled && 'opacity-50 cursor-not-allowed'
                                )}
                            >
                                {ratio.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Border Radius Control */}
            {(showBorderRadiusControl || cropBorderRadiusPercent !== undefined) && (
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Crop Border Radius: {Math.min(Math.max(cropBorderRadiusPercent ?? 20, 0), 50)}%
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="50"
                        value={cropBorderRadiusPercent ?? 20}
                        onChange={(e) => {
                            const newPercent = parseInt(e.target.value);
                            onBorderRadiusPercentChange?.(newPercent);
                        }}
                        disabled={disabled}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>0%</span>
                        <span>25%</span>
                        <span>50%</span>
                    </div>
                </div>
            )}

            {/* Crop Area */}
            <div
                ref={containerRef}
                className={cn(
                    'relative border border-gray-300 rounded-xl overflow-hidden bg-gray-100',
                    sizeClasses[size].container,
                    disabled && 'opacity-50',
                )}
                style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
                onWheel={handleWheel}
            >
                <img
                    ref={imageRef}
                    src={imageUrl}
                    alt="Crop preview"
                    className="w-full h-full object-contain transition-transform duration-200"
                    style={{
                        transform: `scale(${zoom})`,
                        transformOrigin: 'center center'
                    }}
                    onLoad={handleImageLoad}
                    draggable={false}
                />

                {imageLoaded && (
                    <>
                        {/* Crop overlay */}
                        <div
                            className={cn(
                                "absolute border-2 border-white shadow-lg bg-transparent",
                                cropBorderRadiusPercent === undefined ? cropBorderRadius : ""
                            )}
                            style={{
                                left: crop.x,
                                top: crop.y,
                                width: crop.width,
                                height: crop.height,
                                cursor: allowMove ? 'move' : 'default',
                                borderRadius: cropBorderRadiusPercent !== undefined
                                    ? `${Math.min(Math.max(cropBorderRadiusPercent, 0), 50)}%`
                                    : undefined,
                            }}
                            onMouseDown={(e) => handleMouseDown(e, 'move')}
                        >
                            {/* Corner handles */}
                            {allowResize && (
                                <>
                                    <div
                                        className="absolute w-3 h-3 bg-white border border-gray-400 rounded-full shadow-sm -top-1.5 -left-1.5 cursor-nw-resize"
                                        onMouseDown={(e) => handleMouseDown(e, 'resize-top-left')}
                                    />
                                    <div
                                        className="absolute w-3 h-3 bg-white border border-gray-400 rounded-full shadow-sm -top-1.5 -right-1.5 cursor-ne-resize"
                                        onMouseDown={(e) => handleMouseDown(e, 'resize-top-right')}
                                    />
                                    <div
                                        className="absolute w-3 h-3 bg-white border border-gray-400 rounded-full shadow-sm -bottom-1.5 -left-1.5 cursor-sw-resize"
                                        onMouseDown={(e) => handleMouseDown(e, 'resize-bottom-left')}
                                    />
                                    <div
                                        className="absolute w-3 h-3 bg-white border border-gray-400 rounded-full shadow-sm -bottom-1.5 -right-1.5 cursor-se-resize"
                                        onMouseDown={(e) => handleMouseDown(e, 'resize-bottom-right')}
                                    />

                                    {/* Edge handles */}
                                    <div
                                        className="absolute w-3 h-1 bg-white border border-gray-400 rounded-full shadow-sm -top-0.5 left-1/2 transform -translate-x-1/2 cursor-n-resize"
                                        onMouseDown={(e) => handleMouseDown(e, 'resize-top')}
                                    />
                                    <div
                                        className="absolute w-1 h-3 bg-white border border-gray-400 rounded-full shadow-sm -right-0.5 top-1/2 transform -translate-y-1/2 cursor-e-resize"
                                        onMouseDown={(e) => handleMouseDown(e, 'resize-right')}
                                    />
                                    <div
                                        className="absolute w-3 h-1 bg-white border border-gray-400 rounded-full shadow-sm -bottom-0.5 left-1/2 transform -translate-x-1/2 cursor-s-resize"
                                        onMouseDown={(e) => handleMouseDown(e, 'resize-bottom')}
                                    />
                                    <div
                                        className="absolute w-1 h-3 bg-white border border-gray-400 rounded-full shadow-sm -left-0.5 top-1/2 transform -translate-y-1/2 cursor-w-resize"
                                        onMouseDown={(e) => handleMouseDown(e, 'resize-left')}
                                    />
                                </>
                            )}

                            {/* Grid lines */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-1/3 left-0 right-0 h-px bg-white opacity-50" />
                                <div className="absolute top-2/3 left-0 right-0 h-px bg-white opacity-50" />
                                <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white opacity-50" />
                                <div className="absolute left-2/3 top-0 bottom-0 w-px bg-white opacity-50" />
                            </div>
                        </div>

                        {/* Dark overlay outside crop area */}
                        <div className="absolute inset-0 pointer-events-none">
                            {/* Top */}
                            <div
                                className="absolute top-0 left-0 right-0 bg-black opacity-50"
                                style={{ height: crop.y }}
                            />
                            {/* Bottom */}
                            <div
                                className="absolute left-0 right-0 bottom-0 bg-black opacity-50"
                                style={{ top: crop.y + crop.height }}
                            />
                            {/* Left */}
                            <div
                                className="absolute left-0 bg-black opacity-50"
                                style={{
                                    top: crop.y,
                                    width: crop.x,
                                    height: crop.height
                                }}
                            />
                            {/* Right */}
                            <div
                                className="absolute right-0 bg-black opacity-50"
                                style={{
                                    top: crop.y,
                                    left: crop.x + crop.width,
                                    height: crop.height
                                }}
                            />
                        </div>
                    </>
                )}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-2">
                {enableFilePicker && (
                    <button
                        type="button"
                        onClick={handleEmptyStateClick}
                        disabled={disabled}
                        className={cn(
                            sizeClasses[size].button,
                            'bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors',
                            disabled && 'opacity-50 cursor-not-allowed'
                        )}
                    >
                        Change Image
                    </button>
                )}

                {/* Zoom Controls */}
                {enableZoom && imageLoaded && (
                    <>
                        <button
                            type="button"
                            onClick={handleZoomOut}
                            disabled={disabled || zoom <= minZoom}
                            className={cn(
                                sizeClasses[size].button,
                                'bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors',
                                (disabled || zoom <= minZoom) && 'opacity-50 cursor-not-allowed'
                            )}
                            title="Zoom Out"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                        </button>

                        <span className="flex items-center px-2 py-1 text-sm text-gray-600 bg-gray-100 rounded-lg">
                            {(zoom * 100).toFixed(0)}%
                        </span>

                        <button
                            type="button"
                            onClick={handleZoomIn}
                            disabled={disabled || zoom >= maxZoom}
                            className={cn(
                                sizeClasses[size].button,
                                'bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors',
                                (disabled || zoom >= maxZoom) && 'opacity-50 cursor-not-allowed'
                            )}
                            title="Zoom In"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </button>

                        <button
                            type="button"
                            onClick={handleZoomReset}
                            disabled={disabled}
                            className={cn(
                                sizeClasses[size].button,
                                'bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors',
                                disabled && 'opacity-50 cursor-not-allowed'
                            )}
                            title="Reset Zoom"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </button>
                    </>
                )}

                <button
                    type="button"
                    onClick={generateCroppedImage}
                    disabled={disabled || !imageLoaded}
                    className={cn(
                        sizeClasses[size].button,
                        'bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors',
                        (disabled || !imageLoaded) && 'opacity-50 cursor-not-allowed'
                    )}
                >
                    Crop Image
                </button>
            </div>

            {/* Crop Info */}
            {imageLoaded && (
                <div className="text-xs text-gray-500 space-y-1">
                    <div>Crop: {Math.round(crop.width)}×{Math.round(crop.height)}</div>
                    <div>Position: ({Math.round(crop.x)}, {Math.round(crop.y)})</div>
                    {selectedAspectRatio && (
                        <div>Aspect Ratio: {selectedAspectRatio.toFixed(2)}</div>
                    )}
                    {enableZoom && (
                        <div>Zoom: {(zoom * 100).toFixed(0)}% | Scroll to zoom</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ImageCrop;
