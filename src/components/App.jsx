import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [tasks, setTasks] = useState([]);

  function addItem(inputText) {
    setTasks((prev) => [...prev, inputText]);
  }
  function deleteItem(id) {
    setTasks((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <h1>
        <span className="text">To-Do</span> List
      </h1>
      <InputArea onAdd={addItem} />
      <div className="items">
        <ul id="list">
          {tasks.map((task, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={task}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
