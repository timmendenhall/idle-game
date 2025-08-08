import { GameState } from '@/state/types';

export const createGameState = (
    defaultStateOverrides: Partial<GameState> = {},
): GameState => ({
    bones: 0,
    boneDiggers: 0,
    dinos: [],
    maxDinos: 1,
    ...defaultStateOverrides,
});
