import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
        ----------------------------------------------------------------------------------------------------------- <br />
      <p>compteur: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count -1)}>-1</button>
    </div>
  );
}

export default Counter;