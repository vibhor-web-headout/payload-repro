'use client';

import React from 'react';
import {
    useAllFormFields,
    useFormFields
} from 'payload/components/forms';

import { useDrawerSlug } from 'payload/dist/admin/components/elements/Drawer/useDrawerSlug';

import DrawerToggleWrapper from './components/DrawerToggle';
import {IMediaSelectionComponent, TMediaType} from './components/DrawerToggle/interface';

const MediaSection = ({ path, custom }: IMediaSelectionComponent) => {
    const urlFieldPath = path.concat('.', 'url');
    const mediaTypeFieldPath = path.concat('.', 'type');

    const [_, dispatchFields] = useAllFormFields();

    const [selectedMediaUrl, selectedMediaType] = useFormFields<
        [string, TMediaType]
    >(([fields]) => [
        fields[urlFieldPath]?.value as string,
        fields[mediaTypeFieldPath]?.value as TMediaType
    ]);

    const drawerSlug = useDrawerSlug('media-selector');

    return (
        <div className={'image-selector'}>
            <DrawerToggleWrapper
                url={selectedMediaUrl}
                type={selectedMediaType}
                slug={drawerSlug}
            />
        </div>
    );
};

export default MediaSection;
