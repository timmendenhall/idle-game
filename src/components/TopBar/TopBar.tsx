'use client';

import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { PiBone } from 'react-icons/pi';
import { useGameState } from '@/state/hooks';

export const TopBar = () => {
    const { bones } = useGameState();

    return (
        <div className="sticky top-0 flex h-8 w-full flex-row items-center bg-neutral-800 p-1">
            <GiHamburgerMenu />
            <div className="flex flex-row items-center pl-3">
                <PiBone />
                <span>{bones.toFixed(2)}</span>
            </div>
        </div>
    );
};
