import type { Meta, StoryObj } from '@storybook/nextjs';

import { Game } from './Game';

const meta = {
    component: Game,
    title: 'Pages/Game',
    decorators: [],
} satisfies Meta<typeof Game>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
