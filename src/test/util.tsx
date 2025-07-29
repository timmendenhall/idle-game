import React, { ReactNode } from 'react';
import {
    render as testingLibRender,
    RenderOptions,
} from '@testing-library/react';

import { GameStateProvider } from '@/state/providers';

const AllProviders = ({
    children,
}: {
    children: React.ReactNode;
}): ReactNode => <GameStateProvider>{children}</GameStateProvider>;

export const render = (ui: React.ReactNode, options?: Partial<RenderOptions>) =>
    testingLibRender(ui, { wrapper: AllProviders, ...options });
