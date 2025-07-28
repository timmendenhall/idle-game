import { ADD_BONES } from '@/state/actions';

export interface GameState {
    bones: number;
}

export default function gameStateReducer(state, action) {
    switch (action.type) {
        case 'game_state/add_bones': {
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                },
            ];
        }
        // case 'changed': {
        //     return tasks.map((t) => {
        //         if (t.id === action.task.id) {
        //             return action.task;
        //         } else {
        //             return t;
        //         }
        //     });
        // }
        // case 'deleted': {
        //     return tasks.filter((t) => t.id !== action.id);
        // }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
