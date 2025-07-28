export type GameStateActionType =
    | 'game_state/add_bones'
    | 'game_state/remove_bones';

const ADD_BONES: GameStateActionType = 'game_state/add_bones';
export const addBones = (dispatch: React.Dispatch<GameStateAction>) =>
    dispatch({ type: ADD_BONES });

export interface GameStateAction {
    type: GameStateActionType;
    payload?: number;
}
