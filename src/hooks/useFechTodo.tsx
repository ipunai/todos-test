import { useState, useEffect } from "react";
import { Todo } from "../types/Todo";
import { fetchTodos } from "../apis/todosAPI";
import { useErrorTodo } from "./useErrorTodo";
import { getCachedTodos } from "../helpers/getCachedTodos";

export const useFechTodo = () => {
  const { onSetErrorTodo } = useErrorTodo();
  const { value, compare } = getCachedTodos();

  const [todos, setTodos] = useState<Todo[]>(value);
  const [loading, setLoading] = useState(true);

  const isLatestData = (fetchData: Todo[], cachedTodo: string | undefined) => {
    return JSON.stringify(fetchData) === cachedTodo;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTodos();
        if (isLatestData(data, compare)) return;
        setTodos(data);
      } catch (error) {
        onSetErrorTodo(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    todos,
    loading,
    setTodos,
  };
};
