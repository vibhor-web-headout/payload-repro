import type { Field, RadioField, TextField } from 'payload/types';

import titleField from './title';
import descriptionField from './description';
import {mediaField} from './mediaSelector';

const cardLinkTypeField: RadioField = {
    label: 'Link Type',
    name: 'cardLinkType',
    options: [
        {
            label: 'Title',
            value: 'Title'
        },
        {
            label: 'Full Card',
            value: 'Full Card'
        }
    ],
    type: 'radio'
};

const ctaTextField: TextField = {
    name: 'ctaText',
    label: 'CTA Text',
    type: 'text',
    localized: true
};

export const cardFieldList: Field[] = [
    titleField(),
    descriptionField(),
    cardLinkTypeField,
    ctaTextField,
    mediaField()
];
