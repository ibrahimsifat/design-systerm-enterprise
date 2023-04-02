import { FontSize } from '@ds.e/foundation';
import '@ds.e/scss/lib/Text.css';
import React__default from 'react';

const Text = ({ size = FontSize.base, children }) => {
    const className = `dse-text dse-text-${size}`;
    return React__default.createElement("p", { className: className }, children);
};

export { Text as default };
//# sourceMappingURL=Text.js.map
