import { BASE_BONE_COST_BONE_DIGGER } from '@/constants';
import { GameState } from '@/state/reducers';

export const getBoneDiggerCost = (
    currentBoneDiggers: number,
    quantity: number = 1,
) => {
    let totalCost = 0;
    for (let i = 0; i < quantity; i++) {
        const cost =
            Math.floor(
                (currentBoneDiggers + i) * BASE_BONE_COST_BONE_DIGGER * 1.1,
            ) + BASE_BONE_COST_BONE_DIGGER;
        totalCost += cost;
    }
    return totalCost;
};

export const getBonesPerClick = (gameState: GameState): number => {
    return 1 + gameState.boneDiggers;
};

export const formatNumber = (value: number): string => {
    return Number(value.toFixed(0)).toLocaleString();
};
