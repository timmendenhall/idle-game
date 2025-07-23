import * as React from 'react';

export type Serializer = (data: object) => string;
export type Deserializer = (serialized: string) => object;

export interface UseLocalStorageStateOptions {
    serialize: Serializer;
    deserialize: Deserializer;
}

export const useLocalStorageState = (
    key: string,
    defaultValue: object = {},
    {
        serialize = JSON.stringify,
        deserialize = JSON.parse,
    }: UseLocalStorageStateOptions,
) => {
    const [state, setState] = React.useState(() => {
        const valueInLocalStorage = window.localStorage.getItem(key);
        if (valueInLocalStorage) {
            try {
                return deserialize(valueInLocalStorage);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (_error) {
                window.localStorage.removeItem(key);
            }
        }
        return defaultValue;
    });

    const prevKeyRef = React.useRef(key);

    // Check the example at src/examples/local-state-key-change.js to visualize a key change
    React.useEffect(() => {
        const prevKey = prevKeyRef.current;
        if (prevKey !== key) {
            window.localStorage.removeItem(prevKey);
        }
        prevKeyRef.current = key;
        window.localStorage.setItem(key, serialize(state));
    }, [key, state, serialize]);

    return [state, setState];
};
