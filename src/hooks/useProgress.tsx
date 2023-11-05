import { useTodoContext } from "./useTodoContext";

export const useProgress = () => {
  const { todos } = useTodoContext();
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  const completionPercentage =
    totalTodos === 0 ? 0 : Math.round((completedTodos / totalTodos) * 100);

  return { completionPercentage };
};
