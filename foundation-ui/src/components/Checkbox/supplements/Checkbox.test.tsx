import React from "react";
import { fireEvent, render } from "@testing-library/react";

import Checkbox from "../Checkbox";
import { ICheckBoxProps } from "../Checkbox.d";

describe("Chekbox Component", () => {
  const DEFAULT_PROPS: ICheckBoxProps = {
    id: "checkbox-id",
    checked: false,
    indeterminate: false,
    onChange: () => alert("changed"),
    label: "Apple",
    containerStyle: "",
    labelStyle: "",
  };

  const DOM_ID = "foundation-checkbox";

  test("Should create the component", () => {
    const { getByTestId } = render(<Checkbox {...DEFAULT_PROPS}></Checkbox>);

    expect(getByTestId(DOM_ID)).not.toBeNull();
  });

  test("Should have classes applied", async () => {
    const propsWithClass = { ...DEFAULT_PROPS, containerStyle: "test-class" };
    const { getByTestId } = render(<Checkbox {...propsWithClass} />);

    expect(getByTestId(DOM_ID).className).toBe("test-class");
  });

  test("Should call onChange when checkbox is clicked", () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
      <Checkbox
        label="Test Checkbox"
        id="test-checkbox"
        onChange={onChangeMock}
        labelStyle={""}
        checked={false}
      />
    );
    const checkbox = getByLabelText("Test Checkbox") as HTMLInputElement;

    fireEvent.click(checkbox);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
