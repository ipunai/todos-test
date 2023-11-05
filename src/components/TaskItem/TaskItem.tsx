import { useRef, type KeyboardEvent } from "react";
import { useEditTodo, useHandleTodos } from "../../hooks";
import "./TaskItem.scss";
import { type TaskItemProps } from "./TaskItem.types";
import { useFadeTodo } from "./useFadeTodos";
import { EditMode } from "./components/EditMode";
import { ViewMode } from "./components/ViewMode";

export const TaskItem = ({ todo }: TaskItemProps) => {
  const { deleteTodo, checkTodo, editTodo } = useHandleTodos();
  const { liRef } = useFadeTodo();
  const {
    cancelEdit,
    currentEdit,
    editingId,
    submitEditTodo,
    setCurrentEdit,
    startEdit,
  } = useEditTodo(editTodo);

  const inputEditRef = useRef<HTMLInputElement>(null);

  const onEditTodo = () => {
    startEdit(todo);

    requestAnimationFrame(() => {
      inputEditRef.current?.focus();
    });
  };

  const onHandleEditTodoKey = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      submitEditTodo();
    } else if (e.key == "Escape") {
      cancelEdit();
    }
  };
  return (
    <li
      aria-label="task-item-component"
      className="task-item-component"
      ref={liRef}
      tabIndex={0}
      data-fade="out"
      data-is-edit={!!editingId}
    >
      {editingId === todo.id ? (
        <ViewMode
          currentEdit={currentEdit}
          inputEditRef={inputEditRef}
          onHandleEditTodoKey={onHandleEditTodoKey}
          setCurrentEdit={setCurrentEdit}
          submitEditTodo={submitEditTodo}
        />
      ) : (
        <EditMode
          todo={todo}
          checkTodo={checkTodo}
          onEditTodo={onEditTodo}
          deleteTodo={deleteTodo}
        />
      )}
    </li>
  );
};
