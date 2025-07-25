import { vi } from 'vitest';

export const useRouter = () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
});
