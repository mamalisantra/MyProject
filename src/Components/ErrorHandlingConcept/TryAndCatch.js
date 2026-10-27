import React, { useEffect, useState } from 'react'
// If something goes wrong in our program, we can handle the error instead of allowing the entire program to stop unexpectedly.
// try :is used to write code that might produce an error.
// catch : is used to handle the error that occurs inside try.
// error is a variable containing information about the error.
// finally: Stops the loading indicator, whether the API succeeds or fails.
// The important point: You don't need finally in every program. It is especially useful when you must perform an action in both success and error cases, such as hiding a loading spinner, closing a file, or releasing a resource.
// throw: JavaScript automatically throws a ReferenceError. But sometimes we want to create our own error. That's where throw is used.

const TryAndCatch = () => {

    const [text, setText] = useState("");
    const display = () => {
        try {
            // setText(texttttt);
            setText("texttttt");

        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => { display() }, []);
    return (
        <div>
            {text}
        </div>
    )
}

export default TryAndCatch