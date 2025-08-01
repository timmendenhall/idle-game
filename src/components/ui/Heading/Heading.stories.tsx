import type { Meta, StoryObj } from '@storybook/nextjs';

import { Heading } from './Heading';

const meta = {
    component: Heading,
    title: 'Components/UI/Heading',
    args: {
        children: 'Test Heading Contents',
    },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Level1: Story = {
    args: {
        level: 1,
    },
};

export const Level2: Story = {
    args: {
        level: 2,
    },
};

export const Level3: Story = {
    args: {
        level: 3,
    },
};

export const Level4: Story = {
    args: {
        level: 4,
    },
};
