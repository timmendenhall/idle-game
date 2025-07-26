import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useLocalStorageState } from '@/hooks';
import { GameStateProvider } from './GameStateProvider';

vi.mock('@/hooks/useInterval', { spy: true });
vi.mock('@/hooks/useLocalStorageState', { spy: true });

vi.mock('@/components', () => ({
    LoadingIndicator: () => <div data-testid="loading" />,
}));

describe('GameStateProvider', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('shows loading if not hydrated', () => {
        vi.mocked(useLocalStorageState).mockReturnValue([
            { bones: 0 },
            vi.fn(),
            false,
        ]);
        render(
            <GameStateProvider>
                <div>Child content</div>
            </GameStateProvider>,
        );

        expect(screen.getByTestId('loading')).toBeInTheDocument();
        expect(screen.queryByText('Child content')).not.toBeInTheDocument();
    });

    it('renders children after hydration', () => {
        vi.mocked(useLocalStorageState).mockReturnValue([
            { bones: 0 },
            vi.fn(),
            true,
        ]);
        render(
            <GameStateProvider>
                <div>Child content</div>
            </GameStateProvider>,
        );

        expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
        expect(screen.getByText('Child content')).toBeInTheDocument();
    });

    // it('calls useInterval for bone accumulation and auto-save', () => {
    //     const setLocalStorageState = vi.fn();
    //     useLocalStorageState.mockReturnValue([
    //         { bones: 10 },
    //         setLocalStorageState,
    //         true,
    //     ]);
    //
    //     render(
    //         <GameStateProvider>
    //             <div>Child</div>
    //         </GameStateProvider>,
    //     );
    //
    //     expect(useInterval).toHaveBeenCalledTimes(2);
    //     expect(useInterval.mock.calls[1][1]).toEqual({
    //         delay: expect.any(Number),
    //     });
    // });
    //
    // it('updates bones over time (simulate interval callback)', () => {
    //     const setLocalStorageState = vi.fn();
    //     const intervalCallbacks: ((dt: number) => void)[] = [];
    //
    //     // useInterval.mockImplementation((cb: (dt: number) => void) => {
    //     //     intervalCallbacks.push(cb);
    //     // });
    //
    //     useLocalStorageState.mockReturnValue([
    //         { bones: 0 },
    //         setLocalStorageState,
    //         true,
    //     ]);
    //
    //     render(
    //         <GameStateProvider>
    //             <div>Child</div>
    //         </GameStateProvider>,
    //     );
    //
    //     // Simulate frame interval passing
    //     intervalCallbacks; // 1 second
    //
    //     // Cannot directly assert bone increase without exposing state,
    //     // but we could refactor to expose context for better testing.
    //     expect(useInterval).toHaveBeenCalled();
    // });
    //
    // it('provides bones context to children', () => {
    //     useLocalStorageState.mockReturnValue([{ bones: 123 }, vi.fn(), true]);
    //
    //     const Consumer = () => {
    //         const context = React.useContext(GameStateContext);
    //         return <div>Bone count: {context?.bones}</div>;
    //     };
    //
    //     render(
    //         <GameStateProvider>
    //             <Consumer />
    //         </GameStateProvider>,
    //     );
    //
    //     expect(screen.getByText('Bone count: 123')).toBeInTheDocument();
    // });
});
