import React from 'react';

export interface PaginationProps {
    /**
     * The total number of pages
     */
    totalPages: number;

    /**
     * The current active page (1-indexed)
     */
    currentPage: number;

    /**
     * Callback function called when a page is clicked
     */
    onPageChange: (page: number) => void;

    /**
     * Additional CSS classes to apply to the pagination
     */
    className?: string;

    /**
     * The maximum number of page buttons to show
     * @default 5
     */
    maxVisiblePages?: number;

    /**
     * Whether to show the first and last page buttons
     * @default true
     */
    showFirstLast?: boolean;

    /**
     * Whether to show the previous and next page buttons
     * @default true
     */
    showPrevNext?: boolean;

    /**
     * The size of the pagination buttons
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';

    /**
     * Whether the pagination should have a rounded appearance
     * @default false
     */
    rounded?: boolean;

    /**
     * Labels for the navigation buttons
     */
    labels?: {
        first?: string;
        last?: string;
        previous?: string;
        next?: string;
    };
}

const Pagination: React.FC<PaginationProps> = ({
    totalPages,
    currentPage,
    onPageChange,
    className = '',
    maxVisiblePages = 5,
    showFirstLast = true,
    showPrevNext = true,
    size = 'md',
    rounded = false,
    labels = {
        first: '«',
        last: '»',
        previous: '‹',
        next: '›',
    },
}) => {
    // Validate current page
    const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages));

    // Calculate page range to display
    const getVisiblePageNumbers = () => {
        const halfVisible = Math.floor(maxVisiblePages / 2);
        let startPage = Math.max(validCurrentPage - halfVisible, 1);
        let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

        // Adjust start page if end page is at maximum
        if (endPage === totalPages) {
            startPage = Math.max(endPage - maxVisiblePages + 1, 1);
        }

        const pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    };

    const visiblePages = getVisiblePageNumbers();

    // Size classes
    const sizeClasses = {
        sm: 'h-8 w-8 text-xs',
        md: 'h-10 w-10 text-sm',
        lg: 'h-12 w-12 text-base',
    };

    // Button base classes
    const baseButtonClasses = `
    inline-flex items-center justify-center
    ${sizeClasses[size]}
    font-medium
    ${rounded ? 'rounded-full' : 'rounded-md'}
    focus:z-20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
  `;

    // Button appearance based on state
    const getButtonClasses = (page: number) => {
        if (page === validCurrentPage) {
            return `${baseButtonClasses} bg-blue-600 text-white border border-blue-600`;
        }
        return `${baseButtonClasses} bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700`;
    };

    // Helper for button click
    const handlePageClick = (page: number) => {
        if (page !== validCurrentPage && page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    // Disabled state classes
    const disabledClasses = 'opacity-50 cursor-not-allowed';

    return (
        <nav className={`flex items-center justify-center ${className}`} aria-label="Pagination">
            <ul className="flex space-x-1 rtl:space-x-reverse">
                {/* First page button */}
                {showFirstLast && (
                    <li>
                        <button
                            className={`${getButtonClasses(0)} ${validCurrentPage === 1 ? disabledClasses : ''}`}
                            onClick={() => handlePageClick(1)}
                            disabled={validCurrentPage === 1}
                            aria-label="Go to first page"
                        >
                            {labels.first}
                        </button>
                    </li>
                )}

                {/* Previous page button */}
                {showPrevNext && (
                    <li>
                        <button
                            className={`${getButtonClasses(0)} ${validCurrentPage === 1 ? disabledClasses : ''}`}
                            onClick={() => handlePageClick(validCurrentPage - 1)}
                            disabled={validCurrentPage === 1}
                            aria-label="Go to previous page"
                        >
                            {labels.previous}
                        </button>
                    </li>
                )}

                {/* Page numbers */}
                {visiblePages.map((page) => (
                    <li key={page}>
                        <button
                            className={getButtonClasses(page)}
                            onClick={() => handlePageClick(page)}
                            aria-current={page === validCurrentPage ? 'page' : undefined}
                            aria-label={`Page ${page}`}
                        >
                            {page}
                        </button>
                    </li>
                ))}

                {/* Next page button */}
                {showPrevNext && (
                    <li>
                        <button
                            className={`${getButtonClasses(0)} ${validCurrentPage === totalPages ? disabledClasses : ''}`}
                            onClick={() => handlePageClick(validCurrentPage + 1)}
                            disabled={validCurrentPage === totalPages}
                            aria-label="Go to next page"
                        >
                            {labels.next}
                        </button>
                    </li>
                )}

                {/* Last page button */}
                {showFirstLast && (
                    <li>
                        <button
                            className={`${getButtonClasses(0)} ${validCurrentPage === totalPages ? disabledClasses : ''}`}
                            onClick={() => handlePageClick(totalPages)}
                            disabled={validCurrentPage === totalPages}
                            aria-label="Go to last page"
                        >
                            {labels.last}
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Pagination;
