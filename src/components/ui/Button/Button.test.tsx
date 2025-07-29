import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
    it('renders children', () => {
        render(<Button>Click Me</Button>);
        expect(
            screen.getByRole('button', { name: 'Click Me' }),
        ).toBeInTheDocument();
    });

    it('defaults to primary variant', () => {
        render(<Button>Primary</Button>);
        const btn = screen.getByRole('button', { name: 'Primary' });
        expect(btn.className).toMatch(/bg-sky-700/);
    });

    it('uses secondary variant', () => {
        render(<Button variant="secondary">Secondary</Button>);
        const btn = screen.getByRole('button', { name: 'Secondary' });
        expect(btn.className).toMatch(/bg-rose-700/);
    });

    it('calls onClick handler when clicked', async () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click</Button>);

        const btn = screen.getByRole('button', { name: 'Click' });
        await userEvent.click(btn);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
