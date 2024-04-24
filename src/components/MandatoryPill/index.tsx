import React, { useCallback, useEffect } from 'react';

import type { Props } from 'payload/components/fields/Checkbox';
import { Pill } from 'payload/dist/admin/components';
import FieldDescription from 'payload/dist/admin/components/forms/FieldDescription';
import useField from 'payload/dist/admin/components/forms/useField';

import './style.scss';

const description =
    'Publishing or drafting the page without this slice will result in an error';

const MandatoryPill = ({ path = '', name }: Props) => {
    const { value } = useField({ path });

    /**
     * Disable the remove option present in the block's header options if the current block is required.
     * Logic on how payload is creating classname & id can be found below.
     * Re-constructing the id using their logic to find the exact child button element to disable.
     *
     * Refer to: https://github.com/payloadcms/payload/blob/master/src/admin/components/forms/field-types/Blocks/BlockRow.tsx#L70
     */
    const disableDeleteButtonWithinHeader = useCallback(() => {
        const pathSplitList: string[] = path
            .split('.')
            .filter(currentName => currentName !== name);

        pathSplitList.splice(pathSplitList.length - 1, 0, 'row');

        const blockElementId: string = pathSplitList.join('-');

        const blockElement = document.getElementById(blockElementId);
        const removeButtonElement = blockElement?.querySelector(
            '.array-actions__remove'
        );

        if (!removeButtonElement) {
            return;
        }

        removeButtonElement.setAttribute('disabled', 'true');
        removeButtonElement.classList.add('mandatory-disabled-remove-btn');
    }, [path, name]);

    useEffect(() => {
        !!value && disableDeleteButtonWithinHeader();
    }, [value, path, disableDeleteButtonWithinHeader]);

    if (!value) {
        return null;
    }

    return (
        <div style={{ width: '50%' }}>
            <Pill pillStyle={'error'}>Mandatory Block</Pill>
            <FieldDescription description={description} />
        </div>
    );
};

export default MandatoryPill;
