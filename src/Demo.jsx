import React, { useEffect, useState } from 'react'

function Demo() {


    // Mount
    

    useEffect(() => {
        console.log("hello")

        fetch("https://63a00c7324d74f9fe82cc690.mockapi.io/users").then(() => {
            console.log("Fetch")
        })
    }, [])

    // If we put ruturn in the useEffect it only execute the function when the componenet is destroyed.

    useEffect(() => {
        return () => { 
            console.log("Destroy")
        }
    },[])

    // If you want a wrk to be done when the timer button is clicked, For that the timer should be need to put into the array.

    const [timer, setTimer] = useState(0)

    useEffect (() => {

        console.log("timer")

    },[timer])
    
    return (
        <div>
            <button onClick={() => setTimer(timer + 1)}>+</button>
            {timer}
            <button onClick={() => setTimer(timer - 1)}>-</button>

        </div>
    )
}

export default Demo