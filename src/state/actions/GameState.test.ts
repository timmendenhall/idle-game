import { expect, test } from 'vitest';
import { addBones } from '@/state/actions/GameState';

test('returns expected action', () => {
    expect(addBones(42)).toEqual({ payload: 42, type: 'game_state/add_bones' });
    expect(addBones(-1)).toEqual({ payload: -1, type: 'game_state/add_bones' });
});
