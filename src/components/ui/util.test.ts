import { describe, expect, test } from 'vitest';
import { getButtonClass } from './util'; // adjust the path if needed
import type { ButtonVariant } from '@/components/ui/Button';

describe('getButtonClass', () => {
    const baseClass =
        'flex w-44 flex-row items-center justify-center rounded-2xl disabled:cursor-not-allowed disabled:opacity-50';

    test.each([
        [
            'primary',
            'bg-primary-800 hover:bg-primary-700 active:bg-primary-900 p-3',
        ],
        [
            'secondary',
            'active:bg-secondary-900 bg-secondary-800 hover:bg-secondary-700 p-3',
        ],
    ])(
        'returns correct classes for %s variant',
        (variant, expectedVariantClass) => {
            const result = getButtonClass(variant as ButtonVariant);
            expect(result).toContain(baseClass);
            expect(result).toContain(expectedVariantClass);
        },
    );

    test('merges additional className with existing ones', () => {
        const result = getButtonClass('primary', 'text-white shadow-md');
        expect(result).toContain('text-white');
        expect(result).toContain('shadow-md');
        expect(result).toContain('bg-primary-800'); // base variant
    });

    test('handles empty className', () => {
        const result = getButtonClass('secondary', '');
        expect(result).toContain('bg-secondary-800');
    });
});
