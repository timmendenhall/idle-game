import React, { ReactNode } from 'react';
import { twJoin } from 'tailwind-merge';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps {
    children?: ReactNode;
    variant?: ButtonVariant;
    onClick?: () => void;
}

export const Button = ({
    children,
    variant = 'primary',
    onClick,
}: ButtonProps) => {
    return (
        <button
            className={twJoin(
                'flex w-44 flex-row items-center justify-center rounded-2xl',
                variant === 'primary'
                    ? 'bg-sky-700 p-3 hover:bg-sky-800 active:bg-sky-900'
                    : 'bg-rose-700 p-3 hover:bg-rose-800 active:bg-rose-900',
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
