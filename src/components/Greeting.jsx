import { useState } from "react";
import React from "react";

function Greeting() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;  

    if (/^[A-Za-b]*$/.test(newValue)) {  
      setName(newValue);  
    } else {
      setName("");  
    }
  };

  return (
    <div>
      <h1>Enter your name:</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange} 
      />
      <h2>{name ? `Hello, ${name}!` : ""}</h2>
    </div>
  );
}

export default Greeting;
