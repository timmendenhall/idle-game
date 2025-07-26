import React, { useContext } from 'react';
import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { useInterval, useLocalStorageState } from '@/hooks';
import { GameStateContext, GameStateProvider } from './GameStateProvider';

vi.mock('@/hooks/useInterval', { spy: true });
vi.mock('@/hooks/useLocalStorageState', { spy: true });

vi.mock('@/components', () => ({
    LoadingIndicator: () => <div data-testid="loading" />,
}));

describe('GameStateProvider', () => {
    const TestConsumer = () => {
        const state = useContext(GameStateContext);
        return <div>bones: {state?.bones}</div>;
    };

    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.restoreAllMocks();
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

    it('calls useInterval for bone accumulation and auto-save', () => {
        const setLocalStorageState = vi.fn();
        vi.mocked(useLocalStorageState).mockReturnValue([
            { bones: 10 },
            setLocalStorageState,
            true,
        ]);

        render(
            <GameStateProvider>
                <div>Child</div>
            </GameStateProvider>,
        );

        expect(useInterval).toHaveBeenCalledTimes(2);
    });

    it('updates bones over time (simulate interval callback)', () => {
        const setLocalStorageState = vi.fn();
        vi.mocked(useLocalStorageState).mockReturnValue([
            { bones: 0 },
            setLocalStorageState,
            true,
        ]);

        render(
            <GameStateProvider>
                <TestConsumer />
            </GameStateProvider>,
        );

        act(() => {
            vi.advanceTimersToNextTimer();
        });

        expect(useInterval).toHaveBeenCalled();
        expect(screen.getByText('bones: 0.066')).toBeInTheDocument();
    });

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
