import { GameStateAction } from '@/state/actions';

export interface GameState {
    bones: number;
}

export const createGameState = (
    defaultStateOverrides: Partial<GameState> = {},
): GameState => ({
    bones: 0,
    ...defaultStateOverrides,
});

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
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
