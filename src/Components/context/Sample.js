import React, { useContext } from 'react'
import Sample2 from './Sample2'
import { GiftContext } from "./ExampleContext"
const Sample = () => {
    const { text, setText } = useContext(GiftContext);
    return (
        <div>
            <h2>1 st Sample Context Provider Value:{text}</h2>
            <button onClick={() => setText("Hello from Sample!")}>
                Change Context Value
            </button>
            <Sample2 />
        </div>
    )
}
export default Sample