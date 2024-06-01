import { ITodo } from "./TodoApp.d";
import { ETodoAction } from "./TodoReducer.d";

export interface ITodoList {
  todos: ITodo[];
  setTodoList: (id: number, operation: ETodoAction) => void;
}
