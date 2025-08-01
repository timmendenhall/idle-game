import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LinkButton } from './LinkButton';
import { Routes } from '@/constants';

describe('LinkButton', () => {
    it('renders children', () => {
        render(<LinkButton href={Routes.HOME}>Click Me</LinkButton>);
        expect(
            screen.getByRole('link', { name: 'Click Me' }),
        ).toBeInTheDocument();
    });

    it('defaults to primary variant', () => {
        render(<LinkButton href={Routes.HOME}>Primary</LinkButton>);
        const btn = screen.getByRole('link', { name: 'Primary' });
        expect(btn.className).toMatch(/bg-primary-800/);
    });

    it('uses secondary variant', () => {
        render(
            <LinkButton href={Routes.HOME} variant="secondary">
                Secondary
            </LinkButton>,
        );
        const btn = screen.getByRole('link', { name: 'Secondary' });
        expect(btn.className).toMatch(/bg-secondary-800/);
    });
});
