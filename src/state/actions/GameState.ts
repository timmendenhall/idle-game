export type GameStateActionType =
    | 'game_state/add_bones'
    | 'game_state/build_dino'
    | 'game_state/purchase_bone_digger';

export interface GameStateAction {
    type: GameStateActionType;
    payload?: number;
}

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

const BUILD_DINO: GameStateActionType = 'game_state/build_dino';
export const buildDino = () => ({
    type: BUILD_DINO,
});
