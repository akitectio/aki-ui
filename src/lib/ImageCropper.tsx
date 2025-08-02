"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { Modal, Button } from "../index";
import {
    RotateCw,
    RefreshCw,
    Check,
    Move,
    Minus,
    Plus
} from "lucide-react";

export interface ImageCropperProps {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string;
    onCropComplete: (croppedImageData: string) => void;
    aspectRatio?: number; // width/height ratio, default 1 for square
    cropSize?: number; // Size of the crop area in pixels, default 200
    outputSize?: number; // Final output image size in pixels, default 400
    className?: string;
}

interface CropState {
    scale: number;
    rotation: number;
    x: number;
    y: number;
    isDragging: boolean;
    dragStart: { x: number; y: number };
}

/**
 * ImageCropper - Clean and minimal image cropping component
 * Inspired by Instagram/WhatsApp design
 */
const ImageCropper: React.FC<ImageCropperProps> = ({
    isOpen,
    onClose,
    imageUrl,
    onCropComplete,
    aspectRatio = 1,
    cropSize = 200,
    outputSize = 400,
    className = ""
}) => {
    const [cropState, setCropState] = useState<CropState>({
        scale: 1,
        rotation: 0,
        x: 0,
        y: 0,
        isDragging: false,
        dragStart: { x: 0, y: 0 }
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>("");

    const imageRef = useRef<HTMLImageElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Reset crop state when modal opens
    useEffect(() => {
        if (isOpen) {
            setCropState({
                scale: 1,
                rotation: 0,
                x: 0,
                y: 0,
                isDragging: false,
                dragStart: { x: 0, y: 0 }
            });
            setError("");
        }
    }, [isOpen]);

    // Handle mouse down for dragging
    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        setCropState(prev => ({
            ...prev,
            isDragging: true,
            dragStart: { x: e.clientX - prev.x, y: e.clientY - prev.y }
        }));
    }, []);

    // Handle touch start for mobile
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        e.preventDefault();
        const touch = e.touches[0];
        setCropState(prev => ({
            ...prev,
            isDragging: true,
            dragStart: { x: touch.clientX - prev.x, y: touch.clientY - prev.y }
        }));
    }, []);

    // Handle mouse move for dragging with throttling
    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!cropState.isDragging) return;

        // Smooth movement calculation
        const newX = e.clientX - cropState.dragStart.x;
        const newY = e.clientY - cropState.dragStart.y;

        // Use requestAnimationFrame for smooth updates
        requestAnimationFrame(() => {
            setCropState(prev => ({
                ...prev,
                x: Math.max(-300, Math.min(300, newX)),
                y: Math.max(-300, Math.min(300, newY))
            }));
        });
    }, [cropState.isDragging, cropState.dragStart]);

    // Handle touch move for mobile with smooth updates
    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (!cropState.isDragging) return;
        e.preventDefault();

        const touch = e.touches[0];
        const newX = touch.clientX - cropState.dragStart.x;
        const newY = touch.clientY - cropState.dragStart.y;

        // Use requestAnimationFrame for smooth touch updates
        requestAnimationFrame(() => {
            setCropState(prev => ({
                ...prev,
                x: Math.max(-300, Math.min(300, newX)),
                y: Math.max(-300, Math.min(300, newY))
            }));
        });
    }, [cropState.isDragging, cropState.dragStart]);

    // Handle mouse/touch up
    const handleEnd = useCallback(() => {
        setCropState(prev => ({ ...prev, isDragging: false }));
    }, []);

    // Add global mouse and touch events
    useEffect(() => {
        if (cropState.isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleEnd);
            document.addEventListener('touchmove', handleTouchMove, { passive: false });
            document.addEventListener('touchend', handleEnd);

            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleEnd);
                document.removeEventListener('touchmove', handleTouchMove);
                document.removeEventListener('touchend', handleEnd);
            };
        }
    }, [cropState.isDragging, handleMouseMove, handleTouchMove, handleEnd]);

    // Update scale
    const handleScaleChange = (delta: number) => {
        setCropState(prev => ({
            ...prev,
            scale: Math.max(0.5, Math.min(3, prev.scale + delta))
        }));
    };

    // Handle wheel scroll for scale
    const handleWheel = useCallback((e: WheelEvent) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        handleScaleChange(delta);
    }, []);

    // Add wheel event listener to container
    useEffect(() => {
        const container = containerRef.current;
        if (container && isOpen) {
            container.addEventListener('wheel', handleWheel, { passive: false });
            return () => {
                container.removeEventListener('wheel', handleWheel);
            };
        }
    }, [isOpen, handleWheel]);

    // Rotate image
    const handleRotate = () => {
        setCropState(prev => ({ ...prev, rotation: prev.rotation + 90 }));
    };

    // Reset crop
    const handleReset = () => {
        setCropState({
            scale: 1,
            rotation: 0,
            x: 0,
            y: 0,
            isDragging: false,
            dragStart: { x: 0, y: 0 }
        });
    };

    // Update canvas preview
    useEffect(() => {
        const updateCanvas = () => {
            if (!imageRef.current || !canvasRef.current) return;

            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            const image = imageRef.current;
            canvas.width = outputSize;
            canvas.height = outputSize;

            // Clear canvas
            ctx.clearRect(0, 0, outputSize, outputSize);

            // Save context
            ctx.save();

            // Create circular clipping path for preview if aspect ratio is 1
            if (aspectRatio === 1) {
                ctx.beginPath();
                ctx.arc(outputSize / 2, outputSize / 2, outputSize / 2, 0, 2 * Math.PI);
                ctx.clip();
            }

            // Move to center
            ctx.translate(outputSize / 2, outputSize / 2);

            // Apply rotation
            ctx.rotate((cropState.rotation * Math.PI) / 180);

            // Apply scale
            ctx.scale(cropState.scale, cropState.scale);

            // Apply position offset
            ctx.translate(-cropState.x * 0.5, -cropState.y * 0.5);

            // Draw image centered
            const imgWidth = image.naturalWidth;
            const imgHeight = image.naturalHeight;
            const scale = Math.min(300 / imgWidth, 300 / imgHeight);

            ctx.drawImage(
                image,
                -imgWidth * scale / 2,
                -imgHeight * scale / 2,
                imgWidth * scale,
                imgHeight * scale
            );

            // Restore context
            ctx.restore();
        };

        if (isOpen && imageRef.current?.complete) {
            updateCanvas();
        }
    }, [cropState, isOpen, outputSize, aspectRatio]);

    // Generate cropped image
    const handleCrop = useCallback(async () => {
        if (!imageRef.current || !canvasRef.current) {
            setError("Không thể xử lý ảnh. Vui lòng thử lại.");
            return;
        }

        setIsLoading(true);
        setError("");

        try {
            const canvas = canvasRef.current;

            // Convert to data URL
            const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
            onCropComplete(dataUrl);
            onClose();

        } catch (err) {
            console.error('Crop error:', err);
            setError("Không thể cắt ảnh. Vui lòng thử lại.");
        } finally {
            setIsLoading(false);
        }
    }, [onCropComplete, onClose]);

    // Calculate crop area dimensions
    const cropWidth = aspectRatio >= 1 ? cropSize : cropSize * aspectRatio;
    const cropHeight = aspectRatio <= 1 ? cropSize : cropSize / aspectRatio;

    return (
        <>
            {/* Custom light backdrop */}
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-white bg-opacity-90 backdrop-blur-sm" />
            )}

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                className={`max-w-lg ${className}`}
                backdrop={false}
            >
                {/* Simple Header */}
                <Modal.Header className="bg-white border-b">
                    <h3 className="text-lg font-semibold text-gray-900">Cắt ảnh đại diện</h3>
                </Modal.Header>

                <Modal.Body className="bg-white p-0">
                    {error && (
                        <div className="m-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-sm text-red-600">{error}</p>
                        </div>
                    )}

                    {/* Clean Image Preview */}
                    <div className={`relative w-full h-80 bg-transparent overflow-hidden select-none transform-gpu ${cropState.isDragging ? 'cursor-grabbing' : 'cursor-grab'
                        }`}
                        ref={containerRef}
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleTouchStart}
                        style={{
                            WebkitUserSelect: 'none',
                            MozUserSelect: 'none',
                            msUserSelect: 'none',
                            userSelect: 'none'
                        }}
                    >
                        {/* Hidden image for dimensions */}
                        <img
                            ref={imageRef}
                            src={imageUrl}
                            alt="Crop preview"
                            className="hidden"
                            crossOrigin="anonymous"
                            onLoad={() => {
                                setTimeout(() => {
                                    if (imageRef.current && canvasRef.current) {
                                        const event = new Event('load');
                                        imageRef.current.dispatchEvent(event);
                                    }
                                }, 100);
                            }}
                        />

                        {/* Visible preview image */}
                        <div
                            className="absolute inset-0 flex items-center justify-center will-change-transform"
                            style={{
                                transform: `translate(${cropState.x}px, ${cropState.y}px) scale(${cropState.scale}) rotate(${cropState.rotation}deg)`,
                                transition: cropState.isDragging ? 'none' : 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
                                transformOrigin: 'center center'
                            }}
                        >
                            <img
                                src={imageUrl}
                                alt="Preview"
                                className="max-w-none h-full object-contain pointer-events-none select-none"
                                style={{
                                    maxHeight: '320px',
                                    backfaceVisibility: 'hidden'
                                }}
                                draggable={false}
                            />
                        </div>                    {/* Simple Crop Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div
                                className="border-2 border-gray-600"
                                style={{
                                    width: `${Math.min(cropWidth, 200)}px`,
                                    height: `${Math.min(cropHeight, 200)}px`,
                                    borderRadius: aspectRatio === 1 ? '50%' : '8px',
                                    boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.3)'
                                }}
                            />
                        </div>

                        {/* Simple drag hint */}
                        <div className="absolute top-3 left-3 bg-white bg-opacity-90 text-gray-800 px-3 py-2 rounded-full text-sm flex items-center space-x-2 shadow-lg border">
                            <Move className="w-4 h-4" />
                            <span>Kéo để di chuyển hoặc scroll để phóng to</span>
                        </div>

                        {/* Small preview */}
                        <div className="absolute top-3 right-3">
                            <div
                                className="border-2 border-gray-400 bg-white bg-opacity-90 overflow-hidden shadow-lg"
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: aspectRatio === 1 ? '50%' : '6px'
                                }}
                            >
                                <canvas
                                    ref={canvasRef}
                                    width={outputSize}
                                    height={outputSize}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Clean Controls */}
                    <div className="p-4 bg-gray-50 border-t">
                        {/* Scale Control */}
                        <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">Phóng to</span>
                                <div className="flex items-center space-x-2">
                                    <span className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-600">
                                        {cropState.scale.toFixed(1)}x
                                    </span>
                                    <button
                                        onClick={() => handleScaleChange(-0.1)}
                                        disabled={cropState.scale <= 0.5}
                                        className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 disabled:opacity-50"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => handleScaleChange(0.1)}
                                        disabled={cropState.scale >= 3}
                                        className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 disabled:opacity-50"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Interactive slider with scroll support */}
                            <div
                                className="bg-gray-300 rounded-full h-3 relative cursor-pointer hover:h-4 transition-all duration-200"
                                onClick={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const percentage = x / rect.width;
                                    const newScale = 0.5 + (percentage * 2.5);
                                    setCropState(prev => ({
                                        ...prev,
                                        scale: Math.max(0.5, Math.min(3, newScale))
                                    }));
                                }}
                            >
                                <div
                                    className="bg-blue-500 h-full rounded-full transition-all duration-200 relative"
                                    style={{ width: `${((cropState.scale - 0.5) / 2.5) * 100}%` }}
                                >
                                    {/* Draggable thumb */}
                                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 border-2 border-white rounded-full shadow-md cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"></div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-2">
                                <button
                                    onClick={handleRotate}
                                    className="flex items-center space-x-2 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <RotateCw className="w-4 h-4" />
                                    <span className="text-sm">Xoay</span>
                                </button>

                                <button
                                    onClick={handleReset}
                                    className="flex items-center space-x-2 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <RefreshCw className="w-4 h-4" />
                                    <span className="text-sm">Đặt lại</span>
                                </button>
                            </div>

                            <span className="text-xs text-gray-500">
                                {aspectRatio === 1 ? 'Hình vuông' : `Tỉ lệ ${aspectRatio.toFixed(1)}`}
                            </span>
                        </div>
                    </div>
                </Modal.Body>

                {/* Simple Footer */}
                <Modal.Footer className="bg-white border-t">
                    <div className="flex justify-end space-x-3">
                        <Button
                            variant="outline"
                            onClick={onClose}
                            disabled={isLoading}
                            className="px-4 py-2"
                        >
                            Hủy
                        </Button>

                        <Button
                            onClick={handleCrop}
                            disabled={isLoading}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            {isLoading ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                                    Đang xử lý...
                                </>
                            ) : (
                                <>
                                    <Check className="w-4 h-4 mr-2" />
                                    Xong
                                </>
                            )}
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ImageCropper;
