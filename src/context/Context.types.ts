import { type Dispatch } from "react";
import { type Todo } from "../types/Todo";

export type ContextProps = {
  todos: Todo[];
  setTodos: Dispatch<React.SetStateAction<Todo[]>>;
};
