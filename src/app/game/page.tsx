import { Game as GamePageComponent } from '@/components/pages';
import { GameStateProvider } from '@/components';

export default function Game() {
    return (
        <GameStateProvider>
            <GamePageComponent />;
        </GameStateProvider>
    );
}
