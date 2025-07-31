import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [tsconfigPaths(), react()],
    test: {
        coverage: {
            enabled: false,
            include: ['**'],
            exclude: ['.storybook/**', '**.stories.tsx'],
            thresholds: {
                functions: 95,
                branches: 88,
                statements: 90,
                lines: 90,
            },
        },
        globals: true,
        setupFiles: ['./vitest.setup.ts'],
        environment: 'jsdom',
    },
});
