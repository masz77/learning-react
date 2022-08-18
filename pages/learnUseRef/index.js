import { useEffect, useRef, useState } from "react";

export default function LearnUseRef() {
  const [name, setName] = useState("");
  const currentValue = useRef(1);
  const inputRef = useRef();

  console.log("first loaded");

  useEffect(() => {
    currentValue.current = currentValue.current + 1;
    console.log("rendered");
  }, [name]);

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is: {name}</div>
      <div>Rendered: {currentValue.current} times</div>
      <div>
        <button onClick={() => inputRef.current.focus()}>Focus</button>
      </div>
    </div>
  );
}
