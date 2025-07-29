import { Game as GamePageComponent } from '@/components/pages';
import { GameStateProvider } from '@/state/providers';

export default function Game() {
    return (
        <GameStateProvider>
            <GamePageComponent />;
        </GameStateProvider>
    );
}
