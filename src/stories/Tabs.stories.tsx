import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, Tab } from '../lib/components';
import { useState } from 'react';

const meta: Meta<typeof Tabs> = {
    title: 'Components/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['line', 'enclosed', 'soft-rounded', 'solid-rounded', 'unstyled'],
            description: 'The visual variant of the tabs',
        },
        align: {
            control: 'select',
            options: ['start', 'center', 'end'],
            description: 'The alignment of the tabs within their container',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'The size of the tabs',
        },
        fullWidth: {
            control: 'boolean',
            description: 'Whether the tabs should take the full width of their container',
        },
        animate: {
            control: 'boolean',
            description: 'Whether to show the tab content with a fade in animation',
        },
        lazyLoad: {
            control: 'boolean',
            description: 'Whether to lazy load tab content',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
    render: () => (
        <div className="w-[600px]">
            <Tabs>
                <Tab label="Account">
                    <div className="p-4">
                        <h3 className="text-lg font-medium">Account Settings</h3>
                        <p className="mt-2 text-gray-600">Manage your account information and preferences.</p>
                    </div>
                </Tab>
                <Tab label="Profile">
                    <div className="p-4">
                        <h3 className="text-lg font-medium">Profile Information</h3>
                        <p className="mt-2 text-gray-600">Update your profile details and public information.</p>
                    </div>
                </Tab>
                <Tab label="Notifications">
                    <div className="p-4">
                        <h3 className="text-lg font-medium">Notification Preferences</h3>
                        <p className="mt-2 text-gray-600">Control which notifications you receive.</p>
                    </div>
                </Tab>
            </Tabs>
        </div>
    ),
};

export const Variants: Story = {
    render: () => (
        <div className="flex flex-col gap-8 w-[600px]">
            <div>
                <h3 className="text-sm font-medium mb-2">Line (Default)</h3>
                <Tabs variant="line">
                    <Tab label="Tab 1">
                        <div className="p-4">Content for Tab 1</div>
                    </Tab>
                    <Tab label="Tab 2">
                        <div className="p-4">Content for Tab 2</div>
                    </Tab>
                    <Tab label="Tab 3">
                        <div className="p-4">Content for Tab 3</div>
                    </Tab>
                </Tabs>
            </div>

            <div>
                <h3 className="text-sm font-medium mb-2">Enclosed</h3>
                <Tabs variant="enclosed">
                    <Tab label="Tab 1">
                        <div className="p-4">Content for Tab 1</div>
                    </Tab>
                    <Tab label="Tab 2">
                        <div className="p-4">Content for Tab 2</div>
                    </Tab>
                    <Tab label="Tab 3">
                        <div className="p-4">Content for Tab 3</div>
                    </Tab>
                </Tabs>
            </div>

            <div>
                <h3 className="text-sm font-medium mb-2">Soft Rounded</h3>
                <Tabs variant="soft-rounded">
                    <Tab label="Tab 1">
                        <div className="p-4">Content for Tab 1</div>
                    </Tab>
                    <Tab label="Tab 2">
                        <div className="p-4">Content for Tab 2</div>
                    </Tab>
                    <Tab label="Tab 3">
                        <div className="p-4">Content for Tab 3</div>
                    </Tab>
                </Tabs>
            </div>

            <div>
                <h3 className="text-sm font-medium mb-2">Solid Rounded</h3>
                <Tabs variant="solid-rounded">
                    <Tab label="Tab 1">
                        <div className="p-4">Content for Tab 1</div>
                    </Tab>
                    <Tab label="Tab 2">
                        <div className="p-4">Content for Tab 2</div>
                    </Tab>
                    <Tab label="Tab 3">
                        <div className="p-4">Content for Tab 3</div>
                    </Tab>
                </Tabs>
            </div>

            <div>
                <h3 className="text-sm font-medium mb-2">Unstyled</h3>
                <Tabs variant="unstyled">
                    <Tab label="Tab 1">
                        <div className="p-4">Content for Tab 1</div>
                    </Tab>
                    <Tab label="Tab 2">
                        <div className="p-4">Content for Tab 2</div>
                    </Tab>
                    <Tab label="Tab 3">
                        <div className="p-4">Content for Tab 3</div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className="flex flex-col gap-8 w-[600px]">
            <div>
                <h3 className="text-sm font-medium mb-2">Small</h3>
                <Tabs size="sm">
                    <Tab label="Tab 1">
                        <div className="p-4">Content for Tab 1</div>
                    </Tab>
                    <Tab label="Tab 2">
                        <div className="p-4">Content for Tab 2</div>
                    </Tab>
                    <Tab label="Tab 3">
                        <div className="p-4">Content for Tab 3</div>
                    </Tab>
                </Tabs>
            </div>

            <div>
                <h3 className="text-sm font-medium mb-2">Medium (Default)</h3>
                <Tabs size="md">
                    <Tab label="Tab 1">
                        <div className="p-4">Content for Tab 1</div>
                    </Tab>
                    <Tab label="Tab 2">
                        <div className="p-4">Content for Tab 2</div>
                    </Tab>
                    <Tab label="Tab 3">
                        <div className="p-4">Content for Tab 3</div>
                    </Tab>
                </Tabs>
            </div>

            <div>
                <h3 className="text-sm font-medium mb-2">Large</h3>
                <Tabs size="lg">
                    <Tab label="Tab 1">
                        <div className="p-4">Content for Tab 1</div>
                    </Tab>
                    <Tab label="Tab 2">
                        <div className="p-4">Content for Tab 2</div>
                    </Tab>
                    <Tab label="Tab 3">
                        <div className="p-4">Content for Tab 3</div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    ),
};

export const Alignment: Story = {
    render: () => (
        <div className="flex flex-col gap-8 w-[600px]">
            <div>
                <h3 className="text-sm font-medium mb-2">Start (Default)</h3>
                <Tabs align="start">
                    <Tab label="Tab 1">
                        <div className="p-4">Content for Tab 1</div>
                    </Tab>
                    <Tab label="Tab 2">
                        <div className="p-4">Content for Tab 2</div>
                    </Tab>
                    <Tab label="Tab 3">
                        <div className="p-4">Content for Tab 3</div>
                    </Tab>
                </Tabs>
            </div>

            <div>
                <h3 className="text-sm font-medium mb-2">Center</h3>
                <Tabs align="center">
                    <Tab label="Tab 1">
                        <div className="p-4">Content for Tab 1</div>
                    </Tab>
                    <Tab label="Tab 2">
                        <div className="p-4">Content for Tab 2</div>
                    </Tab>
                    <Tab label="Tab 3">
                        <div className="p-4">Content for Tab 3</div>
                    </Tab>
                </Tabs>
            </div>

            <div>
                <h3 className="text-sm font-medium mb-2">End</h3>
                <Tabs align="end">
                    <Tab label="Tab 1">
                        <div className="p-4">Content for Tab 1</div>
                    </Tab>
                    <Tab label="Tab 2">
                        <div className="p-4">Content for Tab 2</div>
                    </Tab>
                    <Tab label="Tab 3">
                        <div className="p-4">Content for Tab 3</div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    ),
};

export const FullWidth: Story = {
    render: () => (
        <div className="w-[600px]">
            <Tabs fullWidth>
                <Tab label="Account">
                    <div className="p-4">Content for Account tab</div>
                </Tab>
                <Tab label="Profile">
                    <div className="p-4">Content for Profile tab</div>
                </Tab>
                <Tab label="Settings">
                    <div className="p-4">Content for Settings tab</div>
                </Tab>
            </Tabs>
        </div>
    ),
};

export const WithIcons: Story = {
    render: () => (
        <div className="w-[600px]">
            <Tabs>
                <Tab
                    label="Account"
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                    }
                >
                    <div className="p-4">Content for Account tab</div>
                </Tab>
                <Tab
                    label="Security"
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    }
                >
                    <div className="p-4">Content for Security tab</div>
                </Tab>
                <Tab
                    label="Notifications"
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>
                    }
                >
                    <div className="p-4">Content for Notifications tab</div>
                </Tab>
            </Tabs>
        </div>
    ),
};

export const DisabledTab: Story = {
    render: () => (
        <div className="w-[600px]">
            <Tabs>
                <Tab label="Account">
                    <div className="p-4">Content for Account tab</div>
                </Tab>
                <Tab label="Profile">
                    <div className="p-4">Content for Profile tab</div>
                </Tab>
                <Tab label="Admin" disabled>
                    <div className="p-4">Content for Admin tab</div>
                </Tab>
                <Tab label="Settings">
                    <div className="p-4">Content for Settings tab</div>
                </Tab>
            </Tabs>
        </div>
    ),
};

export const Controlled: Story = {
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [activeTab, setActiveTab] = useState(0);

        return (
            <div className="w-[600px]">
                <div className="mb-4">
                    <button
                        onClick={() => setActiveTab(0)}
                        className="px-3 py-1 mr-2 bg-blue-100 rounded"
                    >
                        Show Tab 1
                    </button>
                    <button
                        onClick={() => setActiveTab(1)}
                        className="px-3 py-1 mr-2 bg-blue-100 rounded"
                    >
                        Show Tab 2
                    </button>
                    <button
                        onClick={() => setActiveTab(2)}
                        className="px-3 py-1 bg-blue-100 rounded"
                    >
                        Show Tab 3
                    </button>
                </div>

                <p className="mb-4 text-sm">Current active tab: {activeTab + 1}</p>

                <Tabs
                    activeIndex={activeTab}
                    onChange={(index) => setActiveTab(index)}
                >
                    <Tab label="Tab 1">
                        <div className="p-4">Content for Tab 1</div>
                    </Tab>
                    <Tab label="Tab 2">
                        <div className="p-4">Content for Tab 2</div>
                    </Tab>
                    <Tab label="Tab 3">
                        <div className="p-4">Content for Tab 3</div>
                    </Tab>
                </Tabs>
            </div>
        );
    },
};
