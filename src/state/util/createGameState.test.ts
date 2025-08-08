import { describe, expect, it } from 'vitest';

import { createGameState } from '@/state/util';

describe('createGameState', () => {
    it('creates a default state', () => {
        const state = createGameState();
        expect(state).toEqual(
            expect.objectContaining({ bones: 0, boneDiggers: 0 }),
        );
    });

    it('creates a state with overrides', () => {
        const state = createGameState({ bones: 42, boneDiggers: 123 });
        expect(state).toEqual(
            expect.objectContaining({ bones: 42, boneDiggers: 123 }),
        );
    });
});
