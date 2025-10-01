import { Card } from '../components';

interface StatItem {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon?: string;
  color?: 'blue' | 'green' | 'red' | 'purple' | 'orange' | 'yellow';
}

interface StatsBlockProps {
  stats?: StatItem[];
  columns?: number;
  showIcons?: boolean;
  showTrends?: boolean;
  className?: string;
}

const defaultStats: StatItem[] = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    trend: 'up',
    icon: '💰',
    color: 'green'
  },
  {
    title: 'Active Users',
    value: '2,350',
    change: '+180.1%',
    trend: 'up',
    icon: '👥',
    color: 'blue'
  },
  {
    title: 'Sales',
    value: '12,234',
    change: '+19%',
    trend: 'up',
    icon: '🛒',
    color: 'purple'
  },
  {
    title: 'Conversion Rate',
    value: '3.24%',
    change: '-2.1%',
    trend: 'down',
    icon: '📈',
    color: 'red'
  }
];

export function StatsBlock({
  stats = defaultStats,
  columns = 4,
  showIcons = true,
  showTrends = true,
  className = ''
}: StatsBlockProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'
  };

  return (
    <div className={`grid gap-4 ${gridCols[columns as keyof typeof gridCols] || gridCols[4]} ${className}`}>
      {stats.map((stat, index) => (
        <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.title}
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
              {showTrends && (
                <div className="flex items-center space-x-1">
                  {stat.trend === 'up' ? (
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V7" />
                    </svg>
                  )}
                  <span className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              )}
            </div>
            {showIcons && stat.icon && (
              <div className={`p-3 rounded-full bg-${stat.color}-100 dark:bg-${stat.color}-900/20`}>
                <span className="text-2xl">{stat.icon}</span>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}