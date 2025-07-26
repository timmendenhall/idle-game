import { renderHook } from '@testing-library/react';
import { useInterval } from './useInterval';
import { vi, describe, beforeEach, afterEach, expect, it } from 'vitest';

describe('useInterval', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.runOnlyPendingTimers();
        vi.useRealTimers();
    });

    it('calls the callback at regular intervals with correct dt', () => {
        const callback = vi.fn();

        const { unmount } = renderHook(() =>
            useInterval(callback, { delay: 100 }),
        );

        // Move time forward by 300ms in 100ms steps
        for (let i = 0; i < 3; i++) {
            vi.advanceTimersByTime(100);
        }

        expect(callback).toHaveBeenCalledTimes(3);
        expect(callback).toHaveBeenNthCalledWith(1, 100);
        expect(callback).toHaveBeenNthCalledWith(2, 100);
        expect(callback).toHaveBeenNthCalledWith(3, 100);

        unmount();
    });

    it('cleans up the interval on unmount', () => {
        const callback = vi.fn();
        const { unmount } = renderHook(() =>
            useInterval(callback, { delay: 100 }),
        );

        unmount();

        vi.advanceTimersByTime(500);
        expect(callback).not.toHaveBeenCalled();
    });
});
