import { expect, test } from 'vitest';
import { screen, render } from '@testing-library/react';

import { Game } from '@/components';

test('should render correctly', () => {
    render(<Game />);
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
});
