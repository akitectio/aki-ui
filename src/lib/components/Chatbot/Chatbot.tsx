import React, { useState, useRef, useEffect } from 'react';

export interface ChatMessage {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export interface ChatbotRule {
    pattern: RegExp | string;
    response: string | string[];
    priority?: number;
}

export interface ChatbotProps {
    /**
     * Chatbot rules for pattern matching and responses
     */
    rules?: ChatbotRule[];

    /**
     * Initial greeting message
     */
    greeting?: string;

    /**
     * Default response when no rules match
     */
    defaultResponse?: string;

    /**
     * Placeholder text for input
     */
    placeholder?: string;

    /**
     * Title for the chat window
     */
    title?: string;

    /**
     * Whether the chatbot starts minimized
     */
    minimized?: boolean;

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * Height of the chat messages area
     */
    height?: string;

    /**
     * Callback when a message is sent
     */
    onMessageSent?: (message: ChatMessage) => void;

    /**
     * Callback when bot responds
     */
    onBotResponse?: (message: ChatMessage) => void;
}

// Default rules for a basic chatbot
const defaultRules: ChatbotRule[] = [
    {
        pattern: /^(hi|hello|hey|greetings)/i,
        response: ["Hello! How can I help you today?", "Hi there! What can I do for you?"],
        priority: 1
    },
    {
        pattern: /^(bye|goodbye|see you|farewell)/i,
        response: ["Goodbye! Have a great day!", "See you later!", "Take care!"],
        priority: 1
    },
    {
        pattern: /help/i,
        response: "I'm here to help! You can ask me questions and I'll do my best to assist you.",
        priority: 2
    },
    {
        pattern: /how are you/i,
        response: ["I'm doing well, thank you for asking!", "I'm great! How can I help you?"],
        priority: 2
    },
    {
        pattern: /what.*your.*name/i,
        response: "I'm a simple AI chatbot built with React!",
        priority: 2
    },
    {
        pattern: /thank/i,
        response: ["You're welcome!", "Happy to help!", "No problem!"],
        priority: 2
    },
    {
        pattern: /weather/i,
        response: "I don't have access to weather data, but you can check your local weather app!",
        priority: 3
    },
    {
        pattern: /time/i,
        response: `The current time is ${new Date().toLocaleTimeString()}`,
        priority: 3
    }
];

const Chatbot: React.FC<ChatbotProps> = ({
    rules = defaultRules,
    greeting = "Hello! I'm your AI assistant. How can I help you today?",
    defaultResponse = "I'm not sure how to respond to that. Could you try rephrasing your question?",
    placeholder = "Type your message...",
    title = "AI Assistant",
    minimized = false,
    className = "",
    height = "400px",
    onMessageSent,
    onBotResponse
}) => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isMinimized, setIsMinimized] = useState(minimized);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Add greeting message on mount
    useEffect(() => {
        if (greeting) {
            const greetingMessage: ChatMessage = {
                id: `bot-${Date.now()}`,
                text: greeting,
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages([greetingMessage]);
        }
    }, [greeting]);

    // Scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Focus input when chat is opened
    useEffect(() => {
        if (!isMinimized && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isMinimized]);

    // Find matching rule and generate response
    const findResponse = (userInput: string): string => {
        // Sort rules by priority (lower number = higher priority)
        const sortedRules = [...rules].sort((a, b) => (a.priority || 999) - (b.priority || 999));

        for (const rule of sortedRules) {
            let matches = false;

            if (rule.pattern instanceof RegExp) {
                matches = rule.pattern.test(userInput);
            } else {
                matches = userInput.toLowerCase().includes(rule.pattern.toLowerCase());
            }

            if (matches) {
                if (Array.isArray(rule.response)) {
                    return rule.response[Math.floor(Math.random() * rule.response.length)];
                }
                return rule.response;
            }
        }

        return defaultResponse;
    };

    // Handle sending a message
    const sendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage: ChatMessage = {
            id: `user-${Date.now()}`,
            text: inputValue.trim(),
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue("");
        onMessageSent?.(userMessage);

        // Show typing indicator
        setIsTyping(true);

        // Simulate thinking time
        setTimeout(() => {
            const botResponse = findResponse(userMessage.text);
            const botMessage: ChatMessage = {
                id: `bot-${Date.now()}`,
                text: botResponse,
                sender: 'bot',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
            onBotResponse?.(botMessage);
        }, 500 + Math.random() * 1000); // Random delay between 500-1500ms
    };

    // Handle key press
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    // Clear conversation
    const clearChat = () => {
        setMessages(greeting ? [{
            id: `bot-${Date.now()}`,
            text: greeting,
            sender: 'bot',
            timestamp: new Date()
        }] : []);
    };

    if (isMinimized) {
        return (
            <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
                <button
                    onClick={() => setIsMinimized(false)}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
                    aria-label="Open chat"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                </button>
            </div>
        );
    }

    return (
        <div className={`fixed bottom-4 right-4 z-50 w-80 bg-white border border-gray-200 rounded-lg shadow-xl ${className}`}>
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
                <h3 className="font-semibold text-sm">{title}</h3>
                <div className="flex gap-2">
                    <button
                        onClick={clearChat}
                        className="text-blue-100 hover:text-white transition-colors"
                        aria-label="Clear chat"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                    <button
                        onClick={() => setIsMinimized(true)}
                        className="text-blue-100 hover:text-white transition-colors"
                        aria-label="Minimize chat"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div
                className="p-4 overflow-y-auto bg-gray-50"
                style={{ height }}
            >
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`mb-3 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-xs px-3 py-2 rounded-lg text-sm ${message.sender === 'user'
                                    ? 'bg-blue-600 text-white rounded-br-none'
                                    : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                                }`}
                        >
                            {message.text}
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="mb-3 flex justify-start">
                        <div className="bg-white text-gray-500 border border-gray-200 rounded-lg rounded-bl-none px-3 py-2 text-sm">
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
                <div className="flex gap-2">
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={placeholder}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        disabled={isTyping}
                    />
                    <button
                        onClick={sendMessage}
                        disabled={!inputValue.trim() || isTyping}
                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-md text-sm transition-colors duration-200"
                        aria-label="Send message"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
