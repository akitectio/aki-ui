import React, { useState } from 'react';

export interface Permission {
    /**
     * Unique identifier for the permission
     */
    id: string;

    /**
     * Display name for the permission
     */
    name: string;

    /**
     * Whether this permission is granted
     */
    granted: boolean;

    /**
     * Color variant for the permission badge
     */
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
}

export interface PermissionCategory {
    /**
     * Unique identifier for the category
     */
    id: string;

    /**
     * Display name for the category
     */
    name: string;

    /**
     * Color variant for the category badge
     */
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

    /**
     * List of permissions in this category (only for leaf nodes)
     */
    permissions?: Permission[];

    /**
     * Nested subcategories (for tree structure)
     */
    subcategories?: PermissionCategory[];

    /**
     * Whether the category is expanded by default
     */
    defaultExpanded?: boolean;

    /**
     * Nesting level (internal use)
     */
    level?: number;
}

export interface PermissionPanelProps {
    /**
     * Array of permission categories
     */
    categories: PermissionCategory[];

    /**
     * Callback when a permission is toggled
     */
    onPermissionChange?: (categoryId: string, permissionId: string, granted: boolean) => void;

    /**
     * Callback when all permissions are toggled
     */
    onAllPermissionsChange?: (granted: boolean) => void;

    /**
     * Whether to show the "All Permissions" checkbox
     */
    showAllPermissions?: boolean;

    /**
     * Whether to show the "Collapse all" / "Expand all" toggle
     */
    showCollapseToggle?: boolean;

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * Whether the panel is read-only
     */
    readOnly?: boolean;

    /**
     * Custom title for the panel
     */
    title?: string;
}

const PermissionPanel: React.FC<PermissionPanelProps> = ({
    categories,
    onPermissionChange,
    onAllPermissionsChange,
    showAllPermissions = true,
    showCollapseToggle = true,
    className = '',
    readOnly = false,
    title = 'Permission Flags',
}) => {
    const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
        new Set()
    );
    const [allExpanded, setAllExpanded] = useState(false);
    const [internalCategories, setInternalCategories] = useState<PermissionCategory[]>(categories);

    // Sync internal categories with prop changes
    React.useEffect(() => {
        setInternalCategories(categories);
    }, [categories]);

    // Initialize expanded categories based on defaultExpanded
    React.useEffect(() => {
        const getDefaultExpanded = (cats: PermissionCategory[]): string[] => {
            const expanded: string[] = [];
            cats.forEach(cat => {
                if (cat.defaultExpanded) {
                    expanded.push(cat.id);
                }
                if (cat.subcategories) {
                    expanded.push(...getDefaultExpanded(cat.subcategories));
                }
            });
            return expanded;
        };

        setExpandedCategories(new Set(getDefaultExpanded(internalCategories)));
    }, [internalCategories]);

    const toggleCategory = (categoryId: string) => {
        setExpandedCategories(prev => {
            const newSet = new Set(prev);
            if (newSet.has(categoryId)) {
                newSet.delete(categoryId);
            } else {
                newSet.add(categoryId);
            }
            return newSet;
        });
    };

    const getAllCategoryIds = (cats: PermissionCategory[]): string[] => {
        const ids: string[] = [];
        cats.forEach(cat => {
            ids.push(cat.id);
            if (cat.subcategories) {
                ids.push(...getAllCategoryIds(cat.subcategories));
            }
        });
        return ids;
    };

    const toggleAllCategories = () => {
        if (allExpanded) {
            setExpandedCategories(new Set());
        } else {
            setExpandedCategories(new Set(getAllCategoryIds(internalCategories)));
        }
        setAllExpanded(!allExpanded);
    };

    const handlePermissionChange = (categoryId: string, permissionId: string, granted: boolean) => {
        if (!readOnly) {
            // Update internal state
            const updatePermissionInCategory = (cats: PermissionCategory[]): PermissionCategory[] => {
                return cats.map(category => {
                    if (category.id === categoryId && category.permissions) {
                        return {
                            ...category,
                            permissions: category.permissions.map(permission => {
                                if (permission.id === permissionId) {
                                    return { ...permission, granted };
                                }
                                return permission;
                            })
                        };
                    }
                    if (category.subcategories) {
                        return {
                            ...category,
                            subcategories: updatePermissionInCategory(category.subcategories)
                        };
                    }
                    return category;
                });
            };

            const updatedCategories = updatePermissionInCategory(internalCategories);
            setInternalCategories(updatedCategories);

            // Call external callback if provided
            if (onPermissionChange) {
                onPermissionChange(categoryId, permissionId, granted);
            }
        }
    };

    // Calculate if all permissions are granted
    const getAllPermissionsState = (): { allGranted: boolean; totalCount: number; grantedCount: number } => {
        let totalCount = 0;
        let grantedCount = 0;

        const countPermissions = (category: PermissionCategory) => {
            if (category.permissions) {
                category.permissions.forEach(permission => {
                    totalCount++;
                    if (permission.granted) grantedCount++;
                });
            }
            if (category.subcategories) {
                category.subcategories.forEach(countPermissions);
            }
        };

        internalCategories.forEach(countPermissions);
        return { allGranted: grantedCount === totalCount && totalCount > 0, totalCount, grantedCount };
    };

    const handleAllPermissionsChange = (granted: boolean) => {
        if (!readOnly) {
            // Update internal state
            const setAllPermissions = (cats: PermissionCategory[]): PermissionCategory[] => {
                return cats.map(category => ({
                    ...category,
                    permissions: category.permissions?.map(permission => ({
                        ...permission,
                        granted,
                    })),
                    subcategories: category.subcategories ? setAllPermissions(category.subcategories) : undefined,
                }));
            };

            setInternalCategories(setAllPermissions);

            // Call external callback if provided
            if (onAllPermissionsChange) {
                onAllPermissionsChange(granted);
            }
        }
    };

    const { allGranted, grantedCount } = getAllPermissionsState();

    const getVariantClasses = (variant: string = 'secondary') => {
        const variants = {
            primary: 'bg-blue-50 text-blue-700 border-blue-200',
            secondary: 'bg-gray-50 text-gray-700 border-gray-200',
            success: 'bg-green-50 text-green-700 border-green-200',
            warning: 'bg-yellow-50 text-yellow-700 border-yellow-200',
            danger: 'bg-red-50 text-red-700 border-red-200',
            info: 'bg-cyan-50 text-cyan-700 border-cyan-200',
        };
        return variants[variant as keyof typeof variants] || variants.secondary;
    };

    const renderCategory = (category: PermissionCategory, level: number = 0): React.ReactNode => {
        const isExpanded = expandedCategories.has(category.id);
        const hasSubcategories = category.subcategories && category.subcategories.length > 0;
        const hasPermissions = category.permissions && category.permissions.length > 0;
        const paddingLeft = level * 24; // Consistent indentation

        const handleToggleClick = (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            toggleCategory(category.id);
        };

        return (
            <div key={category.id} className="border-b border-gray-100 last:border-b-0">
                {/* Category Header */}
                <div
                    className="flex items-center hover:bg-gray-50 transition-colors duration-150"
                    style={{ paddingLeft: `${paddingLeft + 16}px` }}
                >
                    <div className="flex items-center space-x-3 py-3 pr-4 w-full">
                        <div
                            className="flex-shrink-0 cursor-pointer p-1 -m-1 hover:bg-gray-100 rounded"
                            onClick={handleToggleClick}
                        >
                            {(hasSubcategories || hasPermissions) ? (
                                isExpanded ? (
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                ) : (
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                )
                            ) : (
                                <div className="w-4 h-4" />
                            )}
                        </div>
                        <span
                            className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full border ${getVariantClasses(category.variant)}`}
                        >
                            {category.name}
                        </span>
                        {/* Show permission count if category has permissions */}
                        {hasPermissions && (
                            <span className="text-xs text-gray-500 ml-auto">
                                {category.permissions!.filter(p => p.granted).length} / {category.permissions!.length} enabled
                            </span>
                        )}
                    </div>
                </div>

                {/* Category Content */}
                {isExpanded && (
                    <div className="bg-gray-25">
                        {/* Subcategories */}
                        {hasSubcategories && (
                            <div>
                                {category.subcategories!.map(subcategory =>
                                    renderCategory(subcategory, level + 1)
                                )}
                            </div>
                        )}

                        {/* Permissions */}
                        {hasPermissions && (
                            <div className="bg-white">
                                {category.permissions!.map((permission, index) => {
                                    return (
                                        <div
                                            key={permission.id}
                                            className={`flex items-center justify-between hover:bg-gray-25 transition-colors duration-150 py-3 pr-4 ${index < category.permissions!.length - 1 ? 'border-b border-gray-50' : ''
                                                }`}
                                            style={{ paddingLeft: `${paddingLeft + 48}px` }}
                                        >
                                            <div className="flex items-center space-x-3 flex-1">
                                                <label className="flex items-center cursor-pointer group">
                                                    <input
                                                        type="checkbox"
                                                        checked={permission.granted}
                                                        onChange={(e) => {
                                                            if (!readOnly) {
                                                                handlePermissionChange(category.id, permission.id, e.target.checked);
                                                            }
                                                        }}
                                                        disabled={readOnly}
                                                        className={`h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 focus:ring-offset-0 ${readOnly ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                                                            }`}
                                                    />
                                                </label>
                                                <span
                                                    className="text-sm text-gray-700 font-medium cursor-pointer"
                                                    onClick={() => {
                                                        if (!readOnly) {
                                                            handlePermissionChange(category.id, permission.id, !permission.granted);
                                                        }
                                                    }}
                                                >
                                                    {permission.name}
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <span
                                                    className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded border ${permission.granted
                                                        ? getVariantClasses(permission.variant || 'success')
                                                        : 'bg-gray-50 text-gray-500 border-gray-200'
                                                        }`}
                                                >
                                                    {permission.granted ? 'Enabled' : 'Disabled'}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className={`bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden ${className}`}>
            {/* Header */}
            <div className="px-4 py-4 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-full">
                            {grantedCount} active
                        </span>
                    </div>
                    <div className="flex items-center space-x-3">
                        {showAllPermissions && (
                            <label className="flex items-center space-x-2 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={allGranted}
                                    onChange={(e) => handleAllPermissionsChange(e.target.checked)}
                                    disabled={readOnly}
                                    className={`h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 focus:ring-offset-0 ${readOnly ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                                        }`}
                                />
                                <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700">
                                    All Permissions
                                </span>
                            </label>
                        )}
                        {showCollapseToggle && (
                            <button
                                onClick={toggleAllCategories}
                                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-150 border border-gray-200"
                            >
                                {allExpanded ? 'Collapse all' : 'Expand all'}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="divide-y divide-gray-100">
                {internalCategories.map((category) => renderCategory(category, 0))}
            </div>
        </div>
    );
};

export default PermissionPanel;
