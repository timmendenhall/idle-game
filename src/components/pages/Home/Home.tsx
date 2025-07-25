'use client';

import { useRouter } from 'next/navigation';

import { Routes } from '@/constants';

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
                    <button
                        className="m-3 flex w-44 flex-col items-center justify-center rounded-lg bg-teal-700 p-2 text-white hover:bg-teal-800 active:bg-teal-900"
                        onClick={handlePlay}
                    >
                        Play
                    </button>
                </div>
            </div>
        </div>
    );
};
