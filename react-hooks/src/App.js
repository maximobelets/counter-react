import React, { useState } from 'react';
import './app.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h4>React Hooks Counter</h4>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(Math.floor(Math.random() * 100))}>Random</button>
    </section>
  );
};

export default App;
