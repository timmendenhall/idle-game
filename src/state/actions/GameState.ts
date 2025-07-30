export type GameStateActionType =
    | 'game_state/add_bones'
    | 'game_state/purchase_bone_digger';

const ADD_BONES: GameStateActionType = 'game_state/add_bones';
export const addBones = (bonesToAdd: number) => ({
    type: ADD_BONES,
    payload: bonesToAdd,
});

const PURCHASE_BONE_DIGGER: GameStateActionType =
    'game_state/purchase_bone_digger';
export const purchaseBoneDiggers = (diggersToPurchase: number = 1) => ({
    type: PURCHASE_BONE_DIGGER,
    payload: diggersToPurchase,
});

export interface GameStateAction {
    type: GameStateActionType;
    payload?: number;
}
