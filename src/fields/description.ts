import type { RichTextField } from 'payload/dist/fields/config/types';

import richTextField from './richText';
import {deepMerge} from 'payload/utilities';

const descriptionField = (overrides: Partial<RichTextField> = {}) =>
    richTextField(
        deepMerge(
            {
                name: 'description',
                localized: true
            },
            overrides
        )
    );

export default descriptionField;
