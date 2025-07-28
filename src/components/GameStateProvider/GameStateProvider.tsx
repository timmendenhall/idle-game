'use client';

import React, { createContext, ReactNode, useReducer } from 'react';
import { useInterval } from '@/hooks/useInterval';
import {
    BASE_BONES_PER_SECOND,
    DEFAULT_AUTO_SAVE_DELAY,
    GAME_SAVE_KEY,
} from '@/constants';
import { useLocalStorageState } from '@/hooks/useLocalStorageState';
import { LoadingIndicator } from '@/components';
import gameStateReducer, {
    createGameState,
    GameState,
} from '@/state/reducers/GameState';
import { addBones, GameStateAction } from '@/state/actions';

export const GameStateContext = createContext<GameState | undefined>(undefined);
export const GameStateDispatchContext = createContext<
    React.Dispatch<GameStateAction> | undefined
>(undefined);

const DEFAULT_STATE: GameState = createGameState();

export const GameStateProvider = ({ children }: { children: ReactNode }) => {
    const [localStorageState, setLocalStorageState, isHydrated] =
        useLocalStorageState<GameState>(GAME_SAVE_KEY, DEFAULT_STATE);

    const [gameState, dispatch] = useReducer(
        gameStateReducer,
        createGameState(localStorageState),
    );

    useInterval((dt: number) => {
        const deltaSeconds: number = dt / 1000.0;
        const additionalBones: number = BASE_BONES_PER_SECOND * deltaSeconds;
        dispatch(addBones(additionalBones));
    });

    useInterval(
        () => {
            setLocalStorageState((prev) => ({ ...prev, ...gameState }));
        },
        { delay: DEFAULT_AUTO_SAVE_DELAY },
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
