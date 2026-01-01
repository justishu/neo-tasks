import {useState} from "react";

function TaskInput({addWritten}) {
  const [write,setWrite]=useState("");

  const addTask=()=>{
    addWritten(write);
    setWrite("");
  };

  const handleEnterKey=(e)=>{
    if(e.key==="Enter"){
      addTask();
    }
  }
  
  const Write=(e)=>{
    setWrite(e.target.value);
  }

  return(
    <div>
      <input type="text" value={write} placeholder="Enter task" onChange={Write} onKeyDown={handleEnterKey} />
      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default TaskInput;
