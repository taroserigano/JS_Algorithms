import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        setTime(time + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [running]);

  const start = () => {
    setRunning(true);
  };

  const stop = () => {
    setRunning(false);
  };

  const reset = () => {
    setTime(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {time}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;










import React, { useState } from "react";

function TodoList() {
  const [inputTask, setInputTask] = useState("");
  const [list, setList] = useState([]);

  const handleAddTodo = () => {
    const newTask = {
      id: Math.random(),
      todo: inputTask,
    };

    setList([...list, newTask]);
    setInputTask("");
  };

  const handleDeleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  const handleInputChange = (event) => {
    setInputTask(event.target.value);
  };

  return (
    <div className="Todo">
      <h1>My To-Do List</h1>

      <div className="Top">
        <input
          className="input"
          type="text"
          value={inputTask}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />

        <button className="btn" onClick={handleAddTodo}>
          ADD
        </button>
      </div>

      <ul>
        {list.map((todo) => (
          <li className="task" key={todo.id}>
            {todo.todo}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;


