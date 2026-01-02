import { useState } from "react";

function TaskInput({ addWritten }) {
  const [write, setWrite] = useState("");

  const addTask = () => {
    addWritten(write);
    setWrite("");
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  }

  const Write = (e) => {
    setWrite(e.target.value);
  }

  return (
    <div>
      <input type="text" value={write} placeholder="Enter task" onChange={Write} style={{
        height: "40px",
        width: "300px",
        padding: "8px",
        fontSize: "14px"
      }}
        onKeyDown={handleEnterKey} />
      <button style={{
        border: "none",
        color: "white",
        backgroundColor: "green",
        marginLeft: "10px",
        height: "40px",
        cursor: "pointer"
      }} onClick={addTask}>Add Task</button>
    </div >
  );
}

export default TaskInput;
