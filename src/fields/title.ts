import type { TextField } from 'payload/types';
import {deepMerge} from 'payload/utilities';

const titleField = (overrides: Partial<TextField> = {}): TextField =>
    deepMerge(
        {
            name: 'title',
            type: 'text',
            localized: true,
            required: true
        },
        overrides
    );

export default titleField;
