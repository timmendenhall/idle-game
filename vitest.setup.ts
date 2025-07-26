import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Fix for some Next.js tests needing TextEncoder/TextDecoder (especially for React 18+)
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder as typeof global.TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;

// Optional: mock matchMedia (used by some UI libraries)
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});
