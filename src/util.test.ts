import { describe, it, expect } from 'vitest';
import { getBoneDiggerCost, getBonesPerClick } from './util';
import { BASE_BONE_COST_BONE_DIGGER } from '@/constants';

describe('getBoneDiggerCost', () => {
    it('calculates cost of buying 1 digger with 0 owned', () => {
        const result = getBoneDiggerCost(0, 1);
        expect(result).toBe(BASE_BONE_COST_BONE_DIGGER);
    });

    it('calculates cost of buying 1 digger with 5 owned', () => {
        const result = getBoneDiggerCost(5, 1);
        expect(result).toBe(97);
    });

    it('calculates cost of buying 3 diggers with 0 owned', () => {
        const result = getBoneDiggerCost(0, 3);
        expect(result).toBe(94);
    });

    it('calculates cost of buying 2 diggers with 4 owned', () => {
        const result = getBoneDiggerCost(4, 2);
        expect(result).toBe(178);
    });
});

describe('getBonesPerClick', () => {
    it('returns 1 when no bone diggers', () => {
        expect(getBonesPerClick({ boneDiggers: 0, bones: 0 })).toBe(1);
    });

    it('returns 1 + boneDiggers', () => {
        expect(getBonesPerClick({ boneDiggers: 5, bones: 0 })).toBe(6);
    });
});
