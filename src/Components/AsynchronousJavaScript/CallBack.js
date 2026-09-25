import React from 'react'

//callback---- A callback function is simply a function that we pass as an argument to another function so that it can be executed later.
//eg--"When you finish your work, call me."
// Callback
//    ├── Synchronous
//    └── Asynchronous
//Call Back Functions---map(),filter(),find(),every(),some(),forEach(),sort(),setTimeOut(),setInterval(),addEventListener()

const CallBack = () => {

    function afterFinishingWorkCallMe() {
        console.log("after Finishing Work Call Me");
    }
    function afterFinishingWorkWakeUpMe() {
        console.log("after Finishing Work Wake Up Me");
    }

    function finishWork(callback) {
        console.log("Finished Work")
        callback()
    }

    return (
        <div>
            <button onClick={() => finishWork(afterFinishingWorkCallMe)}>Finish u r Work Call Me</button>
            <button onClick={() => finishWork(afterFinishingWorkWakeUpMe)}>Finis u r Work wake Up Me</button>

        </div>
    )
}

export default CallBack