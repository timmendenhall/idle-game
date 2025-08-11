import { afterEach, describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useGameStateDispatch } from './useGameStateDispatch';
import { GameStateDispatchContext } from '@/state/context';
import { ReactNode } from 'react';

describe('useGameStateDispatch', () => {
    const mockDispatch = vi.fn();

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('returns context when inside provider', () => {
        const wrapper = ({ children }: { children: ReactNode }) => (
            <GameStateDispatchContext.Provider value={mockDispatch}>
                {children}
            </GameStateDispatchContext.Provider>
        );

        const { result } = renderHook(() => useGameStateDispatch(), {
            wrapper,
        });

        expect(result.current).toBe(mockDispatch);
    });

    it('throws error when used outside of provider', () => {
        expect(() => renderHook(() => useGameStateDispatch())).toThrowError(
            'useGameStateDispatch must be used within a GameStateDispatchProvider',
        );
    });
});
