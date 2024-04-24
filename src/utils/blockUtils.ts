import { ValidationError } from 'payload/errors';
import type { Page } from 'payload/generated-types';
import type {
    Block,
    Field,
    FieldHook,
    GroupField,
    RowField
} from 'payload/types';
import displayBlockField from '../fields/templates/displayBlock';
import mandatoryBlockField from '../fields/templates/mandatoryBlock';

export const getWrappedBlockFields = (
    fields: Field[]
): [GroupField, RowField] => [
    {
        fields,
        name: 'blockData',
        type: 'group',
        admin: {
            condition: (
                _data: Partial<Page>,
                siblingData: { displayFields?: boolean }
            ) => {
                return !!siblingData.displayFields;
            }
        }
    },
    {
        type: 'row',
        fields: [displayBlockField, mandatoryBlockField]
    }
];

export const getWrappedBlockWithBaseFields = ({
    fields,
    ...restBlockProperties
}: Block): Block => ({
    fields: getWrappedBlockFields(fields),
    ...restBlockProperties
});

export const getWrappedBlockListWithBaseFields = (
    blockList: Block[]
): Block[] => {
    return blockList.map(getWrappedBlockWithBaseFields);
};

/**
 * Hook to validate if even a single 'mandatory' block has been removed from block list.
 *
 * @param originalDoc: Original Doc before the update
 */
export const mandatoryBlockValidationHook: FieldHook<
    Page,
    Array<Record<string, string>>,
    string
> = ({ originalDoc, value }) => {
    const originalMandatoryBlocks = originalDoc?.content?.blocks?.filter(
        ({ required }) => required
    );
    const incomingBlocks = value?.filter(({ blockType }) => !!blockType);

    originalMandatoryBlocks?.forEach(({ id, blockType }) => {
        const hasMandatoryBlock: boolean =
            incomingBlocks?.findIndex(
                updatedBlock => updatedBlock.id === id
            ) !== -1;

        if (hasMandatoryBlock) {
            return;
        }

        throw new ValidationError([
            {
                message: `A mandatory block has been removed. Block name: ${blockType}`,
                field: 'content.blocks'
            }
        ]);
    });

    return value || [];
};
