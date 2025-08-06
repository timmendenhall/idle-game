import React from 'react';
import { BoneSystemCard, DinoSystemCard } from '@/components/Game';

export const Game = () => {
    return (
        <div className="flex flex-row items-start justify-center gap-3">
            <BoneSystemCard />
            <DinoSystemCard />
        </div>
    );
};
