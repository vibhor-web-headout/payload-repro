import type { ArrayField, Block, CheckboxField } from 'payload/types';
import {canCreateOrUpdateLocalizedField, canCreateOrUpdateNonLocalizedField} from '../rbac';
import titleField from '../fields/title';
import descriptionField from '../fields/description';

const useFaqSchema: CheckboxField = {
    name: 'useFaqSchema',
    type: 'checkbox',
    label: 'Use FAQ Schema',
    required: true,
    localized: true,
    admin: {
        description: 'Use this flag to enable SEO schema for FAQs'
    },
    access: {
        create: canCreateOrUpdateLocalizedField,
        update: canCreateOrUpdateNonLocalizedField
    }
};

/**
 * NOTE: Since the array field is not localised, the item count will always be replicated across locales
 * This is being done for demo purposes.
 */
const AccordionList: ArrayField = {
    name: 'items',
    type: 'array',
    label: 'Items',
    fields: [titleField(), descriptionField()]
};

const Accordion: Block = {
    fields: [titleField(), useFaqSchema, AccordionList],
    slug: 'accordion',
    interfaceName: 'IAccordion'
};

export default Accordion;
