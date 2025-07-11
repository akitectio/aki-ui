import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import PermissionPanel from '../lib/components/PermissionPanel/PermissionPanel';
import type { PermissionCategory } from '../lib/components/PermissionPanel/PermissionPanel';

const meta: Meta<typeof PermissionPanel> = {
    title: 'Components/PermissionPanel',
    component: PermissionPanel,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A flexible permission management panel with collapsible categories and individual permission checkboxes.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        categories: {
            control: 'object',
            description: 'Array of permission categories with their permissions',
        },
        onPermissionChange: {
            action: 'permission-changed',
            description: 'Callback when a permission checkbox is toggled',
        },
        onAllPermissionsChange: {
            action: 'all-permissions-changed',
            description: 'Callback when the "All Permissions" checkbox is toggled',
        },
        showAllPermissions: {
            control: 'boolean',
            description: 'Whether to show the "All Permissions" checkbox',
        },
        showCollapseToggle: {
            control: 'boolean',
            description: 'Whether to show the "Collapse all" / "Expand all" toggle',
        },
        readOnly: {
            control: 'boolean',
            description: 'Whether the panel is read-only',
        },
        title: {
            control: 'text',
            description: 'Custom title for the panel',
        },
    },
};

export default meta;
type Story = StoryObj<typeof PermissionPanel>;

const sampleCategories: PermissionCategory[] = [
    {
        id: 'ads',
        name: 'Ads',
        variant: 'success',
        permissions: [
            { id: 'create', name: 'Create', granted: true, variant: 'success' },
            { id: 'edit', name: 'Edit', granted: true, variant: 'success' },
            { id: 'delete', name: 'Delete', granted: false, variant: 'danger' },
        ],
    },
    {
        id: 'announcements',
        name: 'Announcements',
        variant: 'info',
        permissions: [
            { id: 'create', name: 'Create', granted: true, variant: 'success' },
            { id: 'edit', name: 'Edit', granted: false, variant: 'warning' },
            { id: 'delete', name: 'Delete', granted: false, variant: 'danger' },
        ],
    },
    {
        id: 'cms',
        name: 'CMS',
        variant: 'secondary',
        subcategories: [
            {
                id: 'media',
                name: 'Media',
                variant: 'primary',
                subcategories: [
                    {
                        id: 'file',
                        name: 'File',
                        variant: 'warning',
                        permissions: [
                            { id: 'create', name: 'Create', granted: true, variant: 'success' },
                            { id: 'edit', name: 'Edit', granted: true, variant: 'warning' },
                            { id: 'trash', name: 'Trash', granted: false, variant: 'danger' },
                            { id: 'delete', name: 'Delete', granted: false, variant: 'danger' },
                        ],
                    },
                    {
                        id: 'folder',
                        name: 'Folder',
                        variant: 'warning',
                        permissions: [
                            { id: 'create', name: 'Create', granted: true, variant: 'success' },
                            { id: 'edit', name: 'Edit', granted: true, variant: 'warning' },
                            { id: 'delete', name: 'Delete', granted: false, variant: 'danger' },
                        ],
                    },
                ],
            },
            {
                id: 'pages',
                name: 'Pages',
                variant: 'primary',
                permissions: [
                    { id: 'create', name: 'Create', granted: true, variant: 'warning' },
                    { id: 'edit', name: 'Edit', granted: true, variant: 'warning' },
                    { id: 'delete', name: 'Delete', granted: false, variant: 'warning' },
                ],
            },
            {
                id: 'contact',
                name: 'Contact',
                variant: 'primary',
                permissions: [
                    { id: 'view', name: 'View', granted: true, variant: 'primary' },
                    { id: 'edit', name: 'Edit', granted: false, variant: 'primary' },
                ],
            },
            {
                id: 'galleries',
                name: 'Galleries',
                variant: 'primary',
                permissions: [
                    { id: 'create', name: 'Create', granted: true, variant: 'warning' },
                    { id: 'edit', name: 'Edit', granted: false, variant: 'warning' },
                    { id: 'delete', name: 'Delete', granted: false, variant: 'warning' },
                ],
            },
            {
                id: 'blog',
                name: 'Blog',
                variant: 'primary',
                subcategories: [
                    {
                        id: 'posts',
                        name: 'Posts',
                        variant: 'info',
                        permissions: [
                            { id: 'create', name: 'Create', granted: true, variant: 'success' },
                            { id: 'edit', name: 'Edit', granted: true, variant: 'warning' },
                            { id: 'delete', name: 'Delete', granted: false, variant: 'danger' },
                        ],
                    },
                    {
                        id: 'categories',
                        name: 'Categories',
                        variant: 'warning',
                        permissions: [
                            { id: 'create', name: 'Create', granted: true, variant: 'success' },
                            { id: 'edit', name: 'Edit', granted: true, variant: 'warning' },
                            { id: 'delete', name: 'Delete', granted: false, variant: 'danger' },
                        ],
                    },
                    {
                        id: 'tags',
                        name: 'Tags',
                        variant: 'warning',
                        permissions: [
                            { id: 'create', name: 'Create', granted: true, variant: 'success' },
                            { id: 'edit', name: 'Edit', granted: true, variant: 'warning' },
                            { id: 'delete', name: 'Delete', granted: false, variant: 'danger' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 'fob-comments',
        name: 'FOB Comments',
        variant: 'success',
        permissions: [
            { id: 'list', name: 'List', granted: true, variant: 'success' },
            { id: 'edit', name: 'Edit', granted: false, variant: 'warning' },
            { id: 'reply', name: 'Reply', granted: true, variant: 'success' },
            { id: 'settings', name: 'Settings', granted: false, variant: 'warning' },
            { id: 'delete', name: 'Delete', granted: false, variant: 'danger' },
        ],
    },
    {
        id: 'newsletters',
        name: 'Newsletters',
        variant: 'success',
        permissions: [
            { id: 'delete', name: 'Delete', granted: false, variant: 'danger' },
        ],
    },
    {
        id: 'settings',
        name: 'Settings',
        variant: 'secondary',
        permissions: [
            { id: 'common', name: 'Common', granted: true, variant: 'primary' },
            { id: 'localization', name: 'Localization', granted: false, variant: 'primary' },
            { id: 'others', name: 'Others', granted: true, variant: 'primary' },
            { id: 'api', name: 'API', granted: false, variant: 'primary' },
            { id: 'sitemap', name: 'Sitemap', granted: false, variant: 'primary' },
        ],
    },
    {
        id: 'system',
        name: 'System',
        variant: 'secondary',
        permissions: [
            { id: 'users', name: 'Users', granted: true, variant: 'primary' },
            { id: 'cronjob', name: 'Cronjob', granted: false, variant: 'primary' },
            { id: 'analytics', name: 'Analytics', granted: true, variant: 'primary' },
            { id: 'roles', name: 'Roles', granted: false, variant: 'primary' },
            { id: 'plugins', name: 'Plugins', granted: true, variant: 'primary' },
            { id: 'activity-logs', name: 'Activity Logs', granted: false, variant: 'primary' },
            { id: 'appearance', name: 'Appearance', granted: true, variant: 'primary' },
            { id: 'manage-license', name: 'Manage license', granted: false, variant: 'primary' },
            { id: 'backup', name: 'Backup', granted: false, variant: 'primary' },
        ],
    },
];

export const Default: Story = {
    args: {
        categories: sampleCategories,
        showAllPermissions: true,
        showCollapseToggle: true,
        readOnly: false,
    },
};

export const ReadOnly: Story = {
    args: {
        categories: sampleCategories,
        showAllPermissions: false,
        showCollapseToggle: false,
        readOnly: true,
    },
};

export const WithExpandedCategories: Story = {
    args: {
        categories: sampleCategories.map(cat => ({ ...cat, defaultExpanded: true })),
        showAllPermissions: true,
        showCollapseToggle: true,
        readOnly: false,
    },
};

export const Interactive: Story = {
    render: (args) => {
        const [categories, setCategories] = useState<PermissionCategory[]>(sampleCategories);

        const updatePermissionInCategory = (
            cats: PermissionCategory[],
            categoryId: string,
            permissionId: string,
            granted: boolean
        ): PermissionCategory[] => {
            return cats.map(category => {
                if (category.id === categoryId && category.permissions) {
                    return {
                        ...category,
                        permissions: category.permissions.map(permission =>
                            permission.id === permissionId
                                ? { ...permission, granted }
                                : permission
                        )
                    };
                }
                if (category.subcategories) {
                    return {
                        ...category,
                        subcategories: updatePermissionInCategory(category.subcategories, categoryId, permissionId, granted)
                    };
                }
                return category;
            });
        };

        const setAllPermissions = (cats: PermissionCategory[], granted: boolean): PermissionCategory[] => {
            return cats.map(category => ({
                ...category,
                permissions: category.permissions?.map(permission => ({
                    ...permission,
                    granted,
                })),
                subcategories: category.subcategories ? setAllPermissions(category.subcategories, granted) : undefined,
            }));
        };

        const handlePermissionChange = (categoryId: string, permissionId: string, granted: boolean) => {
            setCategories(prev => updatePermissionInCategory(prev, categoryId, permissionId, granted));
        };

        const handleAllPermissionsChange = (granted: boolean) => {
            setCategories(prev => setAllPermissions(prev, granted));
        };

        return (
            <PermissionPanel
                {...args}
                categories={categories}
                onPermissionChange={handlePermissionChange}
                onAllPermissionsChange={handleAllPermissionsChange}
            />
        );
    },
    args: {
        showAllPermissions: true,
        showCollapseToggle: true,
        readOnly: false,
        title: 'Interactive Permission Panel',
    },
};

export const SelfContained: Story = {
    args: {
        categories: [
            {
                id: 'test',
                name: 'Test Category',
                variant: 'primary',
                permissions: [
                    { id: 'read', name: 'Read', granted: false },
                    { id: 'write', name: 'Write', granted: true },
                    { id: 'admin', name: 'Admin', granted: false },
                ],
                defaultExpanded: true,
            },
        ],
        showAllPermissions: true,
        showCollapseToggle: false,
        readOnly: false,
        title: 'Self-Contained Test',
    },
};
