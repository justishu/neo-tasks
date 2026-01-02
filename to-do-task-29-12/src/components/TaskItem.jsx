function TaskItem({ task, index, Toggle, Delete }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "4px",
      marginTop: "5px"
    }}>
      <input type="checkbox" checked={task.completed} onChange={() => Toggle(index)}
        style={{
          accentColor: task.completed ? "green" : "black"
        }}
      />
      <span
        onClick={() => Toggle(index)}
        style={{
          marginLeft: "8px",
          cursor: "pointer",
          textDecoration: task.completed ? "line-through" : "none"
        }}
      >
        {task.task}
      </span>

      {task.completed && (
        <span style={{
          color: "green",
          marginLeft: "6px",
        }}>Completed</span>
      )}
      <button onClick={() => Delete(index)} style={{ marginLeft: "30px", fontSize: "15px", backgroundColor: "red", color: "white" }}>del</button>
    </div>
  );
}

export default TaskItem;
