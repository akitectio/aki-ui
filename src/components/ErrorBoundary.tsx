import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button, Card, Typography } from '../lib/components';
import { ExclamationTriangleIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
    errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        // Update state so the next render will show the fallback UI
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Log the error to console for debugging
        console.error('Error Boundary caught an error:', error);
        console.error('Error Info:', errorInfo);
        
        this.setState({
            error,
            errorInfo
        });
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: undefined, errorInfo: undefined });
    };

    handleReload = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            // Custom fallback UI
            if (this.props.fallback) {
                return this.props.fallback;
            }

            // Default error UI
            return (
                <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                    <Card className="max-w-lg w-full p-8 text-center">
                        <div className="flex justify-center mb-6">
                            <div className="p-3 bg-red-100 rounded-full">
                                <ExclamationTriangleIcon className="h-8 w-8 text-red-600" />
                            </div>
                        </div>
                        
                        <Typography variant="h4" className="text-gray-900 mb-4">
                            Oops! Something went wrong
                        </Typography>
                        
                        <Typography variant="body1" className="text-gray-600 mb-6">
                            We encountered an error while rendering this page. This is likely a temporary issue.
                        </Typography>

                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <details className="mb-6 text-left">
                                <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
                                    Error Details (Development)
                                </summary>
                                <div className="bg-gray-100 p-4 rounded-md text-xs font-mono overflow-auto max-h-48">
                                    <div className="text-red-600 mb-2">
                                        <strong>Error:</strong> {this.state.error.message}
                                    </div>
                                    {this.state.error.stack && (
                                        <div className="text-gray-600">
                                            <strong>Stack:</strong>
                                            <pre className="whitespace-pre-wrap mt-1">
                                                {this.state.error.stack}
                                            </pre>
                                        </div>
                                    )}
                                </div>
                            </details>
                        )}
                        
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button
                                variant="primary"
                                onClick={this.handleRetry}
                                className="flex items-center"
                            >
                                <ArrowPathIcon className="h-4 w-4 mr-2" />
                                Try Again
                            </Button>
                            
                            <Button
                                variant="outline-primary"
                                onClick={this.handleReload}
                            >
                                Reload Page
                            </Button>
                            
                            <Button
                                variant="ghost"
                                onClick={() => window.location.href = '/'}
                            >
                                Go Home
                            </Button>
                        </div>
                    </Card>
                </div>
            );
        }

        return this.props.children;
    }
}

// Higher-order component for easier usage
export const withErrorBoundary = <P extends object>(
    Component: React.ComponentType<P>,
    fallback?: ReactNode
) => {
    const WrappedComponent = (props: P) => (
        <ErrorBoundary fallback={fallback}>
            <Component {...props} />
        </ErrorBoundary>
    );
    
    WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
    
    return WrappedComponent;
};

export default ErrorBoundary;
