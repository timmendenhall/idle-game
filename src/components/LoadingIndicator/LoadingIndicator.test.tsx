import { expect, test } from 'vitest';
import { screen, render } from '@testing-library/react';

import { LoadingIndicator } from '@/components';

test('should render correctly', () => {
    render(<LoadingIndicator />);
    expect(screen.getByRole('status', { name: '' })).toBeDefined();
});
