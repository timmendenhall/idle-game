import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GameStateContextType {
    isPaused: boolean;
    setIsPaused: (value: boolean) => void;
}

const GameStateContext = createContext<GameStateContextType | undefined>(
    undefined,
);

export const GameStateProvider = ({ children }: { children: ReactNode }) => {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <GameStateContext.Provider value={{ isPaused, setIsPaused }}>
            {children}
        </GameStateContext.Provider>
    );
};

export const useGameState = () => {
    const context = useContext(GameStateContext);
    if (!context) {
        throw new Error('useGameState must be used within a GameStateProvider');
    }
    return context;
};
