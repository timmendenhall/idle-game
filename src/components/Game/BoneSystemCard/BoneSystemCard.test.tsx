import { expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '@/test/util';

import { BoneSystemCard } from '@/components/Game';

test('should render correctly', () => {
    render(<BoneSystemCard />);
    expect(screen.queryByText('Dino-bones')).toBeInTheDocument();
});
