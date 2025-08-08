import { describe, expect, it } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useGameState } from './useGameState';
import { GameStateContext } from '@/state/context';
import { ReactNode } from 'react';
import { GameState } from '@/state/types';
import { createGameState } from '@/state/util';

const mockGameState: GameState = createGameState({
    bones: 42,
});

describe('useGameState', () => {
    it('returns context when inside provider', () => {
        const wrapper = ({ children }: { children: ReactNode }) => (
            <GameStateContext.Provider value={mockGameState}>
                {children}
            </GameStateContext.Provider>
        );

        const { result } = renderHook(() => useGameState(), { wrapper });

        expect(result.current.bones).toBe(42);
    });

    it('throws error when used outside of provider', () => {
        expect(() => renderHook(() => useGameState())).toThrowError(
            'useGameState must be used within a GameStateProvider',
        );
    });
});
