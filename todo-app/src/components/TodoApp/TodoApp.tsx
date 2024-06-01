import React, { useState, useReducer, useEffect, FormEvent } from "react";

// Custom Imports
import TodoList from "./components/TodoList/TodoList";
import TodoFilter from "./components/TodoFilter/TodoFilter";

// Reducer
import todoReducer from "./state/todoReducer";

// Type files
import { ETodoFilter } from "./types/TodoFilter.d";
import { ETodoAction } from "./types/TodoReducer.d";

// Lazy imports
const TextBox = React.lazy(() => import("foundation_ui/TextBox"));
const Button = React.lazy(() => import("foundation_ui/Button"));

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filterTodo, setFilterTodo] = useState<ETodoFilter>(ETodoFilter.ALL);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const todoVal = formData.get("description") as string;

    if (todoVal) {
      dispatch({
        type: ETodoAction.ADD,
        payload: { id: Date.now(), description: todoVal, completed: false },
      });
      formElement.reset();
    }
  };

  const setTodoList = (id: number, operation: ETodoAction) => {
    if (operation === ETodoAction.REMOVE) {
      dispatch({ type: ETodoAction.REMOVE, payload: id });
    } else if (operation === ETodoAction.TOGGLE) {
      dispatch({ type: ETodoAction.TOGGLE, payload: id });
    }
  };

  // Filter todo state list based on selected criteria
  const filteredTodos = todos.filter((todo) => {
    switch (filterTodo) {
      case ETodoFilter.ACTIVE:
        return !todo.completed;
      case ETodoFilter.COMPLETED:
        return todo.completed;
      default:
        return true;
    }
  });

  return (
    <div className="container mx-auto">
      <h1>Todo List</h1>

      <React.Suspense fallback="Loading...">
        {/* Todo add text box */}
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 items-end mt-5">
            <div className="w-[45%]">
              <TextBox
                name="description"
                labelStyle="block mb-2 text-sm font-medium text-gray-900"
                labelText="Todo box"
                inputStyle="block border border-gray-300 dark:border-gray-600 dark:focus:ring-blue-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 p-2.5 rounded-lg text-gray-900 text-sm w-full"
                placeholder="Add a new todo"
              />
            </div>
            <Button
              type="submit"
              label="Add todo"
              btnStyle="bg-blue-500 hover:bg-blue-700 text-white text-base font-bold py-2 px-4 rounded h-[42px]"
            />
          </div>
        </form>

        {/* Filter Area */}
        <TodoFilter setFilter={setFilterTodo} />

        {/* To do list */}
        {filteredTodos?.length > 0 && (
          <TodoList todos={filteredTodos} setTodoList={setTodoList} />
        )}
      </React.Suspense>
    </div>
  );
};

export default TodoApp;
