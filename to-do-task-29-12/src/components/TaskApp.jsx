import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function TaskApp() {
  const [tasks, setTasks] = useState([]);

  const addTask = (write) => {
    if (write === "") {
      return;
    }
    setTasks([...tasks,
    {
      task: write,
      completed: false
    }
    ]
    );
  }

  const toggleTask = (index) => {
    let newTask = [];
    for (let i = 0; i < tasks.length; i++) {
      if (i === index) {
        newTask.push({
          task: tasks[i].task,
          completed: !tasks[i].completed
        });
      } else {
        newTask.push(tasks[i]);
      }
    }
    setTasks(newTask);
  }


  const delTask = (index) => {
    let newTasks = [];
    for (let i = 0; i < tasks.length; i++) {
      if (i !== index) {
        newTasks.push(tasks[i]);
      }
    }
    setTasks(newTasks);
  }


  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        alignItems: "center"
      }}>

        <h3>To Do List</h3>

        <TaskInput addWritten={addTask} />

        <TaskList
          tasks={tasks}
          Toggle={toggleTask}
          Delete={delTask} />
      </div>
    </div>
  );
}

export default TaskApp;
