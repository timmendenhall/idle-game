export type ADD_BONES = 'game_state/add_bones';
export const addBones = (dispatch) => dispatch({ type: ADD_BONES });

export type GameStateType = 'game_state/add_bones' | '';

export interface GameStateAction {
    type: ADD_BONES; // | OTHER_ACTION
}
