'use client'

import { Table } from '@akitectio/aki-ui';
import { CodeBlock } from '@/components/CodeBlock';
import { PageHeader } from '@/components/PageHeader';

export default function TablePage() {
    const invoices = [
        {
            invoice: "INV001",
            paymentStatus: "Paid",
            totalAmount: "$250.00",
            paymentMethod: "Credit Card",
        },
        {
            invoice: "INV002",
            paymentStatus: "Pending",
            totalAmount: "$150.00",
            paymentMethod: "PayPal",
        },
        {
            invoice: "INV003",
            paymentStatus: "Unpaid",
            totalAmount: "$350.00",
            paymentMethod: "Bank Transfer",
        },
        {
            invoice: "INV004",
            paymentStatus: "Paid",
            totalAmount: "$450.00",
            paymentMethod: "Credit Card",
        },
        {
            invoice: "INV005",
            paymentStatus: "Paid",
            totalAmount: "$550.00",
            paymentMethod: "PayPal",
        },
    ];

    return (
        <PageHeader
            title="Table"
            description="A responsive table component."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Import</h2>
                    <CodeBlock language="typescript">
                        {`import { Table } from '@akitectio/aki-ui'`}
                    </CodeBlock>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="rounded-md border">
                                <Table>
                                    <thead>
                                        <tr className="border-b">
                                            <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">
                                                Invoice
                                            </th>
                                            <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">
                                                Status
                                            </th>
                                            <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">
                                                Method
                                            </th>
                                            <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">
                                                Amount
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {invoices.map((invoice) => (
                                            <tr key={invoice.invoice} className="border-b">
                                                <td className="p-4 align-middle">
                                                    <div className="font-medium">{invoice.invoice}</div>
                                                </td>
                                                <td className="p-4 align-middle">
                                                    <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${invoice.paymentStatus === 'Paid'
                                                            ? 'bg-green-100 text-green-800'
                                                            : invoice.paymentStatus === 'Pending'
                                                                ? 'bg-yellow-100 text-yellow-800'
                                                                : 'bg-red-100 text-red-800'
                                                        }`}>
                                                        {invoice.paymentStatus}
                                                    </div>
                                                </td>
                                                <td className="p-4 align-middle">
                                                    {invoice.paymentMethod}
                                                </td>
                                                <td className="p-4 align-middle">
                                                    <div className="font-medium">{invoice.totalAmount}</div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <CodeBlock language="jsx">
                            {`const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  // ... more data
];

<div className="rounded-md border">
  <Table>
    <thead>
      <tr className="border-b">
        <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">
          Invoice
        </th>
        <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">
          Status
        </th>
        <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">
          Method
        </th>
        <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">
          Amount
        </th>
      </tr>
    </thead>
    <tbody>
      {invoices.map((invoice) => (
        <tr key={invoice.invoice} className="border-b">
          <td className="p-4 align-middle">
            <div className="font-medium">{invoice.invoice}</div>
          </td>
          <td className="p-4 align-middle">
            <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium">
              {invoice.paymentStatus}
            </div>
          </td>
          <td className="p-4 align-middle">
            {invoice.paymentMethod}
          </td>
          <td className="p-4 align-middle">
            <div className="font-medium">{invoice.totalAmount}</div>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
</div>`}
                        </CodeBlock>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Simple Table</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <Table>
                                <thead>
                                    <tr>
                                        <th className="text-left p-2">Name</th>
                                        <th className="text-left p-2">Age</th>
                                        <th className="text-left p-2">Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-2">John Doe</td>
                                        <td className="p-2">30</td>
                                        <td className="p-2">Developer</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2">Jane Smith</td>
                                        <td className="p-2">25</td>
                                        <td className="p-2">Designer</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2">Bob Johnson</td>
                                        <td className="p-2">35</td>
                                        <td className="p-2">Manager</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <CodeBlock language="jsx">
                            {`<Table>
  <thead>
    <tr>
      <th className="text-left p-2">Name</th>
      <th className="text-left p-2">Age</th>
      <th className="text-left p-2">Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="p-2">John Doe</td>
      <td className="p-2">30</td>
      <td className="p-2">Developer</td>
    </tr>
    <tr>
      <td className="p-2">Jane Smith</td>
      <td className="p-2">25</td>
      <td className="p-2">Designer</td>
    </tr>
    <tr>
      <td className="p-2">Bob Johnson</td>
      <td className="p-2">35</td>
      <td className="p-2">Manager</td>
    </tr>
  </tbody>
</Table>`}
                        </CodeBlock>
                    </div>
                </section>
            </div>
        </PageHeader>
    );
}
