'use client';

import React, { createContext, ReactNode, useState } from 'react';
import { useInterval } from '@/hooks/useInterval';
import {
    BASE_BONES_PER_SECOND,
    DEFAULT_AUTO_SAVE_DELAY,
    GAME_SAVE_KEY,
} from '@/constants';
import { useLocalStorageState } from '@/hooks/useLocalStorageState';
import { LoadingIndicator } from '@/components';

export interface GameStateContextType {
    bones: number;
}

export const GameStateContext = createContext<GameStateContextType | undefined>(
    undefined,
);

export const GameStateProvider = ({ children }: { children: ReactNode }) => {
    const [state, setLocalStorageState, isHydrated] =
        useLocalStorageState<GameStateContextType>(GAME_SAVE_KEY, {
            bones: 0,
        });

    const [bones, setBones] = useState<number>(state.bones);

    useInterval((dt: number) => {
        const deltaSeconds: number = dt / 1000.0;
        const additionalBones: number = BASE_BONES_PER_SECOND * deltaSeconds;
        setBones((prev) => prev + additionalBones);
    });

    useInterval(
        () => {
            setLocalStorageState((prev) => ({ ...prev, bones }));
        },
        { delay: DEFAULT_AUTO_SAVE_DELAY },
    );

    if (!isHydrated) {
        return <LoadingIndicator />;
    }

    return (
        <GameStateContext.Provider value={{ bones }}>
            {children}
        </GameStateContext.Provider>
    );
};
