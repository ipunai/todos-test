import "./App.scss";
import { Progress } from "./components/Progress/Progress";
import { Task } from "./components/Task/Task";
import { Context } from "./context/Context";
import { useFechTodo } from "./hooks";
import { useCacheTodo } from "./hooks/useCacheTodo";

const App: React.FC = () => {
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;
  const { todos, setTodos } = useFechTodo();
  const { cachedTodo } = useCacheTodo(todos);

  return (
    <Context.Provider value={{ todos: cachedTodo, setTodos }}>
      <div className="todo-app">
        <Progress />
        {/* NOTE: attribute 'data-css' refers to utility styles (styles/uitls.scss) that I have created myself */}
        <div data-css="mt-32">
          <Task />
        </div>
      </div>
    </Context.Provider>
  );
};

export default App;
