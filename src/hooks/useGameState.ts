'use client';

import { useContext } from 'react';
import {
    GameStateContext,
    GameStateContextType,
} from '@/components/GameStateProvider';

export const useGameState = (): GameStateContextType => {
    const context = useContext(GameStateContext);
    if (!context) {
        throw new Error('useGameState must be used within a GameStateProvider');
    }
    return context;
};
