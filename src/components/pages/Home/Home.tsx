'use client';

import { useRouter } from 'next/navigation';

import { Routes } from '@/constants';
import { Button } from '@/components/ui';

export const Home = () => {
    const router = useRouter();
    const handlePlay = () => {
        router.push(Routes.GAME);
    };

    return (
        <div>
            <div className="flex min-h-screen flex-col items-center justify-center">
                <h1 className="p-3 text-5xl">Idle Game</h1>
                <div className="flex flex-col items-center justify-center rounded-lg bg-gray-700">
                    <Button onClick={handlePlay}>Play</Button>
                </div>
            </div>
        </div>
    );
};
