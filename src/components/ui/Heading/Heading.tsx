import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface HeadingProps {
    children?: ReactNode;
    level?: number;
    className?: string;
}

export const Heading = ({ children, className, level = 1 }: HeadingProps) => {
    switch (level) {
        case 2:
            return (
                <h2 className={twMerge('text-6xl', className)}>{children}</h2>
            );
        case 3:
            return (
                <h3 className={twMerge('text-4xl', className)}>{children}</h3>
            );
        case 4:
            return (
                <h4 className={twMerge('text-2xl', className)}>{children}</h4>
            );
        case 1:
        default:
            return (
                <h1 className={twMerge('text-7xl', className)}>{children}</h1>
            );
    }
};
