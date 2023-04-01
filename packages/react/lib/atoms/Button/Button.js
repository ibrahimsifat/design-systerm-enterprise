import '@ds.e/scss/lib/Button.css';
import React from 'react';

const Button = ({ title, children, onClick }) => (React.createElement("button", { title: title, onClick: onClick, className: "btn btn-primary" }, children));

export { Button as default };
//# sourceMappingURL=Button.js.map
