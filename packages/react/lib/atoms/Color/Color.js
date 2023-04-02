import '@ds.e/scss/lib/Utilities.css';
import * as React from 'react';
import spacing from '../../foundation/spacing.js';

const Color = ({ hexCode, width = spacing.sm, height = spacing.sm, }) => {
    const className = `dse-width-${width} dse-height-${height}`;
    return (React.createElement("div", { className: className, style: { backgroundColor: hexCode, width, height } }));
};

export { Color as default };
//# sourceMappingURL=Color.js.map
