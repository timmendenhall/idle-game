import { useState, useEffect } from 'react';

export interface UseFrameTime {
    deltaTime: number;
    totalElapsedMilliseconds: number;
}

export const useFrameTime = (): UseFrameTime => {
    const [totalElapsedMilliseconds, setTotalElapsedMilliseconds] = useState(0);
    const [deltaTime, setDeltaTime] = useState(0);

    useEffect(() => {
        let frameId: number;
        const frame = (time: number) => {
            const diff = time - deltaTime;

            setTotalElapsedMilliseconds(time);
            frameId = requestAnimationFrame(frame);
            setDeltaTime(diff);
        };
        requestAnimationFrame(frame);
        return () => cancelAnimationFrame(frameId);
    }, []);

    return {
        totalElapsedMilliseconds,
        deltaTime,
    };
};
