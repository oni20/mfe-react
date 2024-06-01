import { LegacyRef, ChangeEvent } from 'react';

export interface ITextBoxProps {
	/**
	 * A reference to the button element, typically used for accessing and
	 * manipulating the button's properties and behavior programmatically.
	 */
	inputRef?: LegacyRef<HTMLInputElement>;
	/**
	 * Callback function used to handle the inputs onChange event
	 */
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	/**
	 * Defines the inputs placeholder text
	 */
	placeholder?: string;
	/**
	 * Styles applied to the input element
	 */
	inputStyle?: string;
	/**
	 * Styles applied to the label element
	 */
	labelStyle?: string;
	/**
	 * Defines the labels text
	 */
	labelText: string;
	/**
	 * ID applied to input, which is connects it to the label
	 */
	inputId: string;
	/**
	 * Toggles whether input has aria-required
	 */
	ariaRequired?: boolean;
	/**
	 * Defines the helper text's content. Note: If nothing is passed, it won't render, and a react node can be passed
	 */
	helperText?: string | React.ReactNode;
	/**
	 * Styles applied to the helper text
	 */
	helperTextStyle?: string;
	/**
	 * Toggles if helper text has aria-hidden
	 */
	isHelperTextAriaHidden?: boolean;
	/**
	 * Add an id to helper text for input aria-describedby
	 */
	helperTextId?: string;	
}
