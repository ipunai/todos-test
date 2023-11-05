import { KeyboardEvent } from "react";

export const ViewMode = ({
  inputEditRef,
  currentEdit,
  setCurrentEdit,
  onHandleEditTodoKey,
  submitEditTodo,
}: {
  inputEditRef: React.RefObject<HTMLInputElement>;
  currentEdit: string;
  setCurrentEdit: React.Dispatch<React.SetStateAction<string>>;
  submitEditTodo: () => Promise<void>;
  onHandleEditTodoKey: (e: KeyboardEvent) => void;
}) => {
  return (
    <div className="task-item-component__edit-input">
      <input
        ref={inputEditRef}
        value={currentEdit}
        onChange={(e) => setCurrentEdit(e.target.value)}
        onKeyDown={onHandleEditTodoKey}
      />
      <button onClick={submitEditTodo}>Save</button>
    </div>
  );
};
