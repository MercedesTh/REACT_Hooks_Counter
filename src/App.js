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
      <p onClick={increment}>+</p>
      <p onClick={decrement}>-</p>
      <p onClick={refresh}>Reset</p>

    </div>
  );
}

export default App;
