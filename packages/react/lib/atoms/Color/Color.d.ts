import { Spacing } from "@ds.e/foundation";
import "@ds.e/scss/lib/Utilities.css";
import * as React from "react";
export interface IColorProps {
    hexCode: string;
    width?: keyof typeof Spacing;
    height?: keyof typeof Spacing;
}
declare const Color: React.FC<IColorProps>;
export default Color;
