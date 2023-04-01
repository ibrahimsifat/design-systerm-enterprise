import * as React from "react";

export interface IColorProps {
  hexCode: string;
  width: string;
  height: string;
}

const Color: React.FC<IColorProps> = ({ hexCode, width, height }) => {
  return <div style={{ backgroundColor: hexCode, width, height }}></div>;
};
export default Color;
