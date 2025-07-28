export type GameStateActionType =
    | 'game_state/add_bones'
    | 'game_state/remove_bones';

const ADD_BONES: GameStateActionType = 'game_state/add_bones';
export const addBones = (bonesToAdd: number) => ({
    type: ADD_BONES,
    payload: bonesToAdd,
});

export interface GameStateAction {
    type: GameStateActionType;
    payload?: number;
}
