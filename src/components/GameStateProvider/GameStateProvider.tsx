import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useFrameTime } from '@/hooks/useFrameTime';

export interface GameStateContextType {
    bones: number;
}

export const GameStateContext = createContext<GameStateContextType | undefined>(
    undefined,
);

export const GameStateProvider = ({ children }: { children: ReactNode }) => {
    const [bones] = useState<number>(0);

    const frameTime = useFrameTime();

    useEffect(() => {
        console.log('deltaTime', frameTime.deltaTime);
    }, [frameTime.deltaTime, frameTime.totalElapsedMilliseconds]);

    return (
        <GameStateContext.Provider value={{ bones }}>
            {children}
        </GameStateContext.Provider>
    );
};
