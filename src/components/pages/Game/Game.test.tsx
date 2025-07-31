import { expect, test, vi } from 'vitest';
import { screen } from '@testing-library/react';

import { render } from '@/test/util';
import { Game } from '@/components/pages';

vi.mock('next/navigation');

test('should render correctly', () => {
    render(<Game />);
    expect(screen.getByTestId('top-bar')).toBeInTheDocument();
});
