import React, { ReactNode, useState } from 'react';

interface TooltipProps {
    content: ReactNode;
    children: ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}

            {visible && (
                <div
                    className="absolute bottom-full z-50 mb-2 w-max max-w-sm rounded-lg bg-black p-3 text-white shadow-lg"
                    style={{ left: '50%', transform: 'translateX(-50%)' }}
                >
                    {content}
                </div>
            )}
        </div>
    );
};
