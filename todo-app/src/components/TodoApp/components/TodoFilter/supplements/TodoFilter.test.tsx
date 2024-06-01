import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import TodoFilter from "../TodoFilter";
import { ETodoFilter } from "../../../types/TodoFilter.d";

describe("TodoFilter Component", () => {
  const setFilterMock = jest.fn();

  beforeEach(async () => {
    render(<TodoFilter setFilter={setFilterMock} />);
    await waitFor(() => screen.getByText("All"));
  });

  it("renders three radio buttons", async () => {
    const radioButtons = await screen.findAllByRole("radio");
    expect(radioButtons).toHaveLength(3);
  });

  it('calls setFilter with "ALL" when the All option is selected', async () => {
    const allRadioButton = await screen.findByLabelText("All");
    fireEvent.click(allRadioButton);
    expect(setFilterMock).toHaveBeenCalledWith(ETodoFilter.ALL);
  });

  it('calls setFilter with "ACTIVE" when the Active option is selected', async () => {
    const activeRadioButton = await screen.findByLabelText("Active");
    fireEvent.click(activeRadioButton);
    expect(setFilterMock).toHaveBeenCalledWith(ETodoFilter.ACTIVE);
  });

  it('calls setFilter with "COMPLETED" when the Completed option is selected', async () => {
    const completedRadioButton = await screen.findByLabelText("Completed");
    fireEvent.click(completedRadioButton);
    expect(setFilterMock).toHaveBeenCalledWith(ETodoFilter.COMPLETED);
  });
});
