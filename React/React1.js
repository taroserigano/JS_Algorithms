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

------------------

  import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    const newTodo = {
      id: Math.random(),
      todo: input,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const newList = todos.filter((todo) => todo.id !== id);
    setTodos(newList);
  };

  return (
    <>
      <p>enter</p>
      <input
        value={input}
        name="input"
        type="text"
        onChange={handleChange}
        placeholder="Enter"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(({ todo, id }) => (
          <li>
            {todo}
            <button onClick={() => deleteTodo(id)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}











---------------

  import "./styles.css";
import React, { useState, useRef, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState(2);
  const [count, setCount] = useState(0);

  const id = useRef(null);

  const clear = () => clearInterval(id.current);

  useEffect(() => {
    id.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return clear;
  }, [time]);

  useEffect(() => {
    if (time === 0) {
      clear();
    }
  }, [time]);

  return (
    <div>
      <h1>{count}</h1>
      {time}
      <button onClick={() => setTime((prev) => prev + 1)}>+</button>
    </div>
  );
}



----------------------------------------------

  TODO components 













