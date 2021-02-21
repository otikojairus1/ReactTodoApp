import React from "react";

export default function Titlename(props) {
  return (
    <div>
      <h1>{props.titleprop.title}</h1>
      <p>{props.testprop}</p>
    </div>
  );
}
