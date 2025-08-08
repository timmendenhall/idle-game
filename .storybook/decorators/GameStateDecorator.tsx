import React from 'react';
import { GameStateProvider } from '@/state/providers';
import { GameState } from '@/state/types';
import { createGameState } from '@/state/util';

export const withGameState =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any,react/display-name
    (initialState?: Partial<GameState>) => (Story: any) => (
        <GameStateProvider initialState={createGameState(initialState)}>
            <Story />
        </GameStateProvider>
    );
