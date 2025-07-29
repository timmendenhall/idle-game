import React, { ReactNode } from 'react';

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
    const bg = variant === 'primary' ? 'sky' : 'rose';
    return (
        <button
            className={`flex w-44 flex-row items-center justify-center rounded-2xl bg-${bg}-700 p-3 hover:bg-${bg}-800 active:bg-${bg}-900`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
