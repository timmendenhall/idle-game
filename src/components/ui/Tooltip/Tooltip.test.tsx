import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tooltip } from './Tooltip';
import React from 'react';

describe('Tooltip', () => {
    it('does not render tooltip content by default', () => {
        render(
            <Tooltip content="Hello tooltip">
                <button>Hover me</button>
            </Tooltip>,
        );

        // Tooltip content should not be in DOM
        expect(screen.queryByText('Hello tooltip')).toBeNull();
    });

    it('shows tooltip content on hover', () => {
        render(
            <Tooltip content="Hello tooltip">
                <button>Hover me</button>
            </Tooltip>,
        );

        const trigger = screen.getByText('Hover me');
        fireEvent.mouseEnter(trigger);

        expect(screen.getByText('Hello tooltip')).toBeInTheDocument();
    });

    it('hides tooltip content after mouse leave', () => {
        render(
            <Tooltip content="Hello tooltip">
                <button>Hover me</button>
            </Tooltip>,
        );

        const trigger = screen.getByText('Hover me');

        fireEvent.mouseEnter(trigger);
        expect(screen.getByText('Hello tooltip')).toBeInTheDocument();

        fireEvent.mouseLeave(trigger);
        expect(screen.queryByText('Hello tooltip')).toBeNull();
    });

    it('renders complex ReactNode content', () => {
        const ComplexContent = () => (
            <div>
                <h4>Stats</h4>
                <p>Attack: 42</p>
            </div>
        );

        render(
            <Tooltip content={<ComplexContent />}>
                <button>Hover me</button>
            </Tooltip>,
        );

        const trigger = screen.getByText('Hover me');
        fireEvent.mouseEnter(trigger);

        expect(screen.getByText('Stats')).toBeInTheDocument();
        expect(screen.getByText('Attack: 42')).toBeInTheDocument();
    });
});
