import "@ds.e/scss/lib/Button.css";
import React from "react";
interface ButtonProps {
  title: string;
  children: React.ReactNode;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({ title, children, onClick }) => (
  <button title={title} onClick={onClick} className="btn btn-primary">
    {children}
  </button>
);
export default Button;
