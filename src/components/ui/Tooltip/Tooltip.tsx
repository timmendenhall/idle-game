import React, { ReactNode, useState } from 'react';
import {
    useFloating,
    offset,
    flip,
    shift,
    Placement,
    useHover,
    useFocus,
    useDismiss,
    useRole,
    useInteractions,
} from '@floating-ui/react';

interface TooltipProps {
    content: ReactNode;
    placement?: Placement;
    delay?: number | { open: number; close: number };
    children: ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({
    content,
    placement = 'top',
    delay = { open: 100, close: 100 },
    children,
}) => {
    const [open, setOpen] = useState(false);

    const { refs, floatingStyles, context } = useFloating({
        placement,
        open,
        onOpenChange: setOpen,
        middleware: [offset(8), flip(), shift()],
    });

    // Hover interaction (mouse)
    const hover = useHover(context, {
        move: false,
        delay,
    });

    // Focus interaction (keyboard)
    const focus = useFocus(context);

    // Dismiss on escape or clicking outside
    const dismiss = useDismiss(context);

    // ARIA role for accessibility
    const role = useRole(context, { role: 'tooltip' });

    // Merge all interaction props
    const { getReferenceProps, getFloatingProps } = useInteractions([
        hover,
        focus,
        dismiss,
        role,
    ]);

    return (
        <>
            <div
                ref={refs.setReference}
                {...getReferenceProps()}
                className="inline-block"
            >
                {children}
            </div>

            {open && (
                <div
                    ref={refs.setFloating}
                    style={floatingStyles}
                    {...getFloatingProps()}
                    className="bg-background-950 z-50 w-max max-w-sm rounded-lg p-3 text-white shadow-lg"
                >
                    {content}
                </div>
            )}
        </>
    );
};
