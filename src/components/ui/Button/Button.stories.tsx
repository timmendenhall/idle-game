import type { Meta, StoryObj } from '@storybook/nextjs';
import { fn } from 'storybook/test';

import { Button } from './Button';

const meta = {
    component: Button,
    title: 'Button',
    args: {
        children: 'Test button',
        onClick: fn(),
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
    },
};
