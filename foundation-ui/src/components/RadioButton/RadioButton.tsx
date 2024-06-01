import React from 'react';
import { IRadioButtonProps } from './RadioButton.d';

const RadioButton = ({
	id,
	ariaLabel,
	radioValue,
	radioName,
	radioLabel,
	disabled = false,
	inputStyle,
	labelStyle,
	containerStyle,
	onChange,
	...restProps
}: IRadioButtonProps) => {

	const handleChange = () => {
		if (onChange) {
			onChange(radioValue);
		}
	};

	return (
		<div className={containerStyle} data-testid="foundation-radio-button">
			<label htmlFor={id} className={labelStyle}>
				<input
					type="radio"
					aria-label={ariaLabel}
					id={id}
					className={inputStyle}
					onChange={handleChange}
					name={radioName}
					value={radioValue}
					disabled={disabled}
					{...restProps}
				/>
				{radioLabel}
			</label>
		</div>
	);
};

export default RadioButton;
