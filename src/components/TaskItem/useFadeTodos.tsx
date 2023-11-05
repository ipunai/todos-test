import { useEffect, useRef } from "react";
import { DATA_FADE } from "../../constants/constants";
const DOM_WATING_TIME = 100;
export const useFadeTodo = () => {
  const liRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (liRef.current) {
        liRef.current.setAttribute(DATA_FADE, "in");
      }
    }, DOM_WATING_TIME);
  }, [liRef]);

  return { liRef };
};
