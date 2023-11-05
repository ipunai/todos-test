import { useEffect, useRef } from "react";
import { type Todo } from "../../types/Todo";
import { DATA_FADE } from "../../constants/constants";

export const useScrollToBottom = (todos: Todo[]) => {
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (ulRef.current) {
      const lastChild = ulRef.current.lastChild as HTMLLIElement;
      const isFadeOut = lastChild?.getAttribute?.(DATA_FADE);
      if (isFadeOut === "out") {
        const scrollHeight = ulRef.current.scrollHeight;
        ulRef.current.scrollTo({ top: scrollHeight, behavior: "smooth" });
      }
    }
  }, [todos]);

  return { ulRef };
};
