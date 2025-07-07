'use client'

import { useState, useRef, useEffect } from 'react'
import {
    PaperAirplaneIcon,
    FaceSmileIcon,
    PaperClipIcon,
    EllipsisVerticalIcon,
    PhoneIcon,
    VideoCameraIcon
} from '@heroicons/react/24/outline'
import { Card } from '@akitectio/aki-ui'
import { CodeBlock } from '@/components/CodeBlock'
import { Tabs } from '@/components/Tabs'
import BlockHeader from '@/components/BlockHeader'
import DevicePreviewWrapper from '@/components/DevicePreviewWrapper'

// Mock data for messages
const initialMessages = [
    {
        id: 1,
        text: "Hey! How's your day going?",
        sender: 'other',
        timestamp: '10:30 AM',
        avatar: '/api/placeholder/32/32',
        name: 'Sarah Johnson',
        status: 'delivered'
    },
    {
        id: 2,
        text: "Going great! Just finished a big project. How about you?",
        sender: 'me',
        timestamp: '10:32 AM',
        status: 'read'
    },
    {
        id: 3,
        text: "That's awesome! I'm just working on some designs for a new client.",
        sender: 'other',
        timestamp: '10:35 AM',
        avatar: '/api/placeholder/32/32',
        name: 'Sarah Johnson',
        status: 'delivered'
    },
    {
        id: 4,
        text: "Would love to see them when you're ready to share!",
        sender: 'me',
        timestamp: '10:37 AM',
        status: 'read'
    },
    {
        id: 5,
        text: "Sure thing! I'll send them over once I finish up the final touches.",
        sender: 'other',
        timestamp: '10:40 AM',
        avatar: '/api/placeholder/32/32',
        name: 'Sarah Johnson',
        status: 'delivered'
    }
]

// Chat Interface Component
function ChatInterface({ selectedDevice = 'desktop' }: { selectedDevice?: 'mobile' | 'tablet' | 'desktop' | 'fullscreen' }) {
    const [messages, setMessages] = useState(initialMessages)
    const [newMessage, setNewMessage] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const isMobile = selectedDevice === 'mobile'

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            const message = {
                id: messages.length + 1,
                text: newMessage,
                sender: 'me' as const,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                status: 'sent' as const
            }
            setMessages([...messages, message])
            setNewMessage('')

            // Simulate typing indicator
            setIsTyping(true)
            setTimeout(() => {
                setIsTyping(false)
                // Simulate response
                const response = {
                    id: messages.length + 2,
                    text: "Thanks for your message! I'll get back to you soon.",
                    sender: 'other' as const,
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    avatar: '/api/placeholder/32/32',
                    name: 'Sarah Johnson',
                    status: 'delivered' as const
                }
                setMessages(prev => [...prev, response])
            }, 2000)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    const addEmoji = (emoji: string) => {
        setNewMessage(prev => prev + emoji)
        setShowEmojiPicker(false)
    }

    const commonEmojis = ['😊', '😂', '❤️', '👍', '🙏', '🎉', '🔥', '💯']

    return (
        <div className={`bg-white dark:bg-gray-900 ${isMobile ? 'h-screen' : 'h-[600px]'} flex flex-col`}>
            {/* Chat Header */}
            <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">SJ</span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Sarah Johnson</h3>
                        <p className="text-sm text-green-600 dark:text-green-400">Online</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                        <PhoneIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                        <VideoCameraIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                        <EllipsisVerticalIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    </button>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`flex ${message.sender === 'me' ? 'flex-row-reverse' : 'flex-row'} items-end space-x-2 max-w-xs lg:max-w-md`}>
                            {message.sender === 'other' && (
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-semibold text-xs">SJ</span>
                                </div>
                            )}
                            <div className={`${message.sender === 'me' ? 'ml-2' : 'mr-2'}`}>
                                <div
                                    className={`px-4 py-2 rounded-2xl ${message.sender === 'me'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                                        }`}
                                >
                                    <p className="text-sm">{message.text}</p>
                                </div>
                                <div className={`flex items-center mt-1 space-x-1 ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                        {message.timestamp}
                                    </span>
                                    {message.sender === 'me' && (
                                        <span className="text-xs text-gray-500 dark:text-gray-400">
                                            {message.status === 'sent' ? '✓' : message.status === 'delivered' ? '✓✓' : '✓✓'}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                    <div className="flex justify-start">
                        <div className="flex items-end space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-semibold text-xs">SJ</span>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-2">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4">
                <div className="flex items-end space-x-2">
                    <div className="flex-1 relative">
                        <textarea
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type a message..."
                            className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none dark:bg-gray-700 dark:text-white"
                            rows={1}
                            style={{ minHeight: '44px', maxHeight: '120px' }}
                        />
                        <div className="absolute right-3 bottom-3 flex space-x-1">
                            <button
                                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full transition-colors"
                            >
                                <FaceSmileIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full transition-colors">
                                <PaperClipIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                        className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <PaperAirplaneIcon className="h-5 w-5" />
                    </button>
                </div>

                {/* Emoji Picker */}
                {showEmojiPicker && (
                    <div className="absolute bottom-20 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3">
                        <div className="grid grid-cols-4 gap-2">
                            {commonEmojis.map((emoji) => (
                                <button
                                    key={emoji}
                                    onClick={() => addEmoji(emoji)}
                                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors text-lg"
                                >
                                    {emoji}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default function ChatInterfacePage() {
    const code = `import { useState, useRef, useEffect } from 'react'
import { 
    PaperAirplaneIcon, 
    FaceSmileIcon, 
    PaperClipIcon,
    EllipsisVerticalIcon,
    PhoneIcon,
    VideoCameraIcon 
} from '@heroicons/react/24/outline'
import { Card } from '@akitectio/aki-ui'

function ChatInterface() {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hey! How's your day going?",
            sender: 'other',
            timestamp: '10:30 AM',
            avatar: '/api/placeholder/32/32',
            name: 'Sarah Johnson',
            status: 'delivered'
        },
        // ... more messages
    ])
    const [newMessage, setNewMessage] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            const message = {
                id: messages.length + 1,
                text: newMessage,
                sender: 'me',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                status: 'sent'
            }
            setMessages([...messages, message])
            setNewMessage('')
            
            // Simulate typing indicator
            setIsTyping(true)
            setTimeout(() => {
                setIsTyping(false)
                // Simulate response
                const response = {
                    id: messages.length + 2,
                    text: "Thanks for your message! I'll get back to you soon.",
                    sender: 'other',
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    avatar: '/api/placeholder/32/32',
                    name: 'Sarah Johnson',
                    status: 'delivered'
                }
                setMessages(prev => [...prev, response])
            }, 2000)
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    return (
        <div className="bg-white h-[600px] flex flex-col">
            {/* Chat Header */}
            <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">SJ</span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900">Sarah Johnson</h3>
                        <p className="text-sm text-green-600">Online</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <PhoneIcon className="h-5 w-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <VideoCameraIcon className="h-5 w-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <EllipsisVerticalIcon className="h-5 w-5 text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={\`flex \${message.sender === 'me' ? 'justify-end' : 'justify-start'}\`}
                    >
                        <div className={\`flex \${message.sender === 'me' ? 'flex-row-reverse' : 'flex-row'} items-end space-x-2 max-w-xs lg:max-w-md\`}>
                            {message.sender === 'other' && (
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-semibold text-xs">SJ</span>
                                </div>
                            )}
                            <div className={\`\${message.sender === 'me' ? 'ml-2' : 'mr-2'}\`}>
                                <div
                                    className={\`px-4 py-2 rounded-2xl \${
                                        message.sender === 'me'
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-900'
                                    }\`}
                                >
                                    <p className="text-sm">{message.text}</p>
                                </div>
                                <div className={\`flex items-center mt-1 space-x-1 \${message.sender === 'me' ? 'justify-end' : 'justify-start'}\`}>
                                    <span className="text-xs text-gray-500">
                                        {message.timestamp}
                                    </span>
                                    {message.sender === 'me' && (
                                        <span className="text-xs text-gray-500">
                                            {message.status === 'sent' ? '✓' : message.status === 'delivered' ? '✓✓' : '✓✓'}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                    <div className="flex justify-start">
                        <div className="flex items-end space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-semibold text-xs">SJ</span>
                            </div>
                            <div className="bg-gray-100 rounded-2xl px-4 py-2">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="bg-white border-t border-gray-200 p-4">
                <div className="flex items-end space-x-2">
                    <div className="flex-1 relative">
                        <textarea
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type a message..."
                            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                            rows={1}
                            style={{ minHeight: '44px', maxHeight: '120px' }}
                        />
                        <div className="absolute right-3 bottom-3 flex space-x-1">
                            <button
                                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <FaceSmileIcon className="h-5 w-5 text-gray-500" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                                <PaperClipIcon className="h-5 w-5 text-gray-500" />
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                        className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <PaperAirplaneIcon className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}`

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <BlockHeader title="Chat Interface" />

            {/* Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Modern Chat Interface
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        A modern chat interface with message bubbles, typing indicators, emoji support, and real-time features.
                        Perfect for customer support, team collaboration, and communication platforms.
                    </p>
                </div>

                {/* Tabs for Preview and Code */}
                <Tabs
                    persistKey="chat-interface"
                    useUrlHash={true}
                    tabs={[
                        {
                            id: 'preview',
                            label: 'Preview',
                            content: (
                                <DevicePreviewWrapper>
                                    {(selectedDevice) => (
                                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                            <Card className="overflow-hidden">
                                                <ChatInterface selectedDevice={selectedDevice} />
                                            </Card>
                                        </div>
                                    )}
                                </DevicePreviewWrapper>
                            )
                        },
                        {
                            id: 'code',
                            label: 'Code',
                            content: (
                                <div className="space-y-6">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Implementation
                                    </h3>
                                    <CodeBlock code={code} language="tsx" />
                                </div>
                            )
                        }
                    ]}
                    defaultTab="preview"
                />

                {/* Features */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Features
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <li>• Message bubbles with timestamps</li>
                            <li>• Typing indicators with animation</li>
                            <li>• Emoji picker and reactions</li>
                            <li>• File attachment support</li>
                            <li>• Message status indicators (sent/delivered/read)</li>
                            <li>• User avatars and online status</li>
                            <li>• Auto-scroll to latest message</li>
                            <li>• Responsive design for all devices</li>
                            <li>• Dark mode support</li>
                            <li>• Voice & video call buttons</li>
                            <li>• Enter key to send messages</li>
                            <li>• Elegant gradient avatars</li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Use Cases
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <li>• Customer support chats</li>
                            <li>• Team collaboration tools</li>
                            <li>• Social media platforms</li>
                            <li>• Dating applications</li>
                            <li>• Gaming communities</li>
                            <li>• Educational platforms</li>
                            <li>• Telehealth consultations</li>
                            <li>• Live support widgets</li>
                            <li>• Internal communication tools</li>
                            <li>• Community forums</li>
                            <li>• Real-time messaging apps</li>
                            <li>• Marketplace chat systems</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}
