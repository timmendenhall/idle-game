import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Heading } from './Heading';

describe('<Heading />', () => {
    it('renders h1 by default', () => {
        render(<Heading>Hello</Heading>);
        const heading = screen.getByText('Hello');
        expect(heading.tagName).toBe('H1');
        expect(heading).toHaveClass('text-7xl');
    });

    it('renders h1 when a non-valid level is passed in', () => {
        // @ts-expect-error invalid level purposely sent
        render(<Heading level={42}>Hello</Heading>);
        const heading = screen.getByText('Hello');
        expect(heading.tagName).toBe('H1');
        expect(heading).toHaveClass('text-7xl');
    });

    it('renders h2 when level=2', () => {
        render(<Heading level={2}>Heading 2</Heading>);
        const heading = screen.getByText('Heading 2');
        expect(heading.tagName).toBe('H2');
        expect(heading).toHaveClass('text-6xl');
    });

    it('renders h3 when level=3', () => {
        render(<Heading level={3}>Heading 3</Heading>);
        const heading = screen.getByText('Heading 3');
        expect(heading.tagName).toBe('H3');
        expect(heading).toHaveClass('text-4xl');
    });

    it('renders h4 when level=4', () => {
        render(<Heading level={4}>Heading 4</Heading>);
        const heading = screen.getByText('Heading 4');
        expect(heading.tagName).toBe('H4');
        expect(heading).toHaveClass('text-2xl');
    });

    it('merges custom className with default', () => {
        render(
            <Heading level={2} className="font-bold">
                Styled
            </Heading>,
        );
        const heading = screen.getByText('Styled');
        expect(heading).toHaveClass('text-6xl');
        expect(heading).toHaveClass('font-bold');
    });
});
