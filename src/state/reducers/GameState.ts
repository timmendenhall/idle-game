import { GameStateAction } from '@/state/actions';
import { getBoneDiggerCost, getDinoCost } from '@/util';
import { GameState } from '@/state/types';
import { createDino } from '@/state/util/createDino';

export const gameStateReducer = (
    prevState: GameState,
    action: GameStateAction,
) => {
    switch (action.type) {
        case 'game_state/add_bones': {
            return {
                ...prevState,
                bones: prevState.bones + (action.payload ?? 0),
            };
        }
        case 'game_state/purchase_bone_digger': {
            const cost = getBoneDiggerCost(prevState, action.payload);
            if (cost > prevState.bones) {
                return {
                    ...prevState,
                };
            }
            return {
                ...prevState,
                bones: prevState.bones - cost,
                boneDiggers: prevState.boneDiggers + (action.payload ?? 0),
            };
        }
        case 'game_state/build_dino': {
            const cost = getDinoCost(prevState);
            if (
                cost > prevState.bones ||
                prevState.dinos.length >= prevState.maxDinos
            ) {
                return {
                    ...prevState,
                };
            }
            return {
                ...prevState,
                bones: prevState.bones - cost,
                dinos: [...prevState.dinos, createDino()],
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
};
