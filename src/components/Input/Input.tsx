import { useEffect, useRef } from "react";
import { useHandleTodos } from "../../hooks";
import { type InputProps } from "./Input.types";
import "./Input.scss";
export const Input = ({}: InputProps) => {
  const { addTodo } = useHandleTodos();

  const handleAddTodo = async () => {
    if (inputRef.current) {
      await addTodo(inputRef.current?.value);
      inputRef.current.value = ``;
    }
  };

  const handleEnterKey = (e: KeyboardEvent) => {
    console.log("handleEnterKey", e.key);
    if (e.key === "Enter" && buttonRef.current) {
      console.log("handleEnterKey", e.key);

      buttonRef.current.click();
    }
    /**
     * TODO: improve this function by using handleAddTodo() directly
     * this upper condition seem wired, fix next time
     * it should be: if (e.key === "Enter") handleAddTodo()
     * the upper line has problem about cahcing todos
     * so i implement a workaround by calling handleAddTodo() form hidden-button. it's worked smoothly
     */
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("keyup", handleEnterKey);
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener("keyup", handleEnterKey);
      }
    };
  }, [inputRef]);

  return (
    <div data-css="mt-16" className="input-component">
      <input ref={inputRef} placeholder="Add a new task" />
      {/**
       * TODO: improve this function using handleAddTodo() directly
       * BUG: when add todo it's not add new TodoItem with new line if I call handleAddTodo() directly
       * Problem is about caching todos. this "hidden-button" is just workaround
       */}
      <button
        aria-label="add-todo-button"
        hidden
        ref={buttonRef}
        onClick={handleAddTodo}
      />
    </div>
  );
};
