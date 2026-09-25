import React, { useEffect } from 'react'

// DOM = Document Object Model

// DOM is the browser's representation of  HTML elements as objects, allowing JavaScript to access and manipulate those elements.

//JavaScript can use this DOM to:find HTML elements ,change text ,change HTML, change CSS ,create new elements, remove elements ,respond to button clicks

//Rendering means showing the UI on the screen.

// JSX = a way of writing UI inside JavaScript using HTML-like syntax.

//Loading = Loading means getting something ready or bringing it into the application/browser.

// Loading = getting the thing.
// Rendering = showing the thing.

// when rendering happens?
// When the page/component first loads
// When state changes
// When props change
// When you change the code during development

// useEffect =We use it when we want to perform some work after React has rendered the component.(First show/update the UI, then do this extra work.)

const DOMConcept = () => {

    useEffect(() => {
        // // Find by ID
        let element = document.getElementById("title");

        // // Find first matching element
        // document.querySelector(".message");

        // // Find all matching elements
        // let messages = document.querySelectorAll(".message");
        // messages.forEach(function (message) { console.log('messages>>>', message) })

        // // Change text
        // element.textContent = "Hii";

        // // add HTML
        // let elementt = document.querySelector("box");
        // elementt.innerHTML = "<b>Hello</b>";

        // // Change CSS
        // element.style.color = "red";

        // Create element
        let para = document.createElement("p");
        para.textContent = 'Newly Created Element'
        document.body.appendChild(para);

        // Remove element
        para.remove();

        // Listen for event
        let btnElement = document.querySelector("button")
        btnElement.addEventListener("click", function () {
            btnElement.style.color = 'green'
            alert("Button Clicked")
        });

        let count = 0;
        let btnEle = document.getElementById('increment_btn')
        btnEle.addEventListener('click', function () {
            count = count + 1;
            document.getElementById('count_text').textContent=count
        })

    }, [])
    return (
        <div>
            <h1 id='title' style={{ color: "blue" }}>Helloo</h1>

            <p className='message'>one</p>
            <p className='message'>Two</p>
            <p className='message'>Three</p>

            <div id='box' className='box'></div>
            <button>Click Me</button>

            <p id='count_text'>0</p>
            <button id='increment_btn'>Increment</button>
        </div>
    )
}

export default DOMConcept