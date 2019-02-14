import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button
        onClick={prevState => {
          setCount(count + 1);
        }}
      >
        +
      </button>

      <button
        onClick={prevState => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
