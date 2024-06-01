import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  PropsWithChildren,
  ReactNode
} from "react";

export interface ICheckBoxProps
  extends PropsWithChildren,
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  /**
   * Accepts a string to be used as the unique identifier for the checkbox
   * element.
   */
  id: string;

  /**
   * Accepts a string to be used as the label for the checkbox.
   */
  label: string | ReactNode;

  /**
   * Accepts a string of classes to be applied to the checkbox container.
   */
  containerStyle?: string;

  /**
   * Accepts a string of classes to be applied to the checkbox label.
   */
  labelStyle?: string;

  /**
   * Accepts a string of classes to be applied to the checkbox input.
   */

  checkboxStyle?: string;

  /**
   * If `true`, the checkbox is checked. If `false`, the checkbox is not
   * checked. If left undefined, the checkbox is uncontrolled.
   */

  checked: boolean;

  /**
   * If `true`, the checkbox gives an appearance of being in an indetermined
   * state.
   */
  indeterminate?: boolean;

  /**
   * A callback function triggered when the state of the checkbox changes.
   */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
