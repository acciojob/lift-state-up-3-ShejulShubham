
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
   const[selectedOption,setSelectedOption]=useState('')
  return (
    <div className="parent" style={{backgroundColor:'green'}}>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
       <ChildComponent1  setSelectedOption={setSelectedOption} />
       <ChildComponent2 setSelectedOption={setSelectedOption} />
       <p>Selected Option:{selectedOption}</p>
    </div>
  )
}

export default App