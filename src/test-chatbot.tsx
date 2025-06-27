import React from 'react';
import Chatbot from './lib/components/Chatbot';
import type { ChatbotRule } from './lib/components/Chatbot';

// Custom rules for the test chatbot
const testRules: ChatbotRule[] = [
    {
        pattern: /^(hi|hello|hey|greetings)/i,
        response: ["Hello! I'm a test chatbot. Try asking me about different topics!", "Hi there! I can respond to various patterns."],
        priority: 1
    },
    {
        pattern: /test/i,
        response: "Yes, this is a test! I'm working correctly.",
        priority: 2
    },
    {
        pattern: /(react|component)/i,
        response: "I'm built as a React component using TypeScript and Tailwind CSS!",
        priority: 2
    },
    {
        pattern: /(feature|capability)/i,
        response: "I can match text patterns, provide different responses, show typing indicators, and be minimized!",
        priority: 2
    },
    {
        pattern: /(rule|pattern)/i,
        response: "I use regex patterns and simple string matching to understand what you're saying.",
        priority: 2
    },
    {
        pattern: /color/i,
        response: "I'm styled with a blue theme, but you can customize my colors with CSS!",
        priority: 3
    },
    {
        pattern: /minimize/i,
        response: "Try clicking the minus button in my header to minimize me!",
        priority: 3
    }
];

const TestChatbot: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Chatbot Test Page</h1>

                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Chatbot Component Test</h2>
                    <p className="text-gray-600 mb-4">
                        The chatbot component is positioned fixed in the bottom-right corner.
                        You can interact with it using various keywords and phrases.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Try these keywords:</h3>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• "hello" or "hi" - Greeting</li>
                                <li>• "test" - Test response</li>
                                <li>• "react" or "component" - Technical info</li>
                                <li>• "feature" or "capability" - Features</li>
                                <li>• "rule" or "pattern" - How it works</li>
                                <li>• "minimize" - UI instructions</li>
                                <li>• "help" - Get help</li>
                                <li>• "thank you" - Polite response</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Features to test:</h3>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Message sending and receiving</li>
                                <li>• Typing indicator animation</li>
                                <li>• Minimize/maximize functionality</li>
                                <li>• Clear chat functionality</li>
                                <li>• Auto-scrolling to new messages</li>
                                <li>• Keyboard shortcuts (Enter to send)</li>
                                <li>• Pattern matching responses</li>
                                <li>• Random response selection</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-l-4 border-blue-500 bg-blue-50 p-4">
                        <p className="text-blue-800 text-sm">
                            <strong>Note:</strong> The chatbot appears as a floating widget in the bottom-right corner.
                            If you don't see it, check if it's minimized (blue circle button).
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Component Information</h2>
                    <div className="space-y-4 text-gray-600">
                        <p>
                            <strong>Component:</strong> Chatbot - A simple rule-based AI chatbot component
                        </p>
                        <p>
                            <strong>Type:</strong> Rule-based pattern matching chatbot
                        </p>
                        <p>
                            <strong>Features:</strong> Custom rules, typing indicators, minimize/maximize,
                            message history, auto-scroll, keyboard shortcuts
                        </p>
                        <p>
                            <strong>Styling:</strong> Tailwind CSS with responsive design
                        </p>
                        <p>
                            <strong>Position:</strong> Fixed bottom-right corner with z-index management
                        </p>
                    </div>
                </div>
            </div>

            {/* Chatbot Component */}
            <Chatbot
                title="Test Bot"
                greeting="Hello! I'm a test chatbot. Try asking me about different topics to see how I respond!"
                rules={testRules}
                placeholder="Type a message to test the bot..."
                defaultResponse="I don't understand that yet, but I'm learning! Try asking about 'test', 'react', 'features', or other topics."
                onMessageSent={(message) => {
                    console.log('User message sent:', message);
                }}
                onBotResponse={(message) => {
                    console.log('Bot responded:', message);
                }}
            />
        </div>
    );
};

export default TestChatbot;
