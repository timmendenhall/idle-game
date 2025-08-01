'use client';

import { Routes } from '@/constants';
import { LinkButton, Heading } from '@/components/ui';

export const Home = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-3">
            <Heading>Idle Game</Heading>
            <LinkButton href={Routes.GAME}>Play</LinkButton>
        </div>
    );
};
