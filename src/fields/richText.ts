import { lexicalEditor } from '@payloadcms/richtext-lexical';

import {deepMerge} from 'payload/utilities';


const NOT_ALLOWED_FEATURE_LIST = ['relationship', 'upload'];

const richTextField = (overrides = {}) =>
    deepMerge(
        {
            name: 'richText',
            type: 'richText',
            editor: lexicalEditor({
                features: ({ defaultFeatures }) =>
                    defaultFeatures.filter(
                        ({ key }) => !NOT_ALLOWED_FEATURE_LIST.includes(key)
                    )
            })
        },
        overrides
    );

export default richTextField;
