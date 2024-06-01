import { ITodo } from "./TodoApp.d";

export enum ETodoAction {
  ADD = "ADD",
  TOGGLE = "TOGGLE",
  REMOVE = "REMOVE",
}

export type TTodoAction =
  | { type: ETodoAction.ADD; payload: ITodo }
  | { type: ETodoAction.TOGGLE; payload: number }
  | { type: ETodoAction.REMOVE; payload: number };
