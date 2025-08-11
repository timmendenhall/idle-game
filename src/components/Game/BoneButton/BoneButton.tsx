'use client';

import React from 'react';
import { PiBone } from 'react-icons/pi';
import { PriceButton } from '@/components/Game';
import { useGameState, useGameStateDispatch } from '@/state/hooks';
import { addBones } from '@/state/actions';
import { getBonesPerClick } from '@/util';

export const BoneButton = () => {
    const gameState = useGameState();
    const dispatch = useGameStateDispatch();

    const handleOnClick = (): void => {
        dispatch(addBones(getBonesPerClick(gameState)));
    };

    return (
        <PriceButton
            onClick={handleOnClick}
            icon={<PiBone />}
            text="Dig for bones"
        />
    );
};
