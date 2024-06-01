import React from "react";

interface CheckboxProps {
  containerStyle?: string;
  labelStyle?: string;
  label: React.ReactNode;
  checked: boolean;
  onChange: () => void;
  checkboxStyle?: string;
}

const Checkbox = ({
  label,
  checked,
  onChange,
  checkboxStyle,
}: CheckboxProps) => (
  <div>
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={checkboxStyle}
    />
    {label}
  </div>
);

export default Checkbox;
