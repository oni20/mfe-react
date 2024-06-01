import { LegacyRef, MouseEvent, PropsWithChildren, ReactNode } from 'react';

export enum EButtonType {
	/**
	 * Button type enums
	 */
	BUTTON = 'button',
	SUBMIT = 'submit',
	RESET = 'reset',
}

export interface IButtonProps extends PropsWithChildren {
	/**
	 * Accepts a string value of Tailwind typography classes used for controlling
	 * the button's style.
	 */
	btnStyle?: string;

	/**
	 * Accepts a string to be used as the label for the button.
	 */
	label: string | ReactNode;

	/**
	 * Sets an attribute `type` to the button for form submission or general
	 * button functionality.
	 */
	btnType?: `${EButtonType}`;

	/**
	 * A reference to the button element, typically used for accessing and
	 * manipulating the button's properties and behavior programmatically.
	 */
	buttonRef?: LegacyRef<HTMLButtonElement>;

	/**
	 * A callback function triggered when the button is clicked, allowing for
	 * custom logic or actions.
	 */
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;

	[key: string]: any;
}
