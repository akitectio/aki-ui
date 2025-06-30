import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🎨 Aki UI Development
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Component library development environment
        </p>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h2 className="font-semibold text-gray-900 mb-2">📚 Storybook</h2>
            <p className="text-sm text-gray-600 mb-3">
              Interactive component documentation
            </p>
            <a 
              href="http://localhost:6006" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Open Storybook
            </a>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h2 className="font-semibold text-gray-900 mb-2">🌐 Website</h2>
            <p className="text-sm text-gray-600 mb-3">
              SEO-optimized documentation website
            </p>
            <a 
              href="http://localhost:3000" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Open Website
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Run <code className="bg-gray-100 px-2 py-1 rounded">npm run storybook</code> for component development</p>
          <p>Run <code className="bg-gray-100 px-2 py-1 rounded">npm run website:dev</code> for website development</p>
        </div>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
