import { test, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '@/test/util';

import Page from '../page';

vi.mock('next/navigation');

test('should render correctly', async () => {
    render(<Page />);
    await screen.findByText('0.00');
});
