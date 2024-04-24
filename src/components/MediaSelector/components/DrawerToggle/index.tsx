import React from 'react';

import { DrawerToggler } from 'payload/dist/admin/components/elements/Drawer';

import './style.scss';
import { IMAGE_LABEL } from './constants';
import type { IDrawerToggleWrapper } from './interface';
import { MediaItemThumbnail } from '../Thumbnail';

const DrawerToggleWrapper = ({
    url,
    slug,
    type = 'IMAGE'
}: IDrawerToggleWrapper) => {
    const label = url ? IMAGE_LABEL.modify : IMAGE_LABEL.select;

    const wrapperClass = 'image-selector-toggle'.concat(url ? ' selected' : '');

    return (
        <DrawerToggler className={wrapperClass} slug={slug}>
            <MediaItemThumbnail type={type} label={label} url={url} />
        </DrawerToggler>
    );
};

export default DrawerToggleWrapper;
