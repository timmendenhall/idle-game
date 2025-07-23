import React, { createContext, ReactNode, useState } from 'react';
import { useFrameTime } from '@/hooks/useFrameTime';
import { BASE_BONES_PER_SECOND } from '@/constants';

export interface GameStateContextType {
    bones: number;
}

export const GameStateContext = createContext<GameStateContextType | undefined>(
    undefined,
);

export const GameStateProvider = ({ children }: { children: ReactNode }) => {
    const [bones, setBones] = useState<number>(0);

    useFrameTime(() => {
        const additionalBones: number = BASE_BONES_PER_SECOND;
        setBones(bones);
        setBones((prev) => prev + additionalBones);
    });

    return (
        <GameStateContext.Provider value={{ bones }}>
            {children}
        </GameStateContext.Provider>
    );
};
