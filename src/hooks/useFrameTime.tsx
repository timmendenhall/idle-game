import { useState, useEffect } from 'react';

export interface UseFrameTime {
    deltaTime?: number;
    totalElapsedMilliseconds: number;
}

export const useFrameTime = (): UseFrameTime => {
    const [totalElapsedMilliseconds, setTotalElapsedMilliseconds] = useState(0);
    const [deltaMilliseconds, setDeltaMilliseconds] = useState(0);

    useEffect(() => {
        let frameId: number;
        let last: number = 0;
        const frame = (time: number) => {
            const diff = time - last;
            setDeltaMilliseconds(diff);
            setTotalElapsedMilliseconds(time);
            frameId = requestAnimationFrame(frame);
            last = time;
        };
        requestAnimationFrame(frame);
        return () => cancelAnimationFrame(frameId);
    }, []);

    return {
        totalElapsedMilliseconds,
        deltaTime: deltaMilliseconds,
    };
};
