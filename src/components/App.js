import React, { useState } from "react";
import "./../styles/App.css";
import Child from "./Child";

const App = () => {
  const [selectedOption, setSelectOption] = useState("");

  function handleClick(number) {
    setSelectOption(`Option ${number}`);
  }

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <Child
        handleClick={handleClick}
        childInfo={{ number: 1, color: "orange" }}
      />
      <Child
        handleClick={handleClick}
        childInfo={{ number: 2, color: "yellow" }}
      />
      {/* Do not remove the main div */}
      <p>Selected Option : {selectedOption}</p>
    </div>
  );
};

export default App;
