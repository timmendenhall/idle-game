import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DinoStats } from './DinoStats';
import { createDino } from '@/state/util';

describe('DinoStats', () => {
    it('renders correctly', () => {
        render(<DinoStats dino={createDino({ name: 'Test Dino' })} />);
        expect(screen.getByText('Test Dino')).toBeInTheDocument();
    });
});
