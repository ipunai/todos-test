import { useCallback } from "react";
import {
  createTodo as apiCreateTodo,
  editTodo as apiEditTodo,
  deleteTodo as apiDeleteTodo,
  toggleCompletion as apiToggleCompletion,
} from "../apis/todosAPI";
import { useErrorTodo } from "./useErrorTodo";
import { useTodoContext } from "./useTodoContext";

export const useHandleTodos = () => {
  const { setTodos, todos } = useTodoContext();
  const { onSetErrorTodo } = useErrorTodo();

  const addTodo = useCallback(
    async (title: string) => {
      if (title.trim() === "") return;
      try {
        console.log("12313");
        const addedTodo = await apiCreateTodo({ title, completed: false });
        setTodos([...todos, addedTodo]);
      } catch (error) {
        onSetErrorTodo(error);
      }
    },
    [todos]
  );

  const editTodo = useCallback(
    async (id: string, newTitle: string) => {
      try {
        const updatedTodo = await apiEditTodo(id, newTitle);
        setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
      } catch (error) {
        onSetErrorTodo(error);
      }
    },
    [todos]
  );

  const deleteTodo = useCallback(
    async (id: string) => {
      try {
        await apiDeleteTodo(id);
        setTodos(todos.filter((todo) => todo.id !== id));
      } catch (error) {
        onSetErrorTodo(error);
      }
    },
    [todos]
  );

  const checkTodo = useCallback(
    async (id: string, checked: boolean) => {
      try {
        const updatedTodo = await apiToggleCompletion(id, checked);
        setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
      } catch (error) {
        onSetErrorTodo(error);
      }
    },
    [todos]
  );

  return {
    addTodo,
    editTodo,
    deleteTodo,
    checkTodo,
  };
};
