'use client';

import { useRouter } from 'next/navigation';

import { Routes } from '@/constants';
import { Button, Heading } from '@/components/ui';

export const Home = () => {
    const router = useRouter();
    const handlePlay = () => {
        router.push(Routes.GAME);
    };

    return (
        <div>
            <div className="flex min-h-screen flex-col items-center justify-center gap-3">
                <Heading>Idle Game</Heading>
                <Button onClick={handlePlay}>Play</Button>
            </div>
        </div>
    );
};
