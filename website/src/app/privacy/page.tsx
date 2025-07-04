'use client'

import { PageHeader } from '@/components/PageHeader'
import { Card } from '@akitectio/aki-ui'

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-900">
            <div className="max-w-4xl mx-auto px-4 py-16">
                <PageHeader
                    title="Privacy Policy"
                    description="Learn how we collect, use, and protect your personal information."
                >
                    <div className="space-y-8">
                        <Card className="relative overflow-hidden border-0 shadow-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20"></div>
                            <div className="relative p-8 lg:p-12">
                                <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Document Information</h2>
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
                            <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-headings:font-bold">
                                <div className="grid gap-8">{/* Content sections will go here */}

                                    <div className="grid gap-8">
                                        <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                                <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
                                                    <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                                                </span>
                                                Introduction
                                            </h2>
                                            <p className="mb-4 leading-relaxed">
                                                Welcome to Aki UI. We are committed to protecting your privacy and ensuring the security of your personal information.
                                                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                                                and use our services.
                                            </p>
                                        </section>

                                        <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                                <span className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-3">
                                                    <span className="text-green-600 dark:text-green-400 font-bold">2</span>
                                                </span>
                                                Information We Collect
                                            </h2>

                                            <div className="space-y-6">
                                                <div className="border-l-4 border-blue-400 pl-4">
                                                    <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                                                    <p className="mb-4">
                                                        We may collect personal information that you voluntarily provide to us when you:
                                                    </p>
                                                    <ul className="list-disc pl-6 mb-4 space-y-1">
                                                        <li>Contact us through our website</li>
                                                        <li>Subscribe to our newsletter</li>
                                                        <li>Participate in community discussions</li>
                                                        <li>Report issues or bugs</li>
                                                    </ul>
                                                </div>

                                                <div className="border-l-4 border-purple-400 pl-4">
                                                    <h3 className="text-xl font-semibold mb-3">Usage Information</h3>
                                                    <p className="mb-4">
                                                        We automatically collect certain information about your device and usage patterns, including:
                                                    </p>
                                                    <ul className="list-disc pl-6 mb-4 space-y-1">
                                                        <li>IP address and location information</li>
                                                        <li>Browser type and version</li>
                                                        <li>Pages visited and time spent</li>
                                                        <li>Device type and operating system</li>
                                                    </ul>
                                                </div>

                                                <div className="border-l-4 border-orange-400 pl-4">
                                                    <h3 className="text-xl font-semibold mb-3">GitHub Integration</h3>
                                                    <p className="mb-4">
                                                        When you interact with our GitHub repository, your GitHub username and public profile information may be collected
                                                        in accordance with GitHub's privacy policy.
                                                    </p>
                                                </div>
                                            </div>
                                        </section>

                                        <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                                <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-3">
                                                    <span className="text-purple-600 dark:text-purple-400 font-bold">3</span>
                                                </span>
                                                How We Use Your Information
                                            </h2>
                                            <p className="mb-4">
                                                We use the information we collect to:
                                            </p>
                                            <ul className="list-disc pl-6 mb-4 space-y-1">
                                                <li>Provide and maintain our services</li>
                                                <li>Improve our website and components</li>
                                                <li>Respond to your inquiries and support requests</li>
                                                <li>Send you updates about Aki UI (with your consent)</li>
                                                <li>Analyze usage patterns to enhance user experience</li>
                                                <li>Protect against fraud and security threats</li>
                                            </ul>
                                        </section>

                                        <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                                <span className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mr-3">
                                                    <span className="text-orange-600 dark:text-orange-400 font-bold">4</span>
                                                </span>
                                                Information Sharing
                                            </h2>
                                            <p className="mb-4">
                                                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
                                            </p>
                                            <ul className="list-disc pl-6 mb-4 space-y-1">
                                                <li>To trusted service providers who assist us in operating our website</li>
                                                <li>When required by law or to protect our rights</li>
                                                <li>In connection with a merger, acquisition, or sale of assets</li>
                                            </ul>
                                        </section>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                                <h2 className="text-xl font-bold mb-4">Data Security</h2>
                                                <p className="leading-relaxed">
                                                    We implement appropriate security measures to protect your personal information against unauthorized access,
                                                    alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic
                                                    storage is 100% secure.
                                                </p>
                                            </section>

                                            <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                                <h2 className="text-xl font-bold mb-4">Cookies and Tracking</h2>
                                                <p className="leading-relaxed">
                                                    We use cookies and similar tracking technologies to enhance your experience on our website. You can control
                                                    cookie settings through your browser preferences.
                                                </p>
                                            </section>
                                        </div>

                                        <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
                                            <p className="mb-4">
                                                Our website may contain links to third-party services, including:
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <ul className="list-disc pl-6 space-y-1">
                                                    <li>GitHub (for repository access)</li>
                                                    <li>NPM (for package distribution)</li>
                                                </ul>
                                                <ul className="list-disc pl-6 space-y-1">
                                                    <li>Vercel (for hosting)</li>
                                                    <li>Analytics services</li>
                                                </ul>
                                            </div>
                                            <p className="mt-4">
                                                These services have their own privacy policies, and we are not responsible for their practices.
                                            </p>
                                        </section>

                                        <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                                            <p className="mb-4">
                                                You have the right to:
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <ul className="list-disc pl-6 space-y-1">
                                                    <li>Access your personal information</li>
                                                    <li>Correct inaccurate information</li>
                                                    <li>Delete your personal information</li>
                                                </ul>
                                                <ul className="list-disc pl-6 space-y-1">
                                                    <li>Opt out of communications</li>
                                                    <li>Request data portability</li>
                                                </ul>
                                            </div>
                                        </section>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                                <h2 className="text-xl font-bold mb-4">Children's Privacy</h2>
                                                <p className="leading-relaxed">
                                                    Our services are not intended for children under 13 years of age. We do not knowingly collect personal
                                                    information from children under 13.
                                                </p>
                                            </section>

                                            <section className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6">
                                                <h2 className="text-xl font-bold mb-4">Changes to This Policy</h2>
                                                <p className="leading-relaxed">
                                                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                                                    Privacy Policy on this page and updating the "Last updated" date.
                                                </p>
                                            </section>
                                        </div>

                                        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl p-6">
                                            <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200">Contact Us</h2>
                                            <p className="mb-4 text-blue-700 dark:text-blue-300">
                                                If you have any questions about this Privacy Policy, please contact us:
                                            </p>
                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div className="flex items-center space-x-2">
                                                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                    <a href="mailto:duy@akitect.io" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
                                                        duy@akitect.io
                                                    </a>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                    </svg>
                                                    <a href="https://github.com/akitectio/aki-ui" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
                                                        GitHub
                                                    </a>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                                                    </svg>
                                                    <a href="https://akitect.io" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
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
