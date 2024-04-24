import type { ReactNode } from 'react';

export interface IConditionalRender {
    if: boolean;
    children: ReactNode;
}
