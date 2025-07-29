'use client';

import { useInterval } from '@/hooks';
import { BASE_BONES_PER_SECOND } from '@/constants';
import { useGameStateDispatch } from '@/state/hooks';
import { addBones } from '@/state/actions';

export const GameTick = () => {
    const dispatch = useGameStateDispatch();

    useInterval((dt: number) => {
        const deltaSeconds: number = dt / 1000.0;
        const additionalBones: number = BASE_BONES_PER_SECOND * deltaSeconds;
        dispatch(addBones(additionalBones));
    });

    return null;
};
