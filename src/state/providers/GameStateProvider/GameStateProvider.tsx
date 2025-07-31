'use client';

import React, { ReactNode, useReducer } from 'react';
import { GAME_SAVE_KEY } from '@/constants';
import { useLocalStorageState } from '@/hooks/useLocalStorageState';
import { LoadingIndicator } from '@/components';
import gameStateReducer, {
    createGameState,
    GameState,
} from '@/state/reducers/GameState';
import { GameStateContext, GameStateDispatchContext } from '@/state/context';

const DEFAULT_STATE: GameState = createGameState();

export interface GameStateProviderProps {
    initialState?: Partial<GameState>;
    children: ReactNode;
}

export const GameStateProvider = ({
    children,
    initialState,
}: GameStateProviderProps) => {
    const [localStorageState, , isHydrated] = useLocalStorageState<GameState>(
        GAME_SAVE_KEY,
        DEFAULT_STATE,
    );

    const [gameState, dispatch] = useReducer(
        gameStateReducer,
        createGameState(initialState ?? localStorageState),
    );

    if (!isHydrated) {
        return <LoadingIndicator />;
    }

    return (
        <GameStateContext.Provider value={gameState}>
            <GameStateDispatchContext value={dispatch}>
                {children}
            </GameStateDispatchContext>
        </GameStateContext.Provider>
    );
};
