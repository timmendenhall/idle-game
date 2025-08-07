import { GameState } from '@/state/types';

export const createGameState = (
    defaultStateOverrides: Partial<GameState> = {},
): GameState => ({
    bones: 0,
    boneDiggers: 0,
    isDinoAlive: false,
    strength: 5,
    vitality: 5,
    dexterity: 5,
    intelligence: 5,
    ...defaultStateOverrides,
});
