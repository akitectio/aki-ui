import React, { useState, createContext, useContext } from 'react';

interface RouterContextType {
    currentRoute: string;
    navigate: (route: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const useRouter = () => {
    const context = useContext(RouterContext);
    if (!context) {
        throw new Error('useRouter must be used within a Router');
    }
    return context;
};

interface RouterProps {
    children: React.ReactNode;
    initialRoute?: string;
}

export const Router: React.FC<RouterProps> = ({ children, initialRoute = '/' }) => {
    const [currentRoute, setCurrentRoute] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.location.hash.slice(1) || initialRoute;
        }
        return initialRoute;
    });

    const navigate = (route: string) => {
        setCurrentRoute(route);
        if (typeof window !== 'undefined') {
            window.location.hash = route;
        }
    };

    return (
        <RouterContext.Provider value={{ currentRoute, navigate }}>
            {children}
        </RouterContext.Provider>
    );
};

interface RouteProps {
    path: string;
    children: React.ReactNode;
}

export const Route: React.FC<RouteProps> = ({ path, children }) => {
    const { currentRoute } = useRouter();
    return currentRoute === path ? <>{children}</> : null;
};
