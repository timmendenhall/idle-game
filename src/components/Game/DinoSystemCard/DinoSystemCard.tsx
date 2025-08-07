'use client';

import React, { useCallback } from 'react';
import { GiDinosaurRex } from 'react-icons/gi';

import { Button, Heading } from '@/components/ui';
import { useGameState, useGameStateDispatch } from '@/state/hooks';
import { purchaseBoneDiggers } from '@/state/actions';
import { GameCard } from '@/components/Game/GameCard';

export const AttributeRow = ({
    name,
    value,
}: {
    name: string;
    value: number;
}) => {
    return (
        <div className="flex flex-row">
            <div>
                {name}: {value}
            </div>
        </div>
    );
};

export const DinoSystemCard = () => {
    const dispatch = useGameStateDispatch();
    const { isDinoAlive } = useGameState();

    const canAffordDino = false;

    const handleGrowDinosaurClicked = useCallback(() => {
        if (!canAffordDino) {
            return;
        }
        dispatch(purchaseBoneDiggers());
    }, [canAffordDino, dispatch]);

    return (
        <GameCard icon={<GiDinosaurRex />} title="Build-a-Dino">
            {!isDinoAlive && (
                <Button
                    onClick={handleGrowDinosaurClicked}
                    disabled={!canAffordDino}
                >
                    Build Dinosaur
                </Button>
            )}
            <div className="bg-background-800 flex flex-col items-center rounded-xl p-2">
                <Heading level={4}>Attributes</Heading>
                <AttributeRow name="test" value={1} />
            </div>
        </GameCard>
    );
};
