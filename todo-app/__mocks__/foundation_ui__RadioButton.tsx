import React from "react";

interface RadioButtonProps {
  radioLabel: string;
  onChange: (value: any) => void;
  radioValue: string;
}

const RadioButton = ({
  radioLabel,
  onChange,
  radioValue,
}: RadioButtonProps) => (
  <label>
    <input
      type="radio"
      value={radioValue}
      onChange={() => onChange(radioValue)}
    />
    {radioLabel}
  </label>
);

export default RadioButton;
