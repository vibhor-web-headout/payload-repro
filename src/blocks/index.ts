import type { Block, BlockField } from 'payload/types';

/**
 * Placeholder Blocks
 *
 * These blocks do not contain any field data and will have all the required data added at the Backend layer
 */

import CardSection from './CardSection';
import TabWrapper from './TabWrapper';
import Accordion from './Accordion';
import {getWrappedBlockListWithBaseFields, mandatoryBlockValidationHook} from '../utils/blockUtils';

const rootBlockList: Block[] = [
    Accordion,
    CardSection,
    TabWrapper
];

/**
 * Wrap all the blocks with two fields
 * 1. Checkbox Field: Prevent displaying other fields on admin panel and on client website UI
 * 2. Group Field: Encapsulate all fields of the block within a property "blockData"
 */
const PageBlockList: Block[] = getWrappedBlockListWithBaseFields(rootBlockList);

const DocumentBlock: BlockField = {
    name: 'blocks',
    type: 'blocks',
    minRows: 0,
    maxRows: 30,
    blocks: PageBlockList,
    hooks: {
        beforeValidate: [mandatoryBlockValidationHook]
    }
};

export { PageBlockList };
export default DocumentBlock;
