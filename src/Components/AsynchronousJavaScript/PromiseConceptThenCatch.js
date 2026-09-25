import React, { useState } from 'react'

// Promise---A Promise represents an asynchronous operation that will have a result later.
// "I don't have the result right now, but I promise that I will give you the result later."

const PromiseConceptThenCatch = () => {
  const [btnText, setBtntext] = useState('Click');
  let myPromise = new Promise((resolve, reject) => {
    if (btnText === "Clickedd") {
      resolve("Operation Successfull")
    }
    else {
      reject("Operation failed")
    }
  })

  myPromise.then((res)=>{console.log("res>>>",res)}).catch((error)=>{console.log(error)})

  return (
    <div>
      <button onClick={() => setBtntext("Clicked")}>{btnText}</button>
    </div>
  )
}

export default PromiseConceptThenCatch