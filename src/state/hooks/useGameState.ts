'use client';

import { useContext } from 'react';
import { GameStateContext } from '@/state/context';
import { GameState } from '@/state/reducers/GameState';

export const useGameState = (): GameState => {
    const context = useContext(GameStateContext);
    if (!context) {
        throw new Error('useGameState must be used within a GameStateProvider');
    }
    return context;
};
