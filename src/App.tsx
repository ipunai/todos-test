import "./App.scss";
import { Progress } from "./components/Progress/Progress";
import { Task } from "./components/Task/Task";
import { Theme } from "./components/Theme/Theme";
import { Context } from "./context/Context";
import { useFechTodo, useCacheTodo } from "./hooks";

const App: React.FC = () => {
  // if (loading) return <p>Loading...</p>;
  const { todos, setTodos } = useFechTodo();
  const { cachedTodo } = useCacheTodo(todos);

  return (
    <Context.Provider value={{ todos: cachedTodo, setTodos }}>
      <Theme>
        <div className="todo-app">
          <Progress />
          {/* NOTE: attribute 'data-css' refers to utility styles (styles/uitls.scss) that I have created myself */}
          <div data-css="mt-32">
            <Task />
          </div>
        </div>
      </Theme>
    </Context.Provider>
  );
};

export default App;
