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
import { useGameStateDispatch } from '@/state/hooks/useGameStateDispatch';
import { render } from '@/test/util';
import { GameTick } from '@/components/GameTick';
import { createGameState } from '@/state/reducers';

vi.mock('@/hooks/useInterval', { spy: true });
vi.mock('@/hooks/useLocalStorageState', { spy: true });
vi.mock('@/state/hooks/useGameStateDispatch', { spy: true });

describe('GameTick', () => {
    const setLocalStorageState = vi.fn();
    const dispatch = vi.fn();

    beforeAll(() => {
        vi.useFakeTimers();
    });

    beforeEach(() => {
        vi.mocked(useLocalStorageState).mockReturnValue([
            createGameState({ bones: 10 }),
            setLocalStorageState,
            true,
        ]);

        vi.mocked(useGameStateDispatch).mockReturnValue(dispatch);
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    afterAll(() => {
        vi.useRealTimers();
    });

    it('calls useInterval once for a simulated game tick and does not add bones if added == 0', () => {
        render(<GameTick />);

        expect(useInterval).toHaveBeenCalled();
        expect(useGameStateDispatch).toHaveBeenCalled();
        expect(dispatch).not.toHaveBeenCalled();

        // Simulate a gametick
        act(() => {
            vi.advanceTimersToNextTimer();
        });

        expect(dispatch).not.toHaveBeenCalled();
    });

    it('adds bones based on bone diggers', () => {
        vi.mocked(useLocalStorageState).mockReturnValue([
            createGameState({ boneDiggers: 1 }),
            setLocalStorageState,
            true,
        ]);

        render(<GameTick />);

        expect(useInterval).toHaveBeenCalled();
        expect(useGameStateDispatch).toHaveBeenCalled();
        expect(dispatch).not.toHaveBeenCalled();

        // Simulate a game tick
        act(() => {
            vi.advanceTimersToNextTimer();
        });

        expect(dispatch).toHaveBeenCalledWith(
            expect.objectContaining({
                type: 'game_state/add_bones',
                payload: 0.066,
            }),
        );
    });
});
