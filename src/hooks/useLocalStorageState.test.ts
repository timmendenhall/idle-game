import { renderHook, act } from '@testing-library/react';
import { useLocalStorageState } from './useLocalStorageState';
import { vi, describe, beforeEach, expect, it } from 'vitest';

describe('useLocalStorageState', () => {
    const KEY = 'test-key';

    beforeEach(() => {
        localStorage.clear();
    });

    it('uses default value if nothing is in localStorage', () => {
        const defaultValue = { count: 0 };

        const { result } = renderHook(() =>
            useLocalStorageState(KEY, defaultValue),
        );

        const [state, , isHydrated] = result.current;

        expect(state).toEqual(defaultValue);
        expect(isHydrated).toBe(true);
    });

    it('loads initial state from localStorage if available', () => {
        localStorage.setItem(KEY, JSON.stringify({ count: 42 }));

        const { result } = renderHook(() =>
            useLocalStorageState(KEY, { count: 0 }),
        );

        const [state] = result.current;

        expect(state).toEqual({ count: 42 });
    });

    it('updates localStorage when state changes', () => {
        const { result } = renderHook(() =>
            useLocalStorageState(KEY, { count: 0 }),
        );

        act(() => {
            const [, setState] = result.current;
            setState({ count: 5 });
        });

        const stored = localStorage.getItem(KEY);
        expect(JSON.parse(stored!)).toEqual({ count: 5 });
    });

    it('makes new key when key changes', async () => {
        localStorage.setItem('old-key', JSON.stringify({ val: 1 }));
        expect(localStorage.getItem('old-key')).toBe(
            JSON.stringify({ val: 1 }),
        );

        const { rerender, result } = renderHook(
            ({ key }) => useLocalStorageState(key, { val: 0 }),
            {
                initialProps: { key: 'old-key' },
            },
        );

        expect(result.current[0]).toEqual({ val: 1 });

        rerender({ key: 'new-key' });
        expect(localStorage.getItem('old-key')).toBeNull();
        expect(localStorage.getItem('new-key')).toBe(
            JSON.stringify({ val: 1 }),
        );

        act(() => {
            result.current[1]({ val: 42 });
        });

        expect(result.current[0]).toEqual({ val: 42 });
    });

    it('can use custom serializer/deserializer', () => {
        const customSerialize = vi.fn(
            (obj: object) => `data:${JSON.stringify(obj)}`,
        );
        const customDeserialize = vi.fn((str: string) =>
            JSON.parse(str.replace(/^data:/, '')),
        );

        localStorage.setItem(KEY, 'data:{"foo":123}');

        const { result } = renderHook(() =>
            useLocalStorageState(
                KEY,
                { foo: 0 },
                { serialize: customSerialize, deserialize: customDeserialize },
            ),
        );

        const [state] = result.current;
        expect(state).toEqual({ foo: 123 });
        expect(customDeserialize).toHaveBeenCalledWith('data:{"foo":123}');

        act(() => {
            const [, setState] = result.current;
            setState({ foo: 456 });
        });

        expect(customSerialize).toHaveBeenCalledWith({ foo: 456 });
    });
});
