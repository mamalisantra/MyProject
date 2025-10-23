
import { useEffect, useRef } from "react";

function UseRefInpt() {
  const data = useRef(null);
  useEffect(() => {
    console.log("data>>>>>>", data?.current?.value);
  })
  function handleSubmit() {
    console.log("dataaaa>>>>>>", data?.current?.value);
  }
  return (
    <div>
      <label>Enter Data:</label>
      <input type="text" ref={data}></input>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UseRefInpt;