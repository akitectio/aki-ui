'use client'

import { PageHeader } from '@/components/PageHeader'
import { Card } from '@akitectio/aki-ui'

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-900 dark:to-green-900">
            <div className="max-w-4xl mx-auto px-4 py-16">
                <PageHeader
                    title="Terms of Service"
                    description="Terms and conditions for using Aki UI component library."
                >
                    <div className="space-y-8">
                        <Card className="relative overflow-hidden border-0 shadow-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-blue-50/50 dark:from-green-950/20 dark:via-transparent dark:to-blue-950/20"></div>
                            <div className="relative p-8 lg:p-12">
                                <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Legal Document</h2>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                Last updated: {new Date().toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-a:text-green-600 dark:prose-a:text-green-400 prose-headings:font-bold">
                                <div className="grid gap-8">

                                    <div className="grid gap-8">
                                        <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                                <span className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-3">
                                                    <span className="text-green-600 dark:text-green-400 font-bold">1</span>
                                                </span>
                                                Introduction
                                            </h2>
                                            <p className="mb-4 leading-relaxed">
                                                Welcome to Aki UI. These Terms of Service ("Terms") govern your use of our website, documentation,
                                                and component library provided by Akitect.io ("we," "us," or "our"). By accessing or using our services,
                                                you agree to be bound by these Terms.
                                            </p>
                                        </section>

                                        <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                                <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
                                                    <span className="text-blue-600 dark:text-blue-400 font-bold">2</span>
                                                </span>
                                                Acceptance of Terms
                                            </h2>
                                            <p className="mb-4 leading-relaxed">
                                                By accessing and using Aki UI, you accept and agree to be bound by the terms and provision of this agreement.
                                                If you do not agree to these Terms, please do not use our services.
                                            </p>
                                        </section>

                                        <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                                <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-3">
                                                    <span className="text-purple-600 dark:text-purple-400 font-bold">3</span>
                                                </span>
                                                Description of Service
                                            </h2>
                                            <p className="mb-4">Aki UI is a modern React UI component library that provides:</p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <ul className="list-disc pl-6 space-y-1">
                                                    <li>Open-source React components</li>
                                                    <li>TypeScript support</li>
                                                    <li>Tailwind CSS integration</li>
                                                </ul>
                                                <ul className="list-disc pl-6 space-y-1">
                                                    <li>Documentation and examples</li>
                                                    <li>AI integration tools and MCP servers</li>
                                                </ul>
                                            </div>
                                        </section>

                                        <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                                <span className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mr-3">
                                                    <span className="text-orange-600 dark:text-orange-400 font-bold">4</span>
                                                </span>
                                                License
                                            </h2>
                                            <p className="mb-4">Aki UI is released under the MIT License. This means you are free to:</p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <ul className="list-disc pl-6 space-y-1">
                                                    <li>Use the library in personal and commercial projects</li>
                                                    <li>Modify the source code</li>
                                                </ul>
                                                <ul className="list-disc pl-6 space-y-1">
                                                    <li>Distribute the library</li>
                                                    <li>Create derivative works</li>
                                                </ul>
                                            </div>
                                            <p className="mt-4">
                                                The full license text is available in our{' '}
                                                <a
                                                    href="https://github.com/akitectio/aki-ui/blob/main/LICENSE"
                                                    className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    GitHub repository
                                                </a>.
                                            </p>
                                        </section>

                                        <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                            <h2 className="text-2xl font-bold mb-4">Acceptable Use</h2>
                                            <p className="mb-4">You agree to use Aki UI only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <ul className="list-disc pl-6 space-y-1">
                                                    <li>Use the service for any illegal or unauthorized purpose</li>
                                                    <li>Violate any laws or regulations</li>
                                                    <li>Infringe upon the rights of others</li>
                                                </ul>
                                                <ul className="list-disc pl-6 space-y-1">
                                                    <li>Upload malicious code or content</li>
                                                    <li>Attempt to gain unauthorized access to our systems</li>
                                                    <li>Interfere with or disrupt the service</li>
                                                </ul>
                                            </div>
                                        </section>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                                <h2 className="text-xl font-bold mb-4">Intellectual Property</h2>
                                                <p className="mb-4 leading-relaxed">
                                                    While the Aki UI library is open-source under the MIT License, certain trademarks, service marks,
                                                    and logos used in connection with our services may be owned by Akitect.io or third parties.
                                                </p>
                                                <p className="leading-relaxed">
                                                    The "Aki UI" name and logo are trademarks of Akitect.io. You may not use these trademarks without
                                                    our prior written consent.
                                                </p>
                                            </section>

                                            <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                                <h2 className="text-xl font-bold mb-4">Disclaimers</h2>
                                                <p className="mb-4">Aki UI is provided "as is" without any warranties, express or implied. We do not warrant that:</p>
                                                <ul className="list-disc pl-6 space-y-1 text-sm">
                                                    <li>The service will be uninterrupted or error-free</li>
                                                    <li>The service will meet your specific requirements</li>
                                                    <li>All errors will be corrected</li>
                                                    <li>The service is free of viruses or harmful components</li>
                                                </ul>
                                            </section>
                                        </div>

                                        <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                                            <p className="leading-relaxed">
                                                In no event shall Akitect.io be liable for any indirect, incidental, special, consequential, or punitive
                                                damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                                                resulting from your use of the service.
                                            </p>
                                        </section>

                                        <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
                                            <p className="mb-4">Our service may integrate with third-party services, including:</p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <ul className="list-disc pl-6 space-y-1">
                                                    <li>GitHub (for repository hosting)</li>
                                                    <li>NPM (for package distribution)</li>
                                                </ul>
                                                <ul className="list-disc pl-6 space-y-1">
                                                    <li>Vercel (for website hosting)</li>
                                                    <li>Various AI services for MCP integration</li>
                                                </ul>
                                            </div>
                                            <p className="mt-4">
                                                These third-party services have their own terms of service, and we are not responsible for their terms or actions.
                                            </p>
                                        </section>

                                        <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                            <h2 className="text-2xl font-bold mb-4">Privacy</h2>
                                            <p className="leading-relaxed">
                                                Your privacy is important to us. Please review our{' '}
                                                <a
                                                    href="/privacy"
                                                    className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200"
                                                >
                                                    Privacy Policy
                                                </a>{' '}
                                                to understand how we collect and use your information.
                                            </p>
                                        </section>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                                <h2 className="text-xl font-bold mb-4">Support and Community</h2>
                                                <p className="mb-4">
                                                    While we strive to provide helpful documentation and examples, we do not guarantee technical support.
                                                    However, we encourage community participation through:
                                                </p>
                                                <ul className="list-disc pl-6 space-y-1 text-sm">
                                                    <li>GitHub Issues for bug reports</li>
                                                    <li>GitHub Discussions for questions and feedback</li>
                                                    <li>Community contributions and pull requests</li>
                                                </ul>
                                            </section>

                                            <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                                <h2 className="text-xl font-bold mb-4">Modifications to Terms</h2>
                                                <p className="leading-relaxed">
                                                    We reserve the right to modify these Terms at any time. We will notify users of any material changes
                                                    by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the
                                                    service after any such changes constitutes your acceptance of the new Terms.
                                                </p>
                                            </section>
                                        </div>

                                        <div className="grid md:grid-cols-3 gap-6">
                                            <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                                <h2 className="text-lg font-bold mb-4">Termination</h2>
                                                <p className="text-sm leading-relaxed">
                                                    We may terminate or suspend your access to our service immediately, without prior notice or liability,
                                                    if you breach these Terms.
                                                </p>
                                            </section>

                                            <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                                <h2 className="text-lg font-bold mb-4">Governing Law</h2>
                                                <p className="text-sm leading-relaxed">
                                                    These Terms shall be governed by and construed in accordance with the laws of Vietnam, without regard
                                                    to its conflict of law provisions.
                                                </p>
                                            </section>

                                            <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                                <h2 className="text-lg font-bold mb-4">Open Source Attribution</h2>
                                                <p className="text-sm leading-relaxed">
                                                    Aki UI is built with and depends on various open-source libraries. We are grateful to the open-source
                                                    community and acknowledge all contributors and maintainers of the libraries we use.
                                                </p>
                                            </section>
                                        </div>

                                        <section className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 rounded-xl p-6">
                                            <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-200">Contact Information</h2>
                                            <p className="mb-4 text-green-700 dark:text-green-300">
                                                If you have any questions about these Terms, please contact us:
                                            </p>
                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div className="flex items-center space-x-2">
                                                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                    <a href="mailto:duy@akitect.io" className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200">
                                                        duy@akitect.io
                                                    </a>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                    </svg>
                                                    <a href="https://github.com/akitectio/aki-ui" className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200">
                                                        GitHub
                                                    </a>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                                                    </svg>
                                                    <a href="https://akitect.io" className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200">
                                                        akitect.io
                                                    </a>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </PageHeader>
            </div>
        </div>
    )
}
