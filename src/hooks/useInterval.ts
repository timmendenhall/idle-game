'use client';

import { useEffect, useRef } from 'react';
import { TICKS_PER_SECOND } from '@/constants';

const DEFAULT_DELAY = 1000.0 / TICKS_PER_SECOND;

export interface UseFrameTimeOptions {
    delay?: number;
}

export const useInterval = (
    callback: (dt: number) => void,
    options: UseFrameTimeOptions = {},
): void => {
    const intervalId = useRef<number | undefined>(undefined);
    const lastFrameTime = useRef<number>(Date.now());
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (intervalId.current) {
            window?.clearInterval(intervalId.current);
        }

        intervalId.current = window?.setInterval(() => {
            const now = Date.now();
            const dt = now - lastFrameTime.current;
            lastFrameTime.current = now;

            callbackRef.current(dt);
        }, options?.delay ?? DEFAULT_DELAY);

        return () => window?.clearInterval(intervalId.current);
    }, [options?.delay]);
};
