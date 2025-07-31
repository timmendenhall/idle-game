'use client';

import React from 'react';
import { PiBone } from 'react-icons/pi';
import { Button } from '@/components/ui';
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
        <Button onClick={handleOnClick}>
            <div className="pr-3">
                <PiBone />
            </div>
            Dig for bones
        </Button>
    );
};
