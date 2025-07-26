import { expect, test, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';

import { render } from '@/test/util';
import { Home } from '@/components/pages';

vi.mock('next/navigation');

test('should render correctly and navigate when Play is clicked', async () => {
    const { push } = useRouter();

    const user = userEvent.setup(); // required for async user interactions
    render(<Home />);

    // Assert heading and button exist
    expect(
        screen.getByRole('heading', { level: 1, name: 'Idle Game' }),
    ).toBeInTheDocument();

    const playButton = screen.getByRole('button', { name: 'Play' });
    expect(playButton).toBeInTheDocument();

    // Simulate user click
    await user.click(playButton);

    // Assert navigation
    expect(push).toHaveBeenCalledWith('/game'); // adjust the path if different
});
