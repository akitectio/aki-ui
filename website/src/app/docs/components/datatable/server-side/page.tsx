'use client'

import React, { useState, useCallback, useEffect } from 'react'
import { DataTable, Card, Badge, Button } from '@/components/client-components'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

// Mock API functions
const mockApi = {
  // Simulate API delay
  delay: (ms: number) => new Promise(resolve => setTimeout(resolve, ms)),

  // Mock user data (deterministic to avoid hydration issues)
  generateUsers: (count: number = 1000) => {
    const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Legal', 'Operations']
    const roles = ['Admin', 'Manager', 'Developer', 'Designer', 'Analyst', 'Coordinator', 'Specialist']
    const statuses = ['Active', 'Inactive', 'Pending', 'Suspended']
    const locations = ['New York, NY', 'San Francisco, CA', 'Los Angeles, CA', 'Chicago, IL', 'Austin, TX', 'Seattle, WA', 'Boston, MA']
    
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: `${['John', 'Jane', 'Mike', 'Sarah', 'Tom', 'Lisa', 'David', 'Emma', 'Chris', 'Amy'][i % 10]} ${['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'][i % 10]}`,
      email: `user${i + 1}@company.com`,
      phone: `+1 (${(i % 900) + 100}) ${((i * 7) % 900) + 100}-${((i * 13) % 9000) + 1000}`, // Deterministic phone numbers
      role: roles[i % roles.length],
      department: departments[i % departments.length],
      status: statuses[i % statuses.length],
      salary: 45000 + (i * 500) + ((i * 11) % 20000), // Deterministic salary
      joinDate: new Date(2020 + Math.floor(i / 250), (i * 3) % 12, ((i * 5) % 28) + 1).toISOString().split('T')[0], // Deterministic dates
      location: locations[i % locations.length],
      avatar: `https://i.pravatar.cc/40?img=${(i % 70) + 1}`,
    }))
  },

  // Mock API endpoint for fetching users
  fetchUsers: async (params: {
    page: number
    pageSize: number
    search?: string
    sortBy?: string
    sortOrder?: 'asc' | 'desc'
    filters?: Record<string, any>
  }) => {
    await mockApi.delay(Math.random() * 800 + 200) // 200-1000ms delay

    const allUsers = mockApi.generateUsers()
    let filteredUsers = [...allUsers]

    // Apply search
    if (params.search) {
      const searchLower = params.search.toLowerCase()
      filteredUsers = filteredUsers.filter(user => 
        user.name.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower) ||
        user.role.toLowerCase().includes(searchLower) ||
        user.department.toLowerCase().includes(searchLower)
      )
    }

    // Apply filters
    if (params.filters) {
      Object.entries(params.filters).forEach(([key, value]) => {
        if (value && value !== 'all') {
          filteredUsers = filteredUsers.filter(user => {
            const userValue = user[key as keyof typeof user]
            return String(userValue).toLowerCase().includes(String(value).toLowerCase())
          })
        }
      })
    }

    // Apply sorting
    if (params.sortBy) {
      filteredUsers.sort((a, b) => {
        const aValue = a[params.sortBy as keyof typeof a]
        const bValue = b[params.sortBy as keyof typeof b]
        
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          const result = aValue.localeCompare(bValue)
          return params.sortOrder === 'desc' ? -result : result
        }
        
        if (typeof aValue === 'number' && typeof bValue === 'number') {
          const result = aValue - bValue
          return params.sortOrder === 'desc' ? -result : result
        }
        
        return 0
      })
    }

    // Apply pagination
    const startIndex = (params.page - 1) * params.pageSize
    const endIndex = startIndex + params.pageSize
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex)

    return {
      data: paginatedUsers,
      total: filteredUsers.length,
      page: params.page,
      pageSize: params.pageSize,
      totalPages: Math.ceil(filteredUsers.length / params.pageSize)
    }
  }
}

export default function DataTableServerSidePage() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any[]>([])
  const [total, setTotal] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState<Record<string, any>>({})
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null)

  // Real API data from JSONPlaceholder
  const [realApiData, setRealApiData] = useState<any[]>([])
  const [realApiLoading, setRealApiLoading] = useState(false)
  const [realApiMounted, setRealApiMounted] = useState(false)

  // GitHub API data
  const [githubRepos, setGithubRepos] = useState<any[]>([])
  const [githubLoading, setGithubLoading] = useState(false)
  const [githubMounted, setGithubMounted] = useState(false)

  // Ensure API data fetching only happens on the client side
  useEffect(() => {
    setRealApiMounted(true)
  }, [])

  useEffect(() => {
    setGithubMounted(true)
  }, [])

  // Fetch real data from JSONPlaceholder API (client-side only)
  const fetchRealApiData = useCallback(async () => {
    if (!realApiMounted) return
    
    setRealApiLoading(true)
    try {
      const [usersResponse, postsResponse] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users'),
        fetch('https://jsonplaceholder.typicode.com/posts')
      ])
      
      const users = await usersResponse.json()
      const posts = await postsResponse.json()
      
      // Combine users with their post count
      const enrichedUsers = users.map((user: any) => {
        const userPosts = posts.filter((post: any) => post.userId === user.id)
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          website: user.website,
          company: user.company.name,
          address: `${user.address.city}, ${user.address.zipcode}`,
          posts: userPosts.length,
          status: user.id % 3 === 0 ? 'Inactive' : 'Active',
          role: user.id <= 3 ? 'Admin' : user.id <= 6 ? 'Manager' : 'User'
        }
      })
      
      setRealApiData(enrichedUsers)
    } catch (error) {
      console.error('Error fetching real API data:', error)
    } finally {
      setRealApiLoading(false)
    }
  }, [realApiMounted])

  // Load real API data on mount (client-side only)
  useEffect(() => {
    if (realApiMounted) {
      fetchRealApiData()
    }
  }, [realApiMounted, fetchRealApiData])

  // Fetch GitHub repositories (client-side only)
  const fetchGithubRepos = useCallback(async () => {
    if (!githubMounted) return
    
    setGithubLoading(true)
    try {
      // Fetch popular React repositories
      const response = await fetch('https://api.github.com/search/repositories?q=react+stars:>10000&sort=stars&order=desc&per_page=20')
      const data = await response.json()
      
      const repos = data.items.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        fullName: repo.full_name,
        description: repo.description || 'No description',
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language || 'Unknown',
        updatedAt: new Date(repo.updated_at).toLocaleDateString(),
        size: repo.size,
        openIssues: repo.open_issues_count,
        license: repo.license?.name || 'No license'
      }))
      
      setGithubRepos(repos)
    } catch (error) {
      console.error('Error fetching GitHub data:', error)
    } finally {
      setGithubLoading(false)
    }
  }, [githubMounted])

  // Load GitHub data on mount (client-side only)
  useEffect(() => {
    if (githubMounted) {
      fetchGithubRepos()
    }
  }, [githubMounted, fetchGithubRepos])

  // Generate fake server-side data (deterministic to avoid hydration issues)
  const generateServerData = () => {
    const names = ['John Smith', 'Jane Doe', 'Mike Johnson', 'Sarah Wilson', 'Tom Brown', 'Lisa Garcia', 'David Miller', 'Emma Davis', 'Chris Rodriguez', 'Amy Martinez', 'Robert Lopez', 'Maria Gonzalez', 'James Anderson', 'Jessica Taylor', 'Michael Thomas']
    const roles = ['Admin', 'Manager', 'Senior Developer', 'Developer', 'Designer', 'Editor', 'Analyst']
    const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations']
    const statuses = ['Active', 'Inactive', 'Pending']
    
    return Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      name: names[i % names.length],
      email: `${names[i % names.length].toLowerCase().replace(' ', '.')}${i + 1}@company.com`,
      role: roles[i % roles.length],
      status: statuses[i % statuses.length],
      department: departments[i % departments.length],
      salary: 45000 + (i * 500) + ((i * 7) % 15000), // Deterministic instead of Math.random()
      joinDate: new Date(2020 + Math.floor(i / 25), (i * 3) % 12, ((i * 5) % 28) + 1).toISOString().split('T')[0], // Deterministic dates
    }))
  }

  const [serverData] = useState(() => generateServerData())

  // Fetch data from mock API
  const fetchData = useCallback(async (params?: Partial<{
    page: number
    pageSize: number
    search: string
    sortBy: string
    sortOrder: 'asc' | 'desc'
    filters: Record<string, any>
  }>) => {
    setLoading(true)
    try {
      const result = await mockApi.fetchUsers({
        page: params?.page || currentPage,
        pageSize: params?.pageSize || pageSize,
        search: params?.search || searchQuery,
        sortBy: params?.sortBy || sortConfig?.key,
        sortOrder: params?.sortOrder || sortConfig?.direction,
        filters: params?.filters || filters
      })
      
      setData(result.data)
      setTotal(result.total)
      setCurrentPage(result.page)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }, [currentPage, pageSize, searchQuery, sortConfig, filters])

  // Load initial data
  useEffect(() => {
    fetchData()
  }, [])

  const serverColumns = [
    {
      header: 'ID',
      accessor: 'id',
      sortable: true,
      width: '80px'
    },
    {
      header: 'Name',
      accessor: 'name',
      sortable: true,
      filterable: true,
      cell: (value: string, row: any) => (
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
            {value.charAt(0)}
          </div>
          <span className="font-medium">{value}</span>
        </div>
      )
    },
    {
      header: 'Email',
      accessor: 'email',
      sortable: true,
      filterable: true
    },
    {
      header: 'Role',
      accessor: 'role',
      sortable: true,
      filterable: true,
      cell: (value: string) => (
        <Badge 
          variant={
            value === 'Admin' ? 'primary' :
            value === 'Manager' ? 'warning' :
            value === 'Editor' ? 'success' : 'secondary'
          }
        >
          {value}
        </Badge>
      )
    },
    {
      header: 'Department',
      accessor: 'department',
      sortable: true,
      filterable: true
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
            value === 'Inactive' ? 'bg-red-500' : 'bg-yellow-500'
          }`} />
          <span>{value}</span>
        </div>
      )
    },
    {
      header: 'Salary',
      accessor: 'salary',
      sortable: true,
      cell: (value: number) => (
        <span className="font-mono">${value.toLocaleString()}</span>
      )
    }
  ]

  // Columns for real API data
  const realApiColumns = [
    {
      header: 'ID',
      accessor: 'id',
      sortable: true,
      width: '60px'
    },
    {
      header: 'Name',
      accessor: 'name',
      sortable: true,
      filterable: true,
      cell: (value: string) => (
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
            {value.charAt(0)}
          </div>
          <span className="font-medium">{value}</span>
        </div>
      )
    },
    {
      header: 'Email',
      accessor: 'email',
      sortable: true,
      filterable: true,
      cell: (value: string) => (
        <span className="text-blue-600 text-sm">{value}</span>
      )
    },
    {
      header: 'Phone',
      accessor: 'phone',
      sortable: true,
      cell: (value: string) => (
        <span className="text-sm text-gray-600">{value}</span>
      )
    },
    {
      header: 'Company',
      accessor: 'company',
      sortable: true,
      filterable: true,
      cell: (value: string) => (
        <span className="font-medium text-purple-600">{value}</span>
      )
    },
    {
      header: 'Posts',
      accessor: 'posts',
      sortable: true,
      cell: (value: number) => (
        <Badge variant={value > 5 ? 'success' : 'secondary'}>
          {value} posts
        </Badge>
      )
    },
    {
      header: 'Role',
      accessor: 'role',
      sortable: true,
      filterable: true,
      cell: (value: string) => (
        <Badge 
          variant={
            value === 'Admin' ? 'destructive' :
            value === 'Manager' ? 'warning' : 'secondary'
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
            value === 'Active' ? 'bg-green-500' : 'bg-red-500'
          }`} />
          <span>{value}</span>
        </div>
      )
    }
  ]

  // Columns for GitHub repositories
  const githubColumns = [
    {
      header: 'Repository',
      accessor: 'name',
      sortable: true,
      filterable: true,
      cell: (value: string, row: any) => (
        <div>
          <div className="font-medium text-blue-600">{value}</div>
          <div className="text-xs text-gray-500">{row.fullName}</div>
        </div>
      )
    },
    {
      header: 'Description',
      accessor: 'description',
      cell: (value: string) => (
        <div className="max-w-xs truncate text-sm text-gray-600" title={value}>
          {value}
        </div>
      )
    },
    {
      header: 'Language',
      accessor: 'language',
      sortable: true,
      filterable: true,
      cell: (value: string) => (
        <Badge 
          variant={
            value === 'JavaScript' ? 'warning' :
            value === 'TypeScript' ? 'primary' :
            value === 'Python' ? 'success' : 'secondary'
          }
        >
          {value}
        </Badge>
      )
    },
    {
      header: '⭐ Stars',
      accessor: 'stars',
      sortable: true,
      cell: (value: number) => (
        <span className="font-bold text-yellow-600">
          {value.toLocaleString()}
        </span>
      )
    },
    {
      header: '🍴 Forks',
      accessor: 'forks',
      sortable: true,
      cell: (value: number) => (
        <span className="text-green-600">
          {value.toLocaleString()}
        </span>
      )
    },
    {
      header: '🐛 Issues',
      accessor: 'openIssues',
      sortable: true,
      cell: (value: number) => (
        <Badge variant={value > 100 ? 'destructive' : value > 50 ? 'warning' : 'success'}>
          {value}
        </Badge>
      )
    },
    {
      header: 'Updated',
      accessor: 'updatedAt',
      sortable: true,
      cell: (value: string) => (
        <span className="text-sm text-gray-600">{value}</span>
      )
    }
  ]

  return (
    <PageHeader
      title="DataTable - Server Side"
      description="Server-side data processing with remote sorting, filtering, and pagination for handling large datasets efficiently."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">🌐 Real API Demo (JSONPlaceholder)</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  This demo fetches real data from <code className="bg-gray-100 px-1 rounded">jsonplaceholder.typicode.com</code> - 
                  a free fake REST API. Data includes users and their post counts.
                </p>
                <Button 
                  onClick={fetchRealApiData} 
                  disabled={realApiLoading}
                  size="sm"
                >
                  {realApiLoading ? 'Loading...' : 'Refresh API Data'}
                </Button>
              </div>
              
              {realApiMounted ? (
                <DataTable
                  data={realApiData}
                  columns={realApiColumns}
                  enablePagination={true}
                  defaultPageSize={5}
                  pageSizeOptions={[5, 10]}
                  sortable={true}
                  filterable={true}
                  showFilters={true}
                  loading={realApiLoading}
                  noDataText="Loading real API data..."
                />
              ) : (
                <div className="flex justify-center py-8">
                  <div className="text-gray-500">Loading...</div>
                </div>
              )}
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">API Endpoints Used:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• <code className="bg-blue-100 px-1 rounded">GET https://jsonplaceholder.typicode.com/users</code></li>
                  <li>• <code className="bg-blue-100 px-1 rounded">GET https://jsonplaceholder.typicode.com/posts</code></li>
                  <li>• Data is combined to show user info with post counts</li>
                </ul>
              </div>

              <CodeBlock language="typescript">
{`  // Ensure API data fetching only happens on the client side
  useEffect(() => {
    setRealApiMounted(true)
  }, [])

  useEffect(() => {
    setGithubMounted(true)
  }, [])example
const fetchRealApiData = async () => {
  try {
    const [usersResponse, postsResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://jsonplaceholder.typicode.com/posts')
    ])
    
    const users = await usersResponse.json()
    const posts = await postsResponse.json()
    
    // Combine users with their post count
    const enrichedUsers = users.map(user => {
      const userPosts = posts.filter(post => post.userId === user.id)
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        company: user.company.name,
        posts: userPosts.length,
        status: user.id % 3 === 0 ? 'Inactive' : 'Active'
      }
    })
    
    return enrichedUsers
  } catch (error) {
    console.error('API Error:', error)
    return []
  }
}

<DataTable
  data={realApiData}
  columns={realApiColumns}
  enablePagination={true}
  sortable={true}
  filterable={true}
/>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">🐙 GitHub API Demo</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  This demo fetches popular React repositories from GitHub API. 
                  Shows real-time repository data with stars, forks, and issues.
                </p>
                <Button 
                  onClick={fetchGithubRepos} 
                  disabled={githubLoading}
                  size="sm"
                >
                  {githubLoading ? 'Loading...' : 'Refresh GitHub Data'}
                </Button>
              </div>
              
              {githubMounted ? (
                <DataTable
                  data={githubRepos}
                  columns={githubColumns}
                  enablePagination={true}
                  defaultPageSize={8}
                  pageSizeOptions={[5, 8, 10]}
                  sortable={true}
                  filterable={true}
                  showFilters={true}
                  loading={githubLoading}
                  noDataText="Loading GitHub repositories..."
                />
              ) : (
                <div className="flex justify-center py-8">
                  <div className="text-gray-500">Loading...</div>
                </div>
              )}
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-medium text-purple-900 mb-2">GitHub API Features:</h4>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• <code className="bg-purple-100 px-1 rounded">GET https://api.github.com/search/repositories</code></li>
                  <li>• Search for React repositories with 10K+ stars</li>
                  <li>• Rate limit: 60 requests/hour (unauthenticated)</li>
                  <li>• Real-time repository metrics and metadata</li>
                </ul>
              </div>

              <CodeBlock language="typescript">
{`// GitHub API integration example
const fetchGithubRepos = async () => {
  try {
    const response = await fetch(
      'https://api.github.com/search/repositories?q=react+stars:>10000&sort=stars&order=desc&per_page=20'
    )
    
    if (!response.ok) {
      throw new Error(\`GitHub API error: \${response.status}\`)
    }
    
    const data = await response.json()
    
    const repos = data.items.map(repo => ({
      id: repo.id,
      name: repo.name,
      fullName: repo.full_name,
      description: repo.description || 'No description',
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language || 'Unknown',
      updatedAt: new Date(repo.updated_at).toLocaleDateString(),
      openIssues: repo.open_issues_count
    }))
    
    return repos
  } catch (error) {
    console.error('GitHub API Error:', error)
    return []
  }
}

// For authenticated requests (higher rate limits)
const fetchWithAuth = async (url: string) => {
  return fetch(url, {
    headers: {
      'Authorization': \`token \${process.env.GITHUB_TOKEN}\`,
      'Accept': 'application/vnd.github.v3+json'
    }
  })
}`}
              </CodeBlock>
            </div>
          </Card>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Client-Side Demo (With Server-Like Data)</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                This demo shows a DataTable with fake server data (100 records) processed client-side for demonstration.
                You can sort, filter, and paginate through the data.
              </p>
              
              <DataTable
                data={serverData} // Use fake data directly
                columns={serverColumns}
                enablePagination={true}
                defaultPageSize={10}
                pageSizeOptions={[5, 10, 25, 50]}
                sortable={true}
                filterable={true}
                showFilters={true}
                loading={loading}
                noDataText="No data found. Try adjusting your filters."
              />
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">API Integration Example</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Complete Server-Side Setup</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">1. API Endpoint</h4>
                  <CodeBlock language="typescript">
{`// pages/api/users.ts or app/api/users/route.ts
export async function POST(request: Request) {
  const { page, pageSize, filters, sorts } = await request.json()
  
  // Build database query
  let query = db.users.findMany({
    skip: page * pageSize,
    take: pageSize,
    where: {
      // Apply filters
      AND: filters.map(filter => ({
        [filter.id]: {
          contains: filter.value,
          mode: 'insensitive'
        }
      }))
    },
    orderBy: sorts.map(sort => ({
      [sort.id]: sort.direction
    }))
  })
  
  const [users, totalCount] = await Promise.all([
    query,
    db.users.count({ where: /* same filters */ })
  ])
  
  return Response.json({
    data: users,
    totalCount
  })
}`}
                  </CodeBlock>
                </div>

                <div>
                  <h4 className="font-medium mb-2">2. React Hook for Data Fetching</h4>
                  <CodeBlock language="typescript">
{`import { useCallback, useState } from 'react'

export function useServerData() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const fetchData = useCallback(async (params) => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
      })
      
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      
      const result = await response.json()
      setLoading(false)
      
      return result
    } catch (err) {
      setError(err.message)
      setLoading(false)
      throw err
    }
  }, [])
  
  return { fetchData, loading, error }
}`}
                  </CodeBlock>
                </div>

                <div>
                  <h4 className="font-medium mb-2">3. Component Usage</h4>
                  <CodeBlock language="typescript">
{`function UsersTable() {
  const { fetchData, loading, error } = useServerData()
  
  const handleFetch = useCallback(async (params) => {
    try {
      return await fetchData(params)
    } catch (error) {
      console.error('Error fetching users:', error)
      return { data: [], totalCount: 0 }
    }
  }, [fetchData])
  
  if (error) {
    return <div className="text-red-600">Error: {error}</div>
  }
  
  return (
    <DataTable
      data={[]}
      columns={columns}
      onFetch={handleFetch}
      loading={loading}
      enablePagination={true}
      showFilters={true}
      defaultPageSize={20}
    />
  )
}`}
                  </CodeBlock>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Performance Optimization</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Best Practices</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">🚀 Debouncing</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    The DataTable automatically debounces filter inputs (300ms) and fetch requests (200ms) to prevent excessive API calls.
                  </p>
                </div>
                
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">📊 Database Indexing</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Ensure database indexes on sortable and filterable columns for optimal query performance.
                  </p>
                </div>
                
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">🔄 Caching</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Implement server-side caching for frequently accessed data and consider using React Query for client-side caching.
                  </p>
                </div>
                
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">📝 Error Handling</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Implement proper error handling with retry mechanisms and user-friendly error messages.
                  </p>
                </div>
              </div>
              
              <CodeBlock language="typescript">
{`// Advanced error handling and caching
import { useQuery } from '@tanstack/react-query'

function useServerDataWithCache() {
  const [params, setParams] = useState({
    paginationState: { pageIndex: 0, pageSize: 10 },
    filters: [],
    sorts: []
  })
  
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['users', params],
    queryFn: () => fetchUsers(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000)
  })
  
  const handleFetch = useCallback(async (newParams) => {
    setParams(newParams)
    return data || { data: [], totalCount: 0 }
  }, [data])
  
  return {
    handleFetch,
    loading: isLoading,
    error,
    refetch
  }
}`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Server-Side Props</h2>
          <Card className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Prop
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white font-mono">
                      onFetch
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 font-mono">
                      {`(params) => Promise<{data, totalCount}>`}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                      Function to fetch data from server with pagination, filters, and sorts
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white font-mono">
                      data
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 font-mono">
                      T[]
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                      Should be empty array [] when using server-side mode
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white font-mono">
                      loading
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 font-mono">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                      Show loading overlay during data fetch
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
