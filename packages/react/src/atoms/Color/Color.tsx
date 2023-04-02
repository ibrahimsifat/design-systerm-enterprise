import "@ds.e/scss/lib/Utilities.css";
import * as React from "react";
import spacing from "../../foundation/spacing";
export interface IColorProps {
  hexCode: string;
  width?: string;
  height?: string;
}

const Color: React.FC<IColorProps> = ({
  hexCode,
  width = spacing.sm,
  height = spacing.sm,
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
