import React from 'react';
import { cn } from '../../utils';

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    className?: string;
    children: React.ReactNode;
}

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    className?: string;
    children: React.ReactNode;
}

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    className?: string;
    children: React.ReactNode;
}

export interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    className?: string;
    children: React.ReactNode;
}

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    className?: string;
    children: React.ReactNode;
}

export interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
    className?: string;
    children: React.ReactNode;
}

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
    className?: string;
    children: React.ReactNode;
}

export interface TableCaptionProps extends React.HTMLAttributes<HTMLTableCaptionElement> {
    className?: string;
    children: React.ReactNode;
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
    ({ className, children, ...props }, ref) => (
        <div className="relative w-full overflow-auto">
            <table
                ref={ref}
                className={cn('w-full caption-bottom text-sm', className)}
                {...props}
            >
                {children}
            </table>
        </div>
    )
);
Table.displayName = 'Table';

export const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
    ({ className, children, ...props }, ref) => (
        <thead
            ref={ref}
            className={cn('[&_tr]:border-b', className)}
            {...props}
        >
            {children}
        </thead>
    )
);
TableHeader.displayName = 'TableHeader';

export const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
    ({ className, children, ...props }, ref) => (
        <tbody
            ref={ref}
            className={cn('[&_tr:last-child]:border-0', className)}
            {...props}
        >
            {children}
        </tbody>
    )
);
TableBody.displayName = 'TableBody';

export const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
    ({ className, children, ...props }, ref) => (
        <tfoot
            ref={ref}
            className={cn('border-t bg-muted/50 font-medium [&>tr]:last:border-b-0', className)}
            {...props}
        >
            {children}
        </tfoot>
    )
);
TableFooter.displayName = 'TableFooter';

export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
    ({ className, children, ...props }, ref) => (
        <tr
            ref={ref}
            className={cn(
                'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
                className
            )}
            {...props}
        >
            {children}
        </tr>
    )
);
TableRow.displayName = 'TableRow';

export const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
    ({ className, children, ...props }, ref) => (
        <th
            ref={ref}
            className={cn(
                'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
                className
            )}
            {...props}
        >
            {children}
        </th>
    )
);
TableHead.displayName = 'TableHead';

export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
    ({ className, children, ...props }, ref) => (
        <td
            ref={ref}
            className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
            {...props}
        >
            {children}
        </td>
    )
);
TableCell.displayName = 'TableCell';

export const TableCaption = React.forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
    ({ className, children, ...props }, ref) => (
        <caption
            ref={ref}
            className={cn('mt-4 text-sm text-muted-foreground', className)}
            {...props}
        >
            {children}
        </caption>
    )
);
TableCaption.displayName = 'TableCaption';

// Create compound component
const TableComponent = Table as typeof Table & {
    Header: typeof TableHeader;
    Body: typeof TableBody;
    Footer: typeof TableFooter;
    Row: typeof TableRow;
    Head: typeof TableHead;
    Cell: typeof TableCell;
    Caption: typeof TableCaption;
};

TableComponent.Header = TableHeader;
TableComponent.Body = TableBody;
TableComponent.Footer = TableFooter;
TableComponent.Row = TableRow;
TableComponent.Head = TableHead;
TableComponent.Cell = TableCell;
TableComponent.Caption = TableCaption;

export { TableComponent as default };
