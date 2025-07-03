'use client'

import { useState } from 'react'
import { DataTable, Card, Badge, Button, Input, Select, Alert } from '@/components/client-components'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

interface EditableUser {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  status: 'active' | 'inactive';
  salary: number;
}

export default function DataTableEditablePage() {
  // Mock API for CRUD operations
  const mockCrudApi = {
    // Simulate API delays
    delay: (ms: number = 500) => new Promise(resolve => setTimeout(resolve, ms)),
    
    // Mock data generation
    generateInitialData: (): EditableUser[] => [
      {
        id: 1,
        name: "Sarah Johnson",
        email: "sarah.johnson@techcorp.com",
        role: "Senior Developer",
        department: "Engineering",
        status: "active",
        salary: 95000
      },
      {
        id: 2,
        name: "Michael Chen",
        email: "michael.chen@techcorp.com", 
        role: "Product Manager",
        department: "Product",
        status: "active",
        salary: 110000
      },
      {
        id: 3,
        name: "Emily Rodriguez",
        email: "emily.rodriguez@techcorp.com",
        role: "UX Designer", 
        department: "Design",
        status: "active",
        salary: 78000
      },
      {
        id: 4,
        name: "David Kim",
        email: "david.kim@techcorp.com",
        role: "DevOps Engineer",
        department: "Engineering", 
        status: "inactive",
        salary: 88000
      },
      {
        id: 5,
        name: "Lisa Thompson",
        email: "lisa.thompson@techcorp.com",
        role: "Marketing Manager",
        department: "Marketing",
        status: "active", 
        salary: 72000
      }
    ],

    // Mock API methods
    updateUser: async (id: number, updates: Partial<EditableUser>) => {
      await mockCrudApi.delay(300)
      // Simulate server validation
      if (updates.email && !updates.email.includes('@')) {
        throw new Error('Invalid email format')
      }
      if (updates.salary && updates.salary < 30000) {
        throw new Error('Salary must be at least $30,000')
      }
      console.log(`[API] Updated user ${id}:`, updates)
      return { success: true, message: 'User updated successfully' }
    },

    deleteUser: async (id: number) => {
      await mockCrudApi.delay(400)
      console.log(`[API] Deleted user ${id}`)
      return { success: true, message: 'User deleted successfully' }
    },

    createUser: async (userData: Omit<EditableUser, 'id'>) => {
      await mockCrudApi.delay(600)
      const newId = Date.now() // Simple ID generation
      console.log(`[API] Created user ${newId}:`, userData)
      return { success: true, data: { ...userData, id: newId }, message: 'User created successfully' }
    }
  }

  const [users, setUsers] = useState<EditableUser[]>(mockCrudApi.generateInitialData())
  const [isLoading, setIsLoading] = useState(false)
  const [apiMessage, setApiMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [editingCell, setEditingCell] = useState<{ rowId: number; field: string } | null>(null)
  const [tempValue, setTempValue] = useState('')

  // Enhanced functions that call mock API
  const handleUpdateUser = async (id: number, updates: Partial<EditableUser>) => {
    setIsLoading(true)
    setApiMessage(null)
    
    try {
      const result = await mockCrudApi.updateUser(id, updates)
      
      // Update local state on successful API call
      setUsers(prev => prev.map(user => 
        user.id === id ? { ...user, ...updates } : user
      ))
      
      setApiMessage({ type: 'success', text: result.message })
    } catch (error) {
      setApiMessage({ type: 'error', text: error instanceof Error ? error.message : 'Update failed' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteUser = async (id: number) => {
    setIsLoading(true)
    setApiMessage(null)
    
    try {
      const result = await mockCrudApi.deleteUser(id)
      
      // Remove from local state on successful API call
      setUsers(prev => prev.filter(user => user.id !== id))
      
      setApiMessage({ type: 'success', text: result.message })
    } catch (error) {
      setApiMessage({ type: 'error', text: 'Delete failed' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreateUser = async (userData: Omit<EditableUser, 'id'>) => {
    setIsLoading(true)
    setApiMessage(null)
    
    try {
      const result = await mockCrudApi.createUser(userData)
      
      // Add to local state on successful API call
      setUsers(prev => [...prev, result.data])
      
      setApiMessage({ type: 'success', text: result.message })
    } catch (error) {
      setApiMessage({ type: 'error', text: 'Create failed' })
    } finally {
      setIsLoading(false)
    }
  }

  // Editing handlers
  const handleEdit = (rowId: number, field: string, currentValue: any) => {
    setEditingCell({ rowId, field })
    setTempValue(String(currentValue))
  }

  const handleSave = async () => {
    if (!editingCell) return
    
    const { rowId, field } = editingCell
    const updates = { [field]: field === 'salary' ? parseInt(tempValue) : tempValue }
    
    try {
      await handleUpdateUser(rowId, updates)
      setEditingCell(null)
      setTempValue('')
    } catch (error) {
      console.error('Save failed:', error)
    }
  }

  const handleCancel = () => {
    setEditingCell(null)
    setTempValue('')
  }

  const columns = [
    {
      header: 'Name',
      accessor: 'name',
      sortable: true,
      cell: (value: string, row: EditableUser) => {
        if (editingCell?.rowId === row.id && editingCell?.field === 'name') {
          return (
            <div className="flex items-center gap-2">
              <Input
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className="min-w-0"
                autoFocus
              />
              <Button size="sm" onClick={handleSave}>
                ✓
              </Button>
              <Button size="sm" variant="ghost" onClick={handleCancel}>
                ✗
              </Button>
            </div>
          );
        }
        return (
          <div 
            className="cursor-pointer hover:bg-gray-50 p-1 rounded"
            onClick={() => handleEdit(row.id, 'name', value)}
          >
            {value}
          </div>
        );
      }
    },
    {
      header: 'Email',
      accessor: 'email',
      sortable: true,
      cell: (value: string, row: EditableUser) => {
        if (editingCell?.rowId === row.id && editingCell?.field === 'email') {
          return (
            <div className="flex items-center gap-2">
              <Input
                type="email"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className="min-w-0"
                autoFocus
              />
              <Button size="sm" onClick={handleSave}>
                ✓
              </Button>
              <Button size="sm" variant="ghost" onClick={handleCancel}>
                ✗
              </Button>
            </div>
          );
        }
        return (
          <div 
            className="cursor-pointer hover:bg-gray-50 p-1 rounded"
            onClick={() => handleEdit(row.id, 'email', value)}
          >
            {value}
          </div>
        );
      }
    },
    {
      header: 'Role',
      accessor: 'role',
      sortable: true,
      cell: (value: string, row: EditableUser) => {
        if (editingCell?.rowId === row.id && editingCell?.field === 'role') {
          return (
            <div className="flex items-center gap-2">
              <Select
                value={tempValue}
                onValueChange={setTempValue}
                className="min-w-0"
              >
                <option value="Senior Developer">Senior Developer</option>
                <option value="Product Manager">Product Manager</option>
                <option value="UX Designer">UX Designer</option>
                <option value="DevOps Engineer">DevOps Engineer</option>
                <option value="Marketing Manager">Marketing Manager</option>
              </Select>
              <Button size="sm" onClick={handleSave}>
                ✓
              </Button>
              <Button size="sm" variant="ghost" onClick={handleCancel}>
                ✗
              </Button>
            </div>
          );
        }
        return (
          <div 
            className="cursor-pointer hover:bg-gray-50 p-1 rounded"
            onClick={() => handleEdit(row.id, 'role', value)}
          >
            <Badge variant="secondary">{value}</Badge>
          </div>
        );
      }
    },
    {
      header: 'Department',
      accessor: 'department',
      sortable: true,
      cell: (value: string, row: EditableUser) => {
        if (editingCell?.rowId === row.id && editingCell?.field === 'department') {
          return (
            <div className="flex items-center gap-2">
              <Select
                value={tempValue}
                onValueChange={setTempValue}
                className="min-w-0"
              >
                <option value="Engineering">Engineering</option>
                <option value="Product">Product</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
              </Select>
              <Button size="sm" onClick={handleSave}>
                ✓
              </Button>
              <Button size="sm" variant="ghost" onClick={handleCancel}>
                ✗
              </Button>
            </div>
          );
        }
        return (
          <div 
            className="cursor-pointer hover:bg-gray-50 p-1 rounded"
            onClick={() => handleEdit(row.id, 'department', value)}
          >
            {value}
          </div>
        );
      }
    },
    {
      header: 'Status',
      accessor: 'status',
      sortable: true,
      cell: (value: string, row: EditableUser) => {
        if (editingCell?.rowId === row.id && editingCell?.field === 'status') {
          return (
            <div className="flex items-center gap-2">
              <Select
                value={tempValue}
                onValueChange={setTempValue}
                className="min-w-0"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Select>
              <Button size="sm" onClick={handleSave}>
                ✓
              </Button>
              <Button size="sm" variant="ghost" onClick={handleCancel}>
                ✗
              </Button>
            </div>
          );
        }
        return (
          <div 
            className="cursor-pointer hover:bg-gray-50 p-1 rounded"
            onClick={() => handleEdit(row.id, 'status', value)}
          >
            <Badge variant={value === 'active' ? 'success' : 'secondary'}>
              {value === 'active' ? 'Active' : 'Inactive'}
            </Badge>
          </div>
        );
      }
    },
    {
      header: 'Salary',
      accessor: 'salary',
      sortable: true,
      cell: (value: number, row: EditableUser) => {
        if (editingCell?.rowId === row.id && editingCell?.field === 'salary') {
          return (
            <div className="flex items-center gap-2">
              <Input
                type="number"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className="min-w-0"
                autoFocus
              />
              <Button size="sm" onClick={handleSave}>
                ✓
              </Button>
              <Button size="sm" variant="ghost" onClick={handleCancel}>
                ✗
              </Button>
            </div>
          );
        }
        return (
          <div 
            className="cursor-pointer hover:bg-gray-50 p-1 rounded"
            onClick={() => handleEdit(row.id, 'salary', value)}
          >
            <span className="font-mono text-green-600">
              ${value.toLocaleString()}
            </span>
          </div>
        );
      }
    },
    {
      header: 'Actions',
      accessor: 'id',
      cell: (value: number, row: EditableUser) => (
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="destructive"
            onClick={() => handleDeleteUser(value)}
            disabled={isLoading}
          >
            Delete
          </Button>
        </div>
      )
    }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader
        title="Editable DataTable"
        description="Create editable data tables with inline editing capabilities for various field types"
      />

      <div className="space-y-8">

        {apiMessage && (
          <Alert variant={apiMessage.type} className="mb-6">
            {apiMessage.text}
          </Alert>
        )}

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Interactive Editing Example
          </h2>
          <p className="text-gray-600 mb-4">
            Click on any cell in the table below to edit its value. Different field types use appropriate input controls.
          </p>
          
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
            <h3 className="text-lg font-medium text-gray-900 mb-3">Basic Setup</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`import { DataTable, Input, Select, Button } from '@/components/client-components';

interface EditableUser {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

function EditableDataTable() {
  const [users, setUsers] = useState<EditableUser[]>([...]);
  const [editingCell, setEditingCell] = useState<{rowId: number, field: string} | null>(null);
  const [tempValue, setTempValue] = useState('');

  const handleEdit = (rowId: number, field: string, currentValue: any) => {
    setEditingCell({ rowId, field });
    setTempValue(String(currentValue));
  };

  const handleSave = () => {
    if (!editingCell) return;
    
    setUsers(prev => prev.map(user => {
      if (user.id === editingCell.rowId) {
        return { ...user, [editingCell.field]: tempValue };
      }
      return user;
    }));
    
    setEditingCell(null);
  };

  return (
    <DataTable
      data={users}
      columns={columns}
      enablePagination={true}
      defaultPageSize={10}
    />
  );
}`}</code>
            </pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Inline Editing</h3>
              <p className="text-gray-600 mb-3">
                Click on any cell to edit its value directly within the table.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Text inputs for string fields</li>
                <li>• Number inputs for numeric fields</li>
                <li>• Dropdowns for predefined options</li>
                <li>• Email validation for email fields</li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Save & Cancel</h3>
              <p className="text-gray-600 mb-3">
                Save changes with the checkmark button or cancel with the X button.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Keyboard shortcuts (Enter to save, Escape to cancel)</li>
                <li>• Visual feedback for unsaved changes</li>
                <li>• Validation before saving</li>
                <li>• Optimistic updates for better UX</li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Field Types</h3>
              <p className="text-gray-600 mb-3">
                Support for different input types based on data type.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Text inputs with validation</li>
                <li>• Select dropdowns for enums</li>
                <li>• Number inputs with constraints</li>
                <li>• Date pickers for dates</li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">State Management</h3>
              <p className="text-gray-600 mb-3">
                Efficient state management for editing operations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Track editing state per cell</li>
                <li>• Temporary values during editing</li>
                <li>• Batch updates for multiple changes</li>
                <li>• Undo/redo functionality</li>
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
              <li><strong>Validation:</strong> Always validate data before saving to prevent invalid states.</li>
              <li><strong>Feedback:</strong> Provide clear visual feedback when cells are being edited.</li>
              <li><strong>Accessibility:</strong> Ensure keyboard navigation works properly for editing.</li>
              <li><strong>Performance:</strong> Use React.memo for complex cell renderers to prevent unnecessary re-renders.</li>
              <li><strong>UX:</strong> Consider auto-save functionality for better user experience.</li>
              <li><strong>Error Handling:</strong> Display validation errors clearly and allow users to correct them.</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  )
}
