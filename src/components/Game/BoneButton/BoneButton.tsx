import React from 'react';
import { PiBone } from 'react-icons/pi';
import { Button } from '@/components/ui';

export const BoneButton = () => {
    return (
        <Button>
            <div className="pr-3">
                <PiBone />
            </div>
            Dig for bone
        </Button>
    );
};
