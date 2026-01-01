function TaskItem({task,index,Toggle,Delete}){
  console.log(task);
  return (
    <div style={{ 
      marginTop: "10px",
      display:"flex",
      alignItems:"center",
      justifyContent:"center" }}>
      <input type="checkbox" checked={task.completed} onChange={() => Toggle(index)}/>
      <span
        onClick={() => Toggle(index)}
        style={{
          marginLeft: "10px",
          textDecoration: task.completed ? "line-through" : "none"
        }}
      >
        {task.task}</span>

      {task.completed && <p>completed</p>}

      <button onClick={() => Delete(index)} style={{marginLeft:"20px"}}>del</button>
    </div>
  );
}
export default TaskItem;
