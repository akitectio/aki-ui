'use client'

import { CodeBlock } from '@/components/CodeBlock'

export default function SkeletonPage() {
    return (
        <div className="space-y-8">
            <section>
                <h2 className="text-3xl font-bold mb-4">Skeleton</h2>
                <p className="mb-4">
                    Skeleton is a placeholder component used to display the loading state of content before the actual data is loaded, providing users with a visual indication of the page structure.
                </p>

                <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
                    <h3 className="text-lg font-semibold mb-3">Basic Skeleton Example</h3>
                    <div className="animate-pulse bg-gray-200 h-4 w-3/4 rounded dark:bg-gray-700"></div>
                </div>

                <CodeBlock
                    code={`import { Skeleton } from "aki-ui";

export default function SkeletonExample() {
  return (
    <Skeleton variant="text" width="100%" height="1rem" />
  );
}`}
                    language="jsx"
                />
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Variants</h2>
                <p className="mb-4">
                    Skeletons come in different variants to match the content they're replacing.
                </p>

                <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-sm font-medium mb-2">Text</h3>
                            <div className="animate-pulse bg-gray-200 h-4 w-3/4 rounded dark:bg-gray-700"></div>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium mb-2">Circular</h3>
                            <div className="animate-pulse bg-gray-200 h-12 w-12 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium mb-2">Rectangular</h3>
                            <div className="animate-pulse bg-gray-200 h-20 w-full rounded-none dark:bg-gray-700"></div>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium mb-2">Rounded</h3>
                            <div className="animate-pulse bg-gray-200 h-20 w-full rounded-lg dark:bg-gray-700"></div>
                        </div>
                    </div>
                </div>

                <CodeBlock
                    code={`import { Skeleton } from "aki-ui";

export default function SkeletonVariants() {
  return (
    <div className="space-y-4">
      <Skeleton variant="text" width="75%" height="1rem" />
      <Skeleton variant="circular" width={48} height={48} />
      <Skeleton variant="rectangular" width="100%" height={80} />
      <Skeleton variant="rounded" width="100%" height={80} borderRadius="0.5rem" />
    </div>
  );
}`}
                    language="jsx"
                />
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Text Skeleton with Multiple Lines</h2>
                <p className="mb-4">
                    Create text skeletons with multiple lines for paragraph placeholders.
                </p>

                <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
                    <div className="space-y-2">
                        <div className="animate-pulse bg-gray-200 h-4 w-full rounded dark:bg-gray-700"></div>
                        <div className="animate-pulse bg-gray-200 h-4 w-full rounded dark:bg-gray-700"></div>
                        <div className="animate-pulse bg-gray-200 h-4 w-3/4 rounded dark:bg-gray-700"></div>
                    </div>
                </div>

                <CodeBlock
                    code={`import { Skeleton } from "aki-ui";

export default function MultiLineSkeletonExample() {
  return (
    <Skeleton 
      variant="text" 
      width="100%" 
      lines={3}
      gap="0.5rem"
      shortenLastLine={true}
    />
  );
}`}
                    language="jsx"
                />
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Animation Types</h2>
                <p className="mb-4">
                    Skeletons can have different animation styles or no animation at all.
                </p>

                <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-medium mb-2">Pulse Animation</h3>
                            <div className="animate-pulse bg-gray-200 h-4 w-3/4 rounded dark:bg-gray-700"></div>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium mb-2">Wave Animation (simulated)</h3>
                            <div className="relative overflow-hidden">
                                <div className="bg-gray-200 h-4 w-3/4 rounded dark:bg-gray-700"></div>
                                <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium mb-2">No Animation</h3>
                            <div className="bg-gray-200 h-4 w-3/4 rounded dark:bg-gray-700"></div>
                        </div>
                    </div>
                </div>

                <CodeBlock
                    code={`import { Skeleton } from "aki-ui";

export default function SkeletonAnimations() {
  return (
    <div className="space-y-4">
      <Skeleton 
        variant="text" 
        width="75%" 
        animation="pulse" 
      />
      <Skeleton 
        variant="text" 
        width="75%" 
        animation="wave" 
      />
      <Skeleton 
        variant="text" 
        width="75%" 
        animation={false} 
      />
    </div>
  );
}`}
                    language="jsx"
                />
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Complex UI Examples</h2>
                <p className="mb-4">
                    Skeletons can be combined to create placeholders for complex UI elements.
                </p>

                <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
                    <div className="border rounded-lg overflow-hidden">
                        <div className="animate-pulse bg-gray-200 h-40 w-full dark:bg-gray-700"></div>
                        <div className="p-4 space-y-4">
                            <div className="animate-pulse bg-gray-200 h-5 w-2/3 rounded dark:bg-gray-700"></div>
                            <div className="space-y-2">
                                <div className="animate-pulse bg-gray-200 h-4 w-full rounded dark:bg-gray-700"></div>
                                <div className="animate-pulse bg-gray-200 h-4 w-full rounded dark:bg-gray-700"></div>
                                <div className="animate-pulse bg-gray-200 h-4 w-3/4 rounded dark:bg-gray-700"></div>
                            </div>
                            <div className="flex gap-2">
                                <div className="animate-pulse bg-gray-200 h-8 w-20 rounded dark:bg-gray-700"></div>
                                <div className="animate-pulse bg-gray-200 h-8 w-20 rounded dark:bg-gray-700"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <CodeBlock
                    code={`import { Skeleton, Card } from "aki-ui";

export default function SkeletonCard() {
  return (
    <Card className="w-full">
      <Skeleton variant="rounded" height={160} />
      <div className="p-4 space-y-4">
        <Skeleton variant="text" width="70%" height="1.25rem" />
        <Skeleton variant="text" lines={3} />
        <div className="flex gap-2">
          <Skeleton variant="rounded" width={80} height={32} />
          <Skeleton variant="rounded" width={80} height={32} />
        </div>
      </div>
    </Card>
  );
}`}
                    language="jsx"
                />
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Skeleton Container</h2>
                <p className="mb-4">
                    Use the SkeletonContainer to conditionally show a skeleton or the actual content based on loading state.
                </p>

                <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
                    <div>
                        <p className="text-sm font-medium mb-2">Toggle between states:</p>
                        <div className="p-4 border rounded-lg">
                            <div className="animate-pulse bg-gray-200 h-6 w-1/2 rounded dark:bg-gray-700 mb-3"></div>
                            <div className="space-y-2">
                                <div className="animate-pulse bg-gray-200 h-4 w-full rounded dark:bg-gray-700"></div>
                                <div className="animate-pulse bg-gray-200 h-4 w-full rounded dark:bg-gray-700"></div>
                                <div className="animate-pulse bg-gray-200 h-4 w-3/4 rounded dark:bg-gray-700"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <CodeBlock
                    code={`import { useState, useEffect } from 'react';
import { SkeletonContainer, Skeleton, Card } from "aki-ui";

export default function LoadingExample() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div>
      <button 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setLoading(true)}
      >
        Reload
      </button>
      
      <SkeletonContainer
        loading={loading}
        fallback={
          <Card className="p-4">
            <h2 className="text-xl font-bold">Product Details</h2>
            <div className="mt-2">
              <p>Awesome product with amazing features!</p>
              <p className="mt-2">
                This product will revolutionize the way you work and play.
              </p>
            </div>
          </Card>
        }
      >
        <Card className="p-4">
          <Skeleton variant="text" width="60%" height="1.5rem" />
          <div className="mt-2">
            <Skeleton variant="text" lines={3} />
          </div>
        </Card>
      </SkeletonContainer>
    </div>
  );
}`}
                    language="jsx"
                />
            </section>

            <section className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Props Reference</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Prop</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Type</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Default</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Description</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">variant</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{'text, circular, rectangular, rounded'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{'text'}</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Type of skeleton to render</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">width</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">number | string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{'100%'}</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Width of the skeleton (number in px or CSS value)</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">height</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">number | string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{'1rem'}</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Height of the skeleton (number in px or CSS value)</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">lines</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">number</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">1</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Number of lines for text variant</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">animation</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{'boolean, pulse, wave'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{'pulse'}</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Animation type</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">shortenLastLine</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">false</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Whether to make the last line shorter</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">gap</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{'0.5rem'}</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Gap between multiple lines</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">color</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Custom color for the skeleton</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">borderRadius</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Border radius for rounded variant</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="mt-8">
                <h3 className="text-xl font-bold mb-4">SkeletonContainer Props</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Prop</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Type</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Default</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Description</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">loading</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">true</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Whether to show the skeleton or the actual content</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">children</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">ReactNode</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Skeleton UI to show during loading</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">fallback</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">ReactNode</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Actual content to show when loading is complete</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}