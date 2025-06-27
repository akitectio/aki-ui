import React from 'react';
import { render, screen, fireEvent, userEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import InputGroup, { InputLeftAddon, InputRightAddon, InputLeftElement, InputRightElement } from '../InputGroup';
import Input from '../../Input';

describe('InputGroup', () => {
    it('renders basic input group with addons', () => {
        render(
            <InputGroup>
                <InputLeftAddon>https://</InputLeftAddon>
                <Input placeholder="www.example.com" />
                <InputRightAddon>.com</InputRightAddon>
            </InputGroup>
        );

        expect(screen.getByText('https://')).toBeInTheDocument();
        expect(screen.getByText('.com')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('www.example.com')).toBeInTheDocument();
    });

    it('renders input group with elements', () => {
        const SearchIcon = () => <svg data-testid="search-icon" />;

        render(
            <InputGroup>
                <InputLeftElement>
                    <SearchIcon />
                </InputLeftElement>
                <Input placeholder="Search..." />
                <InputRightElement>
                    <button data-testid="clear-btn">Clear</button>
                </InputRightElement>
            </InputGroup>
        );

        expect(screen.getByTestId('search-icon')).toBeInTheDocument();
        expect(screen.getByTestId('clear-btn')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });

    it('applies correct size classes', () => {
        const { container } = render(
            <InputGroup size="lg">
                <InputLeftElement>
                    <span>Icon</span>
                </InputLeftElement>
                <Input placeholder="Large input" />
            </InputGroup>
        );

        // The InputGroup should apply large size padding classes to the input
        const input = screen.getByPlaceholderText('Large input');
        expect(input).toHaveClass('pl-12'); // Large size left padding
    });

    it('supports full width', () => {
        const { container } = render(
            <InputGroup fullWidth>
                <Input placeholder="Full width input" />
            </InputGroup>
        );

        const inputGroup = container.firstChild;
        expect(inputGroup).toHaveClass('w-full');
    });

    it('handles pointer events on elements', () => {
        const handleClick = vi.fn();

        render(
            <InputGroup>
                <Input placeholder="Search..." />
                <InputRightElement pointerEvents>
                    <button onClick={handleClick}>Click me</button>
                </InputRightElement>
            </InputGroup>
        );

        const button = screen.getByText('Click me');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies border radius adjustments with addons', () => {
        render(
            <InputGroup>
                <InputLeftAddon>$</InputLeftAddon>
                <Input placeholder="Amount" />
                <InputRightAddon>USD</InputRightAddon>
            </InputGroup>
        );

        const input = screen.getByPlaceholderText('Amount');
        expect(input).toHaveClass('rounded-l-none');
        expect(input).toHaveClass('rounded-r-none');
    });
});

describe('InputLeftAddon', () => {
    it('renders with correct styling', () => {
        render(<InputLeftAddon>$</InputLeftAddon>);

        const addon = screen.getByText('$');
        expect(addon).toHaveClass('inline-flex', 'items-center', 'px-3', 'bg-gray-50', 'rounded-l-md');
    });
});

describe('InputRightAddon', () => {
    it('renders with correct styling', () => {
        render(<InputRightAddon>USD</InputRightAddon>);

        const addon = screen.getByText('USD');
        expect(addon).toHaveClass('inline-flex', 'items-center', 'px-3', 'bg-gray-50', 'rounded-r-md');
    });
});

describe('InputLeftElement', () => {
    it('renders with correct positioning', () => {
        render(<InputLeftElement>Icon</InputLeftElement>);

        const element = screen.getByText('Icon');
        expect(element).toHaveClass('absolute', 'inset-y-0', 'left-0', 'pointer-events-none');
    });

    it('supports pointer events', () => {
        render(<InputLeftElement pointerEvents>Clickable</InputLeftElement>);

        const element = screen.getByText('Clickable');
        expect(element).toHaveClass('cursor-pointer');
        expect(element).not.toHaveClass('pointer-events-none');
    });
});

describe('InputRightElement', () => {
    it('renders with correct positioning', () => {
        render(<InputRightElement>Icon</InputRightElement>);

        const element = screen.getByText('Icon');
        expect(element).toHaveClass('absolute', 'inset-y-0', 'right-0', 'pointer-events-none');
    });

    it('supports pointer events', () => {
        render(<InputRightElement pointerEvents>Clickable</InputRightElement>);

        const element = screen.getByText('Clickable');
        expect(element).toHaveClass('cursor-pointer');
        expect(element).not.toHaveClass('pointer-events-none');
    });
});
