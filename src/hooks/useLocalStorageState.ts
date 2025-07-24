'use client';

import { Dispatch, SetStateAction, useState, useEffect, useRef } from 'react';

export type Serializer = (data: object) => string;
export type Deserializer = (serialized: string) => object;

export interface UseLocalStorageStateOptions {
    serialize?: Serializer;
    deserialize?: Deserializer;
}

export const useLocalStorageState = <S extends object>(
    key: string,
    defaultValue: S,
    options: UseLocalStorageStateOptions = {},
): [state: S, setState: Dispatch<SetStateAction<S>>, isHydrated: boolean] => {
    const { serialize = JSON.stringify, deserialize = JSON.parse } = options;

    const [state, setState] = useState<S>(() => {
        if (typeof window === 'undefined') {
            // SSR: can't access localStorage
            return defaultValue;
        }

        try {
            const stored = window.localStorage.getItem(key);
            if (stored) {
                return deserialize(stored) as S;
            }
        } catch (e) {
            console.warn('Failed to load from localStorage:', e);
        }

        return defaultValue;
    });
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true); // Indicates that we're on the client
    }, []);

    const prevKeyRef = useRef(key);

    useEffect(() => {
        if (!isHydrated) return;
        if (prevKeyRef.current !== key) {
            window.localStorage.removeItem(prevKeyRef.current);
        }
        prevKeyRef.current = key;

        try {
            window.localStorage.setItem(key, serialize(state));
        } catch (e) {
            console.warn('Failed to save to localStorage:', e);
        }
    }, [key, state, serialize, isHydrated]);

    return [state, setState, isHydrated];
};
