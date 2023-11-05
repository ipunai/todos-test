import { useEditTodo, useHandleTodos } from "../../hooks";
import { Checkbox } from "../Checkbox/Checknox";
import { Popover } from "../Popover/Popover";
import { DotsIcon } from "./DotsIcon";
import "./TaskItem.scss";
import { type TaskItemProps } from "./TaskItem.types";
import { useFadeTodo } from "./useFadeTodos";

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

  return (
    <li
      className="task-item-component"
      ref={liRef}
      tabIndex={0}
      data-fade="out"
    >
      {editingId === todo.id ? (
        <div>
          <input
            value={currentEdit}
            onChange={(e) => setCurrentEdit(e.target.value)}
          />
          <button onClick={submitEditTodo}>Save</button>
          <button onClick={cancelEdit}>Cancel</button>
        </div>
      ) : (
        <div className="task-item-component__container">
          <Checkbox
            checked={todo.completed}
            onChange={(checked) => {
              checkTodo(todo.id, checked);
            }}
          />
          <p
            data-completed={todo.completed}
            className="task-item-component__todo-text"
          >
            {todo.title}
          </p>

          <div className="task-item-component__menu">
            <Popover
              popover={
                <div className="task-item-component__menu-list">
                  <div
                    className="task-item-component__menu-list-item"
                    onClick={() => startEdit(todo)}
                  >
                    Edit
                  </div>
                  <div
                    data-delete
                    className="task-item-component__menu-list-item"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </div>
                </div>
              }
              parent={
                <div className="task-item-component__dots-icon">
                  <DotsIcon />
                </div>
              }
            />
          </div>
        </div>
      )}
    </li>
  );
};
