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
        <div className="bg-background-700 ml-3 flex flex-row items-center rounded-2xl pr-3">
            <div className="bg-background-800 rounded-2xl p-1">{children}</div>

            <span className="pl-1">{value.toFixed(2)}</span>
        </div>
    );
};

export const TopBar = () => {
    const { bones } = useGameState();

    return (
        <div
            className="bg-background-900 sticky top-0 flex h-8 w-full flex-row items-center gap-3 p-1"
            data-testid="top-bar"
        >
            <GiHamburgerMenu />
            <ResourceDisplay value={bones}>
                <PiBone />
            </ResourceDisplay>
        </div>
    );
};
