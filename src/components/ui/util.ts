import { twJoin } from 'tailwind-merge';
import { ButtonVariant } from '@/components/ui/Button';

export const getButtonClass = (
    variant: ButtonVariant,
    className?: string,
): string => {
    return twJoin(
        'flex w-44 flex-row items-center justify-center rounded-2xl disabled:cursor-not-allowed disabled:opacity-50',
        variant === 'primary'
            ? 'bg-primary-800 hover:bg-primary-700 active:bg-primary-900 p-3'
            : 'active:bg-secondary-900 bg-secondary-800 hover:bg-secondary-700 p-3',
        className,
    );
};
