import { useState } from "react";

export default function useStateLearning() {
  const [number, setNumber] = useState(0);

  function minusHandler(event) {
    let minus = number - 1;
    setNumber(minus);
  }
  function addHandler(event) {
    let add = number + 1;
    setNumber(add);
  }
  function resetHandler(event) {
    setNumber(0);
  }

  return (
    <div>
      <button onClick={minusHandler}>-</button>
      <span>{number}</span>
      <button onClick={addHandler}>+</button>
      <div>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
}
