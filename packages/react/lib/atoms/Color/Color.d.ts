import "@ds.e/scss/lib/Utilities.css";
import * as React from "react";
import spacing from "../../foundation/spacing";
export interface IColorProps {
    hexCode: string;
    width?: keyof typeof spacing;
    height?: keyof typeof spacing;
}
declare const Color: React.FC<IColorProps>;
export default Color;
