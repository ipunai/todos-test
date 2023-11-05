import { describe, it, vi, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Task } from "./Task";

vi.mock("../../hooks/useTodoContext", () => ({
  useTodoContext: () => ({
    todos: [
      { id: "1", title: "Test Todo 1", completed: false },
      { id: "2", title: "Test Todo 2", completed: true },
    ],
  }),
}));

vi.mock("../../hooks/useSortTodo", () => ({
  useSortTodo: () => ({
    sortOrder: "all",
    setSortOrder: vi.fn(),
    sortedTodos: [
      { id: "1", title: "Test Todo 1", completed: false },
      { id: "2", title: "Test Todo 2", completed: true },
    ],
  }),
}));

vi.mock("../../hooks/useScrollToBottom", () => ({
  useScrollToBottom: () => ({
    ulRef: {
      current: {
        scrollTo: vi.fn(),
      },
    },
  }),
}));
vi.mock("../../hooks/useHandleTodos", () => ({
  useHandleTodos: () => ({
    addTodo: vi.fn().mockResolvedValueOnce({
      id: "3",
      title: "Test Todo 3",
      completed: false,
    }),
  }),
}));

describe("<Task />", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should renders task items", () => {
    render(<Task />);
    expect(screen.getAllByRole("listitem").length).toBe(2);
  });
});
