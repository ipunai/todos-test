import { useState } from "react";
import { Todo } from "../types/Todo";

export const useSortTodo = (todos: Todo[]) => {
  const [sortOrder, setSortOrder] = useState<"all" | "done" | "undone">("all");

  const sortedTodos = () => {
    let sorted = [...todos];

    if (sortOrder === "done") {
      sorted.sort((a, b) => {
        if (a.completed && !b.completed) return -1; // a is done, b is not done
        if (!a.completed && b.completed) return 1; // a is not done, b is done
        return a.title.localeCompare(b.title); // If both tasks have the same completion status, sort by title
      });
    } else if (sortOrder === "undone") {
      sorted.sort((a, b) => {
        if (!a.completed && b.completed) return -1; // a is not done, b is done
        if (a.completed && !b.completed) return 1; // a is done, b is not done
        return a.title.localeCompare(b.title); // If both tasks have the same completion status, sort by title
      });
    }

    return sorted;
  };
  return { sortedTodos: sortedTodos(), sortOrder, setSortOrder };
};
