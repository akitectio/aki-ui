import type { Meta, StoryObj } from '@storybook/react';
import Table from '../lib/components/Table';

const meta: Meta<typeof Table> = {
    title: 'Components/Table',
    component: Table,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A table component for displaying tabular data with various layouts and styles.'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
            description: 'Additional CSS classes'
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Table>
            <Table.Caption>A list of your recent invoices.</Table.Caption>
            <Table.Header>
                <Table.Row>
                    <Table.Head className="w-[100px]">Invoice</Table.Head>
                    <Table.Head>Status</Table.Head>
                    <Table.Head>Method</Table.Head>
                    <Table.Head className="text-right">Amount</Table.Head>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell className="font-medium">INV001</Table.Cell>
                    <Table.Cell>Paid</Table.Cell>
                    <Table.Cell>Credit Card</Table.Cell>
                    <Table.Cell className="text-right">$250.00</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell className="font-medium">INV002</Table.Cell>
                    <Table.Cell>Pending</Table.Cell>
                    <Table.Cell>PayPal</Table.Cell>
                    <Table.Cell className="text-right">$150.00</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell className="font-medium">INV003</Table.Cell>
                    <Table.Cell>Unpaid</Table.Cell>
                    <Table.Cell>Bank Transfer</Table.Cell>
                    <Table.Cell className="text-right">$350.00</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell className="font-medium">INV004</Table.Cell>
                    <Table.Cell>Paid</Table.Cell>
                    <Table.Cell>Credit Card</Table.Cell>
                    <Table.Cell className="text-right">$450.00</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
};

export const WithFooter: Story = {
    render: () => (
        <Table>
            <Table.Caption>Monthly sales report</Table.Caption>
            <Table.Header>
                <Table.Row>
                    <Table.Head>Month</Table.Head>
                    <Table.Head>Sales</Table.Head>
                    <Table.Head>Revenue</Table.Head>
                    <Table.Head className="text-right">Growth</Table.Head>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell className="font-medium">January</Table.Cell>
                    <Table.Cell>120</Table.Cell>
                    <Table.Cell>$12,000</Table.Cell>
                    <Table.Cell className="text-right">+10%</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell className="font-medium">February</Table.Cell>
                    <Table.Cell>140</Table.Cell>
                    <Table.Cell>$14,000</Table.Cell>
                    <Table.Cell className="text-right">+15%</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell className="font-medium">March</Table.Cell>
                    <Table.Cell>160</Table.Cell>
                    <Table.Cell>$16,000</Table.Cell>
                    <Table.Cell className="text-right">+20%</Table.Cell>
                </Table.Row>
            </Table.Body>
            <Table.Footer>
                <Table.Row>
                    <Table.Cell colSpan={2}>Total</Table.Cell>
                    <Table.Cell>$42,000</Table.Cell>
                    <Table.Cell className="text-right">+15%</Table.Cell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )
};

export const UserTable: Story = {
    render: () => (
        <Table>
            <Table.Caption>Team members and their roles</Table.Caption>
            <Table.Header>
                <Table.Row>
                    <Table.Head>Name</Table.Head>
                    <Table.Head>Email</Table.Head>
                    <Table.Head>Role</Table.Head>
                    <Table.Head>Status</Table.Head>
                    <Table.Head className="text-right">Actions</Table.Head>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                J
                            </div>
                            <div>
                                <div className="font-medium">John Doe</div>
                                <div className="text-sm text-gray-500">Software Engineer</div>
                            </div>
                        </div>
                    </Table.Cell>
                    <Table.Cell>john@example.com</Table.Cell>
                    <Table.Cell>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Admin
                        </span>
                    </Table.Cell>
                    <Table.Cell>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Active
                        </span>
                    </Table.Cell>
                    <Table.Cell className="text-right">
                        <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                J
                            </div>
                            <div>
                                <div className="font-medium">Jane Smith</div>
                                <div className="text-sm text-gray-500">Product Manager</div>
                            </div>
                        </div>
                    </Table.Cell>
                    <Table.Cell>jane@example.com</Table.Cell>
                    <Table.Cell>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Editor
                        </span>
                    </Table.Cell>
                    <Table.Cell>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Active
                        </span>
                    </Table.Cell>
                    <Table.Cell className="text-right">
                        <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                B
                            </div>
                            <div>
                                <div className="font-medium">Bob Johnson</div>
                                <div className="text-sm text-gray-500">Designer</div>
                            </div>
                        </div>
                    </Table.Cell>
                    <Table.Cell>bob@example.com</Table.Cell>
                    <Table.Cell>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            Viewer
                        </span>
                    </Table.Cell>
                    <Table.Cell>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Inactive
                        </span>
                    </Table.Cell>
                    <Table.Cell className="text-right">
                        <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
};

export const DataTable: Story = {
    render: () => (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.Head>ID</Table.Head>
                    <Table.Head>Product</Table.Head>
                    <Table.Head>Category</Table.Head>
                    <Table.Head>Price</Table.Head>
                    <Table.Head>Stock</Table.Head>
                    <Table.Head className="text-right">Actions</Table.Head>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell className="font-mono text-sm">#001</Table.Cell>
                    <Table.Cell>
                        <div>
                            <div className="font-medium">Wireless Headphones</div>
                            <div className="text-sm text-gray-500">Premium quality sound</div>
                        </div>
                    </Table.Cell>
                    <Table.Cell>Electronics</Table.Cell>
                    <Table.Cell>$199.99</Table.Cell>
                    <Table.Cell>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            In Stock (25)
                        </span>
                    </Table.Cell>
                    <Table.Cell className="text-right">
                        <div className="flex justify-end gap-2">
                            <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                            <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                        </div>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell className="font-mono text-sm">#002</Table.Cell>
                    <Table.Cell>
                        <div>
                            <div className="font-medium">Laptop Stand</div>
                            <div className="text-sm text-gray-500">Ergonomic design</div>
                        </div>
                    </Table.Cell>
                    <Table.Cell>Accessories</Table.Cell>
                    <Table.Cell>$49.99</Table.Cell>
                    <Table.Cell>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            Out of Stock
                        </span>
                    </Table.Cell>
                    <Table.Cell className="text-right">
                        <div className="flex justify-end gap-2">
                            <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                            <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                        </div>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell className="font-mono text-sm">#003</Table.Cell>
                    <Table.Cell>
                        <div>
                            <div className="font-medium">Mechanical Keyboard</div>
                            <div className="text-sm text-gray-500">RGB backlighting</div>
                        </div>
                    </Table.Cell>
                    <Table.Cell>Electronics</Table.Cell>
                    <Table.Cell>$129.99</Table.Cell>
                    <Table.Cell>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Low Stock (3)
                        </span>
                    </Table.Cell>
                    <Table.Cell className="text-right">
                        <div className="flex justify-end gap-2">
                            <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                            <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                        </div>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
};

export const SimpleTable: Story = {
    render: () => (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.Head>Feature</Table.Head>
                    <Table.Head>Basic</Table.Head>
                    <Table.Head>Pro</Table.Head>
                    <Table.Head>Enterprise</Table.Head>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell className="font-medium">Storage</Table.Cell>
                    <Table.Cell>10GB</Table.Cell>
                    <Table.Cell>100GB</Table.Cell>
                    <Table.Cell>1TB</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell className="font-medium">Users</Table.Cell>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell>5</Table.Cell>
                    <Table.Cell>Unlimited</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell className="font-medium">Support</Table.Cell>
                    <Table.Cell>Email</Table.Cell>
                    <Table.Cell>Priority</Table.Cell>
                    <Table.Cell>24/7 Phone</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
};
