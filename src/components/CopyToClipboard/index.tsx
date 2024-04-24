import React from 'react';

import type { Props } from 'payload/components/fields/Text';
import { Label } from 'payload/components/forms';
import CopyToClipboard from 'payload/dist/admin/components/elements/CopyToClipboard';
import useField from 'payload/dist/admin/components/forms/useField';

import './style.scss';

const CopyToClipboardComponent = ({ label, required, path = '' }: Props) => {
    const { value } = useField<string>({ path: path });

    return (
        <div className={'copy-to-clipboard-section flex'}>
            <Label label={label} required={required} />
            <span className={'value'}>{value}</span>
            <CopyToClipboard value={value} />
        </div>
    );
};

export default CopyToClipboardComponent;
