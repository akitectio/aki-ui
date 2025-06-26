import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from '../lib/components';

const meta: Meta<typeof Pagination> = {
    title: 'Components/Pagination',
    component: Pagination,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        totalPages: {
            control: 'number',
            description: 'The total number of pages',
        },
        currentPage: {
            control: 'number',
            description: 'The current active page (1-indexed)',
        },
        maxVisiblePages: {
            control: 'number',
            description: 'The maximum number of page buttons to show',
        },
        showFirstLast: {
            control: 'boolean',
            description: 'Whether to show the first and last page buttons',
        },
        showPrevNext: {
            control: 'boolean',
            description: 'Whether to show the previous and next page buttons',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'The size of the pagination buttons',
        },
    },
};

export default meta;

// Interactive pagination requires state
export const Basic = {
    render: () => {
        const [page, setPage] = useState(1);
        return (
            <Pagination
                totalPages={10}
                currentPage={page}
                onPageChange={setPage}
            />
        );
    }
};

export const Small = {
    render: () => {
        const [page, setPage] = useState(1);
        return (
            <Pagination
                totalPages={10}
                currentPage={page}
                onPageChange={setPage}
                size="sm"
            />
        );
    }
};

export const Large = {
    render: () => {
        const [page, setPage] = useState(1);
        return (
            <Pagination
                totalPages={10}
                currentPage={page}
                onPageChange={setPage}
                size="lg"
            />
        );
    }
};

export const WithoutFirstLast = {
    render: () => {
        const [page, setPage] = useState(1);
        return (
            <Pagination
                totalPages={10}
                currentPage={page}
                onPageChange={setPage}
                showFirstLast={false}
            />
        );
    }
};

export const WithoutPrevNext = {
    render: () => {
        const [page, setPage] = useState(1);
        return (
            <Pagination
                totalPages={10}
                currentPage={page}
                onPageChange={setPage}
                showPrevNext={false}
            />
        );
    }
};

export const LimitedVisiblePages = {
    render: () => {
        const [page, setPage] = useState(1);
        return (
            <Pagination
                totalPages={20}
                currentPage={page}
                onPageChange={setPage}
                maxVisiblePages={3}
            />
        );
    }
};

export const ManyPages = {
    render: () => {
        const [page, setPage] = useState(1);
        return (
            <Pagination
                totalPages={100}
                currentPage={page}
                onPageChange={setPage}
                maxVisiblePages={5}
            />
        );
    }
};
