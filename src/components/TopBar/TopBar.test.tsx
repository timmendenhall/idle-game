import { test } from 'vitest';
import { screen } from '@testing-library/react';

import { render } from '@/test/util';
import { TopBar } from './TopBar';

test('should render correctly', async () => {
    render(<TopBar />);
    await screen.findByText('0.00');
});
