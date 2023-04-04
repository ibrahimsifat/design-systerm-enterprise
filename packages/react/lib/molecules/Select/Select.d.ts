import "@ds.e/scss/lib/Select.css";
import React from "react";
interface SelectOptions {
    label: string;
    value: string;
}
interface RenderOptionProps {
    isSelected: boolean;
    option: SelectOptions;
    getOptionRecommendedProps: (overrideProps?: Object) => Object;
}
interface SelectProps {
    label?: string;
    options?: Array<SelectOptions>;
    onOptionSelected?: (option: SelectOptions, optionIndex: number) => void;
    renderOption?: (props: RenderOptionProps) => React.ReactNode;
}
declare const Select: React.FC<SelectProps>;
export default Select;
