import { vi } from 'vitest';

const push = vi.fn();
const replace = vi.fn();
const prefetch = vi.fn();
const back = vi.fn();

export const useRouter = () => ({
    push,
    replace,
    prefetch,
    back,
});
