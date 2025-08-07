import { GameStateAction } from '@/state/actions';
import { getBoneDiggerCost } from '@/util';
import { GameState } from '@/state/types';

export default function gameStateReducer(
    prevState: GameState,
    action: GameStateAction,
) {
    switch (action.type) {
        case 'game_state/add_bones': {
            return {
                ...prevState,
                bones: prevState.bones + (action.payload ?? 0),
            };
        }
        case 'game_state/purchase_bone_digger': {
            const cost = getBoneDiggerCost(
                prevState.boneDiggers,
                action.payload,
            );
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
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
