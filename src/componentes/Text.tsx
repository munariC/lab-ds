 import { ReactNode } from 'react';
 import { Slot } from '@radix-ui/react-slot';
 import { clsx } from 'clsx';
 

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

export function Text({size = 'md', children, asChild}: TextProps) {
    const Comp = asChild ? Slot : 'span';
    return (
        <Comp 
        className={clsx("text-gray-700 font-sans",
        {
          'text-sm': size === 'sm',
          'text-md': size === 'md',
          'text-lg': size === 'lg',
        }
        )}
        >
            {children}
        </Comp>
    )
}