import type { Meta, StoryObj } from '@storybook/react';
import { Command } from '../lib/components/Command';
import { useState } from 'react';

const meta: Meta<typeof Command> = {
    title: 'Components/Command',
    component: Command,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A command palette component for searching and selecting commands or options.'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: 'text',
            description: 'The selected value'
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState('');

        return (
            <Command value={value} onValueChange={setValue} className="rounded-lg border shadow-md">
                <Command.Input placeholder="Type a command or search..." />
                <Command.List>
                    <Command.Empty>No results found.</Command.Empty>
                    <Command.Group heading="Suggestions">
                        <Command.Item value="calendar" onSelect={() => console.log('Calendar selected')}>
                            📅 Calendar
                        </Command.Item>
                        <Command.Item value="search-emoji" onSelect={() => console.log('Search Emoji selected')}>
                            😀 Search Emoji
                        </Command.Item>
                        <Command.Item value="calculator" onSelect={() => console.log('Calculator selected')}>
                            🧮 Calculator
                        </Command.Item>
                    </Command.Group>
                    <Command.Group heading="Settings">
                        <Command.Item value="profile" onSelect={() => console.log('Profile selected')}>
                            👤 Profile
                        </Command.Item>
                        <Command.Item value="billing" onSelect={() => console.log('Billing selected')}>
                            💳 Billing
                        </Command.Item>
                        <Command.Item value="settings" onSelect={() => console.log('Settings selected')}>
                            ⚙️ Settings
                        </Command.Item>
                    </Command.Group>
                </Command.List>
            </Command>
        );
    }
};

export const FileSearch: Story = {
    render: () => {
        const [value, setValue] = useState('');

        const files = [
            { name: 'package.json', type: 'file' },
            { name: 'src', type: 'folder' },
            { name: 'components', type: 'folder' },
            { name: 'Button.tsx', type: 'file' },
            { name: 'Input.tsx', type: 'file' },
            { name: 'Dialog.tsx', type: 'file' },
            { name: 'utils', type: 'folder' },
            { name: 'index.ts', type: 'file' },
            { name: 'README.md', type: 'file' },
        ];

        return (
            <Command value={value} onValueChange={setValue} className="rounded-lg border shadow-md">
                <Command.Input placeholder="Search files..." />
                <Command.List>
                    <Command.Empty>No files found.</Command.Empty>
                    <Command.Group heading="Files">
                        {files.map((file) => (
                            <Command.Item
                                key={file.name}
                                value={file.name}
                                onSelect={() => console.log(`Opening ${file.name}`)}
                            >
                                {file.type === 'folder' ? '📁' : '📄'} {file.name}
                            </Command.Item>
                        ))}
                    </Command.Group>
                </Command.List>
            </Command>
        );
    }
};

export const UserSearch: Story = {
    render: () => {
        const [value, setValue] = useState('');

        const users = [
            { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
            { name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
            { name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer' },
            { name: 'Alice Brown', email: 'alice@example.com', role: 'Editor' },
            { name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin' },
        ];

        return (
            <Command value={value} onValueChange={setValue} className="rounded-lg border shadow-md">
                <Command.Input placeholder="Search users..." />
                <Command.List>
                    <Command.Empty>No users found.</Command.Empty>
                    <Command.Group heading="Users">
                        {users.map((user) => (
                            <Command.Item
                                key={user.email}
                                value={user.name}
                                onSelect={() => console.log(`Selected ${user.name}`)}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                        {user.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-medium">{user.name}</div>
                                        <div className="text-sm text-gray-500">{user.email}</div>
                                    </div>
                                    <div className="ml-auto">
                                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                                            {user.role}
                                        </span>
                                    </div>
                                </div>
                            </Command.Item>
                        ))}
                    </Command.Group>
                </Command.List>
            </Command>
        );
    }
};

export const CommandMenu: Story = {
    render: () => {
        const [value, setValue] = useState('');

        return (
            <Command value={value} onValueChange={setValue} className="rounded-lg border shadow-md">
                <Command.Input placeholder="Type a command..." />
                <Command.List>
                    <Command.Empty>No results found.</Command.Empty>
                    <Command.Group heading="File">
                        <Command.Item value="new-file" onSelect={() => console.log('New File')}>
                            📄 New File
                        </Command.Item>
                        <Command.Item value="open-file" onSelect={() => console.log('Open File')}>
                            📂 Open File
                        </Command.Item>
                        <Command.Item value="save-file" onSelect={() => console.log('Save File')}>
                            💾 Save File
                        </Command.Item>
                    </Command.Group>
                    <Command.Group heading="Edit">
                        <Command.Item value="copy" onSelect={() => console.log('Copy')}>
                            📋 Copy
                        </Command.Item>
                        <Command.Item value="paste" onSelect={() => console.log('Paste')}>
                            📋 Paste
                        </Command.Item>
                        <Command.Item value="cut" onSelect={() => console.log('Cut')}>
                            ✂️ Cut
                        </Command.Item>
                    </Command.Group>
                    <Command.Group heading="View">
                        <Command.Item value="zoom-in" onSelect={() => console.log('Zoom In')}>
                            🔍 Zoom In
                        </Command.Item>
                        <Command.Item value="zoom-out" onSelect={() => console.log('Zoom Out')}>
                            🔍 Zoom Out
                        </Command.Item>
                        <Command.Item value="full-screen" onSelect={() => console.log('Full Screen')}>
                            🖥️ Full Screen
                        </Command.Item>
                    </Command.Group>
                </Command.List>
            </Command>
        );
    }
};

export const WithDisabledItems: Story = {
    render: () => {
        const [value, setValue] = useState('');

        return (
            <Command value={value} onValueChange={setValue} className="rounded-lg border shadow-md">
                <Command.Input placeholder="Search actions..." />
                <Command.List>
                    <Command.Empty>No actions found.</Command.Empty>
                    <Command.Group heading="Actions">
                        <Command.Item value="edit" onSelect={() => console.log('Edit')}>
                            ✏️ Edit
                        </Command.Item>
                        <Command.Item value="delete" disabled onSelect={() => console.log('Delete')}>
                            🗑️ Delete (Disabled)
                        </Command.Item>
                        <Command.Item value="share" onSelect={() => console.log('Share')}>
                            🔗 Share
                        </Command.Item>
                        <Command.Item value="archive" disabled onSelect={() => console.log('Archive')}>
                            📦 Archive (Disabled)
                        </Command.Item>
                        <Command.Item value="duplicate" onSelect={() => console.log('Duplicate')}>
                            📄 Duplicate
                        </Command.Item>
                    </Command.Group>
                </Command.List>
            </Command>
        );
    }
};
