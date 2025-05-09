import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }
  return (
    <div className="wrapper">
      <input
        type="text"
        onChange={handleChange}
        value={inputText}
        id="tasks"
        placeholder="Enter your task"
      />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
        id="add"
      >
        Add
      </button>
    </div>
  );
}

export default InputArea;
