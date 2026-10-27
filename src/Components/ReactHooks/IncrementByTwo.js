import { useState } from "react";
export default function IncrementByTwo() {
    const [count, setCount] = useState(0);
    function IncrementFunc() {
        // setCount(count + 1);
        // setCount(count + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
    }
    return (
        <div>
            <button onClick={() => IncrementFunc()}>Increment by 2</button>
            <button onClick={() => { setCount(0) }}>Reset</button>
            <br></br> {count}
        </div>
    )
}