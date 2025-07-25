import React from 'react';
import {
    render as testingLibRender,
    RenderOptions,
} from '@testing-library/react';

import { GameStateProvider } from '@/components';

const AllProviders = ({ children }: { children: React.ReactElement }) => (
    <GameStateProvider>{children}</GameStateProvider>
);

export const render = (
    ui: React.ReactNode,
    options: RenderOptions<Q, Container, BaseElement>,
) => testingLibRender(ui, { wrapper: AllProviders, ...options });
