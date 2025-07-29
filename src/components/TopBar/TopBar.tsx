'use client';

import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { PiBone } from 'react-icons/pi';
import { useGameState } from '@/state/hooks';

interface ResourceDisplayProps {
    value: number;
    children: React.ReactElement;
}

const ResourceDisplay = ({ value, children }: ResourceDisplayProps) => {
    return (
        <div className="flex flex-row items-center pl-3">
            {children}
            <span className="pl-1">{value.toFixed(2)}</span>
        </div>
    );
};

export const TopBar = () => {
    const { bones } = useGameState();

    return (
        <div
            className="sticky top-0 flex h-8 w-full flex-row items-center bg-neutral-800 p-1"
            data-testid="top-bar"
        >
            <GiHamburgerMenu />
            <ResourceDisplay value={bones}>
                <PiBone />
            </ResourceDisplay>
            <ResourceDisplay value={bones}>
                <PiBone />
            </ResourceDisplay>
        </div>
    );
};
