'use client';

import React from 'react';
import { GiDinosaurRex } from 'react-icons/gi';
import { useFrameTime } from '@/hooks/useFrameTime';

export const Game = () => {
    const deltaTime = useFrameTime();
    console.log('deltaTime', deltaTime);
    return <GiDinosaurRex />;
};
