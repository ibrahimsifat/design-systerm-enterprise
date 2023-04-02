import "@ds.e/scss/lib/Utilities.css";
import * as React from "react";
export interface IColorProps {
    hexCode: string;
    width?: string;
    height?: string;
}
declare const Color: React.FC<IColorProps>;
export default Color;
