import type { MouseEventHandler } from 'react';
import type React from 'react';
import {TMediaType} from '../DrawerToggle/interface';

export interface IThumbnailWrapper {
    label?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    className?: string;
    size?: 'small' | 'medium' | 'large' | 'expand';
    children: React.ReactNode;
}

export interface IImageThumbnail extends Omit<IThumbnailWrapper, 'children'> {
    url?: string;
}

export interface IMediaItemThumbnail extends IImageThumbnail {
    type: TMediaType;
}
