import React, { ReactNode } from 'react';
import Link from 'next/link';

import { ButtonVariant } from '@/components/ui';
import { getButtonClass } from '@/components/ui/util';

export interface LinkButtonProps {
    children?: ReactNode;
    variant?: ButtonVariant;
    href: string;
    className?: string;
}

export const LinkButton = ({
    children,
    variant = 'primary',
    href,
    className,
}: LinkButtonProps) => {
    return (
        <Link className={getButtonClass(variant, className)} href={href}>
            {children}
        </Link>
    );
};
