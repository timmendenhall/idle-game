import { expect, test } from 'vitest';
import { addBones, purchaseBoneDiggers } from '@/state/actions/GameState';

test('addBones returns expected action', () => {
    expect(addBones(42)).toEqual({ payload: 42, type: 'game_state/add_bones' });
    expect(addBones(-1)).toEqual({ payload: -1, type: 'game_state/add_bones' });
});

test('purchaseBoneDiggers returns expected action', () => {
    expect(purchaseBoneDiggers(42)).toEqual({
        payload: 42,
        type: 'game_state/purchase_bone_digger',
    });
    expect(purchaseBoneDiggers(-1)).toEqual({
        payload: -1,
        type: 'game_state/purchase_bone_digger',
    });
});
