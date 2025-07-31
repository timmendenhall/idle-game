import { expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '@/test/util';

import { Game } from '@/components';

test('should render correctly', () => {
    render(<Game />);
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
});
