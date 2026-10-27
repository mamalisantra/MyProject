import React from 'react'


const BrowserCookies = () => {
    function createCookie() {
        document.cookie = "name=john;max-age=3600;path=/";
    }
    function getCookie() {
        console.log("document.cookie>>>", document.cookie)
    }
    function deleteCookie() {
       document.cookie="name=john;max-age=0;path=/"
    }
    return (
        <>
            <button onClick={() => { createCookie() }}>Create Cookie</button>
            <button onClick={() => { getCookie() }}>Get Cookie</button>
            <button onClick={() => { deleteCookie() }}>Delete Cookie</button >
        </>
    )
}

export default BrowserCookies