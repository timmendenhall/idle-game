import React from 'react';
import { act } from '@testing-library/react';
import {
    expect,
    it,
    vi,
    describe,
    afterEach,
    beforeEach,
    beforeAll,
    afterAll,
} from 'vitest';
import { useInterval, useLocalStorageState } from '@/hooks';
import { render } from '@/test/util';
import { AutoSave } from '@/components/AutoSave';

vi.mock('@/hooks/useInterval', { spy: true });
vi.mock('@/hooks/useLocalStorageState', { spy: true });
vi.mock('@/state/hooks/useGameStateDispatch', { spy: true });

describe('AutoSave', () => {
    const setLocalStorageState = vi.fn();

    beforeAll(() => {
        vi.useFakeTimers();
    });

    beforeEach(() => {
        vi.mocked(useLocalStorageState).mockReturnValue([
            { bones: 10 },
            setLocalStorageState,
            true,
        ]);
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    afterAll(() => {
        vi.useRealTimers();
    });

    it('performs an auto-save to local storage', () => {
        render(<AutoSave />);

        expect(useInterval).toHaveBeenCalled();
        expect(setLocalStorageState).not.toHaveBeenCalled();

        // Simulate time to auto-save
        act(() => {
            vi.advanceTimersToNextTimer();
        });

        expect(setLocalStorageState).toHaveBeenCalled();
    });
});
