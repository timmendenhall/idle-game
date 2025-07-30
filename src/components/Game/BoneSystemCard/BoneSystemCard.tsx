'use client';

import React, { useCallback } from 'react';
import { PiBone } from 'react-icons/pi';

import { BoneButton } from '@/components/Game';
import { Button, Card } from '@/components/ui';
import { CardHeading } from '@/components/ui/CardHeading';
import { useGameState, useGameStateDispatch } from '@/state/hooks';
import { getBoneDiggerCost } from '@/util';
import { purchaseBoneDiggers } from '@/state/actions';
import { BASE_BONES_PER_SECOND_PER_DIGGER } from '@/constants';

export const BoneSystemCard = () => {
    const { bones, boneDiggers } = useGameState();
    const dispatch = useGameStateDispatch();

    const boneDiggerCost = getBoneDiggerCost(boneDiggers);
    const canAffordBoneDigger = bones >= boneDiggerCost;
    const bonesPerSecondFromDiggers =
        boneDiggers * BASE_BONES_PER_SECOND_PER_DIGGER;

    const handlePurchaseBoneDiggers = useCallback(() => {
        if (!canAffordBoneDigger) {
            return;
        }
        dispatch(purchaseBoneDiggers());
    }, [canAffordBoneDigger, dispatch]);

    return (
        <Card>
            <CardHeading>
                <div className="bg-background-700 flex flex-row items-center rounded-2xl pr-3">
                    <div className="bg-background-800 rounded-2xl p-1">
                        <PiBone />
                    </div>
                    <span className="pl-1">Dino-bones</span>
                </div>
            </CardHeading>
            <div className="">Bones: {bones.toFixed(2)}</div>
            <div className="">
                Bone-diggers: {boneDiggers} ({bonesPerSecondFromDiggers} bones/
                sec)
            </div>
            <BoneButton />
            <Button
                onClick={handlePurchaseBoneDiggers}
                disabled={!canAffordBoneDigger}
            >
                Buy Bone-digger <PiBone />
                {boneDiggerCost}
            </Button>
        </Card>
    );
};
