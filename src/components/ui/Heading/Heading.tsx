import React, { ReactNode } from 'react';

export interface HeadingProps {
    children?: ReactNode;
    level?: number;
}

export const Heading = ({ children, level = 1 }: HeadingProps) => {
    switch (level) {
        case 1:
            return <h1 className="text-7xl">{children}</h1>;
        case 2:
            return <h2 className="text-6xl">{children}</h2>;
        case 3:
            return <h3 className="text-4xl">{children}</h3>;
        case 4:
            return <h4 className="text-2xl">{children}</h4>;
        default:
            return <h1 className="text-xl">{children}</h1>;
    }
};
