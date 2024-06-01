import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoApp from "../TodoApp";
import "@testing-library/jest-dom";

describe("TodoApp Component", () => {
  beforeEach(async () => {
    render(<TodoApp />);
    await waitFor(() => screen.getByPlaceholderText("Add a new todo"));
  });

  it("submits a new todo correctly", async () => {
    const input = await screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add todo");

    // fireEvent.change(input, { target: { value: "New Todo" } });
    // fireEvent.click(button);

    await userEvent.type(input, "New Todo");
    await userEvent.click(button);

    await waitFor(() => {
      // Assuming that TodoList will display the todo text if added correctly
      expect(screen.getByText("New Todo")).toBeInTheDocument();
    });
  });

  it("uses localStorage to persist todos", () => {
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "todos",
      JSON.stringify([])
    );

    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add todo");
    fireEvent.change(input, { target: { value: "Persistent Todo" } });
    fireEvent.click(button);

    // Check if localStorage was updated
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "todos",
      expect.any(String)
    );
  });
});
