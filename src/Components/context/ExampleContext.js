import React, { createContext, useState } from 'react'

export const GiftContext = createContext();

export const ExampleContext = ({children}) => {
    const [text, setText] = useState("hi")
    return (
        <GiftContext.Provider value={{text,setText}}>
            {children}
        </GiftContext.Provider>
    )
}
