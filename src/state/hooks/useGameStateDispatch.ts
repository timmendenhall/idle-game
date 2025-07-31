'use client';

import React, { useContext } from 'react';
import { GameStateDispatchContext } from '@/state/context';
import { GameStateAction } from '@/state/actions';

export const useGameStateDispatch = (): React.Dispatch<GameStateAction> => {
    const context = useContext(GameStateDispatchContext);
    if (!context) {
        throw new Error(
            'useGameStateDispatch must be used within a GameStateDispatchProvider',
        );
    }
    return context;
};
