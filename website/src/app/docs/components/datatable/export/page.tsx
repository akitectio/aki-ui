'use client'

import { useState, useEffect } from 'react'
import { DataTable, Card, Badge, Button, Select, Alert, Checkbox } from '@/components/client-components'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

interface ExportableUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  department: string;
  hireDate: string;
  salary: number;
  status: 'active' | 'inactive' | 'pending';
  manager: string;
  location: string;
}

export default function DataTableExportPage() {
  // Mock HR/Analytics API for realistic export data
  const mockAnalyticsApi = {
    generateHRData: (): ExportableUser[] => [
      {
        id: 1,
        firstName: "Sarah",
        lastName: "Johnson",
        email: "sarah.johnson@megacorp.com",
        role: "Engineering Manager",
        department: "Engineering",
        hireDate: "2021-03-15",
        salary: 145000,
        status: "active",
        manager: "Robert Chen",
        location: "San Francisco, CA"
      },
      {
        id: 2,
        firstName: "Michael",
        lastName: "Rodriguez",
        email: "michael.rodriguez@megacorp.com",
        role: "Senior Data Scientist",
        department: "Analytics",
        hireDate: "2020-07-22",
        salary: 125000,
        status: "active",
        manager: "Lisa Wang",
        location: "New York, NY"
      },
      {
        id: 3,
        firstName: "Emily",
        lastName: "Davis",
        email: "emily.davis@megacorp.com",
        role: "Product Designer",
        department: "Design",
        hireDate: "2022-01-10",
        salary: 95000,
        status: "active",
        manager: "James Wilson",
        location: "Los Angeles, CA"
      },
      {
        id: 4,
        firstName: "David",
        lastName: "Thompson",
        email: "david.thompson@megacorp.com",
        role: "DevOps Engineer",
        department: "Engineering",
        hireDate: "2021-11-08",
        salary: 110000,
        status: "pending",
        manager: "Sarah Johnson",
        location: "Seattle, WA"
      },
      {
        id: 5,
        firstName: "Jessica",
        lastName: "Brown",
        email: "jessica.brown@megacorp.com",
        role: "Marketing Director",
        department: "Marketing",
        hireDate: "2019-05-14",
        salary: 135000,
        status: "active",
        manager: "Thomas Lee",
        location: "Chicago, IL"
      },
      {
        id: 6,
        firstName: "Christopher",
        lastName: "Miller",
        email: "christopher.miller@megacorp.com",
        role: "Frontend Developer",
        department: "Engineering",
        hireDate: "2023-02-20",
        salary: 85000,
        status: "active",
        manager: "Sarah Johnson",
        location: "Austin, TX"
      },
      {
        id: 7,
        firstName: "Amanda",
        lastName: "Wilson",
        email: "amanda.wilson@megacorp.com",
        role: "Sales Manager",
        department: "Sales",
        hireDate: "2020-09-12",
        salary: 98000,
        status: "inactive",
        manager: "Mark Stevens",
        location: "Boston, MA"
      },
      {
        id: 8,
        firstName: "Ryan",
        lastName: "Garcia",
        email: "ryan.garcia@megacorp.com",
        role: "Backend Developer",
        department: "Engineering",
        hireDate: "2022-06-01",
        salary: 92000,
        status: "active",
        manager: "Sarah Johnson",
        location: "Denver, CO"
      },
      {
        id: 9,
        firstName: "Nicole",
        lastName: "Anderson",
        email: "nicole.anderson@megacorp.com",
        role: "HR Specialist",
        department: "Human Resources",
        hireDate: "2021-08-16",
        salary: 65000,
        status: "active",
        manager: "Patricia Moore",
        location: "Miami, FL"
      },
      {
        id: 10,
        firstName: "Kevin",
        lastName: "Taylor",
        email: "kevin.taylor@megacorp.com",
        role: "QA Engineer",
        department: "Engineering",
        hireDate: "2023-04-03",
        salary: 78000,
        status: "active",
        manager: "Sarah Johnson",
        location: "Portland, OR"
      }
    ],

    // Mock export API endpoints
    exportToCSV: async (data: ExportableUser[], columns: string[]) => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800))
      console.log('[Export API] Generating CSV with', data.length, 'records')
      return { success: true, downloadUrl: '/api/exports/users.csv', fileSize: '2.3 KB' }
    },

    exportToExcel: async (data: ExportableUser[], columns: string[]) => {
      await new Promise(resolve => setTimeout(resolve, 1200))
      console.log('[Export API] Generating Excel with', data.length, 'records')
      return { success: true, downloadUrl: '/api/exports/users.xlsx', fileSize: '5.8 KB' }
    },

    exportToPDF: async (data: ExportableUser[], columns: string[]) => {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('[Export API] Generating PDF with', data.length, 'records')
      return { success: true, downloadUrl: '/api/exports/users.pdf', fileSize: '12.4 KB' }
    }
  }

  const [users, setUsers] = useState<ExportableUser[]>([])
  const [isExporting, setIsExporting] = useState(false)
  const [exportStatus, setExportStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  // Initialize data on client-side only to prevent hydration mismatches
  useEffect(() => {
    setUsers(mockAnalyticsApi.generateHRData())
  }, [])

  // Enhanced export functions that call mock API
  const handleExportCSV = async (selectedData: ExportableUser[], columns: string[]) => {
    setIsExporting(true)
    setExportStatus(null)

    try {
      const result = await mockAnalyticsApi.exportToCSV(selectedData, columns)
      setExportStatus({
        type: 'success',
        message: `CSV exported successfully! File size: ${result.fileSize}. Download started.`
      })

      // Simulate file download trigger
      console.log('Would trigger download from:', result.downloadUrl)
    } catch (error) {
      setExportStatus({ type: 'error', message: 'CSV export failed. Please try again.' })
    } finally {
      setIsExporting(false)
    }
  }

  const handleExportExcel = async (selectedData: ExportableUser[], columns: string[]) => {
    setIsExporting(true)
    setExportStatus(null)

    try {
      const result = await mockAnalyticsApi.exportToExcel(selectedData, columns)
      setExportStatus({
        type: 'success',
        message: `Excel exported successfully! File size: ${result.fileSize}. Download started.`
      })

      console.log('Would trigger download from:', result.downloadUrl)
    } catch (error) {
      setExportStatus({ type: 'error', message: 'Excel export failed. Please try again.' })
    } finally {
      setIsExporting(false)
    }
  }

  const handleExportPDF = async (selectedData: ExportableUser[], columns: string[]) => {
    setIsExporting(true)
    setExportStatus(null)

    try {
      const result = await mockAnalyticsApi.exportToPDF(selectedData, columns)
      setExportStatus({
        type: 'success',
        message: `PDF exported successfully! File size: ${result.fileSize}. Download started.`
      })

      console.log('Would trigger download from:', result.downloadUrl)
    } catch (error) {
      setExportStatus({ type: 'error', message: 'PDF export failed. Please try again.' })
    } finally {
      setIsExporting(false)
    }
  }

  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [exportFormat, setExportFormat] = useState<'csv' | 'excel' | 'pdf' | 'json'>('csv');
  const [exportColumns, setExportColumns] = useState<string[]>([
    'firstName', 'lastName', 'email', 'role', 'department', 'salary'
  ]);
  const [exportAlert, setExportAlert] = useState<string | null>(null);

  const allColumns = [
    { key: 'firstName', label: 'First Name' },
    { key: 'lastName', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'department', label: 'Department' },
    { key: 'hireDate', label: 'Hire Date' },
    { key: 'salary', label: 'Salary' },
    { key: 'status', label: 'Status' },
    { key: 'manager', label: 'Manager' },
    { key: 'location', label: 'Location' }
  ];

  const toggleColumnExport = (columnKey: string) => {
    setExportColumns(prev =>
      prev.includes(columnKey)
        ? prev.filter(key => key !== columnKey)
        : [...prev, columnKey]
    );
  };

  const convertToCSV = (data: ExportableUser[], columns: string[]) => {
    const headers = columns.map(col => allColumns.find(c => c.key === col)?.label || col);
    const rows = data.map(user =>
      columns.map(col => {
        const value = user[col as keyof ExportableUser];
        // Escape commas and quotes for CSV
        if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
          return `"${value.replace(/"/g, '""')}"`;
        }
        return value;
      })
    );

    return [headers, ...rows].map(row => row.join(',')).join('\n');
  };

  const downloadFile = (content: string, filename: string, mimeType: string) => {
    // Check if document and body are available (prevent SSR issues)
    if (typeof document === 'undefined' || !document.body) {
      console.warn('Document or body not available for download');
      return;
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;

    try {
      document.body.appendChild(link);
      link.click();

      // Enhanced safe removal with multiple checks and delay
      setTimeout(() => {
        if (link && link.parentNode === document.body && document.body.contains(link)) {
          try {
            document.body.removeChild(link);
          } catch (removeError) {
            console.debug('Link element already removed:', removeError);
          }
        }
      }, 10); // Small delay to ensure click event completes

    } catch (appendError) {
      console.error('Failed to trigger download:', appendError);
    } finally {
      // Always clean up the URL object with delay
      setTimeout(() => {
        try {
          URL.revokeObjectURL(url);
        } catch (revokeError) {
          console.debug('URL already revoked:', revokeError);
        }
      }, 100);
    }
  };

  const handleExport = () => {
    const dataToExport = selectedRows.length > 0
      ? users.filter(user => selectedRows.includes(user.id))
      : users;

    if (dataToExport.length === 0) {
      setExportAlert('No data to export');
      return;
    }

    const timestamp = new Date().toISOString().split('T')[0];

    switch (exportFormat) {
      case 'csv':
        const csvContent = convertToCSV(dataToExport, exportColumns);
        downloadFile(csvContent, `users-export-${timestamp}.csv`, 'text/csv');
        break;

      case 'json':
        const jsonData = dataToExport.map(user => {
          const filteredUser: any = {};
          exportColumns.forEach(col => {
            filteredUser[col] = user[col as keyof ExportableUser];
          });
          return filteredUser;
        });
        downloadFile(JSON.stringify(jsonData, null, 2), `users-export-${timestamp}.json`, 'application/json');
        break;

      case 'excel':
        // For demo purposes, we'll create a CSV that Excel can open
        const excelContent = convertToCSV(dataToExport, exportColumns);
        downloadFile(excelContent, `users-export-${timestamp}.xlsx`, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        break;

      case 'pdf':
        // For demo purposes, we'll create a simple text representation
        const headers = exportColumns.map(col => allColumns.find(c => c.key === col)?.label || col);
        const pdfContent = `Users Export Report - ${timestamp}\n\n` +
          headers.join('\t') + '\n' +
          dataToExport.map(user =>
            exportColumns.map(col => user[col as keyof ExportableUser]).join('\t')
          ).join('\n');
        downloadFile(pdfContent, `users-export-${timestamp}.pdf`, 'application/pdf');
        break;
    }

    setExportAlert(`Successfully exported ${dataToExport.length} records as ${exportFormat.toUpperCase()}`);
    setTimeout(() => setExportAlert(null), 5000);
  };

  const columns = [
    {
      header: '',
      accessor: 'select',
      width: '50px',
      cell: (value: any, user: ExportableUser) => (
        <Checkbox
          checked={selectedRows.includes(user.id)}
          onChange={(checked) => {
            if (checked) {
              setSelectedRows(prev => [...prev, user.id]);
            } else {
              setSelectedRows(prev => prev.filter(id => id !== user.id));
            }
          }}
        />
      )
    },
    {
      header: 'Name',
      accessor: 'firstName',
      cell: (value: any, user: ExportableUser) => `${user.firstName} ${user.lastName}`
    },
    {
      header: 'Email',
      accessor: 'email',
      cell: (value: string) => value
    },
    {
      header: 'Role',
      accessor: 'role',
      cell: (value: string) => value
    },
    {
      header: 'Department',
      accessor: 'department',
      cell: (value: string) => value
    },
    {
      header: 'Hire Date',
      accessor: 'hireDate',
      cell: (value: string) => {
        // Use consistent date formatting to prevent hydration mismatches
        const date = new Date(value);
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          timeZone: 'UTC'
        });
      }
    },
    {
      header: 'Salary',
      accessor: 'salary',
      cell: (value: number) => {
        // Use consistent number formatting to prevent hydration mismatches
        return `$${value.toLocaleString('en-US')}`;
      }
    },
    {
      header: 'Status',
      accessor: 'status',
      cell: (value: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${value === 'active' ? 'bg-green-100 text-green-800' :
          value === 'inactive' ? 'bg-red-100 text-red-800' :
            'bg-yellow-100 text-yellow-800'
          }`}>
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </span>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader
        title="Export DataTable"
        description="Export data tables to various formats including CSV, Excel, JSON, and PDF with customizable column selection"
      >
        {/* Optional children content */}
      </PageHeader>

      <div className="space-y-8">

        {exportAlert && (
          <Alert
            variant={exportAlert.includes('Successfully') ? 'success' : 'error'}
            className="mb-6"
          >
            {exportAlert}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setExportAlert(null)}
              className="ml-2"
            >
              Dismiss
            </Button>
          </Alert>
        )}

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Export Controls
          </h2>

          <div className="bg-white border rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Export Format
                </label>
                <Select
                  value={exportFormat}
                  onValueChange={(value) => setExportFormat(value as any)}
                  options={[
                    { value: 'csv', label: 'CSV' },
                    { value: 'excel', label: 'Excel (XLSX)' },
                    { value: 'json', label: 'JSON' },
                    { value: 'pdf', label: 'PDF' }
                  ]}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Export Selection
                </label>
                <div className="text-sm text-gray-600">
                  {selectedRows.length > 0
                    ? `${selectedRows.length} selected rows`
                    : 'All visible rows'
                  }
                </div>
                {selectedRows.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedRows([])}
                    className="mt-1"
                  >
                    Clear selection
                  </Button>
                )}
              </div>

              <div>
                <Button
                  onClick={handleExport}
                  className="w-full"
                  disabled={exportColumns.length === 0}
                >
                  Export Data
                </Button>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Columns to Export
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {allColumns.map(column => (
                  <label key={column.key} className="flex items-center">
                    <Checkbox
                      checked={exportColumns.includes(column.key)}
                      onChange={(checked) => toggleColumnExport(column.key)}
                    />
                    <span className="ml-2 text-sm text-gray-700">{column.label}</span>
                  </label>
                ))}
              </div>
              <div className="mt-2 flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setExportColumns(allColumns.map(c => c.key))}
                >
                  Select All
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setExportColumns([])}
                >
                  Select None
                </Button>
              </div>
            </div>
          </div>

          <div className="border rounded-lg">
            <DataTable
              data={users}
              columns={columns}
              enablePagination={true}
              defaultPageSize={10}
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Implementation
          </h2>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Basic Export Setup</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`import { DataTable, Button, Select } from '@/components/client-components';

function ExportableDataTable() {
  const [data, setData] = useState(users);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [exportFormat, setExportFormat] = useState<'csv' | 'excel' | 'json'>('csv');

  const convertToCSV = (data: any[], columns: string[]) => {
    const headers = columns;
    const rows = data.map(item => 
      columns.map(col => {
        const value = item[col];
        // Escape commas and quotes for CSV
        if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
          return \`"\${value.replace(/"/g, '""')}"}\`;
        }
        return value;
      })
    );
    
    return [headers, ...rows].map(row => row.join(',')).join('\\n');
  };

  const downloadFile = (content: string, filename: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    
    try {
      document.body.appendChild(link);
      link.click();
      
      // Enhanced safe removal with multiple checks
      if (link.parentNode === document.body && document.body.contains(link)) {
        try {
          document.body.removeChild(link);
        } catch (removeError) {
          console.debug('Link element already removed:', removeError);
        }
      }
    } catch (appendError) {
      console.error('Failed to trigger download:', appendError);
    } finally {
      // Always clean up the URL object
      setTimeout(() => URL.revokeObjectURL(url), 100);
    }
  };

  const handleExport = () => {
    const dataToExport = selectedRows.length > 0 
      ? data.filter(item => selectedRows.includes(item.id))
      : data;

    const timestamp = new Date().toISOString().split('T')[0];
    
    switch (exportFormat) {
      case 'csv':
        const csvContent = convertToCSV(dataToExport, Object.keys(dataToExport[0]));
        downloadFile(csvContent, \`export-\${timestamp}.csv\`, 'text/csv');
        break;
      case 'json':
        downloadFile(JSON.stringify(dataToExport, null, 2), \`export-\${timestamp}.json\`, 'application/json');
        break;
    }
  };

  return (
    <div>
      <div className="mb-4 flex gap-4">
        <Select
          value={exportFormat}
          onValueChange={setExportFormat}
          options={[
            { value: 'csv', label: 'CSV' },
            { value: 'excel', label: 'Excel' },
            { value: 'json', label: 'JSON' }
          ]}
        />
        <Button onClick={handleExport}>Export</Button>
      </div>
      
      <DataTable
        data={data}
        columns={columns}
        selectable={true}
        onSelectionChange={setSelectedRows}
      />
    </div>
  );
}`}</code>
            </pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Export Formats
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">CSV Export</h3>
              <p className="text-gray-600 mb-3">
                Comma-separated values format, compatible with Excel and other spreadsheet applications.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Handles special characters and commas</li>
                <li>• Proper quote escaping</li>
                <li>• UTF-8 encoding support</li>
                <li>• Custom delimiter options</li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Excel Export</h3>
              <p className="text-gray-600 mb-3">
                Native Excel format with advanced formatting options.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Preserves data types</li>
                <li>• Custom cell formatting</li>
                <li>• Multiple worksheets</li>
                <li>• Charts and formulas</li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">JSON Export</h3>
              <p className="text-gray-600 mb-3">
                Structured data format ideal for APIs and data interchange.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Preserves data structure</li>
                <li>• Nested object support</li>
                <li>• Array handling</li>
                <li>• Type preservation</li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">PDF Export</h3>
              <p className="text-gray-600 mb-3">
                Formatted document export with custom layouts and styling.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Custom page layouts</li>
                <li>• Headers and footers</li>
                <li>• Charts and images</li>
                <li>• Print-ready formatting</li>
              </ul>
            </div>
          </div>
        </section>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Best Practices
          </h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-blue-900 mb-3">Recommendations</h3>
            <ul className="text-blue-800 space-y-2">
              <li><strong>Performance:</strong> For large datasets, consider server-side export generation.</li>
              <li><strong>User Experience:</strong> Show progress indicators for large exports.</li>
              <li><strong>Security:</strong> Validate and sanitize data before export to prevent injection attacks.</li>
              <li><strong>Accessibility:</strong> Provide alternative formats for users with disabilities.</li>
              <li><strong>File Naming:</strong> Use descriptive filenames with timestamps.</li>
              <li><strong>Column Selection:</strong> Allow users to choose which columns to export.</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  )
}
