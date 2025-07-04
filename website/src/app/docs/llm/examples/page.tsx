'use client'

import { useState } from 'react'
import { Button, Card, Badge, Alert, Tabs, Tab } from '@akitectio/aki-ui'
import { PageHeader } from '@/components/PageHeader'
import {
  SparklesIcon,
  CommandLineIcon,
  CodeBracketIcon,
  ClipboardDocumentIcon,
  LightBulbIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const CodeBlock = ({ children, language = 'tsx' }: { children: string; language?: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative bg-gray-900 dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg">
        <div className="flex items-center justify-between px-4 py-3 bg-gray-800 dark:bg-gray-900 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm text-gray-400 ml-4">{language}</span>
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={handleCopy}
            className={`text-xs transition-all duration-200 ${copied
              ? 'text-green-400 bg-green-500/10'
              : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
          >
            {copied ? (
              <>
                <CheckCircleIcon className="w-4 h-4 mr-1" />
                Copied!
              </>
            ) : (
              <>
                <ClipboardDocumentIcon className="w-4 h-4 mr-1" />
                Copy
              </>
            )}
          </Button>
        </div>
        <pre className="text-gray-100 p-6 overflow-x-auto text-sm leading-relaxed">
          <code className="language-tsx">{children}</code>
        </pre>
      </div>
    </div>
  )
}

const examples = [
  {
    id: 'dashboard',
    title: 'Dashboard Creation',
    description: 'Generate a complete admin dashboard with charts, tables, and cards',
    category: 'Layout',
    difficulty: 'Intermediate',
    prompt: `Using Aki UI documentation at https://aki-ui.akitect.io/llms.txt, create a modern admin dashboard with the following requirements:

- Responsive grid layout with 4 stat cards at the top
- Data table showing user analytics
- Chart section with placeholder for analytics
- Sidebar navigation with menu items
- Dark mode support
- TypeScript implementation

Include proper imports and make it production-ready.`,
    expectedResult: `import { Card, Grid, Button, DataTable, Badge } from '@akitectio/aki-ui'

function AdminDashboard() {
  const stats = [
    { label: 'Total Users', value: '12,345', change: '+12%' },
    { label: 'Revenue', value: '$45,678', change: '+8%' },
    { label: 'Orders', value: '1,234', change: '+23%' },
    { label: 'Conversion', value: '3.2%', change: '+0.5%' }
  ]

  return (
    <div className="p-6 space-y-6">
      <Grid cols={{ base: 1, md: 2, lg: 4 }} gap={4}>
        {stats.map((stat) => (
          <Card key={stat.label} className="p-4">
            <h3 className="text-sm text-gray-600">{stat.label}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
            <Badge variant="success">{stat.change}</Badge>
          </Card>
        ))}
      </Grid>
      
      <Card>
        <Card.Header>
          <h2>User Analytics</h2>
        </Card.Header>
        <Card.Body>
          <DataTable
            columns={columns}
            data={userData}
            pagination
          />
        </Card.Body>
      </Card>
    </div>
  )
}`
  },
  {
    id: 'form',
    title: 'Contact Form',
    description: 'Build a contact form with validation and error handling',
    category: 'Forms',
    difficulty: 'Beginner',
    prompt: `Create a contact form using Aki UI components with these requirements:

- Name, email, subject, and message fields
- Real-time validation
- Error handling and success states
- Responsive design
- Accessibility features

Use FormControl, Input, and Button components from Aki UI.`,
    expectedResult: `import { useState } from 'react'
import { FormControl, Input, Button, Alert } from '@akitectio/aki-ui'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.subject) newErrors.subject = 'Subject is required'
    if (!formData.message) newErrors.message = 'Message is required'
    
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    
    setIsSubmitting(true)
    // Submit logic here
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <FormControl isInvalid={!!errors.name}>
        <FormControl.Label>Name</FormControl.Label>
        <Input
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        />
        {errors.name && <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage>}
      </FormControl>

      <FormControl isInvalid={!!errors.email}>
        <FormControl.Label>Email</FormControl.Label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
        {errors.email && <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>}
      </FormControl>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}`
  },
  {
    id: 'card-layout',
    title: 'Product Card Grid',
    description: 'Create a responsive product card layout with images and actions',
    category: 'Components',
    difficulty: 'Beginner',
    prompt: `Design a product showcase using Aki UI Card components:

- Responsive grid of product cards
- Each card shows image, title, price, and "Add to Cart" button
- Hover effects and smooth transitions
- Mobile-friendly layout
- Use Grid component for responsive layout`,
    expectedResult: `import { Card, Grid, Button, Badge } from '@akitectio/aki-ui'

interface Product {
  id: number
  name: string
  price: string
  image: string
  badge?: string
}

function ProductGrid({ products }: { products: Product[] }) {
  return (
    <Grid cols={{ base: 1, md: 2, lg: 3, xl: 4 }} gap={6}>
      {products.map((product) => (
        <Card key={product.id} className="group hover:shadow-lg transition-shadow">
          <div className="relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
            />
            {product.badge && (
              <Badge className="absolute top-2 right-2">
                {product.badge}
              </Badge>
            )}
          </div>
          
          <Card.Body className="p-4">
            <h3 className="font-semibold mb-2">{product.name}</h3>
            <p className="text-lg font-bold text-primary-600 mb-4">
              {product.price}
            </p>
            <Button variant="primary" className="w-full">
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Grid>
  )
}`
  },
  {
    id: 'navigation',
    title: 'Navigation Header',
    description: 'Build a responsive navigation header with menu items and user dropdown',
    category: 'Navigation',
    difficulty: 'Intermediate',
    prompt: `Create a navigation header using Aki UI components:

- Logo on the left
- Navigation menu items in the center
- User profile dropdown on the right
- Mobile hamburger menu
- Dark mode toggle
- Search functionality`,
    expectedResult: `import { useState } from 'react'
import { Button, Avatar, Dropdown, Input } from '@akitectio/aki-ui'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' }
  ]

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Your Brand</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Search & User Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Input
                placeholder="Search..."
                className="w-64"
                leftIcon={<MagnifyingGlassIcon className="w-4 h-4" />}
              />
            </div>
            
            <Dropdown>
              <Dropdown.Trigger>
                <Avatar src="/user-avatar.jpg" alt="User" />
              </Dropdown.Trigger>
              <Dropdown.Content>
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Logout</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Bars3Icon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}`
  }
]

const difficultyColors = {
  'Beginner': 'success',
  'Intermediate': 'warning',
  'Advanced': 'destructive'
}

export default function LLMExamplesPage() {
  const [selectedExample, setSelectedExample] = useState(examples[0])
  const categories = [...new Set(examples.map(ex => ex.category))]

  return (
    <PageHeader
      title="LLM Integration Examples"
      description="Real-world examples and prompts for building UIs with AI assistance using Aki UI components."
    >
      <div className="space-y-8">
        {/* Hero Section */}
        <section>
          <Card className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/20 border-0 shadow-2xl">
            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/20 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-100/10 to-purple-100/10 dark:from-blue-400/5 dark:to-purple-400/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 p-8 lg:p-12">
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-75 animate-pulse"></div>
                  <div className="relative p-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl shadow-2xl">
                    <SparklesIcon className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>

              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
                  AI-Powered UI Development
                  <span className="block text-3xl lg:text-4xl mt-2">Examples & Templates</span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-light">
                  Transform your development workflow with AI assistance.
                  <span className="block mt-2 font-medium bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                    Real examples • Production-ready code • Copy-paste prompts
                  </span>
                </p>

                {/* Feature highlights */}
                <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
                  <div className="flex items-center justify-center space-x-3 p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl border border-white/20 dark:border-gray-700/50 backdrop-blur-sm">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900 dark:text-white">{examples.length}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Examples</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-3 p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl border border-white/20 dark:border-gray-700/50 backdrop-blur-sm">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <ClipboardDocumentIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900 dark:text-white">Ready</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Prompts</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-3 p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl border border-white/20 dark:border-gray-700/50 backdrop-blur-sm">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <CodeBracketIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900 dark:text-white">TypeScript</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Ready</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 px-8 py-4"
                    onClick={() => document.getElementById('examples-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <LightBulbIcon className="w-5 h-5 mr-2" />
                    Explore Examples
                  </Button>
                  <Button variant="outline" size="lg" asChild className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-200 px-8 py-4">
                    <a href="/docs/llm/setup">
                      <CommandLineIcon className="w-5 h-5 mr-2" />
                      Setup AI Tools
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Quick Navigation */}
        <section id="examples-section">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                Browse Examples
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Click any example to view the AI prompt and generated code
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="px-3 py-1">
                {categories.length} Categories
              </Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
            {examples.map((example) => {
              const isSelected = selectedExample.id === example.id

              return (
                <Card
                  key={example.id}
                  className={
                    isSelected
                      ? 'group relative overflow-hidden cursor-pointer transition-all duration-300 border-2 hover:shadow-xl hover:-translate-y-1 border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 shadow-lg scale-105'
                      : 'group relative overflow-hidden cursor-pointer transition-all duration-300 border-2 hover:shadow-xl hover:-translate-y-1 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 bg-white dark:bg-gray-800'
                  }
                  onClick={() => setSelectedExample(example)}
                >
                  {/* Gradient overlay for selected state */}
                  {isSelected && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10"></div>
                  )}

                  <div className="relative p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {example.title}
                        </h3>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge
                            variant={difficultyColors[example.difficulty as keyof typeof difficultyColors] as any}
                            size="sm"
                            className="font-medium"
                          >
                            {example.difficulty}
                          </Badge>
                          <Badge variant="outline" size="sm" className="text-xs">
                            {example.category}
                          </Badge>
                        </div>
                      </div>

                      {/* Selection indicator */}
                      <div className={
                        isSelected
                          ? 'w-3 h-3 rounded-full transition-all duration-200 bg-blue-500 shadow-lg'
                          : 'w-3 h-3 rounded-full transition-all duration-200 bg-gray-300 dark:bg-gray-600 group-hover:bg-blue-300'
                      }></div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {example.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Selected Example Details */}
        <section>
          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1"></div>

            <div className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1 mb-4 lg:mb-0">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                      <SparklesIcon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                      {selectedExample.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {selectedExample.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge
                      variant={difficultyColors[selectedExample.difficulty as keyof typeof difficultyColors] as any}
                      className="px-4 py-2 font-medium"
                    >
                      <div className="w-2 h-2 rounded-full bg-current mr-2"></div>
                      {selectedExample.difficulty}
                    </Badge>
                    <Badge variant="outline" className="px-4 py-2 font-medium border-2">
                      {selectedExample.category}
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(selectedExample.prompt)
                    }}
                    className="hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950/30"
                  >
                    <ClipboardDocumentIcon className="w-4 h-4 mr-2" />
                    Copy Prompt
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(selectedExample.expectedResult)
                    }}
                    className="hover:bg-green-50 hover:border-green-300 dark:hover:bg-green-950/30"
                  >
                    <CodeBracketIcon className="w-4 h-4 mr-2" />
                    Copy Code
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="prompt" className="w-full">
                <div className="flex flex-wrap gap-2 mb-6 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <Tab value="prompt" className="flex-1 sm:flex-none data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
                    <CodeBracketIcon className="w-4 h-4 mr-2" />
                    AI Prompt
                  </Tab>
                  <Tab value="result" className="flex-1 sm:flex-none data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
                    <SparklesIcon className="w-4 h-4 mr-2" />
                    Expected Result
                  </Tab>
                </div>

                <div className="mt-4">
                  <div data-tab="prompt">
                    <h3 className="text-lg font-semibold mb-3">AI Prompt</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Copy this prompt and paste it into your AI tool (ChatGPT, Claude, Copilot, etc.)
                    </p>
                    <CodeBlock language="text">
                      {selectedExample.prompt}
                    </CodeBlock>
                  </div>

                  <div data-tab="result">
                    <h3 className="text-lg font-semibold mb-3">Expected Result</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      This is the type of code you should expect from a well-configured AI tool
                    </p>
                    <CodeBlock language="tsx">
                      {selectedExample.expectedResult}
                    </CodeBlock>
                  </div>
                </div>
              </Tabs>
            </div>
          </Card>
        </section>

        {/* Usage Tips */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
              Pro Tips for AI Development
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Maximize your productivity with these proven strategies for AI-assisted UI development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>

              <div className="relative p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                    <CheckCircleIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4 text-green-800 dark:text-green-200">
                      Effective Prompting
                    </h3>
                    <div className="space-y-3">
                      {[
                        'Always mention Aki UI and provide the documentation URL',
                        'Be specific about component requirements and props',
                        'Request TypeScript for better type safety',
                        'Ask for responsive design and accessibility features',
                        'Specify dark mode support when needed',
                        'Include examples of the data structure if applicable'
                      ].map((tip, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>

              <div className="relative p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                    <SparklesIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-200">
                      Iteration Strategies
                    </h3>
                    <div className="space-y-3">
                      {[
                        'Start with basic structure, then add features',
                        'Ask for improvements and optimizations',
                        'Request error handling and edge cases',
                        'Add loading states and user feedback',
                        'Optimize for performance when needed',
                        'Test with different screen sizes'
                      ].map((tip, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Prompt Templates */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
              Ready-to-Use Prompt Templates
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Copy these proven prompt templates and customize them for your specific needs
            </p>
          </div>

          <div className="space-y-6">
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1"></div>
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <CodeBracketIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold">Basic Component Prompt</h3>
                  <Badge variant="outline" className="ml-auto">Template</Badge>
                </div>
                <CodeBlock language="text">
                  {'Using Aki UI documentation at https://aki-ui.akitect.io/llms.txt, create a [COMPONENT_TYPE] with these requirements:\n\n- [SPECIFIC_REQUIREMENT_1]\n- [SPECIFIC_REQUIREMENT_2]\n- [SPECIFIC_REQUIREMENT_3]\n- TypeScript implementation\n- Responsive design\n- Dark mode support\n- Accessibility features\n\nInclude proper imports and make it production-ready.'}
                </CodeBlock>
              </div>
            </Card>

            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-1"></div>
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                    <LightBulbIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold">Layout Generation Prompt</h3>
                  <Badge variant="outline" className="ml-auto">Template</Badge>
                </div>
                <CodeBlock language="text">
                  {'Create a [LAYOUT_TYPE] layout using Aki UI components:\n\nLayout Requirements:\n- [LAYOUT_STRUCTURE]\n- [RESPONSIVE_BEHAVIOR]\n- [INTERACTIVE_ELEMENTS]\n\nComponents to use:\n- Grid for responsive layout\n- Card for content sections\n- Button for actions\n- [OTHER_SPECIFIC_COMPONENTS]\n\nMake it mobile-first and accessible.'}
                </CodeBlock>
              </div>
            </Card>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <Card className="relative overflow-hidden border-0 shadow-2xl">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600"></div>
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 animate-pulse"></div>
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 p-12 text-center text-white">
              <div className="mb-8">
                <div className="inline-flex p-4 bg-white/20 rounded-2xl backdrop-blur-sm mb-6">
                  <SparklesIcon className="w-12 h-12" />
                </div>
                <h2 className="text-4xl font-bold mb-4">
                  Ready to Build with AI?
                </h2>
                <p className="text-xl opacity-90 mb-2 max-w-3xl mx-auto leading-relaxed">
                  Transform your development workflow with AI assistance.
                </p>
                <p className="text-lg opacity-75 max-w-2xl mx-auto">
                  Set up your AI tool with Aki UI context and start building amazing UIs faster than ever.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  asChild
                  className="bg-blue-50 text-blue-700 font-medium hover:bg-blue-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 px-8 py-4"
                >
                  <a href="/docs/llm/setup">
                    <CommandLineIcon className="w-5 h-5 mr-2" />
                    Setup AI Tools
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm hover:shadow-lg transition-all duration-200 px-8 py-4"
                >
                  <a href="/docs/llm/ai-tools">
                    <ArrowRightIcon className="w-5 h-5 mr-2" />
                    View All AI Tools
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm opacity-75">
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4" />
                  <span>Free & Open Source</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4" />
                  <span>Production Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4" />
                  <span>TypeScript Support</span>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </PageHeader>
  )
}
