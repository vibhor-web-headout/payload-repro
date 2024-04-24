import type { CheckboxField } from 'payload/types';

const displayBlockField: CheckboxField = {
    name: 'displayFields',
    label: 'Start editing fields',
    type: 'checkbox',
    defaultValue: false,
    admin: {
        width: '50%',
        description:
            'When selected, it prevents field level validations as well as displaying block on the UI'
    }
};

export default displayBlockField;
