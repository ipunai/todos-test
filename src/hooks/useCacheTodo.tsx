import { useEffect } from "react";
import { type Todo } from "../types/Todo";
import { CACHED_TODO } from "../constants/constants";

export const useCacheTodo = (todos: Todo[]) => {
  useEffect(() => {
    localStorage.setItem(CACHED_TODO, JSON.stringify(todos));
  }, [todos]);

  return {
    cachedTodo: todos,
  };
};
