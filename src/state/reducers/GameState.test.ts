import { describe, expect, it } from 'vitest';
import gameStateReducer from '@/state/reducers/GameState';
import {
    addBones,
    GameStateAction,
    purchaseBoneDiggers,
} from '@/state/actions';
import { createGameState } from '@/state/util';

describe('gameStateReducer', () => {
    it('adds bones correctly', () => {
        const initialState = createGameState({ bones: 10 });
        const action = addBones(5);
        const newState = gameStateReducer(initialState, action);
        expect(newState.bones).toBe(15);
    });

    it('purchases bone-digger correctly', () => {
        const initialState = createGameState({ bones: 100 });
        const action = purchaseBoneDiggers(1);
        const newState = gameStateReducer(initialState, action);
        expect(newState.bones).toBe(85);
        expect(newState.boneDiggers).toBe(1);
    });

    it('does not purchase bone-digger when cost is too high', () => {
        const initialState = createGameState({ bones: 1 });
        const action = purchaseBoneDiggers(1);
        const newState = gameStateReducer(initialState, action);
        expect(newState.bones).toBe(1);
        expect(newState.boneDiggers).toBe(0);
    });

    it('uses 0 as fallback if payload is undefined', () => {
        const initialState = createGameState({ bones: 42 });
        const action = { type: 'game_state/add_bones' } as GameStateAction;
        const newState = gameStateReducer(initialState, action);
        expect(newState.bones).toBe(42); // no change
    });

    it('throws an error on unknown action type', () => {
        const initialState = createGameState();
        const action = { type: 'unknown' } as never;
        expect(() => gameStateReducer(initialState, action)).toThrow(
            /Unknown action: unknown/,
        );
    });
});

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
