'use client';

import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useFrameTime } from '@/hooks/useFrameTime';
import { BASE_BONES_PER_SECOND } from '@/constants';
import { useLocalStorageState } from '@/hooks/useLocalStorageState';

export interface GameStateContextType {
    bones: number;
}

export const GameStateContext = createContext<GameStateContextType | undefined>(
    undefined,
);

export const GameStateProvider = ({ children }: { children: ReactNode }) => {
    const [state, setLocalStorageState] = useLocalStorageState({
        key: 'game1',
        defaultValue: {
            bones: 0,
        },
    });
    const [bones, setBones] = useState<number>(state.bones);

    useFrameTime((dt: number) => {
        const deltaSeconds: number = dt / 1000.0;
        const additionalBones: number = BASE_BONES_PER_SECOND * deltaSeconds;
        setBones((prev) => prev + additionalBones);
    });

    const handleTabClosing = () => {
        console.log('handleTabClosing START ', bones);
        setLocalStorageState({
            bones,
        });
        console.log('handleTabClosing DONE');
    };

    useEffect(() => {
        window.addEventListener('unload', handleTabClosing);
        return () => {
            window.removeEventListener('unload', handleTabClosing);
        };
    });

    return (
        <GameStateContext.Provider value={{ bones }}>
            {children}
        </GameStateContext.Provider>
    );
};
