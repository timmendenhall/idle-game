import React, { ReactNode } from 'react';
import { twJoin } from 'tailwind-merge';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps {
    children?: ReactNode;
    disabled?: boolean;
    variant?: ButtonVariant;
    onClick?: () => void;
}

export const Button = ({
    children,
    disabled = false,
    variant = 'primary',
    onClick,
}: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            className={twJoin(
                'flex w-44 flex-row items-center justify-center rounded-2xl',
                variant === 'primary'
                    ? 'bg-primary-800 hover:bg-primary-700 active:bg-primary-900 p-3'
                    : 'active:bg-secondary-900 bg-secondary-800 hover:bg-secondary-700 p-3',
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
