import "@ds.e/scss/lib/Select.css";
import React from "react";
interface SelectOptions {
    label: string;
    value: string;
}
interface SelectProps {
    label?: string;
    options?: Array<SelectOptions>;
    onOptionSelected?: (option: SelectOptions, optionIndex: number) => void;
}
declare const Select: React.FC<SelectProps>;
export default Select;
