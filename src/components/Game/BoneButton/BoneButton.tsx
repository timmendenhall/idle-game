'use client';

import React from 'react';
import { PiBone } from 'react-icons/pi';
import { Button } from '@/components/ui';
import { useGameStateDispatch } from '@/state/hooks';
import { addBones } from '@/state/actions';

export const BoneButton = () => {
    const dispatch = useGameStateDispatch();
    const handleOnClick = (): void => {
        // TODO: calc add bones
        dispatch(addBones(1));
    };

    return (
        <Button onClick={handleOnClick}>
            <div className="pr-3">
                <PiBone />
            </div>
            Dig for bone
        </Button>
    );
};
