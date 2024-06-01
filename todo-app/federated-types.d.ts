// federated-types.d.ts

declare module "foundation_ui/Button" {
  import React from "react";
  interface ButtonProps {
    type?: string;
    label: string;
    onClick?: () => void;
    btnStyle?: string;
  }
  const Button: React.ComponentType<ButtonProps>;
  export default Button;
}

declare module "foundation_ui/Checkbox" {
  import React from "react";
  interface CheckboxProps {
    containerStyle?: string;
    labelStyle?: string;
    label: React.ReactNode;
    checked: boolean;
    onChange: () => void;
    checkboxStyle?: string;
  }
  const Checkbox: React.ComponentType<CheckboxProps>;
  export default Checkbox;
}

declare module "foundation_ui/RadioButton" {
  import React from "react";
  interface RadioButtonProps {
    id: string;
    labelStyle?: string;
    inputStyle?: string;
    radioLabel: string;
    radioName: string;
    radioValue: string;
    onChange: (selectedRadioVal: string) => void;
  }
  const RadioButton: React.ComponentType<RadioButtonProps>;
  export default RadioButton;
}

declare module "foundation_ui/TextBox" {
  import React, { InputHTMLAttributes } from "react";
  interface TextBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    labelStyle?: string;
    labelText: string;
    inputStyle?: string;
  }
  const TextBox: React.ComponentType<TextBoxProps>;
  export default TextBox;
}
