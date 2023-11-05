const baseURL = "http://localhost:3001/todos";

export const fetchTodos = async () => {
  const response = await fetch(baseURL);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const createTodo = async (todo: {
  title: string;
  completed: boolean;
}) => {
  const response = await fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!response.ok) {
    throw new Error("Failed to create todo");
  }
  return response.json();
};

export const editTodo = async (id: string, newTitle: string) => {
  const response = await fetch(`${baseURL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: newTitle }),
  });
  if (!response.ok) {
    throw new Error("Failed to edit todo");
  }
  return response.json();
};

export const deleteTodo = async (id: string) => {
  const response = await fetch(`${baseURL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }
  return response.json();
};

export const toggleCompletion = async (id: string, checked: boolean) => {
  const todo = await fetch(`${baseURL}/${id}`).then((res) => res.json());
  const updatedTodo = { ...todo, completed: checked };

  const response = await fetch(`${baseURL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTodo),
  });
  if (!response.ok) {
    throw new Error("Failed to toggle completion");
  }
  return response.json();
};
