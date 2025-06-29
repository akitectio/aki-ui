import { AkiUIProvider } from './lib/theme';
import { Router, Route } from './components/Router';
import ErrorBoundary from './components/ErrorBoundary';
import NewHomePage from './pages/NewHomePage';
import NewDocsPage from './pages/NewDocsPage';
import ComponentsPage from './pages/ComponentsPage';
import TemplatesPage from './pages/TemplatesPage';
import PlaygroundPage from './pages/PlaygroundPage';

function App() {
    return (
        <ErrorBoundary>
            <AkiUIProvider>
                <Router initialRoute="/">
                    <Route path="/">
                        <ErrorBoundary>
                            <NewHomePage />
                        </ErrorBoundary>
                    </Route>
                    <Route path="/docs">
                        <ErrorBoundary>
                            <NewDocsPage />
                        </ErrorBoundary>
                    </Route>
                    <Route path="/templates">
                        <ErrorBoundary>
                            <TemplatesPage />
                        </ErrorBoundary>
                    </Route>
                    <Route path="/playground">
                        <ErrorBoundary>
                            <PlaygroundPage />
                        </ErrorBoundary>
                    </Route>
                    <Route path="/components">
                        <ErrorBoundary>
                            <ComponentsPage />
                        </ErrorBoundary>
                    </Route>
                </Router>
            </AkiUIProvider>
        </ErrorBoundary>
    );
}

export default App;
