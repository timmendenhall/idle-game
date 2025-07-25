'use client';

import { Game as GameContent, GameStateProvider, TopBar } from '@/components';

export const Game = () => {
    return (
        <GameStateProvider>
            <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 font-sans">
                <TopBar />
                <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
                    <GameContent />
                </main>

                <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]"></footer>
            </div>
        </GameStateProvider>
    );
};
