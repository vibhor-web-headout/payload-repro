import {UIField} from 'payload/types';

export type TMediaType = 'IMAGE' | 'VIDEO';

export interface IMediaSelectionComponent extends UIField {
    path: string;
    custom: {
        imageOnly?: boolean;
    };
}

export interface IDrawerToggleWrapper {
    type: TMediaType;
    url?: string;
    slug: string;
}
