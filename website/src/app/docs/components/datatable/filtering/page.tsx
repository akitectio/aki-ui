'use client'

import React, { useState, useMemo } from 'react'
import { DataTable, Card, Badge, Button, Input, Select } from '@/components/client-components'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

export default function DataTableFilteringPage() {
  // Employee data for filtering demo
  const generateEmployeeData = () => {
    const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations', 'Legal', 'Design']
    const statuses = ['Active', 'Inactive', 'On Leave', 'Probation', 'Remote']
    const levels = ['Junior', 'Mid-level', 'Senior', 'Lead', 'Principal', 'Director']
    const skills = ['React', 'Node.js', 'Python', 'Java', 'Design', 'Analytics', 'Sales', 'Management', 'DevOps', 'AI/ML']
    const firstNames = ['John', 'Jane', 'Mike', 'Sarah', 'Tom', 'Lisa', 'David', 'Emma', 'Chris', 'Amy', 'Robert', 'Maria', 'James', 'Jessica', 'Michael', 'Ashley', 'William', 'Amanda', 'Daniel', 'Stephanie']
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White', 'Lopez']
    const cities = ['New York', 'San Francisco', 'Los Angeles', 'Chicago', 'Austin', 'Seattle', 'Boston', 'Denver', 'Miami', 'Portland']
    
    return Array.from({ length: 80 }, (_, i) => ({
      id: i + 1,
      name: `${firstNames[i % firstNames.length]} ${lastNames[(i + 5) % lastNames.length]}`,
      email: `${firstNames[i % firstNames.length].toLowerCase()}.${lastNames[(i + 5) % lastNames.length].toLowerCase()}@company.com`,
      department: departments[i % departments.length],
      status: statuses[i % statuses.length],
      experienceLevel: levels[i % levels.length],
      salary: 40000 + (i * 2000) + ((i * 7) % 30000),
      joinDate: new Date(2018 + (i % 6), (i * 2) % 12, ((i * 3) % 28) + 1).toISOString().split('T')[0],
      skills: skills.slice(0, (i % 5) + 1),
      location: cities[i % cities.length],
      manager: i > 10 ? `${firstNames[(i + 3) % firstNames.length]} ${lastNames[(i + 8) % lastNames.length]}` : null,
      performance: ['Excellent', 'Good', 'Average', 'Needs Improvement'][i % 4],
      projects: Math.floor((i * 3) % 12) + 1,
      remote: i % 4 === 0,
      certifications: (i % 3) + 1
    }))
  }

  // Product data for advanced filtering
  const generateProductData = () => {
    const categories = ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports', 'Toys', 'Beauty', 'Automotive']
    const brands = ['Apple', 'Samsung', 'Nike', 'Adidas', 'Sony', 'Microsoft', 'Google', 'Amazon', 'Dell', 'HP']
    const statuses = ['Active', 'Discontinued', 'Coming Soon', 'Out of Stock', 'Limited Edition']
    const conditions = ['New', 'Refurbished', 'Used', 'Open Box']
    
    return Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      name: `Product ${i + 1}`,
      category: categories[i % categories.length],
      brand: brands[i % brands.length],
      price: 19.99 + (i * 15.50) + ((i * 7) % 500),
      rating: 1 + ((i * 0.1) % 4),
      stock: (i * 3) % 150,
      status: statuses[i % statuses.length],
      condition: conditions[i % conditions.length],
      featured: i % 3 === 0,
      onSale: i % 5 === 0,
      launchDate: new Date(2020 + (i % 4), (i * 2) % 12, ((i * 3) % 28) + 1).toISOString().split('T')[0],
      description: `High-quality ${categories[i % categories.length].toLowerCase()} product with premium features`,
      sku: `SKU-${String(i + 1).padStart(4, '0')}`,
      weight: 0.1 + (i * 0.05) + ((i * 3) % 2),
      dimensions: `${10 + (i % 20)}x${8 + (i % 15)}x${3 + (i % 8)}`,
      warranty: (i % 3) + 1,
      tags: ['new', 'popular', 'sale', 'premium', 'eco-friendly'].slice(0, (i % 4) + 1)
    }))
  }

  const [employeeData] = useState(() => generateEmployeeData())
  const [productData] = useState(() => generateProductData())

  // Employee columns with filtering
  const employeeColumns = [
    {
      header: 'Employee',
      accessor: 'name',
      sortable: true,
      filterable: true,
      cell: (value: string, row: any) => (
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
            {value.charAt(0)}
          </div>
          <div>
            <div className="font-medium">{value}</div>
            <div className="text-xs text-gray-500">{row.email}</div>
          </div>
        </div>
      )
    },
    {
      header: 'Department',
      accessor: 'department',
      sortable: true,
      filterable: true,
      cell: (value: string) => (
        <Badge 
          variant={
            value === 'Engineering' ? 'primary' :
            value === 'Marketing' ? 'warning' :
            value === 'Sales' ? 'success' :
            value === 'HR' ? 'destructive' : 'secondary'
          }
        >
          {value}
        </Badge>
      )
    },
    {
      header: 'Status',
      accessor: 'status',
      sortable: true,
      filterable: true,
      cell: (value: string) => (
        <div className="flex items-center">
          <div className={`w-2 h-2 rounded-full mr-2 ${
            value === 'Active' ? 'bg-green-500' :
            value === 'Inactive' ? 'bg-red-500' :
            value === 'On Leave' ? 'bg-yellow-500' :
            value === 'Remote' ? 'bg-blue-500' : 'bg-orange-500'
          }`} />
          <span className={`text-sm ${
            value === 'Active' ? 'text-green-700' :
            value === 'Inactive' ? 'text-red-700' :
            value === 'On Leave' ? 'text-yellow-700' :
            value === 'Remote' ? 'text-blue-700' : 'text-orange-700'
          }`}>{value}</span>
        </div>
      )
    },
    {
      header: 'Experience',
      accessor: 'experienceLevel',
      sortable: true,
      filterable: true,
      cell: (value: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value === 'Principal' || value === 'Director' ? 'bg-purple-100 text-purple-800' :
          value === 'Lead' ? 'bg-blue-100 text-blue-800' :
          value === 'Senior' ? 'bg-green-100 text-green-800' :
          value === 'Mid-level' ? 'bg-yellow-100 text-yellow-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {value}
        </span>
      )
    },
    {
      header: 'Salary',
      accessor: 'salary',
      sortable: true,
      filterable: true,
      cell: (value: number) => (
        <span className="font-mono font-medium text-green-600">
          ${value.toLocaleString()}
        </span>
      )
    },
    {
      header: 'Location',
      accessor: 'location',
      sortable: true,
      filterable: true,
      cell: (value: string, row: any) => (
        <div className="flex items-center">
          <span>{value}</span>
          {row.remote && (
            <Badge variant="outline" className="ml-2 text-xs">
              Remote
            </Badge>
          )}
        </div>
      )
    },
    {
      header: 'Performance',
      accessor: 'performance',
      sortable: true,
      filterable: true,
      cell: (value: string) => (
        <Badge 
          variant={
            value === 'Excellent' ? 'success' :
            value === 'Good' ? 'primary' :
            value === 'Average' ? 'warning' : 'destructive'
          }
        >
          {value}
        </Badge>
      )
    }
  ]

  // Product columns with advanced filtering
  const productColumns = [
    {
      header: 'Product',
      accessor: 'name',
      sortable: true,
      filterable: true,
      cell: (value: string, row: any) => (
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold mr-3">
            {value.slice(-2)}
          </div>
          <div>
            <div className="font-medium">{value}</div>
            <div className="text-xs text-gray-500">{row.sku}</div>
            {row.featured && (
              <Badge variant="secondary" className="text-xs mt-1">Featured</Badge>
            )}
          </div>
        </div>
      )
    },
    {
      header: 'Category',
      accessor: 'category',
      sortable: true,
      filterable: true,
      cell: (value: string) => (
        <Badge variant="outline">{value}</Badge>
      )
    },
    {
      header: 'Brand',
      accessor: 'brand',
      sortable: true,
      filterable: true,
      cell: (value: string) => (
        <span className="font-medium text-blue-600">{value}</span>
      )
    },
    {
      header: 'Price',
      accessor: 'price',
      sortable: true,
      filterable: true,
      cell: (value: number, row: any) => (
        <div>
          <span className="font-bold">${value.toFixed(2)}</span>
          {row.onSale && (
            <Badge variant="destructive" className="ml-2 text-xs">Sale</Badge>
          )}
        </div>
      )
    },
    {
      header: 'Rating',
      accessor: 'rating',
      sortable: true,
      filterable: true,
      cell: (value: number) => (
        <div className="flex items-center">
          <div className="flex text-yellow-400">
            {`★`.repeat(Math.floor(value))}
            {`☆`.repeat(5 - Math.floor(value))}
          </div>
          <span className="ml-1 text-sm text-gray-600">
            {value.toFixed(1)}
          </span>
        </div>
      )
    },
    {
      header: 'Stock',
      accessor: 'stock',
      sortable: true,
      filterable: true,
      cell: (value: number) => (
        <Badge variant={value > 50 ? 'success' : value > 10 ? 'warning' : 'destructive'}>
          {value} units
        </Badge>
      )
    },
    {
      header: 'Status',
      accessor: 'status',
      sortable: true,
      filterable: true,
      cell: (value: string) => (
        <Badge 
          variant={
            value === 'Active' ? 'success' :
            value === 'Coming Soon' ? 'secondary' :
            value === 'Limited Edition' ? 'primary' : 'destructive'
          }
        >
          {value}
        </Badge>
      )
    }
  ]

  return (
    <PageHeader
      title="DataTable - Advanced Filtering"
      description="Comprehensive filtering capabilities with multiple filter types, custom filters, and real-time search functionality."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">🔍 Basic Column Filtering</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Each filterable column includes an input field for real-time filtering. 
                Type in any column filter to see instant results across the dataset.
              </p>
              
              <DataTable
                data={employeeData.slice(0, 20)}
                columns={employeeColumns}
                enablePagination={true}
                defaultPageSize={8}
                pageSizeOptions={[5, 8, 10, 15]}
                sortable={true}
                filterable={true}
                showFilters={true}
                enableGlobalSearch={true}
                globalSearchPlaceholder="Search employees, departments, skills..."
              />

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Basic Filtering Features:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• <strong>Global Search:</strong> Search across all filterable columns simultaneously</li>
                  <li>• <strong>Column Filters:</strong> Individual text inputs for each filterable column</li>
                  <li>• <strong>Real-time:</strong> Instant filtering as you type (debounced for performance)</li>
                  <li>• <strong>Case Insensitive:</strong> Search works regardless of text case</li>
                  <li>• <strong>Partial Matching:</strong> Finds results containing the search term</li>
                </ul>
              </div>

              <CodeBlock language="typescript">
{`// Basic column filtering configuration
const employeeColumns = [
  {
    header: 'Name',
    accessor: 'name',
    sortable: true,
    filterable: true, // Enable filtering for this column
    cell: (value, row) => (
      <div className="flex items-center">
        <div className="avatar">{value.charAt(0)}</div>
        <div>
          <div className="font-medium">{value}</div>
          <div className="text-xs text-gray-500">{row.email}</div>
        </div>
      </div>
    )
  },
  {
    header: 'Department',
    accessor: 'department',
    sortable: true,
    filterable: true // This column will also have a filter input
  }
]

<DataTable
  data={employees}
  columns={employeeColumns}
  enablePagination={true}
  sortable={true}
  filterable={true}          // Enable filtering globally
  showFilters={true}         // Show filter inputs
  enableGlobalSearch={true}  // Add global search bar
  globalSearchPlaceholder="Search all fields..."
/>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">🎛️ Advanced Filter Types</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                This demo showcases different filter types including select dropdowns, range filters, 
                boolean toggles, and multi-select options for comprehensive data filtering.
              </p>
              
              <DataTable
                data={productData}
                columns={productColumns}
                enablePagination={true}
                defaultPageSize={10}
                pageSizeOptions={[5, 10, 20, 50]}
                sortable={true}
                filterable={true}
                showFilters={true}
                enableGlobalSearch={true}
                globalSearchPlaceholder="Search products, categories, brands..."
                filterConfig={{
                  category: {
                    type: 'select',
                    options: [
                      { label: 'All Categories', value: '' },
                      { label: 'Electronics', value: 'Electronics' },
                      { label: 'Clothing', value: 'Clothing' },
                      { label: 'Books', value: 'Books' },
                      { label: 'Home & Garden', value: 'Home & Garden' },
                      { label: 'Sports', value: 'Sports' },
                      { label: 'Toys', value: 'Toys' },
                      { label: 'Beauty', value: 'Beauty' },
                      { label: 'Automotive', value: 'Automotive' }
                    ],
                    placeholder: 'Filter by category'
                  },
                  brand: {
                    type: 'select',
                    options: [
                      { label: 'All Brands', value: '' },
                      { label: 'Apple', value: 'Apple' },
                      { label: 'Samsung', value: 'Samsung' },
                      { label: 'Nike', value: 'Nike' },
                      { label: 'Adidas', value: 'Adidas' },
                      { label: 'Sony', value: 'Sony' },
                      { label: 'Microsoft', value: 'Microsoft' },
                      { label: 'Google', value: 'Google' },
                      { label: 'Amazon', value: 'Amazon' }
                    ],
                    placeholder: 'Filter by brand'
                  },
                  status: {
                    type: 'select',
                    options: [
                      { label: 'All Status', value: '' },
                      { label: 'Active', value: 'Active' },
                      { label: 'Discontinued', value: 'Discontinued' },
                      { label: 'Coming Soon', value: 'Coming Soon' },
                      { label: 'Out of Stock', value: 'Out of Stock' },
                      { label: 'Limited Edition', value: 'Limited Edition' }
                    ],
                    placeholder: 'Filter by status'
                  },
                  price: {
                    type: 'range',
                    min: 0,
                    max: 1000,
                    step: 10,
                    placeholder: 'Price range'
                  },
                  rating: {
                    type: 'range',
                    min: 1,
                    max: 5,
                    step: 0.1,
                    placeholder: 'Rating range'
                  }
                }}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">📋 Select Filters</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Dropdown selection</li>
                    <li>• Predefined options</li>
                    <li>• Single choice filtering</li>
                    <li>• Custom placeholders</li>
                  </ul>
                </div>
                
                <div className="p-4 border border-purple-200 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">📊 Range Filters</h4>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Numeric range selection</li>
                    <li>• Min/max boundaries</li>
                    <li>• Step increments</li>
                    <li>• Price/rating filtering</li>
                  </ul>
                </div>
                
                <div className="p-4 border border-orange-200 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">🔧 Multi-Type Support</h4>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• Text input filters</li>
                    <li>• Boolean toggles</li>
                    <li>• Date range pickers</li>
                    <li>• Custom filter components</li>
                  </ul>
                </div>
              </div>

              <CodeBlock language="typescript">
{`// Advanced filter configuration
<DataTable
  data={products}
  columns={productColumns}
  filterable={true}
  showFilters={true}
  filterConfig={{
    // Select dropdown filter
    category: {
      type: 'select',
      options: [
        { label: 'All Categories', value: '' },
        { label: 'Electronics', value: 'Electronics' },
        { label: 'Clothing', value: 'Clothing' }
      ],
      placeholder: 'Filter by category'
    },
    
    // Range filter for numeric values
    price: {
      type: 'range',
      min: 0,
      max: 1000,
      step: 10,
      placeholder: 'Price range',
      formatter: (value) => \`$\${value}\`
    },
    
    // Multi-select filter
    tags: {
      type: 'multiselect',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Popular', value: 'popular' },
        { label: 'Sale', value: 'sale' }
      ],
      placeholder: 'Select tags'
    },
    
    // Boolean filter
    featured: {
      type: 'boolean',
      trueLabel: 'Featured Only',
      falseLabel: 'All Products'
    },
    
    // Date range filter
    launchDate: {
      type: 'daterange',
      placeholder: 'Filter by launch date'
    }
  }}
  onFilterChange={(filters) => {
    console.log('Active filters:', filters)
    // Handle filter state changes
  }}
/>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">🎨 Custom Filter Components</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Create custom filter components for specialized filtering needs. 
                This example shows how to implement custom filters with complex logic.
              </p>
              
              <div className="bg-gray-50 border rounded-lg p-4">
                <h4 className="font-medium mb-3">Custom Filter Example: Salary Range with Performance</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Min Salary
                    </label>
                    <Input
                      type="number"
                      placeholder="e.g., 50000"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Max Salary
                    </label>
                    <Input
                      type="number"
                      placeholder="e.g., 100000"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Performance Level
                    </label>
                    <Select>
                      <option value="">All Levels</option>
                      <option value="Excellent">Excellent</option>
                      <option value="Good">Good</option>
                      <option value="Average">Average</option>
                      <option value="Needs Improvement">Needs Improvement</option>
                    </Select>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="primary">Apply Filters</Button>
                  <Button size="sm" variant="outline">Reset</Button>
                </div>
              </div>

              <DataTable
                data={employeeData}
                columns={employeeColumns}
                enablePagination={true}
                defaultPageSize={8}
                pageSizeOptions={[5, 8, 12, 20]}
                sortable={true}
                filterable={true}
                showFilters={true}
                enableGlobalSearch={true}
              />

              <CodeBlock language="typescript">
{`// Custom filter component implementation
import React, { useState } from 'react'

const CustomSalaryFilter = ({ onFilterChange }) => {
  const [minSalary, setMinSalary] = useState('')
  const [maxSalary, setMaxSalary] = useState('')
  const [performance, setPerformance] = useState('')
  
  const applyFilters = () => {
    const filters = {
      salary: {
        min: minSalary ? parseInt(minSalary) : undefined,
        max: maxSalary ? parseInt(maxSalary) : undefined
      },
      performance: performance || undefined
    }
    
    onFilterChange(filters)
  }
  
  const resetFilters = () => {
    setMinSalary('')
    setMaxSalary('')
    setPerformance('')
    onFilterChange({})
  }
  
  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <Input
          type="number"
          placeholder="Min Salary"
          value={minSalary}
          onChange={(e) => setMinSalary(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Max Salary"
          value={maxSalary}
          onChange={(e) => setMaxSalary(e.target.value)}
        />
        <Select
          value={performance}
          onChange={(e) => setPerformance(e.target.value)}
        >
          <option value="">All Performance Levels</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
        </Select>
      </div>
      
      <div className="flex gap-2">
        <Button onClick={applyFilters}>Apply</Button>
        <Button variant="outline" onClick={resetFilters}>Reset</Button>
      </div>
    </div>
  )
}

// Custom filter function
const customFilterFn = (data, filters) => {
  return data.filter(item => {
    // Salary range filter
    if (filters.salary) {
      if (filters.salary.min && item.salary < filters.salary.min) return false
      if (filters.salary.max && item.salary > filters.salary.max) return false
    }
    
    // Performance filter
    if (filters.performance && item.performance !== filters.performance) {
      return false
    }
    
    return true
  })
}

// Usage in DataTable
<DataTable
  data={employees}
  columns={columns}
  customFilter={<CustomSalaryFilter onFilterChange={handleFilterChange} />}
  customFilterFn={customFilterFn}
  filterable={true}
  showFilters={true}
/>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">⚡ Filter Performance & Best Practices</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Optimization Techniques</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-green-600">✅ Best Practices</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <div>
                        <strong>Debouncing:</strong> Implement 300ms debounce for text inputs to reduce API calls
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <div>
                        <strong>Memoization:</strong> Use React.memo and useMemo for filter components
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <div>
                        <strong>Indexed Filtering:</strong> Pre-index searchable fields for faster filtering
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <div>
                        <strong>Lazy Loading:</strong> Load filter options on demand for large datasets
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-red-600">❌ Common Pitfalls</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <div>
                        <strong>No Debouncing:</strong> Immediate API calls on every keystroke
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <div>
                        <strong>Heavy Filtering:</strong> Complex filter logic in render cycle
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <div>
                        <strong>No Caching:</strong> Re-filtering identical queries repeatedly
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <div>
                        <strong>Memory Leaks:</strong> Not cleaning up filter event listeners
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <CodeBlock language="typescript">
{`// Optimized filtering implementation
import { useMemo, useCallback, useState, useEffect } from 'react'
import { debounce } from 'lodash'

const useOptimizedFiltering = (data, columns) => {
  const [filters, setFilters] = useState({})
  const [debouncedFilters, setDebouncedFilters] = useState({})
  
  // Debounce filter changes
  const debouncedSetFilters = useCallback(
    debounce((newFilters) => {
      setDebouncedFilters(newFilters)
    }, 300),
    []
  )
  
  useEffect(() => {
    debouncedSetFilters(filters)
  }, [filters, debouncedSetFilters])
  
  // Memoized filtered data
  const filteredData = useMemo(() => {
    if (Object.keys(debouncedFilters).length === 0) {
      return data
    }
    
    return data.filter(item => {
      return Object.entries(debouncedFilters).every(([key, value]) => {
        if (!value || value === '') return true
        
        const itemValue = item[key]
        
        // Handle different filter types
        if (typeof value === 'object' && value.type === 'range') {
          const numValue = Number(itemValue)
          return numValue >= value.min && numValue <= value.max
        }
        
        if (Array.isArray(value)) {
          return value.includes(itemValue)
        }
        
        return String(itemValue)
          .toLowerCase()
          .includes(String(value).toLowerCase())
      })
    })
  }, [data, debouncedFilters])
  
  // Memoized filter options
  const filterOptions = useMemo(() => {
    const options = {}
    
    columns.forEach(column => {
      if (column.filterable) {
        const uniqueValues = [...new Set(
          data.map(item => item[column.accessor])
        )].filter(Boolean)
        
        options[column.accessor] = uniqueValues.map(value => ({
          label: String(value),
          value: value
        }))
      }
    })
    
    return options
  }, [data, columns])
  
  return {
    filteredData,
    filters,
    setFilters,
    filterOptions,
    isFiltering: Object.keys(debouncedFilters).length > 0
  }
}

// Usage in component
const DataTableWithOptimizedFiltering = ({ data, columns }) => {
  const {
    filteredData,
    filters,
    setFilters,
    filterOptions,
    isFiltering
  } = useOptimizedFiltering(data, columns)
  
  return (
    <div>
      {isFiltering && (
        <div className="mb-4 p-2 bg-blue-50 rounded">
          Showing {filteredData.length} of {data.length} results
        </div>
      )}
      
      <DataTable
        data={filteredData}
        columns={columns}
        filters={filters}
        onFilterChange={setFilters}
        filterOptions={filterOptions}
      />
    </div>
  )
}`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">📋 Filter Props Reference</h2>
          <Card className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prop
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Default
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 font-mono">
                      filterable
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 font-mono">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Enable filtering functionality globally
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 font-mono">
                      showFilters
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 font-mono">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Show filter inputs in column headers
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 font-mono">
                      enableGlobalSearch
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 font-mono">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Enable global search across all columns
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 font-mono">
                      filterConfig
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 font-mono">
                      object
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Configuration for custom filter types per column
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 font-mono">
                      onFilterChange
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 font-mono">
                      function
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      undefined
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Callback when filter values change
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 font-mono">
                      customFilterFn
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 font-mono">
                      function
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      undefined
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Custom function for filtering logic
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>
      </div>
    </PageHeader>
  )
}
