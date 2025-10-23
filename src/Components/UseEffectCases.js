import { useEffect, useState } from "react";
export default function UseEffectCases() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    function IncrementFunc() {
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
    }
    useEffect(() => {console.log("No dependency → runs after every render"); });
    useEffect(() => { console.log("Empty dependency → runs only once on mount"); }, []);
    useEffect(() => {  console.log(`✅ Runs when 'count' changes. Current count = ${count}`);}, [count]);

    return (
        <div>
            <button onClick={() => IncrementFunc()}>Increment by 2</button>
            <button onClick={() => { setCount(0) }}>Reset</button>
            <br></br> {count}
            <br></br>  <lable>Name:{name}</lable>
            <input type="text" onChange={(e) => setName(e.target.value)}></input>
        </div>
    )
}