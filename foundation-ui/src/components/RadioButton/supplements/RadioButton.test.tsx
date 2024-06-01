import React from "react";
import { jest } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";

import RadioButton from "../RadioButton";
import { IRadioButtonProps } from "../RadioButton.d";

import "@testing-library/jest-dom/extend-expect";

describe("Radio Button", () => {
  const ON_CHANGE_MOCK = jest.fn();
  const RADIO_BUTTON_TEST_ID = "foundation-radio-button";

  const DEFAULT_PROPS: IRadioButtonProps = {
    id: "radio-button--default",
    checked: false,
    disabled: false,
    radioValue: "Huey",
    ariaLabel: "Radio Button",
    inputStyle: "input-class",
    labelStyle: "label-class",
    onChange: ON_CHANGE_MOCK,
    radioName: "",
    radioLabel: "",
  };

  beforeEach(() => {
    render(<RadioButton {...DEFAULT_PROPS} />);
  });

  test("Should create the component", async () => {
    const RADIO_ELEMENT = screen.getByTestId(RADIO_BUTTON_TEST_ID);
    expect(RADIO_ELEMENT).toBeTruthy();
  });

  test("Should call onChange when radio button is changed", () => {
    const RADIO_INPUTs = screen.getAllByRole("radio");
    const RADIO_INPUT = RADIO_INPUTs[0];

    expect(RADIO_INPUT).not.toBeChecked();

    fireEvent.click(RADIO_INPUT);

    expect(ON_CHANGE_MOCK).toHaveBeenCalledTimes(1);
  });
});
