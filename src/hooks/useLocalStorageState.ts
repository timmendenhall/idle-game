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
): [S, Dispatch<SetStateAction<S>>] => {
    const { serialize = JSON.stringify, deserialize = JSON.parse } = options;

    const [state, setState] = useState<S>(() => {
        const valueInLocalStorage = global?.localStorage?.getItem(key);
        if (valueInLocalStorage) {
            try {
                return deserialize(valueInLocalStorage);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                global?.localStorage?.removeItem(key);
            }
        }
        return defaultValue as S;
    });

    const prevKeyRef = useRef(key);

    useEffect(() => {
        const prevKey = prevKeyRef.current;
        if (prevKey !== key) {
            global?.localStorage?.removeItem(prevKey);
        }
        prevKeyRef.current = key;
        console.log('setting state - ', state, key, serialize);
        global?.localStorage?.setItem(key, serialize(state));
    }, [key, state, serialize]);

    return [state, setState];
};
