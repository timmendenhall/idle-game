import { AutoSave, Game as GameContent, GameTick, TopBar } from '@/components';
import { GameStateProvider } from '@/state/providers';

export const Game = () => {
    return (
        <GameStateProvider>
            <AutoSave />
            <GameTick />
            <TopBar />
            <main className="flex h-full w-full flex-col items-center justify-center gap-[32px]">
                <GameContent />
            </main>

            <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]"></footer>
        </GameStateProvider>
    );
};
