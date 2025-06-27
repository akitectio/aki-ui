import type { Meta, StoryObj } from '@storybook/react';
import Chatbot from '../lib/components/Chatbot';
import type { ChatbotRule } from '../lib/components/Chatbot';

const meta: Meta<typeof Chatbot> = {
    title: 'Components/Chatbot',
    component: Chatbot,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        title: {
            control: 'text',
            description: 'Title for the chat window',
        },
        greeting: {
            control: 'text',
            description: 'Initial greeting message',
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text for input',
        },
        defaultResponse: {
            control: 'text',
            description: 'Default response when no rules match',
        },
        minimized: {
            control: 'boolean',
            description: 'Whether the chatbot starts minimized',
        },
        height: {
            control: 'text',
            description: 'Height of the chat messages area',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Chatbot>;

export const Default: Story = {
    args: {
        title: 'AI Assistant',
        greeting: 'Hello! I\'m your AI assistant. How can I help you today?',
        placeholder: 'Type your message...',
        defaultResponse: 'I\'m not sure how to respond to that. Could you try rephrasing your question?',
        minimized: false,
        height: '400px',
    },
};

export const Minimized: Story = {
    args: {
        ...Default.args,
        minimized: true,
    },
};

export const CompactHeight: Story = {
    args: {
        ...Default.args,
        height: '300px',
    },
};

export const CustomTitle: Story = {
    args: {
        ...Default.args,
        title: 'Customer Support',
        greeting: 'Welcome to our support center! How can we assist you today?',
    },
};

// Custom rules for a product support chatbot
const supportRules: ChatbotRule[] = [
    {
        pattern: /^(hi|hello|hey)/i,
        response: ['Hello! Welcome to our support center.', 'Hi there! How can I help you today?'],
        priority: 1
    },
    {
        pattern: /(order|purchase|buy)/i,
        response: 'For order-related questions, you can check your order status in your account or contact our sales team.',
        priority: 2
    },
    {
        pattern: /(refund|return|cancel)/i,
        response: 'For refunds and returns, please visit our returns policy page or contact customer service.',
        priority: 2
    },
    {
        pattern: /(shipping|delivery)/i,
        response: 'Standard shipping takes 3-5 business days. Expedited shipping is available for 1-2 day delivery.',
        priority: 2
    },
    {
        pattern: /(price|cost|fee)/i,
        response: 'You can find pricing information on our website. We also offer volume discounts for bulk orders.',
        priority: 2
    },
    {
        pattern: /(technical|bug|error|problem)/i,
        response: 'For technical issues, please describe the problem in detail and I\'ll help you troubleshoot.',
        priority: 2
    },
    {
        pattern: /(account|login|password)/i,
        response: 'For account issues, you can reset your password or contact our technical support team.',
        priority: 2
    },
    {
        pattern: /thank/i,
        response: ['You\'re welcome!', 'Happy to help!', 'Glad I could assist you!'],
        priority: 3
    }
];

export const CustomerSupport: Story = {
    args: {
        title: 'Customer Support',
        greeting: 'Welcome to Customer Support! I can help you with orders, returns, shipping, and technical issues.',
        placeholder: 'Describe your question or issue...',
        defaultResponse: 'I\'m not sure about that. Let me connect you with a human agent who can better assist you.',
        rules: supportRules,
        height: '450px',
    },
};

// Example showing callback usage
export const WithCallbacks: Story = {
    args: {
        ...Default.args,
        onMessageSent: (message) => {
            console.log('User sent:', message);
        },
        onBotResponse: (message) => {
            console.log('Bot responded:', message);
        },
    },
    parameters: {
        docs: {
            description: {
                story: 'This example shows how to use the onMessageSent and onBotResponse callbacks. Check the browser console to see the logged messages.',
            },
        },
    },
};

// Playground story for testing different configurations
export const Playground: Story = {
    args: {
        title: 'Playground Bot',
        greeting: 'Hi! I\'m a customizable chatbot. Try talking to me!',
        placeholder: 'Type anything...',
        defaultResponse: 'Interesting! Tell me more.',
        minimized: false,
        height: '400px',
    },
    parameters: {
        docs: {
            description: {
                story: 'Use the controls panel to experiment with different chatbot configurations.',
            },
        },
    },
};
