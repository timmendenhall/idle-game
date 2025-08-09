import { beforeAll, afterAll, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Tooltip } from './Tooltip';

beforeAll(() => {
    Element.prototype.getBoundingClientRect = () => ({
        width: 100,
        height: 40,
        top: 0,
        left: 0,
        bottom: 40,
        right: 100,
        x: 0,
        y: 0,
        toJSON: () => {},
    });
});

afterAll(() => {
    // @ts-expect-error clearing mock
    delete Element.prototype.getBoundingClientRect;
});

describe('Tooltip tests', () => {
    it('shows and hides tooltip on hover', async () => {
        render(
            <Tooltip content="Goodbye tooltip" delay={0}>
                <button>Hover me</button>
            </Tooltip>,
        );

        const trigger = screen.getByText('Hover me');

        await userEvent.hover(trigger);
        expect(screen.getByText('Goodbye tooltip')).toBeInTheDocument();

        await userEvent.unhover(trigger);
        expect(screen.queryByText('Goodbye tooltip')).toBeNull();
    });
});
