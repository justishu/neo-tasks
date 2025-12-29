import { useState,useEffect } from "react";
import "./TaskList.css";

function TaskList() {
  const [write, setWrite] = useState("");
  const [tasks, setTasks] = useState([]);
  const addTask = (e) => {
    
    setTasks([...tasks, write]);
    console.log(tasks);

    setWrite("");
    console.log(write);
  }
  useEffect(() => {
    const enterKey = (e) => {
      if (e.key === "Enter") {
        console.log("Enter key pressed");
        addTask();
      }
    }
    window.addEventListener("keydown", enterKey);
    return () => {
        console.log("clean");
        window.removeEventListener("keydown", enterKey);
    }
  }, [tasks, write]);

  
  const handleChange = (e) => setWrite(e.target.value);

  return (
    <div className="task-box">
      <input className="write-task" type="text" placeholder="Enter your task" value={write} required onChange={handleChange} />

      <button onClick={addTask}>Add Task</button>

      <div className="task-list">
        {tasks.map((t, index) => (
          <label key={index} className="task-item">
            <input className="task-checkbox" type="checkbox" />
            <p>{t}</p>
          </label>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
