import React, { useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  function refresh() {
    window.location.reload();
  }

  return (
    <div className="App">
      <h1>Counter {count}</h1>
      <a onClick={increment}>+</a>
      <a onClick={decrement}>-</a>
      <a onClick={refresh}>Reset</a>

    </div>
  );
}

export default App;
