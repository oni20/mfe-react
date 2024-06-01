import { ITodo } from "../types/TodoApp.d";
import { ETodoAction, TTodoAction } from "../types/TodoReducer.d";

const todoReducer = (state: ITodo[], action: TTodoAction): ITodo[] => {
  switch (action.type) {
    case ETodoAction.ADD:
      return [...state, action.payload];
    case ETodoAction.TOGGLE:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case ETodoAction.REMOVE:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      throw new Error("Unhandled action type in todoReducer");
  }
};

export default todoReducer;
