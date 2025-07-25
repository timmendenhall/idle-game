import { expect, test, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '@/test/util';

import Page from './page';

vi.mock('next/navigation');

test('should render correctly', () => {
    render(<Page />);
    expect(
        screen.getByRole('heading', { level: 1, name: 'Idle Game' }),
    ).toBeDefined();
});
