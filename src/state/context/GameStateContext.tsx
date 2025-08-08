import { createContext } from 'react';
import { GameState } from '@/state/types';

export const GameStateContext = createContext<GameState | undefined>(undefined);
