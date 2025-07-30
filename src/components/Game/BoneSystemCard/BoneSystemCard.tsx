import React from 'react';
import { BoneButton } from '@/components/Game';
import { Heading } from '@/components/ui';

export const BoneSystemCard = () => {
    return (
        <div className="bg-background-900 mx-auto rounded-2xl p-1">
            <Heading level={3}>Dino-bones</Heading>
            <BoneButton />
        </div>
    );
};
