import { useState } from 'react';
import { Button, Card, Alert, Stack, Input, Badge } from './lib/components';
import { AkiUIProvider } from './lib/theme';

function App() {
    const [formData, setFormData] = useState({ name: '', email: '' });

    return (
        <AkiUIProvider>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <img src="/aki_ui_logo.svg" alt="Aki UI" className="w-12 h-12" />
                            <h1 className="text-4xl font-bold text-gray-900">Aki UI</h1>
                        </div>
                        <p className="text-xl text-gray-600 mb-6">
                            Modern React UI Component Library
                        </p>
                        <div className="flex justify-center gap-2 mb-6">
                            <Badge variant="primary">TypeScript</Badge>
                            <Badge variant="success">Tailwind CSS</Badge>
                            <Badge variant="info">React 18+</Badge>
                        </div>
                    </div>

                    {/* Quick Demo */}
                    <Card className="mb-8">
                        <Card.Header>
                            <h2 className="text-2xl font-semibold">🚀 Library Demo</h2>
                        </Card.Header>
                        <Card.Body>
                            <Alert variant="success" className="mb-6">
                                Đây là demo của thư viện Aki UI. Để xem documentation đầy đủ, vui lòng truy cập docs site.
                            </Alert>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Form Demo */}
                                <div>
                                    <h3 className="font-semibold mb-3">Form Components</h3>
                                    <Stack spacing="md">
                                        <Input
                                            label="Tên của bạn"
                                            placeholder="Nhập tên..."
                                            value={formData.name}
                                            onChange={(e: any) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                        />
                                        <Input
                                            type="email"
                                            label="Email"
                                            placeholder="your@email.com"
                                            value={formData.email}
                                            onChange={(e: any) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                        />
                                        <Button variant="primary" fullWidth>
                                            Gửi thông tin
                                        </Button>
                                    </Stack>
                                </div>

                                {/* Button Demo */}
                                <div>
                                    <h3 className="font-semibold mb-3">Button Variants</h3>
                                    <div className="space-y-3">
                                        <div className="flex gap-2">
                                            <Button variant="primary" size="sm">Primary</Button>
                                            <Button variant="secondary" size="sm">Secondary</Button>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="success" size="sm">Success</Button>
                                            <Button variant="danger" size="sm">Danger</Button>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="outline-primary" size="sm">Outline</Button>
                                            <Button variant="outline-secondary" size="sm">Outline</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="text-center">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    onClick={() => window.open('https://akitectio.github.io/aki-ui', '_blank')}
                                    className="mr-4"
                                >
                                    📖 Xem Documentation
                                </Button>
                                <Button
                                    variant="outline-primary"
                                    size="lg"
                                    onClick={() => window.open('https://github.com/akitectio/aki-ui', '_blank')}
                                >
                                    📖 GitHub
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <Card>
                            <Card.Body className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <h3 className="font-semibold mb-2">Lightning Fast</h3>
                                <p className="text-gray-600 text-sm">
                                    Optimized performance với tree-shaking support
                                </p>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎨</span>
                                </div>
                                <h3 className="font-semibold mb-2">Highly Customizable</h3>
                                <p className="text-gray-600 text-sm">
                                    Theme system linh hoạt với Tailwind CSS
                                </p>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body className="text-center">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">♿</span>
                                </div>
                                <h3 className="font-semibold mb-2">Accessible</h3>
                                <p className="text-gray-600 text-sm">
                                    Tuân thủ chuẩn WCAG 2.1 AA accessibility
                                </p>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* Installation */}
                    <Card>
                        <Card.Header>
                            <h2 className="text-xl font-semibold">📦 Installation</h2>
                        </Card.Header>
                        <Card.Body>
                            <div className="bg-gray-900 text-white p-4 rounded-lg mb-4 font-mono">
                                npm install @akitectio/aki-ui
                            </div>
                            <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm">
                                {`import { Button, Card, Input } from '@akitectio/aki-ui';
import '@akitectio/aki-ui/css';

function App() {
  return (
    <Card>
      <Card.Body>
        <Input label="Name" />
        <Button variant="primary">Submit</Button>
      </Card.Body>
    </Card>
  );
}`}
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </AkiUIProvider>
    );
}

export default App;
