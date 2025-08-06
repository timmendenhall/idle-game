import type { Meta, StoryObj } from '@storybook/nextjs';

import { DinoSystemCard } from '@/components';

const meta = {
    component: DinoSystemCard,
    title: 'Components/DinoSystemCard',
} satisfies Meta<typeof DinoSystemCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
