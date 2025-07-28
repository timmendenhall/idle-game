import React, { createContext } from 'react';
import { GameStateAction } from '@/state/actions';

export const GameStateDispatchContext = createContext<
    React.Dispatch<GameStateAction> | undefined
>(undefined);
