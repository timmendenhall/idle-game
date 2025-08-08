'use client';

import React, { useCallback } from 'react';
import { GiDinosaurRex } from 'react-icons/gi';

import { Heading, Tooltip } from '@/components/ui';
import { useGameState, useGameStateDispatch } from '@/state/hooks';
import { buildDino } from '@/state/actions';
import { GameCard } from '@/components/Game/GameCard';
import { formatNumber, getDinoCost } from '@/util';
import { Dino } from '@/state/types';
import { PiBone } from 'react-icons/pi';
import { PriceButton } from '@/components';

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

const DinoStats = () => (
    <div className="space-y-1">
        <h4 className="font-bold">T-Rex</h4>
        <p>Bones collected: 254</p>
        <p>Combat power: 88</p>
        <button className="mt-2 rounded bg-green-500 px-2 py-1 text-xs">
            Challenge
        </button>
    </div>
);

export interface DinoIconProps {
    dino: Dino;
}

export const DinoIcon = ({ dino }: DinoIconProps) => {
    return (
        <Tooltip content={<DinoStats />}>
            <div className="bg-background-900 flex h-14 w-14 flex-row items-start justify-between rounded-sm p-2">
                <GiDinosaurRex />
                <span>{dino.level}</span>
            </div>
        </Tooltip>
    );
};

export const DinoSystemCard = () => {
    const dispatch = useGameStateDispatch();
    const gameState = useGameState();
    const { bones, maxDinos, dinos } = gameState;

    const dinoCost = getDinoCost(gameState);
    const canAffordDino = bones >= dinoCost;
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
            <PriceButton
                icon={<PiBone />}
                price={formatNumber(dinoCost)}
                text="Build Dinosaur"
                onClick={handleGrowDinosaurClicked}
                disabled={!canBuildDino}
            />
            <div className="bg-background-800 flex w-11/12 flex-col items-center gap-y-2 rounded-xl p-2">
                <Heading level={4}>Dinos</Heading>
                <div className="flex flex-row flex-wrap gap-2">
                    {dinos.map((dino) => (
                        <DinoIcon dino={dino} key={dino.id} />
                    ))}
                </div>
            </div>
        </GameCard>
    );
};
