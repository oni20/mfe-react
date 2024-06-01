import React, { useEffect, useRef } from "react";
import { ICheckBoxProps } from "./Checkbox.d";

const Checkbox = (props: ICheckBoxProps) => {
  const {
    id,
    label,
    checked,
    indeterminate,
    onChange,
    children,
    containerStyle = "flex items-center",
    labelStyle = "text-gray-700 text-base",
    checkboxStyle = "h-4 w-4 text-blue-600",
    ...restProps
  } = props;
  const checkboxRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!!checkboxRef.current) {
      checkboxRef.current.checked = checked;
      checkboxRef.current.indeterminate = !!indeterminate;
    }
  }, [checked, indeterminate]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <label
      htmlFor={id}
      className={containerStyle}
      data-testid="foundation-checkbox"
    >
      <input
        ref={checkboxRef}
        id={id}
        type="checkbox"
        className={checkboxStyle}
        onChange={handleCheckboxChange}
        {...restProps}
      />
      <span className={`ml-2 hover:cursor-pointer ${labelStyle}`}>{label}</span>
      {children}
    </label>
  );
};

export default Checkbox;
