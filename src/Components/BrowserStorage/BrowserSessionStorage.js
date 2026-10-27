import React, { useEffect, useState } from 'react'
// sessionStorage is also used to store data in the browser. However, its data is available only for the current browser tab's session.
// When you close that tab, its sessionStorage data is cleared.
//sessionStorage data will NOT be cleared when you refresh the page.

const BrowserSessionStorage = () => {

    const [empData, setEmpData] = useState({});
    useEffect(() => {
        const empDetails = {
            name: "Asis",
            age: 24,
        }
        sessionStorage.removeItem('empDetails');
        sessionStorage.setItem('empDetails', JSON.stringify(empDetails))
    }, [])

    function getEmpDtls() {
        let Data = sessionStorage.getItem('empDetails')
        setEmpData(JSON.parse(Data));
    }
    console.log("empData>>>>", empData)
    return (
        <>
            <button onClick={() => { getEmpDtls() }}>Get Employee Data</button>
            {empData && (<>
                <p>{empData.name}</p>
                <p>{empData.age}</p>
            </>)}
        </>
    )
}

export default BrowserSessionStorage