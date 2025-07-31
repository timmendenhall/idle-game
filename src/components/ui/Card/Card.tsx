import React, { ReactNode } from 'react';

export interface CardProps {
    children?: ReactNode;
}

export const Card = ({ children }: CardProps) => {
    return (
        <div className="bg-background-900 mx-auto flex flex-col items-center justify-center gap-3 rounded-2xl p-3">
            {children}
        </div>
    );
};
