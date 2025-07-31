'use client';

import { useInterval } from '@/hooks';
import { BASE_BONES_PER_SECOND_PER_DIGGER } from '@/constants';
import { useGameState, useGameStateDispatch } from '@/state/hooks';
import { addBones } from '@/state/actions';

export const GameTick = () => {
    const gameState = useGameState();
    const dispatch = useGameStateDispatch();

    useInterval((dt: number) => {
        const deltaSeconds: number = dt / 1000.0;
        const additionalBones: number =
            gameState.boneDiggers *
            BASE_BONES_PER_SECOND_PER_DIGGER *
            deltaSeconds;

        if (additionalBones > 0) {
            dispatch(addBones(additionalBones));
        }
    });

    return null;
};
