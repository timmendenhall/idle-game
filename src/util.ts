import { BASE_BONE_COST_BONE_DIGGER } from '@/constants';
import { GameState } from '@/state/types';

export const getBoneDiggerCost = (
    gameState: RequireOnly<GameState, 'boneDiggers'>,
    quantity: number = 1,
) => {
    let totalCost = 0;
    for (let i = 0; i < quantity; i++) {
        const cost =
            Math.floor(
                (gameState.boneDiggers + i) * BASE_BONE_COST_BONE_DIGGER * 1.1,
            ) + BASE_BONE_COST_BONE_DIGGER;
        totalCost += cost;
    }
    return totalCost;
};

export const getBonesPerClick = (
    gameState: RequireOnly<GameState, 'boneDiggers'>,
): number => {
    return 1 + gameState.boneDiggers;
};

export const getDinoCost = (gameState: RequireOnly<GameState, 'dinos'>) => {
    return 5000 * gameState.dinos.length + 1000;
};

export const formatNumber = (value: number): string => {
    return Math.floor(value).toLocaleString();
};

export type RequireOnly<T, K extends keyof T> = Pick<T, K> &
    Partial<Omit<T, K>>;
