'use client';

import * as React from 'react';

export type Serializer = (data: object) => string;
export type Deserializer = (serialized: string) => object;

export interface UseLocalStorageStateOptions {
    serialize?: Serializer;
    deserialize?: Deserializer;
}

export interface UseLocalStorageStateParams {
    key: string;
    defaultValue: object;
    options?: UseLocalStorageStateOptions;
}

export const useLocalStorageState = ({
    key,
    defaultValue,
    options = {},
}: UseLocalStorageStateParams) => {
    const { serialize = JSON.stringify, deserialize = JSON.parse } = options;

    const [state, setState] = React.useState(() => {
        const valueInLocalStorage = global?.localStorage?.getItem(key);
        if (valueInLocalStorage) {
            try {
                return deserialize(valueInLocalStorage);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                global?.localStorage?.removeItem(key);
            }
        }
        return defaultValue;
    });

    const prevKeyRef = React.useRef(key);

    React.useEffect(() => {
        const prevKey = prevKeyRef.current;
        if (prevKey !== key) {
            global?.localStorage?.removeItem(prevKey);
        }
        prevKeyRef.current = key;
        console.log('setting state - ', state);
        global?.localStorage?.setItem(key, serialize(state));
    }, [key, state, serialize]);

    return [state, setState];
};
