'use client';

import React, { useCallback } from 'react';
import { PiBone } from 'react-icons/pi';

import { BoneButton } from '@/components/Game';
import { Button } from '@/components/ui';
import { useGameState, useGameStateDispatch } from '@/state/hooks';
import { formatNumber, getBoneDiggerCost } from '@/util';
import { purchaseBoneDiggers } from '@/state/actions';
import { BASE_BONES_PER_SECOND_PER_DIGGER } from '@/constants';
import { GameCard } from '@/components/Game/GameCard';

export const BoneSystemCard = () => {
    const gameState = useGameState();
    const { bones, boneDiggers } = gameState;
    const dispatch = useGameStateDispatch();

    const boneDiggerCost = getBoneDiggerCost(gameState);
    const canAffordBoneDigger = bones >= boneDiggerCost;
    const bonesPerSecondFromDiggers =
        boneDiggers * BASE_BONES_PER_SECOND_PER_DIGGER;

    const handlePurchaseBoneDiggers = useCallback(() => {
        dispatch(purchaseBoneDiggers());
    }, [dispatch]);

    return (
        <GameCard icon={<PiBone />} title="Dino-bones">
            <div className="">Bones: {formatNumber(bones)}</div>
            <div className="">
                Bone-diggers: {boneDiggers} (
                {formatNumber(bonesPerSecondFromDiggers)} bones/ sec)
            </div>
            <BoneButton />
            <Button
                onClick={handlePurchaseBoneDiggers}
                disabled={!canAffordBoneDigger}
            >
                Buy Bone-digger <PiBone />
                {formatNumber(boneDiggerCost)}
            </Button>
        </GameCard>
    );
};
