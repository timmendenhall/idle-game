import React from 'react';
import { BoneButton } from '@/components/Game';
import { Card } from '@/components/ui';
import { CardHeading } from '@/components/ui/CardHeading';

export const BoneSystemCard = () => {
    return (
        <Card>
            <CardHeading>Dino-bones</CardHeading>
            <BoneButton />
        </Card>
    );
};
