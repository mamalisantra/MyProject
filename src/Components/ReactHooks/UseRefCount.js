import { useEffect, useRef } from "react";

const UseRefCount = () => {
  const countValue = useRef(0);

  useEffect(() => {
    console.log("countValue>>>", countValue.current);
  }, []);

  const increment = () => {
    countValue.current += 1;
    console.log("Incremented:", countValue.current);
  };

  const decrement = () => {
    countValue.current -= 1;
    console.log("Decremented:", countValue.current);
  };

  return (
    <div>
      <label>Count (ref value): {countValue.current}</label>
      <br />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default UseRefCount;
