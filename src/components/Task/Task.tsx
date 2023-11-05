import "./Task.scss";
import { SortOrder, type TaskProps } from "./Task.types";
import { useSortTodo } from "../../hooks";
import { useTodoContext } from "../../hooks/useTodoContext";
import { Select } from "../Select/Select";
import { TaskList } from "../TaskList/TaskList";
import { Input } from "../Input/Input";
import { selectOptions } from "./constants/selectOptions";

export const Task = ({}: TaskProps) => {
  const { todos } = useTodoContext();
  const { sortOrder, setSortOrder, sortedTodos } = useSortTodo(todos);

  return (
    <div className="task-component">
      <div className="task-component__heading-conitaner">
        <h2>Task</h2>

        <Select
          options={selectOptions}
          defaultValue={sortOrder}
          onChange={(value) => {
            setSortOrder(value as SortOrder);
          }}
        />
      </div>
      <TaskList todos={sortedTodos} />
      <Input />
    </div>
  );
};
