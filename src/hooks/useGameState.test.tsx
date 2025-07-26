import { describe, expect, it } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useGameState } from './useGameState';
import {
    GameStateContext,
    GameStateContextType,
} from '@/components/GameStateProvider';
import { ReactNode } from 'react';

const mockGameState: GameStateContextType = {
    bones: 42,
};

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
