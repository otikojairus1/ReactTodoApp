import React from "react";
import Todoitem from "./Todoitem";

function Todolist(prop) {
  const todoname = prop.todoprop.map((todo) => {
    return <Todoitem todo={todo} />;
  });

  return todoname;
}

export default Todolist;
