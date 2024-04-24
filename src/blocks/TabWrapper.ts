import type {
    ArrayField,
    Block,
    BlockField,
    CheckboxField,
    RowField
} from 'payload/types';
import {getWrappedBlockListWithBaseFields} from '../utils/blockUtils';
import CardSection from './CardSection';
import titleField from '../fields/title';
import descriptionField from '../fields/description';

/**
 * Passing blocks directly overrides generated types for the blocks.
 * Using the below sanitise and wrap fields to enforce same types across
 * Adds "displayBlock" field to all blocks.
 */
const tabWrapperBlockList = getWrappedBlockListWithBaseFields([ CardSection ]);

const TabBlockField: BlockField = {
    blocks: tabWrapperBlockList,
    name: 'tabContent',
    type: 'blocks',
    minRows: 1
};

const DefaultTabField: CheckboxField = {
    type: 'checkbox',
    name: 'isDefaultOpen',
    label: 'Default Open',
    required: true,
    defaultValue: false
};

const TabMetaField: RowField = {
    type: 'row',
    fields: [titleField(), DefaultTabField]
};

const TabArrayList: ArrayField = {
    fields: [TabMetaField, TabBlockField],
    interfaceName: 'ITabArrayList',
    name: 'tabItems',
    label: {
        singular: 'Tab',
        plural: 'Tabs'
    },
    type: 'array',
    admin: {
        description: `This field contains the "Tab's" information. (title, blocks, etc)`
    }
};

const TabWrapper: Block = {
    fields: [
        titleField({
            label: 'Tab Section Title'
        }),
        descriptionField(),
        TabArrayList
    ],
    interfaceName: 'ITabWrapper',
    slug: 'tab-wrapper'
};

export default TabWrapper;
