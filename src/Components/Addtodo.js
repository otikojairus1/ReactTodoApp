import { React, useState } from "react";

export default function Addtodo(props) {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.submitprop(todo);
  };

  const [todo, setTodo] = useState("");

  const onChangeHandler = (event) => {
    setTodo(event.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div class="mb-3">
          <h2>ENTER YOUR TODO</h2>
          <input
            type="text"
            value={todo}
            onChange={onChangeHandler}
            name="todo"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" class="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
}
