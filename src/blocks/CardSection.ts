import type {
    ArrayField,
    Block,
    NumberField,
    RadioField,
    RowField
} from 'payload/types';
import titleField from '../fields/title';
import {cardFieldList} from '../fields/card';
import descriptionField from '../fields/description';

const sectionTypeField: RadioField = {
    label: 'Section Type',
    name: 'sectionType',
    required: true,
    options: [
        {
            label: 'Grid',
            value: 'Grid'
        },
        {
            label: 'Carousel',
            value: 'carousel'
        }
    ],
    defaultValue: 'Grid',
    type: 'radio'
};

const cardRowCountField: NumberField = {
    label: 'Cards In a Row',
    name: 'cardInARow',
    type: 'number',
    min: 1,
    max: 4,
    defaultValue: 1,
    required: true,
    admin: {
        width: '50%',
        description: 'Number of cards to be present in one row'
    }
};

const sectionMetaRowField: RowField = {
    fields: [
        titleField({
            label: 'Section Title',
            admin: {
                width: '50%'
            },
            required: false
        }),
        cardRowCountField,
        sectionTypeField
    ],
    type: 'row'
};

const cardArrayField: ArrayField = {
    fields: cardFieldList,
    minRows: 1,
    name: 'cards',
    label: 'Cards',
    type: 'array'
};

const CardSection: Block = {
    fields: [
        sectionMetaRowField,
        descriptionField(),
        cardArrayField,
        descriptionField({
            name: 'exitDescription',
            label: 'Exit Description'
        })
    ],
    slug: 'card-section',
    interfaceName: 'ICardSection'
};

export default CardSection;
