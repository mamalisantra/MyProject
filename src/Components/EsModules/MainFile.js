import React from 'react'
import { Add, Multiplication, Subtraction } from './CommonFunctions'
import Division from './CommonFunctions'

function MainFile  ()  {
  return (
    <div>
        <p>Addition:{Add(10,20)}</p>
        <p>Subtraction{Subtraction(20,10)}</p>
        <p>Multiplication{Multiplication(10,20)}</p>
        <p>Division{Division(10,20)}</p>
    </div>
  )
}

export default MainFile