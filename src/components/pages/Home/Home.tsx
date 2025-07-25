'use client';

import React, { useEffect, useState } from 'react';

export const Home = () => {
    const [hasCheckedForSave, setHasCheckedForSave] = useState<boolean>(false);
    const [hasSave, setHasSave] = useState<boolean>(false);

    useEffect(() => {
        setHasCheckedForSave(true);
    }, []);

    const hasSaveFile: boolean = hasCheckedForSave && hasSave;

    return (
        <div>
            <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
                <h1 className="p-3 text-5xl">Idle Game</h1>
                <div className="flex flex-col items-center justify-center rounded-lg bg-gray-700">
                    {hasSaveFile ? (
                        <button className="m-3 flex w-44 flex-col items-center justify-center rounded-lg bg-teal-700 p-2 text-white">
                            Continue
                        </button>
                    ) : null}

                    <button className="m-3 flex w-44 flex-col items-center justify-center rounded-lg bg-sky-800 p-2 text-white">
                        New Game
                    </button>
                </div>
            </div>
        </div>
    );
};
