import { createContext } from 'react';
import { GameState } from '@/state/reducers';

export const GameStateContext = createContext<GameState | undefined>(undefined);
