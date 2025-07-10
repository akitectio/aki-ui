// Framework Icons Component
import React from 'react';
import Image from 'next/image';

export const ReactIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <Image
        src="/icons-fw/react.png"
        alt="React"
        width={32}
        height={32}
        className={className}
    />
);

export const NextJSIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <Image
        src="/icons-fw/nextjs.png"
        alt="Next.js"
        width={32}
        height={32}
        className={className}
    />
);

export const RemixIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <Image
        src="/icons-fw/remix.png"
        alt="Remix"
        width={32}
        height={32}
        className={className}
    />
);

export const GatsbyIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <Image
        src="/icons-fw/gatsby.svg"
        alt="Gatsby"
        width={32}
        height={32}
        className={className}
    />
);

export const ViteIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <Image
        src="/icons-fw/vitejs.png"
        alt="Vite"
        width={32}
        height={32}
        className={className}
    />
);

export const CRAIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <Image
        src="/icons-fw/craco.png"
        alt="Create React App"
        width={32}
        height={32}
        className={className}
    />
);

export const AngularIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <Image
        src="/icons-fw/angular.webp"
        alt="Angular"
        width={32}
        height={32}
        className={className}
    />
);
