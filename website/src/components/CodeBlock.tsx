'use client'

import { ReactNode, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlockProps {
  children?: string
  code?: string
  language?: string
  showLineNumbers?: boolean
}

export function CodeBlock({ children, code, language = 'typescript', showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const codeContent = code || children || ''
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeContent)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="relative group">
      <button
        onClick={copyToClipboard}
        className="absolute top-3 right-3 z-10 px-3 py-1.5 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-md transition-all duration-200 opacity-0 group-hover:opacity-100 flex items-center gap-1.5 shadow-lg"
        title="Copy code"
      >
        {copied ? (
          <>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Copied
          </>
        ) : (
          <>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
            Copy
          </>
        )}
      </button>
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        showLineNumbers={showLineNumbers}
        className="!bg-slate-900 !text-sm rounded-lg overflow-x-auto border border-slate-800"
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          background: '#0f172a',
          fontSize: '14px',
          lineHeight: '1.5',
        }}
      >
        {codeContent}
      </SyntaxHighlighter>
    </div>
  )
}
