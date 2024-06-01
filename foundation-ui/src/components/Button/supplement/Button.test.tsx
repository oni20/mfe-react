import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from '../Button';

describe('Button component', () => {
	const onClickMock = jest.fn();

	test('renders with correct text', () => {
		const { getByText } = render(
			<Button
				btnType="button"
				btnStyle="default"
				onClick={onClickMock}
				label="Click me"
			/>
		);
		const button = getByText('Click me');
		expect(button).toBeInTheDocument();
	});

	test('calls onClick function when clicked', () => {
		const { getByText } = render(
			<Button
				btnType="button"
				btnStyle="default"
				onClick={onClickMock}
				label="Click me"
			/>
		);
		const button = getByText('Click me');
		fireEvent.click(button);
		expect(onClickMock).toHaveBeenCalledTimes(1);
	});

	test('has the correct button type and style', () => {
		const { container } = render(
			<Button
				btnType="submit"
				btnStyle="primary"
				onClick={onClickMock}
				label="Submit"
			/>
		);
		const button = container.querySelector('button');
		expect(button).toHaveAttribute('type', 'submit');
		expect(button).toHaveClass('primary');
	});
});
