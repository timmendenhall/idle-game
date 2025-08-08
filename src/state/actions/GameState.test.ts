import { describe, expect, it } from 'vitest';
import {
    addBones,
    purchaseBoneDiggers,
    buildDino,
} from '@/state/actions/GameState';

describe('addBones', () => {
    it('returns expected action', () => {
        expect(addBones(42)).toEqual({
            payload: 42,
            type: 'game_state/add_bones',
        });
        expect(addBones(-1)).toEqual({
            payload: -1,
            type: 'game_state/add_bones',
        });
    });
});

describe('purchaseBoneDiggers', () => {
    it('returns expected action', () => {
        expect(purchaseBoneDiggers(42)).toEqual({
            payload: 42,
            type: 'game_state/purchase_bone_digger',
        });
        expect(purchaseBoneDiggers(-1)).toEqual({
            payload: -1,
            type: 'game_state/purchase_bone_digger',
        });
    });
});

describe('buildDino', () => {
    it('returns expected action', () => {
        expect(buildDino()).toEqual({
            type: 'game_state/build_dino',
        });
    });
});
