import React from "react";
import { EButtonType, IButtonProps } from "./Button.d";

const Button = (props: IButtonProps) => {
  const {
    btnStyle = 'bg-blue-500 hover:bg-blue-700 text-white text-base font-bold py-2 px-4 rounded',
    label,
    btnType = EButtonType.BUTTON,
    onClick,
    buttonRef,
    ...restProps
  } = props;

  const buttonProps = {
    className: `${btnStyle}`,
    ref: buttonRef,
    type: btnType,
    onClick,
  };

  return (
    <button {...buttonProps} {...restProps}>
      {label}
    </button>
  );
};

export default Button;
