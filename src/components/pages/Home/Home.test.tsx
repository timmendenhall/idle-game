import { expect, test, vi } from 'vitest';
import { screen } from '@testing-library/react';

import { render } from '@/test/util';
import { Home } from '@/components/pages';

vi.mock('next/navigation');

test('should render correctly', () => {
    render(<Home />);
    expect(
        screen.getByRole('heading', { level: 1, name: 'Idle Game' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Play' })).toBeInTheDocument();
});
