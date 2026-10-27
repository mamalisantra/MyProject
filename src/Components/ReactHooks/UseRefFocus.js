import { useEffect, useRef } from "react";

const UseRefFocus = () => {
  const inputRef = useRef(null);

useEffect(()=>{
    inputRef.current.focus(); // focuses the input
})

  const handleSubmit = () => {
    console.log("Data>>>>>>>", inputRef.current.value); // logs input value
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Type Something Here...." />
      <button type="button" onClick={handleSubmit}> Submit </button>
    </div>
  );
};

export default UseRefFocus;
