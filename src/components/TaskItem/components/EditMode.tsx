import { type Todo } from "../../../types/Todo";
import { Checkbox } from "../../Checkbox/Checknox";
import { Popover } from "../../Popover/Popover";
import { DotsIcon } from "../../../constants/DotsIcon";

export const EditMode = ({
  todo,
  checkTodo,
  onEditTodo,
  deleteTodo,
}: {
  todo: Todo;
  checkTodo: (id: string, checked: boolean) => Promise<void>;
  onEditTodo: () => void;
  deleteTodo: (id: string) => Promise<void>;
}) => {
  return (
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
                onClick={() => onEditTodo()}
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
  );
};
