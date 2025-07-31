import '../src/app/globals.css';

import type { Preview } from '@storybook/nextjs';
import { withGameState } from './decorators/GameStateDecorator';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [withGameState()],
};

export default preview;
