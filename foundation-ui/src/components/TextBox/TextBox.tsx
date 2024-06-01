import React, { ChangeEvent } from "react";
import { ITextBoxProps } from "./TextBox.d";

const TextBox = (props: ITextBoxProps) => {
  const {
    inputId,
    inputRef,
    onChange,
    inputStyle = 'block border border-gray-300 dark:border-gray-600 dark:focus:ring-blue-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 p-2.5 rounded-lg text-gray-900 text-sm w-full',
    labelText,
    labelStyle = 'block mb-2 text-sm font-medium text-gray-900',
    ariaRequired = false,
    helperText,
    helperTextStyle,
    isHelperTextAriaHidden = true,
    helperTextId = "input-help-text",
    ...restProps
  } = props;

  const handleTextBoxChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <>
      <label htmlFor={inputId} className={labelStyle}>
        {labelText}
      </label>
      <input
        ref={inputRef}
        type="text"
        className={inputStyle}
        id={inputId}
        aria-required={ariaRequired}
        aria-describedby={helperText ? helperTextId : undefined}
        onChange={handleTextBoxChange}
        {...restProps}
      />
      {helperText && (
        <span
          className={`${helperTextStyle}`}
          aria-hidden={isHelperTextAriaHidden}
          id={helperTextId}
        >
          {helperText}
        </span>
      )}
    </>
  );
};

export default TextBox;
