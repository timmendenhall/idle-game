import React, { ReactNode, useState } from 'react';
import {
    useFloating,
    offset,
    flip,
    shift,
    Placement,
} from '@floating-ui/react';

interface TooltipProps {
    content: ReactNode;
    placement?: Placement;
    children: ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({
    content,
    placement = 'top',
    children,
}) => {
    const [visible, setVisible] = useState(false);

    const { refs, floatingStyles } = useFloating({
        placement,
        middleware: [offset(8), flip(), shift()],
    });

    return (
        <div
            className="inline-block"
            ref={refs.setReference}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}

            {visible && (
                <div
                    ref={refs.setFloating}
                    style={floatingStyles}
                    className="z-50 w-max max-w-sm rounded-lg bg-black p-3 text-white shadow-lg"
                >
                    {content}
                </div>
            )}
        </div>
    );
};
