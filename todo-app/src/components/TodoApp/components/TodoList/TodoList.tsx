import React from "react";

// Type file
import {ETodoAction} from "../../types/TodoReducer.d";
import { ITodoList } from "../../types/TodoList.d";

// Lazy imports
const Button = React.lazy(() => import("foundation_ui/Button"));
const Checkbox = React.lazy(() => import("foundation_ui/Checkbox"));

const TodoList = (props: ITodoList) => {
  const { todos, setTodoList } = props;

  const handleTodo = (id: number, operation: ETodoAction) => {
    setTodoList(id, operation);
  };

  return (
    <React.Suspense fallback="Loading Todo list...">
      <div className="mt-4">
        <ul>
          {todos?.map((todo) => (
            <li key={`todoList-${todo.id}`} className="mb-2">
              <Checkbox
                containerStyle="flex items-center"
                checked={todo.completed}
                label={
                  <div className="flex items-center gap-5">
                    <span className={todo.completed ? "line-through" : "none"}>
                      {todo.description}
                    </span>
                    <Button
                      label="Remove"
                      btnStyle="border border-gray-300 text-base font-bold py-2 px-4 rounded h-[42px]"
                      onClick={() => handleTodo(todo.id, ETodoAction.REMOVE)}
                    />
                  </div>
                }
                labelStyle="text-gray-700 text-base ml-2 hover:cursor-pointer"
                checkboxStyle="h-4 w-4 text-blue-600"
                onChange={() => handleTodo(todo.id, ETodoAction.TOGGLE)}
              />
            </li>
          ))}
        </ul>
      </div>
    </React.Suspense>
  );
};

export default TodoList;
