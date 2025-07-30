import { BASE_BONE_COST_BONE_DIGGER } from '@/constants';

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
