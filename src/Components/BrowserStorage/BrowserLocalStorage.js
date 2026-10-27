import React, { useEffect, useState } from 'react'

// Browser storage allows us to store data in the user's browser so that we can access it later.
// For example:
// Remembering a user's login information.
// Saving a user's name.
// Remembering a selected theme (dark or light).
// Storing data temporarily during a session.

// localStorage is used to store data in the browser. The data remains saved even after you close the browser or restart your computer, until you remove it.
// localStorage is the browser storage.

// setItem()--Store data
// getItem()--Retrieve data
// removeItem()--Remove one item
// clear()---Remove all items

const BrowserLocalStorage = () => {
    const [studentData, setStudentData] = useState({});
    useEffect(() => {
        let studentDetails = {
            name: "Jon",
            age: 22,
            gender: "Male"
        }
        localStorage.clear();
        localStorage.setItem('studentDetails', JSON.stringify(studentDetails))
    }, [])

    function getData() {
        let data = localStorage.getItem('studentDetails');
        setStudentData(JSON.parse(data));
    }
    console.log("studentData>>", studentData)
    return (
        <>
            <button onClick={() => { getData(); }}>Display Data</button>
            {studentData.name &&
                <>
                    <p>{studentData.name}</p>
                    <p>{studentData.age}</p>
                    <p>{studentData.gender}</p>
                </>
            }

        </>
    )
}

export default BrowserLocalStorage