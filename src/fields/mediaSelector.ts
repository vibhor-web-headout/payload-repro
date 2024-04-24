import type { Field, GroupField, TextField, UIField } from 'payload/types';

import copyValueToClipboardField from './copyValueToClipboard';
import {checkRole} from '../rbac';
import MediaSection from '../components/MediaSelector';

export interface IMediaSelectorFieldOptions {
    imageOnly?: boolean;
    label?: string;
    excludeAltText?: boolean;
    name?: string;
}


const altTextField: TextField = {
    type: 'text',
    required: true,
    name: 'alt',
    label: 'Alt Text',
    defaultValue: 'Some alt text',
    localized: true,
    admin: {
        width: '60%',
        description: 'Default alt text will be taken from Scorpio media table'
    }
};

const mediaSelectorUIField: UIField = {
    type: 'ui',
    name: 'mediaSelector',
    admin: {
        components: {
            Field: MediaSection
        }
    }
};

const getMediaSelectorRowFields = (
    imageOnly = false,
    excludeAltText = false
) => {
    const requiredFields: Field[] = [
        {
            ...mediaSelectorUIField,
            custom: {
                imageOnly
            }
        }
    ];

    if (!excludeAltText) {
        requiredFields.push(altTextField);
    }

    return requiredFields;
};

export const mediaField = (
    {
        excludeAltText,
        imageOnly,
        label = 'Media',
        name = 'media'
    }: IMediaSelectorFieldOptions = {
        excludeAltText: false,
        imageOnly: false
    }
): GroupField => ({
    type: 'group',
    name,
    label,
    interfaceName: 'IMedia',
    access: {
        read: () => true,
        create: ({ req }) => checkRole(['admin', 'media', 'editor'], req.user),
        update: ({ req }) => checkRole(['admin', 'media', 'editor'], req.user)
    },
    fields: [
        {
            type: 'row',
            fields: getMediaSelectorRowFields(imageOnly, excludeAltText)
        },
        copyValueToClipboardField({
            name: 'url',
            label: 'Url:',
            required: true,
            defaultValue: 'https://cdn-imgix.headout.com/tour/19740/TOUR-IMAGE/34fcd103-e08c-46c9-a81d-57143e1517ba-10590-london-kew-gardens-priority-entrance-ticket-06.jpg?w=250&auto=format%2Ccompress',
            admin: {
                condition: (_, siblingData) => !!siblingData.url
            }
        })
    ]
});
