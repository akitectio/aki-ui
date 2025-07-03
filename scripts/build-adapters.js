import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { build } from 'vite';
import react from '@vitejs/plugin-react';
import { existsSync, mkdirSync, unlinkSync, readdirSync, lstatSync } from 'fs';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to clean directory of unnecessary files
function cleanDirectory(dir) {
    const allowedFiles = ['index.js'];

    try {
        const files = readdirSync(dir);

        for (const file of files) {
            if (!allowedFiles.includes(file) && !file.startsWith('.')) {
                try {
                    const filePath = resolve(dir, file);
                    const stats = lstatSync(filePath);

                    if (stats.isFile()) {
                        unlinkSync(filePath);
                    }
                } catch (err) {
                    console.warn(`Could not remove file ${file}: ${err.message}`);
                }
            }
        }
    } catch (err) {
        console.warn(`Could not clean directory ${dir}: ${err.message}`);
    }
}

// Function to build adapters
async function buildAdapters() {
    console.log('Building adapters...');

    // Create adapters directory if it doesn't exist
    const distDir = resolve(__dirname, '../dist');
    const adaptersDir = resolve(distDir, 'adapters');
    const nextjsDir = resolve(adaptersDir, 'nextjs');

    if (!existsSync(adaptersDir)) {
        mkdirSync(adaptersDir, { recursive: true });
    }

    if (!existsSync(nextjsDir)) {
        mkdirSync(nextjsDir, { recursive: true });
    }

    // Build nextjs adapter
    await build({
        configFile: false,
        plugins: [react()],
        build: {
            lib: {
                entry: resolve(__dirname, '../src/lib/adapters/nextjs/index.ts'),
                formats: ['es'],
                fileName: () => 'index.js',
            },
            outDir: nextjsDir,
            emptyOutDir: true,
            rollupOptions: {
                external: [
                    'react',
                    'react-dom',
                    'react/jsx-runtime',
                    '@heroicons/react',
                    'chart.js',
                    'react-chartjs-2',
                ],
            },
        },
        resolve: {
            alias: [
                { find: '@', replacement: '/src' },
                { find: '@components', replacement: '/src/lib/components' },
                { find: '@theme', replacement: '/src/lib/theme' },
                { find: '@styles', replacement: '/src/styles' },
                { find: '@utils', replacement: '/src/lib/utils' },
                { find: '@hooks', replacement: '/src/lib/hooks' },
                { find: '@types', replacement: '/src/lib/types' },
            ],
        },
    });

    // Build root adapters index
    await build({
        configFile: false,
        plugins: [react()],
        build: {
            lib: {
                entry: resolve(__dirname, '../src/lib/adapters/index.ts'),
                formats: ['es'],
                fileName: () => 'index.js',
            },
            outDir: adaptersDir,
            emptyOutDir: false,
            rollupOptions: {
                external: [
                    'react',
                    'react-dom',
                    'react/jsx-runtime',
                    './nextjs',
                ],
            },
        },
    });

    // Clean up unnecessary files
    cleanDirectory(nextjsDir);
    cleanDirectory(adaptersDir);

    console.log('Adapters built successfully!');
}

buildAdapters().catch((error) => {
    console.error('Error building adapters:', error);
    process.exit(1);
});
