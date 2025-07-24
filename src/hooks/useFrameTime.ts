import { useEffect, useRef } from 'react';
import { TICKS_PER_SECOND } from '@/constants';

const delay = 1000.0 / TICKS_PER_SECOND;

export const useFrameTime = (callback: (dt: number) => void): void => {
    const intervalId = useRef<number | undefined>(undefined);
    const lastFrameTime = useRef<number>(Date.now());

    useEffect(() => {
        if (intervalId.current) {
            clearInterval(intervalId.current);
        }

        intervalId.current = window.setInterval(() => {
            const now = Date.now();
            const dt = now - lastFrameTime.current;
            lastFrameTime.current = now;

            callback(dt);
        }, delay);

        return () => window.clearInterval(intervalId.current);
    }, [callback]);
};
