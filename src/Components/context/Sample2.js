import React, { useContext } from 'react'
import { GiftContext } from "./ExampleContext"
const Sample2 = () => {
    const { text } = useContext(GiftContext);
    return (
        <div>
            <h3>2 nd Sample Context Provider Value:{text}</h3>
        </div>
    )
}

export default Sample2