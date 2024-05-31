import React, { createContext, useState, useContext } from 'react';
import ReactDOM from 'react-dom';

// Create a context
const MyContext = createContext();

// Create a provider component
const MyProvider = ({ children }) => {
  const [value, setValue] = useState('Hello, World!');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

// Create a nested component that consumes the context
const NestedComponent = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue('New Value')}>Change Value</button>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <NestedComponent />
    </div>
  );
};

// Render the app
ReactDOM.render(
  <MyProvider>
    <App />
  </MyProvider>,
  document.getElementById('root')
);
