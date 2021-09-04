import React, { useState, useReducer } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import { TodoList } from "./components/TodoList";
import TodoReducer from "./TodoReducer";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const initialCounterState: Todo = {
    id: 0,
    todo: "test",
    isDone: false,
  };

  const [state, dispatch] = useReducer(TodoReducer, initialCounterState);

  const handleAdd = (e: React.FormEvent) => {
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
    e.preventDefault();
  };
  console.log(todos);
  return (
    <div className="App">
      <h2 className="heading">Taskify</h2>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
