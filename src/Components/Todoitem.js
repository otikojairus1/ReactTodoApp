import React from "react";

function Todoitem(props) {
  return (
    <div>
      <li class="list-group-item list-group-item-primary">{props.todo.todo}</li>
    </div>
  );
}

export default Todoitem;
