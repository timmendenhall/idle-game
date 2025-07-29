import { describe, expect, it } from 'vitest';
import gameStateReducer, { createGameState } from '@/state/reducers/GameState';
import { GameStateAction } from '@/state/actions';

describe('gameStateReducer', () => {
    it('adds bones correctly', () => {
        const initialState = createGameState({ bones: 10 });
        const action: GameStateAction = {
            type: 'game_state/add_bones',
            payload: 5,
        };
        const newState = gameStateReducer(initialState, action);
        expect(newState.bones).toBe(15);
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
        expect(state).toEqual({ bones: 0, boneDiggers: 0 });
    });

    it('creates a state with overrides', () => {
        const state = createGameState({ bones: 42, boneDiggers: 123 });
        expect(state).toEqual({ bones: 42, boneDiggers: 123 });
    });
});
