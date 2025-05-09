import React from "react";

function ToDoItem(props) {
  return (
    <li
      className="task"
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
