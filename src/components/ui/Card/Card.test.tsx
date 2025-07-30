import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Card } from './Card';

describe('Card', () => {
    it('renders children', () => {
        render(<Card>Card Test</Card>);
        expect(screen.getByText('Card Test')).toBeInTheDocument();
    });
});
