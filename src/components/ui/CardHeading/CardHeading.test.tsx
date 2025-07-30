import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CardHeading } from './CardHeading';

describe(CardHeading, () => {
    it('renders children', () => {
        render(<CardHeading>Card Test</CardHeading>);
        expect(screen.getByText('Card Test')).toBeInTheDocument();
    });
});
