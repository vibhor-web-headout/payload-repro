import type { UIField } from 'payload/types';

export interface IMediaSelectionComponent extends UIField {
    path: string;
    custom: {
        imageOnly?: boolean;
    };
}
