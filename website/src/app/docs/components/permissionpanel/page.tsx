'use client'

import { useState } from 'react'
import { PermissionPanel } from '@akitectio/aki-ui'
import type { PermissionCategory } from '@akitectio/aki-ui'
import { PageHeader } from '@/components/PageHeader'
import { CodeBlock } from '@/components/CodeBlock'

export default function PermissionPanelPage() {
    const [sampleCategories, setSampleCategories] = useState<PermissionCategory[]>([
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
    ])

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
            permissions: category.permissions?.map((permission: any) => ({
                ...permission,
                granted,
            })),
            subcategories: category.subcategories ? setAllPermissions(category.subcategories, granted) : undefined,
        }));
    };

    const handlePermissionChange = (categoryId: string, permissionId: string, granted: boolean) => {
        setSampleCategories(prev => updatePermissionInCategory(prev, categoryId, permissionId, granted));
    };

    const handleAllPermissionsChange = (granted: boolean) => {
        setSampleCategories(prev => setAllPermissions(prev, granted));
    };

    const basicCategories: PermissionCategory[] = [
        {
            id: 'users',
            name: 'Users',
            variant: 'primary',
            permissions: [
                { id: 'create', name: 'Create', granted: true, variant: 'success' },
                { id: 'edit', name: 'Edit', granted: true, variant: 'warning' },
                { id: 'delete', name: 'Delete', granted: false, variant: 'danger' },
            ],
        },
        {
            id: 'settings',
            name: 'Settings',
            variant: 'secondary',
            permissions: [
                { id: 'view', name: 'View', granted: true, variant: 'primary' },
                { id: 'edit', name: 'Edit', granted: false, variant: 'warning' },
            ],
        },
    ];

    return (
        <PageHeader
            title="PermissionPanel"
            description="A flexible multi-level permission management panel with collapsible nested categories and individual permission checkboxes."
        >
            <div className="space-y-8">
                {/* Import */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Import</h2>
                    <CodeBlock language="typescript">
                        {`import { PermissionPanel } from '@akitectio/aki-ui'`}
                    </CodeBlock>
                </section>

                {/* Basic Usage */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
                    <div className="bg-gray-50 p-6 rounded-lg border mb-4">
                        <PermissionPanel
                            categories={basicCategories}
                            showAllPermissions={false}
                            showCollapseToggle={false}
                        />
                    </div>
                    <CodeBlock
                        language="tsx"
                        code={`const categories = [
  {
    id: 'users',
    name: 'Users',
    variant: 'primary',
    permissions: [
      { id: 'create', name: 'Create', granted: true, variant: 'success' },
      { id: 'edit', name: 'Edit', granted: true, variant: 'warning' },
      { id: 'delete', name: 'Delete', granted: false, variant: 'danger' },
    ],
  },
  {
    id: 'settings',
    name: 'Settings',
    variant: 'secondary',
    permissions: [
      { id: 'view', name: 'View', granted: true, variant: 'primary' },
      { id: 'edit', name: 'Edit', granted: false, variant: 'warning' },
    ],
  },
];

<PermissionPanel categories={categories} />`}
                    />
                </section>

                {/* Interactive Example */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Interactive Example</h2>
                    <div className="bg-gray-50 p-6 rounded-lg border mb-4">
                        <PermissionPanel
                            categories={sampleCategories}
                            onPermissionChange={handlePermissionChange}
                            onAllPermissionsChange={handleAllPermissionsChange}
                            showAllPermissions={true}
                            showCollapseToggle={true}
                            title="Interactive Permission Manager"
                        />
                    </div>
                    <CodeBlock
                        language="tsx"
                        code={`const [categories, setCategories] = useState(sampleCategories);

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

const handlePermissionChange = (categoryId: string, permissionId: string, granted: boolean) => {
  setCategories(prev => updatePermissionInCategory(prev, categoryId, permissionId, granted));
};

<PermissionPanel
  categories={categories}
  onPermissionChange={handlePermissionChange}
  onAllPermissionsChange={handleAllPermissionsChange}
  showAllPermissions={true}
  showCollapseToggle={true}
  title="Interactive Permission Manager"
/>`}
                    />
                </section>

                {/* Nested Structure */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Nested Structure</h2>
                    <p className="text-gray-600 mb-4">
                        PermissionPanel supports unlimited nesting levels for complex permission hierarchies.
                    </p>
                    <CodeBlock
                        language="tsx"
                        code={`const nestedCategories = [
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
              { id: 'delete', name: 'Delete', granted: false, variant: 'danger' },
            ],
          },
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
        ],
      },
    ],
  },
];`}
                    />
                </section>

                {/* Props */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Props</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prop</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">categories</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">PermissionCategory[]</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">Array of permission categories</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onPermissionChange</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">function</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">Callback when a permission checkbox is toggled</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onAllPermissionsChange</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">function</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">Callback when the "All Permissions" checkbox is toggled</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">showAllPermissions</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">true</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">Whether to show the "All Permissions" checkbox</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">showCollapseToggle</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">true</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">Whether to show the "Collapse all" / "Expand all" toggle</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">readOnly</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">Whether the panel is read-only</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">className</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">''</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">Additional CSS classes</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">title</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'Permission Flags'</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">Custom title for the panel</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Bootstrap-Style Example */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Full Permission Management Example</h2>
                    <p className="text-gray-600 mb-4">
                        This example demonstrates how the PermissionPanel can replicate complex permission management systems with deep nesting levels and organized layouts.
                    </p>
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-4">
                        <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                            <h4 className="text-lg font-semibold text-gray-800">Permission Flags</h4>
                        </div>
                        <div className="p-6">
                            <PermissionPanel
                                categories={[
                                    {
                                        id: 'ads',
                                        name: 'Ads',
                                        variant: 'success',
                                        permissions: [
                                            { id: 'create', name: 'Create', granted: true, variant: 'primary' },
                                            { id: 'edit', name: 'Edit', granted: true, variant: 'primary' },
                                            { id: 'delete', name: 'Delete', granted: false, variant: 'primary' },
                                        ],
                                    },
                                    {
                                        id: 'announcements',
                                        name: 'Announcements',
                                        variant: 'success',
                                        permissions: [
                                            { id: 'create', name: 'Create', granted: true, variant: 'primary' },
                                            { id: 'edit', name: 'Edit', granted: false, variant: 'primary' },
                                            { id: 'delete', name: 'Delete', granted: false, variant: 'primary' },
                                        ],
                                    },
                                    {
                                        id: 'cms',
                                        name: 'CMS',
                                        variant: 'success',
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
                                                            { id: 'create', name: 'Create', granted: true },
                                                            { id: 'edit', name: 'Edit', granted: true },
                                                            { id: 'trash', name: 'Trash', granted: false },
                                                            { id: 'delete', name: 'Delete', granted: false },
                                                        ],
                                                    },
                                                    {
                                                        id: 'folder',
                                                        name: 'Folder',
                                                        variant: 'warning',
                                                        permissions: [
                                                            { id: 'create', name: 'Create', granted: true },
                                                            { id: 'edit', name: 'Edit', granted: true },
                                                            { id: 'delete', name: 'Delete', granted: false },
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
                                                id: 'blog',
                                                name: 'Blog',
                                                variant: 'primary',
                                                subcategories: [
                                                    {
                                                        id: 'posts',
                                                        name: 'Posts',
                                                        variant: 'warning',
                                                        permissions: [
                                                            { id: 'create', name: 'Create', granted: true },
                                                            { id: 'edit', name: 'Edit', granted: true },
                                                            { id: 'delete', name: 'Delete', granted: false },
                                                        ],
                                                    },
                                                    {
                                                        id: 'categories',
                                                        name: 'Categories',
                                                        variant: 'warning',
                                                        permissions: [
                                                            { id: 'create', name: 'Create', granted: true },
                                                            { id: 'edit', name: 'Edit', granted: true },
                                                            { id: 'delete', name: 'Delete', granted: false },
                                                        ],
                                                    },
                                                    {
                                                        id: 'tags',
                                                        name: 'Tags',
                                                        variant: 'warning',
                                                        permissions: [
                                                            { id: 'create', name: 'Create', granted: true },
                                                            { id: 'edit', name: 'Edit', granted: true },
                                                            { id: 'delete', name: 'Delete', granted: false },
                                                        ],
                                                    },
                                                ],
                                            },
                                            {
                                                id: 'contact',
                                                name: 'Contact',
                                                variant: 'primary',
                                                permissions: [
                                                    { id: 'edit', name: 'Edit', granted: false, variant: 'warning' },
                                                    { id: 'delete', name: 'Delete', granted: false, variant: 'warning' },
                                                    { id: 'custom-fields', name: 'Custom Fields', granted: false, variant: 'warning' },
                                                ],
                                            },
                                            {
                                                id: 'galleries',
                                                name: 'Galleries',
                                                variant: 'primary',
                                                permissions: [
                                                    { id: 'create', name: 'Create', granted: true, variant: 'warning' },
                                                    { id: 'edit', name: 'Edit', granted: true, variant: 'warning' },
                                                    { id: 'delete', name: 'Delete', granted: false, variant: 'warning' },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        id: 'fob-comments',
                                        name: 'FOB Comments',
                                        variant: 'success',
                                        permissions: [
                                            { id: 'list', name: 'List', granted: true, variant: 'primary' },
                                            { id: 'edit', name: 'Edit', granted: false, variant: 'primary' },
                                            { id: 'delete', name: 'Delete', granted: false, variant: 'primary' },
                                            { id: 'reply', name: 'Reply', granted: false, variant: 'primary' },
                                            { id: 'settings', name: 'Settings', granted: false, variant: 'primary' },
                                        ],
                                    },
                                    {
                                        id: 'newsletters',
                                        name: 'Newsletters',
                                        variant: 'success',
                                        permissions: [
                                            { id: 'delete', name: 'Delete', granted: false, variant: 'primary' },
                                        ],
                                    },
                                    {
                                        id: 'settings',
                                        name: 'Settings',
                                        variant: 'success',
                                        subcategories: [
                                            {
                                                id: 'common',
                                                name: 'Common',
                                                variant: 'primary',
                                                subcategories: [
                                                    {
                                                        id: 'general',
                                                        name: 'General',
                                                        variant: 'warning',
                                                        permissions: [
                                                            { id: 'options', name: 'General', granted: false },
                                                            { id: 'email', name: 'Email', granted: false },
                                                            { id: 'media', name: 'Media', granted: false },
                                                            { id: 'admin-appearance', name: 'Admin Appearance', granted: false },
                                                            { id: 'cache', name: 'Cache', granted: false },
                                                            { id: 'datatables', name: 'Datatables', granted: false },
                                                            { id: 'email-rules', name: 'Email Rules', granted: false },
                                                            { id: 'optimize', name: 'Optimize', granted: false },
                                                            { id: 'website-tracking', name: 'Website Tracking', granted: false },
                                                        ],
                                                    },
                                                    {
                                                        id: 'languages',
                                                        name: 'Languages',
                                                        variant: 'warning',
                                                        permissions: [
                                                            { id: 'create', name: 'Create', granted: false },
                                                            { id: 'edit', name: 'Edit', granted: false },
                                                            { id: 'delete', name: 'Delete', granted: false },
                                                        ],
                                                    },
                                                ],
                                            },
                                            {
                                                id: 'others',
                                                name: 'Others',
                                                variant: 'primary',
                                                permissions: [
                                                    { id: 'ads', name: 'Ads', granted: false, variant: 'warning' },
                                                    { id: 'analytics', name: 'Analytics', granted: false, variant: 'warning' },
                                                    { id: 'announcements', name: 'Announcements', granted: false, variant: 'warning' },
                                                    { id: 'blog', name: 'Blog', granted: false, variant: 'warning' },
                                                    { id: 'captcha', name: 'Captcha', granted: false, variant: 'warning' },
                                                    { id: 'contact', name: 'Contact', granted: false, variant: 'warning' },
                                                    { id: 'newsletters', name: 'Newsletters', granted: false, variant: 'warning' },
                                                ],
                                            },
                                            {
                                                id: 'sitemap',
                                                name: 'Sitemap',
                                                variant: 'primary',
                                                permissions: [
                                                    { id: 'settings', name: 'Settings', granted: false },
                                                ],
                                            },
                                            {
                                                id: 'localization',
                                                name: 'Localization',
                                                variant: 'primary',
                                                permissions: [
                                                    { id: 'locales', name: 'Locales', granted: false, variant: 'warning' },
                                                    { id: 'theme-translations', name: 'Theme translations', granted: false, variant: 'warning' },
                                                    { id: 'other-translations', name: 'Other translations', granted: false, variant: 'warning' },
                                                ],
                                            },
                                            {
                                                id: 'api',
                                                name: 'API',
                                                variant: 'primary',
                                                subcategories: [
                                                    {
                                                        id: 'sanctum-token',
                                                        name: 'Sanctum Token',
                                                        variant: 'warning',
                                                        permissions: [
                                                            { id: 'create', name: 'Create', granted: false },
                                                            { id: 'delete', name: 'Delete', granted: false },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        id: 'system',
                                        name: 'System',
                                        variant: 'success',
                                        subcategories: [
                                            {
                                                id: 'users',
                                                name: 'Users',
                                                variant: 'primary',
                                                permissions: [
                                                    { id: 'create', name: 'Create', granted: false, variant: 'warning' },
                                                    { id: 'edit', name: 'Edit', granted: false, variant: 'warning' },
                                                    { id: 'delete', name: 'Delete', granted: false, variant: 'warning' },
                                                ],
                                            },
                                            {
                                                id: 'roles',
                                                name: 'Roles',
                                                variant: 'primary',
                                                permissions: [
                                                    { id: 'create', name: 'Create', granted: false, variant: 'warning' },
                                                    { id: 'edit', name: 'Edit', granted: false, variant: 'warning' },
                                                    { id: 'delete', name: 'Delete', granted: false, variant: 'warning' },
                                                ],
                                            },
                                            {
                                                id: 'license',
                                                name: 'Manage license',
                                                variant: 'primary',
                                                permissions: [],
                                            },
                                            {
                                                id: 'cronjob',
                                                name: 'Cronjob',
                                                variant: 'primary',
                                                permissions: [],
                                            },
                                            {
                                                id: 'plugins',
                                                name: 'Plugins',
                                                variant: 'primary',
                                                permissions: [
                                                    { id: 'activate', name: 'Activate/Deactivate', granted: false, variant: 'warning' },
                                                    { id: 'remove', name: 'Remove', granted: false, variant: 'warning' },
                                                    { id: 'marketplace', name: 'Add New Plugins', granted: false, variant: 'warning' },
                                                ],
                                            },
                                        ],
                                    },
                                ]}
                                onPermissionChange={handlePermissionChange}
                                showAllPermissions={true}
                                showCollapseToggle={true}
                            />
                        </div>
                    </div>
                    <CodeBlock
                        language="tsx"
                        code={`// Complex permission structure with deep nesting
const complexPermissions = [
  {
    id: 'cms',
    name: 'CMS',
    variant: 'success',
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
              { id: 'create', name: 'Create', granted: true },
              { id: 'edit', name: 'Edit', granted: true },
              { id: 'delete', name: 'Delete', granted: false },
            ],
          },
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
            variant: 'warning',
            permissions: [
              { id: 'create', name: 'Create', granted: true },
              { id: 'edit', name: 'Edit', granted: true },
              { id: 'delete', name: 'Delete', granted: false },
            ],
          },
        ],
      },
    ],
  },
];

<PermissionPanel
  categories={complexPermissions}
  onPermissionChange={handlePermissionChange}
  showAllPermissions={true}
  showCollapseToggle={true}
/>`}
                    />
                </section>

                {/* Color Variants */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Color Variants</h2>
                    <p className="text-gray-600 mb-4">
                        Both categories and permissions support color variants for better visual organization:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                            <span className="px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800">primary</span>
                            <span className="text-sm text-gray-600">Blue theme</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800">secondary</span>
                            <span className="text-sm text-gray-600">Gray theme</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="px-2 py-1 text-xs font-medium rounded bg-green-100 text-green-800">success</span>
                            <span className="text-sm text-gray-600">Green theme</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="px-2 py-1 text-xs font-medium rounded bg-yellow-100 text-yellow-800">warning</span>
                            <span className="text-sm text-gray-600">Yellow theme</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="px-2 py-1 text-xs font-medium rounded bg-red-100 text-red-800">danger</span>
                            <span className="text-sm text-gray-600">Red theme</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="px-2 py-1 text-xs font-medium rounded bg-cyan-100 text-cyan-800">info</span>
                            <span className="text-sm text-gray-600">Cyan theme</span>
                        </div>
                    </div>
                </section>
            </div>
        </PageHeader>
    )
}
