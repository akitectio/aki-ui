import { AkiUIProvider } from './lib/theme';
import { Router, Route } from './components/Router';
import HomePage from './pages/HomePage';
import DocsPage from './pages/DocsPage';
import TemplatesPage from './pages/TemplatesPage';
import PlaygroundPage from './pages/PlaygroundPage';
import DemoPage from './pages/DemoPage';

function App() {
    return (
        <AkiUIProvider>
            <Router initialRoute="/">
                <Route path="/">
                    <HomePage />
                </Route>
                <Route path="/docs">
                    <DocsPage />
                </Route>
                <Route path="/templates">
                    <TemplatesPage />
                </Route>
                <Route path="/playground">
                    <PlaygroundPage />
                </Route>
                <Route path="/demo">
                    <DemoPage />
                </Route>
            </Router>
        </AkiUIProvider>
    );
}

export default App;
