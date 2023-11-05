import { CACHED_TODO } from "../constants/constants";
import { type Todo } from "../types/Todo";

export const getCachedTodos = (): { value: Todo[]; compare?: string } => {
  try {
    const cachedData = localStorage.getItem(CACHED_TODO);
    if (!cachedData) return { value: [] };
    return { value: JSON.parse(cachedData), compare: cachedData };
  } catch (error) {
    console.error("Error parsing todos from localStorage:", error);
  }
  return { value: [] };
};
