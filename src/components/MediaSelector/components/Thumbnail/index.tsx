import React from 'react';

import FieldDescription from 'payload/dist/admin/components/forms/FieldDescription';

import './style.scss';
import type {
    IImageThumbnail,
    IMediaItemThumbnail,
    IThumbnailWrapper
} from './interface';
import Conditional from '../../../Conditional';
import {appendQueryStringToUrl} from '../../../../utils/urlUtils';

const ThumbnailWrapper = ({
    onClick,
    label,
    className = '',
    size = 'medium',
    children
}: IThumbnailWrapper) => {
    const wrapperClass =
        `media-selector-thumbnail thumbnail thumbnail--size-${size} `.concat(
            className
        );

    return (
        <div className={wrapperClass} onClick={onClick}>
            {children}
            <Conditional if={!!label}>
                <FieldDescription
                    description={label}
                    className={'thumbnail-description'}
                />
            </Conditional>
        </div>
    );
};

export const ImageThumbnail = ({ url, ...restProps }: IImageThumbnail) => {
    const imageSrc = url
        ? appendQueryStringToUrl(url, {
              w: 250,
              auto: 'format,compress'
          })
        : require('../../../../assets/images/add-image-icon-padded.png');

    return (
        <ThumbnailWrapper {...restProps}>
            <img src={imageSrc} alt={restProps.label} loading={'lazy'} />
        </ThumbnailWrapper>
    );
};

export const MediaItemThumbnail = ({
    type,
    ...thumbnailProps
}: IMediaItemThumbnail) => {
    return (
        <React.Fragment>
            <ImageThumbnail {...thumbnailProps} />
        </React.Fragment>
    );
};
