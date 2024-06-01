import React from "react";
import { render, waitFor, cleanup, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";
import { ETodoAction } from "../../../types/TodoReducer.d";

import "@testing-library/jest-dom";

describe("TodoList Component", () => {
  const mockTodos = [
    { id: 1, description: "Learn React", completed: false },
    { id: 2, description: "Write Tests", completed: true },
  ];

  const mockSetTodoList = jest.fn();

  afterEach(cleanup);

  beforeEach(() => {
    render(<TodoList todos={mockTodos} setTodoList={mockSetTodoList} />);
  });

  it("renders todos", async () => {
    await waitFor(() =>
      expect(screen.getByText("Learn React")).toBeInTheDocument()
    );
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  it('displays no todos message when there are no todos', () => {
    cleanup();
    
    render(<TodoList todos={[]} setTodoList={mockSetTodoList} />);
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  it("handles checkbox toggle", async () => {
    const firstCheckbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(firstCheckbox);
    expect(mockSetTodoList).toHaveBeenCalledWith(1, ETodoAction.TOGGLE);
  });

  it("handles remove button click", async () => {
    const removeButton = screen.getAllByText("Remove")[0];
    fireEvent.click(removeButton);
    expect(mockSetTodoList).toHaveBeenCalledWith(1, ETodoAction.REMOVE);
  });
});
