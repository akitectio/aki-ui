import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';

// Mock window.innerWidth for resize tests
Object.defineProperty(window, 'innerWidth', {
  writable: true,
  configurable: true,
  value: 1024,
});

describe('Navbar', () => {
  it('renders correctly', () => {
    render(
      <Navbar>
        <Navbar.Brand>Test Brand</Navbar.Brand>
        <Navbar.Item href="/">Home</Navbar.Item>
        <Navbar.Item href="/about">About</Navbar.Item>
      </Navbar>
    );

    expect(screen.getByText('Test Brand')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('toggles mobile menu when toggle button is clicked', () => {
    render(
      <Navbar>
        <Navbar.Brand>Test Brand</Navbar.Brand>
        <Navbar.Item href="/">Home</Navbar.Item>
        <Navbar.Item href="/about">About</Navbar.Item>
      </Navbar>
    );

    const toggleButton = screen.getByLabelText('Toggle navigation menu');
    expect(toggleButton).toBeInTheDocument();

    // Initially, mobile menu should be collapsed (not visible)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

    // Click to open
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    // Click to close
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes mobile menu when Escape key is pressed', () => {
    render(
      <Navbar>
        <Navbar.Brand>Test Brand</Navbar.Brand>
        <Navbar.Item href="/">Home</Navbar.Item>
      </Navbar>
    );

    const toggleButton = screen.getByLabelText('Toggle navigation menu');
    
    // Open the menu
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    // Press Escape key
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes mobile menu when clicking outside', () => {
    const { container } = render(
      <div>
        <Navbar>
          <Navbar.Brand>Test Brand</Navbar.Brand>
          <Navbar.Item href="/">Home</Navbar.Item>
        </Navbar>
        <div data-testid="outside">Outside element</div>
      </div>
    );

    const toggleButton = screen.getByLabelText('Toggle navigation menu');
    const outsideElement = screen.getByTestId('outside');
    
    // Open the menu
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    // Click outside
    fireEvent.mouseDown(outsideElement);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('shows hamburger icon when menu is closed and X icon when open', () => {
    render(
      <Navbar>
        <Navbar.Brand>Test Brand</Navbar.Brand>
        <Navbar.Item href="/">Home</Navbar.Item>
      </Navbar>
    );

    const toggleButton = screen.getByLabelText('Toggle navigation menu');
    
    // Initially should show "Open main menu"
    expect(screen.getByText('Open main menu')).toBeInTheDocument();

    // Click to open
    fireEvent.click(toggleButton);
    expect(screen.getByText('Close main menu')).toBeInTheDocument();
  });

  it('calls onToggle callback when toggle button is clicked', () => {
    const onToggle = jest.fn();
    
    render(
      <Navbar onToggle={onToggle}>
        <Navbar.Brand>Test Brand</Navbar.Brand>
        <Navbar.Item href="/">Home</Navbar.Item>
      </Navbar>
    );

    const toggleButton = screen.getByLabelText('Toggle navigation menu');
    fireEvent.click(toggleButton);

    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it('applies correct variant classes', () => {
    const { rerender } = render(
      <Navbar variant="primary" data-testid="navbar">
        <Navbar.Brand>Test</Navbar.Brand>
      </Navbar>
    );

    const navbar = screen.getByTestId('navbar');
    expect(navbar).toHaveClass('bg-blue-600', 'text-white');

    rerender(
      <Navbar variant="dark" data-testid="navbar">
        <Navbar.Brand>Test</Navbar.Brand>
      </Navbar>
    );

    expect(navbar).toHaveClass('bg-gray-900', 'text-white');
  });
});
