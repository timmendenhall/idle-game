import React, { ReactNode } from 'react';
import { getButtonClass } from '@/components/ui/util';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps {
    children?: ReactNode;
    disabled?: boolean;
    variant?: ButtonVariant;
    onClick?: () => void;
    className?: string;
}

export const Button = ({
    children,
    disabled = false,
    variant = 'primary',
    onClick,
    className,
}: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            className={getButtonClass(variant, className)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
