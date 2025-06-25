function App() {
    const handleOpenStorybook = () => {
        window.open('http://localhost:6006', '_blank');
    };

    return (
        <div className="p-8 flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-8">Aki UI Component Library</h1>
            <div className="p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl font-semibold mb-4">Component Documentation</h2>
                <p className="mb-6">This project uses Storybook for component documentation and development.</p>
                <button
                    onClick={handleOpenStorybook}
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
                >
                    Open Storybook
                </button>
                <div className="mt-4 text-sm text-gray-600">
                    <p>You can run Storybook with:</p>
                    <code className="block bg-gray-100 p-2 mt-1 rounded">npm run storybook</code>
                </div>
            </div>
        </div>
    );
}

export default App;
