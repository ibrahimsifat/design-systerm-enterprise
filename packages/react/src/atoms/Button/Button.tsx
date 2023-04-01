import React from "react";

interface ButtonProps {
  title: string;
  children: React.ReactNode;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({ title, children, onClick }) => (
  <div title={title} onClick={onClick} className="btn btn-primary">
    {children}
  </div>
);
export default Button;
