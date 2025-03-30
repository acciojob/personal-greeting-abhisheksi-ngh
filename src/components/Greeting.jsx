import {useState} from "react";
import React from "react";

const Greeting = () => {
    const [name, setName]= useState("");

    return (

        <div>
            <h1>Enter your name:</h1>
            <input type="text" 
            value={name} onChange={(e) => setName(e.target.value)} />
             <h2>{name ? `Hello, ${name}!` : ""}</h2>

        </div>
    )
}
export default Greeting;