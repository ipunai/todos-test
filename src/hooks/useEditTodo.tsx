import { useCallback, useState } from "react";
import { Todo } from "../types/Todo";

type EditTodoFunction = (id: string, newTitle: string) => Promise<void>;

export const useEditTodo = (editTodo: EditTodoFunction) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [currentEdit, setCurrentEdit] = useState<string>("");

  const startEdit = useCallback((todo: Todo) => {
    setEditingId(todo.id);
    setCurrentEdit(todo.title);
  }, []);

  const submitEditTodo = useCallback(async () => {
    if (editingId) {
      await editTodo(editingId, currentEdit);
      setEditingId(null);
      setCurrentEdit("");
    }
  }, [editingId, currentEdit]);

  const cancelEdit = useCallback(() => {
    setEditingId(null);
    setCurrentEdit("");
  }, []);

  return {
    editingId,
    currentEdit,
    setEditingId,
    setCurrentEdit,
    startEdit,
    cancelEdit,
    submitEditTodo,
  };
};
