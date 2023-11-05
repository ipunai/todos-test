import { useState } from "react";

export const useErrorTodo = () => {
  const [error, setError] = useState<string | null>(null);
  const onSetErrorTodo = (error: unknown) => {
    setError(error instanceof Error ? error.message : String(error));
  };
  return { error, onSetErrorTodo };
};
