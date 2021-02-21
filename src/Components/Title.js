import React from "react";

export default function Title(props) {
  return (
    <div mb-5>
      <h3>
        {props.titleprop}
      </h3>
      <input
        mb-5
        type="text"
        name="title"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
  );
}
