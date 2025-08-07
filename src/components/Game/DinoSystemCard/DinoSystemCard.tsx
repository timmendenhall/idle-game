'use client';

import React, { useCallback } from 'react';
import { GiDinosaurRex } from 'react-icons/gi';

import { Button, Card } from '@/components/ui';
import { CardHeading } from '@/components/ui/CardHeading';
import { useGameState, useGameStateDispatch } from '@/state/hooks';
import { purchaseBoneDiggers } from '@/state/actions';

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
        <Card>
            <CardHeading>
                <div className="bg-background-700 flex flex-row items-center rounded-2xl pr-3">
                    <div className="bg-background-800 rounded-2xl p-1">
                        <GiDinosaurRex />
                    </div>
                    <span className="pl-1">Grow-a-Dino</span>
                </div>
            </CardHeading>
            {!isDinoAlive && (
                <Button
                    onClick={handleGrowDinosaurClicked}
                    disabled={!canAffordDino}
                >
                    Grow Dinosaur
                </Button>
            )}
        </Card>
    );
};
