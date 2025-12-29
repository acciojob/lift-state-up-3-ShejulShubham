import React from "react";

export default function Child({ handleClick, childInfo }) {
  const { number, color } = childInfo;

  return (
    <div style={{ background: color }}>
      <h2>Child Component {number}</h2>
      <button onClick={()=>handleClick(number)}>Option {number}</button>
    </div>
  );
}
