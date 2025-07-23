'use client';

import { useEffect, useRef } from 'react';
import { TICKS_PER_SECOND } from '@/constants';

export const useFrameTime = (callback: () => void): void => {
    const intervalId = useRef<number | undefined>(undefined);
    const delay = 1000.0 / TICKS_PER_SECOND;

    useEffect(() => {
        if (intervalId.current) {
            clearInterval(intervalId.current);
        }
        intervalId.current = window.setInterval(() => {
            callback();
        }, delay);

        return () => window.clearInterval(intervalId.current);
    }, [callback, delay]);
};
