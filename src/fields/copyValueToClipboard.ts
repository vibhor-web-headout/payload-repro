import type { Field, TextField } from 'payload/types';

import {deepMerge} from 'payload/utilities';
import CopyToClipboardComponent from '../components/CopyToClipboard';

const copyValueToClipboardField = (overrides: Partial<TextField> = {}) =>
    deepMerge(
        {
            name: 'copyToClipboard',
            type: 'text',
            admin: {
                components: {
                    Field: CopyToClipboardComponent
                },
                readOnly: true
            }
        },
        overrides
    );

export default copyValueToClipboardField;
