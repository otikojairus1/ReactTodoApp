import { React, useState } from "react";
import Addtodo from "./Components/Addtodo";
import Todolist from "./Components/Todolist";
import Title from "./Components/Title";
import Titlename from "./Components/Titlename";

function App() {
  const [title, setTitle] = useState([
    {
      id: 1,
      title: "the river between",
      set: false,
    },
    {
      id: 2,
      title: "the whale rider",
      set: true,
    },
    {
      id: 3,
      title: "betrayal in the city",
      set: false,
    },
    {
      id: 3,
      title: "betrayal in the city",
      set: false,
    },
    {
      id: 3,
      title: "betrayal in the city",
      set: false,
    },
  ]);

  const [todo, setTodo] = useState([
    {
      id: 1,
      todo: "watch football",
      accomplished: false,
    },

    {
      id: 2,
      todo: "watch movies",
      accomplished: true,
    },

    {
      id: 3,
      todo: "read laravel documentation",
      accomplished: false,
    },
    {
      id: 4,
      todo: "read react documentation",
      accomplished: false,
    },
    {
      id: 5,
      todo: "go to class",
      accomplished: false,
    },
  ]);
  //passed in from the addtodo component
  const onSubmit = (value) => {
    const todoObject = [
      ...todo,
      {
        id: 5,
        todo: value,
        accomplished: true,
      },
    ];
    setTodo(todoObject);
    console.log(value);
  };

  return (
    <div className="container mt-5">
      <Addtodo submitprop={onSubmit} />
      {/* 
      {title.map(function (t) {
        return <h1>{t.title}</h1>;
      })} */}
      <Todolist todoprop={todo} />
    </div>
  );
}

export default App;
