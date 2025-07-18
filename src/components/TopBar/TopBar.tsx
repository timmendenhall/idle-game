import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export const TopBar = () => {
    return (
        <div className="sticky top-0 h-8 w-full bg-neutral-800">
            <GiHamburgerMenu />
        </div>
    );
};
