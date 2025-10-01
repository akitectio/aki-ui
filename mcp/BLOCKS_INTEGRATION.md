# Aki UI Blocks - MCP Integration

Aki UI Blocks là các template components được xây dựng sẵn để tạo nhanh các UI patterns phổ biến. Các blocks này đã được tích hợp vào MCP (Model Context Protocol) server để generate code một cách tự động và chuẩn.

## Available Blocks

### 1. DashboardBlock
Dashboard layout hoàn chỉnh với sidebar, stats và data table.

**Features:**
- Responsive sidebar navigation
- Statistical overview cards
- Recent activity feed
- Quick action buttons

**Usage via MCP:**
```bash
# Generate dashboard block
aki-ui generate_layout --type=block --blockType=dashboard --responsive=true --features=sidebar,navigation
```

**Generated Code Structure:**
```tsx
import { DashboardBlock } from '@akitectio/aki-ui/blocks';

function MyDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardBlock />
    </div>
  );
}
```

### 2. StatsBlock
Customizable statistics cards với trends và icons.

**Features:**
- Flexible grid layout (1-6 columns)
- Trend indicators (up/down arrows)
- Icon support
- Color variants
- Responsive design

**Usage via MCP:**
```bash
# Generate stats block with custom configuration
aki-ui generate_layout --type=block --blockType=stats --features=custom-stats --columns=4
```

**Props:**
```typescript
interface StatsBlockProps {
  stats?: Array<{
    title: string;
    value: string;
    change: string;
    trend: 'up' | 'down';
    icon?: string;
    color?: 'blue' | 'green' | 'red' | 'purple' | 'orange';
  }>;
  columns?: number; // 1-6
  showIcons?: boolean;
  showTrends?: boolean;
  className?: string;
}
```

### 3. TableBlock
Complete data table với search, pagination và actions.

**Features:**
- Custom column rendering
- Search functionality
- Pagination support
- Row actions (view, edit, delete)
- Responsive design
- Sortable columns

**Usage via MCP:**
```bash
# Generate table with all features
aki-ui generate_layout --type=block --blockType=table --features=search,pagination,actions
```

**Column Configuration:**
```typescript
const columns = [
  {
    key: 'name',
    title: 'User',
    render: (value, row) => (
      <div className="flex items-center">
        <Avatar src={row.avatar} fallback={value[0]} />
        <span>{value}</span>
      </div>
    )
  },
  { key: 'role', title: 'Role', align: 'center' },
  { key: 'status', title: 'Status', render: StatusBadge }
];
```

### 4. HeroBlock
Hero section với multiple size variants và background options.

**Features:**
- Multiple sizes (sm, md, lg, xl)
- Background image or gradient support
- Text alignment options
- Primary/secondary CTAs
- Responsive typography

**Usage via MCP:**
```bash
# Generate large hero with custom buttons
aki-ui generate_layout --type=block --blockType=hero --features=custom-buttons,large
```

**Configuration:**
```typescript
interface HeroBlockProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButton?: { text: string; onClick?: () => void; href?: string };
  secondaryButton?: { text: string; onClick?: () => void; href?: string };
  backgroundImage?: string;
  backgroundColor?: string;
  textAlign?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
```

### 5. FormBlock
Contact/signup forms với validation và multiple layouts.

**Features:**
- Multiple field types (text, email, select, textarea)
- Built-in validation
- Flexible layouts (single, double, grid)
- Form submission handling
- Responsive design

**Usage via MCP:**
```bash
# Generate contact form with validation
aki-ui generate_layout --type=block --blockType=form --features=validation,double
```

**Field Configuration:**
```typescript
const fields = [
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    required: true,
    validation: {
      pattern: '^[^@]+@[^@]+\\.[^@]+$',
      message: 'Please enter a valid email'
    }
  }
];
```

### 6. Additional Block Types

#### CardsBlock
Feature cards grid với icons và actions.

#### SidebarNavBlock
Sidebar navigation với collapsible support.

#### PricingBlock
Pricing table với highlighting và billing toggle.

#### TestimonialsBlock
Customer testimonials với ratings và avatars.

## MCP Commands

### Generate Layout with Blocks
```bash
# Basic syntax
generate_layout --type=block --blockType=<block_name> [options]

# Examples
generate_layout --type=block --blockType=dashboard --responsive=true
generate_layout --type=block --blockType=stats --columns=4 --features=custom-stats
generate_layout --type=block --blockType=hero --features=custom-buttons,background-image
generate_layout --type=block --blockType=form --layout=double --features=validation
```

### Available Options
- `--responsive=true/false` - Enable responsive design
- `--features=feature1,feature2` - Enable specific features
- `--columns=number` - Grid columns (for grid-based blocks)
- `--layout=single/double/grid` - Layout variant
- `--size=sm/md/lg/xl` - Size variant

### Block Features
- `custom-stats` - Custom statistics data
- `search` - Search functionality
- `pagination` - Data pagination
- `actions` - Row/item actions
- `custom-buttons` - Custom CTA buttons
- `background-image` - Background image support
- `validation` - Form validation
- `avatars` - User avatars
- `ratings` - Star ratings
- `highlight` - Highlighted items
- `billing-toggle` - Monthly/yearly toggle
- `collapsible` - Collapsible sidebar

## Block Dependencies

Each block automatically includes the required Aki UI components:

```typescript
// Dashboard Block
import { DashboardBlock } from '@akitectio/aki-ui/blocks';

// Stats Block
import { StatsBlock } from '@akitectio/aki-ui/blocks';
import { Card } from '@akitectio/aki-ui';

// Table Block  
import { TableBlock } from '@akitectio/aki-ui/blocks';
import { Badge, Avatar } from '@akitectio/aki-ui';

// Hero Block
import { HeroBlock } from '@akitectio/aki-ui/blocks';

// Form Block
import { FormBlock } from '@akitectio/aki-ui/blocks';
```

## Customization

All blocks are highly customizable và có thể được extended:

```tsx
// Custom stats data
const customStats = [
  {
    title: 'Revenue',
    value: '$125,430',
    change: '+12.5%',
    trend: 'up',
    icon: '💰',
    color: 'green'
  }
];

<StatsBlock stats={customStats} columns={3} />

// Custom form fields
const contactFields = [
  { name: 'name', label: 'Full Name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'message', label: 'Message', type: 'textarea' }
];

<FormBlock fields={contactFields} onSubmit={handleSubmit} />
```

## Integration Example

Kết hợp nhiều blocks để tạo complete application:

```tsx
import { 
  DashboardBlock, 
  StatsBlock, 
  TableBlock,
  HeroBlock,
  FormBlock 
} from '@akitectio/aki-ui/blocks';

function App() {
  return (
    <div>
      {/* Hero Section */}
      <HeroBlock 
        title="Welcome to Dashboard"
        size="lg"
      />
      
      {/* Stats Overview */}
      <StatsBlock 
        columns={4}
        className="my-8"
      />
      
      {/* Data Table */}
      <TableBlock
        title="Recent Activity"
        showSearch={true}
        showPagination={true}
      />
      
      {/* Contact Form */}
      <FormBlock
        title="Get in Touch"
        layout="double"
      />
    </div>
  );
}
```

## Best Practices

1. **Performance**: Import only needed blocks để reduce bundle size
2. **Customization**: Extend blocks thay vì modify source code
3. **Responsive**: Luôn enable responsive design cho mobile support
4. **Accessibility**: Blocks đã built-in ARIA attributes
5. **Theming**: Sử dụng Aki UI theme system cho consistent styling

## Advanced Usage

### Custom Block Creation

Tạo custom block dựa trên existing patterns:

```tsx
// CustomAnalyticsBlock.tsx
import { StatsBlock, TableBlock, Card } from '@akitectio/aki-ui/blocks';

export function CustomAnalyticsBlock() {
  return (
    <div className="space-y-6">
      <StatsBlock 
        stats={analyticsStats}
        columns={5}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <Card.Header>Chart Section</Card.Header>
          <Card.Body>
            {/* Custom chart component */}
          </Card.Body>
        </Card>
        
        <TableBlock
          title="Top Pages"
          data={pageData}
          showPagination={false}
        />
      </div>
    </div>
  );
}
```

### MCP Integration in Development

Sử dụng blocks trong development workflow:

```bash
# Generate complete dashboard
generate_layout --type=block --blockType=dashboard

# Generate specific sections
generate_layout --type=block --blockType=stats --features=custom-stats
generate_layout --type=block --blockType=table --features=search,actions

# Combine layouts
generate_layout --type=landing --features=hero,stats,testimonials
```

Blocks system giúp developers nhanh chóng tạo ra professional UI patterns mà không cần viết code from scratch, đồng thời vẫn giữ được flexibility để customize theo needs cụ thể.