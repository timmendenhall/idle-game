import React, { JSX, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface HeadingProps {
    children?: ReactNode;
    level?: 1 | 2 | 3 | 4;
    className?: string;
}

const levelClassMap = {
    1: 'text-7xl',
    2: 'text-6xl',
    3: 'text-4xl',
    4: 'text-2xl',
};

export const Heading = ({ children, level = 1, className }: HeadingProps) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    const mergedClass = twMerge(
        levelClassMap[level] || levelClassMap[1],
        className,
    );

    return <Tag className={mergedClass}>{children}</Tag>;
};
