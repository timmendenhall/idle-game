'use client';

import React, { useCallback } from 'react';
import { GiDinosaurRex } from 'react-icons/gi';

import { Button, Heading } from '@/components/ui';
import { useGameState, useGameStateDispatch } from '@/state/hooks';
import { buildDino } from '@/state/actions';
import { GameCard } from '@/components/Game/GameCard';
import { getDinoCost } from '@/util';

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
    const gameState = useGameState();
    const { bones, maxDinos, dinos } = gameState;

    const canAffordDino = bones >= getDinoCost(gameState);
    const hasDinoCapacity = maxDinos > dinos.length;
    const canBuildDino = canAffordDino && hasDinoCapacity;

    const handleGrowDinosaurClicked = useCallback(() => {
        dispatch(buildDino());
    }, [dispatch]);

    return (
        <GameCard icon={<GiDinosaurRex />} title="Build-a-Dino">
            <div>
                Capacity: {dinos.length} {' / '} {maxDinos}
            </div>
            <Button
                onClick={handleGrowDinosaurClicked}
                disabled={!canBuildDino}
            >
                Build Dinosaur
            </Button>
            <div className="bg-background-800 flex flex-col items-center rounded-xl p-2">
                <Heading level={4}>Attributes</Heading>
                <AttributeRow name="test" value={1} />
            </div>
        </GameCard>
    );
};
