import { Game as GamePageComponent } from '@/components/pages';
import { GameStateProvider } from '@/state/providers';
import { AutoSave } from '@/components/AutoSave/AutoSave';
import { GameTick } from '@/components/GameTick';

export default function Game() {
    return (
        <GameStateProvider>
            <AutoSave />
            <GameTick />
            <GamePageComponent />;
        </GameStateProvider>
    );
}
