import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  btnStyle?: string;
}

const Button = ({ label, onClick, btnStyle }: ButtonProps) => (
  <button onClick={onClick} className={btnStyle}>
    {label}
  </button>
);

export default Button;
