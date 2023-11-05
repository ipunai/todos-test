import { TaskItem } from "../TaskItem/TaskItem";
import { type TaskItemProps } from "./TaskList.types";
import { useScrollToBottom } from "./useScrollToBottom";

export const TaskList = ({ todos }: TaskItemProps) => {
  const { ulRef } = useScrollToBottom(todos);

  return (
    <ul ref={ulRef} data-css="mt-16">
      {todos.map((todo) => (
        <TaskItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
