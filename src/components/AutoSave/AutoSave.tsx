'use client';

import { useGameState } from '@/state/hooks';
import { useInterval } from '@/hooks/useInterval';
import { useLocalStorageState } from '@/hooks/useLocalStorageState';
import { GAME_SAVE_KEY, DEFAULT_AUTO_SAVE_DELAY } from '@/constants';
import { GameState } from '@/state/reducers/GameState';

export interface AutoSaveProps {
    delay?: number;
}

export const AutoSave = ({
    delay = DEFAULT_AUTO_SAVE_DELAY,
}: AutoSaveProps) => {
    const gameState = useGameState();
    const [, setLocalStorageState] = useLocalStorageState<GameState>(
        GAME_SAVE_KEY,
        gameState,
    );

    useInterval(
        () => {
            setLocalStorageState((prev) => ({ ...prev, ...gameState }));
        },
        { delay },
    );

    return null;
};
