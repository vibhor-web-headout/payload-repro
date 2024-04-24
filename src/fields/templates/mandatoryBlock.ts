import type { CheckboxField } from 'payload/types';

import MandatoryPill from '../../components/MandatoryPill';

import {MANDATORY_FIELD_KEY} from '../../const/template';

const mandatoryBlockField: CheckboxField = {
    name: MANDATORY_FIELD_KEY,
    type: 'checkbox',
    defaultValue: false,
    admin: {
        width: '50%',
        readOnly: true,
        components: {
            Field: MandatoryPill
        }
    }
};

export default mandatoryBlockField;
