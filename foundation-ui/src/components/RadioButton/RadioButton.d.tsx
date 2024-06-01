export interface IRadioButtonProps {
  /**
   * Accepts a string to be used as the unique identifier for the radio button
   * element.
   */
  id: string;

  /**
   * Accepts a string of classes to be applied to the radio button input
   * element.
   */
  inputStyle?: string;

  /**
   * Accepts a string to be used as the value associated with the radio button
   * to identify which option is selected among a group of radio buttons.
   */
  radioValue: string;

  /**
   * Accepts a string to be used as the name of the radio button.
   */
  radioName: string;

  /**
   * Accepts a string to be used as the label for the radio button.
   */
  radioLabel: string;

  /**
   * Accepts a string to be used as the aria-label for the radio button element
   * for screen readers to describe the radio button's purpose or function.
   */
  ariaLabel?: string;

  /**
   * Accepts a string of classes to be applied to the label element associated
   * with the radio button.
   */
  labelStyle?: string;

  /**
   * Accepts a string of classes to be applied to the container associated with
   * the radio button.
   */
  containerStyle?: string;

  /**
   * Determines if the radio button is disabled or not, preventing user
   * interaction.
   */
  disabled?: boolean;

  /**
   * A callback function that is called when the radio button's value changes.
   * @param value - The new value of the radio button.
   */
  onChange?: (value: string) => void;

  /**
   * Allows indexing an object with any string key and accessing the value as
   * `any` type to provide type safety for the properties passed to the
   * RadioButton component.
   */
  [x: string]: any;
}
