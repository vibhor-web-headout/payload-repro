import React from 'react';

import type { IConditionalRender } from './interface';

const Conditional = ({ if: condition, children }: IConditionalRender) => {
    return condition ? <React.Fragment>{children}</React.Fragment> : null;
};

export default Conditional;
