/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                    950: '#082f49',
                },
            },
            animation: {
                'toast-in': 'toast-in 0.3s ease-out',
                'toast-out': 'toast-out 0.3s ease-in',
                'slide-in-right': 'slide-in-right 0.3s ease-out',
                'slide-out-right': 'slide-out-right 0.3s ease-in',
                'slide-in-left': 'slide-in-left 0.3s ease-out',
                'slide-out-left': 'slide-out-left 0.3s ease-in',
                'fade-in': 'fade-in 0.3s ease-out',
                'fade-out': 'fade-out 0.3s ease-in',
            },
            keyframes: {
                'toast-in': {
                    '0%': { opacity: '0', transform: 'translateX(100%) scale(0.95)' },
                    '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
                },
                'toast-out': {
                    '0%': { opacity: '1', transform: 'translateX(0) scale(1)' },
                    '100%': { opacity: '0', transform: 'translateX(100%) scale(0.95)' },
                },
                'slide-in-right': {
                    '0%': { opacity: '0', transform: 'translateX(100%)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                'slide-out-right': {
                    '0%': { opacity: '1', transform: 'translateX(0)' },
                    '100%': { opacity: '0', transform: 'translateX(100%)' },
                },
                'slide-in-left': {
                    '0%': { opacity: '0', transform: 'translateX(-100%)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                'slide-out-left': {
                    '0%': { opacity: '1', transform: 'translateX(0)' },
                    '100%': { opacity: '0', transform: 'translateX(-100%)' },
                },
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(-20px) scale(0.95)' },
                    '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
                },
                'fade-out': {
                    '0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
                    '100%': { opacity: '0', transform: 'translateY(-20px) scale(0.95)' },
                },
            },
        },
    },
    plugins: [],
}
