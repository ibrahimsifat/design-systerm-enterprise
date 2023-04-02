import { Spacing } from "@ds.e/foundation";
import "@ds.e/scss/lib/Utilities.css";
import * as React from "react";
export interface IColorProps {
  hexCode: string;
  width?: keyof typeof Spacing;
  height?: keyof typeof Spacing;
}

const Color: React.FC<IColorProps> = ({
  hexCode,
  width = Spacing.sm,
  height = Spacing.sm,
}) => {
  const className = `dse-width-${width} dse-height-${height}`;
  return (
    <div
      className={className}
      style={{ backgroundColor: hexCode, width, height }}
    ></div>
  );
};
export default Color;
